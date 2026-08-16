import React from "react";
import type { Metadata } from "next";
import { ASTROLOGY_GUIDES, FOOTER_LINKS } from "@/lib/astrology-guides-config";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, Compass, Sun, FileText, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";

export const metadata: Metadata = {
  title: "All Astrology Guides – Complete Vedic, Western & Report Index | AstroRomantic",
  description: "Browse our complete index of 20 astrological guides covering Vedic Rashis, Western Sun Signs, and Kundli report interpretations.",
  alternates: { canonical: `${SITE_URL}/astrology-guides/` },
  openGraph: {
    title: "All Astrology Guides – Complete Vedic, Western & Report Index | AstroRomantic",
    description: "Browse our complete index of 20 astrological guides covering Vedic Rashis, Western Sun Signs, and Kundli report interpretations.",
    url: `${SITE_URL}/astrology-guides/`,
    siteName: "AstroRomantic",
    type: "website",
  },
};

export default function AllAstrologyGuidesPage() {
  const vedicGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "vedic");
  const westernGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "western");
  const reportGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "reports");

  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12 box-border">
        {/* Header Banner */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Master Astrology Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            All 20 Astrology Guides & Kundli Directories
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Welcome to the complete AstroRomantic knowledge base. Programmatically synced across our platform, explore all 20 guides for Vedic Rashis, Western Sun Signs, and Kundli Report breakdowns.
          </p>
        </header>

        {/* Section 1: Vedic Astrology */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 bg-amber-300 border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000000]">
            <Compass className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold font-mono uppercase text-black">
              Vedic Astrology Guides ({vedicGuides.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vedicGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-200 border-2 border-black rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-black">
                      Vedic
                    </span>
                    {guide.hasFullContent && (
                      <span className="bg-emerald-100 border border-emerald-600 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Full Guide</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-black">{guide.title}</h3>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">{guide.shortDesc}</p>
                </div>
                <a
                  href={`${guide.slug}/`}
                  className="calculator-card-btn w-full py-2.5 px-4 rounded-xl font-mono font-bold text-xs uppercase text-center flex items-center justify-center space-x-2 mt-auto"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Western Astrology */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 bg-amber-300 border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000000]">
            <Sun className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold font-mono uppercase text-black">
              Western Astrology Guides ({westernGuides.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {westernGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-200 border-2 border-black rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-black">
                      Western
                    </span>
                    {guide.hasFullContent && (
                      <span className="bg-emerald-100 border border-emerald-600 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Full Guide</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-black">{guide.title}</h3>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">{guide.shortDesc}</p>
                </div>
                <a
                  href={`${guide.slug}/`}
                  className="calculator-card-btn w-full py-2.5 px-4 rounded-xl font-mono font-bold text-xs uppercase text-center flex items-center justify-center space-x-2 mt-auto"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Report Guides */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 bg-amber-300 border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_#000000]">
            <FileText className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold font-mono uppercase text-black">
              Kundli Report Guides ({reportGuides.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-200 border-2 border-black rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-black">
                      Report Guide
                    </span>
                    {guide.hasFullContent && (
                      <span className="bg-emerald-100 border border-emerald-600 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Full Guide</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-black">{guide.title}</h3>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">{guide.shortDesc}</p>
                </div>
                <a
                  href={`${guide.slug}/`}
                  className="calculator-card-btn w-full py-2.5 px-4 rounded-xl font-mono font-bold text-xs uppercase text-center flex items-center justify-center space-x-2 mt-auto"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Global Nav Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
