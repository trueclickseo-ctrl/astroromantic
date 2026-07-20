"use client";

import React from "react";
import { useLanguage, LanguageCode } from "@/lib/i18n";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-3 border-black rounded-xl flex items-center justify-between px-4 py-2 text-xs font-bold select-none z-40 shadow-[4px_4px_0px_#000000] font-mono">
      <div className="flex items-center space-x-6">
        <a
          href="/"
          className="hover:bg-black hover:text-white px-2 py-0.5 transition-all text-sm font-bold font-mono outline-none cursor-pointer"
        >
           AstroRomantic
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          <a href="/numerology" className="hover:bg-black hover:text-white px-2 py-0.5">{t.menuNumerology}</a>
          <a href="/love" className="hover:bg-black hover:text-white px-2 py-0.5">{t.menuLove}</a>
          <a href="/couple-names" className="hover:bg-black hover:text-white px-2 py-0.5">{t.menuCoupleNames}</a>
          <a href="/wedding" className="hover:bg-black hover:text-white px-2 py-0.5">{t.menuWedding}</a>
          <a href="/relationship" className="hover:bg-black hover:text-white px-2 py-0.5">{t.menuRelationship}</a>
          <a href="/ai-generators" className="hover:bg-black hover:text-white px-2 py-0.5">{t.menuAi}</a>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as LanguageCode)}
          className="bg-white border-2 border-black rounded px-1.5 py-0.5 text-xs font-bold font-mono outline-none cursor-pointer text-black"
        >
          <option value="en">🇬🇧 EN</option>
          <option value="es">🇪🇸 ES</option>
          <option value="pt">🇵🇹 PT</option>
          <option value="sv">🇸🇪 SV</option>
          <option value="no">🇳🇴 NO</option>
          <option value="it">🇮🇹 IT</option>
          <option value="fr">🇫🇷 FR</option>
          <option value="nl">🇳🇱 NL</option>
          <option value="de">🇩🇪 DE</option>
          <option value="da">🇩🇰 DA</option>
          <option value="fi">🇫🇮 FI</option>
          <option value="el">🇬🇷 EL</option>
          <option value="tr">🇹🇷 TR</option>
        </select>
        <a
          href="/admin"
          className="win-btn text-xs font-bold font-mono"
          style={{ padding: "4px 14px" }}
        >
          {t.controlPanel}
        </a>
      </div>
    </header>
  );
}
