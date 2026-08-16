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
    <div className="space-y-6 max-w-md mx-auto font-sans text-black">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
            {t.birthdate}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none z-10" />
            <input
              type="date"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full bg-white border-2 border-black rounded-xl py-3 pl-11 pr-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="calculator-card-btn w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm uppercase text-black flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-black" />
          <span>{t.calculateLifePath}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mt-6 border-3 border-black bg-amber-100 rounded-2xl p-6 text-center space-y-3 shadow-[4px_4px_0px_#000000]"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black block">
              Life Path Number
            </span>
            <div className="text-6xl sm:text-7xl font-extrabold font-mono text-black">
              {result.lifePath}
            </div>
            <p className="text-zinc-800 text-sm font-sans leading-relaxed">{result.explanation}</p>
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
    <div className="space-y-6 max-w-md mx-auto font-sans text-black">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
            {t.birthNameLabel}
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none z-10" />
            <input
              type="text"
              required
              placeholder="E.g., John Oliver Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-2 border-black rounded-xl py-3 pl-11 pr-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="calculator-card-btn w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm uppercase text-black flex items-center justify-center space-x-2"
        >
          <Zap className="w-4 h-4 text-black" />
          <span>{t.decodeName}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 grid grid-cols-3 gap-3"
          >
            <div className="border-2 border-black bg-white rounded-xl p-3 text-center shadow-[3px_3px_0px_#000000]">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-600 block mb-1">Destiny</span>
              <div className="text-3xl font-extrabold font-mono text-black">{result.destiny}</div>
              <span className="text-[10px] font-sans text-zinc-600 block mt-1">Outer Persona</span>
            </div>
            <div className="border-2 border-black bg-white rounded-xl p-3 text-center shadow-[3px_3px_0px_#000000]">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-600 block mb-1">Soul Urge</span>
              <div className="text-3xl font-extrabold font-mono text-black">{result.soulUrge}</div>
              <span className="text-[10px] font-sans text-zinc-600 block mt-1">Vowel Frequency</span>
            </div>
            <div className="border-2 border-black bg-white rounded-xl p-3 text-center shadow-[3px_3px_0px_#000000]">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-600 block mb-1">Personality</span>
              <div className="text-3xl font-extrabold font-mono text-black">{result.personality}</div>
              <span className="text-[10px] font-sans text-zinc-600 block mt-1">Social Mask</span>
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
    <div className="space-y-6 max-w-md mx-auto font-sans text-black">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
            {t.yourName}
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none z-10" />
            <input
              type="text"
              required
              placeholder="E.g., Victoria"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-2 border-black rounded-xl py-3 pl-11 pr-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="calculator-card-btn w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm uppercase text-black flex items-center justify-center space-x-2"
        >
          <Star className="w-4 h-4 text-black" />
          <span>{t.decodeChaldean}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 border-3 border-black bg-amber-100 rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black bg-white rounded-xl p-4 shadow-[2px_2px_0px_#000000]">
                <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase block mb-1">Compound Number</span>
                <div className="text-4xl font-extrabold font-mono text-black">{result.compound}</div>
              </div>
              <div className="border-2 border-black bg-white rounded-xl p-4 shadow-[2px_2px_0px_#000000]">
                <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase block mb-1">Single Root Number</span>
                <div className="text-4xl font-extrabold font-mono text-black">{result.single}</div>
              </div>
            </div>
            <p className="text-zinc-800 text-xs font-sans leading-relaxed mt-2">
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

    const newHearts = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 90 + 5,
      delay: Math.random() * 0.8,
      scale: Math.random() * 0.6 + 0.6
    }));
    setHearts(newHearts);
    setTimeout(() => {
      setHearts([]);
    }, 2800);
  };

  return (
    <div className={`relative space-y-6 mx-auto font-sans text-black transition-all duration-300 ${result !== null ? "max-w-2xl" : "max-w-md"}`}>
      <style>{`
        @keyframes floatUpHeart {
          0% { transform: translateY(0) scale(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.7; }
          100% { transform: translateY(-240px) scale(1) rotate(20deg); opacity: 0; }
        }
        .animate-float-up {
          animation: floatUpHeart 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
              {t.yourName}
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none z-10" />
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full bg-white border-2 border-black rounded-xl py-3 pl-11 pr-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
              {t.partnerName}
            </label>
            <div className="relative">
              <Heart className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none z-10" />
              <input
                type="text"
                required
                placeholder="Partner's Name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="w-full bg-white border-2 border-black rounded-xl py-3 pl-11 pr-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="calculator-card-btn w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm uppercase text-black flex items-center justify-center space-x-2"
        >
          <Heart className="w-4 h-4 text-black fill-black" />
          <span>{t.checkCompatibility}</span>
        </button>
      </form>

      <AnimatePresence>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 border-3 border-black bg-white rounded-2xl p-6 text-center space-y-6 shadow-[4px_4px_0px_#000000]"
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
    <div className="space-y-6 max-w-md mx-auto font-sans text-black">
      <form onSubmit={handleCalculate} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div>
            <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
              {t.birthdate}
            </label>
            <input
              type="date"
              required
              value={birthdate1}
              onChange={(e) => setBirthdate1(e.target.value)}
              className="w-full bg-white border-2 border-black rounded-xl py-3 px-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-2">
              {t.partnerBirthdate}
            </label>
            <input
              type="date"
              required
              value={birthdate2}
              onChange={(e) => setBirthdate2(e.target.value)}
              className="w-full bg-white border-2 border-black rounded-xl py-3 px-4 text-black font-mono outline-none focus:bg-amber-50 transition-all text-sm shadow-[2px_2px_0px_#000000]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="calculator-card-btn w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm uppercase text-black flex items-center justify-center space-x-2"
        >
          <Star className="w-4 h-4 text-black" />
          <span>{t.calculateAstrology}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 border-3 border-black bg-amber-100 rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]"
          >
            <div className="flex justify-around items-center text-base font-mono font-bold text-black">
              <span>{result.sign1}</span>
              <span className="text-zinc-600">&amp;</span>
              <span>{result.sign2}</span>
            </div>
            <div className="text-5xl font-extrabold font-mono text-black">
              {result.compatibility}% Match
            </div>
            <p className="text-zinc-800 text-xs sm:text-sm font-sans leading-relaxed">
              The elemental alignment of {result.sign1} and {result.sign2} indicates a stable, exciting base for romantic connection.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
