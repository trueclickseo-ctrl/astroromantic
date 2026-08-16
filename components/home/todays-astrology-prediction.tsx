"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface ZodiacSign {
  id: string;
  name: string;
  dates: string;
  slug: string;
  iconSvg: React.ReactNode;
}

const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    slug: "/horoscope/aries/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 50 82 V 32 M 50 32 C 40 18 20 22 20 38 C 20 50 34 52 46 44 M 50 32 C 60 18 80 22 80 38 C 80 50 66 52 54 44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "taurus",
    name: "Taurus",
    dates: "Apr 20 - May 20",
    slug: "/horoscope/taurus/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <circle cx="50" cy="62" r="22" strokeWidth="3" />
        <path d="M 24 26 C 30 46 44 40 50 40 C 56 40 70 46 76 26" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "gemini",
    name: "Gemini",
    dates: "May 21 - Jun 20",
    slug: "/horoscope/gemini/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 25 22 Q 50 32 75 22 M 25 78 Q 50 68 75 78 M 38 27 V 73 M 62 27 V 73" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "cancer",
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    slug: "/horoscope/cancer/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <circle cx="34" cy="36" r="12" strokeWidth="3" />
        <path d="M 46 36 C 46 16 80 20 80 44" strokeWidth="3" strokeLinecap="round" />
        <circle cx="66" cy="64" r="12" strokeWidth="3" />
        <path d="M 54 64 C 54 84 20 80 20 56" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "leo",
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    slug: "/horoscope/leo/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <circle cx="30" cy="62" r="10" strokeWidth="3" />
        <path d="M 38 56 C 44 26 70 30 66 52 C 62 70 76 80 84 66" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "virgo",
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    slug: "/horoscope/virgo/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 22 30 V 70 M 22 42 Q 36 26 40 46 V 70 M 40 42 Q 54 26 58 46 V 76 Q 58 90 74 74 M 68 56 Q 84 76 74 90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "libra",
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    slug: "/horoscope/libra/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <line x1="20" y1="74" x2="80" y2="74" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="52" x2="36" y2="52" strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="52" x2="80" y2="52" strokeWidth="3" strokeLinecap="round" />
        <path d="M 36 52 C 36 30 64 30 64 52" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "scorpio",
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    slug: "/horoscope/scorpio/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 22 30 V 70 M 22 42 Q 36 26 40 46 V 70 M 40 42 Q 54 26 58 46 V 74 M 58 64 L 74 80 M 74 80 H 62 M 74 80 V 68" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    slug: "/horoscope/sagittarius/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <line x1="22" y1="78" x2="78" y2="22" strokeWidth="3" strokeLinecap="round" />
        <path d="M 52 22 H 78 V 48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="44" x2="56" y2="68" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "capricorn",
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    slug: "/horoscope/capricorn/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 22 28 L 40 72 L 56 34 Q 68 20 74 38 Q 80 56 64 68 C 52 76 56 90 70 86" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "aquarius",
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    slug: "/horoscope/aquarius/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 20 40 L 32 28 L 44 40 L 56 28 L 68 40 L 80 28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 20 66 L 32 54 L 44 66 L 56 54 L 68 66 L 80 54" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "pisces",
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    slug: "/horoscope/pisces/",
    iconSvg: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#EE5265] group-hover:scale-105 transition-transform duration-300 stroke-current fill-none" viewBox="0 0 100 100">
        <path d="M 34 20 C 18 40 18 60 34 80 M 66 20 C 82 40 82 60 66 80 M 18 50 H 82" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
];

export function TodaysAstrologyPrediction() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#FDE68A]/40 shadow-xs">
      {/* Subtle Warm Background Glow */}
      <div className="absolute inset-0 bg-radial from-amber-100/20 via-rose-100/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F1E5D1] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] rounded-full px-3.5 py-0.5 text-[11px] font-semibold tracking-wider text-[#92400E] uppercase">
              <Sparkles className="w-3 h-3 text-[#D97706]" />
              <span>DAILY HOROSCOPE INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal font-serif tracking-tight text-[#1E1B4B]">
              Today’s Astrology Prediction
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 font-sans max-w-md">
            Select your zodiac sign to reveal personalized daily celestial guidance, planetary transits, and Vedic astrological alignment.
          </p>
        </div>

        {/* Responsive 12 Zodiac Signs Grid */}
        {/* Desktop: 6 per row (2 rows) | Tablet: 4 per row (3 rows) | Mobile: 2 per row (6 rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {ZODIAC_SIGNS.map((zodiac, idx) => (
            <motion.a
              key={zodiac.id}
              href={zodiac.slug}
              aria-label={`Read ${zodiac.name} daily horoscope and astrology prediction`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group flex flex-col items-center justify-center p-4 sm:p-5 w-full rounded-2xl hover:bg-[#FFF8F3] hover:shadow-xs border border-transparent hover:border-[#FDE8DB] transition-all duration-300 cursor-pointer text-center"
            >
              {/* Thin Orange/Coral Vector Illustration */}
              <div className="flex items-center justify-center mb-3 text-[#EE5265]">
                {zodiac.iconSvg}
              </div>

              {/* Zodiac Name */}
              <span className="text-sm sm:text-base font-medium text-[#1E1B4B] group-hover:text-[#EE5265] transition-colors duration-200">
                {zodiac.name}
              </span>
              <span className="text-[10px] text-zinc-600 font-sans mt-0.5">
                {zodiac.dates}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom Right Link: All Signs → */}
        <div className="flex items-center justify-end pt-2">
          <a
            href="/horoscope/"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#EE5265] hover:text-[#E11D48] transition-colors group"
          >
            <span>All signs</span>
            <ArrowRight className="w-4 h-4 text-[#EE5265] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
