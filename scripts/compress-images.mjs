// Run with: node scripts/compress-images.mjs
// Compresses all images in public/images/ and overwrites them

import sharp from "sharp"
import { readdirSync, statSync, readFileSync, writeFileSync } from "fs"
import { join, extname } from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, "..")
const imagesDir = join(projectRoot, "public", "images")

const files = readdirSync(imagesDir).filter((f) =>
  [".jpg", ".jpeg", ".png", ".webp"].includes(extname(f).toLowerCase())
)

console.log(`Found ${files.length} images to compress...\n`)

for (const file of files) {
  const filePath = join(imagesDir, file)
  const beforeSize = statSync(filePath).size

  const ext = extname(file).toLowerCase()
  const isJpeg = ext === ".jpg" || ext === ".jpeg"
  const isPng = ext === ".png"

  try {
    const inputBuffer = readFileSync(filePath)
    const image = sharp(inputBuffer)
    const meta = await image.metadata()

    // Cap max dimension at 2400px (more than enough for web)
    const maxDim = 2400
    const needsResize = meta.width > maxDim || meta.height > maxDim

    let pipeline = needsResize
      ? image.resize(maxDim, maxDim, { fit: "inside", withoutEnlargement: true })
      : image

    let outputBuffer
    if (isJpeg) {
      outputBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer()
    } else if (isPng) {
      outputBuffer = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
    } else {
      outputBuffer = await pipeline.webp({ quality: 82 }).toBuffer()
    }

    // Only overwrite if compressed size is smaller
    if (outputBuffer.length < beforeSize) {
      writeFileSync(filePath, outputBuffer)

      const afterSize = outputBuffer.length
      const saving = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1)
      console.log(
        `✓ ${file}: ${(beforeSize / 1024 / 1024).toFixed(1)}MB → ${(afterSize / 1024 / 1024).toFixed(1)}MB (${saving}% saved)`
      )
    } else {
      console.log(`  ${file}: already optimized, skipped`)
    }
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`)
  }
}

console.log("\nDone!")
