// Comprehensive Numerology Calculation Engine for AstroRomantic
// Handles Pythagorean & Chaldean systems, Life Path (with Master Numbers 11, 22, 33),
// Name Numerology, Mobile, Vehicle, House, Business Name, Personal Year, Lo Shu 3x3 Grid,
// Numerology Compatibility, and Name Correction suggestions.

import { reduceNumerology } from "./calculations";

export interface LoShuGridResult {
  grid: Record<number, number>; // Maps digit 1-9 to count frequency
  presentNumbers: number[];
  missingNumbers: number[];
  repeatedNumbers: number[];
  planes: {
    name: string;
    numbers: number[];
    isComplete: boolean;
    description: string;
  }[];
  interpretation: string;
}

export const PYTHAGOREAN_MAP: Record<string, number> = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
};

export const CHALDEAN_MAP: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, k: 2, r: 2,
  c: 3, g: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8
};

// ─── LO SHU GRID ─────────────────────────────────────────────────────────────

export function calculateLoShuGrid(dobStr: string): LoShuGridResult {
  // Extract all numeric digits from YYYY-MM-DD
  const digits = dobStr.replace(/[^0-9]/g, '').split('').map(Number).filter(d => d >= 1 && d <= 9);

  const grid: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (const d of digits) {
    grid[d] = (grid[d] || 0) + 1;
  }

  const presentNumbers = Object.keys(grid).map(Number).filter(n => grid[n] > 0);
  const missingNumbers = Object.keys(grid).map(Number).filter(n => grid[n] === 0);
  const repeatedNumbers = Object.keys(grid).map(Number).filter(n => grid[n] > 1);

  const planes = [
    {
      name: "Mental Plane (Top Horizontal)",
      numbers: [4, 9, 2],
      isComplete: grid[4] > 0 && grid[9] > 0 && grid[2] > 0,
      description: "Exceptional memory, intellectual analysis, and brain power."
    },
    {
      name: "Emotional Plane (Middle Horizontal)",
      numbers: [3, 5, 7],
      isComplete: grid[3] > 0 && grid[5] > 0 && grid[7] > 0,
      description: "High empathy, deep emotional intuition, and spiritual awareness."
    },
    {
      name: "Practical Plane (Bottom Horizontal)",
      numbers: [8, 1, 6],
      isComplete: grid[8] > 0 && grid[1] > 0 && grid[6] > 0,
      description: "Strong execution, business acumen, and physical stamina."
    },
    {
      name: "Plane of Thought (Left Vertical)",
      numbers: [4, 3, 8],
      isComplete: grid[4] > 0 && grid[3] > 0 && grid[8] > 0,
      description: "Methodical thinking, strategic planning, and structural discipline."
    },
    {
      name: "Plane of Willpower (Center Vertical)",
      numbers: [9, 5, 1],
      isComplete: grid[9] > 0 && grid[5] > 0 && grid[1] > 0,
      description: "Unshakable determination, resilience, and goal achievement."
    },
    {
      name: "Plane of Action (Right Vertical)",
      numbers: [2, 7, 6],
      isComplete: grid[2] > 0 && grid[7] > 0 && grid[6] > 0,
      description: "Rapid execution, practical decision-making, and turning ideas into reality."
    }
  ];

  let interpretation = `Your Lo Shu grid contains ${presentNumbers.length} active numbers. `;
  const activePlanes = planes.filter(p => p.isComplete);
  if (activePlanes.length > 0) {
    interpretation += `You possess complete strength in the ${activePlanes.map(p => p.name).join(", ")}.`;
  } else {
    interpretation += `Your grid shows a unique distribution of energy across individual numbers.`;
  }

  return { grid, presentNumbers, missingNumbers, repeatedNumbers, planes, interpretation };
}

// ─── MOBILE NUMBER NUMEROLOGY ────────────────────────────────────────────────

export function calculateMobileNumerology(phone: string): {
  totalSum: number;
  singleDigit: number;
  vibration: string;
  suitability: string;
} {
  const digits = phone.replace(/[^0-9]/g, '').split('').map(Number);
  const totalSum = digits.reduce((sum, d) => sum + d, 0);
  const singleDigit = reduceNumerology(totalSum);

  const vibrations: Record<number, string> = {
    1: "Leadership & Independence — Excellent for executives, entrepreneurs, and self-starters.",
    2: "Partnership & Harmony — Great for diplomacy, customer relations, and team collaboration.",
    3: "Communication & Creativity — Ideal for artists, writers, influencers, and media professionals.",
    4: "Structure & Security — Suited for real estate, banking, organization, and technical work.",
    5: "Travel & Freedom — Perfect for sales, marketing, adventure seekers, and frequent travelers.",
    6: "Nurturing & Family — Ideal for counseling, hospitality, design, and family-oriented contacts.",
    7: "Analysis & Wisdom — Great for researchers, spiritual seekers, analysts, and educators.",
    8: "Power & Wealth — Outstanding for finance, trade, business deals, and high-level negotiations.",
    9: "Humanitarian & Global — Suited for non-profits, teachers, healers, and international business."
  };

  return {
    totalSum,
    singleDigit,
    vibration: vibrations[singleDigit] || "Balanced general vibration.",
    suitability: `Number ${singleDigit} carries strong ${singleDigit % 2 === 1 ? 'active, expressive' : 'receptive, harmonious'} energy.`
  };
}

// ─── VEHICLE NUMBER NUMEROLOGY ───────────────────────────────────────────────

export function calculateVehicleNumerology(plate: string): {
  number: number;
  energy: string;
  travelGuidance: string;
} {
  const normalized = plate.toLowerCase().replace(/[^a-z0-9]/g, '');
  let sum = 0;
  for (const ch of normalized) {
    if (/[0-9]/.test(ch)) sum += parseInt(ch, 10);
    else if (/[a-z]/.test(ch)) sum += PYTHAGOREAN_MAP[ch] || 0;
  }
  const number = reduceNumerology(sum);

  const energies: Record<number, string> = {
    1: "Fast, assertive, and prominent road presence. Great for solo commuters and business trips.",
    2: "Smooth, comfortable, and peaceful rides. Excellent for family cars and shared rides.",
    3: "Joyful, expressive vehicle energy. Great for road trips and social driving.",
    4: "Sturdy, reliable, and grounded vehicle. Ideal for work vehicles and long-distance durability.",
    5: "Dynamic, fast, and adventurous energy. Suited for sports cars and frequent travel.",
    6: "Safe, protective, and comfortable interior ambiance. Perfect for family transport.",
    7: "Quiet, smooth, and solitary drive. Suited for peaceful daily commuting.",
    8: "Commanding luxury and executive appeal. Strong commercial and status presence.",
    9: "Resilient long-distance cruiser. Excellent for service vehicles and endurance driving."
  };

  return {
    number,
    energy: energies[number] || "Harmonious transit energy.",
    travelGuidance: `Maintain your vehicle regularly to preserve its Number ${number} vibrational resonance.`
  };
}

// ─── HOUSE NUMBER NUMEROLOGY ─────────────────────────────────────────────────

export function calculateHouseNumerology(address: string): {
  number: number;
  atmosphere: string;
  bestFor: string;
} {
  const normalized = address.toLowerCase().replace(/[^a-z0-9]/g, '');
  let sum = 0;
  for (const ch of normalized) {
    if (/[0-9]/.test(ch)) sum += parseInt(ch, 10);
    else if (/[a-z]/.test(ch)) sum += PYTHAGOREAN_MAP[ch] || 0;
  }
  const number = reduceNumerology(sum);

  const atmospheres: Record<number, string> = {
    1: "Home of innovation and independence. Promotes personal projects and self-reliance.",
    2: "Home of peace and relationship bonding. Cozy, welcoming, and partnership-focused.",
    3: "Home of laughter and creativity. Vibrant social hub filled with art and entertainment.",
    4: "Home of stability and security. Grounded, well-organized, and built on solid foundations.",
    5: "Home of action and change. Dynamic, active, and filled with guests and travel energy.",
    6: "Home of love and harmony. Perfect family haven, pet-friendly, and visually aesthetic.",
    7: "Home of sanctuary and contemplation. Quiet retreat ideal for study, meditation, and rest.",
    8: "Home of prosperity and achievement. Fosters financial focus and ambitious endeavors.",
    9: "Home of universal love and hospitality. Welcoming to everyone, spiritual, and artistic."
  };

  return {
    number,
    atmosphere: atmospheres[number] || "Peaceful domestic environment.",
    bestFor: `Living in a Number ${number} space supports ${number === 8 ? 'financial growth' : number === 6 ? 'family harmony' : 'personal balance'}.`
  };
}

// ─── BUSINESS NAME NUMEROLOGY ────────────────────────────────────────────────

export function calculateBusinessNumerology(name: string, ownerLifePath?: number): {
  number: number;
  commercialVibration: string;
  ownerCompatibility: string;
} {
  const normalized = name.toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;
  for (const ch of normalized) sum += PYTHAGOREAN_MAP[ch] || 0;
  const number = reduceNumerology(sum);

  const commercial: Record<number, string> = {
    1: "Pioneering & Industry Leader — Strong brand identity for tech, startups, and consulting.",
    2: "Client Relationship & Partnership — Great for mediation, diplomacy, and service agencies.",
    3: "Marketing, Media & Branding — High engagement for advertising, creative arts, and entertainment.",
    4: "Reliability & Real Estate — Outstanding for construction, logistics, finance, and engineering.",
    5: "Growth, Travel & E-Commerce — Excels in dynamic markets, media, trading, and innovation.",
    6: "Hospitality, Health & Beauty — Ideal for luxury brands, design, wellness, and organic products.",
    7: "Specialized Research & Tech — Suited for analytics, software development, and niche consulting.",
    8: "Corporate Wealth & Power — Outstanding for investment firms, legal, corporate, and luxury commerce.",
    9: "Global Reach & Non-Profit — Suited for international trade, education, and social enterprises."
  };

  let ownerComp = "Business name carries a strong standalone commercial vibration.";
  if (ownerLifePath) {
    const isMatch = (number + ownerLifePath) % 2 === 0 || Math.abs(number - ownerLifePath) <= 2;
    ownerComp = isMatch
      ? `High harmony! Your business number (${number}) resonates strongly with your Life Path (${ownerLifePath}).`
      : `Business number (${number}) provides complementary energy to your Life Path (${ownerLifePath}).`;
  }

  return {
    number,
    commercialVibration: commercial[number] || "Strong commercial resonance.",
    ownerCompatibility: ownerComp
  };
}

// ─── PERSONAL YEAR CALCULATOR ────────────────────────────────────────────────

export function calculatePersonalYear(dobStr: string, targetYear: number = new Date().getFullYear()): {
  personalYear: number;
  theme: string;
  keyLessons: string[];
} {
  const parts = dobStr.split('-');
  if (parts.length !== 3) return { personalYear: 1, theme: "New Beginnings", keyLessons: [] };

  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const reducedMonth = reduceNumerology(month);
  const reducedDay = reduceNumerology(day);
  const reducedYear = reduceNumerology(targetYear);

  const personalYear = reduceNumerology(reducedMonth + reducedDay + reducedYear);

  const themes: Record<number, string> = {
    1: "Year 1: New Beginnings & Fresh Starts — Planting seeds for a 9-year cycle.",
    2: "Year 2: Cooperation & Patience — Nurturing relationships and waiting for growth.",
    3: "Year 3: Expression & Creativity — Socializing, artistic output, and joy.",
    4: "Year 4: Work & Foundations — Discipline, organizing systems, and hard effort.",
    5: "Year 5: Freedom & Transformation — Major changes, travel, and new opportunities.",
    6: "Year 6: Family & Responsibility — Home, harmony, domestic duties, and healing.",
    7: "Year 7: Reflection & Inner Growth — Study, rest, self-discovery, and quiet time.",
    8: "Year 8: Power & Achievement — Financial rewards, career advancements, and leadership.",
    9: "Year 9: Completion & Release — Finishing old projects and clearing space for what's next."
  };

  return {
    personalYear,
    theme: themes[personalYear] || "Year of balanced development.",
    keyLessons: [
      `Focus on the core vibration of Year ${personalYear}.`,
      "Align major annual decisions with your personal cycle rhythm."
    ]
  };
}

// ─── NAME CORRECTION CALCULATOR ──────────────────────────────────────────────

export function calculateNameCorrection(currentName: string, dobStr: string): {
  currentDestiny: number;
  lifePath: number;
  isHarmonious: boolean;
  suggestions: { modifiedName: string; newDestiny: number; reason: string }[];
} {
  const normalized = currentName.trim();
  let currentSum = 0;
  for (const ch of normalized.toLowerCase().replace(/[^a-z]/g, '')) {
    currentSum += PYTHAGOREAN_MAP[ch] || 0;
  }
  const currentDestiny = reduceNumerology(currentSum);

  // Life Path
  const parts = dobStr.split('-');
  const lp = parts.length === 3
    ? reduceNumerology(reduceNumerology(parseInt(parts[0])) + reduceNumerology(parseInt(parts[1])) + reduceNumerology(parseInt(parts[2])))
    : 1;

  const isHarmonious = currentDestiny === lp || Math.abs(currentDestiny - lp) === 2 || (currentDestiny + lp) === 10;

  const suggestions: { modifiedName: string; newDestiny: number; reason: string }[] = [];

  if (!isHarmonious) {
    // Generate subtle variations (e.g. adding an extra letter)
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const v of vowels) {
      const varName = `${normalized}${v.toUpperCase()}`;
      let varSum = 0;
      for (const ch of varName.toLowerCase().replace(/[^a-z]/g, '')) {
        varSum += PYTHAGOREAN_MAP[ch] || 0;
      }
      const newDestiny = reduceNumerology(varSum);
      if (newDestiny === lp || newDestiny === 1 || newDestiny === 5 || newDestiny === 6) {
        suggestions.push({
          modifiedName: varName,
          newDestiny,
          reason: `Adding '${v}' shifts your expression to ${newDestiny}, creating high alignment with your Life Path ${lp}.`
        });
      }
      if (suggestions.length >= 3) break;
    }
  }

  return {
    currentDestiny,
    lifePath: lp,
    isHarmonious,
    suggestions
  };
}
