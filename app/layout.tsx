import type { Metadata } from "next";
import "./globals.css";
import RetroMascot from "@/components/retro-mascot";
import RetroAudioInitializer from "@/components/retro-audio-initializer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "AstroRomantic — Free Love, Numerology & Astrology Calculators",
    template: "%s",
  },
  description: "Free retro-themed love calculators, numerology tools, compatibility tests, couple name generators, and AI-powered romantic content. Instant results.",
  metadataBase: new URL("https://astroromantic.com"),
  alternates: { canonical: "https://astroromantic.com/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "AstroRomantic — Free Love, Numerology & Astrology Calculators",
    description: "Free retro-themed love calculators, numerology tools, compatibility tests, couple name generators, and AI-powered romantic content.",
    url: "https://astroromantic.com/",
    siteName: "AstroRomantic",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "AstroRomantic — Free Love & Numerology Tools",
    description: "Free retro-themed love calculators, numerology tools, and AI romantic content generators.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AstroRomantic",
  url: "https://astroromantic.com",
  logo: "https://astroromantic.com/icon.svg",
  description: "Free retro-themed love calculators, numerology tools, and AI-powered romantic content generators.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AstroRomantic",
  url: "https://astroromantic.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#f4f3ef] text-black">
        {/* Organization + WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 space-y-4">
          <Header />

          {/* Main Content */}
          <main className="flex-1 flex flex-col">{children}</main>

          {/* Footer */}
          <footer className="bg-white border-3 border-black rounded-xl flex items-center justify-between px-4 py-2 text-xs font-bold select-none shadow-[4px_4px_0px_#000000] font-mono">
            <div className="flex items-center space-x-2">
              <span>© 2026 AstroRomantic</span>
              <span className="text-zinc-400">|</span>
              <a href="/about/" className="hover:underline">About</a>
              <span className="text-zinc-400">|</span>
              <a href="/privacy-policy/" className="hover:underline">Privacy</a>
              <span className="text-zinc-400">|</span>
              <a href="/contact/" className="hover:underline">Contact</a>
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
