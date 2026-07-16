"use client";

import React, { useEffect } from "react";
import { playClick, playStartup } from "@/lib/sounds";

export default function RetroAudioInitializer() {
  useEffect(() => {
    // 1. Play startup chime on first load (user interaction might be needed by browser, so it will play on first click)
    const playInitial = () => {
      playStartup();
      document.removeEventListener("click", playInitial);
    };
    document.addEventListener("click", playInitial);

    // 2. Play satisfying click sound on button/link interactions
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        playClick();
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", playInitial);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return null;
}
