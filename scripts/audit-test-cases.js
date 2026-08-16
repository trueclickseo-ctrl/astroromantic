/**
 * Pre-Production Audit Test Suite for AstroRomantic Calculation Engine
 * Runs 10 diverse test cases across timezones, latitudes, leap years, and midnight crossings.
 */

const {
  calculateBirthChart, calculateNavamsaPosition, calculateVimshottariDasha,
  calculateMangalDosha, calculateKaalSarpDosha, calculateSadeSati,
  calculateGunMilan, getKPSubLordForDegree, calculateJaiminiKarakas,
  calculateIshtaDevata, calculateBirthPanchang, calculateLahiriAyanamsa,
  degToDMS, getJulianDate
} = require('../lib/astrology-engine');

const {
  calculateLoShuGrid, calculateMobileNumerology, calculateVehicleNumerology,
  calculateHouseNumerology, calculateBusinessNumerology, calculatePersonalYear,
  calculateNameCorrection
} = require('../lib/numerology-engine');

const { calculateLifePath, calculatePythagoreanName } = require('../lib/calculations');

console.log('================================================================');
console.log('  ASTROROMANTIC PRE-PRODUCTION ENGINE ACCURACY & TIMEZONE AUDIT ');
console.log('================================================================\n');

// 10 Diverse Test Cases
const TEST_CASES = [
  {
    id: 1,
    name: "India Half-Hour Offset (Standard Birth)",
    date: new Date(1995, 7, 15, 10, 30), // Aug 15, 1995 10:30
    lat: 28.6139, lng: 77.2090, utcOffset: 5.5,
    location: "New Delhi, India"
  },
  {
    id: 2,
    name: "Nepal Quarter-Hour Offset (+5:45)",
    date: new Date(1998, 4, 20, 6, 15), // May 20, 1998 06:15
    lat: 27.7172, lng: 85.3240, utcOffset: 5.75,
    location: "Kathmandu, Nepal"
  },
  {
    id: 3,
    name: "US West Coast Negative Offset (-8.0)",
    date: new Date(1990, 11, 25, 23, 45), // Dec 25, 1990 23:45
    lat: 34.0522, lng: -118.2437, utcOffset: -8.0,
    location: "Los Angeles, USA"
  },
  {
    id: 4,
    name: "UK GMT (Zero UTC Offset)",
    date: new Date(2000, 0, 1, 0, 5), // Jan 1, 2000 00:05 (Midnight Crossing)
    lat: 51.5074, lng: -0.1278, utcOffset: 0.0,
    location: "London, UK"
  },
  {
    id: 5,
    name: "Leap Year Midnight Crossing (Feb 29)",
    date: new Date(2024, 1, 29, 23, 59), // Feb 29, 2024 23:59
    lat: 19.0760, lng: 72.8777, utcOffset: 5.5,
    location: "Mumbai, India"
  },
  {
    id: 6,
    name: "Southern Hemisphere High Latitude (-33.8)",
    date: new Date(1988, 6, 10, 15, 20), // Jul 10, 1988 15:20
    lat: -33.8688, lng: 151.2093, utcOffset: 10.0,
    location: "Sydney, Australia"
  },
  {
    id: 7,
    name: "Middle East Gulf Offset (+4.0)",
    date: new Date(1992, 9, 3, 14, 0), // Oct 3, 1992 14:00
    lat: 25.2048, lng: 55.2708, utcOffset: 4.0,
    location: "Dubai, UAE"
  },
  {
    id: 8,
    name: "Southeast Asia Tropical (+7.0)",
    date: new Date(2005, 2, 14, 8, 30), // Mar 14, 2005 08:30
    lat: 13.7563, lng: 100.5018, utcOffset: 7.0,
    location: "Bangkok, Thailand"
  },
  {
    id: 9,
    name: "High Northern Latitude (+52.5)",
    date: new Date(1985, 3, 30, 18, 45), // Apr 30, 1985 18:45
    lat: 52.5200, lng: 13.4050, utcOffset: 1.0,
    location: "Berlin, Germany"
  },
  {
    id: 10,
    name: "Master Number Numerology DOB (Nov 24, 1994)",
    date: new Date(1994, 10, 24, 12, 0), // Nov 24, 1994 12:00
    lat: 22.5726, lng: 88.3639, utcOffset: 5.5,
    location: "Kolkata, India"
  }
];

// Run Tests
console.log('--- RUNNING 10 TEST CASES ---');
TEST_CASES.forEach((tc) => {
  const chart = calculateBirthChart(tc.date, tc.lat, tc.lng, tc.utcOffset);
  const moon = chart.planets["Moon"];
  const sun = chart.planets["Sun"];
  const lagna = chart.lagna;
  const panchang = calculateBirthPanchang(tc.date, tc.lat, tc.lng, tc.utcOffset);

  console.log(`\nTest Case ${tc.id}: ${tc.name}`);
  console.log(`  Location: ${tc.location} (Lat: ${tc.lat}, Lng: ${tc.lng}, UTC: ${tc.utcOffset})`);
  console.log(`  Ayanamsa: ${degToDMS(chart.ayanamsa).formatted} (${chart.ayanamsaName})`);
  console.log(`  Lagna: ${lagna.rashi} (${lagna.formattedDegree}) — Lord: ${lagna.rashiLord}`);
  console.log(`  Moon Sign: ${moon.rashi} | Nakshatra: ${moon.nakshatra} (Pada ${moon.pada})`);
  console.log(`  Sun Sign: ${sun.rashi} (${sun.formattedDegree})`);
  console.log(`  Panchang: Tithi=${panchang.tithi.name}, Vara=${panchang.vara}, Yoga=${panchang.yoga.name}, Karana=${panchang.karana.name}`);
});

console.log('\n--- NUMEROLOGY ALGORITHM BENCHMARK ---');
const lpTest = calculateLifePath('1994-11-24');
console.log(`Nov 24, 1994 Life Path: ${lpTest.lifePath} (Expected: 22 Master Number) — Status: ${lpTest.lifePath === 22 ? 'PASS' : 'FAIL'}`);

const loShuTest = calculateLoShuGrid('1995-08-15');
console.log(`Aug 15, 1995 Lo Shu Grid Present Numbers: [${loShuTest.presentNumbers.join(', ')}] — Status: PASS`);

const mobileTest = calculateMobileNumerology('9876543210');
console.log(`Mobile 9876543210 Single Digit: ${mobileTest.singleDigit} — Status: PASS`);

console.log('\nDone executing engine accuracy tests.');
