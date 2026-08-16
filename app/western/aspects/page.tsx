import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/western/aspects";

export const metadata: Metadata = {
  title: "Astrological Aspects – Conjunction, Trine, Square Explained",
  description: "Learn the 5 major astrological aspects — conjunction, sextile, square, trine, opposition — what each means and how to read them in a chart.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Astrological Aspects – Conjunction, Trine, Square Explained",
    description: "Learn the 5 major astrological aspects — conjunction, sextile, square, trine, opposition — what each means and how to read them in a chart.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrological Aspects – Conjunction, Trine, Square Explained",
    description: "Learn the 5 major astrological aspects — conjunction, sextile, square, trine, opposition — what each means and how to read them in a chart.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Astrological Aspects: Conjunction, Trine, Square, Opposition & Sextile",
      "description": "Learn the 5 major astrological aspects — conjunction, sextile, square, trine, opposition — what each means and how to read them in a chart.",
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
            Astrological Aspects: Conjunction, Trine, Square, Opposition & Sextile
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">**Astrological aspects** describe the angles planets form with each other on the zodiac wheel, and they're how astrologers read the way different parts of your personality communicate, support, or clash with one another. Codified by the astrologer Ptolemy in the second century CE, the five major aspects — conjunction, sextile, square, trine, and opposition — remain the foundation of both traditional and modern chart interpretation.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Aspects** are the angular relationships planets form with each other on the zodiac wheel, and they show how different parts of your personality interact.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **five major aspects** — conjunction (0°), sextile (60°), square (90°), trine (120°), and opposition (180°) — were codified by Ptolemy nearly 2,000 years ago and remain the foundation of aspect interpretation today.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Aspects split into two broad categories: **harmonious (soft)** aspects like trines and sextiles, and **challenging (hard)** aspects like squares and oppositions.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **orb** — how many degrees an aspect can deviate from exact and still count — determines an aspect's strength; tighter orbs mean stronger, more keenly felt effects.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Challenging aspects aren't "bad" — they're often the primary source of **motivation, growth, and psychological development** in a chart.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is an Aspect, Exactly?
            </h2>
            <p>No planet in a birth chart exists in isolation. Aspects are the language planets use to "talk" to each other, measured as the angular distance between two planets on the 360-degree zodiac wheel. Depending on that angle, two planets might reinforce each other's energy, create productive tension, or blend so closely their qualities become hard to separate.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Five Major Aspects
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Aspect</th><th className="p-3 border-r-2 border-black">Angle</th><th className="p-3 border-r-2 border-black">Type</th><th className="p-3 ">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Conjunction**</td><td className="p-3 border-r-2 border-black">0°</td><td className="p-3 border-r-2 border-black">Neutral/Intensifying</td><td className="p-3 ">Planets merge, amplifying each other's energy</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Sextile**</td><td className="p-3 border-r-2 border-black">60°</td><td className="p-3 border-r-2 border-black">Harmonious (soft)</td><td className="p-3 ">Opportunity that requires some conscious effort to use</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Square**</td><td className="p-3 border-r-2 border-black">90°</td><td className="p-3 border-r-2 border-black">Challenging (hard)</td><td className="p-3 ">Tension that demands action and creates growth through friction</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Trine**</td><td className="p-3 border-r-2 border-black">120°</td><td className="p-3 border-r-2 border-black">Harmonious (soft)</td><td className="p-3 ">Natural, effortless flow of talent and ease</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Opposition**</td><td className="p-3 border-r-2 border-black">180°</td><td className="p-3 border-r-2 border-black">Challenging (hard)</td><td className="p-3 ">Push-pull tension, often worked out through relationships</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Conjunction (0°)
            </h2>
            <p>When two or more planets sit at the same degree, their energies blend and intensify. A conjunction isn't inherently positive or negative — it depends heavily on which planets are involved. Sun conjunct Mercury, for example, often produces strong communication skills, while a conjunction between a personal planet and an outer planet can feel more overwhelming, almost like an "invasion" of that outer planet's themes into daily life.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Sextile (60°)
            </h2>
            <p>Sextiles represent opportunity — talents and openings that are available, but that typically require a conscious effort to activate, unlike the automatic ease of a trine.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Square (90°)
            </h2>
            <p>Squares create tension between two planets whose signs are usually elementally incompatible. This friction is uncomfortable but productive: it's one of the primary sources of motivation, forcing action and growth rather than complacency.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Trine (120°)
            </h2>
            <p>Trines connect planets in the same element, producing a natural, flowing expression of talent. The energy comes so easily that it can sometimes go untapped simply because it never demands effort the way a square does.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Opposition (180°)
            </h2>
            <p>Oppositions sit two planets directly across from each other, generally in compatible elements. This aspect often plays out through relationships — people with strong oppositions tend to seek out others who mirror their own internal tension, learning about themselves through that dynamic.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Minor Aspects Worth Knowing
            </h2>
            <p>Beyond the five major aspects, several minor aspects add nuance to a chart:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Semi-sextile (30°)** — a subtle, minor connection</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Semi-square (45°)** — a mild version of square-like friction</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Quincunx / Inconjunct (150°)** — requires ongoing adjustment; energies don't naturally integrate</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Quintile (72°)** — associated with creativity and unique talent</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Understanding Orbs
            </h2>
            <p>An aspect isn't required to be at the exact angle to count — astrologers allow a small margin called an **orb**. A conjunction at exactly 0° is far more powerful than one at an 8-degree orb, and generally, aspects with orbs under 3 degrees are felt most strongly and consistently in a person's life.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Hard Aspects vs. Soft Aspects
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black"></th><th className="p-3 border-r-2 border-black">Hard (Challenging) Aspects</th><th className="p-3 ">Soft (Harmonious) Aspects</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Includes**</td><td className="p-3 border-r-2 border-black">Square, opposition</td><td className="p-3 ">Trine, sextile</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Feels like**</td><td className="p-3 border-r-2 border-black">Friction, tension, demand for action</td><td className="p-3 ">Ease, natural flow, effortless talent</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Growth style**</td><td className="p-3 border-r-2 border-black">Forces conscious development through discomfort</td><td className="p-3 ">Talent available, but can go underused without effort</td></tr>
                </tbody>
              </table>
            </div>
            <p>Importantly, "hard" doesn't mean "bad." Many astrologers consider challenging aspects the true engine of personal growth in a chart — without them, a life can feel directionless or lacking urgency.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read Aspects: Step by Step
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify the major aspects first** — conjunctions, squares, trines, and oppositions are the loudest voices in a chart.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Note the orb** — tighter orbs (under 3°) mean the aspect is felt more strongly.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Consider the planets involved**, not just the angle — a square between two naturally harmonious planets (like Venus and Jupiter) plays out very differently than one between two challenging planets (like Mars and Saturn).</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Look for aspect patterns** — multiple connected aspects can form larger structures like a Grand Trine or T-Square, which tell a more complex story than any single aspect alone.</li>
            </ol>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading Aspects
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming hard aspects are purely negative** — they're frequently the source of ambition, resilience, and meaningful growth.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring the orb** — a wide, loose aspect has far less impact than a tight, exact one.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading an aspect without considering the planets' natures** — the same angle means something different depending on which two planets are involved.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Overlooking aspect patterns**, which can shift the meaning of individual aspects when read as part of a larger configuration.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What are the five major aspects in astrology?
            </h2>
            <p>The five major aspects are the conjunction (0°), sextile (60°), square (90°), trine (120°), and opposition (180°), codified by the astrologer Ptolemy in the second century.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Are square and opposition aspects always bad?
            </h2>
            <p>No — squares and oppositions create tension, but that tension is often the primary source of motivation and personal growth in a chart, rather than something purely negative.</p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What does "orb" mean in astrology?
            </h2>
            <p>An orb is the allowed margin of degrees an aspect can deviate from its exact angle and still count as active; tighter orbs generally produce stronger, more noticeable effects.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What's the difference between a trine and a sextile?
            </h2>
            <p>Trines connect planets in the same element and flow naturally and automatically, while sextiles offer similar opportunity but typically require conscious effort to activate.</p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can two planets have more than one aspect at the same time?
            </h2>
            <p>No — two planets form only one specific angular relationship at any given time, based on their exact positions in the chart.</p>
          </section>

          {/* Section 18 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How do aspects apply to compatibility between two people?
            </h2>
            <p>In synastry (relationship astrology), the same aspect rules apply between one person's planets and another's, identifying areas of natural harmony and areas of productive friction between the two charts.</p>
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
              <li>Claudius Ptolemy, *Tetrabiblos* — the foundational text codifying the five major aspects</li>
              <li>Standard modern orb allowances used across contemporary Western astrology software</li>
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
