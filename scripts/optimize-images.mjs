/**
 * One-off / occasional image optimiser for oversized assets in public/.
 *
 * Run:  node scripts/optimize-images.mjs
 *
 * Everything here is committed alongside the result, so re-running is safe but
 * pointless once the outputs are already small. Source images that are already
 * at or below the target size are skipped.
 */
import sharp from 'sharp'
import { stat, unlink, rename } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT = process.cwd()

/** @type {{in:string,out:string,width:number,format:'jpeg'|'webp'|'png',quality:number,deleteSource?:boolean}[]} */
const JOBS = [
  // Category hero thumbnails — shown at <=320px CSS, were 1024px @ ~700KB each.
  ...['angle-grinder', 'plate-compactor', 'pressure-washer', 'lawn-mower', 'concrete-saw', 'compressor'].map(
    (name) => ({
      in: `public/images/equipment/${name}.jpg`,
      out: `public/images/equipment/${name}.jpg`,
      width: 800,
      format: 'jpeg',
      quality: 74,
    }),
  ),
  // About photo — saved as a 2.4MB PNG, displayed at <=50vw. Convert to WebP.
  {
    in: 'public/images/about.png',
    out: 'public/images/about.webp',
    width: 1100,
    format: 'webp',
    quality: 80,
    deleteSource: true,
  },
  // Header/footer logo — 3168px wide PNG shown at <=128px CSS.
  {
    in: 'public/images/logo-mark.png',
    out: 'public/images/logo-mark.png',
    width: 400,
    format: 'png',
    quality: 82,
  },
]

let savedTotal = 0

for (const job of JOBS) {
  const src = path.join(ROOT, job.in)
  const dest = path.join(ROOT, job.out)
  if (!existsSync(src)) {
    console.warn(`skip  ${job.in} — not found`)
    continue
  }

  const before = (await stat(src)).size
  const meta = await sharp(src).metadata()

  // Idempotency guard: if the source is already no wider than the target and
  // already small, it has been optimised — don't recompress it (lossy formats
  // degrade a little on every re-encode).
  if (job.out === job.in && (meta.width ?? Infinity) <= job.width && before <= 150 * 1024) {
    console.log(`keep  ${job.in} — already ${(before / 1024).toFixed(0)}KB at ${meta.width}px`)
    continue
  }

  const pipeline = sharp(src).resize({ width: job.width, withoutEnlargement: true })

  if (job.format === 'jpeg') pipeline.jpeg({ quality: job.quality, mozjpeg: true })
  else if (job.format === 'webp') pipeline.webp({ quality: job.quality })
  else pipeline.png({ quality: job.quality, compressionLevel: 9, palette: true })

  const buf = await pipeline.toBuffer()

  if (job.out === job.in && buf.length >= before) {
    console.log(`keep  ${job.in} — already ${(before / 1024).toFixed(0)}KB, re-encode was larger`)
    continue
  }

  // Write to a sidecar then move into place — libvips can't write a file it is
  // still reading from on Windows.
  const tmp = dest + '.tmp'
  await sharp(buf).toFile(tmp)
  await rename(tmp, dest)
  const after = (await stat(dest)).size
  savedTotal += before - after
  console.log(
    `done  ${job.in} ${(before / 1024).toFixed(0)}KB -> ${job.out} ${(after / 1024).toFixed(0)}KB`,
  )

  if (job.deleteSource && job.out !== job.in) {
    await unlink(src)
    console.log(`      removed ${job.in}`)
  }
}

console.log(`\nTotal saved: ${(savedTotal / 1024 / 1024).toFixed(2)} MB`)
