// Offline City & Geolocation Database for AstroRomantic
// Provides latitude, longitude, and UTC timezone offset for major global cities with fallback options.

export interface CityData {
  city: string;
  country: string;
  lat: number;
  lng: number;
  utcOffset: number; // Hours offset from UTC
}

export const CITIES_DATABASE: CityData[] = [
  { city: "New Delhi", country: "India", lat: 28.6139, lng: 77.2090, utcOffset: 5.5 },
  { city: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777, utcOffset: 5.5 },
  { city: "Bengaluru", country: "India", lat: 12.9716, lng: 77.5946, utcOffset: 5.5 },
  { city: "Kolkata", country: "India", lat: 22.5726, lng: 88.3639, utcOffset: 5.5 },
  { city: "Chennai", country: "India", lat: 13.0827, lng: 80.2707, utcOffset: 5.5 },
  { city: "Hyderabad", country: "India", lat: 17.3850, lng: 78.4867, utcOffset: 5.5 },
  { city: "Ahmedabad", country: "India", lat: 23.0225, lng: 72.5714, utcOffset: 5.5 },
  { city: "Pune", country: "India", lat: 18.5204, lng: 73.8567, utcOffset: 5.5 },
  { city: "Jaipur", country: "India", lat: 26.9124, lng: 75.7873, utcOffset: 5.5 },
  { city: "Lucknow", country: "India", lat: 26.8467, lng: 80.9462, utcOffset: 5.5 },
  { city: "Varanasi", country: "India", lat: 25.3176, lng: 82.9739, utcOffset: 5.5 },
  { city: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278, utcOffset: 0 },
  { city: "Manchester", country: "United Kingdom", lat: 53.4808, lng: -2.2426, utcOffset: 0 },
  { city: "New York", country: "United States", lat: 40.7128, lng: -74.0060, utcOffset: -5 },
  { city: "Los Angeles", country: "United States", lat: 34.0522, lng: -118.2437, utcOffset: -8 },
  { city: "Chicago", country: "United States", lat: 41.8781, lng: -87.6298, utcOffset: -6 },
  { city: "Houston", country: "United States", lat: 29.7604, lng: -95.3698, utcOffset: -6 },
  { city: "San Francisco", country: "United States", lat: 37.7749, lng: -122.4194, utcOffset: -8 },
  { city: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, utcOffset: -5 },
  { city: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, utcOffset: -8 },
  { city: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, utcOffset: 10 },
  { city: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, utcOffset: 10 },
  { city: "Dubai", country: "United Arab Emirates", lat: 25.2048, lng: 55.2708, utcOffset: 4 },
  { city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, utcOffset: 8 },
  { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522, utcOffset: 1 },
  { city: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, utcOffset: 1 },
  { city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, utcOffset: 9 },
  { city: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780, utcOffset: 9 },
  { city: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018, utcOffset: 7 },
  { city: "Kathmandu", country: "Nepal", lat: 27.7172, lng: 85.3240, utcOffset: 5.75 },
  { city: "Colombo", country: "Sri Lanka", lat: 6.9271, lng: 79.8612, utcOffset: 5.5 },
  { city: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125, utcOffset: 6 },
  { city: "Karachi", country: "Pakistan", lat: 24.8607, lng: 67.0011, utcOffset: 5 },
  { city: "Kabul", country: "Afghanistan", lat: 34.5553, lng: 69.2075, utcOffset: 4.5 },
  { city: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473, utcOffset: 2 },
  { city: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357, utcOffset: 2 },
  { city: "Sao Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333, utcOffset: -3 },
  { city: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816, utcOffset: -3 },
  { city: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332, utcOffset: -6 }
];

export function searchCities(query: string): CityData[] {
  if (!query || query.length < 2) return CITIES_DATABASE.slice(0, 8);
  const q = query.toLowerCase();
  return CITIES_DATABASE.filter(
    c => c.city.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)
  );
}

export function getCityDefault(): CityData {
  return CITIES_DATABASE[0]; // New Delhi default
}
