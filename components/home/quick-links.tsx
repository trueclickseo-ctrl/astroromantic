"use client";

import React from "react";
import { User, Calendar, Heart, Sun, Sparkles } from "lucide-react";

export function QuickLinks() {
  const links = [
    { name: "Natal Chart", href: "/calculators/lagna/", icon: <User className="w-4 h-4 text-amber-600" /> },
    { name: "Dasha Analysis", href: "/calculators/vimshottari-dasha/", icon: <Calendar className="w-4 h-4 text-rose-600" /> },
    { name: "Love Compatibility", href: "/calculators/kundli-matching/", icon: <Heart className="w-4 h-4 text-rose-500" /> },
    { name: "Daily Panchang", href: "/calculators/birth-panchang/", icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { name: "Daily Horoscopes", href: "/horoscope/", icon: <Sparkles className="w-4 h-4 text-purple-600" /> }
  ];

  return (
    <section className="bg-white border border-[#F1E5D1] rounded-2xl p-4 shadow-xs">
      <div className="flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-zinc-700">
        {links.map((lnk) => (
          <a
            key={lnk.href}
            href={lnk.href}
            className="flex items-center space-x-2 py-2 px-4 hover:bg-rose-50 rounded-full transition-colors"
          >
            {lnk.icon}
            <span>{lnk.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
