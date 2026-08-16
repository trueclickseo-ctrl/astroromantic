import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/raj-yoga";

export const metadata: Metadata = {
  title: "Raj Yoga Report – Types, Formation & Effects Explained",
  description: "Understand your Raj Yoga report: how these powerful success combinations form, their types, and how to activate them for growth.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Raj Yoga Report – Types, Formation & Effects Explained",
    description: "Understand your Raj Yoga report: how these powerful success combinations form, their types, and how to activate them for growth.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Yoga Report – Types, Formation & Effects Explained",
    description: "Understand your Raj Yoga report: how these powerful success combinations form, their types, and how to activate them for growth.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Raj Yoga Report: Understanding Your Chart's Success Combinations",
      "description": "Understand your Raj Yoga report: how these powerful success combinations form, their types, and how to activate them for growth.",
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
          <span className="font-bold text-black">Raj Yoga Report: Understanding Your Chart's Success Combinations</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Raj Yoga Report: Understanding Your Chart's Success Combinations
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Raj Yoga report** identifies whether your birth chart contains one of Vedic astrology's most sought-after combinations — planetary alignments traditionally linked to success, elevated status, and significant life achievement. "Raj" means royal or kingly, and a Raj Yoga is believed to bestow influence, recognition, or authority when its ruling planets are strong and its associated Dasha period becomes active.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Raj Yoga** ("royal combination") refers to specific planetary alignments in Vedic astrology associated with success, status, authority, and material or spiritual achievement.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Most Raj Yogas form through connections between **Kendra houses (1, 4, 7, 10)** and **Trikona houses (1, 5, 9)** — the chart's most structurally powerful and fortune-linked positions.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>There are **many named types** of Raj Yoga, each formed by a different specific planetary combination, rather than one single universal pattern.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A Raj Yoga in the chart is a **potential, not a guarantee** — its actual expression depends on planetary strength, timing (Dasha), and the native's own effort.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Traditional remedies to help activate or strengthen a dormant Raj Yoga include gemstones, mantra chanting, and charitable acts tied to the yoga-forming planets.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is Raj Yoga?
            </h2>
            <p>A **Yoga** in Vedic astrology refers to a specific combination of planets, houses, or aspects that produces an effect greater than any single placement alone would suggest. **Raj Yoga** specifically describes combinations associated with royal or elevated outcomes — success, authority, recognition, and prosperity — formed primarily through connections between the chart's most powerful house categories.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How Raj Yoga Typically Forms
            </h2>
            <p>Most Raj Yogas arise from a relationship between two categories of houses:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Kendra houses (1, 4, 7, 10)** — the structural, angular backbone of the chart, tied to visible life outcomes</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Trikona houses (1, 5, 9)** — the houses of fortune, dharma, and past-life merit</li>
            </ul>
            <p>When the **lord of a Kendra house** and the **lord of a Trikona house** connect — through conjunction, mutual aspect, or exchange of signs — a Raj Yoga is typically considered to form. Because the 1st house belongs to both categories, it plays an especially central role in many Raj Yoga combinations.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Types of Raj Yoga
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Type</th><th className="p-3 border-r-2 border-black">General Formation</th><th className="p-3 ">Associated Theme</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Kendra-Trikona Raj Yoga**</td><td className="p-3 border-r-2 border-black">Lords of a Kendra and Trikona house connect</td><td className="p-3 ">The classical, most cited form of Raj Yoga</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Dharma-Karmadhipati Yoga**</td><td className="p-3 border-r-2 border-black">9th lord (dharma) connects with 10th lord (karma/career)</td><td className="p-3 ">Considered one of the most powerful, career-linked yogas</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Neech Bhanga Raj Yoga**</td><td className="p-3 border-r-2 border-black">A debilitated planet's affliction is cancelled by specific conditions</td><td className="p-3 ">Turns an apparent weakness into unexpected strength</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Gaja Kesari Yoga**</td><td className="p-3 border-r-2 border-black">Jupiter and Moon in mutual Kendra positions</td><td className="p-3 ">Wisdom, respect, and steady success</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Vipreet Raj Yoga**</td><td className="p-3 border-r-2 border-black">Lords of the 6th, 8th, or 12th houses connect in specific ways</td><td className="p-3 ">Success emerging from adversity or crisis</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Is Having Raj Yoga a Guarantee of Success?
            </h2>
            <p>No — a Raj Yoga in a chart represents **potential**, not an automatic outcome. Its actual expression depends on several factors working together:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Planetary strength** — whether the yoga-forming planets are well-placed by sign and free from significant affliction</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Dasha timing** — Raj Yoga effects tend to activate most strongly during the Mahadasha or Antardasha of the yoga-forming planets</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**The native's own effort and choices** — traditional texts consistently emphasize that a Raj Yoga "blossoms fully through the native's karma and intent," not passively on its own</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              When Does a Raj Yoga Activate?
            </h2>
            <p>Even a strong Raj Yoga tends to remain largely dormant until the **Dasha period of its forming planets** becomes active. This is why timing matters as much as the yoga's presence — a person might carry a powerful Raj Yoga in their chart for years before its effects become clearly visible, precisely because the relevant planetary period hasn't yet arrived.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Traditional Remedies to Strengthen a Raj Yoga
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Gemstones** tied to the yoga-forming planets (for example, Ruby for the Sun, Yellow Sapphire for Jupiter, Emerald for Mercury), traditionally recommended only under expert guidance</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mantra chanting**, particularly the Navagraha Mantra or mantras specific to the yoga-forming planets</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Charitable acts** aligned with the relevant planet's nature — for instance, offering food on Thursdays for Jupiter, or helping the poor on Saturdays for Saturn</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Fasting and rituals** dedicated to the yoga's associated planets, timed to their traditional weekly days</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read Your Raj Yoga Report
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify which specific Raj Yoga (if any) is present** in your chart, along with the planets forming it.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Check the strength of those planets** — dignity, house placement, and aspects all affect how powerfully the yoga can express.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Note the relevant Dasha windows** — when the yoga-forming planets' Mahadasha or Antardasha becomes active, that's typically when effects are felt most strongly.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Remember that effort still matters** — traditional astrology consistently frames Raj Yoga as potential that unfolds through the native's own choices and initiative, not passive luck.</li>
            </ol>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Raj Yoga Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming Raj Yoga guarantees automatic success** without considering planetary strength or Dasha timing.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Overlooking Dasha activation** — a Raj Yoga can sit dormant for years before its associated planetary period arrives.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating all Raj Yoga types as equally powerful** — some combinations, like Dharma-Karmadhipati Yoga, are traditionally considered especially significant compared to more minor variations.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring personal effort** — classical texts are explicit that a Raj Yoga's fullest expression depends on the native's own karma and initiative, not passive waiting.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is Raj Yoga in astrology?
            </h2>
            <p>Raj Yoga refers to specific planetary combinations, typically formed through connections between Kendra and Trikona house lords, traditionally associated with success, status, and significant life achievement.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Does having Raj Yoga mean I'll automatically become successful?
            </h2>
            <p>No — Raj Yoga represents potential that depends on the strength of its forming planets, the timing of their Dasha periods, and the individual's own effort and choices.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              When does a Raj Yoga's effect become active?
            </h2>
            <p>A Raj Yoga's effects tend to activate most strongly during the Mahadasha or Antardasha (planetary period) of the specific planets that form the yoga.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is the difference between Raj Yoga and Dhana Yoga?
            </h2>
            <p>Raj Yoga is broadly associated with status, authority, and elevated life outcomes, while Dhana Yoga specifically refers to combinations linked to wealth and financial prosperity — the two can overlap but aren't identical.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can a weak or afflicted planet still form a Raj Yoga?
            </h2>
            <p>Weak or afflicted planets can technically form the required combination, but the yoga's positive effects are generally considered stronger and more reliable when the involved planets are well-placed and free from significant affliction.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Are there remedies to activate a dormant Raj Yoga?
            </h2>
            <p>Traditional remedies include gemstones, mantra chanting, and charitable acts aligned with the yoga-forming planets, generally understood as support tools that work alongside — not instead of — the person's own effort.</p>
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
              <li>Brihat Parashara Hora Shastra — classical foundation for Raj Yoga formation principles</li>
              <li>Standard Kendra-Trikona Raj Yoga framework used across contemporary Vedic astrology practice</li>
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
