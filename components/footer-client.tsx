"use client";

import React from "react";
import { Sparkles, Compass, ShieldCheck, Heart, Moon, Star, ArrowRight } from "lucide-react";
import { CALCULATORS_REGISTRY } from "@/lib/calculator-registry";
import { useLanguage } from "@/lib/i18n";

const ZODIAC_SIGNS_LIST = [
  { name: "Aries", symbol: "♈", slug: "/horoscope/aries/" },
  { name: "Taurus", symbol: "♉", slug: "/horoscope/taurus/" },
  { name: "Gemini", symbol: "♊", slug: "/horoscope/gemini/" },
  { name: "Cancer", symbol: "♋", slug: "/horoscope/cancer/" },
  { name: "Leo", symbol: "♌", slug: "/horoscope/leo/" },
  { name: "Virgo", symbol: "♍", slug: "/horoscope/virgo/" },
  { name: "Libra", symbol: "♎", slug: "/horoscope/libra/" },
  { name: "Scorpio", symbol: "♏", slug: "/horoscope/scorpio/" },
  { name: "Sagittarius", symbol: "♐", slug: "/horoscope/sagittarius/" },
  { name: "Capricorn", symbol: "♑", slug: "/horoscope/capricorn/" },
  { name: "Aquarius", symbol: "♒", slug: "/horoscope/aquarius/" },
  { name: "Pisces", symbol: "♓", slug: "/horoscope/pisces/" },
];

const GUIDES_LIST = [
  { name: "Explore Astrology Hub", href: "/astrology-guides/" },
  { name: "Vedic Zodiac Signs", href: "/vedic/zodiac-signs/" },
  { name: "Western Zodiac Signs", href: "/western/zodiac-signs/" },
  { name: "Life Insights Report", href: "/reports/life-insights/" },
  { name: "Dasha Analysis Guide", href: "/reports/dasha/" },
  { name: "Gemstone & Remedies", href: "/reports/gemstone/" },
  { name: "Mangal Dosha Explainer", href: "/reports/mangal-dosha/" },
  { name: "Kaal Sarp Dosha Guide", href: "/reports/kalsarp-dosha/" },
  { name: "Astrology Glossary", href: "/glossary/" },
  { name: "Cosmic Blog", href: "/blog/" },
];

export default function FooterClient() {
  const { t } = useLanguage();
  const allCalcs = Object.values(CALCULATORS_REGISTRY);
  const totalCalculators = allCalcs.length;

  // Filter dynamic categories from the single source of truth (CALCULATORS_REGISTRY)
  const astrologyCalculators = allCalcs
    .filter(c => c.category === "Astrology" || c.category === "Dosha & Dasha" || c.category === "KP Astrology" || c.category === "Remedies")
    .slice(0, 11);

  const numerologyCalculators = allCalcs
    .filter(c => c.category === "Numerology" || c.category === "Lucky Number Checks")
    .slice(0, 11);

  const loveCalculators = allCalcs
    .filter(c => c.category === "Compatibility" || c.category === "Love & Couple Tools" || c.category === "AI Creative Tools")
    .slice(0, 11);

  return (
    <footer className="relative bg-[#FFF9F4] border-t-2 border-[#F3E8DA] text-zinc-800 font-sans mt-16 overflow-hidden">
      {/* Subtle Astrology Celestial Art Background Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-repeat bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M11 18h2v-2h-2v2zm10 0h2v-2h-2v2zm-10 10h2v-2h-2v2zm10 0h2v-2h-2v2zm-10 10h2v-2h-2v2zm10 0h2v-2h-2v2zm10-20h2v-2h-2v2zm10 0h2v-2h-2v2zm-10 10h2v-2h-2v2zm10 0h2v-2h-2v2zm-10 10h2v-2h-2v2zm10 0h2v-2h-2v2z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* BRAND TOP BANNER */}
        <div className="bg-white/80 backdrop-blur-xs border border-[#F1E5D1] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] rounded-full px-3.5 py-1 text-xs font-semibold text-[#92400E]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>ASTROROMANTIC SUITE • {totalCalculators}+ TOOLS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1E1B4B]">
              Explore Astrology, Numerology &amp; Relationship Tools
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Discover accurate birth chart calculators, numerology reports, daily horoscopes, and compatibility tools grounded in authentic Vedic and Pythagorean principles.
            </p>
          </div>

          <a
            href="/calculators/"
            className="px-6 py-3.5 bg-[#EE5265] hover:bg-[#E11D48] text-white font-medium text-sm rounded-full shadow-sm transition-all flex items-center space-x-2 whitespace-nowrap"
          >
            <Compass className="w-4 h-4 text-white" />
            <span>Explore All {totalCalculators} Calculators</span>
            <ArrowRight className="w-4 h-4 text-white ml-1" />
          </a>
        </div>

        {/* MULTI-COLUMN NAVIGATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pt-4">
          
          {/* COLUMN 1: BRAND & ABOUT */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center space-x-2 text-xl font-serif font-bold text-[#1E1B4B]">
              <Sparkles className="w-5 h-5 text-[#EE5265]" />
              <span>AstroRomantic</span>
            </a>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">
              Astrology, Numerology &amp; Relationship Tools for meaningful insights, compatibility, and personalized birth chart calculations.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-zinc-600">
              <div className="flex items-center space-x-2 text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Private Client-Side Engine</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-500">
                <Moon className="w-4 h-4 text-amber-600" />
                <span>Lahiri Vedic Ephemeris Accurate</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ASTROLOGY CALCULATORS */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#F3E8DA] pb-2">
              Astrology Calculators
            </h3>
            <ul className="space-y-2 text-xs">
              {astrologyCalculators.map((calc) => (
                <li key={calc.slug}>
                  <a
                    href={calc.customHref || `/calculators/${calc.slug}/`}
                    className="text-zinc-600 hover:text-[#EE5265] transition-colors block truncate"
                  >
                    {calc.name}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/calculators/"
                  className="text-xs font-mono font-semibold text-[#EE5265] hover:underline inline-flex items-center space-x-1"
                >
                  <span>View All Astrology Tools</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: NUMEROLOGY CALCULATORS */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#F3E8DA] pb-2">
              Numerology Tools
            </h3>
            <ul className="space-y-2 text-xs">
              {numerologyCalculators.map((calc) => (
                <li key={calc.slug}>
                  <a
                    href={calc.customHref || `/calculators/${calc.slug}/`}
                    className="text-zinc-600 hover:text-[#EE5265] transition-colors block truncate"
                  >
                    {calc.name}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/calculators/"
                  className="text-xs font-mono font-semibold text-[#EE5265] hover:underline inline-flex items-center space-x-1"
                >
                  <span>View All Numerology Tools</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: LOVE & COMPATIBILITY */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#F3E8DA] pb-2">
              Love &amp; Compatibility
            </h3>
            <ul className="space-y-2 text-xs">
              {loveCalculators.map((calc) => (
                <li key={calc.slug}>
                  <a
                    href={calc.customHref || `/calculators/${calc.slug}/`}
                    className="text-zinc-600 hover:text-[#EE5265] transition-colors block truncate"
                  >
                    {calc.name}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/calculators/"
                  className="text-xs font-mono font-semibold text-[#EE5265] hover:underline inline-flex items-center space-x-1"
                >
                  <span>View All Love Tools</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: GUIDES & IMPORTANT PAGES */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#F3E8DA] pb-2">
              Guides &amp; Overview
            </h3>
            <ul className="space-y-2 text-xs">
              {GUIDES_LIST.map((guide) => (
                <li key={guide.href}>
                  <a
                    href={guide.href}
                    className="text-zinc-600 hover:text-[#EE5265] transition-colors block truncate"
                  >
                    {guide.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/horoscope/" className="text-zinc-600 hover:text-[#EE5265] transition-colors block font-semibold text-[#BE123C]">
                  Daily Horoscope Hub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ZODIAC SIGNS QUICK NAV ROW */}
        <div className="bg-white/60 border border-[#F3E8DA] rounded-2xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold text-[#1E1B4B] uppercase tracking-wider flex items-center space-x-2">
              <Star className="w-3.5 h-3.5 text-amber-600" />
              <span>Zodiac Horoscopes</span>
            </h4>
            <a href="/horoscope/" className="text-xs font-mono text-[#EE5265] hover:underline">
              All Horoscopes →
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 text-center text-xs">
            {ZODIAC_SIGNS_LIST.map((z) => (
              <a
                key={z.name}
                href={z.slug}
                className="p-2 bg-white hover:bg-rose-50 border border-[#F1E5D1] rounded-xl text-zinc-800 hover:text-[#BE123C] transition-all flex flex-col items-center justify-center space-y-0.5"
              >
                <span className="text-sm">{z.symbol}</span>
                <span className="font-medium text-[11px]">{z.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="border-t border-[#F3E8DA] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-sans">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} AstroRomantic. All rights reserved.</p>
            <p className="text-[11px] text-zinc-400">
              AstroRomantic provides informational astrology and numerology tools for entertainment and educational purposes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-medium">
            <a href="/" className="hover:text-zinc-900 transition-colors">Home</a>
            <a href="/calculators/" className="hover:text-zinc-900 transition-colors">Calculators</a>
            <a href="/about/" className="hover:text-zinc-900 transition-colors">{t.about}</a>
            <a href="/contact/" className="hover:text-zinc-900 transition-colors">{t.contact}</a>
            <a href="/privacy-policy/" className="hover:text-zinc-900 transition-colors">{t.privacy}</a>
            <a href="/terms/" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            <a href="/disclaimer/" className="hover:text-zinc-900 transition-colors">Disclaimer</a>
            <a href="/sitemap.xml" className="hover:text-zinc-900 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
