import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/western/overview";

export const metadata: Metadata = {
  title: "Western Astrology – Complete Beginner's Overview",
  description: "New to Western astrology? Learn the tropical zodiac, planets, houses, aspects, and how a birth chart comes together, in one clear guide.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Western Astrology – Complete Beginner's Overview",
    description: "New to Western astrology? Learn the tropical zodiac, planets, houses, aspects, and how a birth chart comes together, in one clear guide.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Astrology – Complete Beginner's Overview",
    description: "New to Western astrology? Learn the tropical zodiac, planets, houses, aspects, and how a birth chart comes together, in one clear guide.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Western Astrology: Complete Beginner's Overview",
      "description": "New to Western astrology? Learn the tropical zodiac, planets, houses, aspects, and how a birth chart comes together, in one clear guide.",
      "mainEntityOfPage": `${SITE_URL}${SLUG}/`,
      "publisher": {
        "@type": "Organization",
        "name": "AstroRomantic",
        "url": SITE_URL
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${SLUG}/#faq`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export default function GuidePage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rose-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Western Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Western Astrology: Complete Beginner's Overview
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">**Western astrology** is the system most people encounter first — the one behind daily horoscope columns and "what's your sign?" small talk. It interprets your personality, relationships, and life timing through the **tropical zodiac**, a 12-sign wheel anchored to the seasons, combined with planetary positions, houses, and the angles planets form with each other. This overview walks through how all the pieces fit together, from your sun sign to a full, personalized birth chart.</p>
        </header>

        
        {/* Key Takeaways Box */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl font-bold font-mono text-black uppercase tracking-wide">
              Key Takeaways
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-zinc-900 font-sans leading-relaxed pl-2">
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Western astrology** interprets personality and life events through the tropical zodiac — 12 signs mapped to the seasons rather than the physical constellations.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A complete birth chart combines four layers: **signs, planets, houses, and aspects** — no single layer tells the whole story alone.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Your **"Big Three"** — Sun, Moon, and Rising sign — form the foundation most astrologers start with when reading a chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Western astrology traces back to **ancient Babylon**, developed through Hellenistic Greek tradition into the system practiced today.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>You need your **exact birth date, time, and location** to generate an accurate, personalized birth chart — a sun sign alone only tells part of the story.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Foundation: The Tropical Zodiac
            </h2>
            <p>Western astrology divides the year into 12 equal, 30-degree segments called signs, each tied to a specific stretch of the calendar. This system is **tropical**, meaning it's fixed to the seasons — 0° Aries always marks the spring equinox, regardless of where the actual constellations have drifted to over time. This is the key distinction from Vedic (sidereal) astrology, which tracks the literal positions of constellations instead.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Four Layers of a Birth Chart
            </h2>
            <p>A complete Western astrology reading isn't just "what sign are you" — it's built from four interacting layers:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Signs** — the 12 zodiac signs, each carrying an element (fire, earth, air, water) and quality (cardinal, fixed, mutable).</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Planets** — the celestial bodies whose positions at your birth shape different aspects of your personality and life.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Houses** — 12 life-area divisions (career, relationships, home, and so on) that show *where* a planet's energy plays out.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Aspects** — the angles planets form with each other, showing how different parts of your personality interact, support, or challenge one another.</li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Your "Big Three": Sun, Moon, and Rising
            </h2>
            <p>Most beginner astrology conversations start and end with the sun sign, but a real reading always includes three core placements:</p>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Placement</th><th className="p-3 border-r-2 border-black">Determined By</th><th className="p-3 ">What It Reveals</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Sun Sign**</td><td className="p-3 border-r-2 border-black">Birth date</td><td className="p-3 ">Core identity, ego, vitality</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Moon Sign**</td><td className="p-3 border-r-2 border-black">Birth date + approximate time</td><td className="p-3 ">Emotional inner world, instincts</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Rising Sign (Ascendant)**</td><td className="p-3 border-r-2 border-black">Exact birth time + location</td><td className="p-3 ">First impressions, outward presentation</td></tr>
                </tbody>
              </table>
            </div>
            <p>Because the Moon changes signs every 2–3 days and the Ascendant shifts roughly every two hours, both require a precise birth time to calculate — unlike your sun sign, which only needs your birth date.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              A Brief History of Western Astrology
            </h2>
            <p>Western astrology's roots trace back to **ancient Babylon**, where early astrologers first tracked planetary movements against the zodiac belt. The system passed through Hellenistic Greek culture — where astrologers like Ptolemy formalized much of the aspect and house theory still used today — before developing into the European and eventually modern Western tradition practiced now.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How a Birth Chart Comes Together
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Start with your birth details** — exact date, time, and location are all required for an accurate chart.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Locate your Sun, Moon, and Rising signs** — your foundational "Big Three."</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Map the remaining planets** — Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto — into their signs and houses.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify major aspects** — the angles between planets, which reveal how different parts of your chart interact.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Synthesize, don't isolate** — a complete reading weighs all these layers together rather than fixating on any single placement.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Western Astrology vs. Vedic Astrology: Quick Comparison
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black"></th><th className="p-3 border-r-2 border-black">Western Astrology</th><th className="p-3 ">Vedic Astrology</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Zodiac type**</td><td className="p-3 border-r-2 border-black">Tropical (season-based)</td><td className="p-3 ">Sidereal (constellation-based)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Primary sign**</td><td className="p-3 border-r-2 border-black">Sun sign</td><td className="p-3 ">Moon sign (Rashi)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**House system**</td><td className="p-3 border-r-2 border-black">Often Placidus (unequal)</td><td className="p-3 ">Often whole-sign (equal)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Outer planets**</td><td className="p-3 border-r-2 border-black">Uranus, Neptune, Pluto included</td><td className="p-3 ">Traditionally excludes outer planets</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Origin**</td><td className="p-3 border-r-2 border-black">Babylon → Greek → European tradition</td><td className="p-3 ">Vedic Jyotish Shastra, India</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes Beginners Make
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating the sun sign as the whole personality**, rather than one of several core placements.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Skipping the birth time**, which is essential for Moon sign precision and Rising sign accuracy.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading a single aspect or placement in isolation** instead of considering the full chart together.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Confusing tropical Western astrology with sidereal Vedic astrology**, expecting the same sign results from both systems.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do I need my exact birth time for Western astrology?
            </h2>
            <p>Your sun sign only needs your birth date, but an accurate Moon sign and Rising sign — both essential to a full reading — require your precise birth time and location.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What's the difference between a horoscope and a birth chart?
            </h2>
            <p>A daily horoscope is a general prediction based only on your sun sign, while a birth chart is a complete, personalized map built from your exact birth date, time, and location.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why do astrologers talk about the "Big Three"?
            </h2>
            <p>Sun, Moon, and Rising together capture your core identity, emotional inner world, and outward presentation — a far fuller picture than the sun sign alone.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Western astrology scientifically proven?
            </h2>
            <p>No — Western astrology is a symbolic and interpretive tradition, not an empirically validated science, though it has a long, continuous cultural history dating back to ancient Babylon.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How is Western astrology different from Chinese astrology?
            </h2>
            <p>Western astrology is based on the Sun's position relative to the tropical zodiac at birth, while Chinese astrology assigns a yearly animal sign based on the lunar calendar — the two systems use entirely different frameworks.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What are the outer planets and why do they matter?
            </h2>
            <p>Uranus, Neptune, and Pluto move slowly and represent generational themes rather than personal ones; they're used in Western astrology but are traditionally not part of the classical Vedic planetary system.</p>
          </section>

          {/* Related Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Related Astrology Guides & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/calculators/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>All Astrology & Numerology Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/horoscope/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Daily Horoscope Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/astrology-guides/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Explore All 20 Astrology Guides</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/life-insights/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Life Insights Kundli Report</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* External References */}
          <section className="border-t-2 border-zinc-300 pt-6 space-y-2 text-xs text-zinc-600 font-mono">
            <h3 className="font-bold uppercase text-black flex items-center space-x-1">
              <BookOpen className="w-4 h-4 text-black mr-1" />
              <span>External References & Sources</span>
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Claudius Ptolemy, *Tetrabiblos* — foundational Hellenistic text formalizing Western astrological method</li>
              <li>Historical development of astrology from ancient Babylonian tradition</li>
            </ul>
          </section>

        </article>

        {/* Explore Astrology Navigation Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
