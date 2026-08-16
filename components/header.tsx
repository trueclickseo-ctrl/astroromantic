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
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-700">
          <a
            href="/"
            className="relative text-rose-600 font-semibold py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-rose-500 after:rounded-full"
          >
            Home
          </a>

          {/* Calculators Dropdown */}
          <div className="relative group">
            <a
              href="/calculators/"
              className="flex items-center space-x-1 hover:text-rose-600 py-1 transition-colors"
            >
              <span>Calculators</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          <a href="/numerology/" className="hover:text-rose-600 py-1 transition-colors">
            Numerology
          </a>

          <a href="/love/" className="hover:text-rose-600 py-1 transition-colors">
            Love
          </a>

          <a href="/relationship/" className="hover:text-rose-600 py-1 transition-colors">
            Relationship
          </a>

          <a href="/ai-generators/" className="hover:text-rose-600 py-1 transition-colors">
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
