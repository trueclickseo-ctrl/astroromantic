"use client";

import React, { useState, useMemo } from "react";
import {
  Compass, Sparkles, Calendar, Clock, MapPin, Search, ChevronDown, Info,
  CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw, ArrowRight, Layers,
  Eye, HelpCircle, Activity, RotateCcw, X, SlidersHorizontal, Share2, Copy
} from "lucide-react";
import { LocationInput } from "@/components/calculators/shared-ui";
import { CityData, getCityDefault } from "@/lib/city-database";
import {
  calculateVedicTransitAnalysis, TransitPlanetDetail, TransitAnalysisResult,
  BirthChart, RASHI_NAMES
} from "@/lib/astrology-engine";

export function VedicTransitComponent() {
  // Mode selection
  const [activeMode, setActiveMode] = useState<"current" | "natal_transit">("current");

  // Advanced settings toggle & state
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [ayanamsaSetting, setAyanamsaSetting] = useState("Lahiri (Chitrapaksha)");
  const [houseSystemSetting, setHouseSystemSetting] = useState("Equal House (Rashi-Equal)");
  const [chartStyleSetting, setChartStyleSetting] = useState<"north" | "south">("north");
  const [nodeTypeSetting, setNodeTypeSetting] = useState("True Node");

  // Mode 1: Current Sky Controls
  const [transitDate, setTransitDate] = useState("2026-08-17");
  const [transitTime, setTransitTime] = useState("12:00");
  const [transitCity, setTransitCity] = useState<CityData>(getCityDefault());

  // Mode 2: Natal Controls
  const [birthDate, setBirthDate] = useState("1995-08-15");
  const [birthTime, setBirthTime] = useState("10:30");
  const [birthCity, setBirthCity] = useState<CityData>(getCityDefault());

  // Active Chart Tab view
  const [chartTab, setChartTab] = useState<"combined" | "transit" | "natal" | "navamsa">("combined");

  // Planet Detail Drawer state
  const [selectedPlanetDetail, setSelectedPlanetDetail] = useState<TransitPlanetDetail | null>(null);

  // Compare Two Dates state
  const [compareDateB, setCompareDateB] = useState("2026-09-17");
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Copy notification state
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Helper date parsers
  const parseDateTime = (dStr: string, tStr: string) => {
    const [y, m, d] = dStr.split("-").map(Number);
    const [hh, mm] = tStr.split(":").map(Number);
    return new Date(Date.UTC(y, m - 1, d, hh, mm));
  };

  // Perform Vedic Transit Analysis calculation
  const transitAnalysis: TransitAnalysisResult = useMemo(() => {
    const tDate = parseDateTime(transitDate, transitTime);
    const nDate = activeMode === "natal_transit" ? parseDateTime(birthDate, birthTime) : undefined;

    return calculateVedicTransitAnalysis(
      tDate,
      transitCity.lat,
      transitCity.lng,
      transitCity.utcOffset,
      nDate,
      birthCity.lat,
      birthCity.lng,
      birthCity.utcOffset
    );
  }, [activeMode, transitDate, transitTime, transitCity, birthDate, birthTime, birthCity]);

  // Mode 2 Compare Analysis calculation
  const compareAnalysisB = useMemo(() => {
    if (!showCompareModal) return null;
    const tDateB = parseDateTime(compareDateB, transitTime);
    return calculateVedicTransitAnalysis(tDateB, transitCity.lat, transitCity.lng, transitCity.utcOffset);
  }, [showCompareModal, compareDateB, transitTime, transitCity]);

  const handleSetTodayNow = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = (now.getMonth() + 1).toString().padStart(2, "0");
    const dd = now.getDate().toString().padStart(2, "0");
    const hh = now.getHours().toString().padStart(2, "0");
    const min = now.getMinutes().toString().padStart(2, "0");
    setTransitDate(`${yyyy}-${mm}-${dd}`);
    setTransitTime(`${hh}:${min}`);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const planetNamesList = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];

  return (
    <div className="w-full space-y-8 font-sans">
      {/* MODE SELECTION TABS */}
      <div className="bg-white border-3 border-black rounded-2xl p-2 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => { setActiveMode("current"); setChartTab("transit"); }}
          className={`flex-1 py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-extrabold uppercase transition-all flex items-center justify-center space-x-2 border-2 ${
            activeMode === "current"
              ? "bg-amber-400 text-black border-black shadow-[3px_3px_0px_#000000]"
              : "bg-[#f4f3ef] text-zinc-700 border-transparent hover:border-black"
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Mode 1: Current Transits Today</span>
        </button>

        <button
          onClick={() => { setActiveMode("natal_transit"); setChartTab("combined"); }}
          className={`flex-1 py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-extrabold uppercase transition-all flex items-center justify-center space-x-2 border-2 ${
            activeMode === "natal_transit"
              ? "bg-rose-500 text-white border-black shadow-[3px_3px_0px_#000000]"
              : "bg-[#f4f3ef] text-zinc-700 border-transparent hover:border-black"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Mode 2: Transit Over Natal Chart</span>
        </button>
      </div>

      {/* INPUT CONTROL PANEL */}
      <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-zinc-200 pb-4 gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block">Control Panel</span>
            <h2 className="text-xl sm:text-2xl font-extrabold font-mono text-black">
              {activeMode === "current" ? "Current Planetary Positions Parameters" : "Natal Birth Details & Transit Date Parameters"}
            </h2>
          </div>

          <button
            onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
            className="px-3.5 py-2 bg-[#f4f3ef] hover:bg-amber-100 border-2 border-black rounded-xl font-mono text-xs font-bold text-black flex items-center space-x-1.5 shadow-[2px_2px_0px_#000000]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{showAdvancedSettings ? "Hide Settings" : "Advanced Settings"}</span>
          </button>
        </div>

        {/* ADVANCED SETTINGS DRAWER */}
        {showAdvancedSettings && (
          <div className="bg-amber-50 border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-3 font-mono text-xs">
            <span className="font-bold text-black uppercase block border-b border-black pb-1">Calculation Methodology Settings</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block font-bold text-zinc-800 mb-1">Ayanamsa</label>
                <select value={ayanamsaSetting} onChange={e => setAyanamsaSetting(e.target.value)} className="w-full bg-white border border-black rounded-lg p-2 font-bold text-black outline-none">
                  <option value="Lahiri (Chitrapaksha)">Lahiri (Chitrapaksha)</option>
                  <option value="Raman">Raman</option>
                  <option value="KP (Krishnamurti)">KP (Krishnamurti)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-zinc-800 mb-1">House System</label>
                <select value={houseSystemSetting} onChange={e => setHouseSystemSetting(e.target.value)} className="w-full bg-white border border-black rounded-lg p-2 font-bold text-black outline-none">
                  <option value="Equal House (Rashi-Equal)">Equal House (Rashi-Equal)</option>
                  <option value="Sripati Bhava Chalit">Sripati Bhava Chalit</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-zinc-800 mb-1">Chart Display Style</label>
                <select value={chartStyleSetting} onChange={e => setChartStyleSetting(e.target.value as any)} className="w-full bg-white border border-black rounded-lg p-2 font-bold text-black outline-none">
                  <option value="north">North Indian (Diamond)</option>
                  <option value="south">South Indian (Square)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-zinc-800 mb-1">Rahu / Ketu Node</label>
                <select value={nodeTypeSetting} onChange={e => setNodeTypeSetting(e.target.value)} className="w-full bg-white border border-black rounded-lg p-2 font-bold text-black outline-none">
                  <option value="True Node">True Node (Mean Motion)</option>
                  <option value="Mean Node">Mean Node</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2 NATAL INPUTS */}
        {activeMode === "natal_transit" && (
          <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-4">
            <span className="text-xs font-mono font-bold text-black uppercase block border-b border-black pb-1">
              1. Natal Birth Details (Your Personal Birth Chart)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <label className="block font-bold text-black uppercase mb-1">Date of Birth</label>
                <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black font-bold outline-none shadow-[2px_2px_0px_#000000]" />
              </div>
              <div>
                <label className="block font-bold text-black uppercase mb-1">Exact Birth Time</label>
                <input type="time" value={birthTime} onChange={e => setBirthTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black font-bold outline-none shadow-[2px_2px_0px_#000000]" />
              </div>
              <div>
                <LocationInput label="Birthplace Location" selectedCity={birthCity} onSelectCity={setBirthCity} />
              </div>
            </div>
          </div>
        )}

        {/* TRANSIT DATE & LOCATION INPUTS */}
        <div className="space-y-3 font-mono text-xs">
          <span className="font-bold text-black uppercase block border-b border-zinc-300 pb-1">
            {activeMode === "natal_transit" ? "2. Transit Date & Location Parameters" : "Target Date, Time & Location for Current Sky"}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-black uppercase mb-1">Transit Date</label>
              <input type="date" value={transitDate} onChange={e => setTransitDate(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black font-bold outline-none shadow-[2px_2px_0px_#000000]" />
            </div>

            <div>
              <label className="block font-bold text-black uppercase mb-1">Transit Time</label>
              <input type="time" value={transitTime} onChange={e => setTransitTime(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black font-bold outline-none shadow-[2px_2px_0px_#000000]" />
            </div>

            <div>
              <LocationInput label="Transit Location" selectedCity={transitCity} onSelectCity={setTransitCity} />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center space-x-2">
              <button onClick={handleSetTodayNow} className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 border-2 border-black rounded-xl text-black font-bold shadow-[2px_2px_0px_#000000] flex items-center space-x-1">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Today &amp; Now</span>
              </button>
              <button onClick={() => setShowCompareModal(true)} className="px-3.5 py-2 bg-white hover:bg-amber-100 border-2 border-black rounded-xl text-black font-bold shadow-[2px_2px_0px_#000000]">
                Compare Two Dates 📊
              </button>
            </div>

            <div className="text-[11px] text-zinc-600 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Private calculation in browser • Lahiri Sidereal Ayanamsa ({transitAnalysis.transitChart.ayanamsa.toFixed(2)}°)</span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK SUMMARY PLANETARY CARDS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold font-mono text-black uppercase">
            Today's Planetary Snapshot ({transitDate})
          </h2>
          <span className="text-xs font-mono font-bold text-zinc-600">Click any planet card for full details</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 font-mono text-xs">
          {planetNamesList.map((pName) => {
            const p = transitAnalysis.transitPlanets[pName];
            if (!p) return null;

            return (
              <div
                key={pName}
                onClick={() => setSelectedPlanetDetail(p)}
                className={`border-2 border-black rounded-xl p-2.5 cursor-pointer transition-all shadow-[2px_2px_0px_#000000] space-y-1 ${
                  p.isRetrograde ? "bg-amber-100 hover:bg-amber-200" : "bg-white hover:bg-amber-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-black text-xs">{pName}</span>
                  {p.isRetrograde && (
                    <span className="text-[10px] font-bold bg-rose-500 text-white rounded px-1">℞</span>
                  )}
                </div>

                <span className="text-sm font-extrabold text-rose-700 block">{p.rashi}</span>
                <span className="text-[10px] font-bold text-zinc-700 block truncate">{p.formattedDegree}</span>
                <span className="text-[9px] text-zinc-600 block truncate">{p.nakshatra} (P{p.pada})</span>

                {activeMode === "natal_transit" && p.houseFromLagna && (
                  <span className="text-[9px] font-bold bg-black text-white px-1.5 py-0.2 rounded block text-center mt-1">
                    House {p.houseFromLagna}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* MAIN DASHBOARD: 60/40 LAYOUT (CHART LEFT + PLANETARY TABLE RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: INTERACTIVE SVG VEDIC CHART (7 COLS) */}
        <div className="lg:col-span-7 bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-black pb-3 gap-2">
            <h3 className="text-xl font-extrabold font-mono text-black uppercase">
              Vedic Chart View
            </h3>

            {/* Chart View Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {activeMode === "natal_transit" && (
                <button
                  onClick={() => setChartTab("combined")}
                  className={`px-3 py-1 rounded-lg border-2 border-black font-bold transition-all ${
                    chartTab === "combined" ? "bg-rose-500 text-white" : "bg-white text-black hover:bg-amber-100"
                  }`}
                >
                  Combined
                </button>
              )}
              <button
                onClick={() => setChartTab("transit")}
                className={`px-3 py-1 rounded-lg border-2 border-black font-bold transition-all ${
                  chartTab === "transit" ? "bg-amber-400 text-black" : "bg-white text-black hover:bg-amber-100"
                }`}
              >
                Transit
              </button>
              {activeMode === "natal_transit" && (
                <button
                  onClick={() => setChartTab("natal")}
                  className={`px-3 py-1 rounded-lg border-2 border-black font-bold transition-all ${
                    chartTab === "natal" ? "bg-black text-white" : "bg-white text-black hover:bg-amber-100"
                  }`}
                >
                  Natal
                </button>
              )}
            </div>
          </div>

          {/* VISUAL CHART LEGEND */}
          <div className="flex items-center justify-between text-xs font-mono bg-[#f4f3ef] border-2 border-black rounded-xl p-2.5">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-black">Legend:</span>
              {activeMode === "natal_transit" && (
                <span className="flex items-center space-x-1 font-bold text-black">
                  <span className="w-3 h-3 bg-black rounded-sm inline-block" />
                  <span>Natal Planet</span>
                </span>
              )}
              <span className="flex items-center space-x-1 font-bold text-rose-700">
                <span className="w-3 h-3 bg-rose-500 rounded-sm inline-block" />
                <span>Transiting Planet (Gochar)</span>
              </span>
            </div>
          </div>

          {/* SVG CHART RENDERER */}
          <div className="w-full flex justify-center p-2">
            <svg viewBox="0 0 500 500" className="w-full max-w-[460px] aspect-square bg-[#fffdfa] border-3 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              {/* North Indian Diamond Grid Lines */}
              <rect x="10" y="10" width="480" height="480" fill="none" stroke="#000000" strokeWidth="4" />
              <line x1="10" y1="10" x2="490" y2="490" stroke="#000000" strokeWidth="2" />
              <line x1="490" y1="10" x2="10" y2="490" stroke="#000000" strokeWidth="2" />
              <polygon points="250,10 490,250 250,490 10,250" fill="none" stroke="#000000" strokeWidth="2" />

              {/* Ascendant Badge in House 1 */}
              <text x="250" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#EE5265" fontFamily="monospace">
                ASC: {transitAnalysis.transitChart.lagna.rashi}
              </text>

              {/* Transiting Planet Labels Placement */}
              <g fontFamily="monospace" fontSize="11" fontWeight="bold">
                {Object.entries(transitAnalysis.transitPlanets).map(([pName, p], idx) => {
                  const angle = ((p.rashiIndex * 30) + 15) * Math.PI / 180;
                  const cx = 250 + 170 * Math.sin(angle);
                  const cy = 250 - 170 * Math.cos(angle);

                  return (
                    <g key={pName} transform={`translate(${cx}, ${cy})`}>
                      <rect x="-24" y="-12" width="48" height="20" fill={p.isRetrograde ? "#FEF08A" : "#FFFFFF"} stroke="#000000" strokeWidth="1.5" rx="4" />
                      <text x="0" y="2" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="extrabold">
                        {pName.slice(0, 2)}{p.isRetrograde ? "℞" : ""}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        {/* RIGHT: PLANETARY POSITIONS TABLE (5 COLS) */}
        <div className="lg:col-span-5 bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center justify-between border-b-2 border-black pb-3">
            <h3 className="text-xl font-extrabold font-mono text-black uppercase">
              Planetary Positions Table
            </h3>
          </div>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
            <table className="w-full text-left text-xs font-mono border-collapse bg-white">
              <thead>
                <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                  <th className="p-2.5 border-r border-black">Planet</th>
                  <th className="p-2.5 border-r border-black">Rashi</th>
                  <th className="p-2.5 border-r border-black">Degree</th>
                  <th className="p-2.5 border-r border-black">Nakshatra</th>
                  <th className="p-2.5">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y border-black">
                {planetNamesList.map((pName) => {
                  const p = transitAnalysis.transitPlanets[pName];
                  if (!p) return null;

                  return (
                    <tr
                      key={pName}
                      onClick={() => setSelectedPlanetDetail(p)}
                      className="hover:bg-amber-100 cursor-pointer transition-colors"
                    >
                      <td className="p-2.5 border-r border-black font-extrabold text-black">
                        {pName} {p.isRetrograde ? "℞" : ""}
                      </td>
                      <td className="p-2.5 border-r border-black font-bold text-rose-700">{p.rashi}</td>
                      <td className="p-2.5 border-r border-black">{p.formattedDegree}</td>
                      <td className="p-2.5 border-r border-black text-[11px]">
                        {p.nakshatra} (P{p.pada})
                      </td>
                      <td className="p-2.5 font-bold">
                        {p.dailySpeed > 0 ? `+${p.dailySpeed}°` : `${p.dailySpeed}°`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SPECIALIZED VEDIC TRANSIT ANALYSES */}
      {/* 1. TRANSIT HIGHLIGHTS SUMMARY */}
      <section className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold font-mono text-black uppercase border-b-2 border-black pb-2">
          Vedic Transit Highlights &amp; House Activation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
          {/* Supportive Transits */}
          <div className="bg-[#f0fdf4] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
            <span className="text-xs font-mono font-bold bg-emerald-200 border border-black rounded-full px-2.5 py-0.5 text-black">
              🟢 Favorable Transits
            </span>
            <div className="space-y-2 text-xs font-mono pt-1">
              {transitAnalysis.supportiveTransits.map((item, idx) => (
                <div key={idx} className="bg-white border border-black rounded-lg p-2.5 space-y-1">
                  <span className="font-extrabold text-black block">{item.planet} in House {item.house}</span>
                  <p className="text-[11px] text-zinc-800 font-sans leading-snug">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Transits */}
          <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
            <span className="text-xs font-mono font-bold bg-amber-300 border border-black rounded-full px-2.5 py-0.5 text-black">
              🟠 Important Activations
            </span>
            <div className="space-y-2 text-xs font-mono pt-1">
              {transitAnalysis.importantTransits.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-white border border-black rounded-lg p-2.5 space-y-1">
                  <span className="font-extrabold text-black block">{item.planet} in House {item.house}</span>
                  <p className="text-[11px] text-zinc-800 font-sans leading-snug">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenging Transits */}
          <div className="bg-[#fff1f2] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
            <span className="text-xs font-mono font-bold bg-rose-200 border border-black rounded-full px-2.5 py-0.5 text-black">
              🔴 Caution Transits
            </span>
            <div className="space-y-2 text-xs font-mono pt-1">
              {transitAnalysis.challengingTransits.length > 0 ? (
                transitAnalysis.challengingTransits.map((item, idx) => (
                  <div key={idx} className="bg-white border border-black rounded-lg p-2.5 space-y-1">
                    <span className="font-extrabold text-black block">{item.planet} in House {item.house}</span>
                    <p className="text-[11px] text-zinc-800 font-sans leading-snug">{item.note}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-zinc-700 py-2">No major difficult transits detected currently.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MODE 2 EXCLUSIVE: SADE SATI, ASHTAMA SHANI & DOUBLE TRANSIT */}
      {activeMode === "natal_transit" && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sade Sati Status */}
          <div className="bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] space-y-3">
            <span className="text-xs font-mono font-bold bg-amber-300 border border-black px-3 py-1 rounded-full text-black">
              🪐 Sade Sati Status
            </span>
            <h3 className="text-xl font-extrabold font-mono text-black">
              {transitAnalysis.sadeSatiStatus.phase}
            </h3>
            <p className="text-xs font-sans text-zinc-800 leading-relaxed">
              {transitAnalysis.sadeSatiStatus.description}
            </p>
          </div>

          {/* Ashtama Shani Status */}
          <div className="bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] space-y-3">
            <span className="text-xs font-mono font-bold bg-rose-200 border border-black px-3 py-1 rounded-full text-black">
              ⚡ Ashtama Shani Status
            </span>
            <h3 className="text-xl font-extrabold font-mono text-black">
              {transitAnalysis.ashtamaShaniStatus.isActive ? "Active (8th House)" : "Not Active"}
            </h3>
            <p className="text-xs font-sans text-zinc-800 leading-relaxed">
              {transitAnalysis.ashtamaShaniStatus.description}
            </p>
          </div>

          {/* Double Transit Detector */}
          <div className="bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] space-y-3">
            <span className="text-xs font-mono font-bold bg-emerald-200 border border-black px-3 py-1 rounded-full text-black">
              ✨ Jupiter-Saturn Double Transit
            </span>
            <h3 className="text-xl font-extrabold font-mono text-black">
              {transitAnalysis.doubleTransitHouses.length > 0
                ? `Houses ${transitAnalysis.doubleTransitHouses.join(", ")} Activated`
                : "No Dual Activation"}
            </h3>
            <p className="text-xs font-sans text-zinc-800 leading-relaxed">
              Traditional Vedic astrology holds that houses receiving aspects from both Jupiter and Saturn manifest key life events during this period.
            </p>
          </div>
        </section>
      )}

      {/* UPCOMING PLANETARY TRANSITS & RETROGRADE TRACKER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UPCOMING TRANSITS */}
        <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
          <h3 className="text-lg font-extrabold font-mono text-black uppercase border-b-2 border-black pb-2">
            Upcoming Planetary Transits (Next 90 Days)
          </h3>
          <div className="space-y-2.5 font-mono text-xs">
            {transitAnalysis.upcomingEvents.map((ev, idx) => (
              <div key={idx} className="bg-[#fefce8] border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000] flex items-center justify-between">
                <div>
                  <span className="font-extrabold text-black block">{ev.planet}: {ev.event}</span>
                  <span className="text-[11px] text-zinc-700">{ev.fromSign} → {ev.toSign} ({ev.nakshatra})</span>
                </div>
                <span className="font-bold text-rose-700 bg-white border border-black px-2 py-1 rounded-lg">
                  📅 {ev.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RETROGRADE TRACKER */}
        <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
          <h3 className="text-lg font-extrabold font-mono text-black uppercase border-b-2 border-black pb-2">
            Active Retrograde Planets (Gochar ℞)
          </h3>
          <div className="space-y-2.5 font-mono text-xs">
            {transitAnalysis.retrogradePlanets.length > 0 ? (
              transitAnalysis.retrogradePlanets.map((retro, idx) => (
                <div key={idx} className="bg-amber-100 border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-black text-sm">{retro.planet} ℞</span>
                    <span className="text-xs font-bold text-rose-700">{retro.rashi} ({retro.degree})</span>
                  </div>
                  <p className="text-xs font-sans text-zinc-800 leading-snug">{retro.description}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-zinc-600">No planets are currently in retrograde motion.</p>
            )}
          </div>
        </div>
      </div>

      {/* PLANET DETAIL SLIDE-OVER DRAWER MODAL */}
      {selectedPlanetDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-3 border-black rounded-2xl max-w-lg w-full p-6 shadow-[8px_8px_0px_#000000] space-y-4 relative">
            <button
              onClick={() => setSelectedPlanetDetail(null)}
              className="absolute top-4 right-4 p-1 bg-[#f4f3ef] hover:bg-rose-200 border-2 border-black rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-3 py-1 text-xs font-mono font-bold text-black">
              <span>{selectedPlanetDetail.name} Transit Analysis</span>
            </div>

            <h3 className="text-2xl font-extrabold font-mono text-black">
              {selectedPlanetDetail.name} in {selectedPlanetDetail.rashi}
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#f4f3ef] border-2 border-black rounded-xl p-3">
              <div><span className="text-zinc-600">Exact Degree:</span> <strong className="text-black">{selectedPlanetDetail.formattedDegree}</strong></div>
              <div><span className="text-zinc-600">Nakshatra:</span> <strong className="text-black">{selectedPlanetDetail.nakshatra} (P{selectedPlanetDetail.pada})</strong></div>
              <div><span className="text-zinc-600">Nakshatra Lord:</span> <strong className="text-black">{selectedPlanetDetail.nakshatraLord}</strong></div>
              <div><span className="text-zinc-600">Daily Speed:</span> <strong className="text-black">{selectedPlanetDetail.dailySpeed}°/day</strong></div>
            </div>

            <div className="bg-amber-50 border-2 border-black rounded-xl p-4 space-y-2 text-sm text-zinc-900 leading-relaxed font-sans">
              <h4 className="font-mono font-bold text-black">Vedic Interpretation</h4>
              <p>{selectedPlanetDetail.interpretation}</p>
            </div>

            <button
              onClick={() => setSelectedPlanetDetail(null)}
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 font-mono text-xs font-bold text-black uppercase rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000]"
            >
              Close Drawer
            </button>
          </div>
        </div>
      )}

      {/* COMPARE TWO DATES MODAL */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-3 border-black rounded-2xl max-w-xl w-full p-6 shadow-[8px_8px_0px_#000000] space-y-4 relative">
            <button onClick={() => setShowCompareModal(false)} className="absolute top-4 right-4 p-1 bg-[#f4f3ef] hover:bg-rose-200 border-2 border-black rounded-full">
              <X className="w-5 h-5 text-black" />
            </button>

            <h3 className="text-xl font-extrabold font-mono text-black">Compare Planetary Positions Across Two Dates</h3>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <label className="block font-bold text-black mb-1">Date A (Base)</label>
                <input type="date" value={transitDate} readOnly className="w-full bg-[#f4f3ef] border border-black p-2 rounded-lg font-bold" />
              </div>
              <div>
                <label className="block font-bold text-black mb-1">Date B (Target)</label>
                <input type="date" value={compareDateB} onChange={e => setCompareDateB(e.target.value)} className="w-full bg-white border border-black p-2 rounded-lg font-bold" />
              </div>
            </div>

            {compareAnalysisB && (
              <div className="overflow-x-auto border border-black rounded-xl max-h-60 overflow-y-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-amber-300 border-b border-black text-black font-bold">
                      <th className="p-2 border-r border-black">Planet</th>
                      <th className="p-2 border-r border-black">Position A</th>
                      <th className="p-2 border-r border-black">Position B</th>
                      <th className="p-2">Shift</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black">
                    {planetNamesList.map(pName => {
                      const posA = transitAnalysis.transitPlanets[pName];
                      const posB = compareAnalysisB.transitPlanets[pName];
                      if (!posA || !posB) return null;

                      const isSignChange = posA.rashi !== posB.rashi;

                      return (
                        <tr key={pName} className={isSignChange ? "bg-amber-100 font-bold" : ""}>
                          <td className="p-2 border-r border-black">{pName}</td>
                          <td className="p-2 border-r border-black">{posA.rashi} ({posA.formattedDegree})</td>
                          <td className="p-2 border-r border-black">{posB.rashi} ({posB.formattedDegree})</td>
                          <td className="p-2">{isSignChange ? `🔄 Enters ${posB.rashi}` : "Same Sign"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <button onClick={() => setShowCompareModal(false)} className="w-full py-2 bg-amber-400 font-mono text-xs font-bold text-black rounded-xl border-2 border-black">
              Close Comparison
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
