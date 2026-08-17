const fs = require('fs');
const path = require('path');

// 32x32 RGBA PNG icon payload encoded as raw Buffer
// Red/Indigo background with Rose heart & Gold sparkle
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="#1E1B4B"/>
  <rect x="2" y="2" width="60" height="60" rx="14" stroke="#FDE68A" stroke-width="2" stroke-opacity="0.6"/>
  <path d="M32 52 L14 32 C8 24 8 16 16 12 C24 8 30 14 32 18 C34 14 40 8 48 12 C56 16 56 24 50 32 Z" fill="#EE5265"/>
  <path d="M48 8 L49.5 14 L55.5 15.5 L49.5 17 L48 23 L46.5 17 L40.5 15.5 L46.5 14 Z" fill="#F5A623"/>
  <path d="M16 6 L17 10 L21 11 L17 12 L16 16 L15 12 L11 11 L15 10 Z" fill="#FDE68A" opacity="0.8"/>
</svg>`;

const publicIconPath = path.join(__dirname, '..', 'public', 'icon.svg');
const appIconPath = path.join(__dirname, '..', 'app', 'icon.svg');
fs.writeFileSync(publicIconPath, svgContent, 'utf8');
fs.writeFileSync(appIconPath, svgContent, 'utf8');

// Simple valid 16x16 / 32x32 ICO binary generator in Node.js
function createIcoFromPng(pngBuf) {
  const header = Buffer.alloc(22);
  // Reserved (2 bytes) = 0
  header.writeUInt16LE(0, 0);
  // Image type (2 bytes) = 1 (ICO)
  header.writeUInt16LE(1, 2);
  // Number of images (2 bytes) = 1
  header.writeUInt16LE(1, 4);
  // Width (1 byte) = 32
  header.writeUInt8(32, 6);
  // Height (1 byte) = 32
  header.writeUInt8(32, 7);
  // Color palette (1 byte) = 0
  header.writeUInt8(0, 8);
  // Reserved (1 byte) = 0
  header.writeUInt8(0, 9);
  // Color planes (2 bytes) = 1
  header.writeUInt16LE(1, 10);
  // Bits per pixel (2 bytes) = 32
  header.writeUInt16LE(32, 12);
  // Image data size (4 bytes)
  header.writeUInt32LE(pngBuf.length, 14);
  // Image data offset (4 bytes) = 22
  header.writeUInt32LE(22, 18);

  return Buffer.concat([header, pngBuf]);
}

// Generate valid 32x32 PNG Buffer using pure JS pixel math
const zlib = require('zlib');

function generate32x32Png() {
  const width = 32;
  const height = 32;
  const rawData = Buffer.alloc(height * (1 + width * 4));

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (1 + width * 4);
    rawData[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - 16;
      const dy = y - 16;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Heart / Star shape distance check
      const nx = (x - 16) / 14;
      const ny = (y - 14) / 14;
      const inHeart = (Math.pow(nx*nx + ny*ny - 1, 3) - nx*nx*ny*ny*ny) <= 0;

      if (inHeart) {
        // Deep Rose #EE5265
        rawData[pxOffset] = 238;     // R
        rawData[pxOffset + 1] = 82;  // G
        rawData[pxOffset + 2] = 101; // B
        rawData[pxOffset + 3] = 255; // A
      } else if (dist < 14) {
        // Dark Indigo #1E1B4B
        rawData[pxOffset] = 30;      // R
        rawData[pxOffset + 1] = 27;  // G
        rawData[pxOffset + 2] = 75;  // B
        rawData[pxOffset + 3] = 255; // A
      } else {
        // Transparent
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  
  // PNG Chunk writer helper
  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const crc = zlib.crc32(Buffer.concat([typeBuf, data]));
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(32, 0); // width
  ihdr.writeUInt32BE(32, 4); // height
  ihdr.writeUInt8(8, 8);     // bit depth
  ihdr.writeUInt8(6, 9);     // color type 6 (RGBA)
  ihdr.writeUInt8(0, 10);    // compression
  ihdr.writeUInt8(0, 11);    // filter
  ihdr.writeUInt8(0, 12);    // interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const pngBuffer = generate32x32Png();
const icoBuffer = createIcoFromPng(pngBuffer);

const favIcoPublic = path.join(__dirname, '..', 'public', 'favicon.ico');
const favPngPublic = path.join(__dirname, '..', 'public', 'favicon.png');
const appleIconPublic = path.join(__dirname, '..', 'public', 'apple-touch-icon.png');
const favIcoApp = path.join(__dirname, '..', 'app', 'favicon.ico');

fs.writeFileSync(favIcoPublic, icoBuffer);
fs.writeFileSync(favPngPublic, pngBuffer);
fs.writeFileSync(appleIconPublic, pngBuffer);
fs.writeFileSync(favIcoApp, icoBuffer);

console.log('✅ Generated public/favicon.ico, public/favicon.png, public/apple-touch-icon.png, app/favicon.ico');
