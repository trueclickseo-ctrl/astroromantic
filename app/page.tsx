import React from "react";
import { FolderHeart, HardDrive, HeartHandshake, Compass, Users, Sparkles, AlertCircle, FileText } from "lucide-react";

export default function Home() {
  const desktopIcons = [
    {
      name: "Numerology.exe",
      desc: "Cosmic Numbers",
      href: "/numerology",
      icon: <Compass className="w-10 h-10 text-amber-700" />
    },
    {
      name: "Love & Match",
      desc: "Chemistry Analyzer",
      href: "/love",
      icon: <FolderHeart className="w-10 h-10 text-rose-700" />
    },
    {
      name: "Couple Names.txt",
      desc: "Blend Name Combos",
      href: "/couple-names",
      icon: <FileText className="w-10 h-10 text-blue-700" />
    },
    {
      name: "Wedding Planner",
      desc: "Dates & Budgets",
      href: "/wedding",
      icon: <HeartHandshake className="w-10 h-10 text-emerald-700" />
    },
    {
      name: "AI Writer",
      desc: "Claude Vows/Letters",
      href: "/ai-generators",
      icon: <Sparkles className="w-10 h-10 text-purple-700" />
    },
    {
      name: "Recycle Bin",
      desc: "Relationship Health Check",
      href: "/relationship/relationship-health-score",
      icon: <AlertCircle className="w-10 h-10 text-zinc-500" />
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative py-8 px-4">
      {/* SEO H1 — clear topical signal */}
      <h1 className="text-2xl sm:text-3xl font-bold font-mono mb-6 text-black">
        Free Love, Numerology &amp; Astrology Calculators
      </h1>

      {/* Desktop Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl">
        {desktopIcons.map((icon, idx) => (
          <a
            key={idx}
            href={icon.href}
            className="flex flex-col items-center text-center p-3 cursor-pointer group hover:bg-[#000080]/10 border border-transparent hover:border-[#000080]/30 select-none transition-all active:bg-[#000080]/20"
          >
            {/* 3D outline box wrapper for icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-[#d4d0c8] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-zinc-700 border-r-zinc-700 shadow-sm group-hover:scale-105 transition-transform">
              {icon.icon}
            </div>
            <span className="mt-2 text-xs font-bold px-2 py-0.5 font-mono leading-tight desktop-label">
              {icon.name}
            </span>
          </a>
        ))}
      </div>

      {/* Floating Retro Welcome Window (Bottom-Left & Macintosh Classic Style) */}
      <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 w-full max-w-[340px] win-outset p-1 z-10 shadow-xl hidden sm:block">
        {/* Macintosh Title Bar */}
        <div className="bg-white border-b-2 border-black text-black font-bold text-xs px-2 py-1.5 flex items-center justify-between select-none font-mono">
          <div className="w-3.5 h-3.5 border border-black bg-white" />
          <div className="flex-1 px-2 flex items-center space-x-1 pointer-events-none">
            <div className="flex-1 h-1 bg-transparent relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between py-[1px]">
                <div className="h-[1px] bg-black" />
                <div className="h-[1px] bg-black" />
              </div>
            </div>
            <span className="font-bold text-[11px] bg-white px-1 select-none">Welcome</span>
            <div className="flex-1 h-1 bg-transparent relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between py-[1px]">
                <div className="h-[1px] bg-black" />
                <div className="h-[1px] bg-black" />
              </div>
            </div>
          </div>
          <div className="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center text-[7px]">▢</div>
        </div>
        {/* Content Area */}
        <div className="bg-white p-4 text-xs font-mono space-y-3 leading-relaxed text-black">
          <p className="font-bold border-b border-black/10 pb-1 text-sm">AstroRomantic Finder</p>
          <p>
            Double-click or open any folder icon to initialize cosmic calculation scripts.
          </p>
          <p className="text-zinc-500 text-[10px]">
            RAM: 4096K OK<br />
            System: Harmonized
          </p>
        </div>
      </div>
    </div>
  );
}
