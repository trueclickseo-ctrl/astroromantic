import React from "react";
import Metadata from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ArrowLeft, Heart, Briefcase, Activity, Compass, ShieldCheck, Sun, HelpCircle, Star, Users, Award, Zap } from "lucide-react";
import { HOROSCOPE_DATA, ZodiacHoroscope } from "@/lib/horoscope-data";

interface PageProps {
  params: Promise<{ sign: string }>;
}

export async function generateStaticParams() {
  return Object.keys(HOROSCOPE_DATA).map((signKey) => ({
    sign: signKey
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const data = HOROSCOPE_DATA[resolvedParams.sign.toLowerCase()];
  if (!data) return {};

  return {
    title: `${data.name} Horoscope Today — Daily Astrology Prediction | AstroRomantic`,
    description: `Read today's free ${data.name} daily horoscope: detailed astrology predictions for love, career, health, lucky numbers, and planetary transits for ${data.dates}.`,
    alternates: { canonical: `https://www.astroromantic.com/horoscope/${data.id}/` }
  };
}

export default async function DailyHoroscopePage({ params }: PageProps) {
  const resolvedParams = await params;
  const signKey = resolvedParams.sign.toLowerCase();
  const data = HOROSCOPE_DATA[signKey];

  if (!data) {
    notFound();
  }

  const allSigns = Object.values(HOROSCOPE_DATA);

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-zinc-900 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/horoscope/"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#EE5265] hover:text-[#E11D48] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Horoscope Signs</span>
          </Link>
        </div>

        {/* Hero Banner Header Card */}
        <div className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-300 border-2 border-black flex items-center justify-center text-4xl font-extrabold text-black shadow-[3px_3px_0px_#000000]">
                {data.symbol}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-black bg-amber-200 border-2 border-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {data.element} Element • {data.modality} Modality
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-black mt-2">
                  {data.name} Horoscope Today
                </h1>
                <p className="text-xs sm:text-sm text-zinc-700 font-mono font-bold mt-1">{data.dates}</p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1 font-mono">
              <span className="text-xs text-zinc-600 block font-bold uppercase">Ruling Planet</span>
              <span className="text-sm font-extrabold text-black bg-amber-100 border-2 border-black px-2.5 py-0.5 rounded-lg inline-block">{data.rulingPlanet}</span>
            </div>
          </div>

          {/* SECTION 1: HERO FACTS TABLE GRID */}
          <div className="border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_#000000] bg-white">
            <div className="bg-black text-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider">
              {data.name} Astrological Quick Facts
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-black font-mono text-xs">
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Ruling House</span>
                <span className="font-bold text-black">{data.rulingHouse || "1st House"}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Body Part Ruled</span>
                <span className="font-bold text-black">{data.bodyPartRuled || "Head & Face"}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Lucky Color</span>
                <span className="font-bold text-amber-900">{data.luckyColor}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Lucky Number</span>
                <span className="font-extrabold text-rose-600 text-sm">{data.luckyNumber}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Lucky Day</span>
                <span className="font-bold text-black">{data.luckyDay || "Tuesday"}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Birthstone</span>
                <span className="font-bold text-black">{data.birthstone || "Diamond"}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Best Match</span>
                <span className="font-extrabold text-emerald-700">{data.bestMatch}</span>
              </div>
              <div className="bg-white p-3 space-y-0.5">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase">Toughest Match</span>
                <span className="font-bold text-rose-700">{data.toughestMatch || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: TODAY'S COSMIC OVERVIEW (UNTOUCHED DYNAMIC DAILY TRANSIT BLOCK) */}
        {/* ========================================================================= */}
        <div className="bg-amber-100 border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="flex items-center space-x-2 text-black font-mono font-bold text-base uppercase border-b-2 border-black pb-3">
            <Sun className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-extrabold font-mono text-black">Today's Cosmic Overview</h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-900 font-sans leading-relaxed font-medium">
            {data.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white border-2 border-black rounded-xl p-4 space-y-1 shadow-[2px_2px_0px_#000000]">
              <div className="flex items-center space-x-1.5 font-mono font-bold text-xs text-rose-600 uppercase">
                <Heart className="w-4 h-4" />
                <span>Today's Love</span>
              </div>
              <p className="text-xs text-zinc-800 font-sans leading-normal">{data.love}</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4 space-y-1 shadow-[2px_2px_0px_#000000]">
              <div className="flex items-center space-x-1.5 font-mono font-bold text-xs text-amber-700 uppercase">
                <Briefcase className="w-4 h-4" />
                <span>Today's Career</span>
              </div>
              <p className="text-xs text-zinc-800 font-sans leading-normal">{data.career}</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4 space-y-1 shadow-[2px_2px_0px_#000000]">
              <div className="flex items-center space-x-1.5 font-mono font-bold text-xs text-emerald-600 uppercase">
                <Activity className="w-4 h-4" />
                <span>Today's Health</span>
              </div>
              <p className="text-xs text-zinc-800 font-sans leading-normal">{data.health}</p>
            </div>
          </div>

          {/* Planetary Guidance Advice Box */}
          <div className="bg-white border-2 border-black rounded-xl p-4 text-center space-y-1 shadow-[3px_3px_0px_#000000]">
            <span className="text-[11px] font-mono font-bold text-amber-900 uppercase tracking-wider block">Planetary Guidance</span>
            <p className="text-sm font-mono font-bold text-black italic">
              "{data.cosmicAdvice}"
            </p>
          </div>
        </div>

        {/* SECTION 3: ABOUT [SIGN] INTRO */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3">
            {data.aboutTitle}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-zinc-800 font-sans leading-relaxed">
            {data.aboutProse.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SECTION 4: PERSONALITY TRAITS MATRIX */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3">
            {data.name} Personality Traits
          </h2>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
            <table className="w-full text-xs font-mono text-left text-black bg-white">
              <thead className="bg-amber-200 border-b-2 border-black text-black font-bold">
                <tr>
                  <th className="p-3 border-r-2 border-black w-1/2">Key Strengths</th>
                  <th className="p-3 w-1/2">Shadow Side & Challenges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {data.personalityTraits.map((trait, idx) => (
                  <tr key={idx} className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold text-emerald-800">
                      ✓ {trait.strength}
                    </td>
                    <td className="p-3 text-rose-800">
                      ⚠ {trait.shadow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-zinc-800 font-sans leading-relaxed">
            {data.personalityProse}
          </p>
        </section>

        {/* SECTION 5: LOVE & RELATIONSHIPS + 12-SIGN COMPATIBILITY CHART */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3">
            {data.name} in Love & Relationships
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-800 font-sans leading-relaxed">
            {data.loveProse.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Wants vs Struggles Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FFF8F3] border-2 border-black rounded-2xl p-4 space-y-2 shadow-[3px_3px_0px_#000000]">
              <div className="flex items-center space-x-1.5 font-mono font-bold text-xs text-black uppercase">
                <Heart className="w-4 h-4 text-rose-600" />
                <span>What {data.name} Wants in Love</span>
              </div>
              <p className="text-xs text-zinc-800 font-sans leading-relaxed">
                {data.loveWants}
              </p>
            </div>

            <div className="bg-[#FFF8F3] border-2 border-black rounded-2xl p-4 space-y-2 shadow-[3px_3px_0px_#000000]">
              <div className="flex items-center space-x-1.5 font-mono font-bold text-xs text-black uppercase">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>What {data.name} Struggles With</span>
              </div>
              <p className="text-xs text-zinc-800 font-sans leading-relaxed">
                {data.loveStruggles}
              </p>
            </div>
          </div>

          {/* Full 12-Sign Compatibility Chart Table */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold font-mono text-black">
              Full {data.name} 12-Sign Compatibility Chart
            </h3>

            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-xs font-mono text-left text-black bg-white">
                <thead className="bg-amber-200 border-b-2 border-black text-black font-bold">
                  <tr>
                    <th className="p-3 w-1/4">Partner Sign</th>
                    <th className="p-3 w-1/4">Compatibility</th>
                    <th className="p-3 w-1/2">Why It Works / Challenge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {data.compatibilityChart.map((row, idx) => (
                    <tr key={idx} className="hover:bg-amber-50">
                      <td className="p-3 font-bold text-black">{row.sign}</td>
                      <td className="p-3 text-amber-700 font-extrabold text-sm tracking-widest">{row.stars}</td>
                      <td className="p-3 text-zinc-700 font-sans">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 6: CAREER & MONEY */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3 flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-amber-700" />
            <span>{data.name} Career & Money</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-zinc-800 font-sans leading-relaxed">
            {data.careerProse.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SECTION 7: HEALTH & WELLNESS */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3 flex items-center space-x-2">
            <Activity className="w-6 h-6 text-emerald-600" />
            <span>{data.name} Health & Wellness</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-zinc-800 font-sans leading-relaxed">
            {data.healthProse.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SECTION 8: MAN VS. WOMAN COMPARISON TABLE */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3 flex items-center space-x-2">
            <Users className="w-6 h-6 text-black" />
            <span>{data.name} Man vs. {data.name} Woman</span>
          </h2>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
            <table className="w-full text-xs font-mono text-left text-black bg-white">
              <thead className="bg-amber-200 border-b-2 border-black text-black font-bold">
                <tr>
                  <th className="p-3 w-1/4">Aspect</th>
                  <th className="p-3 w-3/8 border-r border-black/20">{data.name} Man</th>
                  <th className="p-3 w-3/8">{data.name} Woman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {data.genderComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50">
                    <td className="p-3 font-bold text-black">{row.category}</td>
                    <td className="p-3 text-zinc-800 font-sans border-r border-black/10">{row.man}</td>
                    <td className="p-3 text-zinc-800 font-sans">{row.woman}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 9: FAMOUS CELEBRITIES LIST */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3 flex items-center space-x-2">
            <Award className="w-6 h-6 text-amber-600" />
            <span>Famous {data.name} Celebrities</span>
          </h2>
          <div className="flex flex-wrap gap-2 pt-2">
            {data.famousPeople.map((person, idx) => (
              <span
                key={idx}
                className="bg-amber-100 border-2 border-black rounded-xl px-3.5 py-1.5 text-xs font-mono font-bold text-black shadow-[2px_2px_0px_#000000]"
              >
                ★ {person}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 10: FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <h2 className="text-2xl font-extrabold font-mono text-black border-b-2 border-black pb-3 flex items-center space-x-2">
            <HelpCircle className="w-6 h-6 text-black" />
            <span>{data.name} Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4 divide-y divide-zinc-200">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2 font-sans">
                <h3 className="text-base font-bold font-mono text-black">
                  Q: {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Switch Zodiac Bar */}
        <div className="bg-white border-3 border-black rounded-3xl p-6 shadow-[4px_4px_0px_#000000] space-y-4 text-center">
          <h3 className="text-base font-bold font-mono text-black">Explore Other Zodiac Signs</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSigns.map((s) => (
              <Link
                key={s.id}
                href={`/horoscope/${s.id}/`}
                className={`py-1.5 px-3.5 rounded-xl text-xs font-mono font-bold transition-all border-2 border-black ${
                  s.id === data.id
                    ? "bg-black text-white shadow-[2px_2px_0px_#000000]"
                    : "bg-white text-black hover:bg-amber-300"
                }`}
              >
                {s.symbol} {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
