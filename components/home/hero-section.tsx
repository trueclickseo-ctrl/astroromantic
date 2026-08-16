"use client";

import React from "react";
import { Sparkles, Compass, Calendar, ShieldCheck, Zap, Sun } from "lucide-react";
import { AstrologyHeroArtwork } from "./astrology-hero-artwork";
import { CALCULATORS_REGISTRY } from "@/lib/calculator-registry";

export function HeroSection() {
  const totalCalculators = Object.keys(CALCULATORS_REGISTRY).length;

  return (
    <section className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 text-black bg-cover bg-center border border-[#FDE68A]/40 shadow-xs">
      {/* Full-Screen Full-Bleed Celestial Astrology Background Wallpaper Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/images/full-hero-astrology-bg.jpg')" }}
      />
      
      {/* Light Warm Radial Glow for Editorial Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/90 via-[#FFFDF9]/70 to-[#FFFDF9]/30 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] rounded-full px-4 py-1 text-xs font-semibold tracking-wider text-[#92400E] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>ANCIENT WISDOM • MODERN INSIGHTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight leading-[1.1] text-[#1E1B4B]">
            Read your <br />
            <span className="text-[#EE5265] font-serif">
              Future with Ancient <br />
              Wisdom
            </span>
          </h1>

          {/* Hindi Subhead Pill */}
          <div className="inline-flex items-center space-x-2 bg-[#FFE4E6] border border-[#FECDD3] rounded-full px-3.5 py-1 text-sm font-semibold text-[#BE123C] shadow-xs">
            <Sun className="w-4 h-4 text-[#E11D48]" />
            <span>वैदिक ज्योतिष एवं दैनिक राशिफल</span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-700 font-sans leading-relaxed max-w-lg font-medium">
            Personalized astrology readings, Kundli predictions, daily horoscopes, and Vedic calculators based on your exact birth chart.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="/horoscope/"
              className="py-3.5 px-6 bg-[#EE5265] hover:bg-[#E11D48] text-white font-semibold text-sm rounded-full shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Explore Horoscopes</span>
            </a>

            <a
              href="/calculators/"
              className="py-3.5 px-6 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-semibold text-sm rounded-full shadow-xs transition-all flex items-center justify-center space-x-2"
            >
              <Compass className="w-4 h-4 text-zinc-600" />
              <span>Explore {totalCalculators} Calculators</span>
            </a>
          </div>

          {/* Stat Box Row */}
          <div className="pt-4">
            <div className="bg-white/90 backdrop-blur-xs border border-[#F1E5D1] rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="text-sm font-bold text-zinc-900">{totalCalculators}</span>
                  <span className="text-xs text-zinc-500 block">Calculators</span>
                </div>
              </div>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="text-sm font-bold text-zinc-900">100%</span>
                  <span className="text-xs text-zinc-500 block">Private</span>
                </div>
              </div>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="text-sm font-bold text-zinc-900">Vedic</span>
                  <span className="text-xs text-zinc-500 block">Ephemeris</span>
                </div>
              </div>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="text-sm font-bold text-zinc-900">Instant</span>
                  <span className="text-xs text-zinc-500 block">Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Rotating Astrology Artwork Overlay */}
        <div className="lg:col-span-7 flex items-center justify-center pt-4 lg:pt-0 w-full">
          <AstrologyHeroArtwork />
        </div>
      </div>
    </section>
  );
}
