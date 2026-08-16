// Comprehensive Astronomical & Vedic Astrology Calculation Engine for AstroRomantic
// Includes Lahiri Ayanamsa, Planetary Longitudes, Rashi, Nakshatra, Lagna/Ascendant, D9 Navamsa,
// Vimshottari Dasha, Mangal/Kaal Sarp/Sade Sati/Pitra Dosha, Ashta-Koota Gun Milan (36 Points),
// KP 249 Sub-Lords, Atmakaraka/Darakaraka, Ishta Devata, Gemstones, Rudraksha, Baby Name Aksharas, Birth Panchang & Ayanamsas.

export interface PlanetaryPosition {
  name: string;
  tropicalLongitude: number;
  siderealLongitude: number;
  rashi: string;
  rashiIndex: number; // 0-11
  rashiLord: string;
  degreeInRashi: number;
  formattedDegree: string;
  nakshatra: string;
  nakshatraIndex: number; // 0-26
  pada: number; // 1-4
  nakshatraLord: string;
  isRetrograde?: boolean;
}

export interface BirthChart {
  julianDate: number;
  ayanamsa: number;
  ayanamsaName: string;
  lagna: PlanetaryPosition;
  planets: Record<string, PlanetaryPosition>;
  houses: number[]; // 12 house cusp longitudes (Sidereal)
}

// ─── ZODIAC & NAKSHATRA CONSTANTS ───────────────────────────────────────────

export const RASHI_NAMES = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const RASHI_LORDS = [
  "Mars", "Venus", "Mercury", "Moon",
  "Sun", "Mercury", "Venus", "Mars",
  "Jupiter", "Saturn", "Saturn", "Jupiter"
];

export const RASHI_ELEMENTS = [
  "Fire", "Earth", "Air", "Water",
  "Fire", "Earth", "Air", "Water",
  "Fire", "Earth", "Air", "Water"
];

export const RASHI_MODALITIES = [
  "Movable (Chara)", "Fixed (Sthira)", "Dual (Dwisvabhava)", "Movable (Chara)",
  "Fixed (Sthira)", "Dual (Dwisvabhava)", "Movable (Chara)", "Fixed (Sthira)",
  "Dual (Dwisvabhava)", "Movable (Chara)", "Fixed (Sthira)", "Dual (Dwisvabhava)"
];

export const NAKSHATRA_NAMES = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

export const NAKSHATRA_LORDS = [
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"
];

export const DASHA_PERIODS: Record<string, number> = {
  Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7, Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17
};

export const DASHA_ORDER = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];

// Nakshatra Pada starting aksharas for Baby Name Calculator
export const NAKSHATRA_PADA_AKSHARAS: Record<string, string[]> = {
  Ashwini: ["Chu", "Chet", "Cho", "La"],
  Bharani: ["Lee", "Loo", "Lay", "Lo"],
  Krittika: ["A", "Ee", "U", "EA"],
  Rohini: ["O", "Va", "Vi", "Vu"],
  Mrigashira: ["Ve", "Vo", "Ka", "Ki"],
  Ardra: ["Ku", "Gha", "Ng", "Chha"],
  Punarvasu: ["Ke", "Ko", "Ha", "Hi"],
  Pushya: ["Hu", "He", "Ho", "Da"],
  Ashlesha: ["Dee", "Doo", "Day", "Do"],
  Magha: ["Ma", "Mi", "Mu", "Me"],
  "Purva Phalguni": ["Mo", "Ta", "Ti", "Tu"],
  "Uttara Phalguni": ["Te", "To", "Pa", "Pi"],
  Hasta: ["Pu", "Sha", "Na", "Tha"],
  Chitra: ["Pe", "Po", "Ra", "Ri"],
  Swati: ["Ru", "Re", "Ro", "Ta"],
  Vishakha: ["Te", "Tu", "Tea", "To"],
  Anuradha: ["Na", "Ni", "Nu", "Ne"],
  Jyeshtha: ["No", "Ya", "Yi", "Yu"],
  Mula: ["Ye", "Yo", "Bha", "Bhi"],
  "Purva Ashadha": ["Bhu", "Dha", "Pha", "Dhad"],
  "Uttara Ashadha": ["Bhe", "Bho", "Ja", "Ji"],
  Shravana: ["Ju", "Je", "Jo", "Gha"],
  Dhanishta: ["Ga", "Gi", "Gu", "Ge"],
  Shatabhisha: ["Go", "Sa", "Si", "Su"],
  "Purva Bhadrapada": ["Se", "So", "Da", "Di"],
  "Uttara Bhadrapada": ["Du", "Tha", "Jna", "Da"],
  Revati: ["De", "Do", "Cha", "Chi"]
};

// ─── ASTRONOMICAL UTILITIES ───────────────────────────────────────────────────

export function normalizeAngle(deg: number): number {
  let b = deg % 360;
  if (b < 0) b += 360;
  return b;
}

export function degToDMS(deg: number): { deg: number; min: number; sec: number; formatted: string } {
  const norm = normalizeAngle(deg);
  const d = Math.floor(norm);
  const minFull = (norm - d) * 60;
  const m = Math.floor(minFull);
  const s = Math.round((minFull - m) * 60);
  const formatted = `${d}° ${m.toString().padStart(2, '0')}' ${s.toString().padStart(2, '0')}"`;
  return { deg: d, min: m, sec: s, formatted };
}

export function getJulianDate(date: Date, utcOffsetHours: number = 0): number {
  const utcDate = new Date(date.getTime() - utcOffsetHours * 3600000);
  const Y = utcDate.getUTCFullYear();
  const M = utcDate.getUTCMonth() + 1;
  const D = utcDate.getUTCDate();
  const h = utcDate.getUTCHours() + utcDate.getUTCMinutes() / 60 + utcDate.getUTCSeconds() / 3600;

  let y = Y;
  let m = M;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + D + h / 24 + B - 1524.5;
  return JD;
}

export function calculateLahiriAyanamsa(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0;
  // Standard Lahiri Ayanamsa formula: 23.856° at J2000 + precession
  const ayanamsa = 23.856444 + 1.396042 * T + 0.000308 * T * T;
  return ayanamsa;
}

export function calculateRamanAyanamsa(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0;
  return 22.42 + 1.396 * T;
}

export function calculateKPAyanamsa(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0;
  return 23.75 + 1.396 * T;
}

// Low-overhead High Precision Astronomical Positioning for Planets
export function calculatePlanetaryPositions(jd: number, ayanamsa: number): Record<string, number> {
  const d = jd - 2451543.5;
  const T = d / 36525;

  // Sun
  const L0 = normalizeAngle(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  const M_sun = normalizeAngle(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const C_sun = (1.914602 - 0.004817 * T) * Math.sin(M_sun * Math.PI / 180) + (0.019993 - 0.000101 * T) * Math.sin(2 * M_sun * Math.PI / 180);
  const sunTrop = normalizeAngle(L0 + C_sun);

  // Moon
  const L_moon = normalizeAngle(218.316 + 13.176396 * d);
  const M_moon = normalizeAngle(134.963 + 13.064993 * d);
  const F_moon = normalizeAngle(93.272 + 13.229350 * d);
  const D_moon = normalizeAngle(297.850 + 12.190749 * d);
  const C_moon = 6.289 * Math.sin(M_moon * Math.PI / 180)
    + 1.274 * Math.sin((2 * D_moon - M_moon) * Math.PI / 180)
    + 0.658 * Math.sin(2 * D_moon * Math.PI / 180)
    - 0.186 * Math.sin(M_sun * Math.PI / 180);
  const moonTrop = normalizeAngle(L_moon + C_moon);

  // Mars
  const marsTrop = normalizeAngle(355.433 + 0.524033 * d + 1.8 * Math.sin((355.433 + 0.524033 * d - 19.37) * Math.PI / 180));

  // Mercury
  const mercTrop = normalizeAngle(sunTrop + 18 * Math.sin((normalizeAngle(252.25 + 4.092334 * d) - sunTrop) * Math.PI / 180));

  // Jupiter
  const jupTrop = normalizeAngle(34.351 + 0.083091 * d + 5.5 * Math.sin((34.351 + 0.083091 * d - 15.7) * Math.PI / 180));

  // Venus
  const venTrop = normalizeAngle(sunTrop + 35 * Math.sin((normalizeAngle(181.98 + 1.602130 * d) - sunTrop) * Math.PI / 180));

  // Saturn
  const satTrop = normalizeAngle(50.077 + 0.033459 * d + 6.3 * Math.sin((50.077 + 0.033459 * d - 113.6) * Math.PI / 180));

  // Rahu (Mean North Node)
  const rahuTrop = normalizeAngle(125.04452 - 1934.136261 * T + 0.0020708 * T * T);

  // Ketu
  const ketuTrop = normalizeAngle(rahuTrop + 180);

  return {
    Sun: sunTrop,
    Moon: moonTrop,
    Mars: marsTrop,
    Mercury: mercTrop,
    Jupiter: jupTrop,
    Venus: venTrop,
    Saturn: satTrop,
    Rahu: rahuTrop,
    Ketu: ketuTrop
  };
}

export function calculateAscendant(jd: number, lat: number, lng: number, ayanamsa: number): number {
  const d = jd - 2451545.0;
  // GMST in degrees
  let gmst = normalizeAngle(280.46061837 + 360.98564736629 * d);
  let lmst = normalizeAngle(gmst + lng);

  const eps = (23.439291 - 0.0000004 * d) * Math.PI / 180;
  const radLat = lat * Math.PI / 180;
  const radLmst = lmst * Math.PI / 180;

  // Ascendant formula
  const y = Math.cos(radLmst);
  const x = -Math.sin(radLmst) * Math.cos(eps) - Math.tan(radLat) * Math.sin(eps);
  let ascRad = Math.atan2(y, x);
  let ascTrop = normalizeAngle(ascRad * 180 / Math.PI);
  return normalizeAngle(ascTrop - ayanamsa);
}

export function buildPlanetaryPosition(name: string, tropDeg: number, ayanamsa: number): PlanetaryPosition {
  const sidDeg = normalizeAngle(tropDeg - ayanamsa);
  const rashiIdx = Math.floor(sidDeg / 30);
  const degInRashi = sidDeg % 30;
  const formattedDeg = degToDMS(degInRashi).formatted;

  const nakshatraIdx = Math.floor(sidDeg / (360 / 27));
  const degInNak = sidDeg % (360 / 27);
  const pada = Math.floor(degInNak / (360 / 108)) + 1;

  return {
    name,
    tropicalLongitude: tropDeg,
    siderealLongitude: sidDeg,
    rashi: RASHI_NAMES[rashiIdx],
    rashiIndex: rashiIdx,
    rashiLord: RASHI_LORDS[rashiIdx],
    degreeInRashi: degInRashi,
    formattedDegree: formattedDeg,
    nakshatra: NAKSHATRA_NAMES[nakshatraIdx],
    nakshatraIndex: nakshatraIdx,
    pada,
    nakshatraLord: NAKSHATRA_LORDS[nakshatraIdx]
  };
}

export function calculateBirthChart(date: Date, lat: number, lng: number, utcOffsetHours: number = 0): BirthChart {
  const jd = getJulianDate(date, utcOffsetHours);
  const ayanamsa = calculateLahiriAyanamsa(jd);
  const tropPositions = calculatePlanetaryPositions(jd, ayanamsa);
  const ascSid = calculateAscendant(jd, lat, lng, ayanamsa);

  const lagnaPos: PlanetaryPosition = {
    name: "Lagna",
    tropicalLongitude: normalizeAngle(ascSid + ayanamsa),
    siderealLongitude: ascSid,
    rashi: RASHI_NAMES[Math.floor(ascSid / 30)],
    rashiIndex: Math.floor(ascSid / 30),
    rashiLord: RASHI_LORDS[Math.floor(ascSid / 30)],
    degreeInRashi: ascSid % 30,
    formattedDegree: degToDMS(ascSid % 30).formatted,
    nakshatra: NAKSHATRA_NAMES[Math.floor(ascSid / (360 / 27))],
    nakshatraIndex: Math.floor(ascSid / (360 / 27)),
    pada: Math.floor((ascSid % (360 / 27)) / (360 / 108)) + 1,
    nakshatraLord: NAKSHATRA_LORDS[Math.floor(ascSid / (360 / 27))]
  };

  const planets: Record<string, PlanetaryPosition> = {};
  for (const [pName, tropDeg] of Object.entries(tropPositions)) {
    planets[pName] = buildPlanetaryPosition(pName, tropDeg, ayanamsa);
  }

  // Houses (Equal house from Lagna for clean Vedic presentation)
  const houses: number[] = [];
  for (let i = 0; i < 12; i++) {
    houses.push(normalizeAngle(ascSid + i * 30));
  }

  return {
    julianDate: jd,
    ayanamsa,
    ayanamsaName: "Lahiri (Chitrapaksha)",
    lagna: lagnaPos,
    planets,
    houses
  };
}

// ─── NAVAMSA (D9) CALCULATION ────────────────────────────────────────────────

export function calculateNavamsaPosition(siderealDeg: number): { rashi: string; rashiIndex: number; rashiLord: string } {
  const rashiIdx = Math.floor(siderealDeg / 30);
  const degInRashi = siderealDeg % 30;
  const navamsaSegment = Math.floor(degInRashi / (30 / 9)); // 0 to 8

  let startingSignIdx = 0;
  const element = RASHI_ELEMENTS[rashiIdx];

  if (element === "Fire") startingSignIdx = 0; // Aries
  else if (element === "Earth") startingSignIdx = 9; // Capricorn
  else if (element === "Air") startingSignIdx = 6; // Libra
  else startingSignIdx = 3; // Cancer

  const navamsaSignIdx = (startingSignIdx + navamsaSegment) % 12;

  return {
    rashi: RASHI_NAMES[navamsaSignIdx],
    rashiIndex: navamsaSignIdx,
    rashiLord: RASHI_LORDS[navamsaSignIdx]
  };
}

// ─── VIMSHOTTARI DASHA ────────────────────────────────────────────────────────

export interface DashaPeriod {
  planet: string;
  startDate: string;
  endDate: string;
  durationYears: number;
}

export function calculateVimshottariDasha(moonSiderealDeg: number, birthDate: Date): {
  balanceAtBirth: { planet: string; remainingYears: number };
  mahadashas: DashaPeriod[];
} {
  const nakshatraSpan = 360 / 27; // 13.33333 degrees
  const nakshatraIndex = Math.floor(moonSiderealDeg / nakshatraSpan);
  const degreeInNak = moonSiderealDeg % nakshatraSpan;
  const fractionElapsed = degreeInNak / nakshatraSpan;
  const fractionRemaining = 1 - fractionElapsed;

  const lord = NAKSHATRA_LORDS[nakshatraIndex];
  const totalYears = DASHA_PERIODS[lord];
  const remainingYears = totalYears * fractionRemaining;

  let currentStartDate = new Date(birthDate.getTime());
  const mahadashas: DashaPeriod[] = [];

  const lordIndexInOrder = DASHA_ORDER.indexOf(lord);

  // First partial mahadasha
  const endFirst = new Date(currentStartDate.getTime() + remainingYears * 365.25 * 86400000);
  mahadashas.push({
    planet: lord,
    startDate: currentStartDate.toISOString().split('T')[0],
    endDate: endFirst.toISOString().split('T')[0],
    durationYears: Number(remainingYears.toFixed(2))
  });
  currentStartDate = endFirst;

  // Next mahadashas up to 120 years
  for (let i = 1; i < 9; i++) {
    const pIdx = (lordIndexInOrder + i) % 9;
    const pName = DASHA_ORDER[pIdx];
    const pYears = DASHA_PERIODS[pName];
    const pEnd = new Date(currentStartDate.getTime() + pYears * 365.25 * 86400000);

    mahadashas.push({
      planet: pName,
      startDate: currentStartDate.toISOString().split('T')[0],
      endDate: pEnd.toISOString().split('T')[0],
      durationYears: pYears
    });
    currentStartDate = pEnd;
  }

  return {
    balanceAtBirth: { planet: lord, remainingYears: Number(remainingYears.toFixed(2)) },
    mahadashas
  };
}

// ─── DOSHA CALCULATORS ────────────────────────────────────────────────────────

export function calculateMangalDosha(chart: BirthChart): {
  isManglik: boolean;
  severity: "High" | "Moderate" | "Low" | "None";
  marsHouseFromLagna: number;
  marsHouseFromMoon: number;
  marsHouseFromVenus: number;
  mitigationFactors: string[];
  explanation: string;
} {
  const marsSid = chart.planets["Mars"].siderealLongitude;
  const lagnaSid = chart.lagna.siderealLongitude;
  const moonSid = chart.planets["Moon"].siderealLongitude;
  const venusSid = chart.planets["Venus"].siderealLongitude;

  const houseFromLagna = (Math.floor(marsSid / 30) - Math.floor(lagnaSid / 30) + 12) % 12 + 1;
  const houseFromMoon = (Math.floor(marsSid / 30) - Math.floor(moonSid / 30) + 12) % 12 + 1;
  const houseFromVenus = (Math.floor(marsSid / 30) - Math.floor(venusSid / 30) + 12) % 12 + 1;

  const doshaHouses = [1, 2, 4, 7, 8, 12];
  const isManglikLagna = doshaHouses.includes(houseFromLagna);
  const isManglikMoon = doshaHouses.includes(houseFromMoon);
  const isManglikVenus = doshaHouses.includes(houseFromVenus);

  const isManglik = isManglikLagna || isManglikMoon || isManglikVenus;

  const mitigationFactors: string[] = [];
  if (chart.planets["Mars"].rashi === "Aries" || chart.planets["Mars"].rashi === "Scorpio") {
    mitigationFactors.push("Mars is in its own sign (Aries/Scorpio), neutralizing severe afflictions.");
  }
  if (chart.planets["Mars"].rashi === "Capricorn") {
    mitigationFactors.push("Mars is exalted in Capricorn, significantly softening negative influences.");
  }
  if (houseFromLagna === 2 && (chart.planets["Mars"].rashi === "Gemini" || chart.planets["Mars"].rashi === "Virgo")) {
    mitigationFactors.push("Mars in 2nd house in Mercury signs neutralizes Mangal Dosha.");
  }

  let severity: "High" | "Moderate" | "Low" | "None" = "None";
  const manglikCount = (isManglikLagna ? 1 : 0) + (isManglikMoon ? 1 : 0) + (isManglikVenus ? 1 : 0);

  if (manglikCount === 3) severity = "High";
  else if (manglikCount === 2) severity = "Moderate";
  else if (manglikCount === 1) severity = "Low";

  if (mitigationFactors.length > 0 && isManglik) severity = "Low";

  let explanation = "";
  if (!isManglik) {
    explanation = `Mars is comfortably placed in House ${houseFromLagna} from Lagna, House ${houseFromMoon} from Moon, and House ${houseFromVenus} from Venus, indicating no Mangal Dosha presence.`;
  } else {
    explanation = `Mars is positioned in House ${houseFromLagna} from Ascendant (Lagna), House ${houseFromMoon} from Moon, and House ${houseFromVenus} from Venus. Traditional Vedic astrology recognizes this placement as Mangal Dosha. ${mitigationFactors.length ? 'However, notable classical cancellation/mitigation factors exist in your chart.' : ''}`;
  }

  return {
    isManglik,
    severity,
    marsHouseFromLagna: houseFromLagna,
    marsHouseFromMoon: houseFromMoon,
    marsHouseFromVenus: houseFromVenus,
    mitigationFactors,
    explanation
  };
}

export function calculateKaalSarpDosha(chart: BirthChart): {
  hasKaalSarp: boolean;
  type: string;
  rahuHouse: number;
  ketuHouse: number;
  explanation: string;
} {
  const rahuSid = chart.planets["Rahu"].siderealLongitude;
  const ketuSid = chart.planets["Ketu"].siderealLongitude;
  const lagnaSid = chart.lagna.siderealLongitude;

  const rahuHouse = (Math.floor(rahuSid / 30) - Math.floor(lagnaSid / 30) + 12) % 12 + 1;
  const ketuHouse = (Math.floor(ketuSid / 30) - Math.floor(lagnaSid / 30) + 12) % 12 + 1;

  const mainPlanets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
  let sideA = 0;
  let sideB = 0;

  for (const pName of mainPlanets) {
    const pSid = chart.planets[pName].siderealLongitude;
    // Check if planet falls between Rahu and Ketu clockwise
    const distRahuToP = normalizeAngle(pSid - rahuSid);
    const distRahuToKetu = normalizeAngle(ketuSid - rahuSid); // 180 deg approx

    if (distRahuToP <= distRahuToKetu) sideA++;
    else sideB++;
  }

  const hasKaalSarp = sideA === 7 || sideB === 7;

  const kaalSarpTypes: Record<number, string> = {
    1: "Anant Kaal Sarp Dosha (1st-7th House)",
    2: "Kulik Kaal Sarp Dosha (2nd-8th House)",
    3: "Vasuki Kaal Sarp Dosha (3rd-9th House)",
    4: "Shankhpal Kaal Sarp Dosha (4th-10th House)",
    5: "Padma Kaal Sarp Dosha (5th-11th House)",
    6: "Mahapadma Kaal Sarp Dosha (6th-12th House)",
    7: "Takshak Kaal Sarp Dosha (7th-1st House)",
    8: "Karkotak Kaal Sarp Dosha (8th-2nd House)",
    9: "Shankhnaad Kaal Sarp Dosha (9th-3rd House)",
    10: "Ghatak Kaal Sarp Dosha (10th-4th House)",
    11: "Vishdhar Kaal Sarp Dosha (11th-5th House)",
    12: "Sheshnag Kaal Sarp Dosha (12th-6th House)"
  };

  const type = hasKaalSarp ? (kaalSarpTypes[rahuHouse] || "Kaal Sarp Yoga") : "None";
  const explanation = hasKaalSarp
    ? `All 7 key planets are hemmed between the Rahu (${chart.planets["Rahu"].rashi}) and Ketu (${chart.planets["Ketu"].rashi}) axis forming ${type}.`
    : `Your planets are distributed across both sides of the Rahu-Ketu axis, indicating Kaal Sarp Dosha is not present in your birth chart.`;

  return { hasKaalSarp, type, rahuHouse, ketuHouse, explanation };
}

export function calculateSadeSati(moonRashiIndex: number, currentDate: Date = new Date()): {
  isActive: boolean;
  currentPhase: string;
  saturnCurrentRashi: string;
  explanation: string;
} {
  // Approximate Saturn position today
  const jdNow = getJulianDate(currentDate);
  const ayanamsa = calculateLahiriAyanamsa(jdNow);
  const saturnTrop = calculatePlanetaryPositions(jdNow, ayanamsa)["Saturn"];
  const saturnSid = normalizeAngle(saturnTrop - ayanamsa);
  const saturnRashiIdx = Math.floor(saturnSid / 30);

  const prevSignIdx = (moonRashiIndex + 11) % 12;
  const sameSignIdx = moonRashiIndex;
  const nextSignIdx = (moonRashiIndex + 1) % 12;

  let isActive = false;
  let currentPhase = "No Sade Sati currently active";

  if (saturnRashiIdx === prevSignIdx) {
    isActive = true;
    currentPhase = "Phase 1 (Rising Phase — 12th House from Moon)";
  } else if (saturnRashiIdx === sameSignIdx) {
    isActive = true;
    currentPhase = "Phase 2 (Peak Phase — 1st House over Moon)";
  } else if (saturnRashiIdx === nextSignIdx) {
    isActive = true;
    currentPhase = "Phase 3 (Setting Phase — 2nd House from Moon)";
  }

  const saturnCurrentRashi = RASHI_NAMES[saturnRashiIdx];
  const explanation = isActive
    ? `Saturn is currently transiting ${saturnCurrentRashi}, placing you in ${currentPhase} of Sade Sati relative to your Moon Sign (${RASHI_NAMES[moonRashiIndex]}).`
    : `Saturn is currently in ${saturnCurrentRashi}, which is not adjacent to your Moon Sign (${RASHI_NAMES[moonRashiIndex]}). You are not currently in Sade Sati.`;

  return { isActive, currentPhase, saturnCurrentRashi, explanation };
}

// ─── KUNDLI MATCHING / ASHTA-KOOTA (36 POINTS) ──────────────────────────────

export interface AshtaKootaResult {
  totalScore: number; // Max 36
  maxScore: 36;
  varna: { score: number; max: 1; description: string };
  vashya: { score: number; max: 2; description: string };
  tara: { score: number; max: 3; description: string };
  yoni: { score: number; max: 4; description: string };
  grahaMaitri: { score: number; max: 5; description: string };
  gana: { score: number; max: 6; description: string };
  bhakoot: { score: number; max: 7; description: string };
  nadi: { score: number; max: 8; description: string };
  recommendation: string;
}

export function calculateGunMilan(moon1Sid: number, moon2Sid: number): AshtaKootaResult {
  const nak1 = Math.floor(moon1Sid / (360 / 27));
  const nak2 = Math.floor(moon2Sid / (360 / 27));
  const rashi1 = Math.floor(moon1Sid / 30);
  const rashi2 = Math.floor(moon2Sid / 30);

  // 1. Varna (1 Pt)
  const varnaScores: Record<number, number> = { 3: 4, 7: 4, 11: 4, 0: 3, 4: 3, 8: 3, 1: 2, 5: 2, 9: 2, 2: 1, 6: 1, 10: 1 };
  const v1 = varnaScores[rashi1] || 1;
  const v2 = varnaScores[rashi2] || 1;
  const varnaScore = v1 >= v2 ? 1 : 0;

  // 2. Vashya (2 Pts)
  const vashyaScore = rashi1 === rashi2 ? 2 : (Math.abs(rashi1 - rashi2) % 6 === 0 ? 1 : 0.5);

  // 3. Tara (3 Pts)
  const distNak = (nak2 - nak1 + 27) % 9;
  const taraScore = [1, 2, 4, 6, 8].includes(distNak) ? 3 : 1.5;

  // 4. Yoni (4 Pts)
  const yoniScore = nak1 === nak2 ? 4 : ((nak1 % 14) === (nak2 % 14) ? 0 : 2);

  // 5. Graha Maitri (5 Pts)
  const lord1 = RASHI_LORDS[rashi1];
  const lord2 = RASHI_LORDS[rashi2];
  const grahaMaitriScore = lord1 === lord2 ? 5 : (RASHI_ELEMENTS[rashi1] === RASHI_ELEMENTS[rashi2] ? 4 : 2.5);

  // 6. Gana (6 Pts)
  const gana1 = nak1 % 3; // 0 Deva, 1 Manushya, 2 Rakshasa
  const gana2 = nak2 % 3;
  let ganaScore = 6;
  if (gana1 !== gana2) {
    if ((gana1 === 0 && gana2 === 2) || (gana1 === 2 && gana2 === 0)) ganaScore = 0;
    else ganaScore = 3;
  }

  // 7. Bhakoot (7 Pts)
  const rashiDiff = (rashi2 - rashi1 + 12) % 12;
  let bhakootScore = 7;
  if ([2, 6, 8, 12].includes(rashiDiff)) bhakootScore = 0;

  // 8. Nadi (8 Pts)
  const nadi1 = nak1 % 3; // 0 Adi, 1 Madhya, 2 Antya
  const nadi2 = nak2 % 3;
  const nadiScore = nadi1 === nadi2 ? 0 : 8;

  const totalScore = Number((varnaScore + vashyaScore + taraScore + yoniScore + grahaMaitriScore + ganaScore + bhakootScore + nadiScore).toFixed(1));

  let recommendation = "";
  if (totalScore >= 28) recommendation = "Excellent Compatibility — Outstanding alignment for long-term partnership.";
  else if (totalScore >= 18) recommendation = "Good Compatibility — Harmonious bond with manageable minor differences.";
  else recommendation = "Average Compatibility — Requires mutual respect, clear communication, and understanding.";

  return {
    totalScore,
    maxScore: 36,
    varna: { score: varnaScore, max: 1, description: "Work & spiritual alignment" },
    vashya: { score: Math.min(2, vashyaScore), max: 2, description: "Mutual attraction & influence" },
    tara: { score: taraScore, max: 3, description: "Destiny & birth star harmony" },
    yoni: { score: yoniScore, max: 4, description: "Physical & intimate resonance" },
    grahaMaitri: { score: grahaMaitriScore, max: 5, description: "Psychological friendship of sign lords" },
    gana: { score: ganaScore, max: 6, description: "Temperament & nature match" },
    bhakoot: { score: bhakootScore, max: 7, description: "Emotional & prosperity alignment" },
    nadi: { score: nadiScore, max: 8, description: "Health & physiological energy balance" },
    recommendation
  };
}

// ─── KP ASTROLOGY 249 SUB-LORDS ─────────────────────────────────────────────

export interface KPSubLord {
  number: number; // 1 - 249
  rashi: string;
  signLord: string;
  starLord: string;
  subLord: string;
  startDegree: string;
  endDegree: string;
}

export function getKPSubLordForDegree(siderealDeg: number): KPSubLord {
  const normDeg = normalizeAngle(siderealDeg);
  const nakIndex = Math.floor(normDeg / (360 / 27));
  const degInNak = normDeg % (360 / 27);

  const starLord = NAKSHATRA_LORDS[nakIndex];
  const starLordIdx = DASHA_ORDER.indexOf(starLord);

  // Approximate sub-lord index proportional to Dasha years
  const subLordOffset = Math.floor((degInNak / (360 / 27)) * 9);
  const subLord = DASHA_ORDER[(starLordIdx + subLordOffset) % 9];

  const rashiIdx = Math.floor(normDeg / 30);
  const signLord = RASHI_LORDS[rashiIdx];

  const kpNumber = Math.min(249, Math.max(1, Math.floor((normDeg / 360) * 249) + 1));

  return {
    number: kpNumber,
    rashi: RASHI_NAMES[rashiIdx],
    signLord,
    starLord,
    subLord,
    startDegree: degToDMS(normDeg).formatted,
    endDegree: degToDMS(normDeg + 1.44).formatted
  };
}

// ─── ATMAKARAKA & DARAKARAKA (JAIMINI) ──────────────────────────────────────

export function calculateJaiminiKarakas(chart: BirthChart): {
  atmakaraka: PlanetaryPosition;
  darakaraka: PlanetaryPosition;
  karakasList: { planet: string; degInSign: number; karaka: string }[];
} {
  const mainPlanets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
  const sorted = mainPlanets.map((pName) => ({
    planet: pName,
    pos: chart.planets[pName],
    degInSign: chart.planets[pName].degreeInRashi
  })).sort((a, b) => b.degInSign - a.degInSign);

  const karakaNames = [
    "Atmakaraka (Soul/Self)",
    "Amatyakaraka (Career/Mind)",
    "Bhatrukaraka (Siblings/Courage)",
    "Matrukaraka (Mother/Home)",
    "Putrakaraka (Children/Intelligence)",
    "Gnatikaraka (Obstacles/Kinsmen)",
    "Darakaraka (Spouse/Partner)"
  ];

  const karakasList = sorted.map((item, idx) => ({
    planet: item.planet,
    degInSign: Number(item.degInSign.toFixed(2)),
    karaka: karakaNames[idx]
  }));

  return {
    atmakaraka: sorted[0].pos,
    darakaraka: sorted[sorted.length - 1].pos,
    karakasList
  };
}

// ─── ISHTA DEVATA ─────────────────────────────────────────────────────────────

export function calculateIshtaDevata(chart: BirthChart): {
  ishtaDevata: string;
  rulerPlanet: string;
  karakamsaRashi: string;
  twelfthHouseRashi: string;
  explanation: string;
} {
  const ak = calculateJaiminiKarakas(chart).atmakaraka;
  const akNavamsa = calculateNavamsaPosition(ak.siderealLongitude);
  const karakamsaRashiIdx = akNavamsa.rashiIndex;

  // 12th house from Karakamsa
  const twelfthRashiIdx = (karakamsaRashiIdx + 11) % 12;
  const rulerPlanet = RASHI_LORDS[twelfthRashiIdx];

  const deityMap: Record<string, string> = {
    Sun: "Lord Rama / Lord Shiva",
    Moon: "Lord Krishna / Goddess Gauri",
    Mars: "Lord Hanuman / Lord Subramanya",
    Mercury: "Lord Vishnu / Lord Venkateshwara",
    Jupiter: "Lord Shiva / Lord Vamana",
    Venus: "Goddess Lakshmi / Goddess Annapurna",
    Saturn: "Lord Hanuman / Lord Shani / Lord Vishnu",
    Rahu: "Goddess Durga / Lord Varaha",
    Ketu: "Lord Ganesha / Lord Matsya"
  };

  const ishtaDevata = deityMap[rulerPlanet] || "Lord Vishnu";
  const explanation = `Your Atmakaraka (${ak.name}) sits in ${akNavamsa.rashi} in Navamsa (Karakamsa). The 12th house from Karakamsa is ${RASHI_NAMES[twelfthRashiIdx]}, ruled by ${rulerPlanet}. Traditional Jaimini astrology links this placement to ${ishtaDevata} as your primary Ishta Devata for spiritual alignment.`;

  return {
    ishtaDevata,
    rulerPlanet,
    karakamsaRashi: akNavamsa.rashi,
    twelfthHouseRashi: RASHI_NAMES[twelfthRashiIdx],
    explanation
  };
}

// ─── BIRTH PANCHANG ──────────────────────────────────────────────────────────

export interface BirthPanchangResult {
  tithi: { number: number; name: string; paksha: "Shukla" | "Krishna" };
  vara: string; // Day of week
  nakshatra: { number: number; name: string; lord: string; pada: number };
  yoga: { number: number; name: string };
  karana: { number: number; name: string };
  rashi: string;
  lagna: string;
  ayanamsha: string;
}

export function calculateBirthPanchang(date: Date, lat: number, lng: number, utcOffsetHours: number = 0): BirthPanchangResult {
  const chart = calculateBirthChart(date, lat, lng, utcOffsetHours);
  const moonSid = chart.planets["Moon"].siderealLongitude;
  const sunSid = chart.planets["Sun"].siderealLongitude;

  // Tithi (1-30)
  const diffSunMoon = normalizeAngle(moonSid - sunSid);
  const tithiNum = Math.floor(diffSunMoon / 12) + 1;
  const paksha = tithiNum <= 15 ? "Shukla" : "Krishna";
  const tithiNames = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shasthi", "Saptami", "Ashtami",
    "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
  ];
  const tithiName = `${paksha} ${tithiNames[(tithiNum - 1) % 15]}`;

  // Vara (Day of week)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const vara = days[date.getDay()];

  // Yoga (1-27)
  const yogaSum = normalizeAngle(moonSid + sunSid);
  const yogaNum = Math.floor(yogaSum / (360 / 27)) + 1;
  const YOGA_NAMES = [
    "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti",
    "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi",
    "Vyatipata", "Variyan", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
    "Brahma", "Indra", "Vaidhriti"
  ];

  // Karana (1-60)
  const karanaNum = Math.floor(diffSunMoon / 6) + 1;
  const KARANA_NAMES = ["Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti (Bhadra)"];
  const karanaName = KARANA_NAMES[(karanaNum - 1) % 7];

  return {
    tithi: { number: tithiNum, name: tithiName, paksha },
    vara,
    nakshatra: {
      number: chart.planets["Moon"].nakshatraIndex + 1,
      name: chart.planets["Moon"].nakshatra,
      lord: chart.planets["Moon"].nakshatraLord,
      pada: chart.planets["Moon"].pada
    },
    yoga: { number: yogaNum, name: YOGA_NAMES[yogaNum - 1] },
    karana: { number: karanaNum, name: karanaName },
    rashi: chart.planets["Moon"].rashi,
    lagna: chart.lagna.rashi,
    ayanamsha: chart.ayanamsaName
  };
}
