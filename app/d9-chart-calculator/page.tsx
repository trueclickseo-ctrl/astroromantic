import React from "react";
import type { Metadata } from "next";
import { D9ChartComponent } from "@/components/calculators/d9-chart-component";
import { Sparkles, Heart, CheckCircle2, HelpCircle, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "d9-chart-calculator";

export const metadata: Metadata = {
  title: "D9 Chart Calculator | Free Navamsa Chart Online",
  description: "Generate your Vedic Navamsa (D9) chart from birth date, exact time & place. Explore Navamsa Lagna, planetary placements, Vargottama planets and marriage insights.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "D9 Chart Calculator | Free Navamsa Chart Online",
    description: "Generate your Vedic Navamsa (D9) chart from birth date, exact time & place. Explore Navamsa Lagna, planetary placements, Vargottama planets and marriage insights.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "D9 Chart Calculator | Free Navamsa Chart Online",
    description: "Generate your Vedic Navamsa (D9) chart from birth date, exact time & place. Explore Navamsa Lagna, planetary placements, Vargottama planets and marriage insights.",
  },
};

const faqs = [
  {
    question: "What is a D9 Navamsa Chart?",
    answer: "The Navamsa (D9) chart is the most vital divisional chart (Varga) in Vedic astrology. It divides each 30° zodiac sign into 9 equal parts of 3°20' each (corresponding to the 108 Nakshatra Padas). It acts as the micro-lens of your birth chart, revealing soul destiny, marriage compatibility, and mid-life planetary strength."
  },
  {
    question: "Why is the D9 chart considered the marriage chart?",
    answer: "In classical Jyotish (Brihat Parashara Hora Shastra), the 7th house of the D9 chart specifically governs married life, spouse nature, partnership harmony, and long-term domestic compatibility. While D1 shows attraction and initial meetings, D9 shows the enduring reality of marriage."
  },
  {
    question: "What does Vargottama mean?",
    answer: "A planet is Vargottama when it occupies the exact same zodiac sign in both your main birth chart (D1 Rashi) and your divisional Navamsa chart (D9). Vargottama planets possess immense inherent stability, confidence, and capacity to deliver fruitful results."
  },
  {
    question: "What is the difference between D1 and D9 charts?",
    answer: "The D1 Rashi chart represents the tree (outer physical life, personality, opportunities), while the D9 Navamsa chart represents the fruit (inner soul purpose, real strength, and outcomes after age 30)."
  },
  {
    question: "What is Karakamsa?",
    answer: "Karakamsa is the sign occupied by your Atmakaraka (the planet with the highest degree in your birth chart) inside your Navamsa (D9) chart. The 12th house from Karakamsa traditionally points toward your Ishta Devata and spiritual path."
  },
  {
    question: "Do I need my exact birth time for a D9 calculator?",
    answer: "Yes. Because each Navamsa segment lasts only 3°20' of arc (approximately 13 to 15 minutes of real clock time), an accurate birth time is essential for calculating the correct D9 Lagna and planetary house positions."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${SLUG}/#webpage`,
      "url": `${SITE_URL}/${SLUG}/`,
      "name": "D9 Chart Calculator | Free Navamsa Chart Online",
      "description": "Generate your Vedic Navamsa (D9) chart from birth date, exact time & place. Explore Navamsa Lagna, planetary placements, Vargottama planets and marriage insights."
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/${SLUG}/#app`,
      "name": "D9 Navamsa Chart Calculator",
      "operatingSystem": "All",
      "applicationCategory": "LifestyleApplication",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${SLUG}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Calculators", "item": `${SITE_URL}/calculators/` },
        { "@type": "ListItem", "position": 3, "name": "D9 Chart Calculator", "item": `${SITE_URL}/${SLUG}/` }
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

export default function D9ChartCalculatorPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        {/* HERO SECTION */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Vedic Divisional Chart • 9th Harmonic (D9)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            D9 Chart Calculator — Free Navamsa Chart Online
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Generate your Vedic <strong>Navamsa (D9) chart</strong> from your birth date, exact birth time, and birthplace. Explore Navamsa Lagna, planetary house placements, Vargottama planets, Karakamsa, and traditional marriage destiny insights.
          </p>
        </header>

        {/* INTERACTIVE D9 CALCULATOR COMPONENT */}
        <section className="w-full">
          <D9ChartComponent />
        </section>

        {/* KEY TAKEAWAYS BOX */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl font-bold font-mono text-black uppercase tracking-wide">
              Key Takeaways: Navamsa (D9) Chart
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-zinc-900 font-sans leading-relaxed pl-2">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>The Fruit of the Chart:</strong> If D1 Rashi represents the promise and tree, D9 Navamsa represents the actual fruit and mid-life manifestation.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Marriage &amp; Partnership:</strong> The 7th house in D9 reveals the true psychological and spiritual nature of your spouse.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Vargottama Planets:</strong> Planets placed in the same sign in D1 and D9 gain extraordinary power, resilience, and positive results.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Karakamsa:</strong> The placement of Atmakaraka (soul planet) in D9 points toward your spiritual growth and personal Ishta Devata.</span>
            </li>
          </ul>
        </section>

        {/* COMPREHENSIVE EDUCATIONAL GUIDE CONTENT */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Navamsa (D9) Chart in Vedic Astrology?
            </h2>
            <p>
              In authentic Vedic astrology (Jyotish), the birth chart or <strong>Rashi chart (D1)</strong> provides a broad overview of your physical life, body, and general opportunities. However, classical sages like Maharishi Parashara recognized that two people born minutes apart might share similar D1 Lagna signs while living completely different lives.
            </p>
            <p>
              To decode deeper soul purpose and planetary strength, Vedic astrology uses <strong>divisional charts (Shodasha Varga)</strong>. Among all 16 divisional charts, the <strong>Navamsa chart (D9)</strong> is universally recognized as the most important companion to the birth chart.
            </p>
            <p>
              Mathematically, the Navamsa chart divides each 30° zodiac sign into 9 equal arc divisions of <strong>3° 20'</strong> each. Because 12 zodiac signs multiplied by 9 divisions equals 108 segments, each Navamsa segment corresponds exactly to one <em>Pada</em> (quarter) of the 27 Nakshatras.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              D1 (Rashi Chart) vs. D9 (Navamsa Chart) Comparison
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">D1 Rashi Chart</th>
                    <th className="p-3">D9 Navamsa Chart</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Primary Focus</td>
                    <td className="p-3 border-r-2 border-black">Outer physical life, body, health, initial environment</td>
                    <td className="p-3">Inner soul potential, marriage, long-term fruit of deeds</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Life Stage Peak</td>
                    <td className="p-3 border-r-2 border-black">Birth to early adulthood (ages 0–30)</td>
                    <td className="p-3">Maturity and second half of life (after age 30 or after marriage)</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Analogy</td>
                    <td className="p-3 border-r-2 border-black">The tree trunk and branches</td>
                    <td className="p-3">The fruit and seed strength of the tree</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Marriage Evaluation</td>
                    <td className="p-3 border-r-2 border-black">First impression, physical attraction, meeting circumstances</td>
                    <td className="p-3">Spouse character, psychological compatibility, domestic longevity</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Planetary Confirmation</td>
                    <td className="p-3 border-r-2 border-black">Shows apparent planetary dignities</td>
                    <td className="p-3">Confirms whether an exalted planet is actually strong or weak</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Understanding Vargottama Planets
            </h2>
            <p>
              When a planet sits in the <strong>exact same zodiac sign in both D1 and D9</strong>, it is designated as <strong>Vargottama</strong>. In Sanskrit, <em>Varga</em> means division and <em>Uttama</em> means highest or supreme.
            </p>
            <p>
              Vargottama planets act with remarkable alignment between your conscious mind and underlying karma. Even if a Vargottama planet suffers minor afflictions in D1, its Navamsa confirmation grants it the stamina to overcome hurdles and deliver lasting rewards during its Vimshottari Dasha period.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How D9 Navamsa Is Used for Marriage & Spouse Predictions
            </h2>
            <p>
              In traditional marriage analysis (Kundli Milan & Synastry), astrologers never rely on the 7th house of D1 alone. The D9 chart is essential for verifying:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>D9 Lagna &amp; 7th House:</strong> Reveals the temperament, communication style, and core values of your life partner.</li>
              <li><strong>Venus in D9:</strong> Analyzed in male charts to understand marital happiness, affection, and partner bond.</li>
              <li><strong>Jupiter in D9:</strong> Analyzed in female charts to evaluate spouse guidance, wisdom, and domestic stability.</li>
              <li><strong>Malefic placements in D9 7th House:</strong> Saturn, Mars, Rahu, or Ketu in the D9 7th house point to specific areas requiring patience, maturity, and spiritual remedies.</li>
            </ul>
          </section>
        </article>

        {/* FAQs SECTION */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="flex items-center space-x-3 border-b-3 border-black pb-2">
            <HelpCircle className="w-7 h-7 text-black flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              Frequently Asked Questions (FAQ)
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

        {/* INTERNAL LINKS */}
        <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
          <h2 className="text-xl font-bold font-mono text-black uppercase">
            Explore Related Astrology Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <a href="/calculators/kundli-matching/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Kundli Matching / Gun Milan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/atmakaraka-darakaraka/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Atmakaraka &amp; Darakaraka Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/ishta-devata/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Ishta Devata Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/shubh-muhurat-today/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Shubh Muhurat Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/lagna/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Lagna / Ascendant Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/vimshottari-dasha/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Vimshottari Dasha Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
