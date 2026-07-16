"use client";

import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Award, Download, Image as ImageIcon, Share2 } from "lucide-react";

interface CertificateProps {
  name1: string;
  name2: string;
  score: number;
}

export default function ShareCertificate({ name1, name2, score }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [downloadingImage, setDownloadingImage] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  // Generate PNG using html2canvas
  const downloadPng = async () => {
    if (!certificateRef.current) return;
    setDownloadingImage(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: "#0d0d16"
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `${name1}_${name2}_compatibility_certificate.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Failed to generate image", e);
    } finally {
      setDownloadingImage(false);
    }
  };

  // Generate PDF using pdf-lib
  const downloadPdf = async () => {
    setDownloadingPdf(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);
      const font = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

      // Draw background colors
      page.drawRectangle({
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        color: rgb(0.05, 0.05, 0.09) // Deep indigo-black background
      });

      // Draw gold border
      page.drawRectangle({
        x: 20,
        y: 20,
        width: 560,
        height: 360,
        borderColor: rgb(0.96, 0.62, 0.04), // Gold
        borderWidth: 3
      });

      // Header
      page.drawText("CERTIFICATE OF COSMIC HARMONY", {
        x: 120,
        y: 330,
        size: 20,
        font,
        color: rgb(0.96, 0.62, 0.04)
      });

      // Body text
      page.drawText("This certifies that the energetic frequencies of", {
        x: 160,
        y: 270,
        size: 12,
        color: rgb(0.8, 0.8, 0.8)
      });

      page.drawText(`${name1} & ${name2}`, {
        x: 210,
        y: 230,
        size: 18,
        font,
        color: rgb(1, 1, 1)
      });

      page.drawText("have been calculated to align at an affinity score of", {
        x: 160,
        y: 190,
        size: 12,
        color: rgb(0.8, 0.8, 0.8)
      });

      page.drawText(`${score}% MATCH`, {
        x: 235,
        y: 140,
        size: 24,
        font,
        color: rgb(0.92, 0.28, 0.6) // Pink
      });

      // Footer
      page.drawText("Calculated via AstroLove Cosmic Numerology Engine", {
        x: 170,
        y: 70,
        size: 10,
        color: rgb(0.5, 0.5, 0.5)
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${name1}_${name2}_compatibility_certificate.pdf`;
      link.click();
    } catch (e) {
      console.error("Failed to generate PDF", e);
    } finally {
      setDownloadingPdf(false);
    }
  };

  const descriptionText =
    score >= 85
      ? "Excellent connection! Your energies align in perfect harmony, indicating high spiritual affinity."
      : score >= 65
      ? "Very strong potential! A nurturing and active dynamic that can easily blossom into long-term commitment."
      : "A fascinating contrast! Your differences are your greatest source of passion and growth.";

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-2 w-full">
      {/* 1. Visual Certificate container (Mac Classic Light-Parchment Style - Larger & Beautiful) */}
      <div
        ref={certificateRef}
        className="w-full max-w-[460px] aspect-[1.414/1] bg-[#fdfcf8] border-4 border-black p-3.5 flex flex-col justify-between text-center relative overflow-hidden shadow-2xl select-none"
        style={{ color: '#000000' }}
      >
        {/* Double border styling with gap */}
        <div className="border border-black p-4 flex-1 flex flex-col justify-between h-full relative">
          
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-black" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-black" />
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-black" />
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-black" />

          {/* Header */}
          <div className="space-y-1">
            <span className="text-[7.5px] font-mono tracking-widest uppercase block text-zinc-500">Official Cosmic Alignment Document</span>
            <h3 className="font-serif text-sm sm:text-base font-extrabold tracking-widest uppercase border-b border-black/10 pb-2" style={{ color: '#000000' }}>
              Certificate of Compatibility
            </h3>
          </div>

          {/* Body Content */}
          <div className="space-y-1.5 my-1">
            <span className="text-[8px] uppercase tracking-widest block text-zinc-500" style={{ fontSize: '7.5px' }}>
              This document officially certifies that
            </span>
            <div className="text-base sm:text-lg font-serif font-black italic tracking-wide text-black my-0.5" style={{ color: '#000000' }}>
              {name1 || "Sender"} &amp; {name2 || "Recipient"}
            </div>
            <span className="text-[8px] uppercase tracking-widest block text-zinc-500" style={{ fontSize: '7.5px' }}>
              share a cosmic vibrational affinity score of
            </span>
            <div className="inline-block border-2 border-black bg-white px-4 py-1 font-mono text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#000000] my-0.5" style={{ color: '#000000' }}>
              💝 {score}% Match
            </div>
            {/* Embedded Interpretation Description */}
            <p className="text-[9px] sm:text-[10px] font-serif italic max-w-[340px] mx-auto text-black leading-relaxed border-t border-dashed border-black/10 pt-1.5 mt-1.5" style={{ color: '#000000' }}>
              &ldquo;{descriptionText}&rdquo;
            </p>
          </div>

          {/* Footer Seals & Signatures */}
          <div className="flex items-end justify-between border-t border-black/10 pt-2 text-left">
            {/* Left side: Retro Wax Seal */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-dashed border-black flex items-center justify-center text-[6px] font-mono font-bold leading-none text-center">
                AMOR<br />SEAL
              </div>
              <div className="text-[6px] font-mono text-zinc-500 uppercase leading-tight">
                Vibration: Active<br />
                ID: #A88X
              </div>
            </div>
            
            {/* Right side: Registrar Signature Line */}
            <div className="text-right flex flex-col items-end">
              <span className="font-serif italic text-xs text-black border-b border-black px-4 py-0.5">AstroLove Finder</span>
              <span className="text-[6px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">Cosmic Registrar</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Download / Share Controls (Horizontal & Compact) */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-3 w-full">
        <button
          onClick={downloadPng}
          disabled={downloadingImage}
          className="win-btn text-[10px] py-2 px-4 font-bold flex items-center space-x-1.5 transition-all text-black bg-white"
          style={{ borderWidth: "2px" }}
        >
          {downloadingImage ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <ImageIcon className="w-3.5 h-3.5 text-black" />}
          <span>Download PNG</span>
        </button>

        <button
          onClick={downloadPdf}
          disabled={downloadingPdf}
          className="win-btn text-[10px] py-2 px-4 font-bold flex items-center space-x-1.5 transition-all text-black bg-white"
          style={{ borderWidth: "2px" }}
        >
          {downloadingPdf ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5 text-black" />}
          <span>Download PDF</span>
        </button>

        <button
          onClick={() => {
            navigator.clipboard.writeText(`We scored a ${score}% compatibility match on AstroLove! Calculate yours at: ${window.location.href}`);
            alert("Share snippet copied to clipboard!");
          }}
          className="win-btn text-[10px] py-2 px-4 font-bold flex items-center space-x-1.5 transition-all text-black bg-white"
          style={{ borderWidth: "2px" }}
        >
          <Share2 className="w-3.5 h-3.5 text-black" />
          <span>Copy Link</span>
        </button>
      </div>
    </div>
  );
}

// Small spin helper inside certificate
function RefreshCw(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      {...props}
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}
