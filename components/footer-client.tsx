"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";

export default function FooterClient() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-3 border-black rounded-xl flex items-center justify-between px-4 py-2 text-xs font-bold select-none shadow-[4px_4px_0px_#000000] font-mono">
      <div className="flex items-center space-x-2">
        <span>© 2026 AstroRomantic</span>
        <span className="text-zinc-400">|</span>
        <a href="/about/" className="hover:underline">{t.about}</a>
        <span className="text-zinc-400">|</span>
        <a href="/privacy-policy/" className="hover:underline">{t.privacy}</a>
        <span className="text-zinc-400">|</span>
        <a href="/contact/" className="hover:underline">{t.contact}</a>
      </div>
      <div className="font-mono">
        {new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
      </div>
    </footer>
  );
}
