import React from "react";
import type { Metadata } from "next";
import { GenericCalculatorComponent } from "@/components/calculators/generic";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

const SITE_URL = "https://astroromantic.com";
const SLUG = "soulmate-calculator";

export const metadata: Metadata = {
  title: "Soulmate Calculator – Find Your True Soulmate by Name & Date",
  description: "Try our free soulmate calculator to reveal your soul connection using name numerology, birth dates, and astrology. Instant, accurate, no sign-up needed.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Soulmate Calculator – Find Your True Soulmate by Name & Date",
    description: "Try our free soulmate calculator to reveal your soul connection using name numerology, birth dates, and astrology. Instant, accurate, no sign-up needed.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulmate Calculator – Find Your True Soulmate by Name & Date",
    description: "Try our free soulmate calculator to reveal your soul connection using name numerology, birth dates, and astrology. Instant, accurate, no sign-up needed.",
  },
};

const faqs = [
  {
    question: "Is a soulmate calculator scientifically accurate?",
    answer: "No. It's based on numerology and astrology traditions, not scientific measurement. Treat it as symbolic insight rather than fact."
  },
  {
    question: "Do I need my soulmate's exact birth time?",
    answer: "No — most soulmate calculators only need the full birth name and date of birth (day, month, year), not the birth time."
  },
  {
    question: "Can I calculate soulmate compatibility with a friend or family member?",
    answer: "Yes. Soulmate connections in numerology aren't limited to romantic partners; the same calculation can reveal deep platonic or familial bonds."
  },
  {
    question: "Why did I get a different soulmate score on another website?",
    answer: "Different sites weight the numerology and astrology factors differently, and some use Chaldean letter values instead of Pythagorean, which changes the underlying math."
  },
  {
    question: "Does a low soulmate score mean we shouldn't be together?",
    answer: "Not necessarily. A lower score often just points to areas needing more communication or patience — many strong relationships have \"challenging\" numerology on paper."
  },
  {
    question: "What's the difference between a soulmate and a twin flame?",
    answer: "A soulmate offers comfort, understanding, and support; a twin flame connection is typically described as more intense and growth-forcing, often surfacing personal issues that need healing."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/${SLUG}/#article`,
      "headline": "Soulmate Calculator: Find Your Soulmate Connection by Name and Birth Date",
      "description": "Try our free soulmate calculator to reveal your soul connection using name numerology, birth dates, and astrology. Instant, accurate, no sign-up needed.",
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

export default function SoulmateCalculatorPage() {
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
            <span>Compatibility & Destiny Reading</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Soulmate Calculator: Find Your Soulmate Connection by Name and Birth Date
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Wondering if the person you can't stop thinking about is actually your soulmate? A <strong>soulmate calculator</strong> uses your name and birth date to generate a compatibility score rooted in numerology and astrology, giving you an instant, symbolic snapshot of how your energies align — covering emotional connection, communication style, and long-term potential. It won't replace real conversation, but it's a fun, insightful starting point for exploring the bond.
          </p>
        </header>

        {/* Interactive Calculator Component Slot */}
        <section className="w-full">
          <GenericCalculatorComponent slug="soulmate-calculator" />
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
              <span>A <strong>soulmate calculator</strong> blends name numerology, birth-date compatibility, and astrological synastry to estimate the strength of a soul connection between two people.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Results are symbolic guidance, not scientific proof — real soulmate bonds still require communication, trust, and effort.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>The most accurate readings combine <strong>full birth names</strong> and <strong>complete dates of birth</strong>, not just first names.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Look for four score components: emotional alignment, communication flow, life-path compatibility, and karmic/destiny resonance.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>A soulmate isn't always your romantic partner — the connection can appear as a friend, family member, or mentor too.</span>
            </li>
          </ul>
        </section>

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Soulmate Calculator, Exactly?
            </h2>
            <p>
              A soulmate calculator is an online tool that estimates the depth of a spiritual and emotional connection between two people. Instead of measuring physical attraction, it looks at <strong>name numerology</strong> (the vibrational value of each letter in your names), <strong>life path numbers</strong> (derived from your birth dates), and sometimes <strong>zodiac sign compatibility</strong> to produce a percentage score and a written interpretation.
            </p>
            <p>
              Unlike a basic "love percentage" quiz, a well-built soulmate calculator typically evaluates several categories at once:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Soul connection score</strong> – the overall depth of the bond</li>
              <li><strong>Destiny alignment</strong> – whether your life paths appear to move in the same direction</li>
              <li><strong>Emotional resonance</strong> – how naturally you understand each other's feelings</li>
              <li><strong>Karmic or past-life indicators</strong> – recurring number or sign patterns some traditions associate with repeated soul contracts</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How the Calculation Works
            </h2>
            <p>Most soulmate calculators combine two or three systems:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Name numerology.</strong> Each letter in both full names is converted to a number (A=1, B=2, and so on, reduced using the Pythagorean method). The totals are compared to see how compatible the vibrational patterns are.
              </li>
              <li>
                <strong>Life path numbers.</strong> Your birth month, day, and year are each reduced to a single digit or master number (11, 22, 33), then compared between the two people. Close or complementary life path numbers often score higher.
              </li>
              <li>
                <strong>Astrological synastry (optional).</strong> Some tools layer in sun-sign or element compatibility (fire, earth, air, water) for an extra dimension.
              </li>
            </ol>
            <p>
              The output is usually a percentage plus a short narrative explaining what the number means for communication, growth, and emotional ease.
            </p>
          </section>

          {/* Section 3 - Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Soulmate Calculator vs. Love Calculator vs. Life Path Calculator
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Tool</th>
                    <th className="p-3 border-r-2 border-black">Main Input</th>
                    <th className="p-3 border-r-2 border-black">What It Measures</th>
                    <th className="p-3">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold">Soulmate Calculator</td>
                    <td className="p-3 border-r-2 border-black">Full names + birth dates</td>
                    <td className="p-3 border-r-2 border-black">Depth of spiritual/emotional bond, destiny alignment</td>
                    <td className="p-3">Anyone asking "is this person my soulmate?"</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold">Love Calculator</td>
                    <td className="p-3 border-r-2 border-black">First names (sometimes birth dates)</td>
                    <td className="p-3 border-r-2 border-black">General romantic compatibility percentage</td>
                    <td className="p-3">Quick fun with a crush or partner</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold">Life Path Calculator</td>
                    <td className="p-3 border-r-2 border-black">Birth date only (one person)</td>
                    <td className="p-3 border-r-2 border-black">Individual life purpose and personality traits</td>
                    <td className="p-3">Self-understanding, not compatibility</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold">Destiny Number Calculator</td>
                    <td className="p-3 border-r-2 border-black">Full birth name (one person)</td>
                    <td className="p-3 border-r-2 border-black">Individual talents and life direction</td>
                    <td className="p-3">Career and personal growth insight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Step-by-Step: How to Use a Soulmate Calculator
            </h2>
            <ol className="list-decimal pl-6 space-y-3 font-sans">
              <li>
                <strong>Enter your full birth name</strong> — using your legal or birth-certificate name gives more accurate numerology results than a nickname.
              </li>
              <li>
                <strong>Enter your date of birth</strong>, followed by your potential soulmate's name and birth date.
              </li>
              <li>
                <strong>Review your soul connection score</strong>, usually shown as a percentage from 0–100%.
              </li>
              <li>
                <strong>Read the breakdown</strong>, which typically covers communication, emotional flow, and long-term potential separately from the overall score.
              </li>
              <li>
                <strong>Reflect, don't rely.</strong> Use the result as a conversation starter or journaling prompt, not a final verdict.
              </li>
            </ol>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What a High vs. Low Soulmate Score Actually Means
            </h2>
            <p>
              <strong>High score (75–100%):</strong> Suggests natural rhythm, emotional ease, and shared values on paper. This often points to a connection that feels effortless — but effortless doesn't mean conflict-free. Even a 95% match still needs communication.
            </p>
            <p>
              <strong>Mid-range score (40–74%):</strong> Indicates a connection with real potential but some friction points, often around communication style or pacing. Numerologically, this usually means complementary rather than identical energies — which some traditions actually consider more growth-oriented than a "perfect" match.
            </p>
            <p>
              <strong>Lower score (below 40%):</strong> Doesn't mean the relationship is doomed. It often signals a connection that requires more patience, clearer boundaries, and intentional effort. Many long, meaningful relationships start with numbers that look "mismatched" on paper.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes People Make
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Using nicknames instead of full birth names</strong>, which skews the name-numerology math.</li>
              <li><strong>Treating the score as a prediction</strong> rather than a reflective tool — numerology describes patterns, not guaranteed outcomes.</li>
              <li><strong>Ignoring the breakdown categories</strong> and only looking at the headline percentage.</li>
              <li><strong>Running the calculator for every new match</strong> instead of using it thoughtfully for people you're genuinely curious about.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Types of Soulmates a Calculator Can Reveal
            </h2>
            <p>Numerology traditions describe several soulmate archetypes beyond the romantic ideal:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Romantic soulmate</strong> — the partner-type connection most people search for</li>
              <li><strong>Karmic soulmate</strong> — an intense bond meant to teach a specific life lesson, often short-lived</li>
              <li><strong>Twin flame</strong> — a mirror-soul connection associated with major personal growth</li>
              <li><strong>Platonic soulmate</strong> — a best friend or family member with an unusually deep bond</li>
              <li><strong>Mentor soulmate</strong> — someone who appears at a pivotal moment to guide your path</li>
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

          {/* Section 9 - Try It Yourself with Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Try It Yourself
            </h2>
            <p className="text-base leading-relaxed font-sans">
              Curious what your score looks like? Explore our free <strong>Soulmate Calculator</strong> above, then dig deeper with our{" "}
              <a href="/life-path-calculator" className="font-bold text-black underline hover:bg-amber-300 transition-colors">
                life path number
              </a>{" "}
              calculator to understand your own core numerology first — self-awareness often makes compatibility results click into place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/life-path-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Explore Life Path Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/destiny-number-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Calculate Destiny Number</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/love/love-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Love Compatibility Percentage</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/chaldean-numerology-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Chaldean Name Numerology</span>
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
              <li>Cheiro, <em>Cheiro's Book of Numbers</em> (foundational text for Chaldean and name numerology)</li>
              <li>American Federation of Astrologers — general astrology reference standards</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
