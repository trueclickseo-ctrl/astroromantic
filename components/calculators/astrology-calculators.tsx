"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Clock, Heart, Star, Compass, ShieldAlert, Gem, ShieldCheck, Moon, Sun, BookOpen } from "lucide-react";
import { LocationInput, PlanetaryTable, AshtaKootaTable } from "./shared-ui";
import { getCityDefault, CityData } from "@/lib/city-database";
import {
  calculateBirthChart, calculateNavamsaPosition, calculateVimshottariDasha,
  calculateMangalDosha, calculateKaalSarpDosha, calculateSadeSati,
  calculateGunMilan, getKPSubLordForDegree, calculateJaiminiKarakas,
  calculateIshtaDevata, calculateBirthPanchang, calculateLahiriAyanamsa,
  calculateRamanAyanamsa, calculateKPAyanamsa, getJulianDate,
  RASHI_NAMES, RASHI_LORDS, RASHI_ELEMENTS, RASHI_MODALITIES,
  NAKSHATRA_NAMES, NAKSHATRA_LORDS, NAKSHATRA_PADA_AKSHARAS,
  normalizeAngle, degToDMS
} from "@/lib/astrology-engine";

// Helper for standard form submit
function parseDateTime(dateStr: string, timeStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  return new Date(year, month - 1, day, hours || 0, minutes || 0);
}

// 1. MOON SIGN CALCULATOR
export function MoonSignCalculatorComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    setResult(chart.planets["Moon"]);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label>
            <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label>
            <input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
          </div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5">
          Calculate Moon Sign (Rashi)
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold tracking-wider">Your Moon Sign (Rashi)</span>
          <div className="text-4xl sm:text-5xl font-extrabold text-black">{result.rashi}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Degree</span><span className="text-black font-bold">{result.formattedDegree}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Nakshatra</span><span className="text-black font-bold">{result.nakshatra}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Pada</span><span className="text-black font-bold">{result.pada}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Rashi Lord</span><span className="text-black font-bold">{result.rashiLord}</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 2. SUN SIGN CALCULATOR
export function SunSignCalculatorComp() {
  const [date, setDate] = useState("1995-08-15");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, "12:00");
    const chart = calculateBirthChart(d, 0, 0, 0);
    const sun = chart.planets["Sun"];
    const element = RASHI_ELEMENTS[sun.rashiIndex];
    const modality = RASHI_MODALITIES[sun.rashiIndex];
    setResult({ ...sun, element, modality });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label>
          <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Sun Sign
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Your Sun Sign</span>
          <div className="text-4xl sm:text-5xl font-extrabold text-black">{result.rashi}</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Element</span><span className="text-black font-bold">{result.element}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Modality</span><span className="text-black font-bold">{result.modality}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Ruling Planet</span><span className="text-black font-bold">{result.rashiLord}</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 3. NAKSHATRA CALCULATOR
export function NakshatraCalculatorComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    setResult(chart.planets["Moon"]);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate Birth Nakshatra</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Your Birth Nakshatra</span>
          <div className="text-4xl sm:text-5xl font-extrabold text-black">{result.nakshatra}</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Pada</span><span className="text-black font-bold">{result.pada}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Nakshatra Lord</span><span className="text-black font-bold">{result.nakshatraLord}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Moon Sign</span><span className="text-black font-bold">{result.rashi}</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 4. LAGNA CALCULATOR
export function LagnaCalculatorComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    setResult(chart.lagna);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate Ascendant (Lagna)</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Your Ascendant (Lagna) Sign</span>
          <div className="text-4xl sm:text-5xl font-extrabold text-black">{result.rashi}</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Ascendant Degree</span><span className="text-black font-bold">{result.formattedDegree}</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Lagna Lord</span><span className="text-black font-bold">{result.rashiLord}</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 5. NAVAMSA CHART CALCULATOR
export function NavamsaChartComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const navamsa: Record<string, any> = {};
    for (const [pName, pPos] of Object.entries(chart.planets)) {
      const d9 = calculateNavamsaPosition(pPos.siderealLongitude);
      navamsa[pName] = { d9Rashi: d9.rashi };
    }
    setResult(navamsa);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Generate Navamsa (D9) Positions</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <h3 className="text-sm font-bold uppercase text-black text-center">Navamsa (D9) Divisional Positions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(result).map(([planet, d9]: [string, any]) => (
              <div key={planet} className="bg-white border-2 border-black rounded-xl p-3 text-center shadow-[2px_2px_0px_#000000]">
                <span className="block text-[10px] text-zinc-600 font-bold uppercase">{planet}</span>
                <span className="text-lg font-extrabold text-black">{d9.d9Rashi}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 6. MOON PHASE CALCULATOR
export function MoonPhaseComp() {
  const [date, setDate] = useState("1995-08-15");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, "12:00");
    const chart = calculateBirthChart(d, 0, 0, 0);
    const sunLong = chart.planets["Sun"].siderealLongitude;
    const moonLong = chart.planets["Moon"].siderealLongitude;
    const diff = normalizeAngle(moonLong - sunLong);
    const illumination = Math.round((1 - Math.cos((diff * Math.PI) / 180)) * 50);
    let phaseName = "Waxing Crescent";
    if (diff < 15 || diff > 345) phaseName = "New Moon";
    else if (diff >= 75 && diff <= 105) phaseName = "First Quarter";
    else if (diff >= 165 && diff <= 195) phaseName = "Full Moon";
    else if (diff >= 255 && diff <= 285) phaseName = "Third Quarter";
    else if (diff > 180) phaseName = "Waning Moon";

    setResult({ phaseName, illumination, elongation: Math.round(diff) });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Select Date</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate Moon Phase</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Moon Phase Result</span>
          <div className="text-4xl font-extrabold text-black">{result.phaseName}</div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Illumination</span><span className="text-black font-bold">{result.illumination}%</span></div>
            <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Sun-Moon Elongation</span><span className="text-black font-bold">{result.elongation}°</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 7. MANGAL DOSHA CALCULATOR
export function MangalDoshaComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const dosha = calculateMangalDosha(chart);
    setResult(dosha);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Check Mangal Dosha</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000] ${result.isManglik ? "bg-rose-100" : "bg-emerald-100"}`}>
          <span className="text-xs uppercase text-black font-bold">Mangal Dosha Status</span>
          <div className="text-3xl sm:text-4xl font-extrabold text-black">{result.isManglik ? "Manglik Dosha Present" : "No Manglik Dosha"}</div>
          <div className="grid grid-cols-3 gap-2 text-xs font-mono font-bold py-2 border-y border-black">
            <div className="bg-white/80 p-2 rounded-lg border border-black">Lagna: House {result.marsHouseFromLagna}</div>
            <div className="bg-white/80 p-2 rounded-lg border border-black">Moon: House {result.marsHouseFromMoon}</div>
            <div className="bg-white/80 p-2 rounded-lg border border-black">Venus: House {result.marsHouseFromVenus}</div>
          </div>
          <p className="text-xs text-zinc-900 font-sans leading-relaxed">{result.explanation}</p>
          {result.mitigationFactors && result.mitigationFactors.length > 0 && (
            <div className="text-left bg-white/90 border border-black rounded-xl p-3 text-xs space-y-1">
              <span className="font-bold text-black block">Cancellation / Mitigation Factors:</span>
              <ul className="list-disc pl-4 text-zinc-800 space-y-1 font-sans">
                {result.mitigationFactors.map((m: string, i: number) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

// 8. KAAL SARP DOSHA CALCULATOR
export function KaalSarpDoshaComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const dosha = calculateKaalSarpDosha(chart);
    setResult(dosha);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Check Kaal Sarp Yoga</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000] ${result.hasKaalSarp ? "bg-rose-100" : "bg-emerald-100"}`}>
          <span className="text-xs uppercase text-black font-bold">Kaal Sarp Yoga Analysis</span>
          <div className="text-3xl font-extrabold text-black">{result.type}</div>
          <p className="text-xs text-zinc-900 font-sans leading-relaxed">{result.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}

// 9. SADE SATI CALCULATOR
export function SadeSatiComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const moonRashi = chart.planets["Moon"].rashiIndex;
    const sadeSati = calculateSadeSati(moonRashi, d);
    setResult({ ...sadeSati, moonRashiName: chart.planets["Moon"].rashi });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate Sade Sati Phase</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Sade Sati Transit Status</span>
          <div className="text-3xl font-extrabold text-black">{result.currentPhase}</div>
          <p className="text-xs text-zinc-900 font-sans leading-relaxed">{result.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}

// 10. VIMSHOTTARI DASHA CALCULATOR
export function VimshottariDashaComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const dasha = calculateVimshottariDasha(chart.planets["Moon"].siderealLongitude, d);
    setResult(dasha);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate 120-Year Vimshottari Timeline</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-4 text-center shadow-[3px_3px_0px_#000000]">
            <span className="text-xs uppercase text-amber-900 font-bold">Birth Dasha Lord</span>
            <div className="text-2xl font-extrabold text-black">{result.balanceAtBirth.planet} (Balance: {result.balanceAtBirth.remainingYears} yrs)</div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-black uppercase">Major Mahadasha Timeline</h4>
            <div className="divide-y divide-zinc-200 border-2 border-black rounded-xl overflow-hidden bg-white shadow-[3px_3px_0px_#000000]">
              {result.mahadashas.map((t: any) => (
                <div key={t.planet} className="p-3 flex items-center justify-between hover:bg-amber-50">
                  <span className="font-bold text-black">{t.planet} Mahadasha</span>
                  <span className="text-zinc-700">{t.startDate} — {t.endDate} ({t.durationYears} yrs)</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 11. PITRA DOSHA CALCULATOR
export function PitraDoshaComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const sunRashi = chart.planets["Sun"].rashiIndex;
    const rahuRashi = chart.planets["Rahu"].rashiIndex;
    const saturnRashi = chart.planets["Saturn"].rashiIndex;

    const isSunRahuConjunct = Math.abs(normalizeAngle(chart.planets["Sun"].siderealLongitude - chart.planets["Rahu"].siderealLongitude)) < 15;
    const hasPitraDosha = isSunRahuConjunct || sunRashi === rahuRashi || sunRashi === saturnRashi;

    setResult({
      hasDosha: hasPitraDosha,
      title: hasPitraDosha ? "Pitra Dosha Indicated" : "No Pitra Dosha",
      description: hasPitraDosha
        ? "Sun is under affliction by Rahu or Saturn in natal chart indicating karmic ancestral debt."
        : "Sun is well placed without major Rahu/Saturn ancestral afflictions."
    });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Check Ancestral Pitra Dosha</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000] ${result.hasDosha ? "bg-amber-100" : "bg-emerald-100"}`}>
          <span className="text-xs uppercase text-black font-bold">Pitra Dosha Result</span>
          <div className="text-3xl font-extrabold text-black">{result.title}</div>
          <p className="text-xs text-zinc-900 font-sans leading-relaxed">{result.description}</p>
        </motion.div>
      )}
    </div>
  );
}

// 12. KUNDLI MATCHING (GUN MILAN) CALCULATOR
export function KundliMatchingComp() {
  const [date1, setDate1] = useState("1995-08-15");
  const [time1, setTime1] = useState("10:30");
  const [city1, setCity1] = useState<CityData>(getCityDefault());

  const [date2, setDate2] = useState("1997-04-20");
  const [time2, setTime2] = useState("14:15");
  const [city2, setCity2] = useState<CityData>(getCityDefault());

  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d1 = parseDateTime(date1, time1);
    const chart1 = calculateBirthChart(d1, city1.lat, city1.lng, city1.utcOffset);

    const d2 = parseDateTime(date2, time2);
    const chart2 = calculateBirthChart(d2, city2.lat, city2.lng, city2.utcOffset);

    const moon1 = chart1.planets["Moon"];
    const moon2 = chart2.planets["Moon"];

    const match = calculateGunMilan(
      moon1.siderealLongitude,
      moon2.siderealLongitude
    );

    setResult(match);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Person 1 Card */}
          <div className="bg-[#FAF7F2] border-2 border-black rounded-xl p-4 space-y-3 shadow-[3px_3px_0px_#000000]">
            <h4 className="font-bold uppercase text-black text-sm border-b-2 border-black pb-1">Person 1 Details (Groom/Partner 1)</h4>
            <div><label className="block text-zinc-900 font-bold uppercase mb-1">Birth Date</label><input type="date" required value={date1} onChange={(e) => setDate1(e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" /></div>
            <div><label className="block text-zinc-900 font-bold uppercase mb-1">Birth Time</label><input type="time" required value={time1} onChange={(e) => setTime1(e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" /></div>
            <LocationInput label="Birth Place" selectedCity={city1} onSelectCity={setCity1} />
          </div>

          {/* Person 2 Card */}
          <div className="bg-[#FAF7F2] border-2 border-black rounded-xl p-4 space-y-3 shadow-[3px_3px_0px_#000000]">
            <h4 className="font-bold uppercase text-black text-sm border-b-2 border-black pb-1">Person 2 Details (Bride/Partner 2)</h4>
            <div><label className="block text-zinc-900 font-bold uppercase mb-1">Birth Date</label><input type="date" required value={date2} onChange={(e) => setDate2(e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" /></div>
            <div><label className="block text-zinc-900 font-bold uppercase mb-1">Birth Time</label><input type="time" required value={time2} onChange={(e) => setTime2(e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" /></div>
            <LocationInput label="Birth Place" selectedCity={city2} onSelectCity={setCity2} />
          </div>
        </div>

        <button type="submit" className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-black font-extrabold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000] text-sm">
          Calculate 36-Gun Milan Matching Score
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <AshtaKootaTable result={result} />
        </motion.div>
      )}
    </div>
  );
}

// 13. LOVE CALCULATOR COMPONENT
export function LoveCalculatorComp() {
  const [name1, setName1] = useState("Alex");
  const [name2, setName2] = useState("Taylor");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let sum = 0;
    const str = (name1 + name2).toLowerCase().replace(/[^a-z]/g, '');
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    const score = 50 + (sum % 49);
    setResult(score);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Your Name</label><input type="text" required value={name1} onChange={(e) => setName1(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Partner's Name</label><input type="text" required value={name2} onChange={(e) => setName2(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <button type="submit" className="w-full py-3.5 bg-rose-500 hover:bg-rose-400 text-white font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate Love Score</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-rose-100 border-3 border-black rounded-2xl p-6 text-center space-y-3 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-rose-900 font-bold">Love Compatibility Score</span>
          <div className="text-5xl font-extrabold text-rose-600">{result}%</div>
          <p className="text-xs text-zinc-900 font-sans font-bold">High Romantic & Cosmic Resonance!</p>
        </motion.div>
      )}
    </div>
  );
}

// 14. ATMAKARAKA & DARAKARAKA CALCULATOR
export function AtmakarakaDarakarakaComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const karakas = calculateJaiminiKarakas(chart);
    setResult(karakas);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Find Jaimini Atmakaraka & Darakaraka</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#FFF8F3] border-3 border-black p-5 rounded-2xl text-center space-y-2 shadow-[3px_3px_0px_#000000]">
            <span className="text-xs uppercase text-amber-900 font-bold">Atmakaraka (Soul Planet)</span>
            <div className="text-3xl font-extrabold text-black">{result.atmakaraka.name}</div>
            <span className="text-xs text-zinc-600 block">{result.atmakaraka.formattedDegree}</span>
          </div>
          <div className="bg-[#FFF8F3] border-3 border-black p-5 rounded-2xl text-center space-y-2 shadow-[3px_3px_0px_#000000]">
            <span className="text-xs uppercase text-rose-900 font-bold">Darakaraka (Spouse Planet)</span>
            <div className="text-3xl font-extrabold text-rose-600">{result.darakaraka.name}</div>
            <span className="text-xs text-zinc-600 block">{result.darakaraka.formattedDegree}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 15. ISHTA DEVATA CALCULATOR
export function IshtaDevataComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const ishta = calculateIshtaDevata(chart);
    setResult(ishta);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Find Ishta Devata</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Your Ishta Devata</span>
          <div className="text-3xl font-extrabold text-black">{result.ishtaDevata}</div>
          <p className="text-xs text-zinc-900 font-sans leading-relaxed">{result.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}

// 16. KP HORARY CALCULATOR
export function KPHoraryComp() {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const deg = ((number - 1) / 249) * 360;
    const kp = getKPSubLordForDegree(deg);
    setResult({ seed: number, ...kp });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Select KP Horary Number (1 - 249)</label>
          <input type="number" min="1" max="249" required value={number} onChange={(e) => setNumber(Number(e.target.value))} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Get KP Sub-Lord Analysis</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">KP Horary Seed #{result.seed}</span>
          <div className="text-3xl font-extrabold text-black">Sub Lord: {result.subLord}</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Sign Lord</span><span className="text-black font-bold">{result.rashiLord} ({result.rashi})</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Star Lord</span><span className="text-black font-bold">{result.starLord} ({result.nakshatra})</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 17. KP SUB LORD CALCULATOR
export function KPSubLordComp() {
  const [degree, setDegree] = useState(45.5);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const kp = getKPSubLordForDegree(degree);
    setResult(kp);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Zodiac Degree (0° - 360°)</label>
          <input type="number" step="0.01" min="0" max="360" required value={degree} onChange={(e) => setDegree(Number(e.target.value))} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Lookup KP Sub-Lord</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Degree {degree}° KP Division</span>
          <div className="text-3xl font-extrabold text-black">Sub Lord: {result.subLord}</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Sign Lord</span><span className="text-black font-bold">{result.rashiLord} ({result.rashi})</span></div>
            <div className="bg-white border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Star Lord</span><span className="text-black font-bold">{result.starLord} ({result.nakshatra})</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 18. KP RULING PLANETS CALCULATOR
export function KPRulingPlanetsComp() {
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    const d = new Date();
    const chart = calculateBirthChart(d, 28.6139, 77.2090, 5.5);
    const moon = chart.planets["Moon"];
    const lagna = chart.lagna;
    setResult({
      dayLord: ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"][d.getDay()],
      moonSignLord: moon.rashiLord,
      moonStarLord: moon.nakshatraLord,
      lagnaSignLord: lagna.rashiLord,
    });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <button onClick={handleCalculate} className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
        Generate Current Moment KP Ruling Planets
      </button>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-[10px] text-zinc-600 uppercase font-bold">Day Lord</span><span className="text-xl font-extrabold text-black">{result.dayLord}</span></div>
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-[10px] text-zinc-600 uppercase font-bold">Moon Sign Lord</span><span className="text-xl font-extrabold text-black">{result.moonSignLord}</span></div>
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-[10px] text-zinc-600 uppercase font-bold">Moon Star Lord</span><span className="text-xl font-extrabold text-black">{result.moonStarLord}</span></div>
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-[10px] text-zinc-600 uppercase font-bold">Lagna Sign Lord</span><span className="text-xl font-extrabold text-black">{result.lagnaSignLord}</span></div>
        </motion.div>
      )}
    </div>
  );
}

// 19. GEMSTONE RECOMMENDER
export function GemstoneRecommenderComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const lagnaLord = chart.lagna.rashiLord;
    const gems: Record<string, string> = {
      Sun: "Ruby (Manik)", Moon: "Pearl (Moti)", Mars: "Red Coral (Moonga)",
      Mercury: "Emerald (Panna)", Jupiter: "Yellow Sapphire (Pukhraj)",
      Venus: "Diamond / White Sapphire", Saturn: "Blue Sapphire (Neelam)"
    };
    setResult({ lagnaSign: chart.lagna.rashi, lagnaLord, gem: gems[lagnaLord] || "Pearl" });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Recommend Vedic Gemstone</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Recommended Life Gemstone</span>
          <div className="text-3xl font-extrabold text-black">{result.gem}</div>
          <p className="text-xs text-zinc-800 font-sans">Strengthens your Lagna Lord ({result.lagnaLord}) for Ascendant {result.lagnaSign}.</p>
        </motion.div>
      )}
    </div>
  );
}

// 20. RUDRAKSHA RECOMMENDER
export function RudrakshaRecommenderComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const moonRashi = chart.planets["Moon"].rashiIndex;
    const mukhiList = ["1 Mukhi", "2 Mukhi", "3 Mukhi", "4 Mukhi", "5 Mukhi", "6 Mukhi", "7 Mukhi", "8 Mukhi", "9 Mukhi", "10 Mukhi", "11 Mukhi", "12 Mukhi"];
    setResult({ rashi: chart.planets["Moon"].rashi, rudraksha: mukhiList[moonRashi] || "5 Mukhi" });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Find Auspicious Rudraksha</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Recommended Rudraksha</span>
          <div className="text-3xl font-extrabold text-black">{result.rudraksha}</div>
          <p className="text-xs text-zinc-800 font-sans">Auspicious bead based on your Moon Sign ({result.rashi}).</p>
        </motion.div>
      )}
    </div>
  );
}

// 21. BABY NAME CALCULATOR
export function BabyNameComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const chart = calculateBirthChart(d, city.lat, city.lng, city.utcOffset);
    const moon = chart.planets["Moon"];
    const aksharas = NAKSHATRA_PADA_AKSHARAS[moon.nakshatraIndex];
    setResult({ rashi: moon.rashi, nakshatra: moon.nakshatra, pada: moon.pada, akshara: aksharas[moon.pada - 1] || "A" });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Find Starting Name Letter (Akshara)</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Starting Syllable / Akshara</span>
          <div className="text-5xl font-extrabold text-black">"{result.akshara}"</div>
          <p className="text-xs text-zinc-800 font-sans">Derived from Nakshatra {result.nakshatra} (Pada {result.pada}) in {result.rashi}.</p>
        </motion.div>
      )}
    </div>
  );
}

// 22. BIRTH PANCHANG CALCULATOR
export function BirthPanchangComp() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [city, setCity] = useState<CityData>(getCityDefault());
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, time);
    const panchang = calculateBirthPanchang(d, city.lat, city.lng, city.utcOffset);
    setResult(panchang);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Exact Birth Time</label><input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <LocationInput selectedCity={city} onSelectCity={setCity} />
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate 5 Limbs of Panchang</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Tithi</span><span className="text-lg font-extrabold text-black">{result.tithi.name}</span></div>
            <div className="bg-white border-2 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Vara</span><span className="text-lg font-extrabold text-black">{result.vara}</span></div>
            <div className="bg-white border-2 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Nakshatra</span><span className="text-lg font-extrabold text-black">{result.nakshatra.name}</span></div>
            <div className="bg-white border-2 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Yoga</span><span className="text-lg font-extrabold text-black">{result.yoga.name}</span></div>
            <div className="bg-white border-2 border-black p-3 rounded-xl text-center shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Karana</span><span className="text-lg font-extrabold text-black">{result.karana.name}</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 23. AYANAMSA CALCULATOR
export function AyanamsaComp() {
  const [date, setDate] = useState("1995-08-15");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseDateTime(date, "12:00");
    const jd = getJulianDate(d, 0);
    const lahiri = calculateLahiriAyanamsa(jd);
    const raman = calculateRamanAyanamsa(jd);
    const kp = calculateKPAyanamsa(jd);
    setResult({
      lahiri: degToDMS(lahiri).formatted,
      raman: degToDMS(raman).formatted,
      kp: degToDMS(kp).formatted
    });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Select Date</label><input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Calculate Ayanamsa Values</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Lahiri</span><span className="text-base font-extrabold text-black">{result.lahiri}</span></div>
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">KP</span><span className="text-base font-extrabold text-black">{result.kp}</span></div>
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="text-[10px] text-zinc-600 uppercase font-bold block">Raman</span><span className="text-base font-extrabold text-black">{result.raman}</span></div>
        </motion.div>
      )}
    </div>
  );
}
