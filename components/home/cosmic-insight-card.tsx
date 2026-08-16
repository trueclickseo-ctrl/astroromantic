"use client";

import React from "react";
import { Sparkles, Compass, Target, ShieldCheck, Heart, Sun } from "lucide-react";

export function CosmicInsightCard() {
  const features = [
    {
      title: "Ancient Wisdom",
      desc: "Rooted in Vedic Astrology with authentic principles.",
      bg: "bg-rose-100",
      iconColor: "text-rose-600",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Highly Accurate",
      desc: "Advanced algorithms for precise predictions.",
      bg: "bg-amber-100",
      iconColor: "text-amber-600",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Secure & Private",
      desc: "Your data is safe with us. We value your privacy.",
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Guidance for All",
      desc: "Career, Love, Health & more — personalized for you.",
      bg: "bg-pink-100",
      iconColor: "text-pink-600",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-white border border-[#F1E5D1] rounded-3xl p-6 sm:p-8 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card Container (Warm Peach Background) */}
        <div className="lg:col-span-5 bg-[#FFF8F3] border border-[#FDE8DB] rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Celestial / Sun Illustration */}
            <div className="w-14 h-14 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
              <Sun className="w-7 h-7 text-amber-600" />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 leading-snug">
              Cosmic Insight: <br />
              Chart Your Path with Authentic Astrology
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              Unlock your unique planetary map. Explore in-depth personalized Kundli readings, daily horoscope transits, and practical life guidance based on your birth data. Discover clarity and purpose.
            </p>

            {/* Language Badges */}
            <div className="flex items-center space-x-3 pt-2 text-xs font-semibold text-zinc-700">
              <span className="flex items-center space-x-1 bg-white border border-zinc-200 rounded-full px-2.5 py-1">
                <span>🌐</span> <span>EN</span>
              </span>
              <span className="flex items-center space-x-1 bg-white border border-zinc-200 rounded-full px-2.5 py-1">
                <span>🕉️</span> <span>HI</span>
              </span>
              <span className="flex items-center space-x-1 bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] rounded-full px-2.5 py-1 font-bold">
                <span>VEDIC</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/horoscope/"
              className="py-2.5 px-5 bg-[#EE5265] hover:bg-[#E11D48] text-white font-medium text-xs rounded-full shadow-xs transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Explore Horoscopes</span>
            </a>

            <a
              href="/calculators/"
              className="py-2.5 px-5 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-medium text-xs rounded-full shadow-xs transition-all flex items-center space-x-2"
            >
              <Compass className="w-3.5 h-3.5 text-zinc-600" />
              <span>View Calculators</span>
            </a>
          </div>
        </div>

        {/* Right 4 Feature Columns */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4">
              <div className={`w-14 h-14 rounded-full ${f.bg} flex items-center justify-center ${f.iconColor}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold font-serif text-zinc-900">
                {f.title}
              </h3>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
