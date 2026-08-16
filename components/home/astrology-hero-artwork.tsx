"use client";

import React, { useState } from "react";

export function AstrologyHeroArtwork() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = Math.max(-6, Math.min(6, (e.clientX - centerX) / 45));
    const offsetY = Math.max(-6, Math.min(6, (e.clientY - centerY) / 45));
    setParallax({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-none mx-auto flex items-center justify-center select-none min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] bg-transparent border-0 shadow-none"
    >
      {/* Embedded Keyframe Animations for Smooth 360-Degree Continuous Rotation */}
      <style>{`
        @keyframes spinClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinCounterClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* WHEEL 1: MAIN CHAMPAGNE GOLD ZODIAC WHEEL (BORDERLESS, TRANSPARENT BG)   */}
      {/* Position: Center-Left, Width 64%                                         */}
      {/* ========================================================================= */}
      <div
        className="absolute left-[0%] sm:left-[2%] top-[4%] sm:top-[6%] w-[58%] sm:w-[62%] lg:w-[66%] aspect-square rounded-full pointer-events-none flex items-center justify-center transition-transform duration-300 ease-out z-10"
        style={{ transform: `translate3d(${parallax.x * 0.5}px, ${parallax.y * 0.5}px, 0)` }}
      >
        <div
          className="w-full h-full rounded-full border-0 shadow-none bg-transparent overflow-hidden"
          style={{ animation: "spinClockwise 50s linear infinite" }}
        >
          <img
            src="/images/zodiac-wheel-gold.jpg"
            alt="Main Champagne Gold Zodiac Wheel"
            className="w-full h-full object-contain rounded-full mix-blend-multiply block opacity-95"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* WHEEL 2: TOP-RIGHT VINTAGE SUN ZODIAC WHEEL (BORDERLESS, COUNTER-SPIN)    */}
      {/* Position: Top-Right, Width 40%                                           */}
      {/* ========================================================================= */}
      <div
        className="absolute right-[0%] top-[0%] w-[34%] sm:w-[38%] lg:w-[42%] aspect-square rounded-full pointer-events-none flex items-center justify-center transition-transform duration-300 ease-out z-20"
        style={{ transform: `translate3d(${parallax.x * 0.7}px, ${parallax.y * 0.7}px, 0)` }}
      >
        <div
          className="w-full h-full rounded-full border-0 shadow-none bg-transparent overflow-hidden"
          style={{ animation: "spinCounterClockwise 80s linear infinite" }}
        >
          <img
            src="/images/vintage-zodiac-wheel.jpg"
            alt="Vintage Sun Zodiac Chart Wheel"
            className="w-full h-full object-contain rounded-full mix-blend-multiply block opacity-90"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* WHEEL 3: BOTTOM-RIGHT TECHNICAL NATAL ASPECT STAR WEB WHEEL (BORDERLESS)  */}
      {/* Position: Bottom-Right, Width 42%                                        */}
      {/* ========================================================================= */}
      <div
        className="absolute right-[0%] bottom-[0%] w-[36%] sm:w-[40%] lg:w-[44%] aspect-square rounded-full pointer-events-none flex items-center justify-center transition-transform duration-300 ease-out z-20"
        style={{ transform: `translate3d(${parallax.x * 0.8}px, ${parallax.y * 0.8}px, 0)` }}
      >
        <div
          className="w-full h-full rounded-full border-0 shadow-none bg-transparent overflow-hidden"
          style={{ animation: "spinClockwise 65s linear infinite" }}
        >
          <img
            src="/images/natal-aspect-web-wheel.jpg"
            alt="Technical Aspect Star Web Natal Wheel"
            className="w-full h-full object-contain rounded-full mix-blend-multiply block opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
