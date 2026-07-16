// Numerology & Love Compatibility Calculation Utilities

// Reduce a number to a single digit, preserving Master Numbers (11, 22, 33)
export function reduceNumerology(num: number, keepMaster: boolean = true): number {
  if (num === 0) return 0;
  while (num > 9) {
    if (keepMaster && (num === 11 || num === 22 || num === 33)) {
      return num;
    }
    num = num.toString().split('').reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return num;
}

// Calculate Life Path Number
export function calculateLifePath(dateStr: string): { lifePath: number; explanation: string } {
  // Input: YYYY-MM-DD
  const parts = dateStr.split('-');
  if (parts.length !== 3) return { lifePath: 0, explanation: "Invalid date format." };

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const reducedYear = reduceNumerology(year);
  const reducedMonth = reduceNumerology(month);
  const reducedDay = reduceNumerology(day);

  const sum = reducedYear + reducedMonth + reducedDay;
  const lifePath = reduceNumerology(sum);

  const descriptions: Record<number, string> = {
    1: "The Independent Leader. You are creative, ambitious, and self-reliant, driven to carve your own path.",
    2: "The Peacekeeper. You are cooperative, intuitive, sensitive, and thrive in partnerships and team environments.",
    3: "The Creative Communicator. You possess strong artistic expression, social charm, and infectious optimism.",
    4: "The Practical Builder. Organized, detail-oriented, systematic, and the backbone of any structure.",
    5: "The Freedom Lover. Adventurous, versatile, and dynamic, you thrive on change and sensory experiences.",
    6: "The Nurturer. Responsible, loving, community-focused, and natural caretakers of others.",
    7: "The Seeker of Truth. Analytical, philosophical, spiritual, and prefer solitary contemplation to understand life.",
    8: "The Executive Powerhouse. Goal-oriented, focused on material success, abundance, and administrative strength.",
    9: "The Universal Humanitarian. Compassionate, generous, idealistic, and seeking to serve the global community.",
    11: "Master Number 11: The Intuitive Messenger. Highly psychic, sensitive, and called to illuminate others.",
    22: "Master Number 22: The Master Builder. Possesses the vision of 11 but with the practical capability to manifest it.",
    33: "Master Number 33: The Master Teacher. Guided by unconditional love, spiritual wisdom, and healing power."
  };

  return {
    lifePath,
    explanation: descriptions[lifePath] || "A unique blend of spiritual vibrations."
  };
}

// Pythagorean letter values
const pythagoreanMap: Record<string, number> = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
};

// Chaldean letter values
const chaldeanMap: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, k: 2, r: 2,
  c: 3, g: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8
};

// Calculate Name Numerology (Pythagorean)
export function calculatePythagoreanName(name: string): { destiny: number; soulUrge: number; personality: number } {
  const normalized = name.toLowerCase().replace(/[^a-z]/g, '');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let totalSum = 0;
  let vowelSum = 0;
  let consonantSum = 0;

  for (let i = 0; i < normalized.length; i++) {
    const char = normalized[i];
    const val = pythagoreanMap[char] || 0;
    totalSum += val;
    if (vowels.includes(char)) {
      vowelSum += val;
    } else {
      consonantSum += val;
    }
  }

  return {
    destiny: reduceNumerology(totalSum),
    soulUrge: reduceNumerology(vowelSum),
    personality: reduceNumerology(consonantSum)
  };
}

// Calculate Chaldean Name Numerology
export function calculateChaldeanName(name: string): { compound: number; single: number } {
  const normalized = name.toLowerCase().replace(/[^a-z]/g, '');
  let compound = 0;

  for (let i = 0; i < normalized.length; i++) {
    const char = normalized[i];
    compound += chaldeanMap[char] || 0;
  }

  return {
    compound,
    single: reduceNumerology(compound, false) // Chaldean usually reduces all the way to single digit 1-8 (no 9)
  };
}

// Simple Love compatibility algorithm (deterministic based on letters & values)
export function calculateLoveCompatibility(name1: string, name2: string): number {
  const n1 = name1.toLowerCase().replace(/[^a-z]/g, '');
  const n2 = name2.toLowerCase().replace(/[^a-z]/g, '');

  if (!n1 || !n2) return 50;

  // Count common letters, and sum up Pythagorean values
  let val1 = 0;
  let val2 = 0;

  for (const c of n1) val1 += pythagoreanMap[c] || 1;
  for (const c of n2) val2 += pythagoreanMap[c] || 1;

  // Let's do a stable, seedable hash-based calculation so it feels real and stays consistent
  const combinedVal = val1 * 7 + val2 * 13;
  const percentage = 45 + (combinedVal % 51); // Returns a value between 45% and 95%

  return percentage;
}

// Zodiac sign date ranges
export const zodiacSigns = [
  { name: "Aries", start: "03-21", end: "04-19", element: "Fire" },
  { name: "Taurus", start: "04-20", end: "05-20", element: "Earth" },
  { name: "Gemini", start: "05-21", end: "06-20", element: "Air" },
  { name: "Cancer", start: "06-21", end: "07-22", element: "Water" },
  { name: "Leo", start: "07-23", end: "08-22", element: "Fire" },
  { name: "Virgo", start: "08-23", end: "09-22", element: "Earth" },
  { name: "Libra", start: "09-23", end: "10-22", element: "Air" },
  { name: "Scorpio", start: "10-23", end: "11-21", element: "Water" },
  { name: "Sagittarius", start: "11-22", end: "12-21", element: "Fire" },
  { name: "Capricorn", start: "12-22", end: "01-19", element: "Earth" },
  { name: "Aquarius", start: "01-20", end: "02-18", element: "Air" },
  { name: "Pisces", start: "02-19", end: "03-20", element: "Water" }
];

export function getZodiacSign(dateStr: string): string {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return "Unknown";
  const monthDay = `${parts[1]}-${parts[2]}`; // MM-DD

  for (const sign of zodiacSigns) {
    if (sign.start <= sign.end) {
      if (monthDay >= sign.start && monthDay <= sign.end) return sign.name;
    } else {
      // Overlap year end (Capricorn Dec 22 - Jan 19)
      if (monthDay >= sign.start || monthDay <= sign.end) return sign.name;
    }
  }
  return "Capricorn";
}
