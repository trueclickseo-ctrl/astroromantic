"use client";

import React, { useState, useMemo } from "react";
import {
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, Share2, Printer,
  Sparkles, Filter, Info, X, Check, ArrowRight, Sun, Heart, Compass, CheckCircle2,
  Moon, Star, Clock, MapPin, AlertCircle
} from "lucide-react";
import {
  CalendarEvent, RegionalMonth, RegionalDateInfo,
  getAssameseDate, getBengaliPanjikaDate, convertGregorianToBanglaCivil
} from "@/lib/regional-calendars";
import { calculateDailyPanchang, PanchangData, calculateSunriseSunset, formatTime12h } from "@/lib/muhurat-engine";
import { getCityDefault } from "@/lib/city-database";

interface RegionalCalendarShellProps {
  calendarType: "assamese" | "bengali" | "bangla";
  systemTitle: string;
  systemSubtitle: string;
  eraName: string;
  months: RegionalMonth[];
  events: CalendarEvent[];
  defaultYear?: number;
  locationNote?: string;
}

export interface DetailedCalendarDay {
  gregorianDate: Date;
  dateISO: string;
  dayNum: number;
  weekdayName: string;
  isSunday: boolean;
  isToday: boolean;

  // Regional Date
  regionalDay: number;
  regionalMonthName: string;
  regionalMonthNative: string;
  regionalYear: number;
  formattedRegionalDate: string;
  isNewRegionalMonth: boolean;

  // Panchang Calculations
  tithiName: string; // e.g. "Panchami" or "Ekadashi"
  fullTithiStr: string; // e.g. "Shukla Panchami"
  paksha: "Shukla" | "Krishna";
  nakshatraName: string; // e.g. "Chitra"
  nakshatraPada: number;
  nakshatraLord: string;
  yogaName: string;
  karanaName: string;

  // Events & Observances
  dayEvents: CalendarEvent[];
}

export function RegionalCalendarShell({
  calendarType,
  systemTitle,
  systemSubtitle,
  eraName,
  months,
  events,
  defaultYear = 2026,
  locationNote
}: RegionalCalendarShellProps) {
  const [selectedYear, setSelectedYear] = useState<number>(defaultYear);
  const [selectedMonthIdx, setSelectedMonthIdx] = useState<number>(new Date().getMonth()); // Default to active month
  const [filterType, setFilterType] = useState<"all" | "festival" | "holiday" | "puja">("all");

  // Selected Day Detail Drawer Modal
  const [selectedDayDetail, setSelectedDayDetail] = useState<DetailedCalendarDay | null>(null);

  // Link copy state
  const [copiedLink, setCopiedLink] = useState(false);

  // Default City for Panchang calculations (Guwahati for Assamese, Kolkata for Bengali, Dhaka for Bangla)
  const refCity = useMemo(() => {
    const dCity = getCityDefault();
    if (calendarType === "assamese") return { ...dCity, name: "Guwahati", country: "India", lat: 26.1445, lng: 91.7362, utcOffset: 5.5 };
    if (calendarType === "bengali") return { ...dCity, name: "Kolkata", country: "India", lat: 22.5726, lng: 88.3639, utcOffset: 5.5 };
    return { ...dCity, name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125, utcOffset: 6.0 };
  }, [calendarType]);

  // Dynamic Today calculation
  const today = useMemo(() => new Date(), []);
  const todayISO = today.toISOString().split("T")[0];

  const todayRegionalInfo: RegionalDateInfo = useMemo(() => {
    if (calendarType === "assamese") return getAssameseDate(today);
    if (calendarType === "bengali") return getBengaliPanjikaDate(today);
    const bRes = convertGregorianToBanglaCivil(today);
    return {
      regionalDay: bRes.banglaDay,
      regionalMonthName: bRes.banglaMonthName,
      regionalMonthNative: bRes.banglaMonthNative,
      regionalYear: bRes.banglaYear,
      formattedRegionalDate: bRes.formattedBanglaDate
    };
  }, [calendarType, today]);

  // Find next major upcoming event
  const nextMajorEvent = useMemo(() => {
    const futureEvents = events.filter(e => e.date >= todayISO);
    return futureEvents.length > 0 ? futureEvents[0] : events[0];
  }, [events, todayISO]);

  // Filter events by selected year
  const yearEvents = useMemo(() => {
    return events.filter(e => e.date.startsWith(`${selectedYear}`));
  }, [events, selectedYear]);

  // Filter events by selected month
  const currentMonthEvents = useMemo(() => {
    const monthStr = (selectedMonthIdx + 1).toString().padStart(2, "0");
    const monthPrefix = `${selectedYear}-${monthStr}`;
    return yearEvents.filter(e => {
      if (filterType !== "all" && e.type !== filterType) return false;
      return e.date.startsWith(monthPrefix);
    });
  }, [yearEvents, selectedMonthIdx, selectedYear, filterType]);

  // Days in selected Gregorian month
  const daysInMonth = new Date(selectedYear, selectedMonthIdx + 1, 0).getDate();
  const firstDayWeekday = new Date(selectedYear, selectedMonthIdx, 1).getDay(); // 0 = Sun

  const gregorianMonthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate full detailed dataset for every day of the current month
  const monthDaysDetailed: DetailedCalendarDay[] = useMemo(() => {
    const daysArr: DetailedCalendarDay[] = [];

    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const d = new Date(selectedYear, selectedMonthIdx, dayNum);
      const monthStr = (selectedMonthIdx + 1).toString().padStart(2, "0");
      const dayStr = dayNum.toString().padStart(2, "0");
      const dateISO = `${selectedYear}-${monthStr}-${dayStr}`;

      const weekdayName = weekdayNames[d.getDay()];
      const isSunday = d.getDay() === 0;
      const isToday = todayISO === dateISO;

      // Regional Date calculation
      let regInfo: RegionalDateInfo;
      if (calendarType === "assamese") {
        regInfo = getAssameseDate(d);
      } else if (calendarType === "bengali") {
        regInfo = getBengaliPanjikaDate(d);
      } else {
        const bRes = convertGregorianToBanglaCivil(d);
        regInfo = {
          regionalDay: bRes.banglaDay,
          regionalMonthName: bRes.banglaMonthName,
          regionalMonthNative: bRes.banglaMonthNative,
          regionalYear: bRes.banglaYear,
          formattedRegionalDate: bRes.formattedBanglaDate
        };
      }

      // Check if this day is Day 1 of a regional month
      const isNewRegionalMonth = regInfo.regionalDay === 1;

      // Panchang Calculation for exact date
      const panchang: PanchangData = calculateDailyPanchang(d, refCity);
      const tithiCleanName = panchang.tithi.name.replace(/Shukla\s+|Krishna\s+/i, "");

      // Day Events matching dateISO
      const dayEvs = yearEvents.filter(e => e.date === dateISO);

      daysArr.push({
        gregorianDate: d,
        dateISO,
        dayNum,
        weekdayName,
        isSunday,
        isToday,
        regionalDay: regInfo.regionalDay,
        regionalMonthName: regInfo.regionalMonthName,
        regionalMonthNative: regInfo.regionalMonthNative,
        regionalYear: regInfo.regionalYear,
        formattedRegionalDate: regInfo.formattedRegionalDate,
        isNewRegionalMonth,
        tithiName: tithiCleanName,
        fullTithiStr: panchang.tithi.name,
        paksha: panchang.tithi.paksha,
        nakshatraName: panchang.nakshatra.name,
        nakshatraPada: panchang.nakshatra.pada,
        nakshatraLord: panchang.nakshatra.lord,
        yogaName: panchang.yoga.name,
        karanaName: panchang.karana.name,
        dayEvents: dayEvs
      });
    }

    return daysArr;
  }, [selectedYear, selectedMonthIdx, daysInMonth, calendarType, refCity, yearEvents, todayISO]);

  const handlePrevMonth = () => {
    if (selectedMonthIdx === 0) {
      if (selectedYear > 2026) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonthIdx(11);
      }
    } else {
      setSelectedMonthIdx(selectedMonthIdx - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonthIdx === 11) {
      if (selectedYear < 2027) {
        setSelectedYear(selectedYear + 1);
        setSelectedMonthIdx(0);
      }
    } else {
      setSelectedMonthIdx(selectedMonthIdx + 1);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Astronomical details for modal drawer
  const modalAstroDetails = useMemo(() => {
    if (!selectedDayDetail) return null;
    const sunData = calculateSunriseSunset(selectedDayDetail.gregorianDate, refCity.lat, refCity.lng, refCity.utcOffset);
    return {
      sunriseStr: formatTime12h(sunData.sunrise),
      sunsetStr: formatTime12h(sunData.sunset),
      solarNoonStr: formatTime12h(sunData.solarNoon)
    };
  }, [selectedDayDetail, refCity]);

  // Current Regional Month name corresponding to active Gregorian month
  const activeRegionalMonth = months[selectedMonthIdx % months.length];

  return (
    <div className="w-full space-y-8 font-sans">
      {/* 1. DYNAMIC "TODAY" INFORMATION CARD */}
      <div className="bg-gradient-to-r from-amber-200 via-amber-100 to-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 bg-black text-white font-mono text-xs font-bold px-3 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>TODAY'S REGIONAL DATE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-black">
            {todayRegionalInfo.formattedRegionalDate}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-800 font-mono font-bold">
            Gregorian: {today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="bg-white border-2 border-black rounded-xl p-3.5 shadow-[2px_2px_0px_#000000] space-y-1 text-xs font-mono max-w-xs w-full sm:w-auto">
          <span className="text-zinc-600 font-bold uppercase block">Next Major Festival</span>
          {nextMajorEvent ? (
            <div>
              <span className="font-extrabold text-black block text-sm">{nextMajorEvent.title}</span>
              <span className="text-rose-700 font-bold block">📅 {nextMajorEvent.date}</span>
            </div>
          ) : (
            <span className="text-zinc-600 font-bold">No upcoming festival</span>
          )}
        </div>
      </div>

      {/* 2. CALENDAR CONTROLS & DUAL MONTH HEADER */}
      <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-2 border-zinc-200 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-3.5 py-1 text-xs font-mono font-bold uppercase text-black">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{eraName}</span>
            </div>

            {/* DUAL SYSTEM MONTH TITLE */}
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black mt-2">
              {gregorianMonthNames[selectedMonthIdx]} {selectedYear}
              <span className="text-rose-700 font-serif text-xl sm:text-2xl ml-2">
                ({activeRegionalMonth?.name} {activeRegionalMonth?.nativeName})
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700">{systemSubtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3.5 py-2 bg-white hover:bg-amber-100 border-2 border-black rounded-xl font-mono text-xs font-bold text-black flex items-center space-x-1.5 shadow-[2px_2px_0px_#000000] transition-all"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedLink ? "Link Copied!" : "Share"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-white hover:bg-amber-100 border-2 border-black rounded-xl font-mono text-xs font-bold text-black flex items-center space-x-1.5 shadow-[2px_2px_0px_#000000] transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* YEAR & MONTH SELECTOR BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          {/* Year Switcher */}
          <div className="flex items-center space-x-2 bg-[#f4f3ef] border-2 border-black p-1.5 rounded-xl shadow-[2px_2px_0px_#000000]">
            <span className="text-xs font-mono font-bold text-black px-2 uppercase">Year:</span>
            {[2026, 2027].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? "bg-amber-400 text-black border-2 border-black shadow-[2px_2px_0px_#000000]"
                    : "text-zinc-700 hover:bg-white"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Month Navigation & Dropdown */}
          <div className="flex items-center justify-between sm:justify-end space-x-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 bg-white hover:bg-amber-200 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000000] transition-all"
              aria-label="Previous Month"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            <select
              value={selectedMonthIdx}
              onChange={(e) => setSelectedMonthIdx(parseInt(e.target.value, 10))}
              className="bg-white border-2 border-black font-mono text-xs font-bold text-black px-3 py-2 rounded-xl shadow-[2px_2px_0px_#000000] cursor-pointer outline-none"
            >
              {gregorianMonthNames.map((m, idx) => {
                const regionalM = months[idx % months.length];
                return (
                  <option key={m} value={idx}>
                    {m} {selectedYear} ({regionalM?.name || ""})
                  </option>
                );
              })}
            </select>

            <button
              onClick={handleNextMonth}
              className="p-2 bg-white hover:bg-amber-200 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000000] transition-all"
              aria-label="Next Month"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={() => {
                const now = new Date();
                setSelectedYear(now.getFullYear() >= 2026 && now.getFullYear() <= 2027 ? now.getFullYear() : 2026);
                setSelectedMonthIdx(now.getMonth());
              }}
              className="px-3 py-2 bg-amber-400 hover:bg-amber-300 border-2 border-black rounded-xl font-mono text-xs font-bold text-black shadow-[2px_2px_0px_#000000] transition-all"
            >
              Today
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
          <span className="font-bold text-black flex items-center space-x-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-black" />
            <span>Filter:</span>
          </span>
          {[
            { id: "all", label: "All Events" },
            { id: "festival", label: "Festivals 🟠" },
            { id: "holiday", label: "Public Holidays 🔵" },
            { id: "puja", label: "Pujas & Observances 🟢" }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id as any)}
              className={`px-3 py-1 rounded-full border-2 border-black font-bold transition-all ${
                filterType === f.id
                  ? "bg-black text-white shadow-[2px_2px_0px_#F5A623]"
                  : "bg-white text-black hover:bg-amber-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {locationNote && (
          <div className="bg-amber-50 border-2 border-black rounded-xl p-3 text-xs text-zinc-800 flex items-start space-x-2">
            <Info className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
            <span>{locationNote}</span>
          </div>
        )}
      </div>

      {/* 3. MAIN 2-COLUMN LAYOUT: CALENDAR GRID (LEFT) + UPCOMING EVENTS SIDEBAR (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: CALENDAR GRID (8 COLS) */}
        <div className="lg:col-span-8 bg-white border-3 border-black rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center justify-between border-b-2 border-black pb-3">
            <div className="flex items-center space-x-3">
              <CalendarIcon className="w-6 h-6 text-black" />
              <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
                {gregorianMonthNames[selectedMonthIdx]} {selectedYear}
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-200 border-2 border-black rounded-lg px-3 py-1 text-black">
              {activeRegionalMonth?.name} ({activeRegionalMonth?.nativeName})
            </span>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs font-bold uppercase text-black bg-[#f4f3ef] border-2 border-black rounded-xl p-2">
            {weekdayNames.map((wd, i) => (
              <div key={wd} className={`py-1 ${i === 0 ? "text-rose-600" : ""}`}>{wd}</div>
            ))}
          </div>

          {/* Calendar Day Grid — Target Date Cell Architecture */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-xs font-mono">
            {/* Empty lead cells */}
            {Array.from({ length: firstDayWeekday }).map((_, idx) => (
              <div key={`empty-${idx}`} className="bg-[#f8f7f4] border-2 border-dashed border-zinc-300 rounded-xl min-h-[115px] sm:min-h-[140px] opacity-40" />
            ))}

            {/* Actual Days */}
            {monthDaysDetailed.map((dayData) => {
              const {
                dayNum, isToday, isSunday, isNewRegionalMonth,
                regionalDay, regionalMonthNative, regionalMonthName,
                tithiName, nakshatraName, dayEvents
              } = dayData;

              return (
                <div
                  key={dayNum}
                  onClick={() => setSelectedDayDetail(dayData)}
                  className={`border-2 border-black rounded-xl p-2 flex flex-col justify-between transition-all min-h-[120px] sm:min-h-[145px] cursor-pointer relative overflow-hidden ${
                    isToday
                      ? "bg-amber-100 border-3 border-black shadow-[4px_4px_0px_#000000]"
                      : dayEvents.length > 0
                      ? "bg-[#fefce8] hover:bg-amber-100 shadow-[2.5px_2.5px_0px_#000000]"
                      : isSunday
                      ? "bg-[#fffdf5] hover:bg-amber-50 shadow-[2px_2px_0px_#000000]"
                      : "bg-white hover:bg-[#faf7f2] shadow-[2px_2px_0px_#000000]"
                  }`}
                >
                  {/* TOP ROW: Small Regional Date (top-right) + New Month Badge */}
                  <div className="flex items-start justify-between w-full">
                    {isNewRegionalMonth ? (
                      <span className="text-[9px] font-extrabold font-mono bg-black text-white px-1.5 py-0.5 rounded uppercase tracking-tighter">
                        1 {regionalMonthNative}
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-zinc-500 font-mono">
                        {weekdayNames[dayData.gregorianDate.getDay()]}
                      </span>
                    )}

                    {/* Small Regional Date (Top-Right) */}
                    <span className="text-[10px] sm:text-xs font-bold font-mono text-zinc-700">
                      {regionalDay} {regionalMonthNative}
                    </span>
                  </div>

                  {/* MIDDLE ROW: Large Dominant Gregorian Date */}
                  <div className="my-1 flex items-center justify-between">
                    <span className={`text-xl sm:text-2xl font-extrabold font-mono leading-none ${
                      isToday
                        ? "text-black bg-amber-400 border border-black rounded-lg px-2 py-0.5"
                        : isSunday
                        ? "text-rose-700"
                        : "text-black"
                    }`}>
                      {dayNum}
                    </span>

                    {isToday && (
                      <span className="text-[9px] font-mono font-bold bg-black text-white px-1.5 py-0.5 rounded uppercase">
                        TODAY
                      </span>
                    )}
                  </div>

                  {/* BOTTOM SECTION: Tithi, Nakshatra & Event Badges */}
                  <div className="space-y-1 pt-1 border-t border-zinc-200">
                    {/* Tithi with Moon icon */}
                    <div className="text-[9px] font-bold text-purple-900 flex items-center space-x-1 truncate">
                      <Moon className="w-2.5 h-2.5 text-purple-700 flex-shrink-0" />
                      <span className="truncate">{tithiName}</span>
                    </div>

                    {/* Nakshatra with Star icon */}
                    <div className="text-[9px] font-bold text-amber-900 flex items-center space-x-1 truncate">
                      <Star className="w-2.5 h-2.5 text-amber-700 flex-shrink-0" />
                      <span className="truncate">{nakshatraName}</span>
                    </div>

                    {/* Event Badges */}
                    {dayEvents.length > 0 && (
                      <div className="space-y-0.5 mt-1">
                        {dayEvents.slice(0, 1).map((ev, eIdx) => (
                          <div
                            key={eIdx}
                            className={`text-[9px] font-bold p-0.5 px-1 rounded border border-black truncate leading-tight ${
                              ev.type === "festival"
                                ? "bg-amber-300 text-black"
                                : ev.type === "holiday"
                                ? "bg-rose-200 text-black"
                                : "bg-emerald-200 text-black"
                            }`}
                            title={ev.title}
                          >
                            {ev.type === "festival" ? "🟠 " : ev.type === "holiday" ? "🔵 " : "🟢 "}
                            {ev.title}
                          </div>
                        ))}
                        {dayEvents.length > 1 && (
                          <span className="text-[8px] font-bold text-rose-700 block text-right">
                            +{dayEvents.length - 1} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLOR & SYMBOL LEGEND */}
          <div className="border-t-2 border-zinc-200 pt-3 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="font-bold text-black">Legend:</span>
            <span className="flex items-center space-x-1 text-purple-900 font-bold">
              <Moon className="w-3.5 h-3.5 text-purple-700" />
              <span>☾ Tithi</span>
            </span>
            <span className="flex items-center space-x-1 text-amber-900 font-bold">
              <Star className="w-3.5 h-3.5 text-amber-700" />
              <span>☆ Nakshatra</span>
            </span>
            <span className="bg-amber-200 border border-black rounded-md px-2 py-0.5 font-bold text-black">🟠 Festivals</span>
            <span className="bg-rose-200 border border-black rounded-md px-2 py-0.5 font-bold text-black">🔵 Public Holidays</span>
            <span className="bg-emerald-200 border border-black rounded-md px-2 py-0.5 font-bold text-black">🟢 Pujas & Observances</span>
            <span className="bg-black text-white rounded-md px-2 py-0.5 font-bold">🔴 Today</span>
          </div>
        </div>

        {/* RIGHT: STICKY UPCOMING FESTIVALS SIDEBAR (4 COLS) */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
          <div className="bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000000] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <h3 className="text-lg font-extrabold font-mono text-black uppercase">
                Upcoming Festivals
              </h3>
              <span className="text-xs font-mono font-bold bg-amber-300 border border-black px-2 py-0.5 rounded-full">
                {selectedYear}
              </span>
            </div>

            <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
              {yearEvents.slice(0, 10).map((ev, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const matchedDay = monthDaysDetailed.find(d => d.dateISO === ev.date);
                    if (matchedDay) setSelectedDayDetail(matchedDay);
                  }}
                  className="bg-[#fefce8] hover:bg-amber-100 border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000] cursor-pointer transition-all space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-rose-700">
                      📅 {ev.date}
                    </span>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-black ${
                      ev.type === "festival" ? "bg-amber-300 text-black" : ev.type === "holiday" ? "bg-rose-200 text-black" : "bg-emerald-200 text-black"
                    }`}>
                      {ev.type}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-black font-mono">
                    {ev.title}
                  </h4>
                  {ev.nativeTitle && (
                    <span className="text-xs font-bold text-zinc-700 block">
                      {ev.nativeTitle}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. IMPORTANT DATES THIS MONTH */}
      <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-wide border-b-2 border-black pb-2 flex items-center justify-between">
          <span>Important Observances in {gregorianMonthNames[selectedMonthIdx]} {selectedYear}</span>
          <span className="text-xs bg-black text-white px-3 py-1 rounded-full font-mono font-bold">
            {currentMonthEvents.length} Events
          </span>
        </h3>

        {currentMonthEvents.length === 0 ? (
          <p className="text-sm text-zinc-600 font-mono py-4 text-center bg-[#f4f3ef] border-2 border-dashed border-zinc-400 rounded-xl">
            No major holidays or festivals listed for this specific filter in {gregorianMonthNames[selectedMonthIdx]} {selectedYear}.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {currentMonthEvents.map((ev, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const matchedDay = monthDaysDetailed.find(d => d.dateISO === ev.date);
                  if (matchedDay) setSelectedDayDetail(matchedDay);
                }}
                className="bg-[#fefce8] hover:bg-amber-100 border-2 border-black rounded-xl p-3.5 shadow-[3px_3px_0px_#000000] cursor-pointer transition-all space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-700 block">
                      📅 {ev.date}
                    </span>
                    <h4 className="text-base font-extrabold text-black font-mono">
                      {ev.title}
                    </h4>
                    {ev.nativeTitle && (
                      <span className="text-xs font-bold text-rose-700 block">
                        {ev.nativeTitle}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-zinc-800 line-clamp-2 leading-relaxed">
                  {ev.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. CALENDAR AT A GLANCE (12 INTERACTIVE MONTH CARDS) */}
      <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
        <div className="border-b-2 border-black pb-2 flex items-center justify-between">
          <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
            Calendar at a Glance ({selectedYear})
          </h3>
          <span className="text-xs font-mono font-bold text-zinc-600">Click any month to jump calendar</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 font-mono text-xs">
          {gregorianMonthNames.map((mName, idx) => {
            const regM = months[idx % months.length];
            const mPrefix = `${selectedYear}-${(idx + 1).toString().padStart(2, "0")}`;
            const mEvCount = yearEvents.filter(e => e.date.startsWith(mPrefix)).length;

            return (
              <div
                key={mName}
                onClick={() => setSelectedMonthIdx(idx)}
                className={`border-2 border-black rounded-xl p-3 cursor-pointer transition-all shadow-[2px_2px_0px_#000000] ${
                  selectedMonthIdx === idx
                    ? "bg-amber-400 text-black font-extrabold border-3 shadow-[3px_3px_0px_#000000]"
                    : "bg-[#fefce8] hover:bg-amber-100 text-black"
                }`}
              >
                <span className="font-extrabold text-sm block">{mName}</span>
                <span className="text-[11px] font-bold text-rose-700 block mt-0.5">{regM?.nativeName}</span>
                <span className="text-[10px] text-zinc-600 block mt-1">{mEvCount} Events</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CLICKABLE DATE DETAIL SHEET / MODAL */}
      {selectedDayDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-3 border-black rounded-2xl max-w-lg w-full p-6 shadow-[8px_8px_0px_#000000] space-y-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDayDetail(null)}
              className="absolute top-4 right-4 p-1 bg-[#f4f3ef] hover:bg-rose-200 border-2 border-black rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-3 py-1 text-xs font-mono font-bold text-black">
              <span>📅 {selectedDayDetail.gregorianDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
            </div>

            <div className="border-b-2 border-black pb-2">
              <h3 className="text-2xl font-extrabold font-mono text-black">
                {selectedDayDetail.formattedRegionalDate}
              </h3>
              <span className="text-xs font-mono font-bold text-rose-700">
                {selectedDayDetail.weekdayName} • {selectedDayDetail.fullTithiStr}
              </span>
            </div>

            {/* PANCHANG DATA GRID */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#f4f3ef] border-2 border-black rounded-xl p-3.5">
              <div><span className="text-zinc-600">Tithi:</span> <strong className="text-black">{selectedDayDetail.fullTithiStr}</strong></div>
              <div><span className="text-zinc-600">Paksha:</span> <strong className="text-black">{selectedDayDetail.paksha} Paksha</strong></div>
              <div><span className="text-zinc-600">Nakshatra:</span> <strong className="text-black">{selectedDayDetail.nakshatraName} (Pada {selectedDayDetail.nakshatraPada})</strong></div>
              <div><span className="text-zinc-600">Nakshatra Lord:</span> <strong className="text-black">{selectedDayDetail.nakshatraLord}</strong></div>
              <div><span className="text-zinc-600">Yoga:</span> <strong className="text-black">{selectedDayDetail.yogaName}</strong></div>
              <div><span className="text-zinc-600">Karana:</span> <strong className="text-black">{selectedDayDetail.karanaName}</strong></div>
            </div>

            {/* ASTRONOMICAL TIMINGS */}
            {modalAstroDetails && (
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono bg-amber-50 border-2 border-black rounded-xl p-2.5">
                <div><span className="text-[10px] text-zinc-600 block">SUNRISE</span><strong className="text-black">{modalAstroDetails.sunriseStr}</strong></div>
                <div><span className="text-[10px] text-zinc-600 block">SOLAR NOON</span><strong className="text-black">{modalAstroDetails.solarNoonStr}</strong></div>
                <div><span className="text-[10px] text-zinc-600 block">SUNSET</span><strong className="text-black">{modalAstroDetails.sunsetStr}</strong></div>
              </div>
            )}

            {/* OBSERVANCES ON THIS DATE */}
            <div className="space-y-2">
              <h4 className="font-mono font-extrabold text-sm text-black uppercase">Observances &amp; Festivals</h4>
              {selectedDayDetail.dayEvents.length > 0 ? (
                selectedDayDetail.dayEvents.map((ev, idx) => (
                  <div key={idx} className="bg-[#fefce8] border-2 border-black rounded-xl p-3 space-y-1">
                    <span className="font-bold font-mono text-sm text-black block">{ev.title}</span>
                    {ev.nativeTitle && <span className="text-xs font-serif font-bold text-rose-700 block">{ev.nativeTitle}</span>}
                    <p className="text-xs text-zinc-800 leading-relaxed font-sans">{ev.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-zinc-600 font-mono bg-[#f4f3ef] border border-black rounded-lg p-2.5">
                  No major festival or public holiday listed for this specific date. Regular daily Panchang applies.
                </p>
              )}
            </div>

            <button
              onClick={() => setSelectedDayDetail(null)}
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 font-mono text-xs font-bold text-black uppercase rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000]"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
