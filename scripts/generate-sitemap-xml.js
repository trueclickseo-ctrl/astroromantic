const fs = require('fs');
const path = require('path');

const SITE_URL = "https://astroromantic.com";
const currentDate = new Date().toISOString().split("T")[0];

// Dynamic imports / manual lists derived from codebase
const ZODIAC_SIGNS = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

// Core pages
const staticPages = [
  { url: `${SITE_URL}/`, freq: "daily", priority: "1.0" },
  { url: `${SITE_URL}/calculators/`, freq: "daily", priority: "0.95" },
  { url: `${SITE_URL}/astrology-guides/`, freq: "weekly", priority: "0.9" },
  { url: `${SITE_URL}/horoscope/`, freq: "daily", priority: "0.9" },
  { url: `${SITE_URL}/glossary/`, freq: "weekly", priority: "0.8" },
  { url: `${SITE_URL}/blog/`, freq: "weekly", priority: "0.8" },
  { url: `${SITE_URL}/about/`, freq: "monthly", priority: "0.5" },
  { url: `${SITE_URL}/contact/`, freq: "yearly", priority: "0.4" },
  { url: `${SITE_URL}/privacy-policy/`, freq: "yearly", priority: "0.3" },
  { url: `${SITE_URL}/terms/`, freq: "yearly", priority: "0.3" },
  { url: `${SITE_URL}/disclaimer/`, freq: "yearly", priority: "0.3" },
];

const standaloneCalculators = [
  { url: `${SITE_URL}/soulmate-calculator/`, freq: "weekly", priority: "0.9" },
  { url: `${SITE_URL}/life-path-calculator/`, freq: "weekly", priority: "0.9" },
  { url: `${SITE_URL}/destiny-number-calculator/`, freq: "weekly", priority: "0.9" },
  { url: `${SITE_URL}/love-calculator/`, freq: "weekly", priority: "0.9" },
  { url: `${SITE_URL}/chaldean-numerology-calculator/`, freq: "weekly", priority: "0.9" },
];

// Core calculator registry slugs (33)
const calculatorSlugs = [
  "moon-sign", "sun-sign", "nakshatra", "lagna", "navamsa-chart", "moon-phase",
  "mangal-dosha", "kaal-sarp-dosha", "sade-sati", "vimshottari-dasha", "pitra-dosha",
  "kundli-matching", "love-calculator", "atmakaraka-darakaraka", "ishta-devata",
  "kp-horary", "kp-sub-lord", "kp-ruling-planets", "gemstone-recommender",
  "rudraksha-recommender", "baby-name", "birth-panchang", "ayanamsa", "life-path",
  "name-numerology", "mobile-number", "vehicle-number", "house-number", "business-name",
  "personal-year", "lo-shu-grid", "numerology-love-compatibility", "name-correction"
];

// Category hubs (6)
const categoryHubs = [
  "numerology", "love", "couple-names", "wedding", "relationship", "ai-generators"
];

// Category tools (27)
const categoryTools = [
  "numerology/name-numerology-calculator",
  "numerology/soul-urge-number-calculator",
  "numerology/baby-name-numerology-calculator",
  "numerology/marriage-numerology-calculator",
  "numerology/lucky-number-calculator",
  "love/love-percentage-calculator",
  "love/zodiac-love-calculator",
  "love/relationship-compatibility-calculator",
  "love/marriage-compatibility-calculator",
  "couple-names/couple-name-combiner",
  "couple-names/ship-name-generator",
  "couple-names/nickname-generator",
  "couple-names/couple-hashtag-generator",
  "couple-names/couple-username-generator",
  "wedding/wedding-hashtag-generator",
  "wedding/wedding-date-numerology",
  "wedding/wedding-countdown",
  "wedding/wedding-budget",
  "relationship/anniversary-calculator",
  "relationship/relationship-duration",
  "relationship/love-language-quiz",
  "relationship/relationship-health-score",
  "ai-generators/love-letter-generator",
  "ai-generators/romantic-message-generator",
  "ai-generators/wedding-vow-generator",
  "ai-generators/anniversary-wish-generator",
  "ai-generators/proposal-speech-generator"
];

// Guide routes (20)
const guideRoutes = [
  "vedic/zodiac-signs", "vedic/planets", "vedic/houses", "vedic/numerology", "vedic/kp-astrology",
  "western/overview", "western/zodiac-signs", "western/planets", "western/houses", "western/aspects",
  "reports/life-insights", "reports/dasha", "reports/gemstone", "reports/mangal-dosha",
  "reports/kalsarp-dosha", "reports/pitra-dosha", "reports/love-marriage", "reports/raj-yoga",
  "reports/saturn", "reports/videsh-yoga"
];

function buildSitemapXml() {
  const urlMap = new Map();

  function addUrl(urlStr, freq = "weekly", priority = "0.8") {
    const formatted = urlStr.endsWith('/') ? urlStr : `${urlStr}/`;
    if (!urlMap.has(formatted)) {
      urlMap.set(formatted, { url: formatted, freq, priority });
    }
  }

  // 1. Static & Standalone
  staticPages.forEach(p => addUrl(p.url, p.freq, p.priority));
  standaloneCalculators.forEach(p => addUrl(p.url, p.freq, p.priority));

  // 2. Calculator Registry (/calculators/[slug]/)
  calculatorSlugs.forEach(slug => {
    let href = `${SITE_URL}/calculators/${slug}/`;
    if (slug === "life-path") href = `${SITE_URL}/life-path-calculator/`;
    if (slug === "name-numerology") href = `${SITE_URL}/destiny-number-calculator/`;
    addUrl(href, "weekly", "0.85");
  });

  // 3. Category Hubs & Tools
  categoryHubs.forEach(cat => addUrl(`${SITE_URL}/${cat}/`, "weekly", "0.85"));
  categoryTools.forEach(tool => addUrl(`${SITE_URL}/${tool}/`, "monthly", "0.8"));

  // 4. Horoscope Signs
  ZODIAC_SIGNS.forEach(sign => addUrl(`${SITE_URL}/horoscope/${sign}/`, "daily", "0.85"));

  // 5. Guides
  guideRoutes.forEach(g => addUrl(`${SITE_URL}/${g}/`, "weekly", "0.8"));

  // Generate XML string
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const item of urlMap.values()) {
    xml += `  <url><loc>${item.url}</loc><lastmod>${currentDate}</lastmod><changefreq>${item.freq}</changefreq><priority>${item.priority}</priority></url>\n`;
  }

  xml += `</urlset>\n`;

  return { xml, count: urlMap.size };
}

const { xml, count } = buildSitemapXml();

const publicSitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(publicSitemapPath, xml, 'utf8');
console.log(`✅ Generated public/sitemap.xml with ${count} canonical URLs.`);

const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`✅ Synced out/sitemap.xml with ${count} canonical URLs.`);
}
