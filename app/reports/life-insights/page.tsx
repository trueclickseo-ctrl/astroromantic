import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/life-insights";

export const metadata: Metadata = {
  title: "Life Insights Report – Your Complete Kundli Analysis",
  description: "Understand your Life Insights report: your complete Kundli covering planets, houses, Dashas, and life predictions. Learn what each section means.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Life Insights Report – Your Complete Kundli Analysis",
    description: "Understand your Life Insights report: your complete Kundli covering planets, houses, Dashas, and life predictions. Learn what each section means.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Insights Report – Your Complete Kundli Analysis",
    description: "Understand your Life Insights report: your complete Kundli covering planets, houses, Dashas, and life predictions. Learn what each section means.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Life Insights Report: Your Complete Kundli Explained",
      "description": "Understand your Life Insights report: your complete Kundli covering planets, houses, Dashas, and life predictions. Learn what each section means.",
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
            Life Insights Report: Your Complete Kundli Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">A **Life Insights report** is a full-spectrum reading of your Kundli — the Vedic birth chart that maps where every planet sat in the sky at the exact moment you were born. Instead of focusing on one life area, it pulls together your Ascendant, Moon sign, planetary placements, and current Dasha period to give you a complete picture of personality, strengths, challenges, and life direction. Think of it as the foundation report — the one worth reading before any specialized report like Career, Love & Marriage, or Dosha analysis.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A **Life Insights report** is a complete reading of your Kundli (Vedic birth chart), covering planetary placements, houses, and major life themes in one document.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>It's built from your **exact birth date, time, and location** — even a few minutes' difference can shift key placements like your Ascendant.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The report typically layers together your Lagna (ascendant) chart, Moon sign, Navamsa (D9) chart, and current planetary periods (Dashas).</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Unlike a single-topic report (like Love & Marriage or Career), Life Insights is meant as the **foundational read** — the starting point before diving into specialized reports.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Two people born on the same day can receive very different Life Insights reports if their birth times differ, since even seconds can shift the Ascendant.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What's Actually Inside a Life Insights Report
            </h2>
            <p>A well-built Life Insights report isn't a single paragraph of generic predictions — it's a layered analysis built from several distinct chart components working together.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              1. Birth Details & Panchang
            </h2>
            <p>The report opens with your core Kundli data: exact birth date, time, location, Ayanamsa used, and Panchang details (Tithi, Nakshatra, Yoga, and Karana for your birth moment). This section confirms the chart was generated accurately before any interpretation begins.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              2. Lagna Chart (D1)
            </h2>
            <p>Your Lagna, or Ascendant, is the sign rising on the eastern horizon at your birth and becomes the foundation of your entire chart — the first house. Every other house and planetary placement is read relative to this point. If Saturn sits in your 10th house, for example, career and public responsibility become a dominant life theme.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              3. Navamsa Chart (D9)
            </h2>
            <p>The D9 divisional chart refines the D1 chart, and Vedic astrologers use it specifically to understand **marriage potential, inner strength, and how mature a planet's influence really is**. A planet that looks strong in the D1 but weak in the D9 often plays out differently than expected in real life.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              4. Planetary Placements
            </h2>
            <p>The report maps all nine planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — across the 12 houses and 12 signs. Each placement is interpreted individually, then again in relation to the others, since planets influence each other through aspects and conjunctions.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              5. Dasha Periods
            </h2>
            <p>Vedic astrology uses **Dasha** systems — most commonly Vimshottari Dasha — to time when specific planetary influences become active in your life. Your Life Insights report identifies your current Mahadasha (major period) and Antardasha (sub-period), which is often the most practically useful section for understanding "why now" a certain life theme is showing up.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read Your Life Insights Report: Step by Step
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Confirm your birth details are exact.** Double-check date, time, and place before reading further — an incorrect birth time throws off the Ascendant and every house that follows.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Start with your Lagna**, not your Sun or Moon sign. In Vedic astrology, the Ascendant sets the frame for the entire chart.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify your current Dasha period.** This tells you which planet's themes are actively shaping your present chapter of life.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Cross-check major placements against the D9 chart** for anything related to marriage, partnerships, or inner resilience.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Look for patterns, not single data points.** A planet that appears "difficult" in one house often gets balanced by a favorable aspect elsewhere — read the whole chart before drawing conclusions from one placement.</li>
            </ol>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Life Insights Report vs. Specialized Reports
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Report</th><th className="p-3 border-r-2 border-black">Focus</th><th className="p-3 ">Best Used</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Life Insights**</td><td className="p-3 border-r-2 border-black">Full chart overview — personality, houses, Dashas</td><td className="p-3 ">Starting point before any other report</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Dasha Report**</td><td className="p-3 border-r-2 border-black">Detailed timeline of planetary periods</td><td className="p-3 ">Timing major decisions or life transitions</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Love & Marriage Report**</td><td className="p-3 border-r-2 border-black">Relationship and marital compatibility</td><td className="p-3 ">Evaluating a specific relationship or marriage timing</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Career Report** (if applicable)</td><td className="p-3 border-r-2 border-black">Professional strengths and timing</td><td className="p-3 ">Job changes, career planning</td></tr>
                </tbody>
              </table>
            </div>
            <p>Because Life Insights draws from your full Kundli, it's designed to be read before narrower reports — the specialized reports assume you already understand your core chart placements.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Life Insights Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Skipping straight to planetary meanings** without first noting the Lagna, which changes how every planet should be interpreted.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading Dasha periods in isolation** from the rest of the chart — the same Mahadasha plays out very differently depending on where that planet sits and what it aspects.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating a single "difficult" placement as fixed fate** rather than one factor among many that a complete chart reading balances out.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Using an approximate birth time** — even a 15-minute error can shift the Ascendant into a neighboring sign and change house placements throughout the report.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why Two People Born on the Same Day Get Different Reports
            </h2>
            <p>This surprises a lot of people the first time they compare charts with a sibling or friend. Because the Ascendant shifts roughly every two hours, and the Moon moves through the zodiac over just a few days, even people born hours apart on the same date can end up with meaningfully different Lagna and house placements — which is why a generic sun-sign horoscope can never substitute for a full Kundli-based Life Insights report.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What information do I need to generate a Life Insights report?
            </h2>
            <p>You need your exact date, time, and place of birth — the time is essential for calculating an accurate Ascendant and house placements.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How is a Life Insights report different from a daily horoscope?
            </h2>
            <p>A daily horoscope is based only on your sun sign and applies broadly to everyone born in the same month, while a Life Insights report is built from your complete, individual Kundli.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is a Dasha period and why does it matter in my report?
            </h2>
            <p>A Dasha is a Vedic astrology timing system that identifies which planet's influence is currently most active in your life, helping explain the timing behind major life events.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can my Life Insights report change over time?
            </h2>
            <p>Your birth chart itself never changes, but your active Dasha period shifts over the years, which is why revisiting your report periodically can offer fresh, timing-relevant insight.</p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why does my report use the Navamsa (D9) chart alongside my main chart?
            </h2>
            <p>The D9 chart refines and confirms placements from your main D1 chart, and is specifically used to assess marriage potential and the true strength of a planet's influence.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is a Life Insights report the same as a full birth chart reading from an astrologer?
            </h2>
            <p>It covers the same core chart elements a professional astrologer would review, but it's an automated, structured report rather than a live, personalized consultation.</p>
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
              <li>Brihat Parashara Hora Shastra — classical foundation for Vedic chart and Dasha interpretation</li>
              <li>Standard Vimshottari Dasha system used across modern Vedic astrology practice</li>
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
