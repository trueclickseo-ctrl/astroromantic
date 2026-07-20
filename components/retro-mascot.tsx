"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function RetroMascot() {
  const { t } = useLanguage();
  const [messageKey, setMessageKey] = useState<string>("mascotIntro");
  const [visible, setVisible] = useState(true);

  // Cycle through some cute retro tips every 15 seconds
  useEffect(() => {
    const tips = [
      "mascotTip1",
      "mascotTip2",
      "mascotTip3",
      "mascotTip4",
      "mascotTip5"
    ];

    const interval = setInterval(() => {
      const randomKey = tips[Math.floor(Math.random() * tips.length)];
      setMessageKey(randomKey);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end space-y-2 select-none">
      {/* Speech Bubble Dialog */}
      <div className="win-outset p-4 max-w-[290px] bg-[#ffffcc] text-black text-sm font-mono border-2 border-zinc-700 relative shadow-lg">
        {/* Close speech bubble button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-1.5 right-1.5 text-[9px] hover:text-red-600 font-bold"
        >
          <X className="w-4 h-4 text-zinc-500" />
        </button>
        <p className="pr-4 leading-relaxed">{(t as any)[messageKey] || t.mascotIntro}</p>
        
        {/* Speech Bubble Arrow Indicator */}
        <div 
          className="absolute bottom-[-8px] right-6 w-3 h-3 bg-[#ffffcc] border-r-2 border-b-2 border-zinc-700 rotate-45"
          style={{ borderTop: "none", borderLeft: "none" }}
        />
      </div>

      {/* Mascot Box */}
      <div className="win-outset p-3 flex items-center justify-center space-x-2 bg-[#d4d0c8] border-2 border-white">
        <span className="text-5xl animate-bounce" style={{ animationDuration: "3s" }}>
          🧙‍♂️
        </span>
        <div className="text-xs font-mono leading-none">
          <span className="font-bold block text-blue-800">Merlin.dll</span>
          <span className="text-zinc-500">Assistant v1.0</span>
        </div>
      </div>
    </div>
  );
}
