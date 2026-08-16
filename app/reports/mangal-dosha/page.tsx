import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/mangal-dosha";

export const metadata: Metadata = {
  title: "Mangal Dosha Report – Manglik Status & Remedies Explained",
  description: "Understand your Mangal Dosha report: what makes you Manglik, severity levels, cancellation rules, and traditional remedies.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Mangal Dosha Report – Manglik Status & Remedies Explained",
    description: "Understand your Mangal Dosha report: what makes you Manglik, severity levels, cancellation rules, and traditional remedies.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangal Dosha Report – Manglik Status & Remedies Explained",
    description: "Understand your Mangal Dosha report: what makes you Manglik, severity levels, cancellation rules, and traditional remedies.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Mangal Dosha Report: Understanding Manglik Status and Remedies",
      "description": "Understand your Mangal Dosha report: what makes you Manglik, severity levels, cancellation rules, and traditional remedies.",
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
            Mangal Dosha Report: Understanding Manglik Status and Remedies
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Mangal Dosha report** checks whether Mars — the planet of energy, courage, and assertiveness — falls in one of six specific houses in your birth chart, a placement traditionally associated with a more intense, sometimes fiery temperament that can affect relationships and marriage timing. Being "Manglik" isn't a mark of bad fortune; it simply means Mars holds a prominent, strongly felt position in your chart.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Mangal Dosha**, also called Kuja Dosha, forms when **Mars** occupies the 1st, 2nd, 4th, 7th, 8th, or 12th house of your birth chart.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Being "**Manglik**" isn't a curse — it reflects a strong Mars placement that can intensify energy, drive, and assertiveness, particularly around anger and ambition.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Severity varies: **mild** (Mars in a neutral or favorable sign), **moderate** (Mars in a dosha house with some balancing influence), and **severe** (Mars afflicted in a critical house like the 8th).</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Certain planetary combinations can **cancel or reduce** Mangal Dosha entirely — a raw house placement alone doesn't guarantee a strong effect.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Mangal Dosha is checked **separately from the 36-point Guna Milan score** in a full marriage compatibility reading.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is Mangal Dosha?
            </h2>
            <p>**Mangal Dosha** (also called **Kuja Dosha** or **Bhauma Dosha**) forms when Mars is positioned in the **1st, 2nd, 4th, 7th, 8th, or 12th house** of a person's birth chart. In Vedic astrology, Mars is considered an aggressive, energetic planet, and its placement in these specific houses is believed to intensify emotional expression, particularly around anger, impatience, and conflict in close relationships.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Being Manglik: What It Actually Means
            </h2>
            <p>A common misconception treats Manglik status as a curse or a serious flaw — it isn't. It simply indicates that Mars holds a strong, prominent position in the chart, which can shape personality in specific ways: heightened drive, assertiveness, and occasionally impulsiveness, especially in how a person handles anger and ambition. Many astrologers frame Manglik energy as a strength that needs conscious direction rather than a liability to be feared.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Severity Levels of Mangal Dosha
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Severity</th><th className="p-3 border-r-2 border-black">Typical Cause</th><th className="p-3 ">General Effects</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Mild**</td><td className="p-3 border-r-2 border-black">Mars in a neutral house or favorable sign (e.g., Aries, Scorpio)</td><td className="p-3 ">Occasional impulsiveness or quick temper; not usually disruptive</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Moderate**</td><td className="p-3 border-r-2 border-black">Mars in a dosha house but supported by positive planetary influences</td><td className="p-3 ">More noticeable restlessness or frustration; manageable with remedies</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Severe**</td><td className="p-3 border-r-2 border-black">Mars in a critical house (especially the 8th) with malefic influence</td><td className="p-3 ">More pronounced relationship friction; typically recommended to consult an astrologer for detailed guidance</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Which Houses Cause Mangal Dosha and Why
            </h2>
            <p>Mars placed in any of these six houses is considered dosha-forming, though the reasoning behind each varies slightly:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**1st house** — affects overall temperament and self-expression</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**2nd house** — impacts family harmony and speech</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**4th house** — affects domestic peace and emotional stability</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**7th house** — directly affects marriage and partnerships, often considered the most significant for Mangal Dosha specifically</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**8th house** — associated with the most intense effects, touching longevity and transformation themes</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**12th house** — affects intimacy and subconscious patterns within relationships</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Mangal Dosha Cancellation (Bhang)
            </h2>
            <p>Not every Mars placement in these houses produces a strong effect. Vedic astrology recognizes several **cancellation conditions**, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Both partners in a marriage sharing similar Mangal Dosha (traditionally believed to neutralize the mismatch)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mars placed in its own sign (Aries or Scorpio) or in a friendly sign</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Benefic planetary aspects on the Mars placement that soften its intensity</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mars positioned favorably relative to specific house lords</li>
            </ul>
            <p>This is why a full report checks the entire chart context rather than flagging Mangal Dosha from house placement alone — an astrologer would never diagnose it as automatically severe without checking these balancing factors.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Traditional Remedies for Mangal Dosha
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Chanting the Mangal mantra** regularly, especially on Tuesdays (Mars's dedicated day)</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Visiting a Hanuman temple**, since Hanuman is traditionally associated with balancing Mars's fiery energy</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Wearing red coral (Moonga)** — traditionally recommended only after consulting a qualified astrologer</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Regular meditation** to channel Mars's intensity constructively rather than reactively</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Fasting on Tuesdays** as a disciplined practice tied to Mars's planetary day</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Mangal Dosha in Marriage Matching
            </h2>
            <p>Mangal Dosha is checked as **its own separate factor**, alongside — but distinct from — the 36-point Ashtakoot Guna Milan score used in marriage compatibility readings. A couple can score well on Guna Milan while still needing to address a Mangal Dosha mismatch, which is why a complete Love & Marriage report evaluates both layers independently.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Mangal Dosha Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating Manglik status as an automatic red flag** without checking for cancellation conditions present in the chart.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming all six dosha houses carry equal weight** — the 7th and 8th houses are generally considered more significant than the others.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring Mars's sign placement**, which strongly affects whether the dosha manifests mildly or severely.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Confusing Mangal Dosha with a permanent personality flaw** rather than a specific planetary intensity that can be understood and worked with.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is Mangal Dosha and how is it formed?
            </h2>
            <p>Mangal Dosha (Kuja Dosha) forms when Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of a birth chart, traditionally associated with heightened intensity around anger, ambition, and relationship dynamics.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is being Manglik a bad thing?
            </h2>
            <p>No — being Manglik simply reflects a strong Mars placement in the chart; it's not a curse, though it's traditionally considered relevant to check and understand, especially for marriage compatibility.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can Mangal Dosha be cancelled?
            </h2>
            <p>Yes — specific conditions such as Mars being in its own sign, receiving benefic aspects, or both partners sharing similar Mangal Dosha can reduce or cancel its traditionally attributed effects.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Which house placement of Mars is considered most significant for Mangal Dosha?
            </h2>
            <p>The 7th house is generally considered the most significant, since it directly governs marriage and partnerships, though the 8th house is often considered the most intense overall.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do both partners need to be Manglik for a compatible marriage?
            </h2>
            <p>Not necessarily both, but traditional practice often recommends that if one partner is strongly Manglik, checking whether the other partner shares a similar Mars placement can help balance the match.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Mangal Dosha included in the 36-point Guna Milan score?
            </h2>
            <p>No — Mangal Dosha is evaluated as a separate factor from the Ashtakoot Guna Milan score, though both are typically reviewed together in a complete marriage compatibility report.</p>
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
              <li>Classical Vedic astrology framework for Kuja Dosha (Mangal Dosha) formation and cancellation conditions</li>
              <li>Standard severity classification used across contemporary Vedic astrology practice</li>
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
