import React from "react";
import type { Metadata } from "next";
import { ASTROLOGY_GUIDES } from "@/lib/astrology-guides-config";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, Compass, Sun, FileText, ArrowRight, CheckCircle2, HelpCircle, BookOpen, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://astroromantic.com";

export const metadata: Metadata = {
  title: "All Astrology Guides – Vedic, Western & Reports | AstroRomantic",
  description: "Browse every astrology guide on AstroRomantic: Vedic astrology, Western astrology, and detailed report guides — all in one place.",
  alternates: { canonical: `${SITE_URL}/astrology-guides/` },
  openGraph: {
    title: "All Astrology Guides – Vedic, Western & Reports | AstroRomantic",
    description: "Browse every astrology guide on AstroRomantic: Vedic astrology, Western astrology, and detailed report guides — all in one place.",
    url: `${SITE_URL}/astrology-guides/`,
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Astrology Guides – Vedic, Western & Reports | AstroRomantic",
    description: "Browse every astrology guide on AstroRomantic: Vedic astrology, Western astrology, and detailed report guides — all in one place.",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "Should I start with Vedic or Western astrology?",
    answer: "Neither is more \"correct\" — they're two distinct traditions with different zodiacs and methods; many people are naturally drawn to whichever framework their culture or a specific report has already introduced them to."
  },
  {
    question: "Do I need to read every guide in order?",
    answer: "No — each guide is written to stand on its own, though the Vedic and Western sections build most naturally from Zodiac Signs through Planets, Houses, and finally the more specialized topics."
  },
  {
    question: "What's the difference between the \"Vedic Astrology\" section and \"Report Guides\"?",
    answer: "The Vedic and Western sections explain the underlying concepts and systems, while Report Guides explain the specific, personalized results generated from your own birth details."
  },
  {
    question: "I don't know my exact birth time — which guides can I still use?",
    answer: "Sun sign and Moolank/Bhagyank-based content (Western Zodiac Signs, Vedic Numerology) only need your birth date, while anything involving houses, Ascendant, or Dasha timing requires an exact birth time for accuracy."
  },
  {
    question: "Where should I start if I just received my Kundli report?",
    answer: "Start with Life Insights, since it's built as the foundational overview every other specialized report (Dasha, doshas, yogas) assumes you've already read."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/astrology-guides/#webpage`,
      "name": "All Astrology Guides: Vedic, Western & Report Guides",
      "description": "Browse every astrology guide on AstroRomantic: Vedic astrology, Western astrology, and detailed report guides — all in one place.",
      "url": `${SITE_URL}/astrology-guides/`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": ASTROLOGY_GUIDES.length,
        "itemListElement": ASTROLOGY_GUIDES.map((guide, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": guide.title,
          "url": `${SITE_URL}${guide.slug.endsWith('/') ? guide.slug : guide.slug + '/'}`
        }))
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/astrology-guides/#faq`,
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

export default function AllAstrologyGuidesPage() {
  const vedicGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "vedic");
  const westernGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "western");
  const reportGuides = ASTROLOGY_GUIDES.filter((g) => g.category === "reports");

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
          <span className="font-bold text-black">Explore Astrology Hub</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Master Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            All Astrology Guides: Vedic, Western & Report Guides
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            Welcome to the complete library of astrology guides on AstroRomantic. Whether you're brand new to astrology or trying to make sense of a specific report you just generated, this page organizes everything in one place — grouped the same way you'll find it in the navigation menu: <strong>Vedic Astrology</strong>, <strong>Western Astrology</strong>, and <strong>Report Guides</strong>.
          </p>
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
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>This hub organizes all astrology content into <strong>three sections</strong>: Vedic Astrology, Western Astrology, and Report Guides — matching how the site's navigation is structured.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Vedic astrology</strong> uses the sidereal zodiac and centers on your Moon sign (Rashi), while <strong>Western astrology</strong> uses the tropical zodiac and centers on your Sun sign — start with whichever tradition matches what you're most curious about.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Report Guides</strong> explain the specific, personalized reports generated from your birth chart — start with Life Insights, since it's the foundational full-chart reading every other report builds on.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>New to astrology entirely? Start with <strong>Western Overview</strong> or <strong>Vedic Zodiac Signs</strong> — both are written for complete beginners.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span>Already have a Kundli or birth chart? Jump straight to the <strong>Report Guides</strong> section to understand what your results mean.</span>
            </li>
          </ul>
        </section>

        {/* Main Body Article */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-10 text-zinc-900 leading-relaxed font-sans">
          
          {/* Where to Start Section */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Where to Start
            </h2>
            <p>If you're not sure where to begin, here's a simple way to think about it:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Curious about your Kundli, Rashi, or a Vedic-specific term?</strong> Start in the Vedic Astrology section.</li>
              <li><strong>More familiar with sun signs, horoscope columns, and the "Big Three"?</strong> Start in the Western Astrology section.</li>
              <li><strong>Already generated a report and want to understand what it means?</strong> Go straight to Report Guides.</li>
            </ul>
          </section>

          {/* Section 1: Vedic Astrology Guides */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-b-3 border-black pb-2">
              <Compass className="w-7 h-7 text-black flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                Vedic Astrology Guides
              </h2>
            </div>
            <p>
              Vedic astrology (Jyotish) reads your birth chart through the sidereal zodiac, centers on your Moon sign rather than your Sun sign, and uses a distinct set of tools — Nakshatras, Dashas, and the Navagraha planets — not found in Western practice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vedicGuides.map((guide) => (
                <a
                  key={guide.id}
                  href={guide.slug.endsWith('/') ? guide.slug : `${guide.slug}/`}
                  className="group bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] hover:bg-amber-100 hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-black group-hover:text-black">
                      {guide.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">
                    {guide.shortDesc}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Section 2: Western Astrology Guides */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-b-3 border-black pb-2">
              <Sun className="w-7 h-7 text-black flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                Western Astrology Guides
              </h2>
            </div>
            <p>
              Western astrology reads your birth chart through the tropical zodiac, anchored to the seasons rather than the physical constellations, and centers on your Sun sign, Moon sign, and Rising sign together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {westernGuides.map((guide) => (
                <a
                  key={guide.id}
                  href={guide.slug.endsWith('/') ? guide.slug : `${guide.slug}/`}
                  className="group bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] hover:bg-amber-100 hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-black group-hover:text-black">
                      {guide.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">
                    {guide.shortDesc}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Section 3: Report Guides */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-b-3 border-black pb-2">
              <FileText className="w-7 h-7 text-black flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                Report Guides
              </h2>
            </div>
            <p>
              Once you've generated a personalized report from your birth details, these guides walk through exactly what each section means and how to read your results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reportGuides.map((guide) => (
                <a
                  key={guide.id}
                  href={guide.slug.endsWith('/') ? guide.slug : `${guide.slug}/`}
                  className="group bg-[#f4f3ef] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] hover:bg-amber-100 hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-black group-hover:text-black">
                      {guide.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-zinc-700 font-sans leading-relaxed">
                    {guide.shortDesc}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Section 4: How These Guides Fit Together */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How These Guides Fit Together
            </h2>
            <p>A few natural reading paths, depending on what you're trying to understand:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>New to astrology entirely</strong> → <a href="/western/overview/" className="font-bold underline text-black hover:bg-amber-300">Western Overview</a> → <a href="/western/zodiac-signs/" className="font-bold underline text-black hover:bg-amber-300">Western Zodiac Signs</a> → <a href="/western/planets/" className="font-bold underline text-black hover:bg-amber-300">Western Planets</a> → <a href="/western/houses/" className="font-bold underline text-black hover:bg-amber-300">Western Houses</a> → <a href="/western/aspects/" className="font-bold underline text-black hover:bg-amber-300">Western Aspects</a></li>
              <li><strong>New to Vedic astrology specifically</strong> → <a href="/vedic/zodiac-signs/" className="font-bold underline text-black hover:bg-amber-300">Vedic Zodiac Signs</a> → <a href="/vedic/planets/" className="font-bold underline text-black hover:bg-amber-300">Vedic Planets</a> → <a href="/vedic/houses/" className="font-bold underline text-black hover:bg-amber-300">Vedic Houses</a> → <a href="/reports/life-insights/" className="font-bold underline text-black hover:bg-amber-300">Life Insights report</a></li>
              <li><strong>Trying to understand a marriage-matching result</strong> → <a href="/reports/love-marriage/" className="font-bold underline text-black hover:bg-amber-300">Love & Marriage</a> → <a href="/reports/mangal-dosha/" className="font-bold underline text-black hover:bg-amber-300">Mangal Dosha</a> → <a href="/vedic/zodiac-signs/" className="font-bold underline text-black hover:bg-amber-300">Vedic Zodiac Signs (for Moon sign context)</a></li>
              <li><strong>Curious about a specific dosha or yoga in your report</strong> → jump directly to that report's guide, then read <a href="/vedic/houses/" className="font-bold underline text-black hover:bg-amber-300">Vedic Houses</a> and <a href="/vedic/planets/" className="font-bold underline text-black hover:bg-amber-300">Vedic Planets</a> for background if any term feels unfamiliar.</li>
            </ol>
          </section>

          {/* Section 5: FAQs */}
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

          {/* Related Tools & Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Astrology Calculators & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/calculators/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>All 60+ Astrology & Numerology Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/horoscope/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Daily Horoscope Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/glossary/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Astrology & Numerology Glossary</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/life-insights/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Life Insights Kundli Report</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

        </article>

        {/* Global Nav Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
