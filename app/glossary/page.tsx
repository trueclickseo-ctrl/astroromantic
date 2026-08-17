import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, BookOpen, CheckCircle2, HelpCircle, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://astroromantic.com";

export const metadata: Metadata = {
  title: "Astrology Glossary – Vedic & Western Terms Explained | AstroRomantic",
  description: "A complete astrology glossary covering Vedic and Western terms — Rashi, Dasha, Nakshatra, aspects, houses, and more, explained simply.",
  alternates: { canonical: `${SITE_URL}/glossary/` },
  openGraph: {
    title: "Astrology Glossary – Vedic & Western Terms Explained | AstroRomantic",
    description: "A complete astrology glossary covering Vedic and Western terms — Rashi, Dasha, Nakshatra, aspects, houses, and more, explained simply.",
    url: `${SITE_URL}/glossary/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrology Glossary – Vedic & Western Terms Explained | AstroRomantic",
    description: "A complete astrology glossary covering Vedic and Western terms — Rashi, Dasha, Nakshatra, aspects, houses, and more, explained simply.",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "Why do Vedic and Western astrology use different terms for similar ideas?",
    answer: "The two traditions developed largely independently — Vedic astrology from Jyotish Shastra in India, Western astrology from Babylonian and Hellenistic Greek tradition — so even closely related concepts (like Rashi and sun sign) carry distinct vocabulary and calculation methods."
  },
  {
    question: "What's the single most important term to understand first?",
    answer: "Birth chart (or Kundli in Vedic terms) is the foundation everything else builds on — nearly every other term describes a specific piece of that same chart."
  },
  {
    question: "Is this glossary complete?",
    answer: "It covers the terms used across our current guides; if you come across an unfamiliar word in a specific article that isn't listed here, the article itself will typically define it in context."
  },
  {
    question: "Can I use Ctrl+F / Cmd+F to search this page?",
    answer: "Yes — since terms are organized alphabetically within each category, a browser search for a specific word is often the fastest way to find what you're looking for."
  }
];

const glossaryTermsList = [
  // Charts & Placements
  { name: "Birth Chart / Natal Chart", def: "A map of where the Sun, Moon, and planets were positioned at your exact moment and place of birth; the foundation of any personalized astrology reading." },
  { name: "Ascendant / Rising Sign", def: "The zodiac sign rising on the eastern horizon at your exact birth time; sets the starting point for your first house and shapes first impressions. Called the Lagna in Vedic astrology." },
  { name: "Conjunction", def: "Two or more planets sitting at the same or very close degree, intensifying each other's combined influence. See Western Aspects." },
  { name: "Transit", def: "The current, ongoing movement of a planet through the zodiac, as opposed to its fixed position in your birth chart." },
  { name: "Element", def: "One of four groups (fire, earth, air, water) that zodiac signs are sorted into, describing their general temperament." },
  // Vedic Terms
  { name: "Rashi", def: "The Vedic term for zodiac sign; one of 12 sidereal, 30-degree divisions of the zodiac. See Vedic Zodiac Signs." },
  { name: "Nakshatra", def: "One of 27 lunar mansions, each spanning 13°20', offering more granular detail than a Rashi alone." },
  { name: "Bhava", def: "The Vedic term for astrological house; one of 12 life-area divisions in a chart. See Vedic Houses." },
  { name: "Navagraha", def: "The nine planetary forces used in Vedic astrology: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. See Vedic Planets." },
  { name: "Rahu & Ketu", def: "The lunar nodes; mathematical points marking where the Moon's orbit crosses the Sun's path, treated as shadow planets tied to desire (Rahu) and detachment (Ketu)." },
  { name: "Ayanamsa", def: "The calculation used to correct for the roughly 24-degree gap between the tropical and sidereal zodiacs; Lahiri is the most common ayanamsa in modern Vedic practice." },
  { name: "Navamsa (D9)", def: "A divisional chart used specifically to assess marriage potential and the true underlying strength of a planet." },
  { name: "Dasha (Vimshottari Dasha)", def: "Vedic astrology's primary timing system, dividing a 120-year cycle among the nine planets. See Dasha report." },
  { name: "Mahadasha / Antardasha", def: "A major planetary period (Mahadasha) and its sub-period (Antardasha) within the Dasha system." },
  { name: "Yoga", def: "A specific planetary combination believed to produce an effect greater than any single placement alone; see Raj Yoga report." },
  { name: "Dosha", def: "A planetary configuration considered a karmic imbalance or challenge; see Mangal Dosha, Kalsarp Dosha, and Pitra Dosha." },
  { name: "Guna Milan (Ashtakoot)", def: "An eight-factor, 36-point Vedic system for evaluating marriage compatibility. See Love & Marriage report." },
  { name: "Anka Shastra", def: "Vedic numerology; the practice of reading personality and destiny through Moolank, Bhagyank, and Namank. See Vedic Numerology." },
  { name: "Moolank / Bhagyank / Namank", def: "The three core Vedic numerology numbers: birth number, destiny number, and name number, respectively." },
  { name: "Krishnamurti Paddhati (KP)", def: "A refined system of Vedic astrology using cuspal sub-lords for precise event timing. See KP Astrology." },
  // Western Terms
  { name: "Sun Sign", def: "The zodiac sign the Sun occupied at your birth; what most people mean by \"my zodiac sign\" in Western astrology." },
  { name: "Big Three", def: "The combination of Sun, Moon, and Rising sign, considered the foundation of a real Western astrology reading." },
  { name: "Tropical Zodiac", def: "The Western zodiac system, anchored to the seasons rather than the physical constellations." },
  { name: "Midheaven (MC)", def: "The cusp of the 10th house, representing career direction, public reputation, and life ambition." },
  { name: "Trine, Square, Sextile, Opposition", def: "The remaining major aspects beyond conjunction; see Western Aspects for full definitions and meanings." },
  { name: "House System (Placidus, Whole Sign, Equal House)", def: "Different mathematical methods for dividing a chart into 12 houses; see Western Houses." },
  { name: "Outer Planets", def: "Uranus, Neptune, and Pluto; slow-moving planets associated with generational rather than personal themes." },
  // Reports & Doshas
  { name: "Sade Sati", def: "A 7.5-year Saturn transit through the 12th, 1st, and 2nd houses from the natal Moon. See Saturn (Shani) report." },
  { name: "Manglik", def: "A person whose chart shows Mangal Dosha, indicating a strong Mars placement. See Mangal Dosha report." },
  { name: "Navratna", def: "The nine traditional Vedic gemstones, each associated with one of the nine Navagraha planets. See Gemstone report." },
  { name: "Videsh Yoga", def: "Planetary combinations associated with foreign travel or settlement. See Videsh Yoga report." }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/glossary/#definedtermset`,
      "name": "Astrology Glossary: Key Terms Explained",
      "description": "A complete astrology glossary covering Vedic and Western terms — Rashi, Dasha, Nakshatra, aspects, houses, and more, explained simply.",
      "url": `${SITE_URL}/glossary/`,
      "hasDefinedTerm": glossaryTermsList.map(t => ({
        "@type": "DefinedTerm",
        "name": t.name,
        "description": t.def
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/glossary/#faq`,
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

export default function GlossaryPage() {
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
          <span className="font-bold text-black">Glossary</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology & Numerology Lexicon</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Astrology Glossary: Key Terms Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Astrology has its own vocabulary, and it can get confusing fast — especially since Vedic and Western astrology often use completely different words for related ideas. This glossary collects every key term used across our guides in one place, organized by category, so you can quickly look up an unfamiliar word without losing your place in whatever you were reading.
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
              <span>This glossary covers terms from both <strong>Vedic astrology</strong> (Jyotish) and <strong>Western astrology</strong>, since the two traditions often use different words for related concepts.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Terms are grouped by category — <strong>Charts & Placements, Vedic-Specific, Western-Specific, and Reports & Doshas</strong> — so you can scan the section most relevant to what you're reading.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Many terms link directly to their full guide, so you can go from a quick definition to a deeper explanation in one click.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>If you came here from a specific report or article and a term wasn't fully clear, this is the fastest way to look it up without leaving the site.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-10 text-zinc-900 leading-relaxed font-sans">

          {/* Category 1: Charts & Placements */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Charts & Placements (Used in Both Traditions)
            </h2>
            <div className="space-y-4 pt-2">
              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Birth Chart / Natal Chart</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A map of where the Sun, Moon, and planets were positioned at your exact moment and place of birth; the foundation of any personalized astrology reading.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Ascendant / Rising Sign</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The zodiac sign rising on the eastern horizon at your exact birth time; sets the starting point for your first house and shapes first impressions. Called the <strong>Lagna</strong> in Vedic astrology.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Conjunction</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Two or more planets sitting at the same or very close degree, intensifying each other's combined influence. See <a href="/western/aspects/" className="font-bold underline text-black hover:bg-amber-300">Western Aspects</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Transit</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The current, ongoing movement of a planet through the zodiac, as opposed to its fixed position in your birth chart.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Element</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">One of four groups (fire, earth, air, water) that zodiac signs are sorted into, describing their general temperament.</p>
              </div>
            </div>
          </section>

          {/* Category 2: Vedic Astrology Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Vedic Astrology Terms
            </h2>
            <div className="space-y-4 pt-2">
              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Rashi</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The Vedic term for zodiac sign; one of 12 sidereal, 30-degree divisions of the zodiac. See <a href="/vedic/zodiac-signs/" className="font-bold underline text-black hover:bg-amber-300">Vedic Zodiac Signs</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Nakshatra</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">One of 27 lunar mansions, each spanning 13°20', offering more granular detail than a Rashi alone.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Bhava</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The Vedic term for astrological house; one of 12 life-area divisions in a chart. See <a href="/vedic/houses/" className="font-bold underline text-black hover:bg-amber-300">Vedic Houses</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Navagraha</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The nine planetary forces used in Vedic astrology: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. See <a href="/vedic/planets/" className="font-bold underline text-black hover:bg-amber-300">Vedic Planets</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Rahu & Ketu</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The lunar nodes; mathematical points marking where the Moon's orbit crosses the Sun's path, treated as shadow planets tied to desire (Rahu) and detachment (Ketu).</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Ayanamsa</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The calculation used to correct for the roughly 24-degree gap between the tropical and sidereal zodiacs; Lahiri is the most common ayanamsa in modern Vedic practice.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Navamsa (D9)</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A divisional chart used specifically to assess marriage potential and the true underlying strength of a planet.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Dasha (Vimshottari Dasha)</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Vedic astrology's primary timing system, dividing a 120-year cycle among the nine planets. See <a href="/reports/dasha/" className="font-bold underline text-black hover:bg-amber-300">Dasha report</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Mahadasha / Antardasha</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A major planetary period (Mahadasha) and its sub-period (Antardasha) within the Dasha system.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Yoga</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A specific planetary combination believed to produce an effect greater than any single placement alone; see <a href="/reports/raj-yoga/" className="font-bold underline text-black hover:bg-amber-300">Raj Yoga report</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Dosha</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A planetary configuration considered a karmic imbalance or challenge; see <a href="/reports/mangal-dosha/" className="font-bold underline text-black hover:bg-amber-300">Mangal Dosha</a>, <a href="/reports/kalsarp-dosha/" className="font-bold underline text-black hover:bg-amber-300">Kalsarp Dosha</a>, and <a href="/reports/pitra-dosha/" className="font-bold underline text-black hover:bg-amber-300">Pitra Dosha</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Guna Milan (Ashtakoot)</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">An eight-factor, 36-point Vedic system for evaluating marriage compatibility. See <a href="/reports/love-marriage/" className="font-bold underline text-black hover:bg-amber-300">Love & Marriage report</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Anka Shastra</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Vedic numerology; the practice of reading personality and destiny through Moolank, Bhagyank, and Namank. See <a href="/vedic/numerology/" className="font-bold underline text-black hover:bg-amber-300">Vedic Numerology</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Moolank / Bhagyank / Namank</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The three core Vedic numerology numbers: birth number, destiny number, and name number, respectively.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Krishnamurti Paddhati (KP)</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A refined system of Vedic astrology using cuspal sub-lords for precise event timing. See <a href="/vedic/kp-astrology/" className="font-bold underline text-black hover:bg-amber-300">KP Astrology</a>.</p>
              </div>
            </div>
          </section>

          {/* Category 3: Western Astrology Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Western Astrology Terms
            </h2>
            <div className="space-y-4 pt-2">
              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Sun Sign</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The zodiac sign the Sun occupied at your birth; what most people mean by "my zodiac sign" in Western astrology.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Big Three</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The combination of Sun, Moon, and Rising sign, considered the foundation of a real Western astrology reading.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Tropical Zodiac</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The Western zodiac system, anchored to the seasons rather than the physical constellations.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Midheaven (MC)</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The cusp of the 10th house, representing career direction, public reputation, and life ambition.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Trine, Square, Sextile, Opposition</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The remaining major aspects beyond conjunction; see <a href="/western/aspects/" className="font-bold underline text-black hover:bg-amber-300">Western Aspects</a> for full definitions and meanings.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">House System (Placidus, Whole Sign, Equal House)</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Different mathematical methods for dividing a chart into 12 houses; see <a href="/western/houses/" className="font-bold underline text-black hover:bg-amber-300">Western Houses</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Outer Planets</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Uranus, Neptune, and Pluto; slow-moving planets associated with generational rather than personal themes.</p>
              </div>
            </div>
          </section>

          {/* Category 4: Reports & Dosha-Specific Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Reports & Dosha-Specific Terms
            </h2>
            <div className="space-y-4 pt-2">
              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Sade Sati</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A 7.5-year Saturn transit through the 12th, 1st, and 2nd houses from the natal Moon. See <a href="/reports/saturn/" className="font-bold underline text-black hover:bg-amber-300">Saturn (Shani) report</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Manglik</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">A person whose chart shows Mangal Dosha, indicating a strong Mars placement. See <a href="/reports/mangal-dosha/" className="font-bold underline text-black hover:bg-amber-300">Mangal Dosha report</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Navratna</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">The nine traditional Vedic gemstones, each associated with one of the nine Navagraha planets. See <a href="/reports/gemstone/" className="font-bold underline text-black hover:bg-amber-300">Gemstone report</a>.</p>
              </div>

              <div className="bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-1">
                <h3 className="font-mono text-base font-bold text-black">Videsh Yoga</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Planetary combinations associated with foreign travel or settlement. See <a href="/reports/videsh-yoga/" className="font-bold underline text-black hover:bg-amber-300">Videsh Yoga report</a>.</p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
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

          {/* Related Tools & Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Astrology Guides & Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/astrology-guides/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Explore All 20 Astrology Guides</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/calculators/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>All 60+ Astrology & Numerology Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/life-insights/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Life Insights Kundli Report</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/horoscope/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Daily Horoscope Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

        </article>

        {/* Global Nav Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
