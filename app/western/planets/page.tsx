import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://astroromantic.com";
const SLUG = "/western/planets";

export const metadata: Metadata = {
  title: "Western Astrology Planets – The 10 Planets Explained",
  description: "Learn what each of the 10 planets in Western astrology means — Sun through Pluto — and how personal vs. outer planets shape your chart.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Western Astrology Planets – The 10 Planets Explained",
    description: "Learn what each of the 10 planets in Western astrology means — Sun through Pluto — and how personal vs. outer planets shape your chart.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Astrology Planets – The 10 Planets Explained",
    description: "Learn what each of the 10 planets in Western astrology means — Sun through Pluto — and how personal vs. outer planets shape your chart.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "The Planets in Western Astrology: Complete Guide",
      "description": "Learn what each of the 10 planets in Western astrology means — Sun through Pluto — and how personal vs. outer planets shape your chart.",
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
          <span className="font-bold text-black">The Planets in Western Astrology: Complete Guide</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rose-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Western Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            The Planets in Western Astrology: Complete Guide
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">In Western astrology, the **10 planets** — Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto — each govern a distinct life theme, and together they form the backbone of a birth chart. Reading a planet always means combining three layers: the sign it occupies (its style), the house it's in (its focus area), and the aspects it makes to other planets (how it interacts with the rest of your personality).</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Modern Western astrology works with **10 celestial bodies**: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Planets split into two groups: **personal planets** (Sun through Mars), which shape individual personality, and **outer planets** (Jupiter through Pluto), which shape broader, often generational themes.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Each planet's meaning is read through three layers together: its **sign** (how it expresses), its **house** (where it operates), and its **aspects** (how it interacts with other planets).</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Personal planets move quickly — two people born weeks apart can have different Mercury, Venus, or Mars signs — while outer planets move slowly enough to mark entire generations.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The Sun and Moon are technically a star and a satellite, not planets, but astrology has grouped them with the planets for thousands of years.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 10 Planets and What Each One Governs
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Planet</th><th className="p-3 border-r-2 border-black">Core Domain</th><th className="p-3 ">Orbital Cycle</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Sun</td><td className="p-3 border-r-2 border-black">Identity, ego, vitality</td><td className="p-3 ">1 year</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Moon</td><td className="p-3 border-r-2 border-black">Emotions, instincts, needs</td><td className="p-3 ">~28 days</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Mercury</td><td className="p-3 border-r-2 border-black">Communication, thought</td><td className="p-3 ">~1 year</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Venus</td><td className="p-3 border-r-2 border-black">Love, values, beauty</td><td className="p-3 ">~116 days (4 months)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Mars</td><td className="p-3 border-r-2 border-black">Drive, desire, action</td><td className="p-3 ">~2 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Jupiter</td><td className="p-3 border-r-2 border-black">Growth, luck, expansion</td><td className="p-3 ">~12 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Saturn</td><td className="p-3 border-r-2 border-black">Discipline, structure, limits</td><td className="p-3 ">~29.5 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Uranus</td><td className="p-3 border-r-2 border-black">Innovation, rebellion, sudden change</td><td className="p-3 ">~84 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Neptune</td><td className="p-3 border-r-2 border-black">Dreams, intuition, spirituality</td><td className="p-3 ">~165 years</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Pluto</td><td className="p-3 border-r-2 border-black">Transformation, power, the unconscious</td><td className="p-3 ">~248 years</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Personal Planets vs. Outer Planets
            </h2>
            <p>Astrologers group the 10 planets into two functional categories based on how fast they move and what scale of life they influence:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Personal Planets (Sun, Moon, Mercury, Venus, Mars):** These move quickly through the zodiac, which means they're highly individualized — two people born just weeks apart can have entirely different Mercury or Venus signs. They shape your day-to-day personality, communication style, love nature, and drive.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Outer Planets (Jupiter, Saturn, Uranus, Neptune, Pluto):** These move slowly, sometimes taking decades to shift signs, which means large groups of people born around the same time share the same placement. Their influence tends to describe generational and societal themes more than individual quirks — though their house placement in your personal chart still matters significantly.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Personal Planets in Detail
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Sun** — your core identity, ego, and vitality; the "starring role" of your chart.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Moon** — your emotional inner world, instincts, and what makes you feel secure.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mercury** — how you think, process information, and communicate.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Venus** — what you value, love, and find beautiful; also tied to financial habits.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mars** — your drive, desire, and how you take action or assert yourself.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Outer Planets in Detail
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Jupiter** — expansion, growth, optimism, and luck; also associated with excess when unchecked.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Saturn** — discipline, structure, and life lessons; often linked to the "Saturn return" around age 29, a widely discussed period of maturity and restructuring.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Uranus** — innovation, rebellion, and sudden, unexpected change.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Neptune** — dreams, intuition, spirituality, and creative or escapist tendencies.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Pluto** — deep transformation, power dynamics, and the unconscious.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Planetary Rulerships: Which Planet Rules Which Sign
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Sign</th><th className="p-3 ">Ruling Planet</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Aries</td><td className="p-3 ">Mars</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Taurus</td><td className="p-3 ">Venus</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Gemini</td><td className="p-3 ">Mercury</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Cancer</td><td className="p-3 ">Moon</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Leo</td><td className="p-3 ">Sun</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Virgo</td><td className="p-3 ">Mercury</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Libra</td><td className="p-3 ">Venus</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Scorpio</td><td className="p-3 ">Mars (traditional), Pluto (modern)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Sagittarius</td><td className="p-3 ">Jupiter</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Capricorn</td><td className="p-3 ">Saturn</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Aquarius</td><td className="p-3 ">Saturn (traditional), Uranus (modern)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Pisces</td><td className="p-3 ">Jupiter (traditional), Neptune (modern)</td></tr>
                </tbody>
              </table>
            </div>
            <p>Note that Scorpio, Aquarius, and Pisces each have both a traditional and modern ruler — a legacy of the outer planets' relatively recent discovery (Uranus in 1781, Neptune in 1846, Pluto in 1930).</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read a Planet in Your Chart
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify the sign** the planet occupies — this shapes *how* its energy expresses.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Identify the house** it falls in — this shows *where* in your life that energy is focused.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Check its aspects** to other planets — this reveals how that placement interacts with the rest of your personality.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Weigh personal vs. outer planet influence** — personal planets describe individual traits directly, while outer planets often need to be read through the lens of your specific house placement to feel personal.</li>
            </ol>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Reading only the Sun sign** and ignoring the other nine planets entirely.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating outer planet placements as deeply personal** without considering that millions of people share the same sign placement — the house position is what personalizes it.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Forgetting that Pluto was reclassified as a dwarf planet** in 2006 — astrology continued using it unchanged, since its symbolic role isn't tied to its astronomical classification.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring aspects** — a planet's meaning shifts significantly depending on what it's in harmony or tension with elsewhere in the chart.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What are the personal planets in astrology?
            </h2>
            <p>The personal planets are the Sun, Moon, Mercury, Venus, and Mars — they move quickly through the zodiac and shape your individual personality, thought patterns, and relationships.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why do outer planets affect whole generations rather than individuals?
            </h2>
            <p>Because Uranus, Neptune, and Pluto move so slowly — 84, 165, and 248 years respectively to complete a zodiac cycle — large groups of people born around the same time share the same sign placement, making their influence more collective than personal.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Pluto still used in astrology even though it's not a planet anymore?
            </h2>
            <p>Yes — astrology continues to use Pluto exactly as before its 2006 astronomical reclassification, since its symbolic meaning in a chart isn't dependent on its scientific planetary status.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What does it mean when a sign has two rulers?
            </h2>
            <p>Scorpio, Aquarius, and Pisces each have both a traditional ruler (used since antiquity) and a modern ruler (assigned after the outer planets were discovered), and many astrologers consider both relevant.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Which planets matter most in a beginner reading?
            </h2>
            <p>Most astrologers recommend starting with the Sun, Moon, and Rising sign, then adding Mercury, Venus, and Mars for a fuller personal picture before moving to the outer planets.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How often does each planet change signs?
            </h2>
            <p>The Moon changes signs every 2–3 days, Mercury and Venus roughly every few weeks to a couple months, Mars about every two months, Jupiter about once a year, and the outer planets can take anywhere from 7 to over 20 years per sign.</p>
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
              <li>Historical development of the outer planets in astrology following their astronomical discovery (1781–1930)</li>
              <li>Standard modern Western planetary rulership framework</li>
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
