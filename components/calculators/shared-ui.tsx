"use client";

import React, { useState } from "react";
import {
  Sparkles, Calendar, Clock, MapPin, User, Search,
  Share2, Printer, Check, Info, ShieldAlert, Heart, Star, ChevronDown
} from "lucide-react";
import { searchCities, CityData } from "@/lib/city-database";
import { AshtaKootaResult, PlanetaryPosition } from "@/lib/astrology-engine";
import { LoShuGridResult } from "@/lib/numerology-engine";

// ─── CALCULATOR LAYOUT CONTAINER (LIGHT ELEGANT ASTROLOGY THEME) ─────────────

interface CalculatorLayoutProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  h1: string;
  directAnswer: string;
  howItWorks: { step: string; title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  educationalTitle: string;
  educationalBody: string[];
  relatedCalculators: { name: string; href: string }[];
  children: React.ReactNode;
}

export function CalculatorLayout({
  title,
  description,
  category,
  slug,
  h1,
  directAnswer,
  howItWorks,
  faqs,
  educationalTitle,
  educationalBody,
  relatedCalculators,
  children
}: CalculatorLayoutProps) {
  return (
    <div className="relative space-y-8 max-w-4xl mx-auto px-2 sm:px-4 py-4 min-h-screen">
      {/* Background Decorative Celestial & Birth Chart Mandala Watermark Artwork */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-[0.14] flex items-center justify-center">
        <svg className="w-[850px] h-[850px] text-amber-950 animate-[spin_180s_linear_infinite]" viewBox="0 0 800 800" fill="none">
          {/* Outer Zodiac Ring */}
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="400" cy="400" r="340" stroke="currentColor" strokeWidth="2" />
          
          {/* 12 House Spoke Dividers */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="400"
              y1="400"
              x2={400 + 340 * Math.cos((deg * Math.PI) / 180)}
              y2={400 + 340 * Math.sin((deg * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          ))}

          {/* Inner Vedic Kundli Diamond Aspect Matrix */}
          <circle cx="400" cy="400" r="260" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="400,140 660,400 400,660 140,400" stroke="currentColor" strokeWidth="1.5" />
          <line x1="400" y1="140" x2="400" y2="660" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="140" y1="400" x2="660" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

          {/* Center Sun & Nakshatra Core */}
          <circle cx="400" cy="400" r="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="75" stroke="currentColor" strokeWidth="2" />
          <circle cx="400" cy="400" r="18" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-mono font-bold text-zinc-700">
        <a href="/" className="hover:text-black transition-colors">Home</a>
        <span>/</span>
        <a href="/calculators/" className="hover:text-black transition-colors">Calculators</a>
        <span>/</span>
        <span className="text-black uppercase">{category}</span>
      </nav>

      {/* Hero Heading */}
      <header className="space-y-3 bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000]">
        <div className="inline-block bg-amber-300 text-black border-2 border-black rounded-full px-3 py-1 text-xs font-mono font-bold uppercase">
          {category}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-black tracking-tight">
          {h1}
        </h1>
        <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
          {description}
        </p>
      </header>

      {/* Interactive Calculator Form & Results Card (PURE WHITE LIGHT CONTAINER) */}
      <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 text-black shadow-[6px_6px_0px_#000000] relative overflow-hidden">
        {children}
      </section>

      {/* Direct Answer Box */}
      <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] space-y-2">
        <div className="flex items-center space-x-2 text-black font-mono font-bold text-sm uppercase">
          <Info className="w-4 h-4 text-amber-800" />
          <span>Quick Overview</span>
        </div>
        <p className="text-sm text-zinc-900 font-sans leading-relaxed">
          {directAnswer}
        </p>
      </section>

      {/* How It Works Steps */}
      {howItWorks.length > 0 && (
        <section className="bg-white border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
          <h2 className="text-xl font-bold font-mono text-black border-b-2 border-black pb-2">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {howItWorks.map((hw) => (
              <div key={hw.step} className="border-2 border-black rounded-xl p-4 bg-[#FAF7F2] space-y-2">
                <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-sm">
                  {hw.step}
                </div>
                <h3 className="font-mono font-bold text-sm text-black">{hw.title}</h3>
                <p className="text-xs text-zinc-700 leading-normal">{hw.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Educational Article Section */}
      <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_#000000] space-y-4 text-black">
        <h2 className="text-2xl font-extrabold font-mono border-b-2 border-black pb-2">
          {educationalTitle}
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed font-sans text-zinc-800">
          {educationalBody.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="bg-white border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
          <h2 className="text-xl font-bold font-mono text-black border-b-2 border-black pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer Box */}
      <section className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 text-xs text-zinc-700 space-y-1 font-sans">
        <div className="flex items-center space-x-1.5 font-mono font-bold text-zinc-900 uppercase">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
          <span>Informational Disclaimer</span>
        </div>
        <p>
          Calculations are provided for traditional, educational, and cultural exploration purposes. Astrology and numerology insights do not constitute medical, legal, financial, or guaranteed predictive outcomes.
        </p>
      </section>

      {/* Contextual Internal Links */}
      {relatedCalculators.length > 0 && (
        <section className="bg-white border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] space-y-3">
          <h3 className="text-base font-bold font-mono text-black">Related Calculators</h3>
          <div className="flex flex-wrap gap-2">
            {relatedCalculators.map((rel) => (
              <a
                key={rel.href}
                href={rel.href}
                className="bg-[#FAF7F2] hover:bg-black hover:text-white border-2 border-black rounded-lg px-3 py-1.5 text-xs font-mono font-bold transition-all"
              >
                {rel.name} →
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// ─── FAQ ITEM COMPONENT ───────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-2 border-black rounded-xl overflow-hidden bg-[#FAF7F2]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left font-mono font-bold text-sm text-black flex items-center justify-between outline-none"
      >
        <span>{question}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-xs sm:text-sm text-zinc-800 font-sans border-t border-black/10 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
}

// ─── LOCATION INPUT COMPONENT WITH CITY AUTOCOMPLETE & 44PX LEFT PADDING ──────

interface LocationInputProps {
  label?: string;
  selectedCity: CityData;
  onSelectCity: (city: CityData) => void;
}

export function LocationInput({ label = "Birth Place / City", selectedCity, onSelectCity }: LocationInputProps) {
  const [query, setQuery] = useState(`${selectedCity.city}, ${selectedCity.country}`);
  const [isOpen, setIsOpen] = useState(false);
  const results = searchCities(query);

  return (
    <div className="relative space-y-1">
      <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-700 pointer-events-none" />
        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search city (e.g. New Delhi, London, New York)"
          className="w-full bg-white border-2 border-black rounded-xl py-3 pl-11 pr-4 text-xs font-mono text-black outline-none focus:bg-[#FAF7F2] transition-colors shadow-[2px_2px_0px_#000000]"
        />
      </div>
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border-2 border-black rounded-xl shadow-2xl max-h-48 overflow-y-auto divide-y divide-zinc-200">
          {results.map((c) => (
            <button
              key={`${c.city}-${c.country}`}
              type="button"
              onClick={() => {
                onSelectCity(c);
                setQuery(`${c.city}, ${c.country}`);
                setIsOpen(false);
              }}
              className="w-full text-left p-3 text-xs font-mono text-black hover:bg-amber-300 transition-colors flex items-center justify-between"
            >
              <span className="font-bold">{c.city}, {c.country}</span>
              <span className="text-[10px] opacity-75 font-mono">UTC {c.utcOffset >= 0 ? `+${c.utcOffset}` : c.utcOffset}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ASHTA KOOTA TABLE COMPONENT (LIGHT WARM THEME) ──────────────────────────

export function AshtaKootaTable({ result }: { result: AshtaKootaResult }) {
  const kootas = [
    { name: "Varna", score: result.varna.score, max: result.varna.max, desc: result.varna.description },
    { name: "Vashya", score: result.vashya.score, max: result.vashya.max, desc: result.vashya.description },
    { name: "Tara", score: result.tara.score, max: result.tara.max, desc: result.tara.description },
    { name: "Yoni", score: result.yoni.score, max: result.yoni.max, desc: result.yoni.description },
    { name: "Graha Maitri", score: result.grahaMaitri.score, max: result.grahaMaitri.max, desc: result.grahaMaitri.description },
    { name: "Gana", score: result.gana.score, max: result.gana.max, desc: result.gana.description },
    { name: "Bhakoot", score: result.bhakoot.score, max: result.bhakoot.max, desc: result.bhakoot.description },
    { name: "Nadi", score: result.nadi.score, max: result.nadi.max, desc: result.nadi.description }
  ];

  return (
    <div className="space-y-6">
      {/* Light Score Header */}
      <div className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-2 shadow-[4px_4px_0px_#000000]">
        <span className="text-xs font-mono uppercase text-amber-900 font-bold tracking-wider">Total Gun Milan Score</span>
        <div className="text-4xl sm:text-5xl font-extrabold font-mono text-black">
          <span className="text-rose-600">{result.totalScore}</span> / {result.maxScore}
        </div>
        <p className="text-xs sm:text-sm text-zinc-800 font-bold font-sans">{result.recommendation}</p>
      </div>

      <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
        <table className="w-full text-xs font-mono text-left text-black bg-white">
          <thead className="bg-amber-200 border-b-2 border-black text-black">
            <tr>
              <th className="p-3 font-bold">Koota</th>
              <th className="p-3 font-bold">Points</th>
              <th className="p-3 font-bold">Meaning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {kootas.map((k) => (
              <tr key={k.name} className="hover:bg-amber-50">
                <td className="p-3 font-bold text-black">{k.name}</td>
                <td className="p-3 font-extrabold text-rose-600">{k.score} / {k.max}</td>
                <td className="p-3 text-zinc-700">{k.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── LO SHU GRID DISPLAY COMPONENT (LIGHT WARM MATRIX) ────────────────────────

export function LoShuGridDisplay({ result }: { result: LoShuGridResult }) {
  const layout = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ];

  return (
    <div className="space-y-6">
      {/* 3x3 Visual Matrix */}
      <div className="max-w-xs mx-auto grid grid-cols-3 gap-3 p-4 bg-[#FAF7F2] border-3 border-black rounded-2xl shadow-[4px_4px_0px_#000000]">
        {layout.flat().map((num) => {
          const count = result.grid[num] || 0;
          const isPresent = count > 0;
          return (
            <div
              key={num}
              className={`h-20 rounded-xl border-2 flex flex-col items-center justify-center p-1 font-mono transition-all ${
                isPresent
                  ? "bg-amber-400 text-black border-black font-extrabold shadow-[2px_2px_0px_#000000]"
                  : "bg-white text-zinc-400 border-zinc-300 opacity-60"
              }`}
            >
              <span className="text-xs uppercase opacity-75">#{num}</span>
              <span className="text-2xl font-extrabold">{isPresent ? num.toString().repeat(count) : "—"}</span>
            </div>
          );
        })}
      </div>

      {/* Planes Analysis */}
      <div className="space-y-2">
        <h4 className="text-xs font-mono font-bold uppercase text-black">Lo Shu Grid Planes</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {result.planes.map((p) => (
            <div
              key={p.name}
              className={`border-2 border-black rounded-xl p-3 text-xs font-mono space-y-1 ${
                p.isComplete
                  ? "bg-amber-100 text-black font-bold shadow-[2px_2px_0px_#000000]"
                  : "bg-white text-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span>{p.name}</span>
                <span className={p.isComplete ? "text-amber-800" : "text-zinc-500"}>
                  {p.isComplete ? "✓ Complete" : "Partial"}
                </span>
              </div>
              <p className="text-[11px] font-sans text-zinc-700">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PLANETARY POSITIONS TABLE COMPONENT (LIGHT WARM THEME) ───────────────────

export function PlanetaryTable({ planets }: { planets: Record<string, PlanetaryPosition> }) {
  return (
    <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
      <table className="w-full text-xs font-mono text-left text-black bg-white">
        <thead className="bg-amber-200 border-b-2 border-black text-black">
          <tr>
            <th className="p-3 font-bold">Planet</th>
            <th className="p-3 font-bold">Sign (Rashi)</th>
            <th className="p-3 font-bold">Degree</th>
            <th className="p-3 font-bold">Nakshatra</th>
            <th className="p-3 font-bold">Pada</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {Object.values(planets).map((p) => (
            <tr key={p.name} className="hover:bg-amber-50">
              <td className="p-3 font-bold text-black">{p.name}</td>
              <td className="p-3 text-amber-900 font-extrabold">{p.rashi}</td>
              <td className="p-3 text-zinc-800">{p.formattedDegree}</td>
              <td className="p-3 text-zinc-800">{p.nakshatra}</td>
              <td className="p-3 text-zinc-600">{p.pada}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
