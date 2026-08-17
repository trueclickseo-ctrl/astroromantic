import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://astroromantic.com";
const SLUG = "/vedic/numerology";

export const metadata: Metadata = {
  title: "Vedic Numerology – Moolank, Bhagyank & Namank Guide",
  description: "Learn Vedic numerology (Anka Shastra): how to calculate your Moolank, Bhagyank, and Namank, and what each number reveals about you.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Vedic Numerology – Moolank, Bhagyank & Namank Guide",
    description: "Learn Vedic numerology (Anka Shastra): how to calculate your Moolank, Bhagyank, and Namank, and what each number reveals about you.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Numerology – Moolank, Bhagyank & Namank Guide",
    description: "Learn Vedic numerology (Anka Shastra): how to calculate your Moolank, Bhagyank, and Namank, and what each number reveals about you.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Vedic Numerology: Moolank, Bhagyank, and Namank Explained",
      "description": "Learn Vedic numerology (Anka Shastra): how to calculate your Moolank, Bhagyank, and Namank, and what each number reveals about you.",
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
          <span className="font-bold text-black">Vedic Numerology: Moolank, Bhagyank, and Namank Explained</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Vedic Astrology Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Vedic Numerology: Moolank, Bhagyank, and Namank Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">**Vedic numerology**, known in Sanskrit as **Anka Shastra**, is the Indian system of reading personality, destiny, and life timing through numbers drawn from your birth date and name. Each number from 1 to 9 is linked to one of the nine Navagraha planets, so every numerology reading is, at its core, a planetary reading expressed through numbers. The three foundational numbers — Moolank, Bhagyank, and Namank — together map your instinctive nature, your life direction, and the vibration carried by your name.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Vedic numerology (Anka Shastra)** reads personality, destiny, and timing through numbers tied to your birth date and name, each linked to one of the nine Navagraha planets.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The three core numbers are **Moolank** (birth/psychic number, from your day of birth), **Bhagyank** (destiny number, from your full birth date), and **Namank** (name number, from your full name).</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Unlike Western numerology, Vedic numerology assigns the shadow planets **Rahu and Ketu** to numbers 4 and 7, rather than Uranus and Neptune.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Moolank describes your **instinctive, unfiltered temperament**; Bhagyank describes your **broader life direction**, especially from your mid-30s onward.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Vedic numerology complements a full Kundli reading — it's a faster, date-and-name-based lens, not a replacement for a complete birth chart.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Moolank, Bhagyank, Namank: The Three Core Numbers
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Number</th><th className="p-3 border-r-2 border-black">Sanskrit Term</th><th className="p-3 border-r-2 border-black">Calculated From</th><th className="p-3 ">Reveals</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Psychic Number</td><td className="p-3 border-r-2 border-black">Moolank</td><td className="p-3 border-r-2 border-black">Day of birth only</td><td className="p-3 ">Instinctive temperament, self-image</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Destiny Number</td><td className="p-3 border-r-2 border-black">Bhagyank</td><td className="p-3 border-r-2 border-black">Full date of birth (day+month+year)</td><td className="p-3 ">Life direction, opportunities, long-term path</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Name Number</td><td className="p-3 border-r-2 border-black">Namank</td><td className="p-3 border-r-2 border-black">Full name letters</td><td className="p-3 ">Vibration your name carries in the world</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Calculate Your Moolank
            </h2>
            <p>Your Moolank comes from your **day of birth alone** — month and year don't factor in.</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Take the day of the month you were born.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>If it's already a single digit (1–9), that's your Moolank.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>If it's two digits (10–31), add the digits together until you reach a single number.</li>
            </ol>
            <p>**Example:** Born on the 23rd → 2 + 3 = **5**. Moolank = 5.</p>
            <p>Moolank is read as your first, instinctive layer of temperament — how you act and react before conscious thought or life experience refines your behavior.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Calculate Your Bhagyank
            </h2>
            <p>Your Bhagyank uses your **entire date of birth** — day, month, and year — added together and reduced to a single digit.</p>
            <p>**Example:** Born April 5, 1974</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Day: 5</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Month: 4</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Year: 1+9+7+4 = 21 → 2+1 = 3</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Total: 5 + 4 + 3 = 12 → 1+2 = **3**</li>
            </ul>
            <p>Bhagyank = 3</p>
            <p>Where Moolank shows how you naturally act, Bhagyank shows where your life is generally headed — many numerologists say its influence becomes especially prominent from your mid-30s onward.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Calculate Your Namank
            </h2>
            <p>Namank converts every letter in your full name into a number using a standard Vedic letter-to-number chart, adds the totals, and reduces to a single digit — similar in method to Western name numerology, but using planetary associations specific to the Vedic system.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Moolank Meanings 1–9 and Their Ruling Planets
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Moolank</th><th className="p-3 border-r-2 border-black">Ruling Planet</th><th className="p-3 ">Core Theme</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">1</td><td className="p-3 border-r-2 border-black">Sun (Surya)</td><td className="p-3 ">Leadership, vitality, confidence</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">2</td><td className="p-3 border-r-2 border-black">Moon (Chandra)</td><td className="p-3 ">Emotion, intuition, sensitivity</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">3</td><td className="p-3 border-r-2 border-black">Jupiter (Brihaspati)</td><td className="p-3 ">Wisdom, optimism, expansion</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">4</td><td className="p-3 border-r-2 border-black">Rahu</td><td className="p-3 ">Ambition, rebellion, unconventional drive</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">5</td><td className="p-3 border-r-2 border-black">Mercury (Budha)</td><td className="p-3 ">Communication, adaptability, intellect</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">6</td><td className="p-3 border-r-2 border-black">Venus (Shukra)</td><td className="p-3 ">Love, beauty, harmony</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">7</td><td className="p-3 border-r-2 border-black">Ketu</td><td className="p-3 ">Spirituality, introspection, detachment</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">8</td><td className="p-3 border-r-2 border-black">Saturn (Shani)</td><td className="p-3 ">Discipline, karma, endurance</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">9</td><td className="p-3 border-r-2 border-black">Mars (Mangal)</td><td className="p-3 ">Courage, action, drive</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Vedic Numerology vs. Western Numerology
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black"></th><th className="p-3 border-r-2 border-black">Vedic Numerology</th><th className="p-3 ">Western (Pythagorean) Numerology</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Planetary association**</td><td className="p-3 border-r-2 border-black">Rahu = 4, Ketu = 7 (shadow planets)</td><td className="p-3 ">Uranus, Neptune generally not tied to core numbers</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Core numbers**</td><td className="p-3 border-r-2 border-black">Moolank, Bhagyank, Namank</td><td className="p-3 ">Life Path, Destiny/Expression, Soul Urge</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Name letter 9**</td><td className="p-3 border-r-2 border-black">No letter carries value 9 in some Vedic charts</td><td className="p-3 ">9 assigned normally (I, R)</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Cultural roots**</td><td className="p-3 border-r-2 border-black">Rooted in the Vedas and Jyotish</td><td className="p-3 ">Rooted in Pythagorean Greek tradition</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Best used with**</td><td className="p-3 border-r-2 border-black">Full Vedic Kundli for cross-verification</td><td className="p-3 ">Standalone or alongside Western astrology</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why Vedic Numerology Complements a Full Kundli
            </h2>
            <p>Because Moolank and Bhagyank need only a birth date — no birth time — numerology is often used as a **quick, accessible entry point** into Vedic self-understanding, especially when someone's exact birth time isn't known and a full Lagna-based Kundli isn't yet possible. That said, most practitioners treat numerology as a complement to, not a substitute for, a complete birth chart reading, since it can't capture house placements, Dashas, or divisional charts.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Confusing Moolank with Bhagyank** — Moolank uses only the day of birth; Bhagyank uses the entire date.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mixing Vedic and Western letter-to-number charts** for Namank calculations, which produces inconsistent results.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating numerology as a full substitute** for a complete Kundli, which also requires birth time and location.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring the planetary layer** — each number's meaning is rooted in its ruling Navagraha planet, not just an abstract digit.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What's the difference between Moolank and Bhagyank?
            </h2>
            <p>Moolank comes only from your day of birth and reflects instinctive personality, while Bhagyank comes from your complete date of birth and reflects your broader destiny and life direction.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do I need my birth time for Vedic numerology?
            </h2>
            <p>No — Moolank, Bhagyank, and Namank all use only your date of birth and full name, unlike a complete Kundli, which requires exact birth time and location for house placements.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Why does Vedic numerology use Rahu and Ketu instead of Uranus and Neptune?
            </h2>
            <p>Vedic numerology is built on the Navagraha (nine Vedic planets), which include the shadow planets Rahu and Ketu rather than the outer planets used in Western astronomy-based systems.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can Moolank and Bhagyank conflict with each other?
            </h2>
            <p>Yes — when your instinctive Moolank nature and your broader Bhagyank direction pull differently, numerologists describe this as a common source of internal tension worth understanding rather than ignoring.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Vedic numerology the same as Chaldean numerology?
            </h2>
            <p>No — Chaldean numerology is a separate, older letter-based system focused on name calculations using 1–8 values, while Vedic numerology (Anka Shastra) is rooted specifically in the Navagraha planetary framework and birth-date numbers.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              How accurate is Vedic numerology compared to a full birth chart?
            </h2>
            <p>Numerology offers a faster, date-and-name-based lens into personality and direction, but a complete Kundli — with birth time, houses, and Dashas — provides significantly more detailed and individualized insight.</p>
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
              <li>Traditional Anka Shastra framework rooted in Vedic and Jyotish literature</li>
              <li>Standard Navagraha planetary associations used across Vedic numerology practice</li>
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
