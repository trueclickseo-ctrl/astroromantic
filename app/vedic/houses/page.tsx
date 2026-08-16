import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/vedic/houses";

export const metadata: Metadata = {
  title: "Vedic Astrology Houses – The 12 Bhavas Explained",
  description: "Understand the 12 houses (Bhavas) in Vedic astrology, what each governs, and how planets in each house shape your Kundli.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Vedic Astrology Houses – The 12 Bhavas Explained",
    description: "Understand the 12 houses (Bhavas) in Vedic astrology, what each governs, and how planets in each house shape your Kundli.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Astrology Houses – The 12 Bhavas Explained",
    description: "Understand the 12 houses (Bhavas) in Vedic astrology, what each governs, and how planets in each house shape your Kundli.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "The 12 Houses in Vedic Astrology: Bhava Explained",
      "description": "Understand the 12 houses (Bhavas) in Vedic astrology, what each governs, and how planets in each house shape your Kundli.",
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
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Vedic Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            The 12 Houses in Vedic Astrology: Bhava Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">In Vedic astrology, a **Bhava**, or house, is one of 12 fixed segments of your birth chart, each representing a distinct area of life — from identity and wealth to marriage, career, and spiritual liberation. While your Rashi (zodiac sign) shows *how* a planet's energy expresses, the house shows *where* in your life that energy plays out. Together, the 12 houses map your entire life journey onto the wheel of your Kundli.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A **Bhava** (house) is one of 12 fixed life-area divisions in a Vedic birth chart, each governing a different domain — self, wealth, career, relationships, and more.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **first house (Lagna)** begins at your Ascendant and sets the frame every other house is measured against.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **Kendra houses (1, 4, 7, 10)** are considered the most powerful, forming the structural backbone of the chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **Trikona houses (1, 5, 9)** are linked to fortune and dharma, while the **Dusthana houses (6, 8, 12)** relate to obstacles and transformation.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A house's meaning depends on three factors together: which sign occupies it, which planets sit inside it, and which planet rules it.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Bhava?
            </h2>
            <p>Your first house begins at your Lagna (Ascendant) — the sign rising on the eastern horizon at your exact moment of birth — and the remaining 11 houses follow in sequence around the chart. Because the Lagna depends on precise birth time, house placements are one of the most time-sensitive parts of a Vedic reading; even a small error in birth time can shift planets into a neighboring house and change their interpretation significantly.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 12 Houses and What Each Governs
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">House</th><th className="p-3 border-r-2 border-black">Sanskrit Name</th><th className="p-3 ">Governs</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">1st</td><td className="p-3 border-r-2 border-black">Lagna Bhava</td><td className="p-3 ">Self, identity, physical body</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">2nd</td><td className="p-3 border-r-2 border-black">Dhana Bhava</td><td className="p-3 ">Wealth, family, speech</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">3rd</td><td className="p-3 border-r-2 border-black">Sahaja Bhava</td><td className="p-3 ">Courage, siblings, communication</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">4th</td><td className="p-3 border-r-2 border-black">Sukha Bhava</td><td className="p-3 ">Home, mother, emotional foundation</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">5th</td><td className="p-3 border-r-2 border-black">Putra Bhava</td><td className="p-3 ">Creativity, children, intelligence</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">6th</td><td className="p-3 border-r-2 border-black">Ripu Bhava</td><td className="p-3 ">Health, obstacles, service, enemies</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">7th</td><td className="p-3 border-r-2 border-black">Kalatra Bhava</td><td className="p-3 ">Marriage, partnerships, business</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">8th</td><td className="p-3 border-r-2 border-black">Ayur Bhava</td><td className="p-3 ">Transformation, longevity, hidden matters</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">9th</td><td className="p-3 border-r-2 border-black">Dharma Bhava</td><td className="p-3 ">Fortune, higher learning, spirituality</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">10th</td><td className="p-3 border-r-2 border-black">Karma Bhava</td><td className="p-3 ">Career, public status, authority</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">11th</td><td className="p-3 border-r-2 border-black">Labha Bhava</td><td className="p-3 ">Gains, income, social networks</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">12th</td><td className="p-3 border-r-2 border-black">Vyaya Bhava</td><td className="p-3 ">Loss, spirituality, foreign lands, liberation</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Kendra, Trikona, and Dusthana: The Three House Groups
            </h2>
            <p>Vedic astrologers don't treat all 12 houses as equal in weight. They're grouped by function:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Kendra (Angular) Houses — 1, 4, 7, 10:** The structural pillars of the chart, tied to visible, tangible life outcomes: self, home, partnerships, and career. Planets here tend to express strongly and visibly.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Trikona (Trine) Houses — 1, 5, 9:** Linked to fortune, dharma, and past-life merit. Benefic planets here are considered especially auspicious.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Dusthana (Difficult) Houses — 6, 8, 12:** Associated with obstacles, transformation, and loss — not inherently "bad," but areas requiring more conscious effort and often bringing the deepest growth.</li>
            </ul>
            <p>Notice that the 1st house belongs to both the Kendra and Trikona groups, which is part of why it's considered the single most important house in the entire chart.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read a House: Three Layers Together
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**The sign on the house cusp** — this colors the general tone and personality of that life area.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Planets occupying the house** — any planet physically placed there directly influences that domain.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**The house's ruling planet (lord)** and where that lord sits elsewhere in the chart — this shows how the house's themes connect to the rest of your life.</li>
            </ol>
            <p>For example, if Saturn sits in your 10th house, career and public responsibility become a defining life theme — but where the 10th house's own ruling planet sits elsewhere in the chart adds important nuance to how that theme actually unfolds.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Interpreting Houses
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading a house in isolation** without checking its ruling planet's placement elsewhere in the chart.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating Dusthana houses as purely negative** — the 8th and 12th houses are strongly linked to spiritual depth and transformation, not just difficulty.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Using an inaccurate birth time**, which shifts the entire house structure and can misplace planets into the wrong house entirely.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring house rulership** — the sign on a house cusp determines which planet "owns" that house, a step many beginners skip.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is the most important house in a Vedic chart?
            </h2>
            <p>The 1st house (Lagna) is generally considered the most important, since it establishes the Ascendant that every other house and planetary placement is measured against.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What's the difference between Kendra and Trikona houses?
            </h2>
            <p>Kendra houses (1, 4, 7, 10) form the structural backbone tied to visible life outcomes, while Trikona houses (1, 5, 9) are linked specifically to fortune, dharma, and past-life merit.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Are the 6th, 8th, and 12th houses always bad?
            </h2>
            <p>No — these Dusthana houses relate to obstacles and transformation, but they're also linked to service, deep spiritual growth, and liberation, depending on the specific planets and signs involved.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How does my birth time affect my houses?
            </h2>
            <p>Your birth time determines your exact Ascendant, which sets the starting point for all 12 houses — even a difference of a few minutes can shift a planet from one house into the next.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do houses matter more than planets in a chart reading?
            </h2>
            <p>Neither matters more — houses and planets work together, since a planet's placement tells you *where* its energy focuses, but the planet itself tells you *what* kind of energy is being expressed there.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is the house system the same in Western and Vedic astrology?
            </h2>
            <p>Both systems use 12 houses with broadly similar life-area meanings, but Vedic astrology generally uses whole-sign houses (each house equals one full sign) while Western astrology commonly uses systems like Placidus that divide houses unevenly.</p>
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
              <li>Brihat Parashara Hora Shastra — classical foundation for Bhava (house) interpretation in Vedic astrology</li>
              <li>Standard Kendra/Trikona/Dusthana house classification used across Jyotish practice</li>
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
