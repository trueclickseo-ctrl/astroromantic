"use client";

import React from "react";
import { BookOpen, Award, ShieldCheck, Heart } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      title: "Ancient Wisdom",
      desc: "Rooted in authentic Vedic Astrology and classical astronomical principles.",
      icon: <BookOpen className="w-6 h-6 text-amber-700" />
    },
    {
      title: "Highly Accurate",
      desc: "High-precision algorithms for accurate longitudes, planetary hours & dashas.",
      icon: <Award className="w-6 h-6 text-rose-700" />
    },
    {
      title: "Secure & Private",
      desc: "Your birth data is 100% client-side private. We never store personal details.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />
    },
    {
      title: "Guidance for All",
      desc: "Personalized insights across Love, Compatibility, Kundli, and Numerology.",
      icon: <Heart className="w-6 h-6 text-purple-700" />
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="bg-white border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all space-y-3"
        >
          <div className="p-3 bg-[#FAF7F2] border-2 border-black rounded-xl w-fit">
            {f.icon}
          </div>
          <h3 className="text-lg font-mono font-bold text-black">
            {f.title}
          </h3>
          <p className="text-xs text-zinc-700 font-sans leading-relaxed">
            {f.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
