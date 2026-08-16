import React from "react";
import type { Metadata } from "next";
import { ChaldeanCalculator } from "@/components/calculators";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "chaldean-numerology-calculator";

export const metadata: Metadata = {
  title: "Chaldean Numerology Calculator – Free Name & Number Reading",
  description: "Calculate your Chaldean numerology number free. Learn the 1–8 letter chart, how it differs from Pythagorean numerology, and what your number means.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Chaldean Numerology Calculator – Free Name & Number Reading",
    description: "Calculate your Chaldean numerology number free. Learn the 1–8 letter chart, how it differs from Pythagorean numerology, and what your number means.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaldean Numerology Calculator – Free Name & Number Reading",
    description: "Calculate your Chaldean numerology number free. Learn the 1–8 letter chart, how it differs from Pythagorean numerology, and what your number means.",
  },
};

const faqs = [
  {
    question: "Is Chaldean numerology older than Pythagorean numerology?",
    answer: "Yes. Chaldean numerology traces back roughly 4,000 years to ancient Babylon, predating the Pythagorean system that became popular in Western numerology."
  },
  {
    question: "Why doesn't Chaldean numerology use the number 9?",
    answer: "The number 9 is considered sacred and reserved for the divine in Chaldean tradition, so it's never assigned to a letter — it can only appear as a final reduced result."
  },
  {
    question: "Should I use my birth name or current name for a Chaldean reading?",
    answer: "Chaldean numerology traditionally uses the name you currently go by day to day, unlike Pythagorean numerology, which uses your full birth-certificate name."
  },
  {
    question: "Is Chaldean numerology more accurate than Pythagorean numerology?",
    answer: "Neither system is scientifically proven to be more accurate; the choice often comes down to cultural tradition and which system's results feel more meaningful to you."
  },
  {
    question: "What is a compound number in Chaldean numerology?",
    answer: "A compound number is the two-digit total (like 15, 23, or 42) calculated before final reduction to a single digit — Chaldean numerology assigns each compound number its own specific meaning."
  },
  {
    question: "Can I use Chaldean numerology for naming a business or baby?",
    answer: "Yes — Chaldean numerology has a long tradition in Indian and Vedic numerology specifically for choosing auspicious business and baby names based on favorable name-number vibrations."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/${SLUG}/#article`,
      "headline": "Chaldean Numerology Calculator: Ancient Number System Explained",
      "description": "Calculate your Chaldean numerology number free. Learn the 1–8 letter chart, how it differs from Pythagorean numerology, and what your number means.",
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
      "name": "How to Calculate Your Chaldean Name Number",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Use the name you're currently known by",
          "text": "Use the name you're currently known by — not necessarily your full birth-certificate name."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Assign each letter its Chaldean number",
          "text": "Assign each letter its Chaldean number using the 1–8 vibrational sound chart."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Add all letter values together",
          "text": "Add all the letter values together to get a total."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Reduce the total",
          "text": "Reduce the total to a single digit, unless it's a master number (11, 22, or 33), which is preserved."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Note the compound number",
          "text": "Note the compound number (the two-digit total before final reduction) — Chaldean numerology treats this as meaningful on its own."
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

export default function ChaldeanNumerologyCalculatorPage() {
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
            <span>Ancient Sound Vibration System</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Chaldean Numerology Calculator: Ancient Number System Explained
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            <strong>Chaldean numerology</strong> is the oldest documented numerology system in the world, tracing back to ancient Babylon. Unlike the more familiar Pythagorean method, it assigns each letter a value between 1 and 8 based on sound vibration rather than alphabetical position — and it treats 9 as a sacred number that no letter can carry. Use the calculator above to find your Chaldean name number, or read on for the full letter chart and calculation method.
          </p>
        </header>

        {/* Interactive Calculator Component Slot */}
        <section className="w-full">
          <ChaldeanCalculator />
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
              <span><strong>Chaldean numerology</strong> is one of the oldest known numerology systems, rooted in ancient Babylonian tradition, dating back roughly 4,000 years.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>It assigns letters values from <strong>1 to 8</strong> based on sound vibration, not alphabetical order — and never assigns any letter the number 9, which is considered sacred.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Chaldean readings traditionally use the <strong>name you currently go by</strong>, unlike Pythagorean numerology, which uses your full birth-certificate name.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Compound numbers (like 15, 23, 42) carry their own meaning in Chaldean numerology before being reduced further — a layer Pythagorean numerology generally skips.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Chaldean numerology is widely used in <strong>Vedic and Indian numerology traditions</strong>, especially for business and baby naming.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is Chaldean Numerology?
            </h2>
            <p>
              Chaldean numerology originated with the Chaldeans of ancient Mesopotamia and is considered a precursor to many later numerology systems, including the Pythagorean method taught widely in the West today. Rather than assigning numbers in simple alphabetical sequence, Chaldean numerology groups letters by their <strong>vibrational or phonetic quality</strong> — the idea being that sound carries energetic meaning, and that energy is what should determine a letter's number.
            </p>
            <p>
              This system uses only <strong>1 through 8</strong> for individual letters. The number 9 is left out of the letter chart entirely and reserved as a sacred number that can only appear as a final calculated result, never as a starting letter value.
            </p>
          </section>

          {/* Section 2 - Letter Chart Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The Chaldean Numerology Letter Chart
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl max-w-md shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Number</th>
                    <th className="p-3">Letters</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-mono">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">1</td><td className="p-3">A, I, J, Q, Y</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">2</td><td className="p-3">B, K, R</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">3</td><td className="p-3">C, G, L, S</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">4</td><td className="p-3">D, M, T</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">5</td><td className="p-3">E, H, N, X</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">6</td><td className="p-3">U, V, W</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">7</td><td className="p-3">O, Z</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">8</td><td className="p-3">F, P</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">9</td><td className="p-3 italic text-zinc-600">(reserved — no letters assigned)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 - How to Calculate */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Calculate Your Chaldean Name Number
            </h2>
            <ol className="list-decimal pl-6 space-y-2 font-sans">
              <li><strong>Use the name you're currently known by</strong> — not necessarily your full birth-certificate name (this is a key difference from Pythagorean numerology).</li>
              <li><strong>Assign each letter its Chaldean number</strong> using the chart above.</li>
              <li><strong>Add all the letter values together</strong> to get a total.</li>
              <li><strong>Reduce the total</strong> to a single digit, unless it's a master number (11, 22, or 33), which is preserved.</li>
              <li><strong>Note the compound number</strong> (the two-digit total before final reduction) — Chaldean numerology treats this as meaningful on its own, not just a step toward the final digit.</li>
            </ol>

            <div className="bg-amber-50 border-2 border-black rounded-xl p-5 space-y-2 mt-4 shadow-[3px_3px_0px_#000000]">
              <h3 className="text-lg font-bold font-mono text-black uppercase">Worked Example</h3>
              <p className="font-sans text-sm sm:text-base">Name: <strong>JANICE</strong> (for illustration)</p>
              <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
                <li>J(1) + A(1) + N(5) + I(1) + C(3) + E(5) = 16</li>
                <li>Compound number: <strong>16</strong> — read for its own meaning first</li>
                <li>Reduce: 1+6 = <strong>7</strong></li>
              </ul>
              <p className="font-bold font-mono text-base pt-1 text-black">Final Chaldean number = 7 (from compound 16)</p>
            </div>
          </section>

          {/* Section 4 - Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Chaldean vs. Pythagorean Numerology: Full Comparison
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">Chaldean Numerology</th>
                    <th className="p-3">Pythagorean Numerology</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Number range for letters</td><td className="p-3 border-r-2 border-black">1–8 (no 9)</td><td className="p-3">1–9</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Letter assignment basis</td><td className="p-3 border-r-2 border-black">Sound/vibrational quality</td><td className="p-3">Sequential alphabetical order</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Name used</td><td className="p-3 border-r-2 border-black">Current, commonly-used name</td><td className="p-3">Full birth-certificate name</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Treatment of 9</td><td className="p-3 border-r-2 border-black">Sacred, never assigned to a letter</td><td className="p-3">Ordinary number, used like any other</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Compound numbers</td><td className="p-3 border-r-2 border-black">Interpreted individually before reduction</td><td className="p-3">Generally reduced without separate meaning</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Common regional use</td><td className="p-3 border-r-2 border-black">Indian/Vedic numerology traditions</td><td className="p-3">Western New Age numerology</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Best for beginners</td><td className="p-3 border-r-2 border-black">More complex to learn</td><td className="p-3">Simpler, more widely taught</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Chaldean Numerology Calculates
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Name Number (Psychic/Driver Number)</strong> — reflects natural personality and how others perceive you day to day</li>
              <li><strong>Destiny Number (Conductor Number)</strong> — the deeper life direction associated with your commonly-used name</li>
              <li><strong>Soul Urge Number</strong> — hidden inner desires and motivations</li>
              <li><strong>Expression Number</strong> — outward personality and communication style</li>
            </ul>
            <p>
              Chaldean numerologists often check whether a person's <strong>Name Number and Destiny Number</strong> are "friendly" with each other — a harmonious pairing is traditionally considered a sign of good fortune, which is one reason this system remains popular for naming babies and businesses.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why Some Numerologists Prefer Chaldean
            </h2>
            <p>
              Many practitioners consider Chaldean numerology more nuanced for <strong>compatibility and prediction work</strong>, largely because of its compound-number interpretations. Where Pythagorean numerology reduces 15 straight to 6 with no intermediate meaning, Chaldean tradition reads 15 as its own distinct energy — associated with eloquence and magnetic charm — before reducing it further. This extra layer is part of why Chaldean numerology remains dominant in Vedic numerology and Indian business-naming practices.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mixing Chaldean and Pythagorean letter values</strong> in the same calculation — they use entirely different charts and will produce inconsistent results if combined.</li>
              <li><strong>Using your birth name instead of your current name</strong> — Chaldean numerology traditionally calls for the name you're actually known by.</li>
              <li><strong>Ignoring the compound number</strong> and jumping straight to the final single digit, missing a layer of meaning Chaldean numerology specifically emphasizes.</li>
              <li><strong>Assuming Chaldean is "more accurate" than Pythagorean</strong> — both are traditional symbolic systems; neither is scientifically validated, and the "right" one is largely about cultural context and personal resonance.</li>
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

          {/* Section 9 - Cross Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore More Numerology Systems
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/destiny-number-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Pythagorean Destiny Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/life-path-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Calculate Life Path Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/soulmate-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Soulmate Compatibility</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/love-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Love Compatibility Calculator</span>
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
              <li>Cheiro, <em>Cheiro's Book of Numbers</em> — primary historical reference for the Chaldean letter-to-number chart</li>
              <li>Historical accounts of Babylonian/Mesopotamian numerology traditions</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
