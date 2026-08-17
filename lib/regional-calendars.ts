// Regional Calendar Calculations & Verification Data for AstroRomantic
// Covers Assamese (Bhaskarabda), Indian Bengali (Bangabda Panjika), and Bangladesh Bangla Civil Calendar.

export interface CalendarEvent {
  title: string;
  nativeTitle?: string;
  type: "festival" | "holiday" | "observance" | "puja";
  date: string; // YYYY-MM-DD
  description: string;
  isPublicHoliday?: boolean;
  tithiInfo?: string;
}

export interface RegionalMonth {
  id: string;
  name: string;
  nativeName: string;
  gregorianPeriod: string;
  characteristics: string;
  season: string;
}

export interface RegionalDateInfo {
  regionalDay: number;
  regionalMonthName: string;
  regionalMonthNative: string;
  regionalYear: number;
  formattedRegionalDate: string;
  isMonthStart?: boolean;
  tithiInfo?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. ASSAMESE CALENDAR (BHASKARABDA 1433 - 1434)
// ─────────────────────────────────────────────────────────────────────────────

export const ASSAMESE_MONTHS: RegionalMonth[] = [
  { id: "bohag", name: "Bohag", nativeName: "বহাগ", gregorianPeriod: "Mid-April – Mid-May", season: "Spring (Basanta)", characteristics: "First month of Bhaskarabda. Celebrates Bohag Bihu (Rongali Bihu), welcoming spring, new agricultural cycle, and joy." },
  { id: "jeth", name: "Jeth", nativeName: "জেঠ", gregorianPeriod: "Mid-May – Mid-June", season: "Summer (Grisma)", characteristics: "Warm summer month. Associated with ripening summer fruits, Sabitri Brata, and pre-monsoon showers." },
  { id: "ahar", name: "Ahar", nativeName: "আহাৰ", gregorianPeriod: "Mid-June – Mid-July", season: "Monsoon (Barsa)", characteristics: "Arrival of monsoon rains. Paddy transplanting begins in Assam. Famous for the annual Ambubachi Mela at Kamakhya Temple." },
  { id: "saon", name: "Saon", nativeName: "শাওণ", gregorianPeriod: "Mid-July – Mid-August", season: "Monsoon (Barsa)", characteristics: "Peak monsoon month. Sacred for Shiva worship and Manasa Puja across Assamese households." },
  { id: "bhado", name: "Bhado", nativeName: "ভাদ", gregorianPeriod: "Mid-August – Mid-September", season: "Early Autumn (Sarat)", characteristics: "Sacred month marked by Janmashtami, Srimanta Sankardeva Tithi, and Sri Madhavdeva Tithi with Naam-Kirtan in Namghars." },
  { id: "ahin", name: "Ahin", nativeName: "আহিন", gregorianPeriod: "Mid-September – Mid-October", season: "Autumn (Sarat)", characteristics: "Autumnal breezes and clear skies. Celebrates Durga Puja and sets the stage for Kati Bihu." },
  { id: "kati", name: "Kati", nativeName: "কাতি", gregorianPeriod: "Mid-October – Mid-November", season: "Late Autumn (Hemanta)", characteristics: "Month of Kati Bihu (Kongali Bihu). Earthen lamps (Saki) lit at the foot of Tulsi plants and in paddy fields praying for crop protection." },
  { id: "aghon", name: "Aghon", nativeName: "আঘোণ", gregorianPeriod: "Mid-November – Mid-December", season: "Late Autumn (Hemanta)", characteristics: "Harvest season. Golden rice fields, harvesting paddy, and celebrating Na-Khowa (feast of newly harvested rice)." },
  { id: "puh", name: "Puh", nativeName: "পুহ", gregorianPeriod: "Mid-December – Mid-January", season: "Winter (Sita)", characteristics: "Crisp winter month. Families prepare Bira (rice cakes), larus, and firewood for Magh Bihu." },
  { id: "magh", name: "Magh", nativeName: "মাঘ", gregorianPeriod: "Mid-January – Mid-February", season: "Winter (Sita)", characteristics: "Month of Magh Bihu (Bhogali Bihu). Meji bonfires, Uruka feast night, pitha making, and community sports." },
  { id: "phagun", name: "Phagun", nativeName: "ফাগুন", gregorianPeriod: "Mid-February – Mid-March", season: "Spring (Basanta)", characteristics: "Transition into spring. Celebrates Doul Utsav / Fagua (Holi) with fervor and colorful natural powders." },
  { id: "chait", name: "Chait", nativeName: "চ’ত", gregorianPeriod: "Mid-March – Mid-April", season: "Spring (Basanta)", characteristics: "Final month of the Bhaskarabda year. Preparing Husori troupes and instruments for Bohag Bihu." }
];

export const ASSAMESE_EVENTS_2026_2027: CalendarEvent[] = [
  // 2026
  { title: "Magh Bihu / Bhogali Bihu (Uruka)", nativeTitle: "উৰুকা / মাঘ বিহু", type: "festival", date: "2026-01-14", description: "Feast night of Uruka followed by lighting of Meji and Bhelaghar bonfires on Magh Bihu morning.", isPublicHoliday: true },
  { title: "Bhogali Bihu", nativeTitle: "মাঘ বিহু", type: "festival", date: "2026-01-15", description: "Main day of Bhogali Bihu with prayers near the Meji, community feasts, and traditional sports.", isPublicHoliday: true },
  { title: "Saraswati Puja", nativeTitle: "সৰস্বতী পূজা", type: "puja", date: "2026-02-12", description: "Worship of Goddess Saraswati in educational institutes and homes.", isPublicHoliday: true, tithiInfo: "Sukla Panchami" },
  { title: "Maha Shivaratri", nativeTitle: "মহা শিৱৰাত্ৰি", type: "puja", date: "2026-02-15", description: "Night of Shiva worship and fasting across temples.", isPublicHoliday: true, tithiInfo: "Krishna Chaturdashi" },
  { title: "Doul Utsav / Fagua (Holi)", nativeTitle: "দৌল উৎসৱ / হোলী", type: "festival", date: "2026-03-03", description: "Festival of colors celebrated with grand Doul Utsav in Barpeta Satra.", isPublicHoliday: true, tithiInfo: "Phalguna Purnima" },
  { title: "Goru Bihu (Bohag Bihu Day 1)", nativeTitle: "গৰু বিহু", type: "festival", date: "2026-04-14", description: "First day of Bohag Bihu dedicated to washing, decorating, and honoring cattle.", isPublicHoliday: true },
  { title: "Manuh Bihu (Bohag Bihu Day 2 - Assamese New Year 1433)", nativeTitle: "মানুহ বিহু (বহাগ বিহু)", type: "festival", date: "2026-04-15", description: "Assamese New Year Day. Seeking blessings from elders, presenting Gamosa, and Husori performances.", isPublicHoliday: true },
  { title: "Gosai Bihu / Kutum Bihu", nativeTitle: "গোঁহাই বিহু / কুটুম বিহু", type: "festival", date: "2026-04-16", description: "Days 3 and 4 of Bihu focused on deity worship and visiting relatives.", isPublicHoliday: false },
  { title: "Ambubachi Mela Begins", nativeTitle: "অম্বুবাচী মেলা আৰম্ভ", type: "observance", date: "2026-06-22", description: "Annual mela at Kamakhya Temple marking the earth's fertility period.", isPublicHoliday: false },
  { title: "Ambubachi Mela Concludes", nativeTitle: "অম্বুবাচী মেলা সমাপ্তি", type: "observance", date: "2026-06-26", description: "Reopening of Kamakhya Temple doors after rituals.", isPublicHoliday: false },
  { title: "Janmashtami", nativeTitle: "জন্মাষ্টমী", type: "puja", date: "2026-09-04", description: "Birth celebration of Lord Krishna in Namghars and temples.", isPublicHoliday: true, tithiInfo: "Bhadra Ashtami" },
  { title: "Srimanta Sankardeva Tithi", nativeTitle: "শ্ৰীমন্ত শংকৰদেৱ তিথি", type: "observance", date: "2026-09-13", description: "Remembrance day of Saint-Reformer Mahapurush Srimanta Sankardeva.", isPublicHoliday: true },
  { title: "Durga Puja (Maha Saptami)", nativeTitle: "দুৰ্গা পূজা (সপ্তমী)", type: "puja", date: "2026-10-17", description: "Grand autumn worship of Goddess Durga begins.", isPublicHoliday: true, tithiInfo: "Maha Saptami" },
  { title: "Durga Puja (Maha Ashtami)", nativeTitle: "দুৰ্গা পূজা (অষ্টমী)", type: "puja", date: "2026-10-18", description: "Main Puja rituals and Sandhi Puja.", isPublicHoliday: true, tithiInfo: "Maha Ashtami" },
  { title: "Kati Bihu (Kongali Bihu)", nativeTitle: "কাতি বিহু", type: "festival", date: "2026-10-18", description: "Lighting earthen lamps (Saki) in paddy fields and near Tulsi plants.", isPublicHoliday: true },
  { title: "Bijoya Dashami", nativeTitle: "বিজয়া দশমী", type: "festival", date: "2026-10-20", description: "Immersion of idols and exchange of greetings.", isPublicHoliday: true, tithiInfo: "Dashami" },
  { title: "Lakshmi Puja", nativeTitle: "লক্ষ্মী পূজা", type: "puja", date: "2026-10-25", description: "Worship of Goddess Lakshmi on Kojagari Purnima.", isPublicHoliday: true, tithiInfo: "Kojagari Purnima" },
  { title: "Diwali / Kali Puja", nativeTitle: "দীপান্বিতা / কালী পূজা", type: "festival", date: "2026-11-08", description: "Festival of lights and night worship of Goddess Kali.", isPublicHoliday: true, tithiInfo: "Amavasya" },

  // 2027
  { title: "Magh Bihu / Bhogali Bihu (Uruka)", nativeTitle: "উৰুকা", type: "festival", date: "2027-01-14", description: "Night of community feast (Uruka) before Magh Bihu.", isPublicHoliday: true },
  { title: "Bhogali Bihu", nativeTitle: "মাঘ বিহু", type: "festival", date: "2027-01-15", description: "Lighting of Meji and Bhelaghar bonfires, offering pitha and laru.", isPublicHoliday: true },
  { title: "Saraswati Puja", nativeTitle: "সৰস্বতী পূজা", type: "puja", date: "2027-01-31", description: "Worship of Goddess Saraswati.", isPublicHoliday: true, tithiInfo: "Sukla Panchami" },
  { title: "Maha Shivaratri", nativeTitle: "মহা শিৱৰাত্ৰি", type: "puja", date: "2027-03-06", description: "Shiva worship and nocturnal vigil.", isPublicHoliday: true },
  { title: "Doul Utsav (Holi)", nativeTitle: "দৌল উৎসৱ", type: "festival", date: "2027-03-22", description: "Holi celebrations across Assam.", isPublicHoliday: true, tithiInfo: "Purnima" },
  { title: "Goru Bihu", nativeTitle: "গৰু বিহু", type: "festival", date: "2027-04-14", description: "Cattle worship day of Bohag Bihu.", isPublicHoliday: true },
  { title: "Manuh Bihu (Assamese New Year 1434)", nativeTitle: "মানুহ বিহু (বহাগ বিহু ১৪৩৪)", type: "festival", date: "2027-04-15", description: "Start of Bhaskarabda 1434 year. Bihu songs, dance, and Gamosa honor.", isPublicHoliday: true },
  { title: "Ambubachi Mela", nativeTitle: "অম্বুবাচী মেলা", type: "observance", date: "2027-06-22", description: "Kamakhya Temple annual mela.", isPublicHoliday: false },
  { title: "Janmashtami", nativeTitle: "জন্মাষ্টমী", type: "puja", date: "2027-08-25", description: "Krishna Janmashtami in Namghars.", isPublicHoliday: true },
  { title: "Durga Puja (Saptami to Dashami)", nativeTitle: "দুৰ্গা পূজা", type: "festival", date: "2027-10-06", description: "Durga Puja festivities across Assam.", isPublicHoliday: true },
  { title: "Kati Bihu", nativeTitle: "কাতি বিহু", type: "festival", date: "2027-10-18", description: "Kongali Bihu observances in agricultural fields.", isPublicHoliday: true },
  { title: "Diwali / Kali Puja", nativeTitle: "দীপাৱলী / কালী পূজা", type: "festival", date: "2027-10-29", description: "Festival of lights.", isPublicHoliday: true }
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. BENGALI CALENDAR (INDIAN BENGALI PANJIKA - BANGABDA 1433 - 1434)
// ─────────────────────────────────────────────────────────────────────────────

export const BENGALI_MONTHS: RegionalMonth[] = [
  { id: "boishakh", name: "Boishakh", nativeName: "বৈশাখ", gregorianPeriod: "Mid-April – Mid-May", season: "Summer (Grisma)", characteristics: "First month of Bangabda. Poila Boishakh, Haal Khata (new ledger), and Kalbaishakhi summer storms." },
  { id: "joishtho", name: "Joishtho", nativeName: "জ্যৈষ্ঠ", gregorianPeriod: "Mid-May – Mid-June", season: "Summer (Grisma)", characteristics: "Peak summer. Season of juicy mangoes, lychees, Jamai Sasthi celebrations." },
  { id: "asharh", name: "Asharh", nativeName: "আষাঢ়", gregorianPeriod: "Mid-June – Mid-July", season: "Monsoon (Barsha)", characteristics: "Rains arrive. Inspiration for Rabindranath Tagore poems, Rath Yatra festival." },
  { id: "shrabon", name: "Shrabon", nativeName: "শ্রাবণ", gregorianPeriod: "Mid-July – Mid-August", season: "Monsoon (Barsha)", characteristics: "Heavy monsoon. Sacred Shrabon Mondays for Lord Shiva, Manasa Puja, Jhulan Yatra." },
  { id: "bhadro", name: "Bhadro", nativeName: "ভাদ্র", gregorianPeriod: "Mid-August – Mid-September", season: "Early Autumn (Sarat)", characteristics: "Kashphool begins blooming. Janmashtami, Tal Navami, Bhaluka Puja." },
  { id: "ashwin", name: "Ashwin", nativeName: "আশ্বিন", gregorianPeriod: "Mid-September – Mid-October", season: "Autumn (Sarat)", characteristics: "Grandest month in Bengal. Mahalaya, Sharadiya Durga Puja, Kojagari Lakshmi Puja." },
  { id: "kartik", name: "Kartik", nativeName: "কার্তিক", gregorianPeriod: "Mid-October – Mid-November", season: "Late Autumn (Hemanta)", characteristics: "Kali Puja, Diwali lights, Jagaddhatri Puja, Kartik Puja, Bhaiphota (Bhai Dooj)." },
  { id: "agrahayan", name: "Agrahayan", nativeName: "অগ্রহায়ণ", gregorianPeriod: "Mid-November – Mid-December", season: "Late Autumn (Hemanta)", characteristics: "Nabanna (new harvest festival), winter sweet date-palm jaggery (Nolen Gur)." },
  { id: "poush", name: "Poush", nativeName: "পৌষ", gregorianPeriod: "Mid-December – Mid-January", season: "Winter (Sit)", characteristics: "Poush Parbon, Pithe Puli making, Gangasagar Mela on Makar Sankranti." },
  { id: "magh", name: "Magh", nativeName: "মাঘ", gregorianPeriod: "Mid-January – Mid-February", season: "Winter (Sit)", characteristics: "Saraswati Puja (Basant Panchami), yellow attire, spring warmth returning." },
  { id: "falgun", name: "Falgun", nativeName: "ফাল্গুন", gregorianPeriod: "Mid-February – Mid-March", season: "Spring (Basanta)", characteristics: "Dol Purnima (Holi), colorful Abir play, spring breeze." },
  { id: "chaitra", name: "Chaitra", nativeName: "চৈত্র", gregorianPeriod: "Mid-March – Mid-April", season: "Spring (Basanta)", characteristics: "Chaitra Sale shopping, Charak Puja, Neel Shasthi, year-end Gajan rituals." }
];

export const BENGALI_EVENTS_2026_2027: CalendarEvent[] = [
  // 2026
  { title: "Saraswati Puja / Basant Panchami", nativeTitle: "সরস্বতী পূজা", type: "puja", date: "2026-02-12", description: "Worship of Goddess Saraswati, student holiday, wearing yellow attire.", isPublicHoliday: true, tithiInfo: "Sukla Panchami" },
  { title: "Maha Shivaratri", nativeTitle: "মহা শিবরাত্রি", type: "puja", date: "2026-02-15", description: "Shiva fasting and night vigils.", isPublicHoliday: false, tithiInfo: "Krishna Chaturdashi" },
  { title: "Dol Purnima / Gaura Purnima (Holi)", nativeTitle: "দোল পূর্ণিমা", type: "festival", date: "2026-03-03", description: "Color festival with Abir and Sri Chaitanya Mahaprabhu birth celebration.", isPublicHoliday: true, tithiInfo: "Purnima" },
  { title: "Charak Puja & Neel Puja", nativeTitle: "চরক পূজা ও নীল পূজা", type: "observance", date: "2026-04-14", description: "Year-end Gajan festival rituals honoring Lord Shiva.", isPublicHoliday: false },
  { title: "Poila Boishakh (Bengali New Year 1433)", nativeTitle: "পহেলা বৈশাখ (১৪৩৩ বঙ্গাব্দ)", type: "festival", date: "2026-04-15", description: "Indian Bengali New Year. Haal Khata ledger opening, new clothes, special feasts.", isPublicHoliday: true },
  { title: "Rabindra Jayanti", nativeTitle: "রবীন্দ্র জয়ন্তী", type: "observance", date: "2026-05-09", description: "Birth anniversary of Kabiguru Rabindranath Tagore (25e Boishakh).", isPublicHoliday: true },
  { title: "Jamai Sasthi", nativeTitle: "জামাই ষষ্ঠী", type: "observance", date: "2026-05-22", description: "Traditional day honoring sons-in-law with feasts and rituals.", isPublicHoliday: false, tithiInfo: "Sukla Sasthi" },
  { title: "Rath Yatra", nativeTitle: "রথযাত্রা", type: "festival", date: "2026-07-16", description: "Chariot festival of Lord Jagannath.", isPublicHoliday: true, tithiInfo: "Dwitiya Tithi" },
  { title: "Janmashtami", nativeTitle: "জন্মাষ্টমী", type: "puja", date: "2026-09-04", description: "Lord Krishna's birth celebration.", isPublicHoliday: true, tithiInfo: "Gokulashtami" },
  { title: "Vishwakarma Puja", nativeTitle: "বিশ্বকর্মা পূজা", type: "puja", date: "2026-09-17", description: "Worship of divine architect Lord Vishwakarma, kite flying.", isPublicHoliday: false, tithiInfo: "Kanya Sankranti" },
  { title: "Mahalaya", nativeTitle: "মহালয়া", type: "observance", date: "2026-10-10", description: "Chandi Path by Birendra Krishna Bhadra, Tarpan offerings to ancestors.", isPublicHoliday: true, tithiInfo: "Mahalaya Amavasya" },
  { title: "Durga Puja - Maha Sasthi", nativeTitle: "দুর্গা পূজা - মহাষষ্ঠী", type: "puja", date: "2026-10-16", description: "Unveiling of Goddess Durga idols and Bodhon rituals.", isPublicHoliday: true, tithiInfo: "Maha Sasthi" },
  { title: "Durga Puja - Maha Saptami", nativeTitle: "দুর্গা পূজা - মহাসপ্তমী", type: "puja", date: "2026-10-17", description: "Nabapatrika Snan (Kola Bou) and morning Saptami Puja.", isPublicHoliday: true, tithiInfo: "Maha Saptami" },
  { title: "Durga Puja - Maha Ashtami & Sandhi Puja", nativeTitle: "দুর্গা পূজা - মহাঅষ্টমী", type: "puja", date: "2026-10-18", description: "Kumari Puja and auspicious Sandhi Puja at junction of Ashtami and Navami.", isPublicHoliday: true, tithiInfo: "Sandhi Puja" },
  { title: "Durga Puja - Maha Navami", nativeTitle: "দুর্গা পূজা - মহানবমী", type: "puja", date: "2026-10-19", description: "Maha Arati and Navami Bhog.", isPublicHoliday: true, tithiInfo: "Maha Navami" },
  { title: "Vijaya Dashami & Sindoor Khela", nativeTitle: "বিজয়া দশমী ও সিঁদুর খেলা", type: "festival", date: "2026-10-20", description: "Immersion of Durga idols, married women play Sindoor Khela, exchange of Vijaya sweet greetings.", isPublicHoliday: true, tithiInfo: "Vijaya Dashami" },
  { title: "Kojagari Lakshmi Puja", nativeTitle: "কোজাগরী লক্ষ্মী পূজা", type: "puja", date: "2026-10-25", description: "Full moon night worship of Goddess Lakshmi with Alpona art.", isPublicHoliday: true, tithiInfo: "Kojagari Purnima" },
  { title: "Kali Puja / Diwali", nativeTitle: "কালী পূজা ও দীপাবলি", type: "puja", date: "2026-11-08", description: "Midnight worship of Goddess Kali and fireworks display.", isPublicHoliday: true, tithiInfo: "Dipanwita Amavasya" },
  { title: "Bhatri Dwitiya (Bhai Phota)", nativeTitle: "ভাইফোঁটা", type: "observance", date: "2026-11-10", description: "Sisters apply Phota (tilak) on brothers' foreheads wishing long life.", isPublicHoliday: true, tithiInfo: "Sukla Dwitiya" },
  { title: "Jagaddhatri Puja", nativeTitle: "জগদ্ধাত্রী পূজা", type: "puja", date: "2026-11-17", description: "Worship of Goddess Jagaddhatri famous in Chandannagar and Krishnanagar.", isPublicHoliday: false, tithiInfo: "Sukla Navami" },

  // 2027
  { title: "Poush Sankranti / Pithe Parbon", nativeTitle: "পৌষ সংক্রান্তি", type: "festival", date: "2027-01-14", description: "Making traditional Pithe-Puli sweets and Gangasagar holy dip.", isPublicHoliday: true, tithiInfo: "Makar Sankranti" },
  { title: "Saraswati Puja", nativeTitle: "সরস্বতী পূজা", type: "puja", date: "2027-01-31", description: "Saraswati Puja celebrations.", isPublicHoliday: true, tithiInfo: "Sukla Panchami" },
  { title: "Dol Purnima (Holi)", nativeTitle: "দোল পূর্ণিমা", type: "festival", date: "2027-03-22", description: "Abir color play across Bengal.", isPublicHoliday: true, tithiInfo: "Purnima" },
  { title: "Poila Boishakh (Bangabda 1434 New Year)", nativeTitle: "পহেলা বৈশাখ (১৪৩৪ বঙ্গাব্দ)", type: "festival", date: "2027-04-15", description: "Start of Bengali Year 1434.", isPublicHoliday: true },
  { title: "Rabindra Jayanti", nativeTitle: "রবীন্দ্র জয়ন্তী", type: "observance", date: "2027-05-09", description: "Rabindranath Tagore 25e Boishakh birth anniversary.", isPublicHoliday: true },
  { title: "Rath Yatra", nativeTitle: "রথযাত্রা", type: "festival", date: "2027-07-05", description: "Jagannath Rath Yatra.", isPublicHoliday: true, tithiInfo: "Dwitiya Tithi" },
  { title: "Mahalaya", nativeTitle: "মহালয়া", type: "observance", date: "2027-09-29", description: "Beginning of Debi Paksha.", isPublicHoliday: true, tithiInfo: "Amavasya" },
  { title: "Durga Puja (Saptami–Dashami)", nativeTitle: "দুর্গা পূজা", type: "festival", date: "2027-10-06", description: "Durga Puja festival 2027.", isPublicHoliday: true, tithiInfo: "Sharadiya Puja" },
  { title: "Kali Puja / Diwali", nativeTitle: "কালী পূজা ও দীপাবলি", type: "puja", date: "2027-10-29", description: "Kali Puja night rituals.", isPublicHoliday: true, tithiInfo: "Amavasya" }
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. BANGLA CALENDAR (BANGLADESH CIVIL CALENDAR - BANGABDA 1433 - 1434)
// ─────────────────────────────────────────────────────────────────────────────

export const BANGLA_CIVIL_MONTHS: RegionalMonth[] = [
  { id: "boishakh", name: "Boishakh", nativeName: "বৈশাখ", gregorianPeriod: "Apr 14 – May 14 (31 Days)", season: "Grisma", characteristics: "Month 1 of Bangladesh Civil Calendar. Pohela Boishakh ALWAYS falls on April 14 in Bangladesh." },
  { id: "joishtho", name: "Joishtho", nativeName: "জ্যৈষ্ঠ", gregorianPeriod: "May 15 – Jun 14 (31 Days)", season: "Grisma", characteristics: "Month 2. Fixed 31 days. Season of summer fruits (Juicy mangoes, jackfruits, lychees)." },
  { id: "asharh", name: "Asharh", nativeName: "আষাঢ়", gregorianPeriod: "Jun 15 – Jul 15 (31 Days)", season: "Barsa", characteristics: "Month 3. Fixed 31 days. Arrival of monsoon rains across Bangladesh river basins." },
  { id: "shrabon", name: "Shrabon", nativeName: "শ্রাবণ", gregorianPeriod: "Jul 16 – Aug 15 (31 Days)", season: "Barsa", characteristics: "Month 4. Fixed 31 days. Heavy rain showers, lush paddy fields, riverine fish season." },
  { id: "bhadro", name: "Bhadro", nativeName: "ভাদ্র", gregorianPeriod: "Aug 16 – Sep 16 (31 Days)", season: "Sarat", characteristics: "Month 5. Fixed 31 days. Transition from monsoon to early autumn." },
  { id: "ashwin", name: "Ashwin", nativeName: "আশ্বিন", gregorianPeriod: "Sep 17 – Oct 16 (30 Days)", season: "Sarat", characteristics: "Month 6. Fixed 30 days. Autumn breezes, Durga Puja, white cloud skies." },
  { id: "kartik", name: "Kartik", nativeName: "কার্তিক", gregorianPeriod: "Oct 17 – Nov 15 (30 Days)", season: "Hemanta", characteristics: "Month 7. Fixed 30 days. Dewy mornings, autumn harvest preparations." },
  { id: "agrahayan", name: "Agrahayan", nativeName: "অগ্রহায়ণ", gregorianPeriod: "Nov 16 – Dec 15 (30 Days)", season: "Hemanta", characteristics: "Month 8. Fixed 30 days. Nabanna festival, harvesting Aman rice." },
  { id: "poush", name: "Poush", nativeName: "পৌষ", gregorianPeriod: "Dec 16 – Jan 14 (30 Days)", season: "Sit", characteristics: "Month 9. Fixed 30 days. Cool winter weather, Pouthe-puli, date-palm syrup." },
  { id: "magh", name: "Magh", nativeName: "মাঘ", gregorianPeriod: "Jan 15 – Feb 13 (30 Days)", season: "Sit", characteristics: "Month 10. Fixed 30 days. Winter chill, mustard flower fields." },
  { id: "falgun", name: "Falgun", nativeName: "ফাল্গুন", gregorianPeriod: "Feb 14 – Mar 14 (30 Days)", season: "Basanta", characteristics: "Month 11. Fixed 30 days. Pohela Falgun (Spring Day), Ekushey February." },
  { id: "chaitra", name: "Chaitra", nativeName: "চৈত্র", gregorianPeriod: "Mar 15 – Apr 13 (30/31 Days)", season: "Basanta", characteristics: "Month 12. 30 days (31 in leap years). Year-end month before Pohela Boishakh." }
];

export const BANGLADESH_EVENTS_2026_2027: CalendarEvent[] = [
  // 2026
  { title: "International Mother Language Day (Ekushey February)", nativeTitle: "আন্তর্জাতিক মাতৃভাষা দিবস (২১শে ফেব্রুয়ারি)", type: "holiday", date: "2026-02-21", description: "Tribute to Language Martyrs at Shaheed Minar.", isPublicHoliday: true },
  { title: "Independence & National Day", nativeTitle: "স্বাধীনতা ও জাতীয় দিবস (২৬শে মার্চ)", type: "holiday", date: "2026-03-26", description: "Commemorating Bangladesh Declaration of Independence in 1971.", isPublicHoliday: true },
  { title: "Eid-ul-Fitr (Tentative)", nativeTitle: "ঈদুল ফিতর", type: "holiday", date: "2026-03-20", description: "Islamic festival marking end of Ramadan (subject to moon sighting).", isPublicHoliday: true },
  { title: "Pohela Boishakh (Bangla New Year 1433)", nativeTitle: "পহেলা বৈশাখ (১৪ ৩৩ বঙ্গাব্দ)", type: "festival", date: "2026-04-14", description: "Official National Holiday in Bangladesh. Mangal Shobhajatra parade and cultural events.", isPublicHoliday: true },
  { title: "May Day", nativeTitle: "মে দিবস", type: "holiday", date: "2026-05-01", description: "International Workers' Day.", isPublicHoliday: true },
  { title: "Buddha Purnima", nativeTitle: "বুদ্ধ পূর্ণিমা", type: "holiday", date: "2026-05-31", description: "Birth anniversary of Lord Buddha.", isPublicHoliday: true },
  { title: "Eid-ul-Adha (Tentative)", nativeTitle: "ঈদুল আজহা", type: "holiday", date: "2026-05-27", description: "Feast of Sacrifice (subject to moon sighting).", isPublicHoliday: true },
  { title: "Ashura (10th Muharram)", nativeTitle: "পবিত্র আশুরা", type: "holiday", date: "2026-06-26", description: "Observance of Muharram.", isPublicHoliday: true },
  { title: "National Mourning Day", nativeTitle: "জাতীয় শোক দিবস (১৫ই আগস্ট)", type: "holiday", date: "2026-08-15", description: "Remembrance day of Bangabandhu Sheikh Mujibur Rahman.", isPublicHoliday: true },
  { title: "Eid-e-Miladunnabi", nativeTitle: "পবিত্র ঈদে মিলাদুন্নবী (সা:)", type: "holiday", date: "2026-08-26", description: "Birth anniversary of Prophet Muhammad (PBUH).", isPublicHoliday: true },
  { title: "Durga Puja (Bijoya Dashami)", nativeTitle: "দুর্গা পূজা (বিজয়া দশমী)", type: "holiday", date: "2026-10-20", description: "Public Holiday for Bijoya Dashami in Bangladesh.", isPublicHoliday: true },
  { title: "Victory Day (Bijoy Dibosh)", nativeTitle: "মহান বিজয় দিবস (১৬ই ডিসেম্বর)", type: "holiday", date: "2026-12-16", description: "Celebrating victory in 1971 Liberation War.", isPublicHoliday: true },
  { title: "Christmas Day", nativeTitle: "বড় দিন (২৫শে ডিসেম্বর)", type: "holiday", date: "2026-12-25", description: "Christmas celebration.", isPublicHoliday: true },

  // 2027
  { title: "Pohela Falgun (Spring Day)", nativeTitle: "পহেলা ফাল্গুন", type: "festival", date: "2027-02-14", description: "Welcoming spring with yellow sarees and floral crowns.", isPublicHoliday: false },
  { title: "International Mother Language Day", nativeTitle: "২১শে ফেব্রুয়ারি", type: "holiday", date: "2027-02-21", description: "Shaheed Minar tribute.", isPublicHoliday: true },
  { title: "Eid-ul-Fitr (Tentative)", nativeTitle: "ঈদুল ফিতর", type: "holiday", date: "2027-03-10", description: "Eid celebrations.", isPublicHoliday: true },
  { title: "Independence Day", nativeTitle: "২৬শে মার্চ", type: "holiday", date: "2027-03-26", description: "Independence Day.", isPublicHoliday: true },
  { title: "Pohela Boishakh (Bangla New Year 1434)", nativeTitle: "পহেলা বৈশাখ (১৪৩৪ বঙ্গাব্দ)", type: "festival", date: "2027-04-14", description: "Bangla Academy Civil Calendar New Year Day 1434.", isPublicHoliday: true },
  { title: "May Day", nativeTitle: "মে দিবস", type: "holiday", date: "2027-05-01", description: "Workers' Day.", isPublicHoliday: true },
  { title: "Eid-ul-Adha (Tentative)", nativeTitle: "ঈদুল আজহা", type: "holiday", date: "2027-05-17", description: "Sacrifice festival.", isPublicHoliday: true },
  { title: "Victory Day", nativeTitle: "বিজয় দিবস", type: "holiday", date: "2027-12-16", description: "Victory Day holiday.", isPublicHoliday: true }
];

// ─────────────────────────────────────────────────────────────────────────────
// REGIONAL DATE COMPUTATION ENGINES
// ─────────────────────────────────────────────────────────────────────────────

const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
export function toBanglaNumber(num: number): string {
  return num.toString().split("").map(d => banglaDigits[parseInt(d, 10)] || d).join("");
}

/**
 * Calculates Assamese (Bhaskarabda) date for any Gregorian date
 */
export function getAssameseDate(date: Date): RegionalDateInfo {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  const day = date.getDate();

  let regionalYear = year - 593;
  if (month < 3 || (month === 3 && day < 15)) {
    regionalYear -= 1;
  }

  // Assamese month start dates (approximate solar transits)
  // Bohag: Apr 15
  // Jeth: May 16
  // Ahar: Jun 16
  // Saon: Jul 17
  // Bhado: Aug 17
  // Ahin: Sep 17
  // Kati: Oct 18
  // Aghon: Nov 17
  // Puh: Dec 17
  // Magh: Jan 15
  // Phagun: Feb 14
  // Chait: Mar 15

  let mIdx = 0;
  let rDay = 1;

  if (month === 3 && day >= 15) { mIdx = 0; rDay = day - 14; }
  else if (month === 4 && day < 16) { mIdx = 0; rDay = day + 16; } // April 30 days
  else if (month === 4 && day >= 16) { mIdx = 1; rDay = day - 15; }
  else if (month === 5 && day < 16) { mIdx = 1; rDay = day + 16; } // May 31 days
  else if (month === 5 && day >= 16) { mIdx = 2; rDay = day - 15; }
  else if (month === 6 && day < 17) { mIdx = 2; rDay = day + 15; } // June 30 days
  else if (month === 6 && day >= 17) { mIdx = 3; rDay = day - 16; }
  else if (month === 7 && day < 17) { mIdx = 3; rDay = day + 15; } // July 31 days
  else if (month === 7 && day >= 17) { mIdx = 4; rDay = day - 16; }
  else if (month === 8 && day < 17) { mIdx = 4; rDay = day + 15; } // August 31 days
  else if (month === 8 && day >= 17) { mIdx = 5; rDay = day - 16; }
  else if (month === 9 && day < 18) { mIdx = 5; rDay = day + 14; } // September 30 days
  else if (month === 9 && day >= 18) { mIdx = 6; rDay = day - 17; }
  else if (month === 10 && day < 17) { mIdx = 6; rDay = day + 14; } // October 31 days
  else if (month === 10 && day >= 17) { mIdx = 7; rDay = day - 16; }
  else if (month === 11 && day < 17) { mIdx = 7; rDay = day + 14; } // November 30 days
  else if (month === 11 && day >= 17) { mIdx = 8; rDay = day - 16; }
  else if (month === 0 && day < 15) { mIdx = 8; rDay = day + 15; } // December 31 days
  else if (month === 0 && day >= 15) { mIdx = 9; rDay = day - 14; }
  else if (month === 1 && day < 14) { mIdx = 9; rDay = day + 17; } // January 31 days
  else if (month === 1 && day >= 14) { mIdx = 10; rDay = day - 13; }
  else if (month === 2 && day < 15) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    mIdx = 10; rDay = day + ((isLeap ? 29 : 28) - 13);
  }
  else if (month === 2 && day >= 15) { mIdx = 11; rDay = day - 14; }
  else if (month === 3 && day < 15) { mIdx = 11; rDay = day + 17; } // March 31 days

  const aMonth = ASSAMESE_MONTHS[mIdx];

  return {
    regionalDay: rDay,
    regionalMonthName: aMonth.name,
    regionalMonthNative: aMonth.nativeName,
    regionalYear,
    formattedRegionalDate: `${toBanglaNumber(rDay)} ${aMonth.nativeName}, ${toBanglaNumber(regionalYear)}`
  };
}

/**
 * Calculates Indian Bengali Panjika date for any Gregorian date
 */
export function getBengaliPanjikaDate(date: Date): RegionalDateInfo {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  const day = date.getDate();

  let regionalYear = year - 593;
  if (month < 3 || (month === 3 && day < 15)) {
    regionalYear -= 1;
  }

  // Indian Bengali Panjika Month Start Dates
  // Boishakh: Apr 15
  // Joishtho: May 16
  // Asharh: Jun 16
  // Shrabon: Jul 17
  // Bhadro: Aug 17
  // Ashwin: Sep 17
  // Kartik: Oct 18
  // Agrahayan: Nov 17
  // Poush: Dec 17
  // Magh: Jan 15
  // Falgun: Feb 14
  // Chaitra: Mar 15

  let mIdx = 0;
  let rDay = 1;

  if (month === 3 && day >= 15) { mIdx = 0; rDay = day - 14; }
  else if (month === 4 && day < 16) { mIdx = 0; rDay = day + 16; }
  else if (month === 4 && day >= 16) { mIdx = 1; rDay = day - 15; }
  else if (month === 5 && day < 16) { mIdx = 1; rDay = day + 16; }
  else if (month === 5 && day >= 16) { mIdx = 2; rDay = day - 15; }
  else if (month === 6 && day < 17) { mIdx = 2; rDay = day + 15; }
  else if (month === 6 && day >= 17) { mIdx = 3; rDay = day - 16; }
  else if (month === 7 && day < 17) { mIdx = 3; rDay = day + 15; }
  else if (month === 7 && day >= 17) { mIdx = 4; rDay = day - 16; }
  else if (month === 8 && day < 17) { mIdx = 4; rDay = day + 15; }
  else if (month === 8 && day >= 17) { mIdx = 5; rDay = day - 16; }
  else if (month === 9 && day < 18) { mIdx = 5; rDay = day + 14; }
  else if (month === 9 && day >= 18) { mIdx = 6; rDay = day - 17; }
  else if (month === 10 && day < 17) { mIdx = 6; rDay = day + 14; }
  else if (month === 10 && day >= 17) { mIdx = 7; rDay = day - 16; }
  else if (month === 11 && day < 17) { mIdx = 7; rDay = day + 14; }
  else if (month === 11 && day >= 17) { mIdx = 8; rDay = day - 16; }
  else if (month === 0 && day < 15) { mIdx = 8; rDay = day + 15; }
  else if (month === 0 && day >= 15) { mIdx = 9; rDay = day - 14; }
  else if (month === 1 && day < 14) { mIdx = 9; rDay = day + 17; }
  else if (month === 1 && day >= 14) { mIdx = 10; rDay = day - 13; }
  else if (month === 2 && day < 15) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    mIdx = 10; rDay = day + ((isLeap ? 29 : 28) - 13);
  }
  else if (month === 2 && day >= 15) { mIdx = 11; rDay = day - 14; }
  else if (month === 3 && day < 15) { mIdx = 11; rDay = day + 17; }

  const bMonth = BENGALI_MONTHS[mIdx];

  return {
    regionalDay: rDay,
    regionalMonthName: bMonth.name,
    regionalMonthNative: bMonth.nativeName,
    regionalYear,
    formattedRegionalDate: `${toBanglaNumber(rDay)} ${bMonth.nativeName}, ${toBanglaNumber(regionalYear)}`
  };
}

/**
 * Converts a Gregorian date into Bangladesh Bangla Civil Calendar date (Bangla Academy System).
 */
export function convertGregorianToBanglaCivil(date: Date): {
  banglaYear: number;
  banglaMonthIndex: number; // 0 to 11
  banglaMonthName: string;
  banglaMonthNative: string;
  banglaDay: number;
  formattedBanglaDate: string;
} {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0 = Jan, 11 = Dec
  const day = date.getDate();

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  let banglaYear = year - 593;
  if (month < 3 || (month === 3 && day < 14)) {
    banglaYear -= 1;
  }

  let monthIdx = 0;
  let dayInMonth = 1;

  if (month === 3 && day >= 14) { monthIdx = 0; dayInMonth = day - 13; }
  else if (month === 4 && day < 15) { monthIdx = 0; dayInMonth = day + 17; }
  else if (month === 4 && day >= 15) { monthIdx = 1; dayInMonth = day - 14; }
  else if (month === 5 && day < 15) { monthIdx = 1; dayInMonth = day + 17; }
  else if (month === 5 && day >= 15) { monthIdx = 2; dayInMonth = day - 14; }
  else if (month === 6 && day < 16) { monthIdx = 2; dayInMonth = day + 16; }
  else if (month === 6 && day >= 16) { monthIdx = 3; dayInMonth = day - 15; }
  else if (month === 7 && day < 16) { monthIdx = 3; dayInMonth = day + 16; }
  else if (month === 7 && day >= 16) { monthIdx = 4; dayInMonth = day - 15; }
  else if (month === 8 && day < 17) { monthIdx = 4; dayInMonth = day + 16; }
  else if (month === 8 && day >= 17) { monthIdx = 5; dayInMonth = day - 16; }
  else if (month === 9 && day < 17) { monthIdx = 5; dayInMonth = day + 14; }
  else if (month === 9 && day >= 17) { monthIdx = 6; dayInMonth = day - 16; }
  else if (month === 10 && day < 16) { monthIdx = 6; dayInMonth = day + 15; }
  else if (month === 10 && day >= 16) { monthIdx = 7; dayInMonth = day - 15; }
  else if (month === 11 && day < 16) { monthIdx = 7; dayInMonth = day + 15; }
  else if (month === 11 && day >= 16) { monthIdx = 8; dayInMonth = day - 15; }
  else if (month === 0 && day < 15) { monthIdx = 8; dayInMonth = day + 16; }
  else if (month === 0 && day >= 15) { monthIdx = 9; dayInMonth = day - 14; }
  else if (month === 1 && day < 14) { monthIdx = 9; dayInMonth = day + 17; }
  else if (month === 1 && day >= 14) { monthIdx = 10; dayInMonth = day - 13; }
  else if (month === 2 && day < 15) {
    const febDays = isLeap ? 29 : 28;
    monthIdx = 10; dayInMonth = day + (febDays - 13);
  }
  else if (month === 2 && day >= 15) { monthIdx = 11; dayInMonth = day - 14; }
  else if (month === 3 && day < 14) { monthIdx = 11; dayInMonth = day + 17; }

  const bMonth = BANGLA_CIVIL_MONTHS[monthIdx];

  return {
    banglaYear,
    banglaMonthIndex: monthIdx,
    banglaMonthName: bMonth.name,
    banglaMonthNative: bMonth.nativeName,
    banglaDay: dayInMonth,
    formattedBanglaDate: `${toBanglaNumber(dayInMonth)} ${bMonth.nativeName}, ${toBanglaNumber(banglaYear)}`
  };
}
