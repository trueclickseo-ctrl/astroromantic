import type { Metadata } from "next";
import "./globals.css";
import RetroMascot from "@/components/retro-mascot";
import RetroAudioInitializer from "@/components/retro-audio-initializer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "AstroLove & Numerology Tools - Macintosh Edition",
  description: "Calculate your Life Path, Chaldean Numerology, Love compatibility percentage, Wedding date, and get custom AI vows or letters.",
  metadataBase: new URL("https://numerology-love-calc.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#f4f3ef] text-black select-none">
        {/* Macintosh Desktop Area */}
        <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 space-y-4">
          
          {/* Top Apple System Menu Bar - Full readable words */}
          <Header />

          {/* Macintosh Workspace */}
          <main className="flex-1 flex flex-col">{children}</main>

          {/* Macintosh Footer Info Panel */}
          <footer className="bg-white border-3 border-black rounded-xl flex items-center justify-between px-4 py-2 text-xs font-bold select-none shadow-[4px_4px_0px_#000000] font-mono">
            <div className="flex items-center space-x-2">
              <span>System: Macintosh Classic (Finder 7.1)</span>
              <span className="text-zinc-400">|</span>
              <span>Memory: 4096K OK</span>
            </div>
            <div className="font-mono">
              {new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </footer>
        </div>
        <RetroMascot />
        <RetroAudioInitializer />
      </body>
    </html>
  );
}
