import React from "react";
import type { Metadata } from "next";
import { VedicTransitComponent } from "@/components/calculators/vedic-transit-component";
import { Sparkles, Compass, CheckCircle2, HelpCircle, ArrowRight, ShieldCheck, BookOpen, Layers } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "vedic-transit-calculator";

export const metadata: Metadata = {
  title: "Vedic Transit Calculator | Planetary Transits & Gochar",
  description: "Use AstroRomantic's Vedic Transit Calculator to track planetary positions, Gochar, Nakshatra, retrogrades, house transits, Sade Sati and upcoming transits.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Vedic Transit Calculator | Planetary Transits & Gochar",
    description: "Use AstroRomantic's Vedic Transit Calculator to track planetary positions, Gochar, Nakshatra, retrogrades, house transits, Sade Sati and upcoming transits.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Transit Calculator | Planetary Transits & Gochar",
    description: "Use AstroRomantic's Vedic Transit Calculator to track planetary positions, Gochar, Nakshatra, retrogrades, house transits, Sade Sati and upcoming transits.",
  },
};

const faqs = [
  {
    question: "What is a Vedic transit calculator?",
    answer: "A Vedic transit calculator (Gochar calculator) determines the real-time or historical positions of planets in the sidereal zodiac. It allows you to analyze current planetary transits through zodiac signs, Nakshatras, houses, and overlay them on your natal birth chart to understand active life themes."
  },
  {
    question: "What does Gochar mean in Vedic astrology?",
    answer: "In Sanskrit, 'Gochar' (গোচর / गोचर) means 'the movement of planets through the zodiac'. While your birth chart (Janma Kundli) represents the fixed promise of your life, Gochar represents the ongoing planetary clock that triggers and activates those promises."
  },
  {
    question: "How are planetary transits calculated?",
    answer: "Planetary transits are calculated using astronomical ephemeris formulas converted into sidereal zodiac coordinates using the Lahiri (Chitrapaksha) Ayanamsa. Each planet's longitude, sign (Rashi), Nakshatra, Pada, and motion (direct or retrograde) are computed based on target date, time, and location."
  },
  {
    question: "What is the difference between a transit chart and a birth chart?",
    answer: "Your birth chart (Natal Kundli) is a permanent snapshot of the planets at your exact moment of birth. A transit chart shows where the planets are located in the sky today (or any chosen date). Mode 2 overlays today's transiting planets over your natal chart."
  },
  {
    question: "Why is Saturn transit (Shani Gochar) so important?",
    answer: "Saturn stays in each zodiac sign for approximately 2.5 years, making its transits long-lasting and impactful. Saturn transits test discipline, restructure work habits, and trigger major life phases such as Sade Sati (Saturn in 12th, 1st, or 2nd from natal Moon) and Ashtama Shani (8th from Moon)."
  },
  {
    question: "Why is Jupiter transit (Guru Gochar) considered lucky?",
    answer: "Jupiter is the natural benefic (Brihaspati) associated with wisdom, fortune, expansion, and divine grace. When transiting 1st, 2nd, 5th, 7th, 9th, or 11th houses from natal Lagna or Moon, Jupiter grants luck, marriage opportunities, children, and professional growth."
  },
  {
    question: "What is Sade Sati and how do I check it?",
    answer: "Sade Sati is a 7.5-year period during which Saturn transits the sign preceding your natal Moon, your natal Moon sign, and the sign following your natal Moon. In Mode 2, our Vedic Transit Calculator automatically evaluates your Sade Sati status and current phase."
  },
  {
    question: "What is the Jupiter-Saturn Double Transit?",
    answer: "In Vedic astrology, houses that receive combined aspects or transits from both Jupiter (expansion) and Saturn (structure) undergo major concrete manifestations (such as marriage, career changes, or childbirth). The calculator automatically detects active double-transit houses."
  },
  {
    question: "Why does birth time and location matter for transit over natal chart?",
    answer: "Exact birth time determines your Ascendant (Lagna) sign and house boundaries. Without accurate birth time, house transits (1st to 12th house) and Ashtakavarga points cannot be computed correctly."
  },
  {
    question: "What is Nakshatra transit?",
    answer: "Nakshatra transit tracks which of the 27 lunar mansions a planet is passing through. Because Nakshatra lords govern Vimshottari Dashas, Nakshatra transits provide fine-tuned predictions down to specific days and weeks."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${SLUG}/#webpage`,
      "url": `${SITE_URL}/${SLUG}/`,
      "name": "Vedic Transit Calculator | Planetary Transits & Gochar",
      "description": "Use AstroRomantic's Vedic Transit Calculator to track planetary positions, Gochar, Nakshatra, retrogrades, house transits, Sade Sati and upcoming transits."
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/${SLUG}/#app`,
      "name": "Vedic Transit Calculator & Gochar Analysis Engine",
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
        { "@type": "ListItem", "position": 3, "name": "Vedic Transit Calculator", "item": `${SITE_URL}/${SLUG}/` }
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

export default function VedicTransitCalculatorPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        {/* BREADCRUMB TRAIL */}
        <nav className="text-xs font-mono text-zinc-600 flex items-center space-x-2">
          <a href="/" className="hover:underline text-black">Home</a>
          <span>→</span>
          <a href="/calculators/" className="hover:underline text-black">Calculators</a>
          <span>→</span>
          <span className="font-bold text-black">Vedic Transit Calculator</span>
        </nav>

        {/* HERO SECTION */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Compass className="w-4 h-4 text-black" />
            <span>Vedic Gochar &amp; Planetary Transits Engine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Vedic Transit Calculator — Planetary Transits &amp; Gochar
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Track current planetary positions in the sidereal zodiac and see how today's transits activate your natal birth chart. Mode 1 displays the current sky; Mode 2 overlays transits over your birth chart for Sade Sati, house activations, and planetary aspects.
          </p>
        </header>

        {/* INTERACTIVE VEDIC TRANSIT CALCULATOR COMPONENT */}
        <section className="w-full">
          <VedicTransitComponent />
        </section>

        {/* KEY TAKEAWAYS BOX */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl font-bold font-mono text-black uppercase tracking-wide">
              Key Takeaways: Vedic Gochar &amp; Planetary Transits
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-zinc-900 font-sans leading-relaxed pl-2">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>The Planetary Clock:</strong> While D1 Rashi represents life promise, Gochar transits act as the real-time trigger for events.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Sidereal Precision:</strong> Calculates exact longitudes, Nakshatras, Padas, and daily speed using Lahiri Ayanamsa.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Jupiter &amp; Saturn Transits:</strong> Tracks major multi-year transits, Sade Sati phases, Ashtama Shani, and Jupiter-Saturn double transit activations.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>100% Private In-Browser:</strong> Birth information is calculated locally in your browser and never transmitted to external servers.</span>
            </li>
          </ul>
        </section>

        {/* EDUCATIONAL GUIDE CONTENT */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Is a Vedic Transit Calculator (Gochar)?
            </h2>
            <p>
              In authentic Vedic astrology (Jyotish), <strong>Gochar (গোচর / गोचर)</strong> refers to the continuous astronomical movement of planets across the 12 sidereal zodiac signs and 27 Nakshatras.
            </p>
            <p>
              While your natal birth chart (Janma Kundli) remains fixed throughout your lifetime, the cosmic clock is always ticking. As fast-moving celestial bodies like the Moon, Sun, Mercury, and Venus, and slow-moving giants like Jupiter, Saturn, Rahu, and Ketu move across the sky, they activate specific houses and planets in your birth chart.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Transit Chart vs. Natal Chart Comparison
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                    <th className="p-3 border-r-2 border-black">Feature</th>
                    <th className="p-3 border-r-2 border-black">Natal Birth Chart (D1)</th>
                    <th className="p-3">Gochar Transit Chart</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Nature</td>
                    <td className="p-3 border-r-2 border-black">Fixed, static cosmic blueprint at birth</td>
                    <td className="p-3">Dynamic, live planetary movements today</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Role</td>
                    <td className="p-3 border-r-2 border-black">Defines lifelong potential, character, and destiny</td>
                    <td className="p-3">Triggers timing of specific events and active life themes</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3 border-r-2 border-black font-bold font-mono">Key Speed Drivers</td>
                    <td className="p-3 border-r-2 border-black">Determined by birth minute and location</td>
                    <td className="p-3">Changes constantly (Moon shifts sign every 2.5 days; Saturn every 2.5 years)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              How Major Planets Influence Your Life During Transit
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Saturn (Shani):</strong> The taskmaster planet. Saturn transits bring discipline, responsibility, and structural changes. Causes Sade Sati (when transiting 12th, 1st, or 2nd from natal Moon).</li>
              <li><strong>Jupiter (Guru):</strong> The divine protector. Jupiter transits bring expansion, wisdom, financial opportunities, and spiritual guidance.</li>
              <li><strong>Rahu &amp; Ketu:</strong> The shadow nodes. Rahu creates desire and rapid innovation; Ketu induces spiritual detachment and career shifts.</li>
              <li><strong>Mars, Sun, Mercury &amp; Venus:</strong> Fast-moving transits influencing short-term energy, communication, relationships, and monthly momentum.</li>
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
            Explore Related Vedic Astrology Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <a href="/d9-chart-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>D9 Navamsa Chart Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/shubh-muhurat-today/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Shubh Muhurat Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/birth-panchang/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Daily Panchang Tool</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/sade-sati/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Sade Sati Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/vimshottari-dasha/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Vimshottari Dasha Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/lagna/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Lagna / Ascendant Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
