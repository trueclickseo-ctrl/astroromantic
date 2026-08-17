"use client";

import React, { useState } from "react";
import { Search, Globe, ChevronDown, Heart } from "lucide-react";
import { useLanguage, LanguageCode } from "@/lib/i18n";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#F1E5D1] px-4 lg:px-8 py-3 select-none transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 text-xl font-bold font-serif text-black group outline-none">
          <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center border border-rose-300 text-rose-500 group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          </div>
          <span className="tracking-tight font-serif text-2xl">
            <span className="text-black font-extrabold">Astro</span>
            <span className="text-rose-500 font-normal">Romantic</span>
          </span>
        </a>

        {/* Primary Navigation Links */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 text-sm font-medium text-zinc-800">
          {/* 1. Calculators Dropdown */}
          <div className="relative group">
            <a
              href="/calculators/"
              className="flex items-center space-x-1 font-semibold py-1 text-zinc-900 hover:text-[#EE5265] transition-colors"
            >
              <span>Calculators</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180 text-zinc-500" />
            </a>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000] p-2 space-y-1 z-50">
              <a href="/vedic-transit-calculator/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                🧭 Vedic Transit Calculator
              </a>
              <a href="/d9-chart-calculator/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                💎 D9 Navamsa Chart Calculator
              </a>
              <a href="/shubh-muhurat-today/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                ☀️ Shubh Muhurat Today
              </a>
              <a href="/calculators/birth-panchang/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                📜 Daily Panchang Tool
              </a>
              <a href="/calculators/kundli-matching/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                💍 Kundli Matching / Gun Milan
              </a>
              <div className="border-t border-zinc-200 pt-1 mt-1">
                <a href="/calculators/" className="block p-2 rounded-lg bg-amber-400 font-mono text-xs font-bold text-black text-center uppercase">
                  View All 60+ Tools →
                </a>
              </div>
            </div>
          </div>

          {/* 2. Astrology */}
          <a
            href="/astrology-guides/"
            className="font-semibold py-1 text-zinc-900 hover:text-[#EE5265] transition-colors"
          >
            Astrology
          </a>

          {/* 3. Calendars & Transits Dropdown */}
          <div className="relative group">
            <a
              href="/shubh-muhurat-today/"
              className="flex items-center space-x-1 font-semibold py-1 text-zinc-900 hover:text-[#EE5265] transition-colors"
            >
              <span>Calendars &amp; Muhurat</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180 text-zinc-500" />
            </a>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000] p-2 space-y-1 z-50">
              <a href="/vedic-transit-calculator/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                ⚡ Vedic Transit Calculator
              </a>
              <a href="/shubh-muhurat-today/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                ☀️ Shubh Muhurat Today
              </a>
              <a href="/assamese-calendar-2026-2027/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                📅 Assamese Calendar 2026–27
              </a>
              <a href="/bengali-calendar-2026-2027/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                📅 Bengali Calendar 2026–27
              </a>
              <a href="/bangla-calendar-2026-2027/" className="block p-2 rounded-lg hover:bg-amber-100 font-mono text-xs font-bold text-black">
                📅 Bangla Calendar 2026–27
              </a>
            </div>
          </div>

          {/* 4. Numerology */}
          <a
            href="/numerology/"
            className="font-semibold py-1 text-zinc-900 hover:text-[#EE5265] transition-colors"
          >
            Numerology
          </a>

          {/* 5. Love */}
          <a
            href="/love/"
            className="font-semibold py-1 text-zinc-900 hover:text-[#EE5265] transition-colors"
          >
            Love
          </a>

          {/* 6. Relationship */}
          <a
            href="/relationship/"
            className="font-semibold py-1 text-zinc-900 hover:text-[#EE5265] transition-colors"
          >
            Relationship
          </a>

          {/* 7. AI Tools */}
          <a
            href="/ai-generators/"
            className="font-semibold py-1 text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
          >
            AI Tools
          </a>
        </nav>

        {/* Right Utility Buttons (Search & Language Selector) */}
        <div className="flex items-center space-x-3">
          <a
            href="/calculators/"
            className="p-2 text-zinc-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors outline-none"
            aria-label="Search Calculators"
          >
            <Search className="w-4 h-4" />
          </a>

          <div className="relative flex items-center space-x-1 bg-white border border-[#E8DCC4] rounded-full px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-xs">
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="bg-transparent text-xs font-semibold text-zinc-800 outline-none cursor-pointer pr-1"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="pt">PT</option>
              <option value="sv">SV</option>
              <option value="no">NO</option>
              <option value="it">IT</option>
              <option value="fr">FR</option>
              <option value="nl">NL</option>
              <option value="de">DE</option>
              <option value="da">DA</option>
              <option value="fi">FI</option>
              <option value="el">EL</option>
              <option value="tr">TR</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
