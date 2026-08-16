import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { ASTROLOGY_GUIDES } from "@/lib/astrology-guides-config";

const SITE_URL = "https://www.astroromantic.com";

export const metadata: Metadata = {
  title: "Astrology & Relationship Blog – Insights & Articles | AstroRomantic",
  description: "Read our latest articles on Vedic astrology, relationship dynamics, numerology frequency, and celestial timing.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: "Astrology & Relationship Blog – Insights & Articles | AstroRomantic",
    description: "Read our latest articles on Vedic astrology, relationship dynamics, numerology frequency, and celestial timing.",
    url: `${SITE_URL}/blog/`,
    siteName: "AstroRomantic",
    type: "website",
  },
};

export default function BlogPage() {
  const featuredArticles = ASTROLOGY_GUIDES.filter((g) => g.hasFullContent);

  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology & Relationships Journal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            AstroRomantic Blog & Deep Dives
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto leading-relaxed">
            In-depth analysis of birth chart planetary alignments, synastry chemistry, numerological vibrations, and celestial timing.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-mono uppercase text-black">
            Featured Editorial Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="bg-amber-200 border-2 border-black rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-black">
                    {article.columnLabel}
                  </span>
                  <h3 className="text-lg font-bold font-mono text-black">{article.title} Guide</h3>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">{article.shortDesc}</p>
                </div>
                <a
                  href={`${article.slug}/`}
                  className="calculator-card-btn w-full py-2.5 px-4 rounded-xl font-mono font-bold text-xs uppercase text-center flex items-center justify-center space-x-2 mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
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
