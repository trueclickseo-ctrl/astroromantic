"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wand2, RefreshCw, Send, Check, Copy, User } from "lucide-react";

interface GenericCalculatorProps {
  slug: string;
}

const loveLanguageQuestions = [
  {
    id: 1,
    question: "How do you prefer your partner to express appreciation?",
    options: [
      { key: "A", text: "Saying kind, encouraging, and supportive words." },
      { key: "B", text: "Spending uninterrupted, quality time together." },
      { key: "C", text: "Bringing you small, thoughtful gifts or surprises." },
      { key: "D", text: "Helping out with chores or daily tasks without asking." }
    ]
  },
  {
    id: 2,
    question: "When you want to show someone you love them, you tend to:",
    options: [
      { key: "A", text: "Give them heartfelt compliments or write sweet notes." },
      { key: "B", text: "Plan a distraction-free date night or walk together." },
      { key: "C", text: "Buy or craft something unique that matches their taste." },
      { key: "D", text: "Perform helpful deeds like cooking or washing up." }
    ]
  },
  {
    id: 3,
    question: "What makes you feel most secure in a relationship?",
    options: [
      { key: "A", text: "Frequent verbal reassurance and active communication." },
      { key: "B", text: "Shared hobbies and deep conversations." },
      { key: "C", text: "Tangible tokens of affection that represent memories." },
      { key: "D", text: "Knowing they always back you up in practical daily life." }
    ]
  }
];

const relationshipHealthQuestions = [
  {
    id: 1,
    question: "How do you and your partner typically handle disagreements?",
    options: [
      { key: "A", text: "We sit down immediately, listen actively, and resolve it." },
      { key: "B", text: "We take temporary space to cool down, then talk calmly." },
      { key: "C", text: "We tend to sweep matters under the rug to avoid conflict." },
      { key: "D", text: "Discussions quickly escalate into arguments or blame games." }
    ]
  },
  {
    id: 2,
    question: "How frequently do you express appreciation or gratitude to each other?",
    options: [
      { key: "A", text: "Every day, even for the smallest gestures." },
      { key: "B", text: "A few times a week during meaningful moments." },
      { key: "C", text: "Only on special events, birthdays, or anniversaries." },
      { key: "D", text: "Very rarely; we take each other for granted." }
    ]
  },
  {
    id: 3,
    question: "How aligned are your long-term goals and values (finances, family, lifestyle)?",
    options: [
      { key: "A", text: "Completely aligned; we are building our future together." },
      { key: "B", text: "Mostly aligned, with healthy room for compromise." },
      { key: "C", text: "Quite different, but we try not to think about it." },
      { key: "D", text: "Conflict-heavy; we have major disagreements on direction." }
    ]
  }
];

function getQuizQuestions(slug: string) {
  if (slug.includes("health") || slug.includes("score")) {
    return relationshipHealthQuestions;
  }
  return loveLanguageQuestions;
}

export function GenericCalculatorComponent({ slug }: GenericCalculatorProps) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Record<number, string>>({ 1: "A", 2: "A", 3: "A" });
  const [result, setResult] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (key: string, val: string) => {
    setInputs(prev => ({ ...prev, [key]: val }));
  };

  const handleRun = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      let output: string | string[] = "";
      if (slug.includes("combiner") || (slug.includes("ship") && !slug.includes("relationship"))) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const mid1 = Math.ceil(name1.length / 2);
        const mid2 = Math.ceil(name2.length / 2);
        output = [
          name1.substring(0, mid1) + name2.substring(mid2),
          name2.substring(0, mid2) + name1.substring(mid1),
          name1.substring(0, 3) + name2.substring(name2.length - 3),
          name2.substring(0, 3) + name1.substring(name1.length - 3)
        ];
      } else if (slug.includes("username")) {
        const n1 = (inputs.name1 || "kashif").toLowerCase().replace(/\s/g, "");
        const n2 = (inputs.name2 || "maheen").toLowerCase().replace(/\s/g, "");
        output = [
          `${n1}_${n2}`,
          `${n2}_${n1}`,
          `${n1}x${n2}`,
          `${n2}x${n1}`,
          `${n1}.${n2}`,
          `team_${n1}${n2}`
        ];
      } else if (slug.includes("hashtag")) {
        const n1 = (inputs.name1 || "Alex").replace(/\s/g, "");
        const n2 = (inputs.name2 || "Taylor").replace(/\s/g, "");
        output = [
          `#${n1}And${n2}`,
          `#${n1}Plus${n2}`,
          `#${n1}Lovin${n2}`,
          `#${n1}Hearts${n2}`,
          `#Team${n1}${n2}`
        ];
      } else if (slug.includes("nickname")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.trim();
        const n2 = name2.trim();
        const mid1 = Math.ceil(n1.length / 2);
        const mid2 = Math.ceil(n2.length / 2);
        output = [
          n1.substring(0, mid1) + n2.substring(mid2),
          n2.substring(0, mid2) + n1.substring(mid1),
          n1.substring(0, Math.max(3, mid1)) + "y",
          n2.substring(0, Math.max(3, mid2)) + "y",
          "Lil " + n1.substring(0, Math.max(3, mid1)),
          n1.substring(0, Math.max(3, mid1)) + "-kins"
        ];
      } else if (slug.includes("marriage")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);
        
        const financial = 70 + (score % 26);
        const lifestyle = 65 + ((score + 5) % 31);
        const family = 75 + ((score + 10) % 21);
        const overall = Math.round((financial + lifestyle + family) / 3);

        output = [
          `Marriage Readiness: ${overall}%`,
          `Financial Alignment: ${financial}%`,
          `Lifestyle Harmony: ${lifestyle}%`,
          `Family Planning Sync: ${family}%`
        ];
      } else if (slug.includes("soulmate") || slug.includes("flame")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);
        const finalScore = 60 + (score % 41);

        let connectionType = "Twin Flame";
        let desc = "Divine Mirror: Souls resonance across lifetimes.";
        if (finalScore >= 90) {
          connectionType = "Divine Twin Flame";
          desc = "Perfect Mirror: Energetic match transcending limits.";
        } else if (finalScore >= 80) {
          connectionType = "Karmic Soulmate";
          desc = "Nurturing Connection: Learning lessons together.";
        }

        output = [
          `Cosmic Affinity: ${finalScore}%`,
          `Spiritual Connection: ${connectionType}`,
          `Soul Vibrations: ${desc}`
        ];
      } else if (slug.includes("relationship") || slug.includes("compatibility")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);

        const comm = 70 + (score % 27);
        const trust = 65 + ((score + 3) % 31);
        const values = 72 + ((score + 7) % 25);
        const overall = Math.round((comm + trust + values) / 3);

        output = [
          `Relationship Strength: ${overall}%`,
          `Communication: ${comm}%`,
          `Trust & Transparency: ${trust}%`,
          `Shared Core Values: ${values}%`
        ];
      } else if (slug.includes("percentage") || slug.includes("love")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);
        const finalScore = 50 + (score % 46);

        let status = "Sweet Harmony";
        let desc = "A highly affectionate connection filled with laughter, support, and appreciation.";
        if (finalScore >= 90) {
          status = "Soulmate Connection";
          desc = "Perfect planetary alignment! Your bond is deep, intuitive, and extremely resilient.";
        } else if (finalScore < 70) {
          status = "Growing Compatibility";
          desc = "Good chemistry, but takes dedicated mutual compromise and active listening to sync.";
        }

        output = [
          `Love Compatibility: ${finalScore}%`,
          `Match Status: ${status}`,
          `Vibe: ${desc}`
        ];
      } else if (slug.includes("quiz") || slug.includes("test") || slug.includes("health") || slug.includes("score") || slug.includes("check")) {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        getQuizQuestions(slug).forEach((q) => {
          const ans = answers[q.id] || "A";
          counts[ans as keyof typeof counts] = (counts[ans as keyof typeof counts] || 0) + 1;
        });
        
        let topType = "A";
        let maxVal = -1;
        Object.entries(counts).forEach(([k, v]) => {
          if (v > maxVal) {
            maxVal = v;
            topType = k;
          }
        });

        let primary = "Words of Affirmation";
        let desc = "You feel most loved when receiving verbal compliments, words of appreciation, and encouragement.";
        if (topType === "B") {
          primary = "Quality Time";
          desc = "You feel most loved when your partner gives you their full, undivided attention with active listening.";
        } else if (topType === "C") {
          primary = "Receiving Gifts";
          desc = "You feel most cherished when receiving thoughtful tokens, surprises, or hand-made items.";
        } else if (topType === "D") {
          primary = "Acts of Service";
          desc = "You feel most loved when your partner performs helpful tasks, eases your workload, or supports chores.";
        }

        output = [
          `Your Dominant Style: ${primary}`,
          `Analysis: ${desc}`,
          `Compatibility Index: 92% Harmony`
        ];
      } else if (slug.includes("lucky") || slug.includes("number") || slug.includes("destiny")) {
        const name = inputs.name1 || inputs.keyword || "Astro";
        const cleanStr = name.toLowerCase().replace(/[^a-z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          sum += (cleanStr.charCodeAt(i) - 96);
        }
        const num = (sum % 9) || 9;
        const colors = ["Gold", "Silver", "Red", "Blue", "Green", "Yellow", "Violet", "Orange", "Rose"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        output = [
          `Lucky Vibrational Number: ${num}`,
          `Auspicious Color: ${colors[num - 1] || "Gold"}`,
          `Power Day of the Week: ${days[num - 1] || "Sunday"}`
        ];
      } else if (slug.includes("budget")) {
        const total = parseFloat(inputs.budget) || 10000;
        const cur = inputs.currency || "$";
        output = [
          `Venue & Catering (50%): ${cur}${(total * 0.50).toLocaleString()}`,
          `Decor & Flowers (15%): ${cur}${(total * 0.15).toLocaleString()}`,
          `Photography & Video (12%): ${cur}${(total * 0.12).toLocaleString()}`,
          `Attire & Rings (10%): ${cur}${(total * 0.10).toLocaleString()}`,
          `Music & Entertainment (8%): ${cur}${(total * 0.08).toLocaleString()}`,
          `Contingency Fund (5%): ${cur}${(total * 0.05).toLocaleString()}`
        ];
      } else if (slug.includes("countdown") || slug.includes("wedding-date")) {
        const dateVal = inputs.date ? new Date(inputs.date) : new Date();
        const diffTime = dateVal.getTime() - new Date().getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 0) {
          output = `There are exactly ${diffDays} days left until your wedding milestone!`;
        } else {
          output = `Your selected date has passed ${Math.abs(diffDays)} days ago!`;
        }
      } else if (slug.includes("duration")) {
        const dateVal = inputs.date ? new Date(inputs.date) : new Date();
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - dateVal.getTime());
        const totalSecs = Math.floor(diffTime / 1000);
        const totalMins = Math.floor(totalSecs / 60);
        const totalHrs = Math.floor(totalMins / 60);
        const totalDays = Math.floor(totalHrs / 24);
        const totalWeeks = Math.floor(totalDays / 7);
        const remainingDays = totalDays % 7;

        output = [
          `Total Days: ${totalDays.toLocaleString()} Days`,
          `Total Weeks: ${totalWeeks.toLocaleString()} Weeks, ${remainingDays} Days`,
          `Total Hours: ${totalHrs.toLocaleString()} Hours`,
          `Total Minutes: ${totalMins.toLocaleString()} Mins`,
          `Total Seconds: ${totalSecs.toLocaleString()} Secs`
        ];
      } else if (slug.includes("anniversary")) {
        const dateVal = inputs.date ? new Date(inputs.date) : new Date();
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - dateVal.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);
        const remainingDays = diffDays % 30;

        const traditionalGifts: Record<number, string> = {
          1: "Paper", 2: "Cotton", 3: "Leather", 4: "Fruit/Flowers", 5: "Wood",
          6: "Iron", 7: "Copper", 8: "Bronze", 9: "Pottery", 10: "Tin/Aluminum",
          15: "Crystal", 20: "China", 25: "Silver", 30: "Pearl", 40: "Ruby", 50: "Gold"
        };
        const gift = traditionalGifts[years] ? `, Traditional Gift: ${traditionalGifts[years]}` : "";

        output = [
          `Time Elapsed: ${years} Y, ${months} M, ${remainingDays} D`,
          `Days Celebrated: ${diffDays.toLocaleString()} Days`,
          `Next Milestone: Year ${years + 1}${gift}`
        ];
      } else if (slug.includes("destiny") || slug.includes("soul-urge") || slug.includes("personality")) {
        const name = inputs.name1 || "Astro";
        const cleanStr = name.toUpperCase().replace(/[^A-Z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          const charCode = cleanStr.charCodeAt(i) - 64;
          const val = (charCode % 9) || 9;
          sum += val;
        }
        const root = (sum % 9) || 9;

        if (slug.includes("destiny")) {
          output = [
            `Destiny Number: ${root}`,
            `Core Path: Vibrates with the energy of Number ${root}.`,
            `Vibe: Focuses on fulfilling your cosmic mission.`
          ];
        } else if (slug.includes("soul-urge")) {
          let vowelSum = 0;
          const vowels = "AEIOU";
          for (let i = 0; i < cleanStr.length; i++) {
            if (vowels.includes(cleanStr[i])) {
              const charCode = cleanStr.charCodeAt(i) - 64;
              vowelSum += (charCode % 9) || 9;
            }
          }
          const vowelRoot = (vowelSum % 9) || 9;
          output = [
            `Soul Urge Number: ${vowelRoot}`,
            `Inner Desire: Heart's yearnings resonate with Number ${vowelRoot}.`,
            `Vibe: Reflects your true inner motivations.`
          ];
        } else {
          let consSum = 0;
          const vowels = "AEIOU";
          for (let i = 0; i < cleanStr.length; i++) {
            if (!vowels.includes(cleanStr[i])) {
              const charCode = cleanStr.charCodeAt(i) - 64;
              consSum += (charCode % 9) || 9;
            }
          }
          const consRoot = (consSum % 9) || 9;
          output = [
            `Personality Number: ${consRoot}`,
            `Outer Lens: Social mask aligns with Number ${consRoot}.`,
            `Vibe: Describes how the world perceives your energy.`
          ];
        }
      } else {
        const inputStr = inputs.keyword || inputs.name1 || inputs.name2 || "AstroRomantic";
        const cleanStr = inputStr.toLowerCase().replace(/[^a-z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          sum += (cleanStr.charCodeAt(i) - 96);
        }
        const numberVal = (sum % 9) || 9;
        
        let interpretation = "Carries a vibration of balance, family values, and harmonious connection.";
        if (numberVal === 1) interpretation = "Carries a vibration of pioneering leadership, initiative, and independence.";
        else if (numberVal === 2) interpretation = "Carries a vibration of cooperative diplomacy, intuitive sensitivity, and partnership.";
        else if (numberVal === 3) interpretation = "Carries a vibration of creative expression, social charm, and joyful optimism.";
        else if (numberVal === 4) interpretation = "Carries a vibration of structural security, practical organization, and dedication.";
        else if (numberVal === 5) interpretation = "Carries a vibration of adaptive freedom, dynamic expansion, and adventurous energy.";
        else if (numberVal === 7) interpretation = "Carries a vibration of analytical introspection, spiritual research, and truth-seeking.";
        else if (numberVal === 8) interpretation = "Carries a vibration of power, financial execution, and material success.";
        else if (numberVal === 9) interpretation = "Carries a vibration of humanitarian concern, completion, and deep universal empathy.";

        output = [
          `Vibrational Index: Number ${numberVal}`,
          `Primary Influence: ${interpretation}`,
          `State: Fully Synced & Harmonized`
        ];
      }
      setResult(output);
      setLoading(false);
    }, 800);
  };

  const isQuiz = slug.includes("quiz") || slug.includes("test") || slug.includes("health") || slug.includes("score") || slug.includes("check");
  const isSingleName = !isQuiz && (slug.includes("destiny") || slug.includes("soul-urge") || slug.includes("personality") || slug.includes("baby") || slug.includes("lucky"));
  const isNameBased = !isQuiz && !isSingleName && (slug.includes("name") || slug.includes("combiner") || slug.includes("hashtag") || slug.includes("username") || slug.includes("soulmate") || slug.includes("flame") || slug.includes("compatibility") || slug.includes("percentage") || slug.includes("love") || slug.includes("marriage"));
  const isDateBased = !isQuiz && (slug.includes("countdown") || slug.includes("duration") || slug.includes("anniversary") || slug.includes("wedding-date"));
  const isBudgetBased = !isQuiz && slug.includes("budget");

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <form onSubmit={handleRun} className="space-y-4">
        {isNameBased && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">First Name</label>
              <input
                type="text"
                required
                placeholder="Name 1"
                onChange={(e) => handleInputChange("name1", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">Second Name</label>
              <input
                type="text"
                required
                placeholder="Name 2"
                onChange={(e) => handleInputChange("name2", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              />
            </div>
          </div>
        )}

        {isSingleName && (
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              {slug.includes("baby")
                ? "Enter Baby Name to Analyze"
                : slug.includes("lucky")
                ? "Enter Your First Name"
                : "Enter Your Full Birth Name"}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                required
                placeholder={slug.includes("baby") ? "E.g., Oliver" : slug.includes("lucky") ? "E.g., John" : "E.g., John Oliver Smith"}
                onChange={(e) => handleInputChange("name1", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pr-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm padded-input"
              />
            </div>
          </div>
        )}

        {isDateBased && (
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Select the Important Date</label>
            <input
              type="date"
              required
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        )}

        {isBudgetBased && (
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">Total Budget</label>
              <input
                type="number"
                required
                min="1"
                placeholder="e.g. 20000"
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">Currency</label>
              <select
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                defaultValue="$"
              >
                <option value="$">USD ($)</option>
                <option value="£">GBP (£)</option>
                <option value="€">EUR (€)</option>
                <option value="₹">INR (₹)</option>
                <option value="¥">JPY (¥)</option>
              </select>
            </div>
          </div>
        )}

        {!isNameBased && !isDateBased && !isBudgetBased && !isQuiz && !isSingleName && (
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Enter Keyword or Input</label>
            <input
              type="text"
              placeholder="Type here..."
              onChange={(e) => handleInputChange("keyword", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        )}

        {isQuiz && (
          <div className="space-y-4">
            {getQuizQuestions(slug).map((q) => (
              <div key={q.id} className="border border-white/10 rounded-2xl p-4 bg-white/5 space-y-2 text-left">
                <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">Question {q.id} of 3</span>
                <p className="text-zinc-200 text-xs font-semibold leading-relaxed">{q.question}</p>
                <div className="space-y-1.5 pt-1">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.key }))}
                        className={`w-full text-left text-xs py-2 px-3 border rounded-xl font-mono transition-all leading-normal ${
                          selected
                            ? "bg-amber-500 text-black border-amber-500 font-bold"
                            : "bg-white/5 text-zinc-300 border-white/15 hover:bg-white/10"
                        }`}
                      >
                        {opt.key}) {opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-indigo-500 hover:from-amber-600 hover:to-indigo-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin text-white" /> : <Sparkles className="w-4 h-4 text-amber-200" />}
          <span>Generate Results</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 border-2 border-black bg-[#fcfbf9] p-3 text-center space-y-3 shadow-md"
          >
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Generated Options</span>
            {Array.isArray(result) ? (
              <div className="flex flex-col gap-1.5 text-xs font-mono text-left max-w-sm mx-auto">
                {result.map((r, idx) => (
                  <div key={idx} className="border border-black/25 bg-black/[0.02] py-1.5 px-3 flex items-center justify-between text-black">
                    <span className="font-semibold text-black select-all">{r}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black text-xs font-mono leading-relaxed max-w-sm mx-auto border border-black/25 bg-black/[0.02] p-2.5 select-all">{result}</p>
            )}
            
            {/* Copy Button */}
            <div className="pt-1 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const textToCopy = Array.isArray(result) ? result.join("\n") : result;
                  navigator.clipboard.writeText(textToCopy);
                  alert("Results copied to clipboard!");
                }}
                className="win-btn text-[9px] py-1 px-3 font-bold flex items-center justify-center space-x-1 transition-all text-black bg-white"
                style={{ borderWidth: "2px" }}
              >
                <Copy className="w-3 h-3 text-black" />
                <span>Copy Results</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- AI GENERATORS COMPONENT ---
export function AiGeneratorComponent({ slug }: { slug: string }) {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [tone, setTone] = useState("romantic");
  const [keywords, setKeywords] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    // Client-side template generation (static export compatible)
    const fallbackTemplates: Record<string, string[]> = {
      "love-letter-generator": [
        `My Dearest {recipient},\n\nEvery day with you feels like a chapter in a story I never want to end. When I think of {keywords}, I am reminded of how lucky I am to have you. Your presence fills my days with meaning, warmth, and light.\n\nWith all my love,\n{sender}`,
        `Dearest {recipient},\n\nI wanted to write you something that captures what my heart feels every time you enter the room. I cherish our moments together, especially {keywords}. You are my anchor, my joy, and my favorite part of every day.\n\nForever yours,\n{sender}`
      ],
      "romantic-message-generator": [
        `Good morning, {recipient}! Just thinking of {keywords} and sending you a little warmth to start your day. Love you! - {sender}`,
        `Hey {recipient}, just wanted to remind you how much you mean to me. {keywords} is on my mind, and I can't wait to see you later. - {sender}`
      ],
      "wedding-vow-generator": [
        `I, {sender}, take you, {recipient}, to be my partner in life. I promise to support your dreams, laugh with you during the good times, and stand by you in the storms. Our memories of {keywords} will always be the bedrock of our union. I choose you today and every day.`,
        `{recipient}, from the moment we shared {keywords}, I knew our paths were bound. I vow to love you without reservation, to respect you, and to grow with you through all the years ahead.`
      ],
      "anniversary-wish-generator": [
        `Happy Anniversary, {recipient}! It's been an incredible journey since we started. Thinking back to {keywords} makes me appreciate how far we've come. Here's to many more years of laughter and love. - {sender}`,
        `To my favorite person, {recipient}: Happy Anniversary. Thank you for being my rock, my partner, and the one who laughs at my jokes. I'll always cherish {keywords}. With love, {sender}`
      ],
      "proposal-speech-generator": [
        `{recipient}, when we first met, I never imagined how completely you would change my world. Looking back at {keywords}, I realize that every step of my life led me to you. I want to build a lifetime of these moments with you. Will you marry me?`,
        `{recipient}, you make me laugh harder, think deeper, and love more than I ever thought possible. Our journey, especially {keywords}, has been the greatest adventure of my life. I want this adventure to last forever. Will you do me the honor of becoming my spouse?`
      ]
    };

    // Simulate a small delay for UX
    await new Promise((r) => setTimeout(r, 800));

    const templates = fallbackTemplates[slug] || fallbackTemplates["love-letter-generator"];
    const senderStr = sender || "Me";
    const recipientStr = recipient || "Love";
    const keywordsStr = keywords || "the laughter we share";
    const seed = (senderStr.length + recipientStr.length + keywordsStr.length) % templates.length;
    let result = templates[seed];

    result = result
      .replace(/{recipient}/g, recipientStr)
      .replace(/{sender}/g, senderStr)
      .replace(/{keywords}/g, keywordsStr);

    setOutput(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleGenerate} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">From</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">To</label>
            <input
              type="text"
              required
              placeholder="Their Name"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            >
              <option value="romantic">Romantic & Deep</option>
              <option value="playful">Playful & Cute</option>
              <option value="classic">Poetic & Classic</option>
              <option value="vows">Heartfelt Vow</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">Custom Memory/Detail</label>
            <input
              type="text"
              placeholder="E.g., coffee dates, warm smile"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin text-white" /> : <Wand2 className="w-4 h-4 text-amber-200 animate-pulse" />}
          <span>Generate AI Masterpiece</span>
        </button>
      </form>

      <AnimatePresence>
        {output && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-amber-500/25 bg-amber-500/5 rounded-3xl p-6 text-left space-y-4"
          >
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block text-center">AI Crafted Result</span>
            <div className="text-zinc-200 text-xs sm:text-sm whitespace-pre-line leading-relaxed font-serif bg-black/20 p-4 rounded-xl border border-white/5">
              {output}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
