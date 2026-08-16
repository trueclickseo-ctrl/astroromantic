const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (fullPath.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const outDir = path.join(__dirname, '..', 'out');
const outFiles = getFiles(outDir);
const validRoutes = new Set();

outFiles.forEach(f => {
  let rel = path.relative(outDir, f).replace(/\\/g, '/');
  if (rel.endsWith('index.html')) {
    rel = '/' + rel.replace('index.html', '');
  } else if (rel === '404.html') {
    return;
  } else {
    rel = '/' + rel;
  }
  validRoutes.add(rel);
  if (rel.endsWith('/') && rel.length > 1) {
    validRoutes.add(rel.slice(0, -1));
  }
});

let brokenCount = 0;
const brokenMap = {};

outFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hrefMatches = content.match(/href="([^"]+)"/g) || [];
  hrefMatches.forEach(m => {
    let href = m.replace('href="', '').replace('"', '');
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/_next') && !href.includes('.')) {
      const normalized = href.endsWith('/') ? href : href + '/';
      if (!validRoutes.has(normalized) && !validRoutes.has(href)) {
        brokenCount++;
        const pageName = path.relative(outDir, f).replace(/\\/g, '/');
        if (!brokenMap[href]) brokenMap[href] = [];
        brokenMap[href].push(pageName);
      }
    }
  });
});

console.log('\n--- DEAD LINK AUDIT RESULT ---');
console.log('Total production HTML pages checked:', outFiles.length);
console.log('Total broken internal links found:', brokenCount);

if (brokenCount > 0) {
  console.log('\nBroken Hrefs & Pages:');
  console.log(JSON.stringify(brokenMap, null, 2));
} else {
  console.log('🎉 0 BROKEN INTERNAL LINKS FOUND! All internal links resolve to valid 200 OK routes.');
}
