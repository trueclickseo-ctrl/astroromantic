import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/western/zodiac-signs";

export const metadata: Metadata = {
  title: "Western Zodiac Signs – Complete Guide to All 12 Sun Signs",
  description: "Explore all 12 Western zodiac signs, their dates, elements, ruling planets, and personality traits. Learn what your sun sign really reveals about you.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Western Zodiac Signs – Complete Guide to All 12 Sun Signs",
    description: "Explore all 12 Western zodiac signs, their dates, elements, ruling planets, and personality traits. Learn what your sun sign really reveals about you.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Zodiac Signs – Complete Guide to All 12 Sun Signs",
    description: "Explore all 12 Western zodiac signs, their dates, elements, ruling planets, and personality traits. Learn what your sun sign really reveals about you.",
  },
};

const faqs = [
  {
    question: "What is the difference between sun sign and star sign?",
    answer: "\"Sun sign\" and \"star sign\" are typically used interchangeably in Western astrology — both refer to the zodiac sign the Sun occupied at your birth."
  },
  {
    question: "How do I know my zodiac sign if I was born on a cusp date?",
    answer: "Because exact sign boundaries shift slightly year to year, check your specific birth date and time against an ephemeris or accurate birth chart calculator rather than relying on general date ranges."
  },
  {
    question: "Is Western astrology the same system used in horoscope columns?",
    answer: "Yes — daily and monthly horoscope columns are almost always based on the Western tropical sun-sign system."
  },
  {
    question: "Why do some people say their sign \"doesn't match\" their personality?",
    answer: "This mismatch often comes from focusing only on the sun sign; your rising sign shapes first impressions and outward behavior just as strongly, sometimes more so in daily interactions."
  },
  {
    question: "What are the fire, earth, air, and water signs?",
    answer: "Fire signs are Aries, Leo, and Sagittarius; earth signs are Taurus, Virgo, and Capricorn; air signs are Gemini, Libra, and Aquarius; water signs are Cancer, Scorpio, and Pisces."
  },
  {
    question: "Does Western astrology account for precession of the equinoxes?",
    answer: "No — the tropical zodiac used in Western astrology is deliberately fixed to the seasons rather than the physical constellations, which is the core distinction from the sidereal system used in Vedic astrology."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Western Zodiac Signs: The 12 Sun Signs Explained",
      "description": "Explore all 12 Western zodiac signs, their dates, elements, ruling planets, and personality traits. Learn what your sun sign really reveals about you.",
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

export default function WesternZodiacSignsPage() {
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
            <span>Western Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Western Zodiac Signs: The 12 Sun Signs Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Your <strong>Western zodiac sign</strong> — also called your sun sign — is set by where the Sun sat along the tropical zodiac on the day you were born, and it's meant to capture your core identity, ego, and vitality. Each of the 12 signs spans roughly 30 days of the calendar year and carries its own element, ruling planet, and personality profile. Below, you'll find every sign's dates, traits, and what actually separates a sun sign from your full birth chart.
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
              <span>Your <strong>Western zodiac sign</strong>, or sun sign, is determined by the Sun's position along the tropical zodiac on your date of birth.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>The tropical zodiac is anchored to the <strong>seasons</strong>, not the physical constellations — 0° Aries always marks the spring equinox.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>The 12 signs split into <strong>four elements</strong> (fire, earth, air, water) and <strong>three qualities</strong> (cardinal, fixed, mutable) that shape how each sign expresses itself.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Your sun sign is only one-third of your "Big Three" — moon sign (emotions) and rising sign (first impressions) complete the picture.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Western astrology dates back to ancient Babylon and developed through Greek and later European tradition into the system used today.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Sun Sign?
            </h2>
            <p>
              Western astrology tracks the Sun's apparent path across the sky over a year — the ecliptic — and divides that circle into 12 equal, 30-degree segments, each named after a neighboring constellation. Whichever segment the Sun occupied at your exact moment of birth becomes your sun sign.
            </p>
            <p>
              Because this system is tied to the <strong>tropical zodiac</strong> rather than the literal constellations, your sun sign is essentially fixed to the calendar: if you were born between June 22 and July 22, you're a Cancer, every year, regardless of where the actual stars have drifted to in the sky.
            </p>
          </section>

          {/* Section 2 - Table 1: The 12 Western Zodiac Signs */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 12 Western Zodiac Signs and Their Dates
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Sign</th>
                    <th className="p-3 border-r-2 border-black">Dates</th>
                    <th className="p-3 border-r-2 border-black">Element</th>
                    <th className="p-3">Ruling Planet</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Aries</td><td className="p-3 border-r-2 border-black">Mar 21 – Apr 19</td><td className="p-3 border-r-2 border-black">Fire</td><td className="p-3">Mars</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Taurus</td><td className="p-3 border-r-2 border-black">Apr 20 – May 20</td><td className="p-3 border-r-2 border-black">Earth</td><td className="p-3">Venus</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Gemini</td><td className="p-3 border-r-2 border-black">May 21 – Jun 20</td><td className="p-3 border-r-2 border-black">Air</td><td className="p-3">Mercury</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Cancer</td><td className="p-3 border-r-2 border-black">Jun 21 – Jul 22</td><td className="p-3 border-r-2 border-black">Water</td><td className="p-3">Moon</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Leo</td><td className="p-3 border-r-2 border-black">Jul 23 – Aug 22</td><td className="p-3 border-r-2 border-black">Fire</td><td className="p-3">Sun</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Virgo</td><td className="p-3 border-r-2 border-black">Aug 23 – Sep 22</td><td className="p-3 border-r-2 border-black">Earth</td><td className="p-3">Mercury</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Libra</td><td className="p-3 border-r-2 border-black">Sep 23 – Oct 22</td><td className="p-3 border-r-2 border-black">Air</td><td className="p-3">Venus</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Scorpio</td><td className="p-3 border-r-2 border-black">Oct 23 – Nov 21</td><td className="p-3 border-r-2 border-black">Water</td><td className="p-3">Mars</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Sagittarius</td><td className="p-3 border-r-2 border-black">Nov 22 – Dec 21</td><td className="p-3 border-r-2 border-black">Fire</td><td className="p-3">Jupiter</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Capricorn</td><td className="p-3 border-r-2 border-black">Dec 22 – Jan 19</td><td className="p-3 border-r-2 border-black">Earth</td><td className="p-3">Saturn</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Aquarius</td><td className="p-3 border-r-2 border-black">Jan 20 – Feb 18</td><td className="p-3 border-r-2 border-black">Air</td><td className="p-3">Saturn</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Pisces</td><td className="p-3 border-r-2 border-black">Feb 19 – Mar 20</td><td className="p-3 border-r-2 border-black">Water</td><td className="p-3">Jupiter</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Exact cutoff dates can shift by a day depending on the year, since the tropical zodiac follows the actual solar calendar rather than fixed civil dates — if you're born near a boundary, it's worth checking your exact birth time against an ephemeris.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Four Elements: What They Reveal
            </h2>
            <p>Every sign belongs to one of four elemental groups, and this grouping is one of the fastest ways to understand a sign's underlying temperament:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fire (Aries, Leo, Sagittarius)</strong> — passionate, action-oriented, driven by instinct and confidence.</li>
              <li><strong>Earth (Taurus, Virgo, Capricorn)</strong> — grounded, practical, focused on stability and tangible results.</li>
              <li><strong>Air (Gemini, Libra, Aquarius)</strong> — intellectual, communicative, energized by ideas and connection.</li>
              <li><strong>Water (Cancer, Scorpio, Pisces)</strong> — emotional, intuitive, attuned to feeling and depth beneath the surface.</li>
            </ul>
          </section>

          {/* Section 4 - Table 2: The Three Qualities */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Three Qualities: Cardinal, Fixed, Mutable
            </h2>
            <p>Beyond element, each sign carries a <strong>quality</strong> describing how it operates within its season:</p>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Quality</th>
                    <th className="p-3 border-r-2 border-black">Signs</th>
                    <th className="p-3">Behavior Pattern</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Cardinal</td><td className="p-3 border-r-2 border-black">Aries, Cancer, Libra, Capricorn</td><td className="p-3">Initiators — start new cycles and projects</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Fixed</td><td className="p-3 border-r-2 border-black">Taurus, Leo, Scorpio, Aquarius</td><td className="p-3">Stabilizers — sustain and deepen what's already begun</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Mutable</td><td className="p-3 border-r-2 border-black">Gemini, Virgo, Sagittarius, Pisces</td><td className="p-3">Adapters — adjust, transition, and prepare for change</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Combining element and quality gives a much sharper read than either alone — a cardinal fire sign (Aries) behaves very differently from a fixed fire sign (Leo), even though both share the fire element's core drive.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Your Sun Sign Is Only Part of the Story
            </h2>
            <p>
              A sun sign describes your core identity, but it isn't your entire astrological profile. Astrologers refer to the <strong>"Big Three"</strong> — Sun, Moon, and Rising — as the foundation of a real reading:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sun sign</strong> — your core self, ego, and vitality; what most people mean by "my zodiac sign."</li>
              <li><strong>Moon sign</strong> — your emotional inner world, instincts, and subconscious patterns.</li>
              <li><strong>Rising sign (Ascendant)</strong> — the sign on the eastern horizon at your exact birth time; shapes first impressions and outward presentation.</li>
            </ul>
            <p>
              Because the Moon moves through a sign roughly every 2–3 days and the Ascendant changes about every two hours, both require your exact birth time to calculate accurately — unlike your sun sign, which only needs your birth date.
            </p>
          </section>

          {/* Section 6 - Table 3: Western vs. Vedic */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Western Zodiac vs. Vedic Zodiac: Key Difference
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">Western (Tropical)</th>
                    <th className="p-3">Vedic (Sidereal)</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Anchor point</td><td className="p-3 border-r-2 border-black">Seasons (spring equinox = 0° Aries)</td><td className="p-3">Actual constellations</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Primary sign</td><td className="p-3 border-r-2 border-black">Sun sign</td><td className="p-3">Moon sign (Rashi)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Sign dates</td><td className="p-3 border-r-2 border-black">Fixed to calendar</td><td className="p-3">Shifted ~24° from Western dates</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Origin</td><td className="p-3 border-r-2 border-black">Ancient Babylon, developed through Greek tradition</td><td className="p-3">Vedic Jyotish Shastra, India</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              If your Western sign never quite feels accurate, it's worth exploring your{" "}
              <a href="/vedic/zodiac-signs/" className="font-bold text-black underline hover:bg-amber-300 transition-colors">
                Vedic zodiac sign
              </a>{" "}
              — the sidereal calculation can place you in an entirely different sign than your familiar Western one.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Assuming your sun sign is your whole personality</strong> — it's one placement among dozens in a full birth chart.</li>
              <li><strong>Using generic date ranges</strong> without checking your exact birth time if you were born near a sign boundary.</li>
              <li><strong>Confusing sun sign with rising sign</strong>, especially when reading personality descriptions that don't quite match — that mismatch is often explained by a different rising sign.</li>
              <li><strong>Ignoring element and quality</strong>, which add real nuance beyond the sign name alone.</li>
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
              Explore Related Western Astrology Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/vedic/zodiac-signs/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Vedic Zodiac Sign Guide</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/western/planets/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Ruling Planets Archetypes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/western/houses/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>The 12 Astrological Houses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/love-marriage/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Compatibility by Sign (Love & Marriage)</span>
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
              <li>Historical development of Western astrology from ancient Babylonian and Greek tradition</li>
              <li>Standard tropical zodiac date ranges used across modern Western astrology practice</li>
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
