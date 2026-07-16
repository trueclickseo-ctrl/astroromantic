"use client";

import React, { useState, useRef, useEffect } from "react";

interface WinDialogProps {
  title: string;
  defaultPosition?: { x: number; y: number };
  onClose?: () => void;
  children: React.ReactNode;
  positionMode?: "absolute" | "relative";
}

export default function WinDialog({
  title,
  defaultPosition = { x: 50, y: 80 },
  onClose,
  children,
  positionMode = "absolute"
}: WinDialogProps) {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (positionMode === "relative") return;
    // Only drag from the title bar
    const target = e.target as HTMLElement;
    if (target.closest(".win-titlebar-btn")) return; // Don't drag if clicking close/min button
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    if (positionMode === "relative") return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        top: e.clientY - dragStart.y
      } as any);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, positionMode]);

  const isLoveTheme = 
    title.toLowerCase().includes("love") || 
    title.toLowerCase().includes("compat") || 
    title.toLowerCase().includes("couple") || 
    title.toLowerCase().includes("wedding") || 
    title.toLowerCase().includes("vow") || 
    title.toLowerCase().includes("romance") || 
    title.toLowerCase().includes("romantic") || 
    title.toLowerCase().includes("relationship") ||
    title.toLowerCase().includes("soulmate") ||
    title.toLowerCase().includes("flame") ||
    title.toLowerCase().includes("marriage") ||
    title.toLowerCase().includes("marital") ||
    title.toLowerCase().includes("anniversary") ||
    title.toLowerCase().includes("proposal") ||
    title.toLowerCase().includes("speech") ||
    title.toLowerCase().includes("message") ||
    title.toLowerCase().includes("letter") ||
    title.toLowerCase().includes("wish") ||
    title.toLowerCase().includes("date");

  const displayTitle = isLoveTheme ? `💘 ${title.replace(".exe", "")} 💘` : title;

  // Tiled pink heart wallpaper pattern for dialog interior workspace (SSR-safe, direct URL-encoded format)
  const loveBgDataUri = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='%23f43f5e' fill-opacity='0.09'/></svg>")`;

  return (
    <div
      ref={windowRef}
      style={
        positionMode === "relative"
          ? { position: "relative", zIndex: 10, margin: "0 auto" }
          : {
              position: "absolute",
              left: `${Math.max(10, position.x)}px`,
              top: `${Math.max(50, position.y)}px`,
              zIndex: isDragging ? 50 : 30
            }
      }
      className={`win-outset p-1 w-full max-w-2xl shadow-2xl select-none transition-all duration-300 ${
        isLoveTheme ? "border-rose-500 bg-rose-50/20" : ""
      }`}
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        className={`border-b-2 border-black text-xs px-3 py-2 flex items-center justify-between font-mono select-none relative ${
          positionMode === "relative" ? "cursor-default" : "cursor-move"
        } ${isLoveTheme ? "bg-rose-100 text-rose-900" : "bg-white text-black"}`}
      >
        {/* Left Side: Close square box */}
        <div className="flex items-center space-x-2 win-titlebar-btn">
          {onClose ? (
            <button
              onClick={onClose}
              className={`w-4 h-4 border-2 border-black bg-white transition-all cursor-pointer flex items-center justify-center text-[9px] font-sans font-bold ${
                isLoveTheme ? "hover:bg-rose-500 hover:text-white" : "hover:bg-black hover:text-white"
              }`}
            >
              ✕
            </button>
          ) : (
            <div className="w-4 h-4" />
          )}
        </div>

        {/* Center: Title with stripes around it */}
        <div className="flex-1 px-4 flex items-center space-x-2 pointer-events-none">
          <div className="flex-1 h-2 bg-transparent relative overflow-hidden hidden sm:block">
            <div className="absolute inset-0 flex flex-col justify-between py-[1px]">
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
            </div>
          </div>
          <span className={`font-bold text-xs px-2 select-none tracking-wider whitespace-nowrap ${
            isLoveTheme ? "bg-rose-100 text-rose-800" : "bg-white text-black"
          }`}>
            {displayTitle}
          </span>
          <div className="flex-1 h-2 bg-transparent relative overflow-hidden hidden sm:block">
            <div className="absolute inset-0 flex flex-col justify-between py-[1px]">
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
              <div className={`h-[1px] ${isLoveTheme ? "bg-rose-400" : "bg-black"}`} />
            </div>
          </div>
        </div>

        {/* Right Side: Retro collapse/expand box */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-black bg-white flex items-center justify-center text-[8px] font-bold">
            ▢
          </div>
        </div>
      </div>

      {/* Client Window Space */}
      <div 
        className={`p-4 sm:p-6 border-t-2 border-black relative transition-all duration-300 ${
          isLoveTheme ? "bg-[#fff1f2]" : "bg-white"
        }`}
        style={
          isLoveTheme
            ? {
                backgroundImage: loveBgDataUri,
                backgroundSize: "32px 32px",
                backgroundRepeat: "repeat"
              }
            : {}
        }
      >
        {isLoveTheme && (
          <>
            {/* Small decorative heart vectors in the corners */}
            <span className="absolute top-2 left-2 text-rose-400 text-xs pointer-events-none select-none">♥</span>
            <span className="absolute top-2 right-2 text-rose-400 text-xs pointer-events-none select-none">♥</span>
          </>
        )}
        {children}
      </div>
    </div>
  );
}
