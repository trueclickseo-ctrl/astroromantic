import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/love-marriage";

export const metadata: Metadata = {
  title: "Love & Marriage Report – Kundli Matching Explained",
  description: "Understand your Love & Marriage report: Guna Milan scoring, Mangal Dosha checks, and what your kundli matching results really mean.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Love & Marriage Report – Kundli Matching Explained",
    description: "Understand your Love & Marriage report: Guna Milan scoring, Mangal Dosha checks, and what your kundli matching results really mean.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love & Marriage Report – Kundli Matching Explained",
    description: "Understand your Love & Marriage report: Guna Milan scoring, Mangal Dosha checks, and what your kundli matching results really mean.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Love & Marriage Report: Understanding Your Compatibility Reading",
      "description": "Understand your Love & Marriage report: Guna Milan scoring, Mangal Dosha checks, and what your kundli matching results really mean.",
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
          <span className="font-bold text-black">Love & Marriage Report: Understanding Your Compatibility Reading</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Love & Marriage Report: Understanding Your Compatibility Reading
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Love & Marriage report** is built on **Guna Milan**, also called **Ashtakoot Milan** — the traditional Vedic astrology method for evaluating compatibility between two people before marriage. It compares eight distinct compatibility factors (kootas) between partners' birth charts, producing a score out of 36 points, then layers in additional dosha checks like Mangal Dosha for a fuller picture of marital harmony.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A **Love & Marriage report** evaluates romantic and marital compatibility using **Guna Milan (Ashtakoot matching)** — an eight-factor, 36-point Vedic compatibility system.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The score is calculated almost entirely from each partner's **Moon sign and Nakshatra (birth star)**, not their Sun sign or Lagna.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>A score of **18 or above out of 36** is traditionally considered acceptable for marriage, though the specific kootas that scored low matter as much as the total.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Nadi Dosha** (0 points in the Nadi koota) is considered the most serious individual defect, even outweighing an otherwise high total score.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>The report also checks **Mangal Dosha (Kuja Dosha)** separately, since Mars placement issues aren't captured within the standard Ashtakoot score.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is Guna Milan (Ashtakoot Matching)?
            </h2>
            <p>"Ashtakoot" breaks down into *ashta* (eight) and *koota* (category), reflecting the eight distinct dimensions of compatibility this system evaluates. Unlike a general love calculator based on names, Guna Milan is calculated from each partner's **Moon sign (Rashi) and Nakshatra (birth star)** — because in Vedic astrology, the Moon governs the mind and emotions, making it the most relevant placement for assessing how two people will actually get along day to day.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              The 8 Kootas and Their Points
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Koota</th><th className="p-3 border-r-2 border-black">Max Points</th><th className="p-3 ">What It Measures</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Varna</td><td className="p-3 border-r-2 border-black">1</td><td className="p-3 ">Spiritual compatibility, working temperament</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Vashya</td><td className="p-3 border-r-2 border-black">2</td><td className="p-3 ">Mutual attraction and control dynamic</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Tara</td><td className="p-3 border-r-2 border-black">3</td><td className="p-3 ">General wellbeing and destiny alignment</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Yoni</td><td className="p-3 border-r-2 border-black">4</td><td className="p-3 ">Physical and sexual compatibility</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Graha Maitri</td><td className="p-3 border-r-2 border-black">5</td><td className="p-3 ">Mental compatibility and friendship</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Gana</td><td className="p-3 border-r-2 border-black">6</td><td className="p-3 ">Temperament and behavioral compatibility</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Bhakoot</td><td className="p-3 border-r-2 border-black">7</td><td className="p-3 ">Emotional and financial harmony</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Nadi</td><td className="p-3 border-r-2 border-black">8</td><td className="p-3 ">Health, genetic compatibility, progeny</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Total**</td><td className="p-3 border-r-2 border-black">**36**</td><td className="p-3 "></td></tr>
                </tbody>
              </table>
            </div>
            <p>Notice that the points increase with importance — Nadi carries the most weight (8 points) because it's considered the most consequential factor for long-term health and family compatibility, while Varna carries the least (1 point).</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Your Total Score Means
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Score Range</th><th className="p-3 ">General Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">32–36</td><td className="p-3 ">Excellent compatibility</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">24–31</td><td className="p-3 ">Very good compatibility</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">18–23</td><td className="p-3 ">Acceptable, traditional minimum for marriage</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">Below 18</td><td className="p-3 ">Generally considered insufficient without further review</td></tr>
                </tbody>
              </table>
            </div>
            <p>A score of **18 or above** is the traditional threshold, though most astrologers stress that the total number alone doesn't tell the whole story — which specific kootas scored low matters just as much as the total.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why the Total Score Isn't the Whole Picture
            </h2>
            <p>A combined score of 20 with a full 8-point Nadi match can indicate stronger real-world compatibility than a 24 that includes **Nadi Dosha** (0 points in the Nadi koota) — because Nadi Dosha is considered the most serious individual defect in the entire system, traditionally linked to health and progeny concerns regardless of how well the other seven kootas score.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Other Doshas Checked Alongside Guna Milan
            </h2>
            <p>Beyond the 36-point Ashtakoot score, a complete Love & Marriage report typically checks for these additional compatibility concerns:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Nadi Dosha** — same Nadi between partners; considered the most serious defect</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Bhakoot Dosha** — adverse Moon-sign combinations (6/8 or 2/12 positions), affecting emotional and financial harmony</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Mangal Dosha (Kuja Dosha)** — Mars placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of either partner's individual chart, checked separately from the Ashtakoot score</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How to Read Your Love & Marriage Report
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Start with the total Guna score** as a general baseline, not a final verdict.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Check which specific kootas scored low** — a low Nadi or Bhakoot score deserves more attention than a low Varna score.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Review the Mangal Dosha section separately** — this isn't part of the 36-point total but significantly affects marital compatibility if present in one or both charts.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Look at any cancellation conditions** — certain planetary combinations can cancel or reduce the effect of a dosha even when it's technically present.</li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2">
              <li>**Remember the human factor** — mutual understanding, communication, and shared values remain the foundation of a successful relationship regardless of the numerical score.</li>
            </ol>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Love & Marriage Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Fixating on the total score alone** without checking which individual kootas are weak.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating a below-18 score as an automatic red flag** rather than one input among many relationship factors.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring Mangal Dosha** because it isn't part of the 36-point Ashtakoot total.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming a high score guarantees a happy marriage** — Guna Milan measures astrological alignment, not day-to-day compatibility factors like communication style or shared goals.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is a good Guna Milan score for marriage?
            </h2>
            <p>A score of 18 or above out of 36 is traditionally considered acceptable, with scores above 24 generally seen as very good, though the specific kootas involved matter as much as the total.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Guna Milan based on names or birth details?
            </h2>
            <p>It's based on birth details specifically — each partner's Moon sign and Nakshatra — not names, which distinguishes it from a general name-based love calculator.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is Nadi Dosha and why is it considered so serious?
            </h2>
            <p>Nadi Dosha occurs when both partners share the same Nadi, scoring 0 out of 8 in that koota; it's traditionally linked to health and progeny concerns and is considered the most consequential defect in the entire matching system.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Mangal Dosha part of the 36-point Guna Milan score?
            </h2>
            <p>No — Mangal Dosha (Kuja Dosha) is checked as a separate factor based on Mars's placement in each partner's individual chart, alongside but distinct from the Ashtakoot score.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Can a low Guna Milan score be overridden?
            </h2>
            <p>Yes — astrologers look for specific planetary cancellation conditions that can reduce or neutralize an otherwise concerning dosha, and many also weigh the couple's broader charts, not the score in isolation.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Does a high Guna Milan score guarantee a successful marriage?
            </h2>
            <p>No — Guna Milan measures traditional astrological alignment, but real-world relationship success also depends on communication, values, and effort that a compatibility score can't measure.</p>
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
              <li>Traditional Ashtakoot Milan framework used across classical and contemporary Vedic matchmaking practice</li>
              <li>Standard 36-Guna scoring thresholds referenced across Vedic astrology matchmaking guides</li>
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
