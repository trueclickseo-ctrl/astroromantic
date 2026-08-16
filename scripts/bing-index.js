/**
 * Bing Webmaster URL Submission Script
 * 
 * Reads URLs from public/sitemap.xml and submits them to Bing
 * via the Webmaster URL Submission API for fast indexing.
 * 
 * Usage:  node scripts/bing-index.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ─── Configuration ──────────────────────────────────────────────────────────────
const BING_API_KEY = '6e3c1440e2bd49e6a8394ebd8eb8a89c';
const SITE_URL = 'https://www.astroromantic.com';
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
// ─────────────────────────────────────────────────────────────────────────────────

function extractUrlsFromSitemap(xml) {
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

function httpsRequest(options, payload) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', (c) => body += c);
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    }).on('error', reject);
  });
}

/** Check remaining daily quota */
async function getQuota() {
  return httpsGet(
    `https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=${encodeURIComponent(SITE_URL)}&apikey=${BING_API_KEY}`
  );
}

/** Submit a batch of URLs (max 500 per call, 10,000/day) */
async function submitBatch(urls) {
  const payload = JSON.stringify({ siteUrl: SITE_URL, urlList: urls });
  return httpsRequest({
    hostname: 'ssl.bing.com',
    path: '/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + BING_API_KEY,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  }, payload);
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║   Bing URL Submission — astroromantic.com           ║');
  console.log('╚══════════════════════════════════════════════════════╝\n');

  // 1. Read sitemap
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urls = extractUrlsFromSitemap(sitemapXml);
  console.log(`📄 Found ${urls.length} URLs in sitemap.xml\n`);

  // 2. Check quota
  console.log('📊 Checking daily submission quota...');
  try {
    const res = await getQuota();
    if (res.statusCode === 200) {
      const q = JSON.parse(res.body);
      console.log(`   Daily quota remaining: ${q.d.DailyQuota}`);
      console.log(`   Monthly quota remaining: ${q.d.MonthlyQuota}\n`);
    } else {
      console.log(`   ⚠️  HTTP ${res.statusCode}: ${res.body}\n`);
    }
  } catch (err) {
    console.log(`   ⚠️  ${err.message}\n`);
  }

  // 3. Submit respecting remaining daily quota (max 500 per batch)
  let quotaLimit = 500;
  try {
    const qRes = await getQuota();
    if (qRes.statusCode === 200) {
      const qData = JSON.parse(qRes.body);
      if (qData.d && qData.d.DailyQuota) {
        quotaLimit = qData.d.DailyQuota;
      }
    }
  } catch (e) {}

  const urlsToSubmit = urls.slice(0, quotaLimit);
  console.log(`🚀 Submitting top ${urlsToSubmit.length} URLs (Quota Limit: ${quotaLimit})...\n`);

  try {
    const res = await submitBatch(urlsToSubmit);
    if (res.statusCode === 200) {
      console.log(`   ✅ Successfully submitted ${urlsToSubmit.length} URLs to Bing!`);
    } else {
      console.log(`   ❌ HTTP ${res.statusCode}: ${res.body}`);
    }
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}`);
  }

  // 4. Summary
  console.log('\n══════════════════════════════════════════════════════');
  console.log('📋 URLs submitted:');
  urls.forEach((url, i) => {
    console.log(`   ${String(i + 1).padStart(2)}. ${url}`);
  });
  console.log('══════════════════════════════════════════════════════');
  console.log('\n✨ Done! Bing will crawl and index these URLs shortly.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
