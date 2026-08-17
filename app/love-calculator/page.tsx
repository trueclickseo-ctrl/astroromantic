import React from "react";
import type { Metadata } from "next";
import { LoveCalculatorComponent } from "@/components/calculators";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "love-calculator";

export const metadata: Metadata = {
  title: "Love Calculator – Free Love Compatibility Test by Name",
  description: "Try our free love calculator to find your love compatibility percentage by name or birth date. Instant results, no sign-up, fun and shareable.",
  alternates: { canonical: `${SITE_URL}/love/${SLUG}/` },
  openGraph: {
    title: "Love Calculator – Free Love Compatibility Test by Name",
    description: "Try our free love calculator to find your love compatibility percentage by name or birth date. Instant results, no sign-up, fun and shareable.",
    url: `${SITE_URL}/love/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Calculator – Free Love Compatibility Test by Name",
    description: "Try our free love calculator to find your love compatibility percentage by name or birth date. Instant results, no sign-up, fun and shareable.",
  },
};

const faqs = [
  {
    question: "Is the love calculator accurate?",
    answer: "It's based on numerology pattern-matching, not scientific research, so treat it as entertainment and reflection rather than a verified prediction."
  },
  {
    question: "Do I need both names to be spelled exactly right?",
    answer: "Yes — even minor spelling differences (nicknames, middle names) change the letter values and can shift your result."
  },
  {
    question: "Can I use a love calculator for someone I'm not dating yet?",
    answer: "Yes, many people use it out of curiosity about a crush; just keep in mind it reflects name patterns, not the other person's actual feelings."
  },
  {
    question: "Why do I get different percentages on different websites?",
    answer: "Each site uses its own algorithm — some rely on name letters only, others add birth dates or zodiac data, which changes the outcome."
  },
  {
    question: "Does a 100% love score mean we're perfect for each other?",
    answer: "Not necessarily — even a very high score still benefits from real communication, since numerology can't measure day-to-day compatibility factors like habits or life goals."
  },
  {
    question: "What's the difference between a love calculator and a marriage compatibility calculator?",
    answer: "A love calculator typically gives a general romantic percentage, while marriage compatibility tools often add deeper factors like family values, long-term life path alignment, and financial compatibility indicators."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/${SLUG}/#article`,
      "headline": "Love Calculator: Check Your Love Compatibility Percentage by Name",
      "description": "Try our free love calculator to find your love compatibility percentage by name or birth date. Instant results, no sign-up, fun and shareable.",
      "mainEntityOfPage": `${SITE_URL}/${SLUG}/`,
      "publisher": {
        "@type": "Organization",
        "name": "AstroRomantic",
        "url": SITE_URL
      }
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

export default function LoveCalculatorPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <script
        dangerouslySetInnerHTML={{
          __html: `if (typeof window !== 'undefined') { window.location.replace('/love/love-calculator/'); }`,
        }}
      />
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
            <span>Romantic Compatibility Meter</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Love Calculator: Check Your Love Compatibility Percentage by Name
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Curious how compatible you and your crush really are? A <strong>love calculator</strong> takes both of your names — and optionally your birth dates — and generates a love percentage based on numerology pattern matching. It's quick, it's fun, and while it won't predict your future, it's a great way to spark a real conversation about your connection.
          </p>
        </header>

        {/* Interactive Calculator Component Slot */}
        <section className="w-full">
          <LoveCalculatorComponent />
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
              <span>A <strong>love calculator</strong> converts two names (and sometimes birth dates) into a compatibility percentage using numerology-based pattern matching.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>It's designed as a <strong>fun, low-pressure tool</strong> — not a scientific predictor of relationship success.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Adding birth dates alongside names produces a more layered result by factoring in life path compatibility, not just name patterns.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>High or low scores both offer conversation starters: what feels easy, and what might need extra effort.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Love calculators work for romantic partners, crushes, and even for testing chemistry with a friend, out of curiosity.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How Does a Love Calculator Work?
            </h2>
            <p>
              Most love calculators use a <strong>name-based numerology algorithm</strong>. Each letter in both names is converted to a number, the two sets of numbers are compared for overlapping or complementary patterns, and the tool outputs a percentage that reflects how many "compatibility parameters" the two of you share.
            </p>
            <p>
              Some calculators add a second layer using <strong>birth dates</strong>, comparing life path numbers or zodiac elements (fire, earth, air, water) for a more detailed synastry-style reading. The more inputs a calculator uses, the more nuanced — though not necessarily more "scientific" — the result becomes.
            </p>
          </section>

          {/* Section 2 - Steps */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Step-by-Step: How to Use a Love Calculator
            </h2>
            <ol className="list-decimal pl-6 space-y-2 font-sans">
              <li><strong>Enter your full name</strong> (or first name, depending on the tool).</li>
              <li><strong>Enter your partner's or crush's name.</strong></li>
              <li>Optionally, <strong>add both birth dates</strong> for a deeper compatibility layer.</li>
              <li><strong>Get your instant love percentage</strong>, along with a short written interpretation.</li>
              <li><strong>Use the result as a conversation starter</strong> — ask each other what parts feel true and what parts don't.</li>
            </ol>
          </section>

          {/* Section 3 - Interpretation Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Your Love Percentage Might Mean
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Score Range</th>
                    <th className="p-3">General Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">90–100%</td><td className="p-3">Strong natural rapport; communication tends to flow easily</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">70–89%</td><td className="p-3">Solid compatibility with a few areas worth extra attention</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">50–69%</td><td className="p-3">Balanced mix of ease and friction — normal for most real relationships</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">30–49%</td><td className="p-3">More effort needed in communication or pacing, not necessarily incompatible</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Below 30%</td><td className="p-3">Numerologically "different" energies — can still work with intention and patience</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              No score below 100% should be read as a red flag. Numerology measures <strong>pattern alignment</strong>, not the countless real-world factors — trust, effort, timing — that actually determine relationship success.
            </p>
          </section>

          {/* Section 4 - Difference Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Love Calculator vs. Soulmate Calculator: What's the Difference?
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">Love Calculator</th>
                    <th className="p-3">Soulmate Calculator</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Focus</td><td className="p-3 border-r-2 border-black">General romantic compatibility</td><td className="p-3">Deep spiritual/emotional soul connection</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Typical Inputs</td><td className="p-3 border-r-2 border-black">Names (birth dates optional)</td><td className="p-3">Full names + full birth dates</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Best Use Case</td><td className="p-3 border-r-2 border-black">Quick fun check with a crush or partner</td><td className="p-3">Serious reflection on a meaningful bond</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black font-bold">Depth of Result</td><td className="p-3 border-r-2 border-black">Single percentage</td><td className="p-3">Percentage + multi-category breakdown</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              If your love calculator result has you intrigued, our{" "}
              <a href="/soulmate-calculator" className="font-bold text-black underline hover:bg-amber-300 transition-colors">
                soulmate compatibility calculator
              </a>{" "}
              goes a layer deeper using both full birth names and dates.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why People Use Love Calculators (Beyond Just Fun)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Early spark check</strong> — a lighthearted way to gauge whether early attraction might have more behind it.</li>
              <li><strong>Icebreaker for new relationships</strong> — sharing results can open up real conversations about expectations and values.</li>
              <li><strong>Curiosity about existing relationships</strong> — long-term couples sometimes use it just to see what the numbers say, for fun.</li>
              <li><strong>Social sharing</strong> — because results are name-based and consistent, they're easy to compare with friends.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Treating the score as a guarantee</strong> of relationship success or failure — it's a numerology pattern, not a prediction.</li>
              <li><strong>Comparing results across different sites</strong> and expecting the same number — different calculators weight names, dates, and letter systems differently.</li>
              <li><strong>Running it obsessively for every new match</strong>, which turns a fun tool into a source of unnecessary anxiety.</li>
              <li><strong>Ignoring real compatibility factors</strong> — communication, values, and effort matter far more than any online percentage.</li>
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
              Explore More Compatibility Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/soulmate-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Soulmate Compatibility Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/life-path-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Check Life Path Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/destiny-number-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Calculate Destiny Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/chaldean-numerology-calculator" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Chaldean Numerology System</span>
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
              <li>Pythagorean numerology tradition — standard reference for name-based letter-to-number systems</li>
              <li>General astrology synastry principles — reference for element and sign-based compatibility layers</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
