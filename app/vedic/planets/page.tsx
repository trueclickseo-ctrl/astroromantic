import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/vedic/planets";

export const metadata: Metadata = {
  title: "Vedic Planets (Navagraha) – The 9 Planets Explained",
  description: "Learn the 9 planets in Vedic astrology (Navagraha) — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu — their meanings and effects.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Vedic Planets (Navagraha) – The 9 Planets Explained",
    description: "Learn the 9 planets in Vedic astrology (Navagraha) — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu — their meanings and effects.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Planets (Navagraha) – The 9 Planets Explained",
    description: "Learn the 9 planets in Vedic astrology (Navagraha) — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu — their meanings and effects.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "The 9 Planets in Vedic Astrology: Navagraha Explained",
      "description": "Learn the 9 planets in Vedic astrology (Navagraha) — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu — their meanings and effects.",
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
          <span className="font-bold text-black">The 9 Planets in Vedic Astrology: Navagraha Explained</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Vedic Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            The 9 Planets in Vedic Astrology: Navagraha Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Vedic astrology recognizes nine planetary forces, collectively called the **Navagraha** ("nava" meaning nine, "graha" meaning planet or "seizer"): the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. Unlike astronomy, which studies these as physical bodies, Vedic astrology treats them as symbolic processors of karma, personality, and life timing — each one governing a distinct slice of human experience, from vitality and emotion to ambition and spiritual growth.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Vedic astrology works with **nine planetary forces**, the Navagraha, not the eight or so bodies studied in astronomy.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Rahu and Ketu** aren't physical planets — they're mathematical points marking where the Moon's orbit crosses the Sun's path, tied to eclipses.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Each planet, or **Graha** ("that which seizes or influences"), governs specific life themes and expresses differently depending on its house, sign, and aspects in your chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A planet's strength in your chart shows a **tendency, not a fixed fate** — a well-placed planet supports growth in its area; a challenged one signals a lesson to work through.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Planets are read in relation to each other, not in isolation — conjunctions and aspects between planets often matter more than any single placement.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Does "Graha" Actually Mean?
            </h2>
            <p>The word **Graha** translates roughly to "that which seizes or grasps," reflecting the idea that these forces actively shape human affairs rather than sitting passively in the sky. This is the fundamental philosophical difference between Vedic astrology and astronomy: astronomy studies planets as objects; Jyotish reads them as living influences that interact with your birth chart, your karma, and your unfolding life story.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 9 Planets and Their Core Significance
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Planet (Sanskrit)</th><th className="p-3 border-r-2 border-black">Governs</th><th className="p-3 ">Core Theme</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Sun (Surya)</td><td className="p-3 border-r-2 border-black">Soul, vitality, authority</td><td className="p-3 ">Identity, ego, leadership</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Moon (Chandra)</td><td className="p-3 border-r-2 border-black">Mind, emotions</td><td className="p-3 ">Mental peace, nurturing, instinct</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Mars (Mangal)</td><td className="p-3 border-r-2 border-black">Energy, courage</td><td className="p-3 ">Action, drive, conflict</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Mercury (Budha)</td><td className="p-3 border-r-2 border-black">Intellect, communication</td><td className="p-3 ">Business, learning, adaptability</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Jupiter (Brihaspati)</td><td className="p-3 border-r-2 border-black">Wisdom, expansion</td><td className="p-3 ">Knowledge, spirituality, growth</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Venus (Shukra)</td><td className="p-3 border-r-2 border-black">Love, beauty</td><td className="p-3 ">Relationships, art, comfort</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Saturn (Shani)</td><td className="p-3 border-r-2 border-black">Discipline, karma</td><td className="p-3 ">Delay, responsibility, endurance</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Rahu</td><td className="p-3 border-r-2 border-black">Desire, obsession</td><td className="p-3 ">Ambition, illusion, unconventional paths</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Ketu</td><td className="p-3 border-r-2 border-black">Detachment, past karma</td><td className="p-3 ">Spirituality, release, intuition</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Rahu and Ketu: The Shadow Planets
            </h2>
            <p>These two are the most misunderstood members of the Navagraha because they aren't physical bodies at all — they're the **lunar nodes**, the mathematical points where the Moon's orbital path crosses the ecliptic (the Sun's apparent path). Rahu marks the north node, Ketu the south node, and together they're associated with eclipses.</p>
            <p>In Jyotish, Rahu represents worldly desire, ambition, and the pull toward the unconventional; Ketu represents detachment, spiritual insight, and unfinished business carried from past experience. Because they always sit exactly opposite each other in a chart, they're read as a pair — wherever Rahu pulls you outward, Ketu pulls you inward from the opposite house.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How Planets Are Read in a Chart
            </h2>
            <p>A planet's meaning in your Kundli isn't fixed — it shifts based on three layers working together:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Sign placement** — which of the 12 Rashis the planet occupies, coloring how its energy expresses.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**House placement** — which of the 12 life areas (career, relationships, health, and so on) the planet's energy is focused on.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Aspects and conjunctions** — how the planet interacts with other planets, either reinforcing or challenging its natural tendencies.</li>
            </ol>
            <p>A "strong" planet — well-placed by sign and house, supported by good aspects — tends to deliver its themes constructively. A "weak" or afflicted planet doesn't doom you; it typically signals delays or a lesson still being worked through in that life area.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Planetary Rulers and Their Zodiac Signs
            </h2>
            <p>Each planet rules one or two of the 12 Rashis, which is part of why understanding planets and signs together gives a fuller picture than either alone:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Sun** rules Simha (Leo)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Moon** rules Karka (Cancer)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mars** rules Mesha (Aries) and Vrishchika (Scorpio)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mercury** rules Mithuna (Gemini) and Kanya (Virgo)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Jupiter** rules Dhanu (Sagittarius) and Meena (Pisces)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Venus** rules Vrishabha (Taurus) and Tula (Libra)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Saturn** rules Makara (Capricorn) and Kumbha (Aquarius)</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Do Planets Control Fate? A Common Misconception
            </h2>
            <p>No — Vedic astrology doesn't teach that planets control life directly. They indicate **patterns, tendencies, and timing**, not predetermined outcomes. Decisions, effort, and self-awareness still play a central role in how a planetary influence actually unfolds. This is why two people with a similarly placed Saturn can experience very different life outcomes — the placement shows the terrain, not the destination.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Interpreting Planets
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading a single planet in isolation** instead of considering its house, sign, and aspects together.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating Rahu and Ketu as "bad" planets** — they're neutral shadow points whose effect depends heavily on placement, not inherently malefic forces.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming a "weak" planet means guaranteed misfortune** rather than a growth area requiring awareness and effort.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring planetary timing (Dasha)** — a planet's placement matters, but *when* its period becomes active in your life matters just as much.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why does Vedic astrology use nine planets instead of the astronomical count?
            </h2>
            <p>Vedic astrology (Jyotish) is a symbolic system rather than a purely astronomical one — it includes the visible planets from Sun to Saturn plus Rahu and Ketu, the mathematical lunar nodes, because they're considered equally influential on human affairs.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Are Rahu and Ketu really planets?
            </h2>
            <p>No — they're mathematical points marking where the Moon's orbit intersects the Sun's apparent path, not physical celestial bodies, but they're treated with full planetary significance in Jyotish.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Which planet is considered the most powerful?
            </h2>
            <p>There's no single "most powerful" planet in Vedic astrology; each Graha governs different life areas, and its relative strength depends entirely on its placement in an individual's specific chart.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can a "weak" planet in my chart be improved?
            </h2>
            <p>Traditional remedies — including gemstones, mantras, and charitable acts — are used to strengthen a planet's supportive expression, though most astrologers frame these as support tools rather than guaranteed fixes.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How is a planet's strength determined?
            </h2>
            <p>Strength depends on the combination of its zodiac sign (dignity), house placement, and the aspects or conjunctions it receives from other planets in the chart.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What's the difference between a planet's sign and its house?
            </h2>
            <p>The sign shows *how* a planet's energy expresses (its style), while the house shows *where* in your life that energy is focused (career, relationships, health, and so on).</p>
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
              <li>Brihat Parashara Hora Shastra — classical Vedic text foundational to planetary interpretation</li>
              <li>Standard Navagraha framework used across contemporary Jyotish practice</li>
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
