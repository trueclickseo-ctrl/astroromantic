export interface AstrologyGuideItem {
  id: string;
  title: string;
  category: "vedic" | "western" | "reports";
  columnLabel: "Vedic" | "Western" | "Report Guides";
  slug: string;
  shortDesc: string;
  hasFullContent: boolean;
}

export const ASTROLOGY_GUIDES: AstrologyGuideItem[] = [
  // --- VEDIC ASTROLOGY (5) ---
  {
    id: "vedic-zodiac-signs",
    title: "Zodiac Signs",
    category: "vedic",
    columnLabel: "Vedic",
    slug: "/vedic/zodiac-signs",
    shortDesc: "The 12 Rashis, Moon signs, and sidereal constellation meanings.",
    hasFullContent: true,
  },
  {
    id: "vedic-planets",
    title: "Planets",
    category: "vedic",
    columnLabel: "Vedic",
    slug: "/vedic/planets",
    shortDesc: "The Navagraha planetary powers and cosmic energies.",
    hasFullContent: false,
  },
  {
    id: "vedic-houses",
    title: "Houses",
    category: "vedic",
    columnLabel: "Vedic",
    slug: "/vedic/houses",
    shortDesc: "The 12 Bhavas and life domain areas in Kundli astrology.",
    hasFullContent: false,
  },
  {
    id: "vedic-numerology",
    title: "Numerology",
    category: "vedic",
    columnLabel: "Vedic",
    slug: "/vedic/numerology",
    shortDesc: "Ank Jyotish number vibrations and planetary associations.",
    hasFullContent: false,
  },
  {
    id: "vedic-kp-astrology",
    title: "KP Astrology",
    category: "vedic",
    columnLabel: "Vedic",
    slug: "/vedic/kp-astrology",
    shortDesc: "Krishnamurti Padhdhati precision stellar sub-lord system.",
    hasFullContent: false,
  },

  // --- WESTERN ASTROLOGY (5) ---
  {
    id: "western-overview",
    title: "Overview",
    category: "western",
    columnLabel: "Western",
    slug: "/western/overview",
    shortDesc: "Fundamental principles of Western tropical sun-sign astrology.",
    hasFullContent: false,
  },
  {
    id: "western-zodiac-signs",
    title: "Zodiac Signs",
    category: "western",
    columnLabel: "Western",
    slug: "/western/zodiac-signs",
    shortDesc: "The 12 sun signs, elements, qualities, and seasonal dates.",
    hasFullContent: true,
  },
  {
    id: "western-planets",
    title: "Planets",
    category: "western",
    columnLabel: "Western",
    slug: "/western/planets",
    shortDesc: "Sun, Moon, and planetary Archetypes in modern Western charts.",
    hasFullContent: false,
  },
  {
    id: "western-houses",
    title: "Houses",
    category: "western",
    columnLabel: "Western",
    slug: "/western/houses",
    shortDesc: "The 12 astrological houses of personal life experience.",
    hasFullContent: false,
  },
  {
    id: "western-aspects",
    title: "Aspects",
    category: "western",
    columnLabel: "Western",
    slug: "/western/aspects",
    shortDesc: "Geometric angles, trines, squares, and planetary synastry.",
    hasFullContent: false,
  },

  // --- REPORT GUIDES (10) ---
  {
    id: "reports-life-insights",
    title: "Life Insights",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/life-insights",
    shortDesc: "Your complete Kundli chart overview covering Lagna, D9, and Dashas.",
    hasFullContent: true,
  },
  {
    id: "reports-dasha",
    title: "Dasha",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/dasha",
    shortDesc: "Vimshottari Dasha timeline guide for timing major life transitions.",
    hasFullContent: false,
  },
  {
    id: "reports-love-marriage",
    title: "Love & Marriage",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/love-marriage",
    shortDesc: "Kundli matching and marital compatibility report guide.",
    hasFullContent: false,
  },
  {
    id: "reports-saturn",
    title: "Saturn",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/saturn",
    shortDesc: "Sade Sati, Shani Dhaiya, and Saturn transit remedies.",
    hasFullContent: false,
  },
  {
    id: "reports-mangal-dosha",
    title: "Mangal Dosha",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/mangal-dosha",
    shortDesc: "3-chart Mars placement analysis, cancellations, and remedies.",
    hasFullContent: false,
  },
  {
    id: "reports-kalsarp-dosha",
    title: "Kalsarp Dosha",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/kalsarp-dosha",
    shortDesc: "Rahu-Ketu axis cordoning guide and Kundli remedies.",
    hasFullContent: false,
  },
  {
    id: "reports-pitra-dosha",
    title: "Pitra Dosha",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/pitra-dosha",
    shortDesc: "Ancestral Karma karmic debt analysis and peace rituals.",
    hasFullContent: false,
  },
  {
    id: "reports-raj-yoga",
    title: "Raj Yoga",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/raj-yoga",
    shortDesc: "Kendra-Trikona lord royal combinations for success and power.",
    hasFullContent: false,
  },
  {
    id: "reports-gemstone",
    title: "Gemstone",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/gemstone",
    shortDesc: "Anukul-Graha gemstone recommendations for chart activation.",
    hasFullContent: false,
  },
  {
    id: "reports-videsh-yoga",
    title: "Videsh Yoga",
    category: "reports",
    columnLabel: "Report Guides",
    slug: "/reports/videsh-yoga",
    shortDesc: "Foreign settlement and overseas travel indicators in birth chart.",
    hasFullContent: false,
  },
];

export const FOOTER_LINKS = [
  { title: "All Astrology Guides", slug: "/astrology-guides" },
  { title: "Blog", slug: "/blog" },
  { title: "Glossary", slug: "/glossary" },
];
