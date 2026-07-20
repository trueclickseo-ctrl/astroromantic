"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  calculateLifePath,
  calculatePythagoreanName,
  calculateChaldeanName,
  calculateLoveCompatibility,
  getZodiacSign
} from "@/lib/calculations";
import { Sparkles, Heart, Star, Calendar, User, Zap } from "lucide-react";
import ShareCertificate from "../share-certificate";
import { useLanguage } from "@/lib/i18n";

// --- LIFE PATH CALCULATOR ---
export function LifePathCalculator() {
  const { t } = useLanguage();
  const [birthdate, setBirthdate] = useState("");
  const [result, setResult] = useState<{ lifePath: number; explanation: string } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthdate) return;
    const res = calculateLifePath(birthdate);
    setResult(res);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            {t.birthdate}
          </label>
          <div className="relative">
            <input
              type="date"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg shadow-rose-500/20 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>{t.calculateLifePath}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mt-8 border border-amber-500/25 bg-amber-500/5 rounded-3xl p-6 text-center space-y-4"
          >
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Life Path Number</span>
            <div className="text-6xl sm:text-7xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 text-glow-gold">
              {result.lifePath}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">{result.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- NAME NUMEROLOGY CALCULATOR ---
export function NameNumerologyCalculator() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [result, setResult] = useState<{ destiny: number; soulUrge: number; personality: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const res = calculatePythagoreanName(name);
    setResult(res);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            {t.birthNameLabel}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              required
              placeholder="E.g., John Oliver Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pr-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm padded-input"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          <Zap className="w-4 h-4 text-purple-200" />
          <span>{t.decodeName}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className="border border-white/5 bg-white/5 rounded-2xl p-4 text-center">
              <span className="text-[10px] text-zinc-400 uppercase block mb-1">Destiny</span>
              <div className="text-3xl font-bold font-serif text-amber-400">{result.destiny}</div>
              <span className="text-[10px] text-zinc-500 block mt-1">Outer Persona</span>
            </div>
            <div className="border border-white/5 bg-white/5 rounded-2xl p-4 text-center">
              <span className="text-[10px] text-zinc-400 uppercase block mb-1">Soul Urge</span>
              <div className="text-3xl font-bold font-serif text-rose-400">{result.soulUrge}</div>
              <span className="text-[10px] text-zinc-500 block mt-1">Vowel Vibrations</span>
            </div>
            <div className="border border-white/5 bg-white/5 rounded-2xl p-4 text-center">
              <span className="text-[10px] text-zinc-400 uppercase block mb-1">Personality</span>
              <div className="text-3xl font-bold font-serif text-purple-400">{result.personality}</div>
              <span className="text-[10px] text-zinc-500 block mt-1">Social Mask</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- CHALDEAN NUMEROLOGY CALCULATOR ---
export function ChaldeanCalculator() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [result, setResult] = useState<{ compound: number; single: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const res = calculateChaldeanName(name);
    setResult(res);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            {t.yourName}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              required
              placeholder="E.g., Victoria"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pr-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm padded-input"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-indigo-500 hover:from-amber-600 hover:to-indigo-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          <Star className="w-4 h-4 text-amber-200" />
          <span>{t.decodeChaldean}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-white/5 bg-white/5 rounded-3xl p-6 text-center space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/5 bg-black/20 rounded-2xl p-4">
                <span className="text-[10px] text-zinc-400 uppercase block mb-1">Compound Number</span>
                <div className="text-4xl font-bold font-serif text-amber-400">{result.compound}</div>
              </div>
              <div className="border border-white/5 bg-black/20 rounded-2xl p-4">
                <span className="text-[10px] text-zinc-400 uppercase block mb-1">Single Root Number</span>
                <div className="text-4xl font-bold font-serif text-purple-400">{result.single}</div>
              </div>
            </div>
            <p className="text-zinc-400 text-xs mt-2">
              Chaldean values show how the name resonates phonetically. Compound numbers show sub-surface spiritual vibes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- LOVE COMPATIBILITY CALCULATOR ---
export function LoveCalculatorComponent() {
  const { t } = useLanguage();
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; scale: number }[]>([]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1 || !name2) return;
    const res = calculateLoveCompatibility(name1, name2);
    setResult(res);

    // Trigger floating hearts particles
    const newHearts = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 90 + 5, // percentage x-axis placement
      delay: Math.random() * 0.8,
      scale: Math.random() * 0.6 + 0.6
    }));
    setHearts(newHearts);
    setTimeout(() => {
      setHearts([]);
    }, 2800);
  };

  return (
    <div className={`relative space-y-6 mx-auto transition-all duration-300 ${result !== null ? "max-w-2xl" : "max-w-md"}`}>
      {/* Inline styles for keyframe heart floating animation */}
      <style>{`
        @keyframes floatUpHeart {
          0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-240px) scale(1) rotate(20deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: floatUpHeart 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      {/* Floating Hearts overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        {hearts.map((h) => (
          <div
            key={h.id}
            className="absolute bottom-16 text-rose-500 animate-float-up text-3xl select-none"
            style={{
              left: `${h.x}%`,
              animationDelay: `${h.delay}s`,
              transform: `scale(${h.scale})`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <form onSubmit={handleCalculate} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              {t.yourName}
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-rose-500/50 transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              {t.partnerName}
            </label>
            <input
              type="text"
              required
              placeholder="Partner's Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-rose-500/50 transition-all text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg shadow-pink-500/20 active:scale-95 flex items-center justify-center space-x-2"
        >
          <Heart className="w-4 h-4 text-white fill-white/20 animate-pulse" />
          <span>{t.checkCompatibility}</span>
        </button>
      </form>

      <AnimatePresence>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 border border-rose-500/25 bg-rose-500/5 rounded-3xl p-6 text-center space-y-6"
          >
            <div className="space-y-6">
              <ShareCertificate name1={name1} name2={name2} score={result} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- ZODIAC LOVE CALCULATOR ---
export function ZodiacLoveCalculatorComponent() {
  const { t } = useLanguage();
  const [birthdate1, setBirthdate1] = useState("");
  const [birthdate2, setBirthdate2] = useState("");
  const [result, setResult] = useState<{ sign1: string; sign2: string; compatibility: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthdate1 || !birthdate2) return;
    const sign1 = getZodiacSign(birthdate1);
    const sign2 = getZodiacSign(birthdate2);
    const loveScore = calculateLoveCompatibility(sign1, sign2);
    setResult({ sign1, sign2, compatibility: loveScore });
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
          {/* Row 1: Labels */}
          <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider flex items-end min-h-[24px]">
            {t.birthdate}
          </label>
          <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider flex items-end min-h-[24px]">
            {t.partnerBirthdate}
          </label>

          {/* Row 2: Inputs */}
          <input
            type="date"
            required
            value={birthdate1}
            onChange={(e) => setBirthdate1(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-rose-500/50 transition-all text-sm"
          />
          <input
            type="date"
            required
            value={birthdate2}
            onChange={(e) => setBirthdate2(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-rose-500/50 transition-all text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          <Star className="w-4 h-4 text-amber-200" />
          <span>{t.calculateAstrology}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 border border-white/15 bg-white/5 rounded-3xl p-6 text-center space-y-4"
          >
            <div className="flex justify-around items-center text-sm font-semibold">
              <span className="text-amber-400">{result.sign1}</span>
              <span className="text-zinc-500 font-serif">&amp;</span>
              <span className="text-purple-400">{result.sign2}</span>
            </div>
            <div className="text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-500">
              {result.compatibility}% Match
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm pl-2 pr-2">
              The elemental alignment of {result.sign1} and {result.sign2} indicates a stable, exciting base for romantic connection.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
