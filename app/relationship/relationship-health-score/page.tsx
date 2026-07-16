"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, FileText, Folder, Music, Archive, RefreshCw, CheckCircle, ArrowLeft, Share2 } from "lucide-react";
import { GenericCalculatorComponent } from "@/components/calculators/generic";

interface TrashItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
  size: string;
}

export default function RecycleBinPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TrashItem | null>(null);
  const [items, setItems] = useState<TrashItem[]>([
    {
      id: "exes",
      name: "ex_memories.zip",
      desc: "Archived chat logs, screenshots of messages from 3 AM, and unsent essays. Better left compressed and locked.",
      icon: <Archive className="w-8 h-8 text-amber-700" />,
      size: "48.2 MB"
    },
    {
      id: "promises",
      name: "broken_promises.dmg",
      desc: "A corrupted disk image. Cannot mount. Error: Trust partition not found and integrity check failed.",
      icon: <Folder className="w-8 h-8 text-zinc-600" />,
      size: "1.2 GB"
    },
    {
      id: "pickups",
      name: "cheesy_pickups.txt",
      desc: "Contains: 'Are you a magician? Because whenever I look at you, everyone else disappears.' Purged for social safety.",
      icon: <FileText className="w-8 h-8 text-blue-700" />,
      size: "14 KB"
    },
    {
      id: "dates",
      name: "awkward_date.wav",
      desc: "120 minutes of silent chewing, nervous laughing, and talking about the weather. Audio codec is unplayable.",
      icon: <Music className="w-8 h-8 text-purple-700" />,
      size: "180 MB"
    }
  ]);
  const [emptying, setEmptying] = useState(false);
  const [emptied, setEmptied] = useState(false);

  const handleEmptyTrash = () => {
    setEmptying(true);
    setTimeout(() => {
      setItems([]);
      setSelectedItem(null);
      setEmptying(false);
      setEmptied(true);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 space-y-8 flex-1 flex flex-col items-center">
      {showQuiz ? (
        <div className="w-full space-y-4">
          <button
            onClick={() => setShowQuiz(false)}
            className="win-btn flex items-center space-x-2 text-xs font-mono self-start bg-white text-black"
            style={{ borderWidth: "2px" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Recycle Bin</span>
          </button>
          
          <div className="win-outset p-1 w-full max-w-md mx-auto">
            {/* Window title */}
            <div className="bg-white border-b-2 border-black text-black font-bold text-[10px] px-2 py-1.5 flex items-center justify-between select-none font-mono">
              <a
                href="/"
                className="w-3.5 h-3.5 border border-black bg-white hover:bg-black hover:text-white flex items-center justify-center text-[8px] font-sans font-bold cursor-pointer transition-all"
              >
                ✕
              </a>
              <span className="font-bold text-[11px] bg-white px-1">Relationship Health Score.exe</span>
              <div className="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center text-[7px]">▢</div>
            </div>
            
            {/* Embed actual quiz */}
            <div className="bg-[#fcfbf9] p-6 text-black">
              <GenericCalculatorComponent slug="relationship-health-score" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl win-outset p-1 shadow-2xl bg-[#ffffff]">
          {/* Macintosh Header */}
          <div className="bg-white border-b-2 border-black text-black font-bold text-xs px-2 py-1.5 flex items-center justify-between select-none font-mono">
            <a
              href="/"
              className="w-3.5 h-3.5 border border-black bg-white hover:bg-black hover:text-white flex items-center justify-center text-[8px] font-sans font-bold cursor-pointer transition-all"
            >
              ✕
            </a>
            <span className="font-bold text-[11px] bg-white px-1">Recycle Bin</span>
            <div className="w-3.5 h-3.5 border border-black bg-white flex items-center justify-center text-[7px]">▢</div>
          </div>

          <div className="p-6 text-black space-y-6 font-mono">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <div className="flex items-center space-x-2">
                <Trash2 className="w-6 h-6 text-zinc-700" />
                <h2 className="font-bold text-sm">Purged Relationship Baggage ({items.length} items)</h2>
              </div>
              {items.length > 0 && (
                <button
                  onClick={handleEmptyTrash}
                  disabled={emptying}
                  className="win-btn text-[10px] py-1 px-3 bg-red-100 hover:bg-red-600 hover:text-white border-2 border-black text-black transition-all flex items-center space-x-1"
                  style={{ borderWidth: "2px" }}
                >
                  {emptying ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Trash2 className="w-3 h-3" />}
                  <span>{emptying ? "Emptying..." : "Empty Trash"}</span>
                </button>
              )}
            </div>

            {emptied && items.length === 0 && (
              <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 text-center bg-zinc-50 space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-xs text-zinc-800">Trash Emptied Successfully!</h3>
                <p className="text-[10px] text-zinc-500 max-w-xs mx-auto">
                  All bad relationship vibes and emotional baggage have been purged permanently. System space is now clear.
                </p>
              </div>
            )}

            {items.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`flex flex-col items-center text-center p-3 rounded-lg border-2 transition-all group ${
                      selectedItem?.id === item.id
                        ? "border-black bg-blue-100/50 shadow-sm"
                        : "border-transparent hover:border-black/20 hover:bg-zinc-50"
                    }`}
                  >
                    {item.icon}
                    <span className="mt-2 text-[10px] font-bold block truncate max-w-full">{item.name}</span>
                    <span className="text-[8px] text-zinc-400 block">{item.size}</span>
                  </button>
                ))}
              </div>
            ) : !emptied ? (
              <p className="text-xs text-zinc-400 text-center py-8">The Recycle Bin is empty.</p>
            ) : null}

            {/* Selected item inspector */}
            <AnimatePresence>
              {selectedItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="win-inset p-4 bg-zinc-50 space-y-2 border-2 border-dashed border-black/30 rounded-xl"
                >
                  <div className="flex justify-between items-center text-[10px] border-b border-black/10 pb-1">
                    <span className="font-bold text-zinc-700">File Inspector: {selectedItem.name}</span>
                    <span className="text-zinc-500 font-semibold">{selectedItem.size}</span>
                  </div>
                  <p className="text-[11px] text-zinc-800 leading-relaxed">{selectedItem.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Promo block to test current health */}
            <div className="border-t-2 border-black pt-6 text-center space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-xs uppercase tracking-wider">Check Current Relationship Vibe</h3>
                <p className="text-[10px] text-zinc-500 max-w-md mx-auto leading-relaxed">
                  Wondering if your current relationship is heading towards the Recycle Bin? Run the diagnostics test to assess communication and trust.
                </p>
              </div>

              <button
                onClick={() => setShowQuiz(true)}
                className="win-btn text-xs py-2 px-6 font-bold bg-white border-2 border-black transition-all shadow-md animate-pulse"
                style={{ borderWidth: "2px" }}
              >
                Run Relationship Health Quiz &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
