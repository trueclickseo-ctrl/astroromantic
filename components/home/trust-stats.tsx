"use client";

import React from "react";
import { Hash, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { CALCULATORS_REGISTRY } from "@/lib/calculator-registry";

export function TrustStats() {
  const totalCalculators = Object.keys(CALCULATORS_REGISTRY).length;

  const stats = [
    {
      value: `${totalCalculators}`,
      label: "Calculators Suite",
      desc: "Full Astrology & Numerology",
      icon: <Hash className="w-5 h-5 text-amber-700" />
    },
    {
      value: "100%",
      label: "Client-Side Private",
      desc: "Zero birth data retention",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />
    },
    {
      value: "Vedic",
      label: "Authentic Formulas",
      desc: "Personalized Kundli insights",
      icon: <Sparkles className="w-5 h-5 text-rose-700" />
    },
    {
      value: "Instant",
      label: "Precise Results",
      desc: "High-precision Lahiri ephemeris",
      icon: <Zap className="w-5 h-5 text-purple-700" />
    }
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((st, idx) => (
        <div
          key={idx}
          className="bg-white border-3 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-2 select-none"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              {st.value}
            </span>
            <div className="p-2 bg-[#FAF7F2] border-2 border-black rounded-xl">
              {st.icon}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-black uppercase">
              {st.label}
            </div>
            <div className="text-[11px] text-zinc-600 font-sans">
              {st.desc}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
