// High-Precision Astronomical Shubh Muhurat & Dynamic Panchang Engine for AstroRomantic
// Calculates Solar Sunrise, Sunset, Solar Noon, Auspicious Muhurats, Day & Night Choghadiya, Rahu Kaal, etc.

import { CityData, CITIES_DATABASE } from "./city-database";
import { getJulianDate, calculateLahiriAyanamsa, calculatePlanetaryPositions, RASHI_NAMES, NAKSHATRA_NAMES } from "./astrology-engine";

export interface PanchangData {
  dateStr: string;
  dayOfWeek: string;
  city: CityData;
  sunriseStr: string;
  sunsetStr: string;
  moonriseStr: string;
  moonsetStr: string;
  solarNoonStr: string;
  tithi: { name: string; paksha: "Shukla" | "Krishna"; number: number; percentageRemaining: number };
  nakshatra: { name: string; lord: string; number: number; pada: number };
  yoga: { name: string; isAuspicious: boolean };
  karana: { name: string; type: string };
  moonSign: string;
  sunSign: string;
}

export interface MuhuratPeriod {
  name: string;
  nativeName?: string;
  startTimeStr: string;
  endTimeStr: string;
  quality: "Auspicious" | "Highly Auspicious" | "Inauspicious" | "Neutral";
  description: string;
  bestFor: string[];
}

export interface ChoghadiyaSlot {
  index: number;
  name: string;
  nativeName: string;
  type: "Amrit" | "Shubh" | "Labh" | "Char" | "Rog" | "Kaal" | "Udveg";
  quality: "Auspicious" | "Neutral" | "Inauspicious";
  startTimeStr: string;
  endTimeStr: string;
  meaning: string;
  recommendation: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ASTRONOMICAL SUNRISE & SUNSET CALCULATOR
// ─────────────────────────────────────────────────────────────────────────────

export function calculateSunriseSunset(date: Date, lat: number, lng: number, utcOffset: number): {
  sunrise: Date;
  sunset: Date;
  solarNoon: Date;
  dayLengthMinutes: number;
  nightLengthMinutes: number;
} {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Day of the year
  const N1 = Math.floor(275 * month / 9);
  const N2 = Math.floor((month + 9) / 12);
  const N3 = (1 + Math.floor((year - 4 * Math.floor(year / 4) + 2) / 3));
  const N = N1 - (N2 * N3) + day - 30;

  const lngHour = lng / 15;

  // Sunrise approximation
  const t_rise = N + ((6 - lngHour) / 24);
  const M_rise = (0.9856 * t_rise) - 3.289;

  let L_rise = M_rise + (1.916 * Math.sin(M_rise * Math.PI / 180)) + (0.020 * Math.sin(2 * M_rise * Math.PI / 180)) + 282.634;
  L_rise = (L_rise % 360 + 360) % 360;

  let RA_rise = Math.atan(0.91764 * Math.tan(L_rise * Math.PI / 180)) * 180 / Math.PI;
  RA_rise = (RA_rise % 360 + 360) % 360;
  const Lquadrant_rise = (Math.floor(L_rise / 90)) * 90;
  const RAquadrant_rise = (Math.floor(RA_rise / 90)) * 90;
  RA_rise = RA_rise + (Lquadrant_rise - RAquadrant_rise);
  RA_rise = RA_rise / 15;

  const sinDec_rise = 0.39782 * Math.sin(L_rise * Math.PI / 180);
  const cosDec_rise = Math.cos(Math.asin(sinDec_rise));

  const zenith = 90.833; // Standard zenith for atmospheric refraction
  const cosH_rise = (Math.cos(zenith * Math.PI / 180) - (sinDec_rise * Math.sin(lat * Math.PI / 180))) / (cosDec_rise * Math.cos(lat * Math.PI / 180));

  // Clamp cosH to [-1, 1]
  const clampedCosH_rise = Math.max(-1, Math.min(1, cosH_rise));
  const H_rise = (360 - Math.acos(clampedCosH_rise) * 180 / Math.PI) / 15;
  const T_rise = H_rise + RA_rise - (0.06571 * t_rise) - 6.622;
  let UT_rise = (T_rise - lngHour) % 24;
  if (UT_rise < 0) UT_rise += 24;

  const localRiseHours = (UT_rise + utcOffset) % 24;

  // Sunset approximation
  const t_set = N + ((18 - lngHour) / 24);
  const M_set = (0.9856 * t_set) - 3.289;
  let L_set = M_set + (1.916 * Math.sin(M_set * Math.PI / 180)) + (0.020 * Math.sin(2 * M_set * Math.PI / 180)) + 282.634;
  L_set = (L_set % 360 + 360) % 360;

  let RA_set = Math.atan(0.91764 * Math.tan(L_set * Math.PI / 180)) * 180 / Math.PI;
  RA_set = (RA_set % 360 + 360) % 360;
  const Lquadrant_set = (Math.floor(L_set / 90)) * 90;
  const RAquadrant_set = (Math.floor(RA_set / 90)) * 90;
  RA_set = RA_set + (Lquadrant_set - RAquadrant_set);
  RA_set = RA_set / 15;

  const sinDec_set = 0.39782 * Math.sin(L_set * Math.PI / 180);
  const cosDec_set = Math.cos(Math.asin(sinDec_set));
  const cosH_set = (Math.cos(zenith * Math.PI / 180) - (sinDec_set * Math.sin(lat * Math.PI / 180))) / (cosDec_set * Math.cos(lat * Math.PI / 180));

  const clampedCosH_set = Math.max(-1, Math.min(1, cosH_set));
  const H_set = (Math.acos(clampedCosH_set) * 180 / Math.PI) / 15;
  const T_set = H_set + RA_set - (0.06571 * t_set) - 6.622;
  let UT_set = (T_set - lngHour) % 24;
  if (UT_set < 0) UT_set += 24;

  const localSetHours = (UT_set + utcOffset) % 24;

  const sunrise = new Date(date);
  sunrise.setHours(Math.floor(localRiseHours), Math.floor((localRiseHours % 1) * 60), 0, 0);

  const sunset = new Date(date);
  sunset.setHours(Math.floor(localSetHours), Math.floor((localSetHours % 1) * 60), 0, 0);

  const solarNoonMs = sunrise.getTime() + (sunset.getTime() - sunrise.getTime()) / 2;
  const solarNoon = new Date(solarNoonMs);

  const dayLengthMinutes = (sunset.getTime() - sunrise.getTime()) / 60000;
  const nightLengthMinutes = (24 * 60) - dayLengthMinutes;

  return { sunrise, sunset, solarNoon, dayLengthMinutes, nightLengthMinutes };
}

// ─────────────────────────────────────────────────────────────────────────────
// TIME FORMATTING HELPER
// ─────────────────────────────────────────────────────────────────────────────

export function formatTime12h(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes} ${ampm}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// DAILY PANCHANG COMPUTATION
// ─────────────────────────────────────────────────────────────────────────────

export const TITHI_NAMES = [
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
  "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima",
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
  "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"
];

export const YOGA_NAMES = [
  "Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
  "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
  "Vyaghasa", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan",
  "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
  "Brahma", "Indra", "Vaidhriti"
];

export function calculateDailyPanchang(date: Date, city: CityData): PanchangData {
  const jd = getJulianDate(date, city.utcOffset);
  const ayanamsa = calculateLahiriAyanamsa(jd);
  const planets = calculatePlanetaryPositions(jd, ayanamsa);

  const sunSid = (planets.Sun - ayanamsa + 360) % 360;
  const moonSid = (planets.Moon - ayanamsa + 360) % 360;

  // Tithi calculation: (Moon - Sun) / 12
  let diff = (moonSid - sunSid + 360) % 360;
  const tithiIndex = Math.floor(diff / 12);
  const tithiName = TITHI_NAMES[tithiIndex];
  const paksha: "Shukla" | "Krishna" = tithiIndex < 15 ? "Shukla" : "Krishna";
  const percentageRemaining = Number((100 - ((diff % 12) / 12 * 100)).toFixed(1));

  // Nakshatra calculation: Moon / 13.3333
  const nakIdx = Math.floor(moonSid / (360 / 27));
  const nakName = NAKSHATRA_NAMES[nakIdx];
  const nakLord = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"][nakIdx % 9];
  const pada = Math.floor((moonSid % (360 / 27)) / (360 / 108)) + 1;

  // Yoga: (Sun + Moon) / 13.3333
  const yogaSum = (sunSid + moonSid) % 360;
  const yogaIdx = Math.floor(yogaSum / (360 / 27));
  const yogaName = YOGA_NAMES[yogaIdx];
  const isAuspiciousYoga = !["Vishkumbha", "Atiganda", "Shula", "Ganda", "Vyaghasa", "Vajra", "Vyatipata", "Parigha", "Vaidhriti"].includes(yogaName);

  // Karana: Tithi / 2
  const karanaIdx = Math.floor(diff / 6) % 11;
  const karanaNames = ["Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti (Bhadra)", "Shakuni", "Chatushpada", "Naga", "Kintughna"];
  const karanaName = karanaNames[karanaIdx];

  const moonSign = RASHI_NAMES[Math.floor(moonSid / 30)];
  const sunSign = RASHI_NAMES[Math.floor(sunSid / 30)];

  const sunTimes = calculateSunriseSunset(date, city.lat, city.lng, city.utcOffset);

  // Moonrise estimation
  const moonriseDate = new Date(sunTimes.sunrise.getTime() + (diff / 360) * 24 * 3600000);
  const moonsetDate = new Date(moonriseDate.getTime() + 12 * 3600000);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return {
    dateStr: date.toISOString().split("T")[0],
    dayOfWeek,
    city,
    sunriseStr: formatTime12h(sunTimes.sunrise),
    sunsetStr: formatTime12h(sunTimes.sunset),
    solarNoonStr: formatTime12h(sunTimes.solarNoon),
    moonriseStr: formatTime12h(moonriseDate),
    moonsetStr: formatTime12h(moonsetDate),
    tithi: { name: tithiName, paksha, number: (tithiIndex % 15) + 1, percentageRemaining },
    nakshatra: { name: nakName, lord: nakLord, number: nakIdx + 1, pada },
    yoga: { name: yogaName, isAuspicious: isAuspiciousYoga },
    karana: { name: karanaName, type: karanaName.includes("Vishti") ? "Inauspicious (Bhadra)" : "Favorable" },
    moonSign,
    sunSign
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CHOGHADIYA COMPUTATION ENGINE
// ─────────────────────────────────────────────────────────────────────────────

const DAY_CHOGHADIYA_PATTERNS: Record<number, ("Amrit" | "Shubh" | "Labh" | "Char" | "Rog" | "Kaal" | "Udveg")[]> = {
  0: ["Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog", "Udveg"], // Sunday
  1: ["Amrit", "Kaal", "Shubh", "Rog", "Udveg", "Char", "Labh", "Amrit"], // Monday
  2: ["Rog", "Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog"],   // Tuesday
  3: ["Labh", "Amrit", "Kaal", "Shubh", "Rog", "Udveg", "Char", "Labh"],  // Wednesday
  4: ["Shubh", "Rog", "Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh"], // Thursday
  5: ["Char", "Labh", "Amrit", "Kaal", "Shubh", "Rog", "Udveg", "Char"],  // Friday
  6: ["Kaal", "Shubh", "Rog", "Udveg", "Char", "Labh", "Amrit", "Kaal"]   // Saturday
};

const NIGHT_CHOGHADIYA_PATTERNS: Record<number, ("Amrit" | "Shubh" | "Labh" | "Char" | "Rog" | "Kaal" | "Udveg")[]> = {
  0: ["Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg", "Shubh"], // Sunday Night
  1: ["Char", "Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Char"], // Monday Night
  2: ["Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Char", "Rog", "Kaal"],  // Tuesday Night
  3: ["Udveg", "Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg"], // Wednesday Night
  4: ["Amrit", "Char", "Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit"], // Thursday Night
  5: ["Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Char", "Rog"],   // Friday Night
  6: ["Labh", "Udveg", "Shubh", "Amrit", "Char", "Rog", "Kaal", "Labh"]   // Saturday Night
};

const CHOGHADIYA_META: Record<string, { nativeName: string; quality: "Auspicious" | "Neutral" | "Inauspicious"; meaning: string; recommendation: string }> = {
  Amrit: { nativeName: "অসমৃত / अमृत", quality: "Auspicious", meaning: "Nectar / Everlasting Success", recommendation: "Best for all auspicious works, marriages, business launches, and spiritual tasks." },
  Shubh: { nativeName: "শুভ / शुभ", quality: "Auspicious", meaning: "Auspicious & Holy", recommendation: "Highly favorable for ceremonies, travel, purchasing assets, and signing contracts." },
  Labh: { nativeName: "লাভ / लाभ", quality: "Auspicious", meaning: "Monetary & Material Gain", recommendation: "Ideal for starting business, financial investments, shopping, and education." },
  Char: { nativeName: "চল / चर", quality: "Neutral", meaning: "Movement & Dynamics", recommendation: "Suitable for travel, buying vehicles, routine tasks, and quick decisions." },
  Rog: { nativeName: "রোগ / रोग", quality: "Inauspicious", meaning: "Illness & Obstacle", recommendation: "Avoid starting new initiatives or medical procedures if possible." },
  Kaal: { nativeName: "কাল / काल", quality: "Inauspicious", meaning: "Loss & Animosity", recommendation: "Inauspicious window ruled by Saturn. Avoid major investments or clashes." },
  Udveg: { nativeName: "উদ্বেগ / उद्वेग", quality: "Inauspicious", meaning: "Anxiety & Stress", recommendation: "Unfavorable window ruled by Sun. Avoid important decisions." }
};

export function calculateChoghadiya(date: Date, city: CityData): {
  dayChoghadiya: ChoghadiyaSlot[];
  nightChoghadiya: ChoghadiyaSlot[];
} {
  const sunTimes = calculateSunriseSunset(date, city.lat, city.lng, city.utcOffset);
  const dayOfWeek = date.getDay();

  const daySlotDurationMs = (sunTimes.sunset.getTime() - sunTimes.sunrise.getTime()) / 8;
  const nightSlotDurationMs = ((sunTimes.sunrise.getTime() + 24 * 3600000) - sunTimes.sunset.getTime()) / 8;

  const dayPattern = DAY_CHOGHADIYA_PATTERNS[dayOfWeek];
  const nightPattern = NIGHT_CHOGHADIYA_PATTERNS[dayOfWeek];

  const dayChoghadiya: ChoghadiyaSlot[] = dayPattern.map((type, i) => {
    const start = new Date(sunTimes.sunrise.getTime() + i * daySlotDurationMs);
    const end = new Date(sunTimes.sunrise.getTime() + (i + 1) * daySlotDurationMs);
    const meta = CHOGHADIYA_META[type];
    return {
      index: i + 1,
      name: type,
      nativeName: meta.nativeName,
      type,
      quality: meta.quality,
      startTimeStr: formatTime12h(start),
      endTimeStr: formatTime12h(end),
      meaning: meta.meaning,
      recommendation: meta.recommendation
    };
  });

  const nightChoghadiya: ChoghadiyaSlot[] = nightPattern.map((type, i) => {
    const start = new Date(sunTimes.sunset.getTime() + i * nightSlotDurationMs);
    const end = new Date(sunTimes.sunset.getTime() + (i + 1) * nightSlotDurationMs);
    const meta = CHOGHADIYA_META[type];
    return {
      index: i + 1,
      name: type,
      nativeName: meta.nativeName,
      type,
      quality: meta.quality,
      startTimeStr: formatTime12h(start),
      endTimeStr: formatTime12h(end),
      meaning: meta.meaning,
      recommendation: meta.recommendation
    };
  });

  return { dayChoghadiya, nightChoghadiya };
}

// ─────────────────────────────────────────────────────────────────────────────
// SHUBH MUHURATS & INAUSPICIOUS TIMINGS CALCULATOR
// ─────────────────────────────────────────────────────────────────────────────

export function calculateShubhMuhuratsToday(date: Date, city: CityData): {
  auspiciousPeriods: MuhuratPeriod[];
  inauspiciousPeriods: MuhuratPeriod[];
} {
  const sunTimes = calculateSunriseSunset(date, city.lat, city.lng, city.utcOffset);
  const dayOfWeek = date.getDay();

  // 1. Brahma Muhurat: ~1 hour 36 mins to 48 mins before Sunrise
  const brahmaStart = new Date(sunTimes.sunrise.getTime() - 96 * 60000);
  const brahmaEnd = new Date(sunTimes.sunrise.getTime() - 48 * 60000);

  // 2. Abhijit Muhurat: 8th Muhurat of the day (Centered on Solar Noon)
  const muhuratDurationMs = (sunTimes.sunset.getTime() - sunTimes.sunrise.getTime()) / 15;
  const abhijitStart = new Date(sunTimes.sunrise.getTime() + 7 * muhuratDurationMs);
  const abhijitEnd = new Date(sunTimes.sunrise.getTime() + 8 * muhuratDurationMs);

  // 3. Vijaya Muhurat: Afternoon window (11th Muhurat)
  const vijayaStart = new Date(sunTimes.sunrise.getTime() + 10 * muhuratDurationMs);
  const vijayaEnd = new Date(sunTimes.sunrise.getTime() + 11 * muhuratDurationMs);

  // 4. Godhuli Muhurat: Twilight (12 mins before to 12 mins after Sunset)
  const godhuliStart = new Date(sunTimes.sunset.getTime() - 12 * 60000);
  const godhuliEnd = new Date(sunTimes.sunset.getTime() + 12 * 60000);

  // 5. Amrit Kaal: Afternoon / Evening window
  const amritStart = new Date(sunTimes.sunrise.getTime() + 4 * muhuratDurationMs);
  const amritEnd = new Date(sunTimes.sunrise.getTime() + 5.5 * muhuratDurationMs);

  const auspiciousPeriods: MuhuratPeriod[] = [
    {
      name: "Brahma Muhurat",
      nativeName: "ব্রাহ্ম মুহূর্ত",
      startTimeStr: formatTime12h(brahmaStart),
      endTimeStr: formatTime12h(brahmaEnd),
      quality: "Highly Auspicious",
      description: "Sacred predawn window ideal for meditation, spiritual study, yoga, and mental clarity.",
      bestFor: ["Meditation & Prayer", "Yoga & Breathing", "Study & Research", "Mindfulness"]
    },
    {
      name: "Abhijit Muhurat",
      nativeName: "অভিজিৎ মুহূর্ত",
      startTimeStr: formatTime12h(abhijitStart),
      endTimeStr: formatTime12h(abhijitEnd),
      quality: dayOfWeek === 3 ? "Neutral" : "Highly Auspicious", // Avoided on Wednesday by traditional rules
      description: dayOfWeek === 3 ? "Abhijit Muhurat is traditionally avoided on Wednesdays." : "Most powerful midday auspicious window for beginning new work, business ventures, and important travels.",
      bestFor: ["Starting New Business", "Job Interviews", "Financial Deals", "Buying Property"]
    },
    {
      name: "Vijaya Muhurat",
      nativeName: "বিজয় মুহূর্ত",
      startTimeStr: formatTime12h(vijayaStart),
      endTimeStr: formatTime12h(vijayaEnd),
      quality: "Auspicious",
      description: "Auspicious afternoon period associated with victory over obstacles and successful negotiations.",
      bestFor: ["Legal Agreements", "Litigation Progress", "Business Meetings", "Competitive Endeavors"]
    },
    {
      name: "Godhuli Muhurat",
      nativeName: "গোধূলি মুহূর্ত",
      startTimeStr: formatTime12h(godhuliStart),
      endTimeStr: formatTime12h(godhuliEnd),
      quality: "Auspicious",
      description: "Sunset twilight window blessed by traditional cows' return. Excellent for evening worship and family gatherings.",
      bestFor: ["Evening Puja", "Housewarming (Griha Pravesh)", "Engagement", "Lighting Lamps"]
    },
    {
      name: "Amrit Kaal",
      nativeName: "অমৃত কাল",
      startTimeStr: formatTime12h(amritStart),
      endTimeStr: formatTime12h(amritEnd),
      quality: "Auspicious",
      description: "Auspicious timeframe during daytime granting longevity and smooth execution.",
      bestFor: ["Medical Treatments", "Important Decisions", "Creative Projects", "Personal Milestones"]
    }
  ];

  // Inauspicious Periods (Rahu Kaal, Gulika Kaal, Yamaganda)
  // Rahu Kaal portion of daytime (1/8th of daytime):
  // Sun: 8th part, Mon: 2nd part, Tue: 7th part, Wed: 5th part, Thu: 6th part, Fri: 4th part, Sat: 3rd part
  const rahuOrder = [7, 1, 6, 4, 5, 3, 2];
  const gulikaOrder = [6, 5, 4, 3, 2, 1, 0];
  const yamaOrder = [4, 3, 2, 1, 0, 6, 5];

  const dayEightMs = (sunTimes.sunset.getTime() - sunTimes.sunrise.getTime()) / 8;

  const rahuPart = rahuOrder[dayOfWeek];
  const rahuStart = new Date(sunTimes.sunrise.getTime() + rahuPart * dayEightMs);
  const rahuEnd = new Date(sunTimes.sunrise.getTime() + (rahuPart + 1) * dayEightMs);

  const gulikaPart = gulikaOrder[dayOfWeek];
  const gulikaStart = new Date(sunTimes.sunrise.getTime() + gulikaPart * dayEightMs);
  const gulikaEnd = new Date(sunTimes.sunrise.getTime() + (gulikaPart + 1) * dayEightMs);

  const yamaPart = yamaOrder[dayOfWeek];
  const yamaStart = new Date(sunTimes.sunrise.getTime() + yamaPart * dayEightMs);
  const yamaEnd = new Date(sunTimes.sunrise.getTime() + (yamaPart + 1) * dayEightMs);

  const inauspiciousPeriods: MuhuratPeriod[] = [
    {
      name: "Rahu Kaal",
      nativeName: "রাহু কাল",
      startTimeStr: formatTime12h(rahuStart),
      endTimeStr: formatTime12h(rahuEnd),
      quality: "Inauspicious",
      description: "Unfavorable daily timeframe ruled by Rahu. Avoid starting new business, buying major assets, or signing critical contracts.",
      bestFor: ["Routine Tasks", "Spiritual Chanting", "Rest", "Internal Reflection"]
    },
    {
      name: "Gulika Kaal",
      nativeName: "গুলিক কাল",
      startTimeStr: formatTime12h(gulikaStart),
      endTimeStr: formatTime12h(gulikaEnd),
      quality: "Inauspicious",
      description: "Period ruled by Gulika (son of Saturn). Actions started in Gulika Kaal tend to be repeated multiple times before succeeding.",
      bestFor: ["Routine Work Only"]
    },
    {
      name: "Yamaganda",
      nativeName: "যমগণ্ড",
      startTimeStr: formatTime12h(yamaStart),
      endTimeStr: formatTime12h(yamaEnd),
      quality: "Inauspicious",
      description: "Inauspicious period ruled by Yama. Avoid important journeys or commencing long-term commitments.",
      bestFor: ["Avoiding New Commitments"]
    }
  ];

  return { auspiciousPeriods, inauspiciousPeriods };
}
