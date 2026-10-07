import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Vector Neo-Brutalist SVG Favicon
// Base color: #FBE795 (Warm Butter Yellow)
// Contrast color: #111111 (Deep Black)
// Scalable 64x64 viewBox
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <!-- Neo-Brutalist Offset Hard Shadow -->
  <rect x="8" y="8" width="50" height="50" rx="12" fill="#111111" />
  
  <!-- Main Butter Yellow Tile with Solid Border -->
  <rect x="4" y="4" width="50" height="50" rx="12" fill="#FBE795" stroke="#111111" stroke-width="3.5" stroke-linejoin="round" />
  
  <!-- Geometric Neo-Brutalist 'M' Monogram -->
  <path d="M 16 43 L 16 17 L 24.5 17 L 29 27.5 L 33.5 17 L 42 17 L 42 43 L 35 43 L 35 25.5 L 31.2 34 L 26.8 34 L 23 25.5 L 23 43 Z" fill="#111111" />
</svg>`;

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write SVG
const svgPath = path.join(publicDir, 'favicon.svg');
fs.writeFileSync(svgPath, svgContent, 'utf8');
console.log('✓ Created public/favicon.svg');

// Multi-resolution ICO builder
function buildIco(buffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(buffers.length, 4); // Count

  let offset = 6 + 16 * buffers.length;
  const entries = [];

  for (const item of buffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image data size
    entry.writeUInt32LE(offset, 12); // Data offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...buffers.map(b => b.buffer)]);
}

async function run() {
  const svgBuffer = Buffer.from(svgContent);

  // 2. Apple Touch Icon (180x180)
  const appleTouchPath = path.join(publicDir, 'apple-touch-icon.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile(appleTouchPath);
  console.log('✓ Created public/apple-touch-icon.png (180x180)');

  // 3. PNG sizes for ICO and standalone links
  const b16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const b32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const b48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // Save standalone PNGs
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), b32);
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), b16);
  console.log('✓ Created public/favicon-32x32.png and public/favicon-16x16.png');

  // 4. Multi-resolution ICO
  const icoData = buildIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 }
  ]);
  const icoPath = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(icoPath, icoData);
  console.log('✓ Created public/favicon.ico (multi-resolution 16x16, 32x32, 48x48)');
}

run().catch(err => {
  console.error('Failed generating favicons:', err);
  process.exit(1);
});
