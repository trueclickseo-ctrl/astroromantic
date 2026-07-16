"use client";

import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-3 border-black rounded-xl flex items-center justify-between px-4 py-2 text-xs font-bold select-none z-40 shadow-[4px_4px_0px_#000000] font-mono">
      <div className="flex items-center space-x-6">
        <a
          href="/"
          className="hover:bg-black hover:text-white px-2 py-0.5 transition-all text-sm font-bold font-mono outline-none cursor-pointer"
        >
           AstroLove
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          <a href="/numerology" className="hover:bg-black hover:text-white px-2 py-0.5">Numerology</a>
          <a href="/love" className="hover:bg-black hover:text-white px-2 py-0.5">Love &amp; Compatibility</a>
          <a href="/couple-names" className="hover:bg-black hover:text-white px-2 py-0.5">Couple Names</a>
          <a href="/wedding" className="hover:bg-black hover:text-white px-2 py-0.5">Wedding Tools</a>
          <a href="/relationship" className="hover:bg-black hover:text-white px-2 py-0.5">Relationship Quizzes</a>
          <a href="/ai-generators" className="hover:bg-black hover:text-white px-2 py-0.5">AI Generators</a>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href="/admin"
          className="win-btn text-xs font-bold font-mono"
          style={{ padding: "4px 14px" }}
        >
          Control Panel
        </a>
      </div>
    </header>
  );
}
