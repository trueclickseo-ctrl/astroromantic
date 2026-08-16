import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { CALCULATORS_REGISTRY } from "@/lib/calculator-registry";
import { toolRegistry } from "@/lib/tool-registry";
import { ASTROLOGY_GUIDES } from "@/lib/astrology-guides-config";

const SITE_URL = "https://www.astroromantic.com";

const ZODIAC_SIGNS = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/calculators/`, lastModified: currentDate, changeFrequency: "daily", priority: 0.95 },
    { url: `${SITE_URL}/astrology-guides/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/horoscope/`, lastModified: currentDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/glossary/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about/`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact/`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/disclaimer/`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  // 2. Standalone Top-Level Calculators
  const standaloneCalculators: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/soulmate-calculator/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/life-path-calculator/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/destiny-number-calculator/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/love-calculator/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/chaldean-numerology-calculator/`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
  ];

  // 3. Calculators from CALCULATORS_REGISTRY (Single Source of Truth)
  const registryCalculators: MetadataRoute.Sitemap = Object.values(CALCULATORS_REGISTRY).map((calc) => {
    const rawHref = calc.customHref || `/calculators/${calc.slug}/`;
    const canonicalHref = rawHref.endsWith("/") ? rawHref : `${rawHref}/`;
    return {
      url: `${SITE_URL}${canonicalHref}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    };
  });

  // 4. Category Hubs & Category Tools from toolRegistry
  const categoryHubs = Array.from(new Set(Object.values(toolRegistry).map(t => t.category)));
  const categoryHubEntries: MetadataRoute.Sitemap = categoryHubs.map(cat => ({
    url: `${SITE_URL}/${cat}/`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const categoryToolEntries: MetadataRoute.Sitemap = Object.values(toolRegistry).map(tool => ({
    url: `${SITE_URL}/${tool.category}/${tool.toolSlug}/`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 5. Horoscope Sign Pages
  const horoscopeEntries: MetadataRoute.Sitemap = ZODIAC_SIGNS.map(sign => ({
    url: `${SITE_URL}/horoscope/${sign}/`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // 6. Astrology Guide Articles
  const guideEntries: MetadataRoute.Sitemap = ASTROLOGY_GUIDES.map(guide => ({
    url: `${SITE_URL}${guide.slug.endsWith("/") ? guide.slug : guide.slug + "/"}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Combine and deduplicate URLs by exact canonical string
  const allEntries = [
    ...staticPages,
    ...standaloneCalculators,
    ...registryCalculators,
    ...categoryHubEntries,
    ...categoryToolEntries,
    ...horoscopeEntries,
    ...guideEntries,
  ];

  const uniqueMap = new Map<string, MetadataRoute.Sitemap[0]>();
  for (const entry of allEntries) {
    if (!uniqueMap.has(entry.url)) {
      uniqueMap.set(entry.url, entry);
    }
  }

  return Array.from(uniqueMap.values());
}
