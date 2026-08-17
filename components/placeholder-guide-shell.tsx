/* AWAITING FINAL COPY */
import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, Clock, ArrowRight, ChevronRight, BookOpen } from "lucide-react";
import { ASTROLOGY_GUIDES } from "@/lib/astrology-guides-config";

interface PlaceholderGuideShellProps {
  id: string;
}

export function generatePlaceholderMetadata(id: string): Metadata {
  const item = ASTROLOGY_GUIDES.find((g) => g.id === id);
  if (!item) return {};

  const title = `${item.title} Guide — ${item.columnLabel} Astrology | AstroRomantic`;
  const description = item.shortDesc;
  const url = `https://www.astroromantic.com${item.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "AstroRomantic",
      type: "article",
    },
  };
}

export default function PlaceholderGuideShell({ id }: PlaceholderGuideShellProps) {
  /* AWAITING FINAL COPY */
  const item = ASTROLOGY_GUIDES.find((g) => g.id === id);
  if (!item) return null;

  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-zinc-600">
          <a href="/" className="hover:underline">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href="/astrology-guides/" className="hover:underline">Astrology Guides</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-black">{item.columnLabel}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-rose-600">{item.title}</span>
        </nav>

        {/* Hero Card Shell */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>{item.columnLabel} Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            {item.title} Guide
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto leading-relaxed">
            {item.shortDesc}
          </p>
        </header>

        {/* Placeholder Notice Box */}
        {/* AWAITING FINAL COPY */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 border-2 border-black rounded-full text-black mx-auto">
            <Clock className="w-6 h-6 text-black" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-black">
            Full {item.title} Article Coming Soon
          </h2>
          <p className="text-sm text-zinc-700 max-w-xl mx-auto font-sans leading-relaxed">
            Our team of expert Vedic and Western astrologers is finalizing the rich, in-depth guide for <strong>{item.title}</strong>. Check back shortly for complete chart analysis, tables, FAQs, and step-by-step instructions.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="/astrology-guides/"
              className="inline-flex items-center space-x-2 bg-black text-white font-mono text-xs font-bold px-4 py-2.5 rounded-xl border-2 border-black hover:bg-amber-300 hover:text-black transition-colors"
            >
              <span>Explore All Available Astrology Guides</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Explore Astrology Navigation Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
