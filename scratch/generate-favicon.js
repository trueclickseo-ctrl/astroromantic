const fs = require('fs');
const path = require('path');

// 32x32 RGBA PNG icon payload encoded as raw Buffer
// Red/Indigo background with Rose heart & Gold sparkle
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#FFE4E6" stroke="#FDA4AF" stroke-width="2"/>
  <path d="M32 46 L18 32 C13 26 13 18 20 14 C27 10 31 16 32 19 C33 16 37 10 44 14 C51 18 51 26 46 32 Z" fill="#EE5265"/>
</svg>`;

const publicIconPath = path.join(__dirname, '..', 'public', 'icon.svg');
const appIconPath = path.join(__dirname, '..', 'app', 'icon.svg');
fs.writeFileSync(publicIconPath, svgContent, 'utf8');
fs.writeFileSync(appIconPath, svgContent, 'utf8');

// Simple valid 16x16 / 32x32 ICO binary generator in Node.js
function createIcoFromPng(pngBuf) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(pngBuf.length, 14);
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

      // Heart / Circle distance check
      const nx = (x - 16) / 7.5;
      const ny = (y - 14) / 7.5;
      const inHeart = (Math.pow(nx*nx + ny*ny - 1, 3) - nx*nx*ny*ny*ny) <= 0;

      if (inHeart) {
        // Vibrant Hot Pink Heart #EE5265
        rawData[pxOffset] = 238;     // R
        rawData[pxOffset + 1] = 82;  // G
        rawData[pxOffset + 2] = 101; // B
        rawData[pxOffset + 3] = 255; // A
      } else if (dist <= 15) {
        if (dist >= 14) {
          // Delicate Pink Border #FDA4AF
          rawData[pxOffset] = 253;     // R
          rawData[pxOffset + 1] = 164; // G
          rawData[pxOffset + 2] = 175; // B
          rawData[pxOffset + 3] = 255; // A
        } else {
          // Soft Pink Fill #FFE4E6
          rawData[pxOffset] = 255;     // R
          rawData[pxOffset + 1] = 228; // G
          rawData[pxOffset + 2] = 230; // B
          rawData[pxOffset + 3] = 255; // A
        }
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
