import React from "react";
import type { Metadata } from "next";
import { ShubhMuhuratComponent } from "@/components/muhurat/shubh-muhurat-component";
import { Sparkles, Clock, Sun, CheckCircle2, HelpCircle, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "shubh-muhurat-today";

export const metadata: Metadata = {
  title: "Shubh Muhurat Today | Auspicious Timings, Choghadiya & Rahu Kaal",
  description: "Find today's Shubh Muhurat, Abhijit Muhurat, Brahma Muhurat, Day & Night Choghadiya and Rahu Kaal based on your exact city location.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Shubh Muhurat Today | Auspicious Timings, Choghadiya & Rahu Kaal",
    description: "Find today's Shubh Muhurat, Abhijit Muhurat, Brahma Muhurat, Day & Night Choghadiya and Rahu Kaal based on your exact city location.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Muhurat Today | Auspicious Timings, Choghadiya & Rahu Kaal",
    description: "Find today's Shubh Muhurat, Abhijit Muhurat, Brahma Muhurat, Day & Night Choghadiya and Rahu Kaal based on your exact city location.",
  },
};

const faqs = [
  {
    question: "What is Shubh Muhurat today?",
    answer: "Shubh Muhurat today refers to the auspicious time windows during the current day calculated from your city's local sunrise and sunset. Traditional Vedic astrology recognizes periods such as Abhijit Muhurat, Brahma Muhurat, Vijaya Muhurat, and auspicious Choghadiya slots (Amrit, Shubh, Labh) as ideal for starting new work."
  },
  {
    question: "What is Abhijit Muhurat today?",
    answer: "Abhijit Muhurat is the most powerful auspicious midday window in Vedic astrology, centered around astronomical solar noon. It typically lasts approximately 48 minutes and is considered favorable for starting new business, joining a job, or signing agreements (except on Wednesdays when it is traditionally avoided)."
  },
  {
    question: "What is Rahu Kaal today?",
    answer: "Rahu Kaal is an inauspicious period lasting roughly 1.5 hours every day (1/8th of daytime) ruled by Rahu. It is recommended to avoid commencing major new projects, buying vehicles, or executing agreements during Rahu Kaal."
  },
  {
    question: "What is Brahma Muhurat?",
    answer: "Brahma Muhurat is a sacred predawn period occurring approximately 1 hour 36 minutes to 48 minutes before local sunrise. It is ideal for meditation, yoga, prayer, study, and mental clarity."
  },
  {
    question: "What is Choghadiya?",
    answer: "Choghadiya is a traditional Vedic time-division system that divides daytime and nighttime into 8 equal slots each. There are 4 auspicious/favorable slots (Amrit, Shubh, Labh, Char) and 3 inauspicious slots (Rog, Kaal, Udveg)."
  },
  {
    question: "What is the best time to start new work today?",
    answer: "The best time to start new work today is generally during Abhijit Muhurat or during an Amrit, Shubh, or Labh Choghadiya slot, outside of Rahu Kaal."
  },
  {
    question: "Why does Shubh Muhurat vary by city?",
    answer: "Because Vedic Muhurats and Choghadiya timings are derived directly from the exact solar sunrise, sunset, and solar noon at your specific geographic latitude and longitude. Sunrise in Kolkata occurs at a different time than in Mumbai, London, or New York."
  },
  {
    question: "Is Shubh Muhurat the same for everyone?",
    answer: "While general Muhurat windows (like Abhijit Muhurat or Choghadiya) apply geographically to a city, personal high-stakes ceremonies (such as marriage or Griha Pravesh) also consider an individual's personal birth chart (Kundli) and current Dasha."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${SLUG}/#webpage`,
      "url": `${SITE_URL}/${SLUG}/`,
      "name": "Shubh Muhurat Today | Auspicious Timings, Choghadiya & Rahu Kaal",
      "description": "Find today's Shubh Muhurat, Abhijit Muhurat, Brahma Muhurat, Day & Night Choghadiya and Rahu Kaal based on your exact city location."
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${SLUG}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Astrology Tools", "item": `${SITE_URL}/calculators/` },
        { "@type": "ListItem", "position": 3, "name": "Shubh Muhurat Today", "item": `${SITE_URL}/${SLUG}/` }
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

export default function ShubhMuhuratTodayPage() {
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
            <span>Vedic Muhurat & Choghadiya Engine</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Shubh Muhurat Today — Auspicious Timings & Choghadiya
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Find today's <strong>Shubh Muhurat</strong>, Abhijit Muhurat, Brahma Muhurat, Day &amp; Night Choghadiya, Panchang, and Rahu Kaal calculated dynamically for your location.
          </p>
        </header>

        {/* INTERACTIVE MUHURAT TOOL */}
        <section className="w-full">
          <ShubhMuhuratComponent />
        </section>

        {/* KEY TAKEAWAYS BOX */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl font-bold font-mono text-black uppercase tracking-wide">
              Key Insights for Today's Muhurat
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-zinc-900 font-sans leading-relaxed pl-2">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Abhijit Muhurat:</strong> Centered on astronomical solar noon, highly auspicious for starting new business and signing deals.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Choghadiya:</strong> 4 auspicious slots (Amrit, Shubh, Labh, Char) and 3 inauspicious slots (Rog, Kaal, Udveg).</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-black">•</span>
              <span><strong>Rahu Kaal:</strong> Avoid starting major new financial or contractual commitments during Rahu Kaal.</span>
            </li>
          </ul>
        </section>

        {/* USE-CASE MUHURAT GUIDANCE */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              Activity-Based Muhurat Guidance
            </h2>
            <p className="text-sm text-zinc-700 font-sans mt-1">
              General traditional guidelines for selecting auspicious time windows based on activity type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <h3 className="text-base font-extrabold font-mono text-black border-b border-black pb-1">
                💼 Best Time for Business & New Work
              </h3>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Choose <strong>Abhijit Muhurat</strong> or an <strong>Amrit / Labh Choghadiya</strong> window. Ensure the time falls outside Rahu Kaal and Gulika Kaal.
              </p>
            </div>

            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <h3 className="text-base font-extrabold font-mono text-black border-b border-black pb-1">
                🚗 Best Time to Buy a Vehicle
              </h3>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Look for a <strong>Char or Labh Choghadiya</strong> slot under a favorable Nakshatra (such as Ashwini, Rohini, Punarvasu, or Swati).
              </p>
            </div>

            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <h3 className="text-base font-extrabold font-mono text-black border-b border-black pb-1">
                🏡 Best Time for Property Registration
              </h3>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Select a <strong>Shubh or Amrit Choghadiya</strong> period. Avoid Rikta Tithis (4th, 9th, 14th) and Vishti Karana (Bhadra).
              </p>
            </div>

            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <h3 className="text-base font-extrabold font-mono text-black border-b border-black pb-1">
                💍 Best Time for Engagement & Marriage
              </h3>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Requires evaluating Godhuli or Vijaya Muhurat alongside both partners' natal birth charts (D1 &amp; D9) for synastry ease.
              </p>
            </div>

            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <h3 className="text-base font-extrabold font-mono text-black border-b border-black pb-1">
                🕉️ Best Time for Puja & Spiritual Remedies
              </h3>
              <p className="text-xs text-zinc-800 leading-relaxed">
                <strong>Brahma Muhurat</strong> (predawn) or <strong>Godhuli Muhurat</strong> (sunset twilight) offer maximum spiritual focus and peace.
              </p>
            </div>

            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
              <h3 className="text-base font-extrabold font-mono text-black border-b border-black pb-1">
                📝 Best Time for Exams & Interviews
              </h3>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Select <strong>Vijaya Muhurat</strong> or a <strong>Labh Choghadiya</strong> window for confident communication and success.
              </p>
            </div>
          </div>
        </section>

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
            <a href="/d9-chart-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>D9 Chart Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/birth-panchang/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Daily Panchang Tool</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/moon-sign/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Moon Sign Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/nakshatra/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Nakshatra Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/assamese-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Assamese Calendar 2026–2027</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/bengali-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Bengali Calendar 2026–2027</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
