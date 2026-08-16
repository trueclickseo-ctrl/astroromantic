"use client";

import React from "react";
import { ASTROLOGY_GUIDES, FOOTER_LINKS } from "@/lib/astrology-guides-config";
import { Sparkles, Compass, Sun, FileText, ArrowRight, BookOpen } from "lucide-react";

export default function ExploreAstrologyPanel() {
  const vedicGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "vedic");
  const westernGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "western");
  const reportGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "reports");

  return (
    <div className="w-full bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] box-border space-y-6">
      {/* Panel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-3 border-black pb-4 gap-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-amber-300 border-2 border-black rounded-xl text-black">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-mono text-black uppercase tracking-tight">
              Explore Astrology
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Comprehensive guides for Vedic Rashis, Western Sun Signs, and Kundli Reports
            </p>
          </div>
        </div>
        <a
          href="/astrology-guides/"
          className="inline-flex items-center space-x-1.5 bg-black text-white font-mono text-xs font-bold px-3.5 py-2 rounded-xl border-2 border-black hover:bg-amber-300 hover:text-black transition-colors self-start sm:self-auto"
        >
          <span>All 20 Guides</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Vedic */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 bg-amber-200 border-2 border-black rounded-lg px-3 py-1.5 font-mono text-xs font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Vedic Astrology</span>
          </div>
          <div className="space-y-2">
            {vedicGuides.map((guide) => (
              <a
                key={guide.id}
                href={guide.slug.endsWith('/') ? guide.slug : `${guide.slug}/`}
                className="group block bg-[#f4f3ef] border-2 border-black rounded-xl p-3 hover:bg-amber-100 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0px_#000000]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-black group-hover:text-black">
                    {guide.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-zinc-600 font-sans line-clamp-1 mt-0.5">
                  {guide.shortDesc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Western */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 bg-amber-200 border-2 border-black rounded-lg px-3 py-1.5 font-mono text-xs font-bold uppercase text-black">
            <Sun className="w-4 h-4 text-black" />
            <span>Western Astrology</span>
          </div>
          <div className="space-y-2">
            {westernGuides.map((guide) => (
              <a
                key={guide.id}
                href={guide.slug.endsWith('/') ? guide.slug : `${guide.slug}/`}
                className="group block bg-[#f4f3ef] border-2 border-black rounded-xl p-3 hover:bg-amber-100 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0px_#000000]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-black group-hover:text-black">
                    {guide.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-zinc-600 font-sans line-clamp-1 mt-0.5">
                  {guide.shortDesc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Report Guides */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 bg-amber-200 border-2 border-black rounded-lg px-3 py-1.5 font-mono text-xs font-bold uppercase text-black">
            <FileText className="w-4 h-4 text-black" />
            <span>Report Guides</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
            {reportGuides.map((guide) => (
              <a
                key={guide.id}
                href={guide.slug.endsWith('/') ? guide.slug : `${guide.slug}/`}
                className="group block bg-[#f4f3ef] border-2 border-black rounded-xl p-2.5 hover:bg-amber-100 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0px_#000000]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-black group-hover:text-black">
                    {guide.title}
                  </span>
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="border-t-2 border-black pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold">
        <div className="flex items-center space-x-2 text-zinc-700">
          <BookOpen className="w-4 h-4 text-black" />
          <span>ASTROLOGY DIRECTORY</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.slug}
              href={link.slug.endsWith('/') ? link.slug : `${link.slug}/`}
              className="bg-white border-2 border-black rounded-lg px-3 py-1.5 text-black hover:bg-amber-300 transition-colors shadow-[2px_2px_0px_#000000]"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
