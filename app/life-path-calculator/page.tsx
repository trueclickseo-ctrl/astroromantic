import React from "react";
import type { Metadata } from "next";
import { LifePathCalculator } from "@/components/calculators";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://astroromantic.com";
const SLUG = "life-path-calculator";

export const metadata: Metadata = {
  title: "Life Path Calculator – Find Your Numerology Life Path Number",
  description: "Use our free life path calculator to find your numerology life path number instantly. Learn the exact formula, master numbers, and what your number means.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Life Path Calculator – Find Your Numerology Life Path Number",
    description: "Use our free life path calculator to find your numerology life path number instantly. Learn the exact formula, master numbers, and what your number means.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Path Calculator – Find Your Numerology Life Path Number",
    description: "Use our free life path calculator to find your numerology life path number instantly. Learn the exact formula, master numbers, and what your number means.",
  },
};

const faqs = [
  {
    question: "What is the rarest life path number?",
    answer: "Master numbers 11, 22, and 33 are the least common, since they require a specific alignment of birth digits to appear. Number 22 has become especially rare for people born after 1999."
  },
  {
    question: "Can two people have the same life path number and still be incompatible?",
    answer: "Yes. A shared life path number suggests similar core values, but compatibility also depends on destiny numbers, communication style, and real-life factors a calculator can't measure."
  },
  {
    question: "Do I calculate my life path number using my birth name or current date?",
    answer: "Neither — it uses your date of birth only (month, day, year), never your name or today's date."
  },
  {
    question: "Is life path number 4 or 8 considered \"better\" than the others?",
    answer: "No number is objectively better. Each life path carries its own strengths and challenges; 4 emphasizes stability while 8 emphasizes achievement, but both are equally valid paths."
  },
  {
    question: "How is a life path number different from a birthday number?",
    answer: "The birthday number uses only the day you were born, reduced to a single digit, while the life path number combines the full month, day, and year."
  },
  {
    question: "Why did two calculators give me different life path numbers?",
    answer: "This usually happens when a tool adds all birth-date digits together at once instead of reducing month, day, and year separately — always check the calculation method a site uses."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/${SLUG}/#article`,
      "headline": "Life Path Calculator: Find Your Life Path Number and What It Means",
      "description": "Use our free life path calculator to find your numerology life path number instantly. Learn the exact formula, master numbers, and what your number means.",
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
      "name": "How to Calculate Your Life Path Number (Step-by-Step)",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Reduce the birth month",
          "text": "Reduce the birth month to a single digit. (October = 1+0 = 1; November stays 11, since it's a master number.)"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Reduce the birth day",
          "text": "Reduce the birth day to a single digit or master number. (29th = 2+9 = 11, kept as a master number.)"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Reduce the birth year",
          "text": "Reduce the birth year by adding all four digits together, then reducing that sum."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Add the three results together",
          "text": "Add the three results together, then reduce that final sum to a single digit — unless it lands on 11, 22, or 33."
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

export default function LifePathCalculatorPage() {
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
            <span>Pythagorean Numerology Blueprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Life Path Calculator: Find Your Life Path Number and What It Means
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Your <strong>life path number</strong> is a single digit — or occasionally a master number — that numerology considers the most important figure in your entire chart. It's calculated directly from your date of birth and is meant to reveal your core personality, natural talents, and the lessons you're here to learn. Below, you'll find the exact formula, real examples, and what each number from 1 to 33 actually means.
          </p>
        </header>

        {/* Interactive Calculator Component Slot */}
        <section className="w-full">
          <LifePathCalculator />
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
              <span>Your <strong>life path number</strong> is calculated by reducing your birth month, day, and year separately, then adding those three results together.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Life path numbers range from <strong>1 to 9</strong>, plus three <strong>master numbers</strong>: 11, 22, and 33, which are never reduced further.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>It's considered the single most important number in a numerology chart — a blueprint for personality, talents, and life lessons.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Calculating each date part <strong>separately before adding</strong> is essential; adding all digits at once can produce an inaccurate result and hide a master number.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Your life path number pairs with your <strong>destiny number</strong> (from your name) for a fuller numerology picture.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Life Path Number?
            </h2>
            <p>
              In numerology, your life path number works something like your sun sign in astrology: it's a shorthand for your fundamental nature, how you process life, and what tends to come naturally to you. It's derived entirely from your <strong>full date of birth</strong> — no name required — which makes it one of the easiest and most requested numerology calculations.
            </p>
            <p>
              Numerologists treat the life path number as a <strong>blueprint</strong>, not a fixed script. It outlines your innate strengths, likely challenges, and the general direction your life tends to pull toward.
            </p>
          </section>

          {/* Section 2 - How to Calculate */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Calculate Your Life Path Number (Step-by-Step)
            </h2>
            <p>
              The standard Pythagorean method reduces the month, day, and year <strong>separately</strong> before combining them. This matters — reducing everything at once can accidentally erase or fabricate a master number.
            </p>
            <ol className="list-decimal pl-6 space-y-2 font-sans">
              <li><strong>Reduce the birth month</strong> to a single digit. (October = 1+0 = 1; November stays 11, since it's a master number.)</li>
              <li><strong>Reduce the birth day</strong> to a single digit or master number. (29th = 2+9 = 11, kept as a master number.)</li>
              <li><strong>Reduce the birth year</strong> by adding all four digits together, then reducing that sum.</li>
              <li><strong>Add the three results together</strong>, then reduce that final sum to a single digit — unless it lands on 11, 22, or 33.</li>
            </ol>

            <div className="bg-amber-50 border-2 border-black rounded-xl p-5 space-y-2 mt-4 shadow-[3px_3px_0px_#000000]">
              <h3 className="text-lg font-bold font-mono text-black uppercase">Worked Example</h3>
              <p className="font-sans text-sm sm:text-base">Birth date: <strong>February 27, 1976</strong></p>
              <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
                <li>Month: February = 2</li>
                <li>Day: 27 → 2+7 = 9</li>
                <li>Year: 1976 → 1+9+7+6 = 23 → 2+3 = 5</li>
                <li>Add the three: 2 + 9 + 5 = 16 → 1+6 = <strong>7</strong></li>
              </ul>
              <p className="font-bold font-mono text-base pt-1 text-black">Life Path Number = 7</p>
            </div>
          </section>

          {/* Section 3 - Meanings Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Life Path Numbers 1–9 and Master Numbers: Quick Meanings
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Number</th>
                    <th className="p-3 border-r-2 border-black">Core Theme</th>
                    <th className="p-3">Common Strengths</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">1</td><td className="p-3 border-r-2 border-black">Leadership</td><td className="p-3">Independent, driven, original</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">2</td><td className="p-3 border-r-2 border-black">Harmony</td><td className="p-3">Diplomatic, intuitive, cooperative</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">3</td><td className="p-3 border-r-2 border-black">Expression</td><td className="p-3">Creative, social, optimistic</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">4</td><td className="p-3 border-r-2 border-black">Stability</td><td className="p-3">Disciplined, practical, dependable</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">5</td><td className="p-3 border-r-2 border-black">Freedom</td><td className="p-3">Adventurous, adaptable, curious</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">6</td><td className="p-3 border-r-2 border-black">Responsibility</td><td className="p-3">Nurturing, loyal, service-oriented</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">7</td><td className="p-3 border-r-2 border-black">Introspection</td><td className="p-3">Analytical, spiritual, private</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">8</td><td className="p-3 border-r-2 border-black">Achievement</td><td className="p-3">Ambitious, business-minded, resilient</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">9</td><td className="p-3 border-r-2 border-black">Compassion</td><td className="p-3">Humanitarian, generous, wise</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">11 (Master)</td><td className="p-3 border-r-2 border-black">Illumination</td><td className="p-3">Intuitive, inspiring, sensitive</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">22 (Master)</td><td className="p-3 border-r-2 border-black">Master Builder</td><td className="p-3">Visionary, practical idealist</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">33 (Master)</td><td className="p-3 border-r-2 border-black">Master Teacher</td><td className="p-3">Selfless, nurturing on a large scale</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Understanding Master Numbers (11, 22, 33)
            </h2>
            <p>
              A master number is a double-digit number that is <strong>never reduced</strong> further because numerology treats it as carrying amplified spiritual intensity and potential. If your month, day, or year reduction lands on 11, 22, or 33 at any stage, you keep it as-is through the rest of the calculation — only reducing further if the <em>final</em> combined total isn't itself a master number.
            </p>
            <p>
              Master numbers are often associated with greater life challenges paired with greater potential for impact, insight, or service — an "old soul" quality that surfaces more intensely than single-digit paths.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Calculating a Life Path Number
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Adding all digits together at once</strong> instead of reducing month, day, and year separately — this can hide or wrongly create master numbers.</li>
              <li><strong>Reducing 11, 22, or 33 too early</strong>, when they should be preserved through the calculation.</li>
              <li><strong>Ignoring karmic debt numbers</strong> (13, 14, 16, 19), which some numerologists track as an added layer within the life path calculation.</li>
              <li><strong>Confusing the life path number with the destiny/expression number</strong>, which comes from your name, not your birth date.</li>
            </ul>
          </section>

          {/* Section 6 - Difference Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Life Path Number vs. Destiny Number: What's the Difference?
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">Life Path Number</th>
                    <th className="p-3">Destiny Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Derived from</td><td className="p-3 border-r-2 border-black">Full date of birth</td><td className="p-3">Full birth name</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Represents</td><td className="p-3 border-r-2 border-black">Your journey and innate tendencies</td><td className="p-3">Your talents and how you express them</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Changes?</td><td className="p-3 border-r-2 border-black">Never</td><td className="p-3">Never</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Best for</td><td className="p-3 border-r-2 border-black">Understanding life direction and lessons</td><td className="p-3">Understanding natural abilities and purpose</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Numerologists often say your life path tells you <strong>what you came to do</strong>, while your destiny number tells you <strong>how you'll go about doing it</strong>. Try our{" "}
              <a href="/destiny-number-calculator" className="font-bold text-black underline hover:bg-amber-300 transition-colors">
                destiny number
              </a>{" "}
              calculator to complete the picture.
            </p>
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
              Explore More Numerology Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/destiny-number-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Calculate Destiny Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/chaldean-numerology-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Chaldean Numerology System</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/soulmate-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Soulmate Compatibility</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/love/love-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Love Compatibility Calculator</span>
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
              <li>Pythagorean reduction method — historical numerology reference standard used across modern practice</li>
              <li>Cheiro, <em>Cheiro's Book of Numbers</em> — early codification of number meanings</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
