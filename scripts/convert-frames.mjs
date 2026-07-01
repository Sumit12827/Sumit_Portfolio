import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = path.join(__dirname, '..', 'public', 'sequence');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'sequence-webp');

async function convertFrames() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => f.endsWith('.png'))
    .sort();

  console.log(`Found ${files.length} PNG frames to convert...`);
  console.log(`Using WebP quality: 95 (near-lossless for crisp 4K-like detail)\n`);

  let totalOriginal = 0;
  let totalConverted = 0;

  for (let i = 0; i < files.length; i++) {
    const inputPath = path.join(INPUT_DIR, files[i]);
    const outputName = `frame_${i.toString().padStart(2, '0')}.webp`;
    const outputPath = path.join(OUTPUT_DIR, outputName);

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    await sharp(inputPath)
      .webp({ quality: 95, effort: 6, smartSubsample: false })
      .toFile(outputPath);

    const convertedSize = fs.statSync(outputPath).size;
    totalConverted += convertedSize;

    const reduction = ((1 - convertedSize / originalSize) * 100).toFixed(1);
    console.log(
      `  [${i + 1}/${files.length}] ${files[i]} → ${outputName} (${(originalSize / 1024).toFixed(0)}KB → ${(convertedSize / 1024).toFixed(0)}KB, -${reduction}%)`
    );
  }

  const totalReduction = ((1 - totalConverted / totalOriginal) * 100).toFixed(1);
  console.log(`\n✅ Done! Converted ${files.length} frames.`);
  console.log(
    `   Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalConverted / 1024 / 1024).toFixed(1)}MB (-${totalReduction}%)`
  );
}

convertFrames().catch(console.error);
