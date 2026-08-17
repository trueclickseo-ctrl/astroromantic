"use client";

import React, { useState } from "react";
import { Sparkles, MapPin, CheckCircle2, ShieldCheck, Heart, Info, ArrowRight, User } from "lucide-react";
import { CityData, CITIES_DATABASE, getCityDefault, searchCities } from "@/lib/city-database";
import { calculateBirthChart, calculateFullNavamsaChart, FullNavamsaChartResult } from "@/lib/astrology-engine";

export function D9ChartComponent() {
  const [date, setDate] = useState("1995-08-15");
  const [time, setTime] = useState("10:30");
  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState<CityData>(getCityDefault());
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [isSearchingCity, setIsSearchingCity] = useState(false);
  const [result, setResult] = useState<FullNavamsaChartResult | null>(null);

  const citySearchResults = searchCities(citySearchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    const birthDateObj = new Date(Date.UTC(year, month - 1, day, hours, minutes));

    const chart = calculateBirthChart(birthDateObj, selectedCity.lat, selectedCity.lng, selectedCity.utcOffset);
    const navamsaResult = calculateFullNavamsaChart(chart);
    setResult(navamsaResult);
  };

  return (
    <div className="w-full space-y-8 font-sans">
      {/* INPUT FORM CARD */}
      <div className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="flex items-center justify-between border-b-2 border-black pb-4">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <div>
              <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
                Calculate Your D9 Navamsa Chart
              </h3>
              <p className="text-xs text-zinc-700">
                100% Private Client-Side Calculation • Lahiri Ayanamsa • Sidereal Zodiac
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center space-x-1 bg-emerald-100 border border-black rounded-full px-3 py-1 text-xs font-mono font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Private & Browser-Only</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                Exact Birth Time *
              </label>
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]"
              />
            </div>
          </div>

          {/* Birth Place City Search */}
          <div className="relative">
            <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
              Birth Place (City, Country) *
            </label>
            <button
              type="button"
              onClick={() => setIsSearchingCity(!isSearchingCity)}
              className="w-full bg-[#f4f3ef] hover:bg-amber-50 border-2 border-black rounded-xl p-3 text-left font-mono text-xs font-bold text-black flex items-center justify-between shadow-[2px_2px_0px_#000000]"
            >
              <div className="flex items-center space-x-2 truncate">
                <MapPin className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>{selectedCity.city}, {selectedCity.country} (Lat: {selectedCity.lat}°, Lng: {selectedCity.lng}°, UTC {selectedCity.utcOffset >= 0 ? `+${selectedCity.utcOffset}` : selectedCity.utcOffset})</span>
              </div>
              <span className="text-xs text-rose-600 underline">Change City</span>
            </button>

            {isSearchingCity && (
              <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border-3 border-black rounded-xl p-3 shadow-[6px_6px_0px_#000000] space-y-2">
                <input
                  type="text"
                  placeholder="Search city (e.g. Kolkata, London, New York)..."
                  value={citySearchQuery}
                  onChange={(e) => setCitySearchQuery(e.target.value)}
                  className="w-full bg-[#f4f3ef] border-2 border-black rounded-lg p-2 font-mono text-xs text-black outline-none"
                  autoFocus
                />
                <div className="max-h-48 overflow-y-auto space-y-1">
                  {citySearchResults.map((c, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedCity(c);
                        setIsSearchingCity(false);
                        setCitySearchQuery("");
                      }}
                      className="p-2 hover:bg-amber-100 rounded-md font-mono text-xs font-bold text-black cursor-pointer flex justify-between"
                    >
                      <span>{c.city}, {c.country}</span>
                      <span className="text-zinc-600 font-normal">UTC {c.utcOffset >= 0 ? `+${c.utcOffset}` : c.utcOffset}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm uppercase rounded-xl border-3 border-black transition-all shadow-[4px_4px_0px_#000000]"
          >
            Generate Navamsa (D9) Chart & Insights
          </button>
        </form>
      </div>

      {/* CALCULATED RESULTS CONTAINER */}
      {result && (
        <div className="space-y-8">
          {/* HEADER SUMMARY BADGE */}
          <div className="bg-[#fefce8] border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-black pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">Calculated Vedic D9 Chart</span>
                <h3 className="text-2xl font-extrabold font-mono text-black">
                  {name ? `${name}'s D9 Navamsa Chart` : "Your D9 Navamsa Chart"}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-amber-300 border-2 border-black rounded-full px-3.5 py-1 text-xs font-mono font-bold text-black shadow-[2px_2px_0px_#000000]">
                  D9 Lagna: {result.d9Lagna.rashi} ({result.d9Lagna.rashiLord})
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
              <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
                <span className="text-zinc-600 block font-bold text-[11px] uppercase">D9 Ascendant / Lagna</span>
                <span className="text-base font-extrabold text-black block mt-0.5">{result.d9Lagna.rashi}</span>
                <span className="text-[11px] text-zinc-700 block">Lord: {result.d9Lagna.rashiLord}</span>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
                <span className="text-zinc-600 block font-bold text-[11px] uppercase">Vargottama Planets</span>
                <span className="text-base font-extrabold text-black block mt-0.5">
                  {result.vargottamaPlanets.length > 0 ? result.vargottamaPlanets.join(", ") : "None"}
                </span>
                <span className="text-[11px] text-emerald-800 font-bold block">
                  {result.vargottamaPlanets.length} High-Strength Placement(s)
                </span>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
                <span className="text-zinc-600 block font-bold text-[11px] uppercase">Karakamsa (Atmakaraka in D9)</span>
                <span className="text-base font-extrabold text-black block mt-0.5">{result.karakamsa.planet} in {result.karakamsa.rashi}</span>
                <span className="text-[11px] text-rose-700 font-bold block">House {result.karakamsa.house} in D9</span>
              </div>
            </div>
          </div>

          {/* VISUAL NORTH INDIAN D9 CHART DISPLAY */}
          <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
                Visual D9 Navamsa Chart (North Indian Style)
              </h3>
              <span className="text-xs font-mono font-bold text-zinc-600">Sidereal Lahiri</span>
            </div>

            <div className="max-w-md mx-auto aspect-square bg-[#fffef5] border-3 border-black rounded-2xl p-3 relative shadow-[4px_4px_0px_#000000] grid grid-cols-3 grid-rows-3 gap-1 font-mono text-xs">
              {/* Responsive 12 D9 Houses Grid Representation */}
              {Array.from({ length: 12 }).map((_, hIdx) => {
                const houseNum = hIdx + 1;
                const rashiIdx = (result.d9Lagna.rashiIndex + hIdx) % 12;
                const rashiName = ["Ari", "Tau", "Gem", "Can", "Leo", "Vir", "Lib", "Sco", "Sag", "Cap", "Aqu", "Pis"][rashiIdx];

                const planetsInHouse = Object.values(result.planets).filter(p => p.d9House === houseNum);

                return (
                  <div
                    key={houseNum}
                    className={`border-2 border-black rounded-lg p-1.5 flex flex-col justify-between ${
                      houseNum === 1
                        ? "bg-amber-200 font-bold"
                        : houseNum === 7
                        ? "bg-rose-100 font-bold"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-extrabold text-black">H{houseNum}</span>
                      <span className="text-zinc-600 font-bold">{rashiName}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 my-1">
                      {planetsInHouse.map(p => (
                        <span
                          key={p.name}
                          className={`text-[10px] font-extrabold px-1 rounded border border-black ${
                            p.isVargottama ? "bg-amber-400 text-black" : "bg-black text-white"
                          }`}
                          title={`${p.name} in ${p.d9Rashi} (House ${houseNum})`}
                        >
                          {p.name.slice(0, 2)}
                        </span>
                      ))}
                    </div>

                    {houseNum === 1 && (
                      <span className="text-[9px] font-bold text-black text-right block">Lagna</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* STRUCTURED PLANETARY D9 DATA TABLE */}
          <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
            <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight border-b-2 border-black pb-3">
              Complete D1 vs. D9 Planetary Position Table
            </h3>

            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
              <table className="w-full text-left text-xs font-mono border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                    <th className="p-2.5 border-r-2 border-black">Planet</th>
                    <th className="p-2.5 border-r-2 border-black">D1 Rashi (Birth)</th>
                    <th className="p-2.5 border-r-2 border-black">D9 Rashi (Navamsa)</th>
                    <th className="p-2.5 border-r-2 border-black">D9 House</th>
                    <th className="p-2.5 border-r-2 border-black">D9 Sign Lord</th>
                    <th className="p-2.5 border-r-2 border-black">Exact Degree</th>
                    <th className="p-2.5">Vargottama Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black">
                  {Object.values(result.planets).map((p) => (
                    <tr key={p.name} className="hover:bg-amber-50">
                      <td className="p-2.5 border-r-2 border-black font-extrabold text-black">
                        {p.name}
                      </td>
                      <td className="p-2.5 border-r-2 border-black font-bold">
                        {p.d1Rashi}
                      </td>
                      <td className="p-2.5 border-r-2 border-black font-extrabold text-black">
                        {p.d9Rashi}
                      </td>
                      <td className="p-2.5 border-r-2 border-black font-bold text-center">
                        House {p.d9House}
                      </td>
                      <td className="p-2.5 border-r-2 border-black text-zinc-800">
                        {p.d9RashiLord}
                      </td>
                      <td className="p-2.5 border-r-2 border-black text-zinc-700">
                        {p.formattedDegree}
                      </td>
                      <td className="p-2.5">
                        {p.isVargottama ? (
                          <span className="bg-amber-400 text-black font-bold px-2 py-0.5 rounded-full border border-black text-[11px] inline-flex items-center space-x-1">
                            <span>★ Vargottama</span>
                          </span>
                        ) : (
                          <span className="text-zinc-600 text-[11px]">Normal</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* D9 MARRIAGE & RELATIONSHIP ANALYSIS SECTION */}
          <div className="bg-amber-50 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
            <div className="flex items-center space-x-3 border-b-2 border-black pb-3">
              <Heart className="w-6 h-6 text-rose-600" />
              <h3 className="text-2xl font-extrabold font-mono text-black">
                D9 Marriage & Spouse Profile Analysis
              </h3>
            </div>

            <p className="text-sm text-zinc-900 font-sans leading-relaxed">
              {result.marriageAnalysis.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
                <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">7th House in D9 (Marriage House)</span>
                <span className="text-lg font-extrabold font-mono text-black block">
                  {result.marriageAnalysis.seventhHouseRashiInD9} (Ruled by {result.marriageAnalysis.seventhHouseLordInD9})
                </span>
                <div className="pt-1">
                  <span className="text-xs font-mono font-bold text-black block mb-1">Traditional Spouse Traits:</span>
                  <ul className="space-y-1 text-xs text-zinc-800 font-sans">
                    {result.marriageAnalysis.spouseTraits.map((trait, tIdx) => (
                      <li key={tIdx} className="flex items-center space-x-2">
                        <span className="font-bold text-rose-600">•</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
                <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">Key Marriage Karakas in D9</span>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 bg-[#f4f3ef] border border-black rounded-lg">
                    <span className="font-bold text-black block">Venus in D9: {result.marriageAnalysis.venusInD9Rashi}</span>
                    <span className="text-[11px] text-zinc-700">Primary karaka for romantic harmony, affection, and spouse for male horoscopes.</span>
                  </div>

                  <div className="p-2 bg-[#f4f3ef] border border-black rounded-lg">
                    <span className="font-bold text-black block">Jupiter in D9: {result.marriageAnalysis.jupiterInD9Rashi}</span>
                    <span className="text-[11px] text-zinc-700">Karaka for marital wisdom, dharma, and spouse for female horoscopes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
