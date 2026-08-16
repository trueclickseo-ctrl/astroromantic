"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, Sparkles, User, Grid, Heart, Phone, Car, Home, Building, Calendar, Edit3 } from "lucide-react";
import { LoShuGridDisplay } from "./shared-ui";
import { calculateLifePath, calculatePythagoreanName, calculateLoveCompatibility } from "@/lib/calculations";
import {
  calculateLoShuGrid, calculateMobileNumerology, calculateVehicleNumerology,
  calculateHouseNumerology, calculateBusinessNumerology, calculatePersonalYear,
  calculateNameCorrection
} from "@/lib/numerology-engine";

// 24. LIFE PATH CALCULATOR
export function LifePathComp() {
  const [dob, setDob] = useState("1995-08-15");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateLifePath(dob));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label>
          <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Life Path Number
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Your Life Path Number</span>
          <div className="text-6xl sm:text-7xl font-extrabold text-black">{result.lifePath}</div>
          <p className="text-xs text-zinc-800 font-sans leading-relaxed">{result.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}

// 25. NAME NUMEROLOGY CALCULATOR
export function NameNumerologyComp() {
  const [name, setName] = useState("John Oliver Smith");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculatePythagoreanName(name));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Full Birth Name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full birth name" className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Decode Name Numerology
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="text-[10px] uppercase text-zinc-600 font-bold block mb-1">Expression (Destiny)</span><span className="text-3xl font-extrabold text-black">{result.destiny}</span></div>
          <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="text-[10px] uppercase text-zinc-600 font-bold block mb-1">Soul Urge (Vowels)</span><span className="text-3xl font-extrabold text-rose-600">{result.soulUrge}</span></div>
          <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="text-[10px] uppercase text-zinc-600 font-bold block mb-1">Personality</span><span className="text-3xl font-extrabold text-amber-900">{result.personality}</span></div>
        </motion.div>
      )}
    </div>
  );
}

// 26. MOBILE NUMBER CALCULATOR
export function MobileNumberComp() {
  const [phone, setPhone] = useState("9876543210");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateMobileNumerology(phone));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Mobile Phone Number</label>
          <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile digits" className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Mobile Vibration
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Mobile Vibration Number</span>
          <div className="text-5xl font-extrabold text-black">{result.singleDigit}</div>
          <p className="text-xs text-zinc-800 font-sans leading-relaxed">{result.vibration}</p>
        </motion.div>
      )}
    </div>
  );
}

// 27. VEHICLE NUMBER CALCULATOR
export function VehicleNumberComp() {
  const [plate, setPlate] = useState("DL 01 AB 1234");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateVehicleNumerology(plate));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Vehicle Registration Number</label>
          <input type="text" required value={plate} onChange={(e) => setPlate(e.target.value)} placeholder="E.g. DL 01 AB 1234" className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Vehicle Energy
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Vehicle Numerology Number</span>
          <div className="text-5xl font-extrabold text-black">{result.number}</div>
          <p className="text-xs text-zinc-800 font-sans leading-relaxed">{result.energy}</p>
        </motion.div>
      )}
    </div>
  );
}

// 28. HOUSE NUMBER CALCULATOR
export function HouseNumberComp() {
  const [address, setAddress] = useState("42B");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateHouseNumerology(address));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">House / Unit Number</label>
          <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="E.g. 42B or 108" className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Home Energy
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">House Energy Number</span>
          <div className="text-5xl font-extrabold text-black">{result.number}</div>
          <p className="text-xs text-zinc-800 font-sans leading-relaxed">{result.atmosphere}</p>
        </motion.div>
      )}
    </div>
  );
}

// 29. BUSINESS NAME CALCULATOR
export function BusinessNameComp() {
  const [bName, setBName] = useState("AstroRomantic Ventures");
  const [lp, setLp] = useState(1);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateBusinessNumerology(bName, lp));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Business Name</label>
          <input type="text" required value={bName} onChange={(e) => setBName(e.target.value)} placeholder="Brand or Company Name" className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Owner Life Path Number (Optional)</label>
          <input type="number" min={1} max={33} value={lp} onChange={(e) => setLp(parseInt(e.target.value, 10))} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Commercial Vibration
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Business Numerology Number</span>
          <div className="text-5xl font-extrabold text-black">{result.number}</div>
          <p className="text-xs text-zinc-800 font-sans leading-relaxed">{result.commercialVibration}</p>
          <p className="text-xs text-amber-900 font-sans font-bold border-t border-black/10 pt-2">{result.ownerCompatibility}</p>
        </motion.div>
      )}
    </div>
  );
}

// 30. PERSONAL YEAR CALCULATOR
export function PersonalYearComp() {
  const [dob, setDob] = useState("1995-08-15");
  const [targetYear, setTargetYear] = useState(2026);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculatePersonalYear(dob, targetYear));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none shadow-[2px_2px_0px_#000000]" /></div>
          <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Target Year</label><input type="number" required value={targetYear} onChange={(e) => setTargetYear(parseInt(e.target.value, 10))} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none shadow-[2px_2px_0px_#000000]" /></div>
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Personal Year
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Personal Year {targetYear} Number</span>
          <div className="text-5xl font-extrabold text-black">Year {result.personalYear}</div>
          <p className="text-xs text-zinc-800 font-sans leading-relaxed">{result.theme}</p>
        </motion.div>
      )}
    </div>
  );
}

// 31. LO SHU GRID COMPONENT
export function LoShuGridComp() {
  const [dob, setDob] = useState("1995-08-15");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateLoShuGrid(dob));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label>
          <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" />
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Generate Lo Shu 3x3 Grid
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <LoShuGridDisplay result={result} />
        </motion.div>
      )}
    </div>
  );
}

// 32. NUMEROLOGY LOVE COMPATIBILITY COMPONENT
export function NumerologyLoveCompatibilityComp() {
  const [p1Name, setP1Name] = useState("Alexander");
  const [p1Dob, setP1Dob] = useState("1995-08-15");
  const [p2Name, setP2Name] = useState("Sophia");
  const [p2Dob, setP2Dob] = useState("1997-04-20");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = calculateLoveCompatibility(p1Name, p2Name);
    const lp1 = calculateLifePath(p1Dob).lifePath;
    const lp2 = calculateLifePath(p2Dob).lifePath;

    setResult({ score, lp1, lp2 });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 bg-[#FAF7F2] border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
            <label className="block text-zinc-900 font-bold uppercase">Person 1 Name & DOB</label>
            <input type="text" required value={p1Name} onChange={(e) => setP1Name(e.target.value)} placeholder="Name 1" className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" />
            <input type="date" required value={p1Dob} onChange={(e) => setP1Dob(e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" />
          </div>
          <div className="space-y-2 bg-[#FAF7F2] border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
            <label className="block text-zinc-900 font-bold uppercase">Person 2 Name & DOB</label>
            <input type="text" required value={p2Name} onChange={(e) => setP2Name(e.target.value)} placeholder="Name 2" className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" />
            <input type="date" required value={p2Dob} onChange={(e) => setP2Dob(e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2.5 text-black outline-none" />
          </div>
        </div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">
          Calculate Numerology Compatibility
        </button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#FFF8F3] border-3 border-black rounded-2xl p-6 text-center space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs uppercase text-amber-900 font-bold">Numerological Harmony Score</span>
          <div className="text-5xl font-extrabold text-black">{result.score}%</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Partner 1 Life Path</span><span className="font-bold text-black">Number {result.lp1}</span></div>
            <div className="bg-white border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_#000000]"><span className="block text-zinc-600 text-[10px] font-bold uppercase">Partner 2 Life Path</span><span className="font-bold text-black">Number {result.lp2}</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 33. NAME CORRECTION COMPONENT
export function NameCorrectionComp() {
  const [name, setName] = useState("John Smith");
  const [dob, setDob] = useState("1995-08-15");
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateNameCorrection(name, dob));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto font-mono text-xs">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Current Name</label><input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        <div><label className="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">Date of Birth</label><input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="w-full bg-white border-2 border-black rounded-xl p-3 text-black outline-none focus:bg-[#FAF7F2] shadow-[2px_2px_0px_#000000]" /></div>
        <button type="submit" className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase rounded-xl border-2 border-black transition-all shadow-[4px_4px_0px_#000000]">Analyze Name Correction</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="bg-[#FFF8F3] border-3 border-black rounded-xl p-4 text-center shadow-[3px_3px_0px_#000000]">
            <span className="text-xs uppercase text-amber-900 font-bold block mb-1">Current Harmony Status</span>
            <span className="text-lg font-bold text-black">
              Current Destiny Number {result.currentDestiny} vs Life Path {result.lifePath}
            </span>
          </div>

          {result.suggestions.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs text-black uppercase font-bold">Suggested Spelling Variations</h4>
              <div className="space-y-2">
                {result.suggestions.map((s: any, idx: number) => (
                  <div key={idx} className="bg-white border-2 border-black rounded-lg p-3 text-xs shadow-[2px_2px_0px_#000000]">
                    <span className="font-bold text-black text-sm block">{s.modifiedName} (Expression {s.newDestiny})</span>
                    <span className="text-zinc-700 font-sans text-[11px]">{s.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
