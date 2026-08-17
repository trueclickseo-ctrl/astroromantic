import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://astroromantic.com";
const SLUG = "/vedic/kp-astrology";

export const metadata: Metadata = {
  title: "KP Astrology – Krishnamurti Paddhati Sub-Lords Explained",
  description: "Learn KP Astrology (Krishnamurti Paddhati): cuspal sub-lords, significators, and how this precise system times life events.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "KP Astrology – Krishnamurti Paddhati Sub-Lords Explained",
    description: "Learn KP Astrology (Krishnamurti Paddhati): cuspal sub-lords, significators, and how this precise system times life events.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "KP Astrology – Krishnamurti Paddhati Sub-Lords Explained",
    description: "Learn KP Astrology (Krishnamurti Paddhati): cuspal sub-lords, significators, and how this precise system times life events.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "KP Astrology: Krishnamurti Paddhati Explained",
      "description": "Learn KP Astrology (Krishnamurti Paddhati): cuspal sub-lords, significators, and how this precise system times life events.",
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
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono text-zinc-600 bg-white border-2 border-black rounded-xl px-4 py-2 shadow-[2px_2px_0px_#000000]">
          <a href="/" className="flex items-center space-x-1 hover:text-black transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </a>
          <ChevronRight className="w-3 h-3 text-zinc-400" />
          <a href="/astrology-guides/" className="hover:text-black transition-colors">Explore Astrology Hub</a>
          <ChevronRight className="w-3 h-3 text-zinc-400" />
          <span className="font-bold text-black">KP Astrology: Krishnamurti Paddhati Explained</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Vedic Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            KP Astrology: Krishnamurti Paddhati Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">**KP Astrology**, short for **Krishnamurti Paddhati**, is a stellar system of Vedic astrology developed by the late Prof. K.S. Krishnamurti in the mid-20th century, designed to answer precise questions — will this happen, and when — with a level of accuracy traditional methods often can't match. It keeps the same foundational vocabulary as classical Jyotish (nine planets, 12 houses, 27 Nakshatras) but reorganizes interpretation around **cuspal sub-lords**, refining each Nakshatra into 249 sub-divisions for sharper, more decisive readings.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**KP Astrology (Krishnamurti Paddhati)** is a refined system of Vedic astrology developed by Prof. K.S. Krishnamurti, built for precise event timing.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>It uses the same nine planets, 12 signs, 27 Nakshatras, and 12 houses as traditional Vedic astrology, but reads charts through **cuspal sub-lords** rather than whole-sign placements.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>KP divides each Nakshatra further into **249 sub-divisions**, allowing far more granular predictions than the standard 27-Nakshatra system.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The system uses **Placidus house cusps** and a specific **KP ayanamsa**, both different from the whole-sign and Lahiri conventions common in traditional Jyotish.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The core rule: **the sub-lord decides** whether a promised event will actually happen — sign lord and star lord provide context, but the sub-lord delivers the verdict.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Makes KP Astrology Different From Traditional Vedic Astrology?
            </h2>
            <p>KP isn't a separate branch of astrology — it uses the same core framework as classical Jyotish, but changes the method used to judge events and time them. The differences come down to four structural choices:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**249 sub-lord divisions** — Krishnamurti divided each of the 27 Nakshatras further using the Vimshottari Dasha proportions, creating a much finer resolution than the standard system.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Placidus house cusps** — instead of whole-sign houses common in traditional Vedic charts, KP uses the Placidus system, which produces unequal house sizes based on the diurnal motion of the ecliptic.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**KP ayanamsa** — a slightly different sidereal calculation (sometimes called KP-Newcomb) than the Lahiri ayanamsa used in most traditional Vedic software.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Significator-based prediction hierarchy** — KP treats the star lord and sub-lord as more decisive than the sign lord, reversing the traditional emphasis.</li>
            </ol>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Sign Lord, Star Lord, Sub Lord: The Three-Layer System
            </h2>
            <p>Every point in the zodiac carries three layers of rulership in KP astrology, and understanding the hierarchy between them is the foundation of the entire method:</p>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Lord</th><th className="p-3 ">What It Sets</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Sign Lord**</td><td className="p-3 ">The general background environment a planet or cusp operates within</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Star Lord**</td><td className="p-3 ">Which house matters get activated — this shows *what* a planet will actually deliver</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Sub Lord**</td><td className="p-3 ">The deciding factor — whether the promised event happens at all</td></tr>
                </tbody>
              </table>
            </div>
            <p>The single most important rule in KP astrology is that **the sub-lord decides**. A planet can look strong by sign, but if its sub-lord isn't connected to the right houses, the event it seems to promise often doesn't fructify.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Four-Step Significator Method
            </h2>
            <p>To determine which planets will cause events related to a specific house, KP astrologers follow a structured four-step procedure:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Planets placed in the **star (Nakshatra)** of any planet occupying the house</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The **planets occupying** the house itself</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Planets placed in the **star of the house's cuspal lord**</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The **cuspal lord** itself</li>
            </ol>
            <p>Significators are then ranked by strength, revealing which planets are most likely to trigger events tied to that house — and their active Dasha periods show *when*.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common KP Applications
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Marriage timing** — using the sub-lord of the 7th house cusp</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Career developments** — using the sub-lord of the 10th house cusp</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Financial gains** — using the sub-lord of the 11th house cusp</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Horary astrology (Prashna)** — answering specific yes/no questions using a number chosen between 1 and 249, cast into a KP chart for that exact moment</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              KP Astrology vs. Traditional Vedic Astrology
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black"></th><th className="p-3 border-r-2 border-black">KP Astrology</th><th className="p-3 ">Traditional (Parashari) Vedic Astrology</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**House system**</td><td className="p-3 border-r-2 border-black">Placidus (unequal houses)</td><td className="p-3 ">Whole sign / Bhava Chalit</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Ayanamsa**</td><td className="p-3 border-r-2 border-black">KP (Krishnamurti/Newcomb)</td><td className="p-3 ">Commonly Lahiri</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Nakshatra divisions**</td><td className="p-3 border-r-2 border-black">249 sub-lords</td><td className="p-3 ">27 Nakshatras (standard resolution)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Primary prediction tool**</td><td className="p-3 border-r-2 border-black">Cuspal sub-lord and significators</td><td className="p-3 ">Dasha-aspect analysis</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Best suited for**</td><td className="p-3 border-r-2 border-black">Precise event timing, horary questions</td><td className="p-3 ">Broad personality and life-theme reading</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Learning KP Astrology
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Skipping the sub-lord and relying on sign lord alone**, which reverses the entire logic of the system.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mixing KP ayanamsa with Lahiri-based charts**, producing inconsistent cusp calculations.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring Dasha timing** — significators show *which* planets matter, but the active Dasha period shows *when* their effects activate.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating KP as entirely separate from Vedic astrology** rather than a refinement built on the same foundational vocabulary.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is KP astrology more accurate than traditional Vedic astrology?
            </h2>
            <p>KP is specifically designed for precise event timing and yes/no questions, which many practitioners find sharper for that purpose, while traditional Parashari astrology is often considered richer for broad personality and life-theme analysis.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is a cuspal sub-lord?
            </h2>
            <p>The cuspal sub-lord is the final, most granular ruler of a house cusp within KP's 249-part division system, and it's considered the deciding factor in whether that house's promised events actually occur.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why does KP use Placidus houses instead of whole-sign houses?
            </h2>
            <p>Krishnamurti found that unequal, time-based Placidus cusps allowed for more precise timing of specific events compared to the equal 30-degree whole-sign houses used in traditional Vedic astrology.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can I use KP astrology for horary (Prashna) questions?
            </h2>
            <p>Yes — KP horary astrology has the person choose a number between 1 and 249, which is cast into a chart for that exact moment to answer a specific yes/no question.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Who developed KP astrology?
            </h2>
            <p>KP astrology was developed by Prof. K.S. Krishnamurti (1908–1972), a Madras-based astrologer who refined classical Jyotish over three decades and published his system across six volumes known as the "Krishnamurti Paddhati Readers."</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do I need to learn traditional Vedic astrology before learning KP?
            </h2>
            <p>It helps, since KP uses the same core vocabulary — planets, signs, houses, and Nakshatras — but many students learn KP directly, as its structured, rule-based method can feel more approachable for beginners than interpretive Parashari analysis.</p>
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
              <li>K.S. Krishnamurti, *Krishnamurti Paddhati Readers* (six-volume foundational text series)</li>
              <li>Standard KP significator and cuspal sub-lord methodology used across contemporary KP practice</li>
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
