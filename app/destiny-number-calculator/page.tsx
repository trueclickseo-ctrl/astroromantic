import React from "react";
import type { Metadata } from "next";
import { NameNumerologyCalculator } from "@/components/calculators";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "destiny-number-calculator";

export const metadata: Metadata = {
  title: "Destiny Number Calculator – Find Your Expression Number Free",
  description: "Calculate your destiny number (expression number) free using your full birth name. Learn the formula, meanings 1–33, and how it differs from life path.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Destiny Number Calculator – Find Your Expression Number Free",
    description: "Calculate your destiny number (expression number) free using your full birth name. Learn the formula, meanings 1–33, and how it differs from life path.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destiny Number Calculator – Find Your Expression Number Free",
    description: "Calculate your destiny number (expression number) free using your full birth name. Learn the formula, meanings 1–33, and how it differs from life path.",
  },
};

const faqs = [
  {
    question: "Is destiny number the same as expression number?",
    answer: "Yes — \"Destiny Number\" and \"Expression Number\" refer to the exact same calculation derived from your full birth name."
  },
  {
    question: "Which name should I use: birth name or current name?",
    answer: "For the core (major) destiny number, always use your full birth-certificate name. Your current name can be calculated separately as a \"minor\" expression number."
  },
  {
    question: "Can my destiny number change if I legally change my name?",
    answer: "No. Your core destiny number is permanently tied to your birth name; a legal name change creates a separate minor expression number rather than replacing the original."
  },
  {
    question: "What's the difference between Pythagorean and Chaldean destiny numbers?",
    answer: "Pythagorean numerology assigns letters sequentially (A=1, B=2...) using your full birth name, while Chaldean numerology assigns letters by vibrational sound (1–8, no 9) and traditionally uses your current, commonly-used name."
  },
  {
    question: "Does everyone eventually \"live out\" their destiny number?",
    answer: "Not automatically — numerologists describe it as potential you're meant to develop, not something that unfolds without effort or self-awareness."
  },
  {
    question: "How does the destiny number relate to career choice?",
    answer: "Because it reflects natural talents and communication style, many people use their destiny number as a lens for choosing or refining a career path that plays to their innate strengths."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/${SLUG}/#article`,
      "headline": "Destiny Number Calculator: Discover Your Expression Number and Life Purpose",
      "description": "Calculate your destiny number (expression number) free using your full birth name. Learn the formula, meanings 1–33, and how it differs from life path.",
      "mainEntityOfPage": `${SITE_URL}/${SLUG}/`,
      "publisher": {
        "@type": "Organization",
        "name": "AstroRomantic",
        "url": SITE_URL
      }
    },
    {
      "@type": "HowTo",
      "@id": `${SITE_URL}/${SLUG}/#howto`,
      "name": "How to Calculate Your Destiny Number",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Write out your full birth name",
          "text": "Write out your full birth name exactly as it appears on your birth certificate — first, middle, and last."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Assign each letter a number",
          "text": "Assign each letter a number using the standard Pythagorean chart (A=1, B=2...)."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Add letter values within each name part",
          "text": "Add the letter values within each name part (first, middle, last) and reduce each to a single digit or master number."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Add totals and reduce",
          "text": "Add the three totals together, then reduce the final sum — unless it's 11, 22, or 33."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${SLUG}/#faq`,
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

export default function DestinyNumberCalculatorPage() {
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
            <span>Expression & Purpose Reading</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Destiny Number Calculator: Discover Your Expression Number and Life Purpose
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Your <strong>destiny number</strong> is the numerology value hidden inside your full birth name — the letters your parents chose before they ever knew who you'd become. Also known as the <strong>expression number</strong>, it's calculated by converting each letter to a number, adding them all together, and reducing the total to a single digit or master number. The result is meant to describe your natural talents and the fullest version of your potential.
          </p>
        </header>

        {/* Interactive Calculator Component Slot */}
        <section className="w-full">
          <NameNumerologyCalculator />
        </section>

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
              <span>Your <strong>destiny number</strong> — also called your <strong>expression number</strong> — is calculated from every letter in your <strong>full birth name</strong>, not your current name or nickname.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>It reveals your natural talents, communication style, and the direction your abilities are meant to take.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Unlike your life path number (from your birth date), your destiny number never changes, even if you legally change your name later.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Destiny numbers range from <strong>1–9</strong>, plus master numbers <strong>11, 22, and 33</strong>.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Pythagorean systems use your <strong>full birth-certificate name</strong>; Chaldean systems traditionally use your <strong>current, commonly-used name</strong> instead.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Destiny Number?
            </h2>
            <p>
              While your life path number (from your birth date) points to your overall journey, your destiny number points to the <strong>toolkit</strong> you're working with — your innate abilities, communication style, and the gifts you're meant to develop and share. Numerologists often describe it as the difference between the road you're walking (life path) and the vehicle you're driving (destiny).
            </p>
            <p>
              Your destiny number is considered a <strong>core number</strong> in your chart, alongside your life path, soul urge, and personality numbers, and it's derived exclusively from your full name at birth.
            </p>
          </section>

          {/* Section 2 - How to Calculate */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Calculate Your Destiny Number
            </h2>
            <ol className="list-decimal pl-6 space-y-2 font-sans">
              <li><strong>Write out your full birth name</strong> exactly as it appears on your birth certificate — first, middle, and last.</li>
              <li><strong>Assign each letter a number</strong> using the standard Pythagorean chart:</li>
            </ol>

            {/* Pythagorean Letter Table */}
            <div className="overflow-x-auto border-2 border-black rounded-xl my-4 shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-center text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold text-black">
                    <th className="p-2 border-r border-black">1</th>
                    <th className="p-2 border-r border-black">2</th>
                    <th className="p-2 border-r border-black">3</th>
                    <th className="p-2 border-r border-black">4</th>
                    <th className="p-2 border-r border-black">5</th>
                    <th className="p-2 border-r border-black">6</th>
                    <th className="p-2 border-r border-black">7</th>
                    <th className="p-2 border-r border-black">8</th>
                    <th className="p-2">9</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs sm:text-sm">
                  <tr>
                    <td className="p-2 border-r border-black">A, J, S</td>
                    <td className="p-2 border-r border-black">B, K, T</td>
                    <td className="p-2 border-r border-black">C, L, U</td>
                    <td className="p-2 border-r border-black">D, M, V</td>
                    <td className="p-2 border-r border-black">E, N, W</td>
                    <td className="p-2 border-r border-black">F, O, X</td>
                    <td className="p-2 border-r border-black">G, P, Y</td>
                    <td className="p-2 border-r border-black">H, Q, Z</td>
                    <td className="p-2">I, R</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ol className="list-decimal pl-6 space-y-2 font-sans" start={3}>
              <li><strong>Add the letter values within each name part</strong> (first, middle, last) and reduce each to a single digit or master number.</li>
              <li><strong>Add the three totals together</strong>, then reduce the final sum — unless it's 11, 22, or 33.</li>
            </ol>

            <div className="bg-amber-50 border-2 border-black rounded-xl p-5 space-y-2 mt-4 shadow-[3px_3px_0px_#000000]">
              <h3 className="text-lg font-bold font-mono text-black uppercase">Worked Example: Albert Einstein</h3>
              <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
                <li><strong>Albert:</strong> A(1)+L(3)+B(2)+E(5)+R(9)+T(2) = 22 → kept as master number <strong>22</strong></li>
                <li><strong>Einstein:</strong> E(5)+I(9)+N(5)+S(1)+T(2)+E(5)+I(9)+N(5) = 41 → 4+1 = <strong>5</strong></li>
                <li>Add: 22 + 5 = 27 → 2+7 = <strong>9</strong></li>
              </ul>
              <p className="font-bold font-mono text-base pt-1 text-black">Destiny Number = 9</p>
            </div>
          </section>

          {/* Section 3 - Meanings Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Destiny Number Meanings 1–9 and Master Numbers
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Number</th>
                    <th className="p-3 border-r-2 border-black">Talent Focus</th>
                    <th className="p-3">Natural Strengths</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">1</td><td className="p-3 border-r-2 border-black">Leadership</td><td className="p-3">Initiative, confidence, independence</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">2</td><td className="p-3 border-r-2 border-black">Diplomacy</td><td className="p-3">Cooperation, sensitivity, partnership</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">3</td><td className="p-3 border-r-2 border-black">Creativity</td><td className="p-3">Communication, artistry, optimism</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">4</td><td className="p-3 border-r-2 border-black">Structure</td><td className="p-3">Organization, reliability, hard work</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">5</td><td className="p-3 border-r-2 border-black">Versatility</td><td className="p-3">Adaptability, curiosity, freedom</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">6</td><td className="p-3 border-r-2 border-black">Nurturing</td><td className="p-3">Responsibility, care, community</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">7</td><td className="p-3 border-r-2 border-black">Analysis</td><td className="p-3">Wisdom, research, spiritual insight</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">8</td><td className="p-3 border-r-2 border-black">Ambition</td><td className="p-3">Business acumen, authority, resilience</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">9</td><td className="p-3 border-r-2 border-black">Humanitarianism</td><td className="p-3">Generosity, idealism, global vision</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">11 (Master)</td><td className="p-3 border-r-2 border-black">Inspiration</td><td className="p-3">Intuition, vision, spiritual insight</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">22 (Master)</td><td className="p-3 border-r-2 border-black">Master Building</td><td className="p-3">Turning big dreams into real structures</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">33 (Master)</td><td className="p-3 border-r-2 border-black">Master Teaching</td><td className="p-3">Selfless service on a large scale</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 - Three Numbers Comparison */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Destiny Number vs. Life Path Number vs. Soul Urge Number
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">Destiny Number</th>
                    <th className="p-3 border-r-2 border-black">Life Path Number</th>
                    <th className="p-3">Soul Urge Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Source</td><td className="p-3 border-r-2 border-black">Full birth name (all letters)</td><td className="p-3 border-r-2 border-black">Full date of birth</td><td className="p-3">Vowels only in birth name</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Reveals</td><td className="p-3 border-r-2 border-black">Talents & how you express them</td><td className="p-3 border-r-2 border-black">Life direction & lessons</td><td className="p-3">Inner desires & motivations</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Changes if you rename yourself?</td><td className="p-3 border-r-2 border-black">No — always birth name</td><td className="p-3 border-r-2 border-black">Never applicable</td><td className="p-3">No — always birth name</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Minor vs. Major Expression Number
            </h2>
            <p>
              Some numerologists distinguish between your <strong>core (major) destiny number</strong>, calculated from your full birth name, and a <strong>minor destiny number</strong>, calculated from the name you currently use day to day. The minor number is treated as an "overlay" — a temporary influence — while the core number, from your birth certificate, carries the primary weight in a reading.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Using a nickname or married name</strong> instead of the full birth-certificate name for your core destiny number.</li>
              <li><strong>Reducing 11, 22, or 33 too early</strong> within a name segment instead of preserving them until the final total.</li>
              <li><strong>Confusing destiny number with life path number</strong> — they use completely different source data (name vs. birth date).</li>
              <li><strong>Mixing Pythagorean and Chaldean letter values</strong> in the same calculation, which produces an inconsistent result.</li>
            </ul>
          </section>

          {/* Section 7 - FAQs */}
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

          {/* Section 8 - Cross Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/life-path-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Pair with Life Path Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/chaldean-numerology-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Compare with Chaldean Letter Values</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/soulmate-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Soulmate Compatibility Test</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/love/love-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Love Percentage Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Section 9 - External References / Sources */}
          <section className="border-t-2 border-zinc-300 pt-6 space-y-2 text-xs text-zinc-600 font-mono">
            <h3 className="font-bold uppercase text-black flex items-center space-x-1">
              <BookOpen className="w-4 h-4 text-black mr-1" />
              <span>External References & Sources</span>
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cheiro, <em>Cheiro's Book of Numbers</em> — historical basis for letter-to-number values</li>
              <li>Pythagorean numerology tradition — standard reference for Western letter charts</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
