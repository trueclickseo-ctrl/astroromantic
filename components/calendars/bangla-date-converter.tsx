"use client";

import React, { useState } from "react";
import { ArrowRightLeft, Sparkles, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { convertGregorianToBanglaCivil } from "@/lib/regional-calendars";

export function BanglaDateConverter() {
  const [gregorianDate, setGregorianDate] = useState<string>("2026-04-14");
  const [convertedResult, setConvertedResult] = useState<any>(null);

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gregorianDate) return;
    const d = new Date(gregorianDate);
    const res = convertGregorianToBanglaCivil(d);
    setConvertedResult({
      inputDate: gregorianDate,
      ...res
    });
  };

  return (
    <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-5 font-sans">
      <div className="flex items-center space-x-3 border-b-2 border-black pb-3">
        <ArrowRightLeft className="w-6 h-6 text-black" />
        <div>
          <h3 className="text-xl font-extrabold font-mono text-black uppercase tracking-tight">
            English to Bangla Date Converter
          </h3>
          <p className="text-xs text-zinc-700">
            Calculated according to the official Bangladesh Bangla Academy Civil Calendar rules.
          </p>
        </div>
      </div>

      <form onSubmit={handleConvert} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-bold text-black uppercase tracking-wider mb-1.5">
            Select English (Gregorian) Date
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="date"
              required
              value={gregorianDate}
              onChange={(e) => setGregorianDate(e.target.value)}
              className="flex-1 bg-white border-2 border-black rounded-xl p-3 font-mono text-sm text-black outline-none focus:bg-amber-50 shadow-[2px_2px_0px_#000000]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]"
            >
              Convert to Bangla Date
            </button>
          </div>
        </div>
      </form>

      {convertedResult && (
        <div className="bg-[#fefce8] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_#000000] space-y-3">
          <div className="flex items-center justify-between border-b-2 border-zinc-300 pb-2">
            <span className="text-xs font-mono font-bold text-zinc-700">
              Gregorian Date: {convertedResult.inputDate}
            </span>
            <span className="inline-flex items-center space-x-1 bg-amber-300 border border-black rounded-full px-2.5 py-0.5 text-[11px] font-mono font-bold text-black">
              <Sparkles className="w-3 h-3 text-black" />
              <span>Bangla Academy System</span>
            </span>
          </div>

          <div className="text-center py-2 space-y-1">
            <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">Corresponding Bangla Date</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-black font-serif block tracking-tight">
              {convertedResult.formattedBanglaDate}
            </span>
            <span className="text-sm font-mono font-bold text-rose-700 block">
              {convertedResult.banglaDay} {convertedResult.banglaMonthName}, Bangabda {convertedResult.banglaYear}
            </span>
          </div>

          <div className="bg-white border-2 border-black rounded-lg p-3 text-xs text-zinc-800 space-y-1">
            <div className="flex items-center space-x-2 font-bold text-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Calendar Rule Applied:</span>
            </div>
            <p className="leading-relaxed">
              In Bangladesh's civil calendar, Pohela Boishakh is permanently fixed on April 14. First 5 months (Boishakh to Bhadro) are 31 days long, and remaining 7 months (Ashwin to Chaitra) are 30 days long.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
