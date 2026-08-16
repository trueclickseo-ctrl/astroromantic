import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/vedic/zodiac-signs";

export const metadata: Metadata = {
  title: "Vedic Zodiac Signs (Rashi) – Complete Guide to All 12",
  description: "Discover all 12 Vedic zodiac signs (Rashis), their ruling planets, elements, and meanings. Learn how sidereal astrology differs from Western sun signs.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Vedic Zodiac Signs (Rashi) – Complete Guide to All 12",
    description: "Discover all 12 Vedic zodiac signs (Rashis), their ruling planets, elements, and meanings. Learn how sidereal astrology differs from Western sun signs.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Zodiac Signs (Rashi) – Complete Guide to All 12",
    description: "Discover all 12 Vedic zodiac signs (Rashis), their ruling planets, elements, and meanings. Learn how sidereal astrology differs from Western sun signs.",
  },
};

const faqs = [
  {
    question: "What is the difference between Rashi and zodiac sign?",
    answer: "\"Rashi\" is the Sanskrit term for zodiac sign specifically within the Vedic (sidereal) system, while \"zodiac sign\" in casual Western usage almost always refers to the tropical sun sign."
  },
  {
    question: "Why is my Vedic sign different from my Western sign?",
    answer: "Vedic astrology uses the sidereal zodiac, anchored to actual constellations, while Western astrology uses the tropical zodiac, anchored to the seasons — a roughly 24-degree gap called the ayanamsa causes the difference."
  },
  {
    question: "Which is more important in Vedic astrology: Sun sign or Moon sign?",
    answer: "The Moon sign (Janma Rashi) typically takes priority in Vedic astrology because the Moon is believed to govern the mind and emotional nature, unlike Western astrology's Sun-centered approach."
  },
  {
    question: "Do I need my exact birth time to find my Rashi?",
    answer: "Your Moon sign can often be estimated from date and approximate location alone, but your Ascendant (Lagna) requires a precise birth time since it shifts roughly every two hours."
  },
  {
    question: "What are the 12 Rashis in order?",
    answer: "Mesha, Vrishabha, Mithuna, Karka, Simha, Kanya, Tula, Vrishchika, Dhanu, Makara, Kumbha, and Meena — beginning with Mesha (Aries) and following the same sequence as the Western zodiac, just measured differently."
  },
  {
    question: "Can two people share the same Rashi but have very different personalities?",
    answer: "Yes — Rashi is one layer of a much larger chart; Nakshatra, house placements, planetary aspects, and Dashas all shape how a single Rashi actually expresses itself in a person's life."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Vedic Zodiac Signs: The 12 Rashis and What They Reveal About You",
      "description": "Discover all 12 Vedic zodiac signs (Rashis), their ruling planets, elements, and meanings. Learn how sidereal astrology differs from Western sun signs.",
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

export default function VedicZodiacSignsPage() {
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
            <span>Vedic Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Vedic Zodiac Signs: The 12 Rashis and What They Reveal About You
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            In Vedic astrology, a <strong>Rashi</strong> — the Sanskrit word for zodiac sign, literally "a heap of stars" — is one of 12 equal, 30-degree divisions of the sky that shapes your personality, emotional nature, and life direction. Unlike Western astrology, which is built around your Sun sign, Vedic astrology puts the <strong>Moon sign</strong> at the center of the chart, because the Moon is believed to govern the mind and emotional temperament. If you've only ever known your Western star sign, your Vedic Rashi might come as a surprise.
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
              <span>A <strong>Rashi</strong> is one of the 12 zodiac signs used in Vedic (Jyotish) astrology, each covering a 30-degree slice of the sidereal zodiac.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Vedic astrology uses the <strong>sidereal zodiac</strong>, which tracks the actual positions of constellations, while Western astrology uses the <strong>tropical zodiac</strong>, tied to the seasons — this is why your Vedic sign can differ from your Western sun sign.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Your <strong>Moon sign (Janma Rashi)</strong> carries the most weight in Vedic astrology, unlike Western astrology, which centers on the Sun sign.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Each Rashi has a ruling planet, element (fire, earth, air, water), and quality that shapes how it expresses itself in a birth chart.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Vedic astrology needs your <strong>exact birth time and location</strong>, not just your birth date, to calculate an accurate Rashi and Lagna.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Exactly Is a Rashi?
            </h2>
            <p>
              The zodiac belt spans 360 degrees around the Earth, and Vedic astrology divides it into 12 equal segments of 30 degrees each — the Rashis. Beginning with Mesha (Aries), the twelve signs run: Mesha, Vrishabha, Mithuna, Karka, Simha, Kanya, Tula, Vrishchika, Dhanu, Makara, Kumbha, and Meena.
            </p>
            <p>
              Each Rashi governs a portion of the sky, and wherever a planet sits at the moment of your birth, that Rashi colors how the planet's energy plays out in your life. Your birth chart, or <strong>Kundli</strong>, maps all nine planets (the Navagraha) across these 12 signs and 12 houses simultaneously.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why Vedic Signs Differ From Western Signs
            </h2>
            <p>
              This is the question almost everyone asks once they discover Vedic astrology, and the answer comes down to one astronomical phenomenon: <strong>precession of the equinoxes</strong>.
            </p>
            <p>
              Western astrology uses the <strong>tropical zodiac</strong>, which is fixed to the seasons — 0° Aries always aligns with the spring equinox, regardless of where the constellations actually sit in the sky. Vedic astrology uses the <strong>sidereal zodiac</strong>, which is anchored to the actual, observable constellations. Because Earth's axis slowly wobbles over roughly 26,000 years, these two systems have drifted apart by about 24 degrees today. That gap is called the <strong>ayanamsa</strong>, and it's why someone born on June 1st might be a Gemini in Western astrology but a Vrishabha (Taurus) in the Vedic system.
            </p>
          </section>

          {/* Section 3 - Table 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Moon Sign, Sun Sign, and Lagna: Three Different Answers
            </h2>
            <p>
              Vedic astrology doesn't rely on a single sign the way Western sun-sign columns do. Three placements matter, and they each answer a different question:
            </p>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Placement</th>
                    <th className="p-3 border-r-2 border-black">Vedic Term</th>
                    <th className="p-3">What It Reveals</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Moon Sign</td><td className="p-3 border-r-2 border-black font-mono">Janma Rashi</td><td className="p-3">Mind, emotions, instinctive reactions</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Sun Sign</td><td className="p-3 border-r-2 border-black font-mono">Surya Rashi</td><td className="p-3">Vitality, authority, core life force</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Ascendant</td><td className="p-3 border-r-2 border-black font-mono">Lagna</td><td className="p-3">Physical appearance, identity, life direction</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Most Vedic astrologers treat the <strong>Moon sign as the primary Rashi</strong> people mean when they say "my zodiac sign," which is a key reason Vedic readings often feel different from a Western horoscope, even for the same person.
            </p>
          </section>

          {/* Section 4 - Table 2: The 12 Rashis */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 12 Rashis at a Glance
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Rashi</th>
                    <th className="p-3 border-r-2 border-black">Western Equivalent</th>
                    <th className="p-3 border-r-2 border-black">Ruling Planet</th>
                    <th className="p-3">Element</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Mesha</td><td className="p-3 border-r-2 border-black">Aries</td><td className="p-3 border-r-2 border-black">Mars</td><td className="p-3">Fire</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Vrishabha</td><td className="p-3 border-r-2 border-black">Taurus</td><td className="p-3 border-r-2 border-black">Venus</td><td className="p-3">Earth</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Mithuna</td><td className="p-3 border-r-2 border-black">Gemini</td><td className="p-3 border-r-2 border-black">Mercury</td><td className="p-3">Air</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Karka</td><td className="p-3 border-r-2 border-black">Cancer</td><td className="p-3 border-r-2 border-black">Moon</td><td className="p-3">Water</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Simha</td><td className="p-3 border-r-2 border-black">Leo</td><td className="p-3 border-r-2 border-black">Sun</td><td className="p-3">Fire</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Kanya</td><td className="p-3 border-r-2 border-black">Virgo</td><td className="p-3 border-r-2 border-black">Mercury</td><td className="p-3">Earth</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Tula</td><td className="p-3 border-r-2 border-black">Libra</td><td className="p-3 border-r-2 border-black">Venus</td><td className="p-3">Air</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Vrishchika</td><td className="p-3 border-r-2 border-black">Scorpio</td><td className="p-3 border-r-2 border-black">Mars</td><td className="p-3">Water</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Dhanu</td><td className="p-3 border-r-2 border-black">Sagittarius</td><td className="p-3 border-r-2 border-black">Jupiter</td><td className="p-3">Fire</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Makara</td><td className="p-3 border-r-2 border-black">Capricorn</td><td className="p-3 border-r-2 border-black">Saturn</td><td className="p-3">Earth</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Kumbha</td><td className="p-3 border-r-2 border-black">Aquarius</td><td className="p-3 border-r-2 border-black">Saturn</td><td className="p-3">Air</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-mono font-bold">Meena</td><td className="p-3 border-r-2 border-black">Pisces</td><td className="p-3 border-r-2 border-black">Jupiter</td><td className="p-3">Water</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Each Rashi also carries a <strong>quality</strong> — movable (Chara), fixed (Sthira), or dual (Dwiswabhava) — that describes whether its energy tends to initiate, sustain, or adapt. Mesha, Karka, Tula, and Makara are movable; Vrishabha, Simha, Vrishchika, and Kumbha are fixed; Mithuna, Kanya, Dhanu, and Meena are dual.
            </p>
          </section>

          {/* Section 5 - Steps */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Find Your Rashi
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Gather your exact birth details</strong> — date, time, and place of birth. Even a few minutes' difference can shift your Ascendant.</li>
              <li><strong>Use a Vedic (sidereal) birth chart calculator</strong>, not a Western one — the two systems apply different ayanamsa corrections and will give different results for the same birth data.</li>
              <li><strong>Locate your Moon's position</strong> in the chart to find your Janma Rashi.</li>
              <li><strong>Check your Ascendant (Lagna)</strong> separately, since it changes roughly every two hours and needs a precise birth time.</li>
              <li><strong>Read your Rashi in context</strong> — a single sign is a starting point, not the full picture; houses, planetary aspects, and Dashas (planetary time periods) all layer on top of it.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Rashi vs. Nakshatra vs. Lagna: Don't Confuse These
            </h2>
            <p>Three related concepts trip up almost every beginner:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Rashi</strong> — the broad, 30-degree zodiac sign your Moon (or another planet) occupies.</li>
              <li><strong>Nakshatra</strong> — a finer 13°20' lunar mansion; there are 27 Nakshatras layered across the same 360-degree zodiac, giving much more granular detail than a Rashi alone.</li>
              <li><strong>Lagna</strong> — the Ascendant, or the sign rising on the eastern horizon at your exact moment of birth; this becomes the foundation, or first house, of your entire chart.</li>
            </ul>
            <p>
              A complete Vedic reading looks at all three together rather than relying on Rashi alone, the way a Western horoscope might rely on just a sun sign.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Using your Western birth date range</strong> to guess your Vedic Rashi — the sidereal shift means this is unreliable and often wrong.</li>
              <li><strong>Skipping the birth time</strong>, which is essential for an accurate Lagna and house placement, even though the Moon sign can be estimated with date alone in many cases.</li>
              <li><strong>Treating Rashi as the whole chart</strong> rather than one layer among planets, houses, and Nakshatras.</li>
              <li><strong>Mixing ayanamsa systems</strong> — different sidereal calculation methods (Lahiri, Raman, KP) can shift results by a degree or more if applied inconsistently.</li>
            </ul>
          </section>

          {/* Section 8 - FAQs */}
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

          {/* Section 9 - Suggested Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Related Vedic Astrology Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/vedic/planets/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>The 9 Planets in Vedic Astrology</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/vedic/houses/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>The 12 Houses (Bhavas)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/vedic/numerology/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Vedic Numerology (Ank Jyotish)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/life-insights/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Full Kundli Reading (Life Insights)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Section 10 - External References / Sources */}
          <section className="border-t-2 border-zinc-300 pt-6 space-y-2 text-xs text-zinc-600 font-mono">
            <h3 className="font-bold uppercase text-black flex items-center space-x-1">
              <BookOpen className="w-4 h-4 text-black mr-1" />
              <span>External References & Sources</span>
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Brihat Parashara Hora Shastra — foundational classical text of Vedic astrology</li>
              <li>Standard sidereal ayanamsa references (Lahiri ayanamsa) used in modern Vedic chart calculation</li>
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
