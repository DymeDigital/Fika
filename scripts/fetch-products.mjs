/**
 * Pulls the product catalogue from the Google Sheet, validates every row, and
 * writes lib/data/equipment.generated.json.
 *
 * Runs automatically before every `next build` (package.json "prebuild"), and
 * on demand via `npm run products:pull`.
 *
 * Environment (set in .env.local locally, GitHub Actions secrets in CI):
 *   SHEET_ID                 - the spreadsheet id from its URL
 *   GOOGLE_SHEETS_API_KEY    - Google Cloud API key restricted to Google Sheets API
 *   SHEET_RANGE              - optional, default "Products!A1:N2000"
 *
 * Behaviour:
 *   - Both env vars MISSING  -> skip the fetch, keep the committed JSON, exit 0.
 *     (lets `npm run dev` / a secret-less local build work offline)
 *   - Env vars PRESENT but fetch or validation fails -> print every problem,
 *     exit 1, leave the existing JSON untouched. The deploy step never runs.
 *
 * CI must guarantee the secrets are present (see .github/workflows/deploy.yml)
 * so a bad sheet edit can never silently fall back to the stale snapshot.
 */
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'lib/data/equipment.generated.json')
const PUBLIC_DIR = path.join(ROOT, 'public')

const SHEET_ID = process.env.SHEET_ID
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY
const RANGE = process.env.SHEET_RANGE || 'Products!A1:N2000'

const REQUIRED_COLUMNS = [
  'name',
  'category',
  'dailyRate',
  'shortDescription',
  'description',
  'image',
  'featured',
  'available',
]

const TRUE_SET = new Set(['true', 'yes', 'y', '1', 'x', '✓'])
const FALSE_SET = new Set(['false', 'no', 'n', '0', '', '-'])

// The `available` column accepts TRUE/FALSE-style values OR the availability
// words used by the Google Sheet dropdown (Inventory tracker template). Keys are
// compared lowercased + trimmed. "In stock" is the only status that shows the
// item on the site; every other listed status hides it. An unlisted value is a
// warning, not an error (see toAvailable) — a new dropdown option can never break
// the owner's publish, it just hides that item until the option is mapped here.
const AVAILABILITY = new Map([
  ['true', true],
  ['yes', true],
  ['y', true],
  ['1', true],
  ['x', true],
  ['✓', true],
  ['in stock', true],
  ['false', false],
  ['no', false],
  ['n', false],
  ['0', false],
  ['', false],
  ['-', false],
  ['temporarily unavailable', false],
  ['re-purchase needed', false],
  ['repurchase needed', false],
  ['sold out', false],
  ['out of stock', false],
])

class SheetError extends Error {}

function fail(errors) {
  console.error('\n✖  Product sheet rejected — the site was NOT rebuilt.\n')
  for (const e of errors) console.error('   - ' + e)
  console.error(
    `\n${errors.length} problem(s). Fix the Google Sheet and click Publish again.\n`,
  )
  // Set the exit code and unwind via the SheetError caught in main(); avoids a
  // hard process.exit() that races undici socket teardown on Windows/Node 24.
  process.exitCode = 1
  throw new SheetError()
}

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

function toNumber(v) {
  const cleaned = String(v ?? '').replace(/[R$€£\s,]/gi, '')
  return cleaned === '' ? NaN : Number(cleaned)
}

function toBool(v, ctx, errors) {
  const k = String(v ?? '').trim().toLowerCase()
  if (TRUE_SET.has(k)) return true
  if (FALSE_SET.has(k)) return false
  errors.push(`${ctx}: "${v}" is not TRUE or FALSE`)
  return false
}

// Availability: TRUE/FALSE-style value or a Sheet-dropdown status word (see
// AVAILABILITY). Unknown value -> warn and treat as NOT available, so the build
// still succeeds and the item is simply hidden until the status is mapped.
function toAvailable(v, ctx, warnings) {
  const k = String(v ?? '').trim().toLowerCase()
  if (AVAILABILITY.has(k)) return AVAILABILITY.get(k)
  warnings.push(
    `${ctx}: availability "${v}" is not a recognised status — item hidden. ` +
      `Add it to AVAILABILITY in scripts/fetch-products.mjs.`,
  )
  return false
}

// List columns (specifications, suitableFor, gallery) separate items with the
// pipe "|" — the documented key. A semicolon ";" is also accepted so specs
// pasted from a spec sheet ("Power: 5kVA; Fuel: Petrol") still split correctly.
// Commas are never separators — they are normal text inside a description.
const splitList = (v) =>
  !v
    ? []
    : String(v)
        .split(/[|;]/)
        .map((s) => s.trim())
        .filter(Boolean)

function parseSpecs(v, ctx, errors) {
  return splitList(v).map((pair) => {
    const i = pair.indexOf(':')
    if (i === -1) {
      errors.push(`${ctx}: spec "${pair}" must be written "Label: Value"`)
      return { label: pair, value: '' }
    }
    const label = pair.slice(0, i).trim()
    const value = pair.slice(i + 1).trim()
    if (!label || !value) {
      errors.push(`${ctx}: spec "${pair}" is missing a label or a value`)
    }
    return { label, value }
  })
}

async function main() {
  // SHEET_MOCK_FILE points at a local JSON file shaped like the Sheets API
  // response ({ "values": [[...header...], [...row...]] }). For tests only.
  const mockFile = process.env.SHEET_MOCK_FILE

  if (!mockFile && !SHEET_ID && !API_KEY) {
    console.log(
      'ℹ  SHEET_ID / GOOGLE_SHEETS_API_KEY not set — keeping the committed ' +
        'lib/data/equipment.generated.json (offline mode).',
    )
    return
  }
  if (!mockFile && (!SHEET_ID || !API_KEY)) {
    fail([
      'Both SHEET_ID and GOOGLE_SHEETS_API_KEY must be set (only one is present). ' +
        'Check .env.local / CI secrets.',
    ])
  }

  const categories = JSON.parse(
    await readFile(path.join(ROOT, 'lib/data/categories.json'), 'utf8'),
  )
  const categoryByName = new Map(categories.map((c) => [c.name.trim(), c]))

  let rows
  if (mockFile) {
    rows = JSON.parse(await readFile(path.resolve(ROOT, mockFile), 'utf8')).values || []
  } else {
    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}` +
      `/values/${encodeURIComponent(RANGE)}?key=${API_KEY}&majorDimension=ROWS`
    try {
      const res = await fetch(url)
      if (!res.ok) {
        const body = (await res.text()).slice(0, 300)
        fail([
          `Google Sheets API responded ${res.status}. ` +
            `Check the sheet is shared "Anyone with the link → Viewer" and the API key is valid.\n     ` +
            body,
        ])
      }
      rows = (await res.json()).values || []
    } catch (err) {
      if (err instanceof SheetError) throw err // already reported
      fail([`Could not reach Google Sheets: ${err.message}`])
    }
  }

  if (rows.length < 2) {
    fail(['The sheet needs a header row plus at least one product row.'])
  }

  const header = rows[0].map((h) => String(h).trim())
  const missing = REQUIRED_COLUMNS.filter((c) => !header.includes(c))
  if (missing.length) {
    fail([`The header row (row 1) is missing column(s): ${missing.join(', ')}`])
  }

  const idx = (name) => header.indexOf(name)
  const errors = []
  const warnings = []
  const seenSlug = new Map()
  const seenId = new Map()
  const products = []

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r]
    if (!row || !row.some((c) => String(c ?? '').trim() !== '')) continue // blank row
    const sheetRow = r + 1
    const get = (name) => {
      const i = idx(name)
      return i === -1 || row[i] == null ? '' : String(row[i]).trim()
    }

    const name = get('name')
    const ctx = `Row ${sheetRow}${name ? ` (${name})` : ''}`
    if (!name) {
      errors.push(`Row ${sheetRow}: "name" is empty`)
      continue
    }

    const slug = get('slug') || slugify(name)
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      errors.push(
        `${ctx}: slug "${slug}" must be lowercase letters, numbers and hyphens only`,
      )
    }
    if (seenSlug.has(slug)) {
      errors.push(`${ctx}: slug "${slug}" duplicates row ${seenSlug.get(slug)}`)
    }
    seenSlug.set(slug, sheetRow)

    const id = get('id') || slug
    if (seenId.has(id)) {
      errors.push(`${ctx}: id "${id}" duplicates row ${seenId.get(id)}`)
    }
    seenId.set(id, sheetRow)

    const categoryName = get('category')
    const category = categoryByName.get(categoryName)
    if (!category) {
      errors.push(
        `${ctx}: category "${categoryName}" is not one of: ${[...categoryByName.keys()].join(', ')}`,
      )
    }

    const dailyRate = toNumber(get('dailyRate'))
    if (!Number.isFinite(dailyRate) || dailyRate <= 0) {
      errors.push(`${ctx}: dailyRate "${get('dailyRate')}" is not a positive number`)
    }

    let weeklyRate
    const weeklyRaw = get('weeklyRate')
    if (weeklyRaw !== '') {
      weeklyRate = toNumber(weeklyRaw)
      if (!Number.isFinite(weeklyRate) || weeklyRate <= 0) {
        errors.push(`${ctx}: weeklyRate "${weeklyRaw}" is not a positive number`)
      }
    }

    const shortDescription = get('shortDescription')
    if (!shortDescription) errors.push(`${ctx}: shortDescription is empty`)
    else if (shortDescription.length > 200) {
      errors.push(
        `${ctx}: shortDescription is ${shortDescription.length} characters (max 200)`,
      )
    }

    const description = get('description')
    if (!description) errors.push(`${ctx}: description is empty`)

    const image = get('image')
    if (!image) {
      errors.push(`${ctx}: image is empty`)
    } else if (image.startsWith('/images/')) {
      if (!existsSync(path.join(PUBLIC_DIR, image))) {
        errors.push(`${ctx}: image file "public${image}" is not in the repo`)
      }
    } else if (/^https:\/\//i.test(image)) {
      if (!/^https:\/\/res\.cloudinary\.com\//i.test(image)) {
        warnings.push(
          `${ctx}: image URL is not a Cloudinary link — make sure it is permanent`,
        )
      }
    } else {
      errors.push(`${ctx}: image "${image}" must start with "/images/" or "https://"`)
    }

    const specifications = parseSpecs(get('specifications'), ctx, errors)
    const suitableFor = splitList(get('suitableFor'))
    const gallery = splitList(get('gallery'))
    for (const g of gallery) {
      if (!g.startsWith('/images/') && !/^https:\/\//i.test(g)) {
        errors.push(`${ctx}: gallery entry "${g}" must start with "/images/" or "https://"`)
      }
    }

    const featured = toBool(get('featured'), `${ctx} featured`, errors)
    const available = toAvailable(get('available'), ctx, warnings)

    products.push({
      id,
      name,
      slug,
      category: category ? category.name : categoryName,
      categorySlug: category ? category.slug : slugify(categoryName),
      dailyRate,
      ...(weeklyRate != null ? { weeklyRate } : {}),
      description,
      shortDescription,
      image,
      ...(gallery.length ? { gallery } : {}),
      specifications,
      suitableFor,
      featured,
      available,
    })
  }

  if (products.length === 0) errors.push('No valid product rows were found.')
  if (errors.length) fail(errors)

  for (const w of warnings) console.warn('   !  ' + w)

  await writeFile(OUT, JSON.stringify(products, null, 2) + '\n', 'utf8')
  console.log(
    `✔  Wrote ${products.length} products → ${path.relative(ROOT, OUT)}`,
  )
}

main().catch((err) => {
  if (err instanceof SheetError) return // already reported, exitCode set
  console.error('\n✖  Product sheet build failed unexpectedly:\n')
  console.error(err.stack || String(err))
  process.exitCode = 1
})
