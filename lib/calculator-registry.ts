// Master Calculator Registry for AstroRomantic (33 Calculators)
// Contains metadata, SEO titles, descriptions, H1 headings, how-it-works steps, FAQs,
// educational articles, and contextual internal linking.

export interface CalculatorItem {
  slug: string;
  name: string;
  category: "Astrology" | "Dosha & Dasha" | "Compatibility" | "KP Astrology" | "Recommendations" | "Panchang & Tools" | "Numerology";
  categorySlug: string;
  iconName: string;
  shortDescription: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  howItWorks: { step: string; title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  educationalTitle: string;
  educationalBody: string[];
  relatedCalculators: { name: string; href: string }[];
  isPopular?: boolean;
}

export const CALCULATORS_REGISTRY: Record<string, CalculatorItem> = {
  // --- CATEGORY 1: ASTROLOGY CALCULATORS ---
  "moon-sign": {
    slug: "moon-sign",
    name: "Moon Sign Calculator",
    category: "Astrology",
    categorySlug: "astrology",
    iconName: "Moon",
    shortDescription: "Calculate your Moon sign (Rashi), Moon longitude, Nakshatra, and Pada from exact birth details.",
    seoTitle: "Moon Sign Calculator — Find Your Vedic Rashi & Nakshatra | AstroRomantic",
    metaDescription: "Calculate your accurate Moon Sign (Rashi), Nakshatra, Pada, and lunar longitude using precise Lahiri Ayanamsa Vedic astrology calculations.",
    h1: "Moon Sign (Rashi) Calculator",
    directAnswer: "Your Moon Sign (Rashi) represents your emotional core, subconscious instincts, and psychological mind in Vedic astrology. Unlike Western astrology which focuses on the Sun, Vedic astrology considers the Moon position at birth as the defining marker of your life path.",
    howItWorks: [
      { step: "1", title: "Enter Birth Date & Time", text: "Provide your exact birth date and birth time down to the minute for precise lunar degree calculations." },
      { step: "2", title: "Select Birth Place", text: "Choose your birth city to calculate topocentric coordinates and local sidereal time." },
      { step: "3", title: "Compute Sidereal Position", text: "The engine applies Lahiri Ayanamsa to derive your exact Rashi, Nakshatra, and Pada." }
    ],
    faqs: [
      { question: "Why is Moon Sign more important than Sun Sign in Vedic astrology?", answer: "The Moon completes a full orbit around Earth in 27.3 days, staying in each zodiac sign for only 2.25 days. Because it moves quickly, your Moon sign reflects your exact personal emotional temperament, whereas the Sun stays in a sign for an entire month." },
      { question: "What if I do not know my exact birth time?", answer: "Because the Moon moves approximately 13 degrees per day, an estimated time may still give the correct Rashi if the Moon didn't cross a sign boundary on your birth date. However, exact time is required for accurate Nakshatra and Pada." },
      { question: "What is Ayanamsa?", answer: "Ayanamsa is the angular distance between the Vernal Equinox (Tropical zodiac) and the fixed star Spica (Sidereal zodiac). AstroRomantic uses the standard Lahiri Ayanamsa." }
    ],
    educationalTitle: "Understanding How Your Moon Sign Is Calculated",
    educationalBody: [
      "In Vedic astrology (Jyotish), the Moon (Chandra) governs the mind (Manas), feelings, memory, and emotional responses. While Western astrology uses the Tropical zodiac based on seasons, Vedic astrology uses the Sidereal zodiac anchored to fixed constellations.",
      "To calculate your Moon Sign, your UTC birth time is converted into Julian Days. The astronomical longitude of the Moon is computed and corrected by subtracting the Lahiri Ayanamsa (approximately 23.85 degrees for recent years). The resulting sidereal longitude is divided into 12 equal 30-degree signs (Rashis) and 27 Nakshatras of 13°20' each."
    ],
    relatedCalculators: [
      { name: "Nakshatra Calculator", href: "/calculators/nakshatra/" },
      { name: "Birth Panchang", href: "/calculators/birth-panchang/" },
      { name: "Sade Sati Calculator", href: "/calculators/sade-sati/" },
      { name: "Kundli Matching", href: "/calculators/kundli-matching/" }
    ],
    isPopular: true
  },

  "sun-sign": {
    slug: "sun-sign",
    name: "Sun Sign Calculator",
    category: "Astrology",
    categorySlug: "astrology",
    iconName: "Sun",
    shortDescription: "Calculate your Sun sign, element, modality, ruling planet, and core identity traits.",
    seoTitle: "Sun Sign Calculator — Zodiac Sign, Element & Ruling Planet | AstroRomantic",
    metaDescription: "Find your exact Sun sign, ruling planet, zodiac element, and core personality traits with our free Sun Sign Calculator.",
    h1: "Sun Sign Calculator",
    directAnswer: "Your Sun Sign represents your core ego, vitality, outer personality, and basic drive in life. It is determined by the position of the Sun along the ecliptic on the day you were born.",
    howItWorks: [
      { step: "1", title: "Select Date of Birth", text: "Pick your day, month, and year of birth." },
      { step: "2", title: "Calculate Ecliptic Longitude", text: "The Sun's position is computed along the 12 zodiac sign boundaries." },
      { step: "3", title: "Get Zodiac Profile", text: "Discover your Sun sign, elemental affinity (Fire, Earth, Air, Water), and ruling planet." }
    ],
    faqs: [
      { question: "What is the difference between Sun Sign and Moon Sign?", answer: "Your Sun sign describes your conscious ego and outer identity, while your Moon sign reveals your subconscious emotions and inner world." },
      { question: "What does it mean to be on the cusp?", answer: "If you were born on the transition day between two signs, exact birth time determines your precise sign placement." }
    ],
    educationalTitle: "The Significance of Sun Signs",
    educationalBody: [
      "The Sun spends roughly 30 days in each zodiac sign as Earth orbits around it. In astrology, the Sun symbolizes vital energy, father figures, leadership, and fundamental purpose.",
      "The 12 Sun signs are categorized into four elements (Fire, Earth, Air, Water) and three modalities (Cardinal/Movable, Fixed, Mutable/Dual), providing a comprehensive framework for self-understanding."
    ],
    relatedCalculators: [
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" },
      { name: "Lagna / Ascendant Calculator", href: "/calculators/lagna/" },
      { name: "Life Path Calculator", href: "/calculators/life-path/" }
    ]
  },

  "nakshatra": {
    slug: "nakshatra",
    name: "Nakshatra Calculator",
    category: "Astrology",
    categorySlug: "astrology",
    iconName: "Star",
    shortDescription: "Calculate your birth Nakshatra (lunar mansion), Pada, planetary lord, and deity characteristics.",
    seoTitle: "Nakshatra Calculator — Birth Star & Pada Finder | AstroRomantic",
    metaDescription: "Calculate your birth Nakshatra, Pada, Nakshatra lord, and planetary characteristics using exact Vedic astronomical calculations.",
    h1: "Nakshatra (Birth Star) Calculator",
    directAnswer: "A Nakshatra is one of 27 lunar mansions in Vedic astrology. Each Nakshatra spans 13°20' of the ecliptic and is divided into 4 Padas of 3°20' each, revealing deep karmic blueprints.",
    howItWorks: [
      { step: "1", title: "Enter Birth Details", text: "Input birth date, exact time, and city." },
      { step: "2", title: "Compute Moon Longitude", text: "The Moon's sidereal degree is calculated." },
      { step: "3", title: "Map to 27 Mansions", text: "View your Nakshatra name, Pada (1-4), Nakshatra lord, and symbolic deity." }
    ],
    faqs: [
      { question: "How many Nakshatras exist in Vedic astrology?", answer: "There are 27 primary Nakshatras spanning the 360-degree zodiac, starting from Ashwini and ending at Revati." },
      { question: "What is a Pada?", answer: "Each Nakshatra is split into 4 equal parts called Padas (quarters) of 3°20' each, corresponding to the 9 divisional steps of a Navamsa." }
    ],
    educationalTitle: "The Power of Lunar Mansions",
    educationalBody: [
      "In ancient Vedic lore, the 27 Nakshatras are considered the daughters of King Daksha and the wives of the Moon. Your birth Nakshatra governs your mental tendencies, instincts, and the starting phase of your Vimshottari Dasha."
    ],
    relatedCalculators: [
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" },
      { name: "Vimshottari Dasha", href: "/calculators/vimshottari-dasha/" },
      { name: "Baby Name Suggestions", href: "/calculators/baby-name/" }
    ],
    isPopular: true
  },

  "lagna": {
    slug: "lagna",
    name: "Lagna / Ascendant Calculator",
    category: "Astrology",
    categorySlug: "astrology",
    iconName: "Compass",
    shortDescription: "Calculate your Lagna (Ascendant sign), degree, Lagna lord, and 12 house positions.",
    seoTitle: "Lagna Calculator — Ascendant Sign & House Cusps | AstroRomantic",
    metaDescription: "Calculate your rising sign (Lagna), Ascendant degree, Lagna lord, and 12 house cusps with precision Vedic topocentric math.",
    h1: "Lagna / Ascendant Calculator",
    directAnswer: "Your Lagna (Ascendant) is the zodiac sign rising on the eastern horizon at the exact moment of your birth. It sets up the 12 houses of your natal chart.",
    howItWorks: [
      { step: "1", title: "Provide Exact Time", text: "Birth time is critical because the Lagna changes sign approximately every 2 hours." },
      { step: "2", title: "Resolve Location Coordinates", text: "Latitude and longitude establish the local horizontal plane." },
      { step: "3", title: "Compute Ascendant Degree", text: "Get your exact Lagna sign, degree, and house chart." }
    ],
    faqs: [
      { question: "Why is birth time so important for Lagna?", answer: "Earth completes a 360-degree rotation in 24 hours, meaning all 12 signs pass through the horizon each day." }
    ],
    educationalTitle: "Why the Lagna Is the Anchor of Your Chart",
    educationalBody: [
      "The Lagna represents your physical body, health, temperament, and self-expression. In Vedic astrology, the Lagna lord is considered your most vital benefic planet."
    ],
    relatedCalculators: [
      { name: "Navamsa Chart Calculator", href: "/calculators/navamsa-chart/" },
      { name: "Mangal Dosha Calculator", href: "/calculators/mangal-dosha/" },
      { name: "Kundli Matching", href: "/calculators/kundli-matching/" }
    ]
  },

  "navamsa-chart": {
    slug: "navamsa-chart",
    name: "Navamsa / D9 Chart Calculator",
    category: "Astrology",
    categorySlug: "astrology",
    iconName: "Layers",
    shortDescription: "Generate your D9 Navamsa divisional chart positions for planets, Lagna, and marriage destiny.",
    seoTitle: "Navamsa Chart Calculator — D9 Chart & Planetary Placements | AstroRomantic",
    metaDescription: "Calculate your D9 Navamsa chart positions for all planets and Lagna to analyze marriage suitability and inner spiritual potential.",
    h1: "Navamsa (D9) Chart Calculator",
    directAnswer: "The Navamsa (D9) chart is the most vital divisional chart in Vedic astrology. It reveals inner soul strength, marital destiny, and planetary fruitfulness after age 30.",
    howItWorks: [
      { step: "1", title: "Input Natal Birth Data", text: "Enter birth date, exact time, and location." },
      { step: "2", title: "Divide Sign into 9 Parts", text: "Each 30° Rashi is split into 9 segments of 3°20'." },
      { step: "3", title: "Generate D9 Chart", text: "View planetary placements in the 9th harmonic chart." }
    ],
    faqs: [
      { question: "What does Vargottama mean?", answer: "If a planet occupies the exact same sign in both your Rashi (D1) chart and Navamsa (D9) chart, it is Vargottama, granting immense strength." }
    ],
    educationalTitle: "Understanding the Navamsa D9 Chart",
    educationalBody: [
      "While the Rashi chart (D1) represents the tree, the Navamsa chart (D9) represents its fruit. It is essential for evaluating marriage, spiritual evolution, and permanent strength of planets."
    ],
    relatedCalculators: [
      { name: "Lagna Calculator", href: "/calculators/lagna/" },
      { name: "Ishta Devata Calculator", href: "/calculators/ishta-devata/" },
      { name: "Kundli Matching", href: "/calculators/kundli-matching/" }
    ]
  },

  "moon-phase": {
    slug: "moon-phase",
    name: "Moon Phase Calculator",
    category: "Astrology",
    categorySlug: "astrology",
    iconName: "Sparkles",
    shortDescription: "Determine the exact Moon phase, illumination percentage, lunar age, and waxing/waning status for any date.",
    seoTitle: "Moon Phase Calculator — Illumination, Age & Lunar Phase | AstroRomantic",
    metaDescription: "Calculate lunar phase, Moon illumination percentage, age in days, and waxing or waning status for any birth date or event date.",
    h1: "Moon Phase Calculator",
    directAnswer: "The Moon phase indicates the illuminated fraction of the Moon visible from Earth, determined by the relative geometric positions of Earth, Moon, and Sun.",
    howItWorks: [
      { step: "1", title: "Select Date", text: "Choose any birth date or target celebration date." },
      { step: "2", title: "Compute Solar & Lunar Elongation", text: "The angular separation between Sun and Moon is calculated." },
      { step: "3", title: "Display Phase & Illumination", text: "See phase name (e.g. Full Moon, Waxing Crescent) and exact percentage." }
    ],
    faqs: [
      { question: "What are the 8 lunar phases?", answer: "New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Third Quarter, and Waning Crescent." }
    ],
    educationalTitle: "The Astronomical & Energetic Rhythms of Lunar Phases",
    educationalBody: [
      "The synodic lunar month averages 29.53 days. In astrology, people born during a Waxing Moon tend to be growth-oriented, while those born during a Waning Moon possess reflective wisdom."
    ],
    relatedCalculators: [
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" },
      { name: "Birth Panchang", href: "/calculators/birth-panchang/" }
    ]
  },

  // --- CATEGORY 2: DOSHA & DASHA ---
  "mangal-dosha": {
    slug: "mangal-dosha",
    name: "Mangal Dosha Calculator",
    category: "Dosha & Dasha",
    categorySlug: "dosha-dasha",
    iconName: "Flame",
    shortDescription: "Check for Manglik status, Mars house placement, traditional cancellation factors, and remedies.",
    seoTitle: "Mangal Dosha Calculator — Check Manglik Status & Mitigations | AstroRomantic",
    metaDescription: "Check your Manglik / non-Manglik status, Mars house placements from Lagna and Moon, traditional cancellation factors, and peaceful mitigations.",
    h1: "Mangal Dosha Calculator",
    directAnswer: "Mangal Dosha (Manglik) occurs when Mars is placed in the 1st, 4th, 7th, 8th, or 12th house from the Lagna or Moon in a birth chart.",
    howItWorks: [
      { step: "1", title: "Input Birth Details", text: "Enter date, time, and location to calculate Mars and Lagna longitudes." },
      { step: "2", title: "Assess House Placement", text: "Check Mars house position from Ascendant and Moon." },
      { step: "3", title: "Apply Mitigations", text: "Evaluate traditional cancellation rules (such as own sign, exaltation, or benefic aspects)." }
    ],
    faqs: [
      { question: "Is Mangal Dosha fatal for marriage?", answer: "No. Traditional Vedic texts outline numerous cancellation factors, and modern astrologers emphasize mutual understanding and planetary maturity over deterministic fear." }
    ],
    educationalTitle: "Demystifying Mangal Dosha",
    educationalBody: [
      "Mars represents energy, assertion, and passion. When positioned in houses of partnership (7th), home (4th), or longevity (8th), its intense heat requires conscious channelization."
    ],
    relatedCalculators: [
      { name: "Kundli Matching", href: "/calculators/kundli-matching/" },
      { name: "Sade Sati Calculator", href: "/calculators/sade-sati/" },
      { name: "Gemstone Recommender", href: "/calculators/gemstone-recommender/" }
    ],
    isPopular: true
  },

  "kaal-sarp-dosha": {
    slug: "kaal-sarp-dosha",
    name: "Kaal Sarp Dosha Calculator",
    category: "Dosha & Dasha",
    categorySlug: "dosha-dasha",
    iconName: "ShieldAlert",
    shortDescription: "Identify if all 7 planets are hemmed between Rahu and Ketu and discover which of the 12 Kaal Sarp types is present.",
    seoTitle: "Kaal Sarp Dosha Calculator — Find 12 Types & Remedies | AstroRomantic",
    metaDescription: "Check if Kaal Sarp Yoga is present in your chart, identify the exact type among 12 varieties, and read traditional guidance.",
    h1: "Kaal Sarp Dosha Calculator",
    directAnswer: "Kaal Sarp Dosha occurs when all seven classical planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) are positioned between the Rahu and Ketu shadow axis.",
    howItWorks: [
      { step: "1", title: "Compute Planetary Degrees", text: "Calculate sidereal longitudes for all 9 celestial bodies." },
      { step: "2", title: "Axis Alignment Check", text: "Verify whether all 7 planets sit on one side of Rahu-Ketu." },
      { step: "3", title: "Determine Type", text: "Identify the specific type (Anant, Kulik, Vasuki, etc.) based on Rahu's house." }
    ],
    faqs: [
      { question: "Does Kaal Sarp Yoga prevent success?", answer: "Many highly accomplished historic leaders had Kaal Sarp Yoga. It often creates early struggle followed by extraordinary achievement later in life." }
    ],
    educationalTitle: "The 12 Varieties of Kaal Sarp Yoga",
    educationalBody: [
      "Depending on Rahu's house position from 1st to 12th, Kaal Sarp Yoga manifests in different life areas such as health, finances, family, or career."
    ],
    relatedCalculators: [
      { name: "Mangal Dosha Calculator", href: "/calculators/mangal-dosha/" },
      { name: "Pitra Dosha Calculator", href: "/calculators/pitra-dosha/" }
    ]
  },

  "sade-sati": {
    slug: "sade-sati",
    name: "Sade Sati Calculator",
    category: "Dosha & Dasha",
    categorySlug: "dosha-dasha",
    iconName: "Clock",
    shortDescription: "Check your current Sade Sati phase, Saturn transit status, start/end dates, and traditional remedies.",
    seoTitle: "Sade Sati Calculator — Saturn Transit Status & Phases | AstroRomantic",
    metaDescription: "Calculate whether you are currently in Saturn's 7.5-year Sade Sati period, discover your exact phase, and view transit dates.",
    h1: "Sade Sati Calculator",
    directAnswer: "Sade Sati is the 7.5-year period during which Saturn transits the 12th, 1st, and 2nd houses from your natal Moon sign.",
    howItWorks: [
      { step: "1", title: "Find Natal Moon Sign", text: "Compute your sidereal Moon sign at birth." },
      { step: "2", title: "Track Saturn Position", text: "Compare Saturn's current astronomical position against your Moon sign." },
      { step: "3", title: "Calculate Phase", text: "Identify Phase 1 (Rising), Phase 2 (Peak), or Phase 3 (Setting)." }
    ],
    faqs: [
      { question: "How long does Sade Sati last?", answer: "Saturn stays in each zodiac sign for roughly 2.5 years. Transiting three consecutive signs takes approximately 7.5 years." }
    ],
    educationalTitle: "Navigating Saturn's Sade Sati",
    educationalBody: [
      "Saturn (Shani) acts as the taskmaster planet. Sade Sati is a period of intense discipline, restructuring, emotional maturity, and karmic refinement."
    ],
    relatedCalculators: [
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" },
      { name: "Vimshottari Dasha", href: "/calculators/vimshottari-dasha/" }
    ],
    isPopular: true
  },

  "vimshottari-dasha": {
    slug: "vimshottari-dasha",
    name: "Vimshottari Dasha Calculator",
    category: "Dosha & Dasha",
    categorySlug: "dosha-dasha",
    iconName: "Clock",
    shortDescription: "Generate your full 120-year Vimshottari Mahadasha timeline and remaining dasha balance at birth.",
    seoTitle: "Vimshottari Dasha Calculator — 120-Year Mahadasha Timeline | AstroRomantic",
    metaDescription: "Calculate your complete 120-year Vimshottari Dasha timeline, birth dasha balance, Mahadashas, and Antardashas based on Moon Nakshatra.",
    h1: "Vimshottari Dasha Calculator",
    directAnswer: "Vimshottari Dasha is a 120-year planetary period system in Vedic astrology. The sequence begins based on the exact Nakshatra of the Moon at birth.",
    howItWorks: [
      { step: "1", title: "Calculate Moon Longitude", text: "Find exact Moon degree in Nakshatra." },
      { step: "2", title: "Compute Dasha Balance", text: "Calculate remaining starting dasha years based on unelapsed Nakshatra arc." },
      { step: "3", title: "Build 120-Year Schedule", text: "Generate Mahadasha start and end dates in sequence." }
    ],
    faqs: [
      { question: "What is the order of Vimshottari Dasha?", answer: "Ketu (7y), Venus (20y), Sun (6y), Moon (10y), Mars (7y), Rahu (18y), Jupiter (16y), Saturn (19y), and Mercury (17y)." }
    ],
    educationalTitle: "The Timing of Life Events via Dasha Periods",
    educationalBody: [
      "In Vedic astrology, transits provide the weather, but Dasha periods provide the season. Your active Mahadasha planet dictates major life themes."
    ],
    relatedCalculators: [
      { name: "Nakshatra Calculator", href: "/calculators/nakshatra/" },
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" }
    ]
  },

  "pitra-dosha": {
    slug: "pitra-dosha",
    name: "Pitra Dosha Calculator",
    category: "Dosha & Dasha",
    categorySlug: "dosha-dasha",
    iconName: "ShieldAlert",
    shortDescription: "Check for Pitra Dosha indicators in the 9th house, Sun afflictions, and traditional ancestral peace remedies.",
    seoTitle: "Pitra Dosha Calculator — 9th House Afflictions & Remedies | AstroRomantic",
    metaDescription: "Assess traditional Pitra Dosha markers, Sun afflictions, 9th house planetary combinations, and traditional remedial advice.",
    h1: "Pitra Dosha Calculator",
    directAnswer: "Pitra Dosha in Vedic astrology indicates karmic debt associated with ancestors, traditionally linked to afflictions to the Sun or 9th house.",
    howItWorks: [
      { step: "1", title: "Analyze Sun & 9th House", text: "Evaluate Sun conjunctions with Rahu, Ketu, or Saturn." },
      { step: "2", title: "Check 9th House Lord", text: "Examine 9th house lord placement and aspects." },
      { step: "3", title: "Formulate Report", text: "View traditional explanations and peaceful remedies." }
    ],
    faqs: [
      { question: "What causes Pitra Dosha?", answer: "In traditional lore, it represents unresolved karmic responsibilities toward lineage, highlighted by Rahu or Saturn afflicting the 9th house of dharma." }
    ],
    educationalTitle: "Understanding Ancestral Harmony",
    educationalBody: [
      "Pitra Dosha is not a curse, but a call toward gratitude, charity, honoring ancestors, and fulfilling family duties."
    ],
    relatedCalculators: [
      { name: "Kaal Sarp Dosha", href: "/calculators/kaal-sarp-dosha/" },
      { name: "Ishta Devata Calculator", href: "/calculators/ishta-devata/" }
    ]
  },

  // --- CATEGORY 3: COMPATIBILITY & RELATIONSHIPS ---
  "kundli-matching": {
    slug: "kundli-matching",
    name: "Kundli Matching / Gun Milan",
    category: "Compatibility",
    categorySlug: "compatibility",
    iconName: "Heart",
    shortDescription: "Compare two birth charts the traditional way. Enter both birth details and get the full 8-Koota Guna Milan breakdown scored out of 36.",
    seoTitle: "Kundli Matching Calculator — Free Ashtakoota Gun Milan (36 Points) | AstroRomantic",
    metaDescription: "Compare two birth charts the traditional way. Enter both birth details and get the full 8-Koota Guna Milan breakdown — Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot and Nadi — scored out of 36.",
    h1: "Kundli Matching Calculator — Free Ashtakoota Gun Milan (36 Points)",
    directAnswer: "Kundli matching, also called Guna Milan or horoscope matching, is the Vedic method Hindu families have leaned on for centuries before agreeing to a marriage. It isn't about predicting love — it's about checking whether two people's natures, temperaments and life rhythms are likely to move in the same direction. The whole system rests on one thing: where the Moon sat in the sky at the exact moment each person was born. That position gives you a Nakshatra (birth star) and a Rashi (Moon sign), and from those two points, eight separate comparisons — the Ashtakoota — are run between the partners. Each comparison, or Koota, carries its own weight. Add them up and you get a score out of 36. Higher isn't automatically \"better\" in every case, and a lower number isn't automatically a red flag — which is exactly what the breakdown below is for.",
    howItWorks: [
      { step: "1", title: "Enter Person 1's birth details", text: "Date, time and place of birth, as close to exact as you have them. A wrong birth time is the single biggest reason a Kundli matching result comes out inaccurate — even 15–20 minutes can shift the Moon into a different Nakshatra." },
      { step: "2", title: "Enter Person 2's birth details", text: "Same three fields for the other partner. Nothing else is needed — no names, no extra forms." },
      { step: "3", title: "See the 8-Koota breakdown, not just a number", text: "The calculator works out both partners' Moon Nakshatra and Rashi, then runs all eight kootas — Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot and Nadi — and totals them into your Guna Milan score out of 36." }
    ],
    faqs: [
      { question: "What is a good Gun Milan score out of 36?", answer: "Below 18 is generally considered a difficult match by classical standards. 18–24 is average — workable, but it usually asks for more patience and communication. 25–32 is a good match, and 33–36 is considered rare and highly favourable. That said, most practising astrologers won't reject a match on score alone; they check whether specific doshas apply and whether recognised cancellations bring the pairing back into balance." },
      { question: "What is Nadi Dosha?", answer: "Nadi is the heaviest-weighted koota, worth 8 of the 36 points, and it's tied to health and genetic compatibility. When both partners fall in the same Nadi, it's flagged as Nadi Dosha — traditionally seen as a caution around progeny and long-term vitality. It isn't automatically disqualifying: several classical exceptions (same Rashi but different Nakshatra, or specific charan/pada combinations) can cancel it, which is why a full chart review matters more than the raw score." },
      { question: "Is Kundli matching only for arranged marriages, or does it apply to love marriages too?", answer: "It applies either way. The astrology doesn't check how two people met — it checks the same eight compatibility factors regardless. Many couples in love marriages still run a Guna Milan out of curiosity or to prepare for family conversations, not to seek permission." },
      { question: "Does a low Gun Milan score mean the marriage won't work?", answer: "No. A low score is a prompt to look closer, not a verdict. Strong planetary placements elsewhere in the chart, a supportive Dasha period, and Navamsa (D9) compatibility can all offset a modest Guna count. Think of the 36-point score as a first filter, not a final judgment." },
      { question: "Do I need the exact birth time for accurate results?", answer: "Yes, ideally. The whole calculation hinges on the Moon's exact position, and the Moon moves through roughly one Nakshatra every day. A birth certificate or hospital record is more reliable than a family estimate — if the time is uncertain, treat Yoni, Gana and Nadi results with a little more caution, since these are most sensitive to precise Moon placement." }
    ],
    educationalTitle: "The Science of Ashta-Koota Matching",
    educationalBody: [
      "Each of the eight kootas is checking something specific about a marriage, not just tallying arbitrary points:",
      "• Varna looks at spiritual and professional temperament — how naturally the two approach duty and work.",
      "• Vashya measures mutual influence — who tends to lead, who tends to adapt, and whether that balance feels natural rather than forced.",
      "• Tara compares birth stars for general luck and well-being as a couple.",
      "• Yoni speaks to physical and intimate compatibility, symbolised through animal pairings in classical texts.",
      "• Graha Maitri checks whether the planetary lords of both Moon signs are natural friends — this is often read as the \"psychological friendship\" score, the ease of just getting along day to day.",
      "• Gana matches temperament type (deva, manushya, rakshasa) — even keels versus intensity versus restlessness.",
      "• Bhakoot looks at the emotional and financial trajectory of the household as a unit.",
      "• Nadi, worth the most at 8 points, relates to health, vitality and progeny — which is why classical astrologers treat a Nadi mismatch (both partners sharing the same Nadi) more seriously than a low score anywhere else, though recognised cancellation rules (Nadi Dosha Parihar) can offset it.",
      "None of these are meant to be read in isolation. A pandit doing this by hand would also weigh Mangal Dosha (Manglik status), the 7th house, and sometimes the Navamsa (D9) chart before giving a final verdict — a single number never tells the whole story, and this calculator is built to show you the working, not just the answer."
    ],
    relatedCalculators: [
      { name: "Mangal Dosha Calculator", href: "/calculators/mangal-dosha/" },
      { name: "Love Calculator", href: "/calculators/love-calculator/" },
      { name: "Numerology Love Compatibility", href: "/calculators/numerology-love-compatibility/" }
    ],
    isPopular: true
  },

  "love-calculator": {
    slug: "love-calculator",
    name: "Love Calculator",
    category: "Compatibility",
    categorySlug: "compatibility",
    iconName: "Heart",
    shortDescription: "Calculate fun romantic compatibility percentages and affinity scores using names and birth dates.",
    seoTitle: "Love Calculator — Real Compatibility Percentage Test | AstroRomantic",
    metaDescription: "Test romantic affinity and fun compatibility score between two names with AstroRomantic's signature retro Love Calculator.",
    h1: "Love Compatibility Calculator",
    directAnswer: "The Love Calculator computes a romantic affinity percentage by combining name phonetic vibrations and birthday numerological frequencies.",
    howItWorks: [
      { step: "1", title: "Enter Partner 1 Name", text: "Provide your first name." },
      { step: "2", title: "Enter Partner 2 Name", text: "Provide your partner's first name." },
      { step: "3", title: "Calculate Affinity", text: "Get your instant percentage score and fun compatibility breakdown." }
    ],
    faqs: [
      { question: "Is this love calculator deterministic?", answer: "No, this tool is designed for entertainment and romantic compatibility exploration." }
    ],
    educationalTitle: "Exploring Phonetic & Relationship Frequencies",
    educationalBody: [
      "Names carry unique acoustic resonance. Our love calculator maps letter values to create fun, engaging compatibility reports."
    ],
    relatedCalculators: [
      { name: "Kundli Matching", href: "/calculators/kundli-matching/" },
      { name: "Numerology Love Compatibility", href: "/calculators/numerology-love-compatibility/" }
    ],
    isPopular: true
  },

  "atmakaraka-darakaraka": {
    slug: "atmakaraka-darakaraka",
    name: "Atmakaraka & Darakaraka Calculator",
    category: "Compatibility",
    categorySlug: "compatibility",
    iconName: "User",
    shortDescription: "Find your Atmakaraka (Soul planet) and Darakaraka (Spouse planet) degrees according to Jaimini astrology.",
    seoTitle: "Atmakaraka & Darakaraka Calculator — Jaimini Karakas | AstroRomantic",
    metaDescription: "Calculate your Atmakaraka (soul planet) and Darakaraka (spouse indicator) degrees using authentic Jaimini Vedic astrology.",
    h1: "Atmakaraka & Darakaraka Calculator",
    directAnswer: "In Jaimini astrology, the planet with the highest longitude in any sign is your Atmakaraka (Soul planet), while the planet with the lowest degree is your Darakaraka (Spouse planet).",
    howItWorks: [
      { step: "1", title: "Input Birth Chart Data", text: "Compute exact planetary degrees within signs." },
      { step: "2", title: "Rank 7 Planets", text: "Order Sun through Saturn by degree in sign." },
      { step: "3", title: "Identify Soul & Partner Planets", text: "Reveal your Atmakaraka and Darakaraka." }
    ],
    faqs: [
      { question: "Why is Rahu excluded in 7-Karaka Jaimini scheme?", answer: "The 7-Karaka scheme uses the 7 visible planets. Rahu and Ketu are node intersections, though some traditions include Rahu in an 8-Karaka scheme." }
    ],
    educationalTitle: "Soul Purpose & Relationship Indicators in Jaimini Astrology",
    educationalBody: [
      "Atmakaraka reveals the core spiritual lesson your soul came to master, while Darakaraka reveals the personality traits of your ideal life partner."
    ],
    relatedCalculators: [
      { name: "Ishta Devata Calculator", href: "/calculators/ishta-devata/" },
      { name: "Navamsa Chart Calculator", href: "/calculators/navamsa-chart/" }
    ]
  },

  "ishta-devata": {
    slug: "ishta-devata",
    name: "Ishta Devata Calculator",
    category: "Compatibility",
    categorySlug: "compatibility",
    iconName: "Sparkles",
    shortDescription: "Discover your calculated Ishta Devata based on 12th house from Karakamsa in D9 Navamsa.",
    seoTitle: "Ishta Devata Calculator — Find Your Divine Guardian | AstroRomantic",
    metaDescription: "Calculate your traditional Ishta Devata based on your Karakamsa (Atmakaraka in Navamsa D9) using authentic Vedic rules.",
    h1: "Ishta Devata Calculator",
    directAnswer: "Your Ishta Devata is your personal divine guide for spiritual liberation, traditionally calculated from the 12th house from Karakamsa in your Navamsa (D9) chart.",
    howItWorks: [
      { step: "1", title: "Find Atmakaraka", text: "Identify planet with highest degree in birth chart." },
      { step: "2", title: "Locate in Navamsa", text: "Determine the sign occupied by Atmakaraka in D9 (Karakamsa)." },
      { step: "3", title: "Analyze 12th House Ruler", text: "Map 12th house sign ruler from Karakamsa to its divine form." }
    ],
    faqs: [
      { question: "What is Karakamsa?", answer: "Karakamsa is the sign occupied by your Atmakaraka (soul planet) in your Navamsa (D9) chart." }
    ],
    educationalTitle: "Spiritual Guidance Through Jaimini Astrology",
    educationalBody: [
      "Connecting with your Ishta Devata brings peace of mind, removes spiritual obstacles, and aligns your life with higher purpose."
    ],
    relatedCalculators: [
      { name: "Atmakaraka & Darakaraka", href: "/calculators/atmakaraka-darakaraka/" },
      { name: "Navamsa Chart Calculator", href: "/calculators/navamsa-chart/" }
    ]
  },

  // --- CATEGORY 4: KP ASTROLOGY ---
  "kp-horary": {
    slug: "kp-horary",
    name: "KP Horary Number Calculator",
    category: "KP Astrology",
    categorySlug: "kp-astrology",
    iconName: "Compass",
    shortDescription: "Look up KP Horary numbers (1 to 249) to resolve Sign Lord, Star Lord, and Sub Lord subdivisions.",
    seoTitle: "KP Horary Number Calculator (1-249 Table) | AstroRomantic",
    metaDescription: "Calculate KP Horary numbers between 1 and 249 to find exact Sign Lord, Star Lord, and Sub-Lord subdivisions in Krishnamurti Padhdhati.",
    h1: "KP Horary Number Calculator",
    directAnswer: "In KP (Krishnamurti Padhdhati) astrology, numbers from 1 to 249 divide the 360-degree zodiac into precise unequal sub-lord segments based on Vimshottari Dasha proportions.",
    howItWorks: [
      { step: "1", title: "Select Horary Number", text: "Choose a seed number between 1 and 249." },
      { step: "2", title: "Lookup Zodiac Span", text: "Find the exact starting and ending zodiac degree." },
      { step: "3", title: "Reveal Sub-Lord Chain", text: "Get Sign Lord, Star Lord (Nakshatra Lord), and Sub Lord." }
    ],
    faqs: [
      { question: "Why are there exactly 249 sub-lords?", answer: "There are 27 Nakshatras. Dividing each Nakshatra into 9 sub-lords yields 243 subdivisions, but 6 sub-lords cross sign boundaries, bringing the total to 249." }
    ],
    educationalTitle: "The Precision of Krishnamurti Padhdhati",
    educationalBody: [
      "KP astrology was formulated by Prof. K.S. Krishnamurti. It emphasizes the Sub-Lord as the ultimate decider of whether a planet delivers positive or negative results."
    ],
    relatedCalculators: [
      { name: "KP Sub-Lord Finder", href: "/calculators/kp-sub-lord/" },
      { name: "KP Ruling Planets", href: "/calculators/kp-ruling-planets/" }
    ]
  },

  "kp-sub-lord": {
    slug: "kp-sub-lord",
    name: "KP Sub-Lord Finder",
    category: "KP Astrology",
    categorySlug: "kp-astrology",
    iconName: "Compass",
    shortDescription: "Calculate the Star Lord and Sub-Lord for any planet longitude or birth chart point.",
    seoTitle: "KP Sub-Lord Finder — Calculate Planet Sub-Lords | AstroRomantic",
    metaDescription: "Find the Sign Lord, Star Lord, and Sub Lord for any planetary longitude using standard KP (Krishnamurti Padhdhati) rules.",
    h1: "KP Sub-Lord Finder",
    directAnswer: "The KP Sub-Lord Finder analyzes planetary degree position to determine its Sign Lord, Star Lord (Nakshatra), and Sub-Lord according to KP Astrology.",
    howItWorks: [
      { step: "1", title: "Enter Planet Degree", text: "Input zodiac sign and exact degree." },
      { step: "2", title: "Compute KP Subdivision", text: "Calculate Nakshatra arc and sub-lord fraction." },
      { step: "3", title: "Display Lords", text: "View Sign Lord, Star Lord, and Sub Lord." }
    ],
    faqs: [
      { question: "Who decides the outcome in KP Astrology?", answer: "In KP rules: The Planet represents the source, the Star Lord indicates the quality, and the Sub-Lord decides the ultimate outcome." }
    ],
    educationalTitle: "Sub-Lord Precision in Predictions",
    educationalBody: [
      "By refining degree divisions down to minutes of arc, KP sub-lords provide exceptional clarity for event timing."
    ],
    relatedCalculators: [
      { name: "KP Horary Calculator", href: "/calculators/kp-horary/" },
      { name: "KP Ruling Planets", href: "/calculators/kp-ruling-planets/" }
    ]
  },

  "kp-ruling-planets": {
    slug: "kp-ruling-planets",
    name: "KP Ruling Planets Calculator",
    category: "KP Astrology",
    categorySlug: "kp-astrology",
    iconName: "Compass",
    shortDescription: "Calculate KP Ruling Planets (Day Lord, Moon Sign/Star Lord, Ascendant Sign/Star Lord) for horary questions.",
    seoTitle: "KP Ruling Planets Calculator — Dynamic RP Table | AstroRomantic",
    metaDescription: "Calculate KP Ruling Planets for the present moment or birth time: Day Lord, Moon Sign/Star Lord, and Lagna Sign/Star Lord.",
    h1: "KP Ruling Planets Calculator",
    directAnswer: "KP Ruling Planets (RP) are the planets ruling the exact moment a question or chart is analyzed: Day Lord, Moon Sign Lord, Moon Star Lord, Lagna Sign Lord, and Lagna Star Lord.",
    howItWorks: [
      { step: "1", title: "Select Moment/Location", text: "Use current time or birth time." },
      { step: "2", title: "Calculate Ascendant & Moon", text: "Compute instantaneous Lagna and Moon degree." },
      { step: "3", title: "Generate RP Table", text: "Display the 5 core Ruling Planets." }
    ],
    faqs: [
      { question: "What are Ruling Planets used for in KP?", answer: "RPs are used to verify rectifications, clarify horary timing, and confirm house significators." }
    ],
    educationalTitle: "The Magic of KP Ruling Planets",
    educationalBody: [
      "KP Ruling Planets act as cosmic divine clocks, reflecting divine synchronization between the mind of the seeker and planetary positions."
    ],
    relatedCalculators: [
      { name: "KP Horary Calculator", href: "/calculators/kp-horary/" },
      { name: "KP Sub-Lord Finder", href: "/calculators/kp-sub-lord/" }
    ]
  },

  // --- CATEGORY 5: RECOMMENDATIONS ---
  "gemstone-recommender": {
    slug: "gemstone-recommender",
    name: "Gemstone Recommender",
    category: "Recommendations",
    categorySlug: "recommendations",
    iconName: "Gem",
    shortDescription: "Discover traditional gemstone recommendations (Life Stone, Lucky Stone, Fortune Stone) based on your Lagna lord.",
    seoTitle: "Gemstone Recommender — Life, Lucky & Fortune Stones | AstroRomantic",
    metaDescription: "Discover your traditional Vedic gemstone recommendations (Life Stone, Lucky Stone, Fortune Stone) based on your Ascendant lord and 5th/9th lords.",
    h1: "Gemstone Recommender",
    directAnswer: "In Vedic astrology, gemstones strengthen benefic planets. Your Life Stone corresponds to your Lagna lord, Lucky Stone to your 5th lord, and Fortune Stone to your 9th lord.",
    howItWorks: [
      { step: "1", title: "Input Birth Details", text: "Compute Lagna, 5th, and 9th house lords." },
      { step: "2", title: "Match Benefic Gems", text: "Map lords to Ruby, Pearl, Coral, Emerald, Yellow Sapphire, Diamond, or Blue Sapphire." },
      { step: "3", title: "View Wearing Rules", text: "See traditional metal, finger, and day guidelines (informational/traditional purposes)." }
    ],
    faqs: [
      { question: "Should I wear gemstones for malefic planets?", answer: "Traditional Vedic practice advises wearing gemstones only for functional benefic planets (1st, 5th, 9th lords) to enhance positive energy." }
    ],
    educationalTitle: "Traditional Vedic Gemology (Ratna Vigyan)",
    educationalBody: [
      "Gemstones act as optical light filters, refracting planetary light rays into the body's subtle energy channels (nadis)."
    ],
    relatedCalculators: [
      { name: "Lagna Calculator", href: "/calculators/lagna/" },
      { name: "Rudraksha Recommender", href: "/calculators/rudraksha-recommender/" }
    ]
  },

  "rudraksha-recommender": {
    slug: "rudraksha-recommender",
    name: "Rudraksha Recommender",
    category: "Recommendations",
    categorySlug: "recommendations",
    iconName: "ShieldCheck",
    shortDescription: "Find your traditional Rudraksha recommendation (1 to 14 Mukhi) based on birth chart planetary lords.",
    seoTitle: "Rudraksha Recommender — Find Your Mukhi Bead | AstroRomantic",
    metaDescription: "Calculate your recommended Mukhi Rudraksha bead (1-14 Mukhi) based on birth chart planetary lords and Nakshatra for spiritual harmony.",
    h1: "Rudraksha Recommender",
    directAnswer: "Rudraksha beads are sacred seeds associated with Lord Shiva. Different Mukhi (faced) beads align with specific planets to harmonize physical and mental energies.",
    howItWorks: [
      { step: "1", title: "Input Birth Details", text: "Analyze Moon Nakshatra and weak planetary lords." },
      { step: "2", title: "Select Mukhi Bead", text: "Match with 1 to 14 Mukhi Rudraksha." },
      { step: "3", title: "View Guidance", text: "Read traditional spiritual benefits and wearing guidelines." }
    ],
    faqs: [
      { question: "What does Mukhi mean?", answer: "Mukhi refers to the natural cleft line divisions visible on the surface of a Rudraksha bead." }
    ],
    educationalTitle: "The Spiritual Science of Rudraksha Beads",
    educationalBody: [
      "Rudraksha seeds carry electromagnetic properties that calm the heart rhythm, reduce stress, and balance planetary vibrations."
    ],
    relatedCalculators: [
      { name: "Gemstone Recommender", href: "/calculators/gemstone-recommender/" },
      { name: "Ishta Devata Calculator", href: "/calculators/ishta-devata/" }
    ]
  },

  // --- CATEGORY 6: PANCHANG & OTHER ASTROLOGY TOOLS ---
  "baby-name": {
    slug: "baby-name",
    name: "Baby Name Suggestions",
    category: "Panchang & Tools",
    categorySlug: "panchang-tools",
    iconName: "Sparkles",
    shortDescription: "Calculate recommended baby name starting letters (Aksharas) based on birth Nakshatra and Pada.",
    seoTitle: "Baby Name Calculator — Nakshatra & Pada Letter Suggestions | AstroRomantic",
    metaDescription: "Find auspicious baby name starting letters (Aksharas), Nakshatra Pada logic, and meaningful name suggestions based on birth date and time.",
    h1: "Baby Name Nakshatra Calculator",
    directAnswer: "In Vedic tradition (Nama Karan), a baby is named using starting sounds (Aksharas) derived from the exact Nakshatra and Pada of the Moon at birth.",
    howItWorks: [
      { step: "1", title: "Input Baby Birth Time", text: "Enter date, exact time, and birth city." },
      { step: "2", title: "Calculate Nakshatra & Pada", text: "Find exact Moon degree and Pada (1-4)." },
      { step: "3", title: "Display Auspicious Letters", text: "See recommended starting letters and name ideas." }
    ],
    faqs: [
      { question: "Why name a baby based on Nakshatra?", answer: "Naming a child using their birth star sound creates phonetic harmony between their daily name callings and their natal Moon frequency." }
    ],
    educationalTitle: "The Vedic Naming Ceremony (Namakarana Sanskar)",
    educationalBody: [
      "Sound is vibration. The 108 Nakshatra Padas each carry a specific seed sound (Beeja Akshara) that tunes the child's mind to cosmic harmony."
    ],
    relatedCalculators: [
      { name: "Nakshatra Calculator", href: "/calculators/nakshatra/" },
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" }
    ]
  },

  "birth-panchang": {
    slug: "birth-panchang",
    name: "Birth Panchang Calculator",
    category: "Panchang & Tools",
    categorySlug: "panchang-tools",
    iconName: "BookOpen",
    shortDescription: "Calculate the 5 traditional elements of Panchang: Tithi, Vara, Nakshatra, Yoga, and Karana at birth.",
    seoTitle: "Birth Panchang Calculator — Tithi, Vara, Nakshatra, Yoga, Karana | AstroRomantic",
    metaDescription: "Calculate full birth Panchang details: Tithi, Vara, Nakshatra, Yoga, Karana, Rashi, Lagna, and Lahiri Ayanamsa for any date and time.",
    h1: "Birth Panchang Calculator",
    directAnswer: "Panchang means 'Five Limbs' (Pancha Anga): Tithi (Lunar day), Vara (Weekday), Nakshatra (Lunar mansion), Yoga (Luni-solar angle), and Karana (Half lunar day).",
    howItWorks: [
      { step: "1", title: "Input Date & Location", text: "Enter date, time, and coordinates." },
      { step: "2", title: "Compute Sun & Moon Positions", text: "Calculate exact tropical/sidereal degrees." },
      { step: "3", title: "Generate 5 Limbs", text: "Display Tithi, Vara, Nakshatra, Yoga, and Karana." }
    ],
    faqs: [
      { question: "What are the five limbs of Panchang?", answer: "1. Tithi (Water element), 2. Vara (Fire element), 3. Nakshatra (Air element), 4. Yoga (Ether element), 5. Karana (Earth element)." }
    ],
    educationalTitle: "The Cosmic Dimensions of Panchang",
    educationalBody: [
      "Panchang provides a complete snapshot of cosmic time, helping evaluate auspicious timing (Muhurta) and personal natal strengths."
    ],
    relatedCalculators: [
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" },
      { name: "Ayanamsa Calculator", href: "/calculators/ayanamsa/" }
    ]
  },

  "ayanamsa": {
    slug: "ayanamsa",
    name: "Ayanamsa Calculator",
    category: "Panchang & Tools",
    categorySlug: "panchang-tools",
    iconName: "Compass",
    shortDescription: "Calculate Lahiri, Raman, and KP Ayanamsa values and compare Tropical vs Sidereal longitudes.",
    seoTitle: "Ayanamsa Calculator — Lahiri, Raman & KP Values | AstroRomantic",
    metaDescription: "Calculate precise Lahiri, Raman, and Krishnamurti (KP) Ayanamsa precession values for any date and compare Sidereal vs Tropical zodiac longitudes.",
    h1: "Ayanamsa Calculator",
    directAnswer: "Ayanamsa is the angular difference between the Tropical zodiac (seasonal equinoxes) and the Sidereal zodiac (fixed star constellations), caused by Earth's axial precession.",
    howItWorks: [
      { step: "1", title: "Select Year & Date", text: "Input date to compute Julian Centuries." },
      { step: "2", title: "Calculate Precession Formula", text: "Compute Lahiri, Raman, and KP ayanamsa values." },
      { step: "3", title: "Compare Longitudes", text: "View Tropical vs Sidereal degree conversions." }
    ],
    faqs: [
      { question: "What is the current Lahiri Ayanamsa value?", answer: "For recent years (2024-2026), Lahiri Ayanamsa is approximately 24° 12' to 24° 14'." }
    ],
    educationalTitle: "The Precession of the Equinoxes",
    educationalBody: [
      "Earth's axis wobbles slowly in a 25,772-year cycle, moving backward through the stars at roughly 50.29 arcseconds per year. Ayanamsa accounts for this shift."
    ],
    relatedCalculators: [
      { name: "Moon Sign Calculator", href: "/calculators/moon-sign/" },
      { name: "KP Sub-Lord Finder", href: "/calculators/kp-sub-lord/" }
    ]
  },

  // --- CATEGORY 7: NUMEROLOGY ---
  "life-path": {
    slug: "life-path",
    name: "Life Path Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Discover your Life Path number (1-9, 11, 22, 33) and destiny roadmap from your birth date.",
    seoTitle: "Life Path Calculator — Core Personality & Master Numbers | AstroRomantic",
    metaDescription: "Calculate your accurate Life Path number from your full birth date. Features proper reduction math, Master Numbers (11, 22, 33), and deep interpretations.",
    h1: "Life Path Number Calculator",
    directAnswer: "Your Life Path number is the most defining number in numerology. Calculated from your full birth date, it reveals your natural talents, core instincts, and life purpose.",
    howItWorks: [
      { step: "1", title: "Enter Date of Birth", text: "Input your full birth date (Month, Day, Year)." },
      { step: "2", title: "Separate Reduction", text: "Reduce Month, Day, and Year separately while preserving Master Numbers 11, 22, and 33." },
      { step: "3", title: "Sum & Reveal", text: "Combine reduced parts to discover your final Life Path number." }
    ],
    faqs: [
      { question: "Can my Life Path number change?", answer: "No. Because it is calculated from your unchangeable birth date, your Life Path number remains constant throughout life." },
      { question: "What are Master Numbers?", answer: "11, 22, and 33 are Master Numbers carrying higher spiritual vibrations and potential." }
    ],
    educationalTitle: "The Numerological Blueprint of Your Birthday",
    educationalBody: [
      "In Pythagorean numerology, numbers are cosmic vibrations. Life Path 1 represents independence, 2 harmony, 3 expression, 4 structure, 5 freedom, 6 care, 7 truth, 8 power, and 9 humanitarian service."
    ],
    relatedCalculators: [
      { name: "Name Numerology Calculator", href: "/calculators/name-numerology/" },
      { name: "Lo Shu Grid Calculator", href: "/calculators/lo-shu-grid/" },
      { name: "Personal Year Calculator", href: "/calculators/personal-year/" }
    ],
    isPopular: true
  },

  "name-numerology": {
    slug: "name-numerology",
    name: "Name Numerology Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Calculate your Expression/Destiny, Soul Urge (vowels), and Personality (consonants) numbers.",
    seoTitle: "Name Numerology Calculator — Expression, Soul Urge & Personality | AstroRomantic",
    metaDescription: "Calculate your Pythagorean Expression (Destiny), Soul Urge, and Personality numbers from your full birth name with detailed letter maps.",
    h1: "Name Numerology Calculator",
    directAnswer: "Name Numerology converts letters of your full birth name into numbers (1-9) to calculate your Expression (Destiny), Soul Urge (vowels), and Personality (consonants).",
    howItWorks: [
      { step: "1", title: "Input Full Birth Name", text: "Enter your full birth name as recorded on official documents." },
      { step: "2", title: "Map Letters to Numbers", text: "Apply Pythagorean values (A=1, B=2, etc.)." },
      { step: "3", title: "Calculate Core Trio", text: "View Expression, Soul Urge, and Personality numbers." }
    ],
    faqs: [
      { question: "Should I use my married name or birth name?", answer: "Always use your full birth name for core Destiny calculation. Married or nickname numbers show secondary current influences." }
    ],
    educationalTitle: "Decoding the Vibrations Encoded in Your Name",
    educationalBody: [
      "Every letter carries a numeric frequency. Vowels reveal your inner heart's desire (Soul Urge), while consonants shape your outer social mask (Personality)."
    ],
    relatedCalculators: [
      { name: "Life Path Calculator", href: "/calculators/life-path/" },
      { name: "Name Correction Calculator", href: "/calculators/name-correction/" }
    ],
    isPopular: true
  },

  "mobile-number": {
    slug: "mobile-number",
    name: "Mobile Number Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Calculate the total numerological vibration of your mobile phone number (100% private, 0 data stored).",
    seoTitle: "Mobile Number Numerology Calculator — Phone Number Vibration | AstroRomantic",
    metaDescription: "Calculate the total numerological vibration of your mobile number. Discover business, personal, and communication luck. 100% private.",
    h1: "Mobile Number Numerology Calculator",
    directAnswer: "Mobile Number Numerology reduces all digits of your phone number to a single core vibration (1-9) to evaluate its suitability for business, relationships, and success.",
    howItWorks: [
      { step: "1", title: "Enter Phone Digits", text: "Input your mobile number digits." },
      { step: "2", title: "Sum & Reduce", text: "Add digits together until reaching a single root digit." },
      { step: "3", title: "Read Vibration", text: "Discover your phone number's commercial and personal energy (no phone numbers stored)." }
    ],
    faqs: [
      { question: "Do you save or store my mobile number?", answer: "No! All calculations execute client-side inside your browser. No personal numbers are recorded." }
    ],
    educationalTitle: "Frequency of Daily Phone Communications",
    educationalBody: [
      "Your mobile number is used dozens of times daily. Its total vibration influences incoming communication energy."
    ],
    relatedCalculators: [
      { name: "Vehicle Number Calculator", href: "/calculators/vehicle-number/" },
      { name: "House Number Calculator", href: "/calculators/house-number/" }
    ]
  },

  "vehicle-number": {
    slug: "vehicle-number",
    name: "Vehicle Number Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Analyze the numerological vibration and road safety energy of your vehicle registration plate.",
    seoTitle: "Vehicle Number Calculator — Car & Bike Plate Numerology | AstroRomantic",
    metaDescription: "Calculate your vehicle registration plate numerology number. Evaluate travel luck, vehicle safety, and road energy.",
    h1: "Vehicle Number Calculator",
    directAnswer: "Vehicle Number Numerology combines registration letters and numbers to determine the vehicle's driving energy and travel suitability.",
    howItWorks: [
      { step: "1", title: "Input Plate Number", text: "Enter full vehicle registration (letters and numbers)." },
      { step: "2", title: "Convert & Sum", text: "Convert letters to Pythagorean numbers and sum with digits." },
      { step: "3", title: "Get Energy Score", text: "View vehicle transit energy and recommendations." }
    ],
    faqs: [
      { question: "Which vehicle numbers are best for business?", answer: "Numbers 1, 5, and 8 carry high momentum, status, and commercial travel energy." }
    ],
    educationalTitle: "The Vibrational Energy of Transport",
    educationalBody: [
      "Combining letters and numbers gives your vehicle a unique transit signature that aligns with your lifestyle."
    ],
    relatedCalculators: [
      { name: "Mobile Number Calculator", href: "/calculators/mobile-number/" },
      { name: "House Number Calculator", href: "/calculators/house-number/" }
    ]
  },

  "house-number": {
    slug: "house-number",
    name: "House Number Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Calculate the home energy vibration of your house, flat, or apartment unit number.",
    seoTitle: "House Number Calculator — Home Energy & Living Atmosphere | AstroRomantic",
    metaDescription: "Calculate the numerology number of your house or apartment unit to discover the domestic atmosphere and living space energy.",
    h1: "House Number Calculator",
    directAnswer: "House Number Numerology reduces your home or unit number to a single digit (1-9) to reveal the living space atmosphere and family harmony.",
    howItWorks: [
      { step: "1", title: "Enter House Number", text: "Input door number, street number, or unit letter." },
      { step: "2", title: "Reduce Digits", text: "Sum numbers and letter values." },
      { step: "3", title: "View Living Atmosphere", text: "Read your home's energetic environment report." }
    ],
    faqs: [
      { question: "What if my address has letters like 4B?", answer: "Convert 'B' to 2 (Pythagorean), add 4 + 2 = 6." }
    ],
    educationalTitle: "Sacred Space & House Vibrations",
    educationalBody: [
      "Your home environment affects your rest, creativity, and family relationships. Number 2 promotes peace, 3 joy, 4 stability, 6 family warmth, and 8 abundance."
    ],
    relatedCalculators: [
      { name: "Life Path Calculator", href: "/calculators/life-path/" },
      { name: "Business Name Calculator", href: "/calculators/business-name/" }
    ]
  },

  "business-name": {
    slug: "business-name",
    name: "Business Name Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Evaluate the commercial numerology vibration of your business name and owner Life Path compatibility.",
    seoTitle: "Business Name Calculator — Commercial Numerology & Brand Fit | AstroRomantic",
    metaDescription: "Calculate your brand or business name numerology value. Evaluate commercial alignment and compatibility with owner's Life Path.",
    h1: "Business Name Calculator",
    directAnswer: "Business Name Numerology evaluates your brand name's total numeric value to optimize commercial attraction, brand resonance, and owner harmony.",
    howItWorks: [
      { step: "1", title: "Enter Business Name", text: "Input proposed or active company name." },
      { step: "2", title: "Optional Owner Life Path", text: "Provide owner's birth date for compatibility check." },
      { step: "3", title: "Generate Brand Report", text: "See commercial suitability and brand energy." }
    ],
    faqs: [
      { question: "Which business numbers attract wealth?", answer: "Numbers 1 (leadership), 5 (growth/marketing), 6 (luxury/service), and 8 (finance/power) are popular commercial numbers." }
    ],
    educationalTitle: "Optimizing Business Names for Commercial Success",
    educationalBody: [
      "A harmonious business name creates instant positive impression and aligns company goals with owner strengths."
    ],
    relatedCalculators: [
      { name: "Name Numerology Calculator", href: "/calculators/name-numerology/" },
      { name: "Life Path Calculator", href: "/calculators/life-path/" }
    ]
  },

  "personal-year": {
    slug: "personal-year",
    name: "Personal Year Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Calculate your Personal Year number (1 to 9) to forecast annual themes and timing.",
    seoTitle: "Personal Year Calculator — Annual Forecast & 9-Year Cycle | AstroRomantic",
    metaDescription: "Calculate your Personal Year number (1-9) for the current or upcoming year. Discover annual themes, key lessons, and timing.",
    h1: "Personal Year Calculator",
    directAnswer: "Your Personal Year number (1 to 9) runs from birthday to birthday (or calendar year), indicating the overarching theme and opportunity cycle of your year.",
    howItWorks: [
      { step: "1", title: "Enter Birth Month & Day", text: "Input your birthday." },
      { step: "2", title: "Select Target Year", text: "Choose target year (e.g. 2026)." },
      { step: "3", title: "Calculate Cycle", text: "Sum reduced month + reduced day + reduced target year." }
    ],
    faqs: [
      { question: "What is a 9-Year Cycle?", answer: "Numerology operates in 9-year waves starting at Year 1 (new beginnings) and concluding at Year 9 (completion)." }
    ],
    educationalTitle: "Riding the 9-Year Waves of Growth",
    educationalBody: [
      "Knowing your Personal Year helps you time major moves: Year 1 for launching, Year 4 for hard building, Year 5 for change, Year 8 for career harvest."
    ],
    relatedCalculators: [
      { name: "Life Path Calculator", href: "/calculators/life-path/" },
      { name: "Sade Sati Calculator", href: "/calculators/sade-sati/" }
    ]
  },

  "lo-shu-grid": {
    slug: "lo-shu-grid",
    name: "Lo Shu Grid Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Grid",
    shortDescription: "Generate your interactive 3x3 Lo Shu Grid matrix, present/missing numbers, and mental/will/action planes.",
    seoTitle: "Lo Shu Grid Calculator — Interactive 3x3 Magic Square | AstroRomantic",
    metaDescription: "Generate your interactive 3x3 Lo Shu Grid from birth date. Analyze present, missing, and repeated numbers across Mental, Will, and Action planes.",
    h1: "Lo Shu Grid Calculator",
    directAnswer: "The Lo Shu Grid is an ancient 3x3 magic square matrix in Chinese numerology and Feng Shui that maps birth date numbers to evaluate character strengths and missing elements.",
    howItWorks: [
      { step: "1", title: "Input Date of Birth", text: "Enter full birth date." },
      { step: "2", title: "Populate 3x3 Matrix", text: "Map digits into standard positions (4-9-2 top, 3-5-7 middle, 8-1-6 bottom)." },
      { step: "3", title: "Evaluate Planes", text: "Analyze active planes of Thought, Willpower, Action, and missing numbers." }
    ],
    faqs: [
      { question: "What if I have missing numbers in my Lo Shu grid?", answer: "Missing numbers represent growth areas and can be balanced using remedies, colors, or conscious habits." }
    ],
    educationalTitle: "The Ancient Magic Square of Lo Shu",
    educationalBody: [
      "Legend tells that the Lo Shu grid pattern was discovered on a sacred turtle shell along the Yellow River. Each row sums to 15 in all directions."
    ],
    relatedCalculators: [
      { name: "Life Path Calculator", href: "/calculators/life-path/" },
      { name: "Name Numerology Calculator", href: "/calculators/name-numerology/" }
    ],
    isPopular: true
  },

  "numerology-love-compatibility": {
    slug: "numerology-love-compatibility",
    name: "Numerology Love Compatibility",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Heart",
    shortDescription: "Compare Life Path and Expression numbers between two partners for deep numerology harmony.",
    seoTitle: "Numerology Love Compatibility Calculator | AstroRomantic",
    metaDescription: "Calculate numerology love compatibility between two partners by comparing Life Path numbers and Expression vibrations.",
    h1: "Numerology Love Compatibility",
    directAnswer: "Numerology Love Compatibility compares the Life Path numbers and Expression names of two partners to reveal natural harmony and growth areas.",
    howItWorks: [
      { step: "1", title: "Enter Person 1 Birth Date & Name", text: "Calculate Person 1 core numbers." },
      { step: "2", title: "Enter Person 2 Birth Date & Name", text: "Calculate Person 2 core numbers." },
      { step: "3", title: "Analyze Harmony", text: "Get compatibility percentage and relationship insights." }
    ],
    faqs: [
      { question: "Which Life Path numbers are naturally compatible?", answer: "1-5-7 (individualists), 2-4-8 (practical builders), and 3-6-9 (creatives and nurturers) share strong natural affinity." }
    ],
    educationalTitle: "Harmonizing Vibrational Frequencies in Relationships",
    educationalBody: [
      "When Life Path numbers interact, they create a unique combined vibration that highlights ease and growth potential."
    ],
    relatedCalculators: [
      { name: "Kundli Matching", href: "/calculators/kundli-matching/" },
      { name: "Love Calculator", href: "/calculators/love-calculator/" }
    ],
    isPopular: true
  },

  "name-correction": {
    slug: "name-correction",
    name: "Name Correction Calculator",
    category: "Numerology",
    categorySlug: "numerology",
    iconName: "Hash",
    shortDescription: "Analyze current name vibration against birth date and generate harmonious letter spelling variations.",
    seoTitle: "Name Correction Calculator — Harmonize Name & Life Path | AstroRomantic",
    metaDescription: "Analyze your current name numerology against your Life Path date and get recommended subtle letter spelling variations for balance.",
    h1: "Name Correction Calculator",
    directAnswer: "Name Correction Numerology modifies subtle letter spellings in your current name so its Expression number harmonizes with your birth date Life Path.",
    howItWorks: [
      { step: "1", title: "Input Current Name & DOB", text: "Calculate current Expression vs Life Path." },
      { step: "2", title: "Evaluate Harmony", text: "Check if current name clashes with birth date vibration." },
      { step: "3", title: "Suggest Variations", text: "View subtle spelling additions (with non-guarantee disclaimer)." }
    ],
    faqs: [
      { question: "Do I need to legally change my name?", answer: "No. Numerologists suggest that using a corrected spelling in daily signatures, social media, and business cards activates the new frequency." }
    ],
    educationalTitle: "Tuning Your Name Frequency to Your Birth Path",
    educationalBody: [
      "A name correction aligns your outer social expression with your innate birth destiny, reducing friction and supporting personal goals."
    ],
    relatedCalculators: [
      { name: "Name Numerology Calculator", href: "/calculators/name-numerology/" },
      { name: "Life Path Calculator", href: "/calculators/life-path/" }
    ]
  }
};
