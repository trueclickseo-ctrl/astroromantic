import React from "react";
import Metadata from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Sun, Heart, Briefcase, Activity } from "lucide-react";
import { HOROSCOPE_DATA } from "@/lib/horoscope-data";

export const metadata = {
  title: "Daily Horoscope & Astrology Predictions 2026 | AstroRomantic",
  description: "Read your free daily horoscope and Vedic astrology predictions for all 12 zodiac signs: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces.",
  canonical: "https://www.astroromantic.com/horoscope/"
};

export default function HoroscopeHubPage() {
  const signsList = Object.values(HOROSCOPE_DATA);

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-zinc-900 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Eyebrow & Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] rounded-full px-4 py-1 text-xs font-semibold tracking-wider text-[#92400E] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>DAILY CELESTIAL HOROSCOPES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif text-[#1E1B4B] tracking-tight">
            Zodiac Horoscope & Daily Astrology Predictions
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Select your sun sign below to uncover your daily astrology reading, romantic alignment, career forecast, and planetary transits.
          </p>
        </div>

        {/* 12 Zodiac Signs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signsList.map((z) => (
            <Link
              key={z.id}
              href={`/horoscope/${z.id}/`}
              className="group bg-white border border-[#F1E5D1] hover:border-[#EE5265] rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8F3] border border-[#FDE8DB] flex items-center justify-center text-2xl font-bold text-[#EE5265]">
                  {z.symbol}
                </div>
                <span className="text-xs font-semibold text-amber-900 bg-[#FEF3C7] px-3 py-1 rounded-full uppercase tracking-wider">
                  {z.element} • {z.modality}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-serif text-[#1E1B4B] group-hover:text-[#EE5265] transition-colors">
                  {z.name}
                </h2>
                <p className="text-xs text-zinc-500 font-sans mt-0.5">{z.dates}</p>
                <p className="text-xs text-zinc-600 font-sans mt-3 line-clamp-2 leading-relaxed">
                  {z.overview}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F1E5D1] flex items-center justify-between text-xs font-semibold text-[#EE5265]">
                <span>Read Daily Horoscope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
