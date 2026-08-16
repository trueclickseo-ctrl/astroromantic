"use client";

import React from "react";
import { Heart, Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react";

export function KundliMatchingSpotlight() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-white to-[#FFF5F2] border-2 border-[#FDE8DB] rounded-3xl p-6 sm:p-10 shadow-sm text-black">
      {/* Subtle Celestial Accent Glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div className="inline-flex items-center space-x-2 bg-rose-100 border border-rose-200 rounded-full px-4 py-1 text-xs font-semibold text-rose-700 uppercase tracking-wider shadow-xs">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>FEATURED MATCHMAKING TOOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1E1B4B] tracking-tight">
            Kundli Matching & <br />
            <span className="text-[#EE5265]">Gun Milan (36 Points)</span>
          </h2>

          <p className="text-base text-zinc-700 font-sans leading-relaxed max-w-xl">
            Test marital compatibility and emotional harmony between two partners using authentic Ashta-Koota Vedic algorithms (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi).
          </p>

          {/* Highlights Pills */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-zinc-700">
            <span className="bg-white border border-rose-200 rounded-full px-3 py-1 text-[#BE123C] flex items-center space-x-1.5 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[#BE123C]" />
              <span>36 Points Test</span>
            </span>
            <span className="bg-white border border-amber-200 rounded-full px-3 py-1 text-[#92400E] flex items-center space-x-1.5 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#92400E]" />
              <span>Nadi & Manglik Check</span>
            </span>
            <span className="bg-white border border-purple-200 rounded-full px-3 py-1 text-purple-700 flex items-center space-x-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Instant Analysis</span>
            </span>
          </div>

          {/* Action CTA Button */}
          <div className="pt-2">
            <a
              href="/calculators/kundli-matching/"
              className="inline-flex items-center space-x-2 py-3.5 px-7 bg-[#EE5265] hover:bg-[#E11D48] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Calculate Kundli Matching Now</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Right Feature Card Visual */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full bg-white border border-[#F1E5D1] rounded-2xl p-6 shadow-md space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 mx-auto flex items-center justify-center text-[#EE5265]">
              <Heart className="w-8 h-8 fill-[#EE5265]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold font-serif text-[#1E1B4B]">36 Gun Milan Scoring</h3>
              <p className="text-xs text-zinc-500 font-sans">Vedic Ashta-Koota Compatibility Spectrum</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left text-xs pt-2 font-medium text-zinc-700">
              <div className="bg-[#FFF8F3] p-2.5 rounded-xl border border-[#FDE8DB]">
                <span className="text-[10px] text-zinc-500 block uppercase">28 - 36 Points</span>
                <span className="font-bold text-emerald-700">Excellent Match</span>
              </div>
              <div className="bg-[#FFF8F3] p-2.5 rounded-xl border border-[#FDE8DB]">
                <span className="text-[10px] text-zinc-500 block uppercase">18 - 27 Points</span>
                <span className="font-bold text-amber-700">Good Match</span>
              </div>
              <div className="bg-[#FFF8F3] p-2.5 rounded-xl border border-[#FDE8DB]">
                <span className="text-[10px] text-zinc-500 block uppercase">Nadi Check</span>
                <span className="font-bold text-rose-700">Genetic Harmony</span>
              </div>
              <div className="bg-[#FFF8F3] p-2.5 rounded-xl border border-[#FDE8DB]">
                <span className="text-[10px] text-zinc-500 block uppercase">Mangal Dosha</span>
                <span className="font-bold text-purple-700">Cancellation Rules</span>
              </div>
            </div>

            <a
              href="/calculators/kundli-matching/"
              className="block w-full py-2.5 px-4 bg-[#FFF8F3] hover:bg-rose-50 text-[#EE5265] border border-[#FDE8DB] font-bold text-xs rounded-xl transition-colors"
            >
              Start Free Kundli Match →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
