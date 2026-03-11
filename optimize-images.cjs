const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = path.join(__dirname, 'public', 'images');

// Image configs: [filename, width, quality]
// Width = max display width (based on how they're used in the site)
const images = [
  { file: 'hero.png',     width: 760,  quality: 78 }, // hero section, lg:block, h-[560px]
  { file: 'about.png',    width: 700,  quality: 78 }, // half-grid image, h-[420px]
  { file: 'profile.png',  width: 600,  quality: 78 }, // profile photo
  { file: 'content.png',  width: 600,  quality: 72 }, // preview card, h-52
  { file: 'coverage.png', width: 600,  quality: 72 }, // preview card, h-52
  { file: 'collab.png',   width: 560,  quality: 72 }, // CTA section, h-[280px]
  { file: 'events.png',   width: 800,  quality: 72 }, // events
  { file: 'lifestyle.png',width: 560,  quality: 72 }, // lifestyle
  { file: 'reels.png',    width: 560,  quality: 72 }, // reels
  { file: 'travel.png',   width: 560,  quality: 72 }, // travel
];

async function convertAll() {
  console.log('🚀 Starting image optimization...\n');
  let totalBefore = 0;
  let totalAfter = 0;

  for (const { file, width, quality } of images) {
    const input = path.join(imagesDir, file);
    const output = path.join(imagesDir, file.replace('.png', '.webp'));

    if (!fs.existsSync(input)) {
      console.log(`⚠️  Skipping ${file} (not found)`);
      continue;
    }

    const sizeBefore = fs.statSync(input).size;
    totalBefore += sizeBefore;

    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(output);

    const sizeAfter = fs.statSync(output).size;
    totalAfter += sizeAfter;

    const reduction = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(
      `✅ ${file.padEnd(16)} → ${file.replace('.png', '.webp').padEnd(16)} | ` +
      `${(sizeBefore / 1024 / 1024).toFixed(2)} MB → ${(sizeAfter / 1024).toFixed(0)} KB | ` +
      `-${reduction}%`
    );
  }

  console.log('\n' + '─'.repeat(70));
  console.log(
    `📦 TOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB | ` +
    `-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`
  );
  console.log('\n✨ Done! All images converted to WebP.');
}

convertAll().catch(console.error);
