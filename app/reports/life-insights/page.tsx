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

const faqs = [
  {
    question: "What information do I need to generate a Life Insights report?",
    answer: "You need your exact date, time, and place of birth — the time is essential for calculating an accurate Ascendant and house placements."
  },
  {
    question: "How is a Life Insights report different from a daily horoscope?",
    answer: "A daily horoscope is based only on your sun sign and applies broadly to everyone born in the same month, while a Life Insights report is built from your complete, individual Kundli."
  },
  {
    question: "What is a Dasha period and why does it matter in my report?",
    answer: "A Dasha is a Vedic astrology timing system that identifies which planet's influence is currently most active in your life, helping explain the timing behind major life events."
  },
  {
    question: "Can my Life Insights report change over time?",
    answer: "Your birth chart itself never changes, but your active Dasha period shifts over the years, which is why revisiting your report periodically can offer fresh, timing-relevant insight."
  },
  {
    question: "Why does my report use the Navamsa (D9) chart alongside my main chart?",
    answer: "The D9 chart refines and confirms placements from your main D1 chart, and is specifically used to assess marriage potential and the true strength of a planet's influence."
  },
  {
    question: "Is a Life Insights report the same as a full birth chart reading from an astrologer?",
    answer: "It covers the same core chart elements a professional astrologer would review, but it's an automated, structured report rather than a live, personalized consultation."
  }
];

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

export default function LifeInsightsReportPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Kundli Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Life Insights Report: Your Complete Kundli Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            A <strong>Life Insights report</strong> is a full-spectrum reading of your Kundli — the Vedic birth chart that maps where every planet sat in the sky at the exact moment you were born. Instead of focusing on one life area, it pulls together your Ascendant, Moon sign, planetary placements, and current Dasha period to give you a complete picture of personality, strengths, challenges, and life direction. Think of it as the foundation report — the one worth reading before any specialized report like Career, Love & Marriage, or Dosha analysis.
          </p>
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
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>A <strong>Life Insights report</strong> is a complete reading of your Kundli (Vedic birth chart), covering planetary placements, houses, and major life themes in one document.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>It's built from your <strong>exact birth date, time, and location</strong> — even a few minutes' difference can shift key placements like your Ascendant.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>The report typically layers together your Lagna (ascendant) chart, Moon sign, Navamsa (D9) chart, and current planetary periods (Dashas).</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Unlike a single-topic report (like Love & Marriage or Career), Life Insights is meant as the <strong>foundational read</strong> — the starting point before diving into specialized reports.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Two people born on the same day can receive very different Life Insights reports if their birth times differ, since even seconds can shift the Ascendant.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What's Actually Inside a Life Insights Report
            </h2>
            <p>
              A well-built Life Insights report isn't a single paragraph of generic predictions — it's a layered analysis built from several distinct chart components working together.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold font-mono text-black">1. Birth Details & Panchang</h3>
              <p>
                The report opens with your core Kundli data: exact birth date, time, location, Ayanamsa used, and Panchang details (Tithi, Nakshatra, Yoga, and Karana for your birth moment). This section confirms the chart was generated accurately before any interpretation begins.
              </p>

              <h3 className="text-xl font-bold font-mono text-black">2. Lagna Chart (D1)</h3>
              <p>
                Your Lagna, or Ascendant, is the sign rising on the eastern horizon at your birth and becomes the foundation of your entire chart — the first house. Every other house and planetary placement is read relative to this point. If Saturn sits in your 10th house, for example, career and public responsibility become a dominant life theme.
              </p>

              <h3 className="text-xl font-bold font-mono text-black">3. Navamsa Chart (D9)</h3>
              <p>
                The D9 divisional chart refines the D1 chart, and Vedic astrologers use it specifically to understand <strong>marriage potential, inner strength, and how mature a planet's influence really is</strong>. A planet that looks strong in the D1 but weak in the D9 often plays out differently than expected in real life.
              </p>

              <h3 className="text-xl font-bold font-mono text-black">4. Planetary Placements</h3>
              <p>
                The report maps all nine planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — across the 12 houses and 12 signs. Each placement is interpreted individually, then again in relation to the others, since planets influence each other through aspects and conjunctions.
              </p>

              <h3 className="text-xl font-bold font-mono text-black">5. Dasha Periods</h3>
              <p>
                Vedic astrology uses <strong>Dasha</strong> systems — most commonly Vimshottari Dasha — to time when specific planetary influences become active in your life. Your Life Insights report identifies your current Mahadasha (major period) and Antardasha (sub-period), which is often the most practically useful section for understanding "why now" a certain life theme is showing up.
              </p>
            </div>
          </section>

          {/* Section 2 - Steps */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read Your Life Insights Report: Step by Step
            </h2>
            <ol className="list-decimal pl-6 space-y-3 font-sans">
              <li><strong>Confirm your birth details are exact.</strong> Double-check date, time, and place before reading further — an incorrect birth time throws off the Ascendant and every house that follows.</li>
              <li><strong>Start with your Lagna</strong>, not your Sun or Moon sign. In Vedic astrology, the Ascendant sets the frame for the entire chart.</li>
              <li><strong>Identify your current Dasha period.</strong> This tells you which planet's themes are actively shaping your present chapter of life.</li>
              <li><strong>Cross-check major placements against the D9 chart</strong> for anything related to marriage, partnerships, or inner resilience.</li>
              <li><strong>Look for patterns, not single data points.</strong> A planet that appears "difficult" in one house often gets balanced by a favorable aspect elsewhere — read the whole chart before drawing conclusions from one placement.</li>
            </ol>
          </section>

          {/* Section 3 - Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Life Insights Report vs. Specialized Reports
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Report</th>
                    <th className="p-3 border-r-2 border-black">Focus</th>
                    <th className="p-3">Best Used</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Life Insights</td><td className="p-3 border-r-2 border-black">Full chart overview — personality, houses, Dashas</td><td className="p-3">Starting point before any other report</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Dasha Report</td><td className="p-3 border-r-2 border-black">Detailed timeline of planetary periods</td><td className="p-3">Timing major decisions or life transitions</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Love & Marriage Report</td><td className="p-3 border-r-2 border-black">Relationship and marital compatibility</td><td className="p-3">Evaluating a specific relationship or marriage timing</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Career Report (if applicable)</td><td className="p-3 border-r-2 border-black">Professional strengths and timing</td><td className="p-3">Job changes, career planning</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Because Life Insights draws from your full Kundli, it's designed to be read before narrower reports — the specialized reports assume you already understand your core chart placements.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Life Insights Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Skipping straight to planetary meanings</strong> without first noting the Lagna, which changes how every planet should be interpreted.</li>
              <li><strong>Reading Dasha periods in isolation</strong> from the rest of the chart — the same Mahadasha plays out very differently depending on where that planet sits and what it aspects.</li>
              <li><strong>Treating a single "difficult" placement as fixed fate</strong> rather than one factor among many that a complete chart reading balances out.</li>
              <li><strong>Using an approximate birth time</strong> — even a 15-minute error can shift the Ascendant into a neighboring sign and change house placements throughout the report.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why Two People Born on the Same Day Get Different Reports
            </h2>
            <p>
              This surprises a lot of people the first time they compare charts with a sibling or friend. Because the Ascendant shifts roughly every two hours, and the Moon moves through the zodiac over just a few days, even people born hours apart on the same date can end up with meaningfully different Lagna and house placements — which is why a generic sun-sign horoscope can never substitute for a full Kundli-based Life Insights report.
            </p>
          </section>

          {/* Section 6 - FAQs */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-b-3 border-black pb-2">
              <HelpCircle className="w-7 h-7 text-black flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#f4f3ef] border-2 border-black rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_#000000] cursor-pointer"
                >
                  <summary className="font-bold font-mono text-base sm:text-lg text-black list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 font-mono text-xl font-bold ml-2">▼</span>
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-zinc-800 font-sans leading-relaxed pt-2 border-t border-zinc-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Section 7 - Suggested Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Related Report Guides & Concepts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/vedic/zodiac-signs/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Your Moon Sign (Rashi)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/vedic/houses/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>The 12 Houses (Bhavas)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/dasha/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Dasha Periods Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/love-marriage/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Marriage Compatibility Report</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Section 8 - External References / Sources */}
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

        {/* Explore Astrology Nav Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
