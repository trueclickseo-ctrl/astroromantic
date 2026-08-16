import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/gemstone";

export const metadata: Metadata = {
  title: "Gemstone Report – Navratna Recommendations Explained",
  description: "Understand your Gemstone report: the 9 Navratna stones, which planet each strengthens, and how to choose and wear one correctly.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Gemstone Report – Navratna Recommendations Explained",
    description: "Understand your Gemstone report: the 9 Navratna stones, which planet each strengthens, and how to choose and wear one correctly.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemstone Report – Navratna Recommendations Explained",
    description: "Understand your Gemstone report: the 9 Navratna stones, which planet each strengthens, and how to choose and wear one correctly.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Gemstone Report: Understanding Your Navratna Recommendation",
      "description": "Understand your Gemstone report: the 9 Navratna stones, which planet each strengthens, and how to choose and wear one correctly.",
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
          <div className="inline-flex items-center space-x-2 bg-purple-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Gemstone Report: Understanding Your Navratna Recommendation
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Gemstone report** identifies which of the nine traditional Navratna stones — Ruby, Pearl, Red Coral, Emerald, Yellow Sapphire, Diamond, Blue Sapphire, Hessonite, and Cat's Eye — is best suited to your specific birth chart, based on which planet's influence your Kundli suggests could use strengthening. Each stone is believed to act as a natural amplifier for its associated planet's positive qualities, a Vedic tradition practiced for centuries and once worn by kings as a symbol of cosmic alignment.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The **Navratna** ("nine gems") are nine traditional gemstones, each linked to one of the nine Navagraha planets in Vedic astrology.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A gemstone is meant to be chosen based on your **complete birth chart**, not your sun sign alone — the stone should strengthen a planet your chart specifically calls for.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Graha Maitri (planetary friendship)** matters: gemstones for planets that are traditional enemies (like the Sun and Saturn) generally shouldn't be worn together.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The standard traditional guideline for gemstone weight is roughly **1 Ratti per 12 kg of body weight** (1 Ratti ≈ 0.91 carats), with certified natural, untreated stones considered essential for authentic effect.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Gemstone recommendations are traditionally framed as **belief-based support tools**, not medical or guaranteed remedies — most sources also emphasize consulting a qualified astrologer before wearing one.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Are the Navratna Gemstones?
            </h2>
            <p>**Navratna** translates to "nine gems," and each stone corresponds to one of the nine Navagraha planets. The tradition holds that a weak or afflicted planet in your birth chart can be supported by wearing its associated gemstone — chosen and activated according to specific rituals — to help strengthen that planet's positive expression in your life.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 9 Navratna Gemstones and Their Ruling Planets
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Gemstone</th><th className="p-3 border-r-2 border-black">Sanskrit Name</th><th className="p-3 ">Ruling Planet</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Ruby</td><td className="p-3 border-r-2 border-black">Manikya</td><td className="p-3 ">Sun (Surya)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Pearl</td><td className="p-3 border-r-2 border-black">Moti</td><td className="p-3 ">Moon (Chandra)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Red Coral</td><td className="p-3 border-r-2 border-black">Moonga</td><td className="p-3 ">Mars (Mangal)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Emerald</td><td className="p-3 border-r-2 border-black">Panna</td><td className="p-3 ">Mercury (Budha)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Yellow Sapphire</td><td className="p-3 border-r-2 border-black">Pukhraj</td><td className="p-3 ">Jupiter (Brihaspati)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Diamond</td><td className="p-3 border-r-2 border-black">Heera</td><td className="p-3 ">Venus (Shukra)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Blue Sapphire</td><td className="p-3 border-r-2 border-black">Neelam</td><td className="p-3 ">Saturn (Shani)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Hessonite Garnet</td><td className="p-3 border-r-2 border-black">Gomed</td><td className="p-3 ">Rahu</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Cat's Eye</td><td className="p-3 border-r-2 border-black">Lehsunia</td><td className="p-3 ">Ketu</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How a Gemstone Is Chosen for You
            </h2>
            <p>Unlike Western birthstones (assigned simply by birth month), Vedic gemstone selection considers several factors from your **complete birth chart (Janma Kundli)**:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Which planet appears weak or afflicted** in your chart, based on its house, sign, and aspects</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Your current or upcoming Dasha period**, since a gemstone is often recommended to support the planet whose Mahadasha or Antardasha is active or approaching</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Planetary friendships (Graha Maitri)** — ensuring the recommended stone doesn't conflict with other planets already strong or favorably placed in your chart</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Your Ascendant (Lagna)**, which determines which planets are naturally beneficial or challenging for your specific chart as a whole</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Graha Maitri: Why You Can't Wear Every Gemstone Together
            </h2>
            <p>Vedic astrology recognizes friendships and enmities between planets, and gemstone tradition takes this seriously. For example, **Ruby (Sun)** is traditionally advised against being worn alongside **Blue Sapphire (Saturn)**, **Diamond (Venus)**, **Hessonite (Rahu)**, or **Cat's Eye (Ketu)** — because the Sun and these planets are considered natural enemies in classical planetary relationships. Wearing gemstones for conflicting planets simultaneously is believed to create competing energies rather than reinforcing support.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Wear a Gemstone: Traditional Guidelines
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Weight** — the standard traditional guideline is roughly 1 Ratti per 12 kg of body weight (1 Ratti ≈ 0.91 carats); substitute gems (Upratnas) are often advised at a slightly higher weight.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Authenticity** — only natural, untreated stones are considered to hold genuine planetary vibrations in traditional practice; certified, lab-verified stones are recommended to confirm authenticity.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ritual activation** — many traditions recommend a stone be energized through specific rituals before regular wear, rather than worn straight out of the box.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Finger and metal** — each planet is traditionally associated with a specific finger and metal setting (for example, Ruby is often set in gold and worn on the ring finger), though specifics vary by tradition and individual astrologer guidance.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Timing** — stones are often recommended to be first worn on a day and time astrologically favorable to the associated planet.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Gemstone Recommendations by Common Life Concern
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Concern</th><th className="p-3 border-r-2 border-black">Commonly Recommended Stone</th><th className="p-3 ">Ruling Planet</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Confidence, authority, leadership</td><td className="p-3 border-r-2 border-black">Ruby</td><td className="p-3 ">Sun</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Emotional balance, mental peace</td><td className="p-3 border-r-2 border-black">Pearl</td><td className="p-3 ">Moon</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Courage, drive, overcoming conflict</td><td className="p-3 border-r-2 border-black">Red Coral</td><td className="p-3 ">Mars</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Communication, business, intellect</td><td className="p-3 border-r-2 border-black">Emerald</td><td className="p-3 ">Mercury</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Wisdom, growth, career expansion</td><td className="p-3 border-r-2 border-black">Yellow Sapphire</td><td className="p-3 ">Jupiter</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Relationships, creativity, comfort</td><td className="p-3 border-r-2 border-black">Diamond</td><td className="p-3 ">Venus</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Discipline, focus, long-term stability</td><td className="p-3 border-r-2 border-black">Blue Sapphire</td><td className="p-3 ">Saturn</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Gemstone Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Choosing a gemstone based on birth month alone**, the way Western birthstones work — Vedic gemstone selection requires full chart analysis.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Wearing gemstones of enemy planets together**, which is believed to create conflicting rather than supportive energy.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Buying an unverified or treated stone**, since traditional belief holds that only natural, untreated gems carry genuine planetary vibration.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Skipping astrologer consultation** — most traditional sources are explicit that gemstones should be selected and activated according to an individual's specific chart, not chosen casually.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How do I know which gemstone is right for me?
            </h2>
            <p>The right gemstone depends on your complete birth chart — specifically, which planet appears weak or is entering an important Dasha period — which is why most traditional guidance recommends chart-based consultation rather than choosing by birth month alone.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can I wear more than one Navratna gemstone at a time?
            </h2>
            <p>It depends on planetary friendship (Graha Maitri) — stones associated with planets that are traditional enemies, such as the Sun and Saturn, generally shouldn't be worn together, since their energies are believed to conflict.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What does "1 Ratti per 12 kg" mean for gemstone weight?
            </h2>
            <p>This is a traditional Vedic guideline for gemstone sizing based on body weight, where 1 Ratti is approximately 0.91 carats — heavier substitute gemstones (Upratnas) are often advised at a slightly higher weight than the primary stone.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do gemstones need to be "activated" before wearing?
            </h2>
            <p>Many traditions recommend a ritual activation process before regular wear, along with wearing the stone for the first time on a day and time considered astrologically favorable for its associated planet.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Are gemstone benefits scientifically proven?
            </h2>
            <p>No — Navratna gemstone tradition is a belief-based practice rooted in Vedic astrology, not a medically or scientifically validated remedy, and most reputable sources are explicit about this distinction.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What's the difference between a primary gemstone and an Upratna (substitute)?
            </h2>
            <p>A primary gemstone is the traditional, classic stone associated with a planet (like Blue Sapphire for Saturn), while an Upratna is a more affordable substitute gem believed to carry a similar, generally milder planetary influence.</p>
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
              <li>Traditional Navratna gemstone-planet associations used across classical and contemporary Vedic astrology practice</li>
              <li>Standard Graha Maitri (planetary friendship) framework referenced in gemstone selection guidance</li>
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
