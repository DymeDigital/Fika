/**
 * THROWAWAY migration helper — run once, then delete.
 *
 * Reads the (original) hard-coded array out of lib/data/equipment.ts and emits:
 *   1. lib/data/equipment.generated.json  — the committed fallback / build output shape
 *   2. scripts/products.tsv               — paste straight into the Google Sheet
 *
 * Usage:  node scripts/dump-current-products.mjs
 *
 * It works by slicing the `[ ... ]` array literal out of the source file and
 * evaluating it. Safe here because the file is our own committed source. Run it
 * BEFORE lib/data/equipment.ts is rewritten to import the JSON.
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
// Defaults to the working copy; pass a path to read the pre-migration original,
// e.g.  node scripts/dump-current-products.mjs /tmp/equipment.original.ts
const SRC = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(ROOT, 'lib/data/equipment.ts')

const text = await readFile(SRC, 'utf8')

const startMarker = 'export const equipment: Equipment[] = '
const startIdx = text.indexOf(startMarker)
if (startIdx === -1) {
  console.error(
    'Could not find the equipment array. Has lib/data/equipment.ts already been migrated?',
  )
  process.exit(1)
}
const afterEquals = text.slice(startIdx + startMarker.length)
const endIdx = afterEquals.indexOf('\n]')
const arrayLiteral = afterEquals.slice(0, endIdx + 2) // include the closing "\n]"

// eslint-disable-next-line no-eval
const equipment = eval(`(${arrayLiteral})`)

// --- 1. JSON (only emit optional keys when present) -------------------------
const clean = equipment.map((e) => {
  const out = {
    id: e.id,
    name: e.name,
    slug: e.slug,
    category: e.category,
    categorySlug: e.categorySlug,
    dailyRate: e.dailyRate,
  }
  if (e.weeklyRate != null) out.weeklyRate = e.weeklyRate
  out.description = e.description
  out.shortDescription = e.shortDescription
  out.image = e.image
  if (Array.isArray(e.gallery) && e.gallery.length) out.gallery = e.gallery
  out.specifications = e.specifications ?? []
  out.suitableFor = e.suitableFor ?? []
  out.featured = !!e.featured
  out.available = !!e.available
  return out
})

await writeFile(
  path.join(ROOT, 'lib/data/equipment.generated.json'),
  JSON.stringify(clean, null, 2) + '\n',
  'utf8',
)

// --- 2. TSV for the Google Sheet ------------------------------------------
const HEADERS = [
  'id', 'name', 'slug', 'category', 'dailyRate', 'weeklyRate',
  'shortDescription', 'description', 'image', 'specifications',
  'suitableFor', 'gallery', 'featured', 'available',
]

const cell = (v) => String(v ?? '').replace(/\t/g, ' ').replace(/\r?\n/g, ' ').trim()

const rows = [HEADERS.join('\t')]
for (const e of equipment) {
  rows.push([
    cell(e.id),
    cell(e.name),
    cell(e.slug),
    cell(e.category),
    cell(e.dailyRate),
    e.weeklyRate != null ? cell(e.weeklyRate) : '',
    cell(e.shortDescription),
    cell(e.description),
    cell(e.image),
    (e.specifications ?? []).map((s) => `${s.label}: ${s.value}`).join(' | '),
    (e.suitableFor ?? []).join(' | '),
    (e.gallery ?? []).join(' | '),
    e.featured ? 'TRUE' : 'FALSE',
    e.available ? 'TRUE' : 'FALSE',
  ].join('\t'))
}

await writeFile(path.join(ROOT, 'scripts/products.tsv'), rows.join('\n') + '\n', 'utf8')

console.log(`Wrote ${clean.length} products to:`)
console.log('  lib/data/equipment.generated.json')
console.log('  scripts/products.tsv  (paste into the Google Sheet, cell A1)')
