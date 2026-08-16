/**
 * Automated Verification Script for AstroRomantic 33 Calculator Engine & Static Export Routes
 * Run with: node scripts/test-calculators.js
 */

const fs = require('fs');
const path = require('path');

console.log('╔═════════════════════════════════════════════════════════════════════════════╗');
console.log('║   AstroRomantic 33-Calculator Suite — Automated Verification Test           ║');
console.log('╚═════════════════════════════════════════════════════════════════════════════╝\n');

// 1. Verify all 33 Calculators in Registry
const registryPath = path.join(__dirname, '..', 'lib', 'calculator-registry.ts');
const registryContent = fs.readFileSync(registryPath, 'utf-8');

const requiredSlugs = [
  "moon-sign", "sun-sign", "nakshatra", "lagna", "navamsa-chart", "moon-phase",
  "mangal-dosha", "kaal-sarp-dosha", "sade-sati", "vimshottari-dasha", "pitra-dosha",
  "kundli-matching", "love-calculator", "atmakaraka-darakaraka", "ishta-devata",
  "kp-horary", "kp-sub-lord", "kp-ruling-planets", "gemstone-recommender", "rudraksha-recommender",
  "baby-name", "birth-panchang", "ayanamsa", "life-path", "name-numerology",
  "mobile-number", "vehicle-number", "house-number", "business-name", "personal-year",
  "lo-shu-grid", "numerology-love-compatibility", "name-correction"
];

console.log('🔍 Checking Calculator Slugs in Registry...');
let missingSlugs = 0;
requiredSlugs.forEach((slug, idx) => {
  if (registryContent.includes(`"${slug}":`)) {
    console.log(`  [${String(idx + 1).padStart(2, '0')}] ✅ ${slug}`);
  } else {
    console.log(`  [${String(idx + 1).padStart(2, '0')}] ❌ MISSING SLUG: ${slug}`);
    missingSlugs++;
  }
});

console.log(`\nRegistry Audit: ${requiredSlugs.length - missingSlugs}/${requiredSlugs.length} Slugs Verified.`);

// 2. Check Static Export Directory (out/calculators)
const outCalcDir = path.join(__dirname, '..', 'out', 'calculators');
console.log('\n🔍 Auditing Static Export Output Directory (out/calculators/)...');

let routePassCount = 0;

if (fs.existsSync(outCalcDir)) {
  const hubHtml = path.join(outCalcDir, 'index.html');
  if (fs.existsSync(hubHtml)) {
    console.log('  [Hub] ✅ /calculators/ index.html generated.');
    routePassCount++;
  } else {
    console.log('  [Hub] ❌ /calculators/ index.html NOT found.');
  }

  requiredSlugs.forEach((slug) => {
    const slugHtml = path.join(outCalcDir, slug, 'index.html');
    if (fs.existsSync(slugHtml)) {
      const content = fs.readFileSync(slugHtml, 'utf-8');
      const hasTitle = content.includes('<title>');
      const hasCanonical = content.includes(`rel="canonical" href="https://www.astroromantic.com/calculators/${slug}/"`);
      if (hasTitle && hasCanonical) {
        console.log(`  ✅ /calculators/${slug}/ (HTML + Canonical Verified)`);
        routePassCount++;
      } else {
        console.log(`  ⚠️ /calculators/${slug}/ exists but canonical missing.`);
      }
    } else {
      console.log(`  ❌ /calculators/${slug}/index.html NOT FOUND`);
    }
  });
} else {
  console.log('  ℹ️ Production build folder out/calculators not yet built. Will run full npm run build test next.');
}

// Summary
console.log('\n═════════════════════════════════════════════════════════════════════════════');
console.log(`✨ Verification Check Completed.`);
