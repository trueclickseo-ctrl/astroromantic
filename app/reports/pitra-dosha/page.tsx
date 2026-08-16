import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/pitra-dosha";

export const metadata: Metadata = {
  title: "Pitra Dosha Report – Meaning, Causes & Remedies",
  description: "Understand your Pitra Dosha report: what causes ancestral karma affliction, its effects, and traditional remedies for balance.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Pitra Dosha Report – Meaning, Causes & Remedies",
    description: "Understand your Pitra Dosha report: what causes ancestral karma affliction, its effects, and traditional remedies for balance.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitra Dosha Report – Meaning, Causes & Remedies",
    description: "Understand your Pitra Dosha report: what causes ancestral karma affliction, its effects, and traditional remedies for balance.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Pitra Dosha Report: Understanding Ancestral Karma in Your Chart",
      "description": "Understand your Pitra Dosha report: what causes ancestral karma affliction, its effects, and traditional remedies for balance.",
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
          <span className="font-bold text-black">Pitra Dosha Report: Understanding Ancestral Karma in Your Chart</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Pitra Dosha Report: Understanding Ancestral Karma in Your Chart
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Pitra Dosha report** examines a chart pattern tied to ancestral karma — unresolved debts or unfulfilled duties believed to be carried forward from one's forebears (Pitru). Unlike Mangal or Kalsarp Dosha, which are purely planetary-position patterns, Pitra Dosha carries a distinctly familial and ancestral dimension, often prompting remedies centered on honoring and appeasing one's lineage rather than purely astrological correction.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Pitra Dosha** ("ancestral debt") is a Vedic astrology concept linked to unresolved karma tied to one's ancestors (Pitru), often connected to Sun affliction in the birth chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>It's traditionally associated with the **Sun placed alongside or afflicted by Rahu, Ketu, or Saturn** in specific houses, particularly the 9th house (linked to father and ancestry).</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Effects commonly attributed to Pitra Dosha include **delays in major life milestones**, family discord, or a persistent sense of something unresolved from the past.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Traditional remedies focus on **honoring ancestors** — including Shraddha rituals, Tarpan offerings, and specific pilgrimage practices.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Like other doshas, Pitra Dosha is understood as a **pattern to work with consciously**, not a permanent curse without recourse.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is Pitra Dosha?
            </h2>
            <p>**Pitra Dosha** refers to an astrological affliction believed to stem from unresolved obligations to one's ancestors — perhaps rituals left unperformed, family conflicts left unresolved, or karmic debts carried forward across generations. Astrologically, it's most commonly linked to the **Sun** (which governs father, authority, and lineage) being afflicted by shadow planets Rahu or Ketu, or by Saturn, particularly when this affliction occurs in the **9th house**, traditionally associated with father and ancestry.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Causes Pitra Dosha in a Chart
            </h2>
            <p>While specific interpretations vary among astrologers, the most commonly cited causes include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Sun conjunct or aspected by Rahu or Ketu**, especially in the 9th house</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Saturn's affliction on the Sun**, creating tension between authority/lineage themes and karmic delay</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Afflictions to the 9th house lord**, since this house governs father, ancestors, and dharma</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Weak or debilitated Sun** in general, regardless of specific conjunctions</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Commonly Attributed Effects
            </h2>
            <p>Vedic tradition and contemporary practitioners often link Pitra Dosha to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Delays in marriage, childbirth, or career milestones**</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Recurring family conflicts** or a sense of disconnect within the family</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Health concerns**, particularly if the dosha significantly afflicts the Sun's placement</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**A persistent, hard-to-name feeling of something unresolved**, which some describe as an ancestral weight carried without full awareness</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Pitra Dosha vs. Other Major Doshas
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black"></th><th className="p-3 border-r-2 border-black">Pitra Dosha</th><th className="p-3 border-r-2 border-black">Mangal Dosha</th><th className="p-3 ">Kalsarp Dosha</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Core planet(s)**</td><td className="p-3 border-r-2 border-black">Sun (afflicted by Rahu/Ketu/Saturn)</td><td className="p-3 border-r-2 border-black">Mars</td><td className="p-3 ">All 7 planets vs. Rahu-Ketu axis</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Primary theme**</td><td className="p-3 border-r-2 border-black">Ancestral karma, unresolved family debt</td><td className="p-3 border-r-2 border-black">Relationship intensity, marriage timing</td><td className="p-3 ">Broad life obstacles, karmic struggle</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Key house**</td><td className="p-3 border-r-2 border-black">9th house especially</td><td className="p-3 border-r-2 border-black">1st, 2nd, 4th, 7th, 8th, or 12th</td><td className="p-3 ">Rahu's house placement (12 types)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Primary remedy focus**</td><td className="p-3 border-r-2 border-black">Honoring ancestors, Shraddha rituals</td><td className="p-3 border-r-2 border-black">Mars-specific mantras and gemstones</td><td className="p-3 ">Shiva worship, pilgrimage</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Traditional Remedies for Pitra Dosha
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Shraddha rituals** — traditional ceremonies performed to honor deceased ancestors, often on specific lunar dates</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Tarpan (water offerings)** — a ritual offering made to ancestors, commonly performed during Pitru Paksha (a dedicated period in the Hindu calendar)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Pilgrimage to sacred sites**, such as Gaya in Bihar, specifically associated with ancestral rites in Hindu tradition</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Charitable donations**, particularly food, clothing, or support offered in the name of one's ancestors</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Respecting and caring for elders** in daily life, seen as a living extension of honoring one's lineage</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read a Pitra Dosha Report
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Check the Sun's placement and aspects**, particularly any conjunction or aspect involving Rahu, Ketu, or Saturn.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Pay special attention to the 9th house**, since afflictions here are most strongly associated with this specific dosha.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Consider the broader chart context** — a strong benefic influence elsewhere can meaningfully soften the pattern's traditionally attributed intensity.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Look at family history patterns**, since some astrologers cross-reference reported family circumstances alongside the chart indicators.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Approach remedies as intentional, ongoing practice** rather than a single fix — most traditional remedies for Pitra Dosha are ritual-based and repeated over time.</li>
            </ol>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Pitra Dosha Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming any Sun affliction automatically means Pitra Dosha** — the specific involvement of Rahu, Ketu, or Saturn, especially in the 9th house, is what defines this particular pattern.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating it as a fixed, unchangeable curse** rather than a pattern that traditional practice offers active, ongoing ways to address.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Overlooking the emotional and cultural dimension** — Pitra Dosha remedies are often as much about genuine reconnection with family and ancestry as they are astrological correction.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Confusing Pitra Dosha with general family conflict** — not every family difficulty in a person's life stems from this specific astrological pattern.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What causes Pitra Dosha in a birth chart?
            </h2>
            <p>Pitra Dosha is most commonly linked to the Sun being afflicted by Rahu, Ketu, or Saturn, particularly when this affliction occurs in or affects the 9th house, which governs father and ancestry.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What are the common effects of Pitra Dosha?
            </h2>
            <p>It's traditionally associated with delays in major life milestones like marriage or childbirth, recurring family conflicts, and a persistent sense of something unresolved tied to one's lineage.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is Shraddha and how does it relate to Pitra Dosha?
            </h2>
            <p>Shraddha is a traditional Hindu ritual performed to honor deceased ancestors, and it's one of the most commonly recommended remedies for addressing Pitra Dosha.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Pitra Dosha the same in every family?
            </h2>
            <p>No — the specific planetary configuration causing Pitra Dosha varies from chart to chart, and its intensity depends on the broader context of the individual's complete birth chart.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can Pitra Dosha be permanently resolved?
            </h2>
            <p>Traditional practice treats it as something addressed through ongoing ritual, respect, and remembrance of ancestors, rather than a one-time fix — many families incorporate these practices as regular, recurring observances.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Pitra Dosha recognized in all branches of Vedic astrology?
            </h2>
            <p>It's a widely discussed concept across contemporary Vedic astrology practice, though interpretations of its specific causes and required remedies can vary between different astrological traditions and individual practitioners.</p>
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
              <li>Classical Hindu ritual practice regarding Shraddha and Tarpan for ancestral remembrance</li>
              <li>Standard Vedic astrology framework linking Sun affliction to Pitra Dosha formation</li>
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
