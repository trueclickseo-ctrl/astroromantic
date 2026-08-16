"use client";

import React, { useState } from "react";
import { Search, Sparkles, Moon, Sun, Star, Compass, Flame, ShieldAlert, Clock, Heart, User, Gem, ShieldCheck, BookOpen, Hash, Grid } from "lucide-react";
import { CALCULATORS_REGISTRY, CalculatorItem } from "@/lib/calculator-registry";

const CATEGORIES = [
  "All",
  "Astrology",
  "Dosha & Dasha",
  "Compatibility",
  "KP Astrology",
  "Remedies",
  "Panchang & Lifestyle",
  "Numerology",
  "Lucky Number Checks",
  "Love & Couple Tools",
  "AI Creative Tools"
];

const ICON_MAP: Record<string, any> = {
  Moon, Sun, Star, Compass, Flame, ShieldAlert, Clock, Heart, User, Gem, ShieldCheck, BookOpen, Hash, Grid, Sparkles
};

export default function CalculatorsHubClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allCalculators = Object.values(CALCULATORS_REGISTRY);

  const filteredCalculators = allCalculators.filter((calc) => {
    const matchesCategory = activeCategory === "All" || calc.category === activeCategory;
    const matchesQuery = searchQuery === "" ||
      calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 box-border overflow-x-hidden">
      {/* Hero Header */}
      <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4 w-full box-border">
        <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-4 h-4 text-black" />
          <span>Complete Calculator Suite</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight break-words">
          Astrology & Numerology Calculators
        </h1>
        <p className="text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto font-sans leading-relaxed break-words">
          Access our suite of {allCalculators.length} original astronomical, Vedic astrology, and numerology calculation tools. Get instant calculations, detailed interpretations, and actionable insights.
        </p>

        {/* Real-time Search Bar */}
        <div className="max-w-xl mx-auto relative w-full box-border mt-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5 pointer-events-none z-10" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all calculators (e.g. Chaldean, Moon Sign, Kundli)..."
            className="w-full bg-[#f4f3ef] border-2 border-black rounded-xl py-3.5 pl-11 pr-4 text-sm font-mono text-black outline-none focus:bg-white transition-colors box-border relative z-0 has-search-icon"
          />
        </div>
      </section>

      {/* Category Filter Tabs */}
      <nav className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 scrollbar-none w-full box-border">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl border-2 border-black font-mono text-xs font-bold whitespace-nowrap transition-all outline-none ${
              activeCategory === cat
                ? "bg-black text-white shadow-[2px_2px_0px_#000000]"
                : "bg-white text-black hover:bg-amber-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Calculator Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full box-border">
        {filteredCalculators.map((calc) => {
          const IconComp = ICON_MAP[calc.iconName] || Sparkles;
          return (
            <div
              key={calc.slug}
              className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-4 min-w-0 w-full box-border"
            >
              <div className="space-y-3 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-200 border-2 border-black rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-black">
                    {calc.category}
                  </span>
                  <div className="p-2 bg-zinc-900 border-2 border-black rounded-xl text-amber-400 flex-shrink-0">
                    <IconComp className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-mono text-black break-words leading-tight">
                  {calc.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 font-sans leading-relaxed break-words flex-1">
                  {calc.shortDescription}
                </p>
              </div>

              <a
                href={calc.customHref || `/calculators/${calc.slug}/`}
                className="calculator-card-btn w-full py-3 px-4 rounded-xl font-mono font-bold text-xs uppercase text-center flex items-center justify-center space-x-2 mt-auto"
              >
                <span>Calculate Now</span>
                <span className="text-sm font-bold">→</span>
              </a>
            </div>
          );
        })}
      </section>

      {filteredCalculators.length === 0 && (
        <div className="bg-white border-3 border-black rounded-2xl p-8 text-center space-y-2 font-mono w-full box-border">
          <p className="text-base font-bold text-black">No calculators match your search.</p>
          <p className="text-xs text-zinc-600">Try searching for keywords like "Moon", "Nakshatra", "Kundli", or "Life Path".</p>
        </div>
      )}
    </div>
  );
}
