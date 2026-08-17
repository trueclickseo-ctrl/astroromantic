"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Sun, Moon, MapPin, Calendar as CalendarIcon, Clock, AlertTriangle, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Search, Navigation } from "lucide-react";
import { CityData, CITIES_DATABASE, searchCities, getCityDefault } from "@/lib/city-database";
import { calculateDailyPanchang, calculateChoghadiya, calculateShubhMuhuratsToday } from "@/lib/muhurat-engine";

export function ShubhMuhuratComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [dateInputStr, setDateInputStr] = useState<string>(() => new Date().toISOString().split("T")[0]);
  const [selectedCity, setSelectedCity] = useState<CityData>(getCityDefault());
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [isSearchingCity, setIsSearchingCity] = useState(false);

  // Sync date input string when selectedDate changes
  useEffect(() => {
    setDateInputStr(selectedDate.toISOString().split("T")[0]);
  }, [selectedDate]);

  const handleDateChange = (newDateStr: string) => {
    setDateInputStr(newDateStr);
    const d = new Date(newDateStr + "T12:00:00");
    if (!isNaN(d.getTime())) {
      setSelectedDate(d);
    }
  };

  const handleQuickDay = (offsetDays: number) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + offsetDays);
    setSelectedDate(d);
  };

  const handleGeolocation = () => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setSelectedCity({
            city: "Current Location",
            country: "GPS Coordinates",
            lat: Number(pos.coords.latitude.toFixed(4)),
            lng: Number(pos.coords.longitude.toFixed(4)),
            utcOffset: Number((-new Date().getTimezoneOffset() / 60).toFixed(1))
          });
        },
        () => {
          alert("Could not access location. Defaulting to New Delhi.");
        }
      );
    }
  };

  // Compute Panchang, Muhurats, and Choghadiya for selected date & city
  const panchang = useMemo(() => {
    return calculateDailyPanchang(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  const muhurats = useMemo(() => {
    return calculateShubhMuhuratsToday(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  const choghadiya = useMemo(() => {
    return calculateChoghadiya(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  const citySearchResults = useMemo(() => {
    return searchCities(citySearchQuery);
  }, [citySearchQuery]);

  const formattedDateTitle = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="w-full space-y-8 font-sans">
      {/* CONTROLS CARD: DATE & LOCATION SELECTOR */}
      <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b-2 border-zinc-200 pb-4">
          {/* Date controls */}
          <div className="space-y-2">
            <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider">
              Select Date for Muhurat Calculation
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleQuickDay(-1)}
                className="px-3 py-2 bg-white hover:bg-amber-100 border-2 border-black rounded-xl font-mono text-xs font-bold text-black flex items-center space-x-1 shadow-[2px_2px_0px_#000000] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Day</span>
              </button>

              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 border-2 border-black rounded-xl font-mono text-xs font-bold text-black shadow-[2px_2px_0px_#000000] transition-all"
              >
                Today
              </button>

              <button
                onClick={() => handleQuickDay(1)}
                className="px-3 py-2 bg-white hover:bg-amber-100 border-2 border-black rounded-xl font-mono text-xs font-bold text-black flex items-center space-x-1 shadow-[2px_2px_0px_#000000] transition-all"
              >
                <span>Next Day</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <input
                type="date"
                value={dateInputStr}
                onChange={(e) => handleDateChange(e.target.value)}
                className="bg-white border-2 border-black font-mono text-xs font-bold text-black px-3 py-2 rounded-xl shadow-[2px_2px_0px_#000000] outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Location picker */}
          <div className="space-y-2">
            <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider">
              Selected Location (Sunrise/Sunset Base)
            </label>
            <div className="relative flex items-center space-x-2">
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() => setIsSearchingCity(!isSearchingCity)}
                  className="w-full bg-[#f4f3ef] hover:bg-amber-50 border-2 border-black rounded-xl px-3 py-2 text-left font-mono text-xs font-bold text-black flex items-center justify-between shadow-[2px_2px_0px_#000000]"
                >
                  <div className="flex items-center space-x-1.5 truncate">
                    <MapPin className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span className="truncate">{selectedCity.city}, {selectedCity.country} ({selectedCity.lat}°, {selectedCity.lng}°)</span>
                  </div>
                  <Search className="w-3.5 h-3.5 text-zinc-600" />
                </button>

                {/* City Search Dropdown Popup */}
                {isSearchingCity && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border-3 border-black rounded-xl p-3 shadow-[6px_6px_0px_#000000] space-y-2">
                    <input
                      type="text"
                      placeholder="Type city name..."
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
                onClick={handleGeolocation}
                className="p-2 bg-amber-300 hover:bg-amber-200 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000000] transition-all"
                title="Use Current Device Location"
              >
                <Navigation className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-zinc-700">
          <span className="font-bold text-black">📅 {formattedDateTitle}</span>
          <span>Showing calculations for <strong className="text-black">{selectedCity.city}</strong></span>
        </div>
      </div>

      {/* DAILY PANCHANG BANNER */}
      <div className="bg-gradient-to-r from-amber-100 via-white to-amber-50 border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-3">
          <div className="flex items-center space-x-2">
            <Sun className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
              Today's Panchang Overview
            </h3>
          </div>
          <span className="text-xs font-mono font-bold bg-amber-300 border border-black rounded-full px-3 py-1 text-black">
            {panchang.dayOfWeek}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
            <span className="text-zinc-600 block text-[11px] font-bold uppercase">Sunrise / Sunset</span>
            <span className="text-sm font-extrabold text-black block mt-0.5">🌅 {panchang.sunriseStr}</span>
            <span className="text-sm font-extrabold text-black block">🌇 {panchang.sunsetStr}</span>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
            <span className="text-zinc-600 block text-[11px] font-bold uppercase">Tithi</span>
            <span className="text-sm font-extrabold text-black block mt-0.5">{panchang.tithi.name}</span>
            <span className="text-[11px] text-rose-700 font-bold block">{panchang.tithi.paksha} Paksha</span>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
            <span className="text-zinc-600 block text-[11px] font-bold uppercase">Nakshatra</span>
            <span className="text-sm font-extrabold text-black block mt-0.5">{panchang.nakshatra.name}</span>
            <span className="text-[11px] text-zinc-700 block">Lord: {panchang.nakshatra.lord} (Pada {panchang.nakshatra.pada})</span>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
            <span className="text-zinc-600 block text-[11px] font-bold uppercase">Yoga & Karana</span>
            <span className="text-sm font-extrabold text-black block mt-0.5">{panchang.yoga.name}</span>
            <span className="text-[11px] text-zinc-700 block">Karana: {panchang.karana.name}</span>
          </div>
        </div>
      </div>

      {/* SHUBH MUHURAT CARDS */}
      <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <div className="flex items-center space-x-2 border-b-2 border-black pb-3">
          <Sparkles className="w-6 h-6 text-amber-500" />
          <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
            Today's Auspicious Muhurat Windows
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {muhurats.auspiciousPeriods.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-extrabold font-mono text-black">
                    {m.name}
                  </h4>
                  {m.nativeName && (
                    <span className="text-xs font-bold text-rose-700 font-serif block">
                      {m.nativeName}
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono font-bold bg-amber-300 border border-black rounded-full px-2.5 py-0.5 text-black">
                  {m.quality}
                </span>
              </div>

              <div className="bg-white border-2 border-black rounded-lg p-2.5 text-center">
                <span className="text-xs font-mono text-zinc-600 block">Auspicious Window Timing</span>
                <span className="text-lg font-extrabold font-mono text-black block">
                  ⏰ {m.startTimeStr} — {m.endTimeStr}
                </span>
              </div>

              <p className="text-xs text-zinc-800 font-sans leading-relaxed">
                {m.description}
              </p>

              <div className="pt-1 flex flex-wrap gap-1 text-[11px] font-mono">
                {m.bestFor.map((bf, bfIdx) => (
                  <span key={bfIdx} className="bg-amber-100 border border-black rounded-md px-2 py-0.5 text-black font-bold">
                    ✓ {bf}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHOGHADIYA TABLES */}
      <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="flex items-center space-x-2 border-b-2 border-black pb-3">
          <Clock className="w-6 h-6 text-black" />
          <div>
            <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
              Today's Choghadiya Timings (Day & Night)
            </h3>
            <p className="text-xs text-zinc-700">
              Calculated based on local sunrise ({panchang.sunriseStr}) and sunset ({panchang.sunsetStr}) for {selectedCity.city}.
            </p>
          </div>
        </div>

        {/* Day Choghadiya */}
        <div className="space-y-3">
          <h4 className="text-base font-extrabold font-mono text-black flex items-center space-x-2">
            <span>☀️ Day Choghadiya</span>
            <span className="text-xs font-normal text-zinc-600">({panchang.sunriseStr} to {panchang.sunsetStr})</span>
          </h4>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
            <table className="w-full text-left text-xs font-mono border-collapse bg-white">
              <thead>
                <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                  <th className="p-2.5 border-r-2 border-black">Slot</th>
                  <th className="p-2.5 border-r-2 border-black">Choghadiya</th>
                  <th className="p-2.5 border-r-2 border-black">Time Window</th>
                  <th className="p-2.5 border-r-2 border-black">Status</th>
                  <th className="p-2.5">Meaning & Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black">
                {choghadiya.dayChoghadiya.map((c) => (
                  <tr key={c.index} className="hover:bg-amber-50">
                    <td className="p-2.5 border-r-2 border-black font-bold">{c.index}</td>
                    <td className="p-2.5 border-r-2 border-black font-extrabold">
                      {c.name} ({c.nativeName})
                    </td>
                    <td className="p-2.5 border-r-2 border-black font-bold whitespace-nowrap">
                      {c.startTimeStr} – {c.endTimeStr}
                    </td>
                    <td className="p-2.5 border-r-2 border-black">
                      <span className={`px-2 py-0.5 rounded-full font-bold border border-black ${
                        c.quality === "Auspicious" ? "bg-emerald-300 text-black" : c.quality === "Neutral" ? "bg-amber-200 text-black" : "bg-rose-300 text-black"
                      }`}>
                        {c.quality}
                      </span>
                    </td>
                    <td className="p-2.5 text-zinc-800 font-sans">
                      <strong>{c.meaning}:</strong> {c.recommendation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Night Choghadiya */}
        <div className="space-y-3 pt-2">
          <h4 className="text-base font-extrabold font-mono text-black flex items-center space-x-2">
            <span>🌙 Night Choghadiya</span>
            <span className="text-xs font-normal text-zinc-600">({panchang.sunsetStr} to Next Sunrise)</span>
          </h4>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
            <table className="w-full text-left text-xs font-mono border-collapse bg-white">
              <thead>
                <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                  <th className="p-2.5 border-r-2 border-black">Slot</th>
                  <th className="p-2.5 border-r-2 border-black">Choghadiya</th>
                  <th className="p-2.5 border-r-2 border-black">Time Window</th>
                  <th className="p-2.5 border-r-2 border-black">Status</th>
                  <th className="p-2.5">Meaning & Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black">
                {choghadiya.nightChoghadiya.map((c) => (
                  <tr key={c.index} className="hover:bg-amber-50">
                    <td className="p-2.5 border-r-2 border-black font-bold">{c.index}</td>
                    <td className="p-2.5 border-r-2 border-black font-extrabold">
                      {c.name} ({c.nativeName})
                    </td>
                    <td className="p-2.5 border-r-2 border-black font-bold whitespace-nowrap">
                      {c.startTimeStr} – {c.endTimeStr}
                    </td>
                    <td className="p-2.5 border-r-2 border-black">
                      <span className={`px-2 py-0.5 rounded-full font-bold border border-black ${
                        c.quality === "Auspicious" ? "bg-emerald-300 text-black" : c.quality === "Neutral" ? "bg-amber-200 text-black" : "bg-rose-300 text-black"
                      }`}>
                        {c.quality}
                      </span>
                    </td>
                    <td className="p-2.5 text-zinc-800 font-sans">
                      <strong>{c.meaning}:</strong> {c.recommendation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AVOID THESE PERIODS (RAHU KAAL, GULIKA, YAMAGANDA) */}
      <div className="bg-rose-50 border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <div className="flex items-center space-x-2 border-b-2 border-black pb-3">
          <AlertTriangle className="w-6 h-6 text-rose-600" />
          <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
            Inauspicious Windows to Avoid Today
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {muhurats.inauspiciousPeriods.map((ip, idx) => (
            <div key={idx} className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-extrabold font-mono text-black">
                  {ip.name}
                </h4>
                <span className="text-[10px] font-mono font-bold bg-rose-200 border border-black rounded-full px-2 py-0.5 text-black">
                  Avoid New Work
                </span>
              </div>
              <div className="bg-rose-100 border border-black rounded-md p-2 text-center font-mono font-bold text-sm text-black">
                {ip.startTimeStr} — {ip.endTimeStr}
              </div>
              <p className="text-xs text-zinc-800 font-sans leading-relaxed">
                {ip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
