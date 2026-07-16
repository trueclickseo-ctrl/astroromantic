"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Link as LinkIcon,
  RefreshCw,
  Compass,
  CheckCircle,
  Zap,
  Globe,
  Heart,
  Palette,
  Grid
} from "lucide-react";

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const count = 22;

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 110;
      }
    };
    resizeCanvas();

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (canvas.width || 300),
        y: Math.random() * 160,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Radial background simulation dot grid (matching theme)
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      for (let x = 12; x < canvas.width; x += 24) {
        for (let y = 12; y < canvas.height; y += 24) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw lines
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.fillStyle = "#000000";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    // Extra timeout resize just to ensure width is fetched after DOM mounting
    const t = setTimeout(resizeCanvas, 100);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="w-full bg-transparent overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-[110px] bg-transparent" />
    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("analytics");
  const [selectedPattern, setSelectedPattern] = useState("default");
  
  // 8x8 Initial Heart Grid Pattern for Desktop Wallpaper Designer
  const [grid, setGrid] = useState<boolean[]>([
    false, false, false, false, false, false, false, false,
    false, true,  true,  false, false, true,  true,  false,
    true,  true,  true,  true,  true,  true,  true,  true,
    true,  true,  true,  true,  true,  true,  true,  true,
    false, true,  true,  true,  true,  true,  true,  false,
    false, false, true,  true,  true,  true,  false, false,
    false, false, false, true,  true,  false, false, false,
    false, false, false, false, false, false, false, false
  ]);

  const applyCustomPattern = (newGrid: boolean[]) => {
    setSelectedPattern("custom");
    let rects = "";
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (newGrid[y * 8 + x]) {
          rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="#000000" opacity="0.12"/>`;
        }
      }
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">${rects}</svg>`;
    const base64 = typeof window !== "undefined" ? window.btoa(svg) : "";
    const dataUri = `url("data:image/svg+xml;base64,${base64}")`;
    if (typeof window !== "undefined") {
      document.body.style.backgroundImage = dataUri;
      document.body.style.backgroundSize = "24px 24px";
      document.body.style.backgroundColor = "#f4f3ef";
    }
  };

  const applyPattern = (pattern: string) => {
    setSelectedPattern(pattern);
    if (typeof window !== "undefined") {
      if (pattern === "default") {
        document.body.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.15) 1.5px, transparent 1.5px)";
        document.body.style.backgroundSize = "24px 24px";
        document.body.style.backgroundColor = "#f4f3ef";
      } else if (pattern === "hearts") {
        document.body.style.backgroundImage = "radial-gradient(#f43f5e 1.5px, transparent 1.5px)";
        document.body.style.backgroundSize = "20px 20px";
        document.body.style.backgroundColor = "#fff1f2";
      } else if (pattern === "stars") {
        document.body.style.backgroundImage = "radial-gradient(#eab308 1.5px, transparent 1.5px)";
        document.body.style.backgroundSize = "28px 28px";
        document.body.style.backgroundColor = "#09090b";
      } else if (pattern === "teal") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#008080";
      }
    }
  };

  const tabs = [
    { id: "analytics", label: "Analytics Dashboard", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "themes", label: "Desktop Themes", icon: <Palette className="w-4 h-4" /> },
    { id: "designer", label: "Pattern Designer", icon: <Grid className="w-4 h-4" /> },
    { id: "allocations", label: "System Allocations", icon: <Globe className="w-4 h-4" /> },
    { id: "links", label: "Internal Link Manager", icon: <LinkIcon className="w-4 h-4" /> }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar Nav */}
      <aside className="w-full md:w-64 flex-shrink-0 glass-panel rounded-3xl p-6 flex flex-col space-y-2 h-fit">
        <div className="pb-4">
          <span className="font-serif text-lg font-bold text-amber-400">Admin Controls</span>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">SEO & CMS Operations</p>
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </aside>

      {/* Main Panel Content */}
      <main className="w-full md:w-[680px] flex-shrink-0 glass-panel rounded-3xl p-6 sm:p-8 h-[480px] overflow-hidden">
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-zinc-100 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-amber-400" />
              <span>Real-Time Platform Performance</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border border-white/5 bg-black/20 rounded-2xl p-5">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Total Pageviews</span>
                <div className="text-3xl font-serif font-bold text-zinc-100 mt-2">142,394</div>
                <span className="text-xs text-emerald-400 font-semibold mt-1 block">+12.4% this week</span>
              </div>
              <div className="border border-white/5 bg-black/20 rounded-2xl p-5">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Tool Completions</span>
                <div className="text-3xl font-serif font-bold text-zinc-100 mt-2">89,204</div>
                <span className="text-xs text-emerald-400 font-semibold mt-1 block">62.6% conversion rate</span>
              </div>
              <div className="border border-white/5 bg-black/20 rounded-2xl p-5">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">AI Generations</span>
                <div className="text-3xl font-serif font-bold text-zinc-100 mt-2">1,942</div>
                <span className="text-xs text-purple-400 font-semibold mt-1 block">Cost: $4.82 (Claude)</span>
              </div>
            </div>
            <div className="border border-white/5 bg-black/20 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-zinc-300">Top Pages</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-amber-400 font-mono">/numerology/life-path-calculator</span>
                  <span className="text-zinc-400">42,904 Views</span>
                </div>
                <div className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-rose-400 font-mono">/love/love-calculator</span>
                  <span className="text-zinc-400">38,102 Views</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-purple-400 font-mono">/ai-generators/love-letter-generator</span>
                  <span className="text-zinc-400">22,019 Views</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "themes" && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-zinc-100 flex items-center space-x-2 border-b border-white/5 pb-2">
              <Palette className="w-5 h-5 text-amber-400" />
              <span>Desktop Themes</span>
            </h2>
            <p className="text-xs text-zinc-400">
              Select a custom background theme for your AstroLove desktop workspace.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => applyPattern("default")}
                className={`p-4 rounded-2xl border-2 text-left font-mono transition-all ${
                  selectedPattern === "default"
                    ? "border-amber-400 bg-amber-500/10 text-zinc-100"
                    : "border-white/5 bg-black/20 text-zinc-400 hover:border-white/20"
                }`}
              >
                <div className="w-8 h-8 rounded bg-[#f4f3ef] border border-black/10 flex items-center justify-center text-black text-xs font-bold mb-2">
                  ▦
                </div>
                <div className="text-xs font-bold">Parchment Grid</div>
                <span className="text-[9px] block text-zinc-500">System Default</span>
              </button>

              <button
                onClick={() => applyPattern("hearts")}
                className={`p-4 rounded-2xl border-2 text-left font-mono transition-all ${
                  selectedPattern === "hearts"
                    ? "border-rose-400 bg-rose-500/10 text-zinc-100"
                    : "border-white/5 bg-black/20 text-zinc-400 hover:border-white/20"
                }`}
              >
                <div className="w-8 h-8 rounded bg-[#fff1f2] border border-black/10 flex items-center justify-center text-rose-500 text-xs font-bold mb-2">
                  ♥
                </div>
                <div className="text-xs font-bold">Romantic Rose</div>
                <span className="text-[9px] block text-zinc-500">Pink Heart Grid</span>
              </button>

              <button
                onClick={() => applyPattern("stars")}
                className={`p-4 rounded-2xl border-2 text-left font-mono transition-all ${
                  selectedPattern === "stars"
                    ? "border-yellow-400 bg-yellow-500/10 text-zinc-100"
                    : "border-white/5 bg-black/20 text-zinc-400 hover:border-white/20"
                }`}
              >
                <div className="w-8 h-8 rounded bg-[#09090b] border border-white/10 flex items-center justify-center text-yellow-400 text-xs font-bold mb-2">
                  ★
                </div>
                <div className="text-xs font-bold">Midnight Stars</div>
                <span className="text-[9px] block text-zinc-500">Celestial Dark</span>
              </button>

              <button
                onClick={() => applyPattern("teal")}
                className={`p-4 rounded-2xl border-2 text-left font-mono transition-all ${
                  selectedPattern === "teal"
                    ? "border-emerald-400 bg-emerald-500/10 text-zinc-100"
                    : "border-white/5 bg-black/20 text-zinc-400 hover:border-white/20"
                }`}
              >
                <div className="w-8 h-8 rounded bg-[#008080] border border-white/10 flex items-center justify-center text-white text-xs font-bold mb-2">
                  ■
                </div>
                <div className="text-xs font-bold">Classic Teal OS</div>
                <span className="text-[9px] block text-zinc-500">90s Solid Cyan</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "designer" && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-zinc-100 flex items-center space-x-2 border-b border-white/5 pb-2">
              <Palette className="w-5 h-5 text-amber-400" />
              <span>Pattern Designer</span>
            </h2>
            <p className="text-[11px] text-zinc-400 leading-tight">
              Design a custom 8x8 repeating pixel desktop wallpaper. Click grid squares to toggle pixels, then click Apply.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              {/* The Grid Editor */}
              <div className="grid grid-cols-8 gap-[3px] p-2 bg-[#ffffff] border-2 border-black rounded-xl">
                {grid.map((val, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const newGrid = [...grid];
                      newGrid[idx] = !newGrid[idx];
                      setGrid(newGrid);
                    }}
                    className={`w-6 h-6 border transition-all ${
                      val 
                        ? "bg-black border-black" 
                        : "bg-[#fcfbf9] border-black/10 hover:bg-black/5"
                    }`}
                  />
                ))}
              </div>

              {/* Controls and Previews */}
              <div className="flex-1 space-y-3 w-full text-center sm:text-left">
                <div className="text-[11px] text-zinc-400 font-mono">
                  Currently active: <span className="font-bold text-amber-400 capitalize">{selectedPattern}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => applyCustomPattern(grid)}
                    className="win-btn py-2 px-6 text-xs font-bold bg-[#ffffff] border-2 border-black active:translate-y-[1px]"
                    style={{ borderWidth: "2px" }}
                  >
                    Apply Custom Pattern
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const cleared = Array(64).fill(false);
                      setGrid(cleared);
                    }}
                    className="px-4 py-1.5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200 text-[10px] font-mono rounded-xl transition-all"
                  >
                    Clear Canvas
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "allocations" && (
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-zinc-100 flex items-center space-x-2 border-b border-white/5 pb-1">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>System Allocations</span>
            </h2>
            
            <div className="flex items-center space-x-4 bg-black/20 p-3 rounded-xl border border-white/5">
              <Heart className="w-10 h-10 text-rose-600 fill-rose-600 animate-pulse select-none flex-shrink-0" />
              <div className="space-y-0.5 flex-1 text-left">
                <h3 className="font-bold text-sm text-zinc-100 leading-tight">AstroLove Finder</h3>
                <p className="text-[9px] text-zinc-500 font-mono">System Software v7.1.3</p>
                <p className="text-[9px] text-zinc-500 font-mono">Astro-Calculations Engine v1.0.4</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center font-bold uppercase text-[9px] text-zinc-400">
                <span>System Allocations:</span>
                <span>4096K Total</span>
              </div>

              <div className="space-y-2 text-[10px] text-left">
                {/* Pageviews Row */}
                <div className="space-y-0.5">
                  <div className="flex justify-between font-mono text-zinc-300">
                    <span>Pageviews (Capacity: 200k)</span>
                    <span className="font-bold">142,394 Views</span>
                  </div>
                  {/* Custom Retro Progress Bar */}
                  <div className="w-full h-3 border border-white/10 bg-black/20 rounded-full overflow-hidden p-[1px] flex">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style={{ width: "71%" }} />
                  </div>
                </div>

                {/* Calculations Row */}
                <div className="space-y-0.5">
                  <div className="flex justify-between font-mono text-zinc-300">
                    <span>Calculations (Capacity: 100k)</span>
                    <span className="font-bold">89,204 Queries</span>
                  </div>
                  {/* Custom Retro Progress Bar */}
                  <div className="w-full h-3 border border-white/10 bg-black/20 rounded-full overflow-hidden p-[1px] flex">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style={{ width: "89%" }} />
                  </div>
                </div>

                {/* AI Letters Row */}
                <div className="space-y-0.5">
                  <div className="flex justify-between font-mono text-zinc-300">
                    <span>AI Vibe Generator (Capacity: 2.5k)</span>
                    <span className="font-bold">1,942 Letters</span>
                  </div>
                  {/* Custom Retro Progress Bar */}
                  <div className="w-full h-3 border border-white/10 bg-black/20 rounded-full overflow-hidden p-[1px] flex">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style={{ width: "77%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "links" && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-zinc-100 flex items-center space-x-2 border-b border-white/5 pb-2">
              <LinkIcon className="w-5 h-5 text-amber-400" />
              <span>Internal Link Health</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] text-zinc-500 uppercase block">Total Internal Links</span>
                <span className="text-2xl font-bold font-serif text-zinc-100 mt-1 block">412</span>
              </div>
              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] text-zinc-500 uppercase block">Broken Links / Redirects</span>
                <span className="text-2xl font-bold font-serif text-emerald-400 mt-1 block">0</span>
              </div>
            </div>

            <ConstellationCanvas />

            <div className="space-y-2">
              <div className="flex justify-between items-center text-[11px] border-b border-white/5 py-2">
                <span className="text-zinc-400">/numerology/life-path-calculator &rarr; /numerology/name-numerology-calculator</span>
                <span className="text-emerald-400 font-semibold flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1" /> Active</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
