import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/dasha";

export const metadata: Metadata = {
  title: "Dasha Report – Vimshottari Dasha & Antardasha Explained",
  description: "Understand your Dasha report: Vimshottari Mahadasha and Antardasha periods, what each planet's period brings, and how to read your timeline.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Dasha Report – Vimshottari Dasha & Antardasha Explained",
    description: "Understand your Dasha report: Vimshottari Mahadasha and Antardasha periods, what each planet's period brings, and how to read your timeline.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dasha Report – Vimshottari Dasha & Antardasha Explained",
    description: "Understand your Dasha report: Vimshottari Mahadasha and Antardasha periods, what each planet's period brings, and how to read your timeline.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Dasha Report: Understanding Your Vimshottari Dasha Timeline",
      "description": "Understand your Dasha report: Vimshottari Mahadasha and Antardasha periods, what each planet's period brings, and how to read your timeline.",
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
          <div className="inline-flex items-center space-x-2 bg-purple-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Dasha Report: Understanding Your Vimshottari Dasha Timeline
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Dasha report** maps out the Vimshottari Dasha system — Vedic astrology's primary method for timing life events — showing which planet's influence is currently dominant in your life and what's coming next. Unlike a static personality reading, a Dasha report is a **timeline**, dividing your life into major planetary chapters (Mahadashas) and finer sub-chapters (Antardashas), each carrying its own themes, opportunities, and challenges.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Vimshottari Dasha** is Vedic astrology's primary timing system, dividing a 120-year cycle among the nine planets to predict *when* life themes activate.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Your **Mahadasha** (major period) sets the dominant theme of a life chapter; it's further divided into **Antardasha** (sub-periods) that modify and refine that theme.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Each planet governs a fixed number of years: Sun (6), Moon (10), Mars (7), Rahu (18), Jupiter (16), Saturn (19), Mercury (17), Ketu (7), Venus (20) — totaling 120 years.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Your **starting Dasha** and the exact "balance" already elapsed at birth are both determined by the **Moon's Nakshatra** position at your time of birth.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A Dasha period's outcome depends on how the ruling planet is placed in your natal chart — the same Mahadasha unfolds differently for different people.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is Vimshottari Dasha?
            </h2>
            <p>"Vimshottari" means "120" in Sanskrit, referring to the total span of the Dasha cycle. The system divides those 120 years among the nine Vedic planets in a fixed sequence, each ruling a specific number of years based on classical tradition. Vedic astrologers describe this cycle as aligned with the expected human lifespan of the current era, which is part of why it remains the most widely used Dasha system in modern Jyotish.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Nine Planetary Periods
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Planet</th><th className="p-3 ">Mahadasha Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Sun (Surya)</td><td className="p-3 ">6 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Moon (Chandra)</td><td className="p-3 ">10 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Mars (Mangal)</td><td className="p-3 ">7 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Rahu</td><td className="p-3 ">18 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Jupiter (Brihaspati)</td><td className="p-3 ">16 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Saturn (Shani)</td><td className="p-3 ">19 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Mercury (Budha)</td><td className="p-3 ">17 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Ketu</td><td className="p-3 ">7 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Venus (Shukra)</td><td className="p-3 ">20 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Total**</td><td className="p-3 ">**120 years**</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How Your Starting Dasha Is Determined
            </h2>
            <p>Your Dasha sequence doesn't begin randomly — it's calculated from the **Nakshatra (lunar mansion) your Moon occupied at the exact moment of your birth**. Whichever planet rules that Nakshatra becomes your first Mahadasha, and the precise degree of the Moon within that Nakshatra determines your **"birth Dasha balance"** — essentially, how much of that first period had already elapsed before you were born.</p>
            <p>This is why your exact birth time matters so much for an accurate Dasha report: even a small time error can shift the Moon's Nakshatra position enough to change your entire starting sequence.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Mahadasha, Antardasha, and Beyond
            </h2>
            <p>Vimshottari Dasha isn't just one layer — it subdivides for increasingly precise timing:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Mahadasha** — the major period, lasting 6 to 20 years, setting the dominant life theme.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Antardasha** (sub-period) — each Mahadasha divides into nine Antardashas, ruled by all nine planets in sequence, refining and modifying the major theme.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Pratyantardasha** — each Antardasha further divides into nine finer sub-periods, useful for precise, short-window timing.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Sookshma and Prana Dasha** — even finer subdivisions, generally reserved for advanced or specialized predictive work.</li>
            </ol>
            <p>The first Antardasha within any Mahadasha always belongs to the Mahadasha's own ruling planet, followed by the remaining planets in the standard Vimshottari sequence.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read Your Current Dasha Period
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify your current Mahadasha planet** — this sets the overarching theme of your present life chapter.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify your current Antardasha planet** — this adds a secondary layer, modifying how the Mahadasha's theme actually plays out day to day.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Consider the relationship between the two planets** — whether they're natural friends, neutrals, or enemies in Vedic astrology significantly shapes what the combined period delivers.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Cross-check with the ruling planets' natal placement** — a Jupiter Mahadasha unfolds very differently depending on which house and sign your natal Jupiter occupies.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Watch for transit triggers** — significant events often coincide with transits (especially by Saturn or Jupiter) activating the same planets already highlighted by your running Dasha-Antardasha.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Example: Reading a Jupiter Mahadasha
            </h2>
            <p>If you're in a Jupiter Mahadasha, your general life focus tends toward Jupiter's themes: wisdom, expansion, higher learning, and growth. But the *specific* flavor of that expansion depends entirely on where your natal Jupiter sits — Jupiter in the 10th house might bring career growth and recognition, while Jupiter in the 4th house might bring expansion through home, family, or property instead.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Dasha Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading the Mahadasha in isolation** without factoring in the current Antardasha, which significantly modifies the period's actual tone.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring the natal placement of the ruling planet** — the same Dasha period plays out very differently depending on that planet's house, sign, and aspects.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Using an imprecise birth time**, which can shift your Nakshatra-based starting Dasha and birth balance calculation.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating Dasha as deterministic** — it indicates dominant themes and timing windows, not guaranteed, unchangeable outcomes.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is the difference between Mahadasha and Antardasha?
            </h2>
            <p>Mahadasha is the major planetary period, lasting 6 to 20 years and setting the dominant life theme, while Antardasha is a sub-period within it, lasting months to a couple of years, that refines and modifies that theme.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How is my starting Dasha determined?
            </h2>
            <p>Your starting Dasha is calculated from the Nakshatra your Moon occupied at your exact birth time, with the ruling planet of that Nakshatra becoming your first Mahadasha.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why does a Dasha report need my exact birth time?
            </h2>
            <p>Because the calculation depends on your Moon's precise position within a Nakshatra, even a small birth-time error can shift your starting Dasha sequence and birth balance.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Does everyone experience all nine planetary Mahadashas in their lifetime?
            </h2>
            <p>Not necessarily — since the full Vimshottari cycle spans 120 years, most people experience several but not all nine Mahadashas within an average lifespan.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is a "difficult" planet's Dasha always a bad period?
            </h2>
            <p>Not automatically — a challenging planet's Dasha often brings important lessons, discipline, or necessary restructuring rather than pure misfortune, and its actual expression depends heavily on that planet's natal placement.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How does Dasha relate to my Life Insights report?
            </h2>
            <p>Your Life Insights report identifies your current Mahadasha and Antardasha as part of a broader chart overview, while a dedicated Dasha report goes deeper into the full timeline, sequence, and sub-period breakdown.</p>
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
              <li>Brihat Parashara Hora Shastra — classical text establishing the Vimshottari Dasha system</li>
              <li>Standard Vimshottari Dasha planetary-year framework used across modern Vedic astrology practice</li>
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
