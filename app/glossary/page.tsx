import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, BookOpen } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";

export const metadata: Metadata = {
  title: "Astrology & Numerology Glossary – Terms & Definitions | AstroRomantic",
  description: "Explore our comprehensive glossary of Vedic astrology terms, Rashi definitions, Kundli houses, and numerology terminology.",
  alternates: { canonical: `${SITE_URL}/glossary/` },
  openGraph: {
    title: "Astrology & Numerology Glossary – Terms & Definitions | AstroRomantic",
    description: "Explore our comprehensive glossary of Vedic astrology terms, Rashi definitions, Kundli houses, and numerology terminology.",
    url: `${SITE_URL}/glossary/`,
    siteName: "AstroRomantic",
    type: "website",
  },
};

const glossaryTerms = [
  { term: "Ayanamsa", def: "The longitudinal difference between the tropical and sidereal zodiacs (~24 degrees)." },
  { term: "Bhava", def: "The Sanskrit term for house in Vedic astrology, representing 12 specific life domains." },
  { term: "Dasha", def: "Vedic planetary time period system governing the timing of life events." },
  { term: "Janma Rashi", def: "The Moon sign at the exact moment of birth, representing the emotional nature." },
  { term: "Kundli", def: "The traditional Vedic birth chart mapping planetary positions across 12 houses." },
  { term: "Lagna", def: "The Ascendant sign rising on the eastern horizon at birth, establishing house order." },
  { term: "Nakshatra", def: "One of 27 lunar mansions in Vedic astronomy, spanning 13°20' each." },
  { term: "Navamsha (D9)", def: "The 9th divisional chart used to analyze soul potential and marriage compatibility." },
  { term: "Navagraha", def: "The nine major planets/grahas in Vedic astrology (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu)." },
  { term: "Rashi", def: "The Sanskrit term for one of the 12 zodiac signs (Mesha to Meena)." },
  { term: "Sade Sati", def: "The 7.5-year Saturn transit through the 12th, 1st, and 2nd houses from the natal Moon." },
  { term: "Sidereal Zodiac", def: "The astronomical zodiac system anchored to physical constellations, used in Vedic astrology." }
];

export default function GlossaryPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology & Numerology Lexicon</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Astrology & Numerology Glossary
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto leading-relaxed">
            Essential terms, Sanskrit concepts, and astronomical definitions used throughout AstroRomantic reports and calculation tools.
          </p>
        </header>

        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="flex items-center space-x-3 border-b-3 border-black pb-3">
            <BookOpen className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-2xl font-bold font-mono text-black uppercase">
              Key Astrological Terms
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryTerms.map((t, idx) => (
              <div key={idx} className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[2px_2px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-rose-600">{t.term}</h3>
                <p className="text-xs sm:text-sm text-zinc-800 font-sans leading-relaxed">{t.def}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
