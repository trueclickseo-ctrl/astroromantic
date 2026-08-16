import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/western/houses";

export const metadata: Metadata = {
  title: "Western Astrology Houses – The 12 Houses Explained",
  description: "Learn the 12 houses in Western astrology, what each governs, and how the Ascendant, Midheaven, and house systems shape your chart.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Western Astrology Houses – The 12 Houses Explained",
    description: "Learn the 12 houses in Western astrology, what each governs, and how the Ascendant, Midheaven, and house systems shape your chart.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Astrology Houses – The 12 Houses Explained",
    description: "Learn the 12 houses in Western astrology, what each governs, and how the Ascendant, Midheaven, and house systems shape your chart.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "The 12 Houses in Western Astrology",
      "description": "Learn the 12 houses in Western astrology, what each governs, and how the Ascendant, Midheaven, and house systems shape your chart.",
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
          <span className="font-bold text-black">The 12 Houses in Western Astrology</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rose-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Western Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            The 12 Houses in Western Astrology
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">In Western astrology, the **12 houses** divide your birth chart into life-area sectors — identity, money, relationships, career, and more — showing *where* a planet's energy is most active. While your zodiac sign describes personality traits in general terms, houses translate those same planetary energies into specific, lived areas of your life, from your first house of self-image all the way around to your twelfth house of the subconscious.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **12 houses** in Western astrology represent life areas — from identity and money to career and spirituality — that a planet's placement activates.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Your **1st house begins at your Ascendant**, the sign rising on the eastern horizon at your exact birth time and location.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **Angular houses (1, 4, 7, 10)** are considered the most powerful, anchored to the four key astronomical points of your chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **10th house cusp is called the Midheaven (MC)**, marking your most public, career-oriented point in the chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Unlike your sun sign, houses require your **exact birth time and location** — without them, house placements can't be calculated accurately.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Are Astrological Houses?
            </h2>
            <p>Houses are based on the geographic place and moment of your birth, not just the date. Your **first house** begins exactly where the ecliptic — the Sun's apparent path — meets the eastern horizon at your birth: this point is your Ascendant, or Rising sign. From there, the remaining 11 houses follow counter-clockwise around your chart.</p>
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
                    <th className="p-3 border-r-2 border-black">House</th><th className="p-3 ">Governs</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">1st</td><td className="p-3 ">Self-image, identity, first impressions</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">2nd</td><td className="p-3 ">Money, resources, personal values</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">3rd</td><td className="p-3 ">Communication, siblings, short trips, early learning</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">4th</td><td className="p-3 ">Home, family, emotional roots</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">5th</td><td className="p-3 ">Creativity, romance, self-expression, children</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">6th</td><td className="p-3 ">Health, daily routines, work, service</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">7th</td><td className="p-3 ">Partnerships, marriage, one-on-one relationships</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">8th</td><td className="p-3 ">Transformation, shared resources, intimacy</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">9th</td><td className="p-3 ">Higher learning, travel, philosophy, belief systems</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">10th</td><td className="p-3 ">Career, public status, ambition</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">11th</td><td className="p-3 ">Friendships, groups, social causes, future goals</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">12th</td><td className="p-3 ">Subconscious, privacy, spirituality, self-undoing</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Angular Houses: The Chart's Structural Backbone
            </h2>
            <p>Four houses — the 1st, 4th, 7th, and 10th — are called **Angular houses**, and they're considered the most powerful in the entire chart because each one is anchored to a specific astronomical point:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**1st House (Ascendant)** — where the ecliptic meets the eastern horizon</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**4th House (IC / Imum Coeli)** — the lowest point of the chart, opposite the Midheaven</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**7th House (Descendant)** — directly opposite the Ascendant, on the western horizon</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**10th House (Midheaven / MC)** — the highest point of the chart at your exact birth moment</li>
            </ul>
            <p>Planets placed in Angular houses tend to express themselves prominently and visibly in your life.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Midheaven: Your Career Point
            </h2>
            <p>The cusp of the 10th house is known as the **Midheaven**, or MC, and it's one of the most closely watched points in a career-focused reading. It represents your public life, professional reputation, and legacy — essentially, how the world sees your ambition and achievements. The sign on your Midheaven often colors your general career direction more than any single planet placement.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              House Systems: Why They Vary
            </h2>
            <p>Not all astrology software calculates houses the same way. Several **house systems** exist, and each divides the chart differently:</p>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">House System</th><th className="p-3 ">How It Divides Houses</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Placidus**</td><td className="p-3 ">Time-based, unequal house sizes — the most common modern system</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Whole Sign**</td><td className="p-3 ">Each house equals exactly one zodiac sign, all equal size — common in Vedic and Hellenistic astrology</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Equal House**</td><td className="p-3 ">30 degrees per house starting from the Ascendant, ignoring the Midheaven's exact degree</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Koch**</td><td className="p-3 ">A time-based system similar to Placidus, popular in parts of Europe</td></tr>
                </tbody>
              </table>
            </div>
            <p>Because house cusps can shift depending on the system used, two charts calculated for the same birth data can show slightly different house placements — this is normal and not a calculation error.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read a House in Your Chart
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Confirm your exact birth time and location** — houses cannot be calculated accurately without both.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify your Ascendant** to locate your 1st house cusp.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Note which sign falls on each house cusp**, which colors that life area's general tone.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Check which planets occupy each house** — an empty house isn't a "missing" life area, just one that isn't currently emphasized by a planet.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Pay special attention to Angular houses (1, 4, 7, 10)**, since planets here tend to have outsized visible impact.</li>
            </ol>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Interpreting Houses
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming an empty house means that life area is absent** — it simply means less planetary emphasis there; transits will eventually activate it.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring the house system your chart uses**, which can shift cusp degrees and occasionally move a planet into a neighboring house.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading a house without checking its ruling sign's planet** elsewhere in the chart, which adds important context.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Using an approximate birth time**, which can significantly distort house placements, especially for Angular houses.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is the difference between a sign and a house?
            </h2>
            <p>A sign describes *how* a planet's energy expresses (its personality style), while a house describes *where* in your life that energy is focused (career, relationships, and so on).</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why do I need my exact birth time for houses?
            </h2>
            <p>Houses are calculated from the Ascendant, which is determined by your exact birth time and location — the Ascendant shifts roughly every two hours, so even small time errors can move it into a different sign.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is the Midheaven and why does it matter?
            </h2>
            <p>The Midheaven is the cusp of the 10th house, representing your public reputation, career direction, and life ambitions — it's one of the most examined points in career-focused chart readings.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Which house system is most accurate?
            </h2>
            <p>No single house system is universally considered "most accurate" — Placidus is the most common in modern Western practice, while Whole Sign houses are favored by many traditional and Hellenistic astrologers.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What does it mean if I have no planets in a house?
            </h2>
            <p>An empty house simply means no natal planet is currently emphasizing that life area — it doesn't mean the life area is absent, and future planetary transits will still activate it periodically.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Are the Angular houses more important than the others?
            </h2>
            <p>Angular houses (1, 4, 7, 10) are generally considered the most prominent because they're anchored to key astronomical points, but the Succedent (2, 5, 8, 11) and Cadent (3, 6, 9, 12) houses still meaningfully shape a complete reading.</p>
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
              <li>Claudius Ptolemy, *Tetrabiblos* — early formalization of house-based astrological interpretation</li>
              <li>Standard Placidus and Whole Sign house system definitions used across modern astrology software</li>
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
