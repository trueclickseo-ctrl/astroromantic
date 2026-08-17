import React from "react";
import type { Metadata } from "next";
import { RegionalCalendarShell } from "@/components/calendars/regional-calendar-shell";
import { BanglaDateConverter } from "@/components/calendars/bangla-date-converter";
import { BANGLA_CIVIL_MONTHS, BANGLADESH_EVENTS_2026_2027, convertGregorianToBanglaCivil } from "@/lib/regional-calendars";
import { Sparkles, Calendar as CalendarIcon, CheckCircle2, HelpCircle, ArrowRight, Flag, RefreshCw, MapPin } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "bangla-calendar-2026-2027";

export const metadata: Metadata = {
  title: "Bangla Calendar 2026–2027 | Bangladesh Public Holidays & Date Converter",
  description: "Official Bangladesh Bangla Calendar 2026–2027 based on Bangla Academy civil rules. Includes Pohela Boishakh (Apr 14), national holidays, and interactive English to Bangla date converter.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Bangla Calendar 2026–2027 | Bangladesh Public Holidays & Date Converter",
    description: "Official Bangladesh Bangla Calendar 2026–2027 based on Bangla Academy civil rules. Includes Pohela Boishakh (Apr 14), national holidays, and interactive English to Bangla date converter.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangla Calendar 2026–2027 | Bangladesh Public Holidays & Date Converter",
    description: "Official Bangladesh Bangla Calendar 2026–2027 based on Bangla Academy civil rules. Includes Pohela Boishakh (Apr 14), national holidays, and interactive English to Bangla date converter.",
  },
};

const faqs = [
  {
    question: "What is the Bangladesh Bangla Calendar 2026–2027?",
    answer: "The Bangladesh Bangla calendar 2026–2027 is the official civil national calendar of Bangladesh. Revised by the Bangla Academy committee (headed by Dr. Muhammad Shahidullah), it standardizes month lengths and fixes Pohela Boishakh on April 14 every year."
  },
  {
    question: "What is the Bangla year in 2026?",
    answer: "The year 2026 corresponds to Bangla Year 1432 (until April 13, 2026) and Bangla Year 1433 (which begins on Pohela Boishakh / April 14, 2026)."
  },
  {
    question: "When is Pohela Boishakh in Bangladesh?",
    answer: "In Bangladesh, Pohela Boishakh (Bangla New Year) is ALWAYS celebrated on April 14 as per the official government civil calendar."
  },
  {
    question: "What are the month lengths in the Bangladesh civil Bangla calendar?",
    answer: "The first 5 months (Boishakh, Joishtho, Asharh, Shrabon, Bhadro) have 31 days each. The remaining 7 months (Ashwin, Kartik, Agrahayan, Poush, Magh, Falgun, Chaitra) have 30 days each (Chaitra has 31 days in leap years)."
  },
  {
    question: "How does the Bangladesh Bangla calendar differ from the Indian Bengali Panjika?",
    answer: "Bangladesh uses a fixed civil calendar where Pohela Boishakh is always April 14 and month days are set (31 or 30 days). The Indian Bengali Panjika is an astronomical lunisolar almanac where month lengths vary based on exact solar transits (Sankranti) and Poila Boishakh usually falls on April 15."
  },
  {
    question: "What are the major national public holidays in Bangladesh?",
    answer: "Major national public holidays in Bangladesh include Language Martyrs' Day / International Mother Language Day (Ekushey Feb 21), Independence & National Day (March 26), Pohela Boishakh (April 14), National Mourning Day (August 15), and Victory Day (December 16)."
  },
  {
    question: "How do I convert an English date to a Bangla date?",
    answer: "You can use the interactive English to Bangla Date Converter component on this page. Enter any Gregorian date to instantly get the corresponding Bangla day, month, and year."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${SLUG}/#webpage`,
      "url": `${SITE_URL}/${SLUG}/`,
      "name": "Bangla Calendar 2026–2027 | Bangladesh Public Holidays & Date Converter",
      "description": "Official Bangladesh Bangla Calendar 2026–2027 based on Bangla Academy civil rules. Includes Pohela Boishakh (Apr 14), national holidays, and interactive English to Bangla date converter."
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${SLUG}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Calendars", "item": `${SITE_URL}/calculators/` },
        { "@type": "ListItem", "position": 3, "name": "Bangla Calendar 2026–2027", "item": `${SITE_URL}/${SLUG}/` }
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

export default function BanglaCalendarPage() {
  const today = new Date();
  const banglaToday = convertGregorianToBanglaCivil(today);

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
          <a href="/calculators/" className="hover:underline text-black">Calendars</a>
          <span>→</span>
          <span className="font-bold text-black">Bangla Calendar 2026–2027</span>
        </nav>

        {/* COMPACT HERO SECTION */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Bangla Academy Civil System • Bangladesh Official Calendar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Bangla Calendar 2026–2027 (বাংলা ক্যালেন্ডার)
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Explore the official <strong>Bangladesh Bangla Calendar 2026–2027</strong> with Pohela Boishakh (April 14), national public holidays, Bangla months, and an interactive English ↔ Bangla date converter.
          </p>

          {/* COMPACT METADATA STRIP */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold">
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              System: Bangladesh Civil (Bangla Academy)
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              Years: 1433 – 1434
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              Today: {banglaToday.formattedBanglaDate}
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>
        </header>

        {/* HIGH-INFORMATION DENSITY CALENDAR COMPONENT */}
        <section className="w-full">
          <RegionalCalendarShell
            calendarType="bangla"
            systemTitle="Bangladesh Bangla Civil Calendar 2026–2027"
            systemSubtitle="Explore official Bangladesh Bangla dates, national public holidays, and observances."
            eraName="Bangla Academy System (১৪৩৩ - ১৪৩৪ বঙ্গাব্দ)"
            months={BANGLA_CIVIL_MONTHS}
            events={BANGLADESH_EVENTS_2026_2027}
            defaultYear={2026}
            locationNote="Calibrated according to the official Bangladesh government civil calendar (Bangla Academy rules). Pohela Boishakh is fixed on April 14."
          />
        </section>

        {/* INTERACTIVE BANGLA DATE CONVERTER COMPONENT */}
        <section className="w-full">
          <BanglaDateConverter />
        </section>

        {/* BANGLADESH PUBLIC HOLIDAYS SECTION */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black flex items-center space-x-2">
                <Flag className="w-6 h-6 text-rose-600" />
                <span>Bangladesh Official Public Holidays (2026–2027)</span>
              </h2>
              <p className="text-xs text-zinc-700 font-sans mt-1">
                Categorized by National Days, Religious Observances, and Cultural Holidays in Bangladesh.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
            {/* National Holidays */}
            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-5 shadow-[3px_3px_0px_#000000] space-y-3">
              <span className="text-xs font-mono font-bold bg-rose-200 border border-black rounded-full px-3 py-1 text-black">
                🇧🇩 National Days
              </span>
              <ul className="space-y-2 text-xs font-mono text-zinc-900">
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Feb 21 — Ekushey February</span>
                  <span className="text-[10px] text-zinc-600">Language Martyrs' Day</span>
                </li>
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Mar 26 — Independence Day</span>
                  <span className="text-[10px] text-zinc-600">National Day of Bangladesh</span>
                </li>
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Dec 16 — Victory Day</span>
                  <span className="text-[10px] text-zinc-600">Bijoy Dibosh 1971</span>
                </li>
              </ul>
            </div>

            {/* Cultural Holidays */}
            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-5 shadow-[3px_3px_0px_#000000] space-y-3">
              <span className="text-xs font-mono font-bold bg-amber-300 border border-black rounded-full px-3 py-1 text-black">
                🎉 Cultural Festivals
              </span>
              <ul className="space-y-2 text-xs font-mono text-zinc-900">
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Apr 14 — Pohela Boishakh</span>
                  <span className="text-[10px] text-zinc-600">Bangla New Year (Fixed Apr 14)</span>
                </li>
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Feb 14 — Pohela Falgun</span>
                  <span className="text-[10px] text-zinc-600">Spring Arrival Festival</span>
                </li>
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">May 1 — May Day</span>
                  <span className="text-[10px] text-zinc-600">International Workers' Day</span>
                </li>
              </ul>
            </div>

            {/* Religious Holidays */}
            <div className="bg-[#fefce8] border-2 border-black rounded-xl p-5 shadow-[3px_3px_0px_#000000] space-y-3">
              <span className="text-xs font-mono font-bold bg-emerald-200 border border-black rounded-full px-3 py-1 text-black">
                🕌 Religious Observances
              </span>
              <ul className="space-y-2 text-xs font-mono text-zinc-900">
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Eid-ul-Fitr &amp; Eid-ul-Adha</span>
                  <span className="text-[10px] text-zinc-600">Major Islamic holidays (moon sighting)</span>
                </li>
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Durga Puja (Bijoya Dashami)</span>
                  <span className="text-[10px] text-zinc-600">Public holiday in Bangladesh</span>
                </li>
                <li className="p-2 bg-white border border-black rounded-lg">
                  <span className="font-bold block text-black">Buddha Purnima &amp; Christmas</span>
                  <span className="text-[10px] text-zinc-600">National public holidays</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BANGLA CIVIL MONTHS DETAILED GRID */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              Bangladesh Bangla Civil Months (বাংলা ১২ মাস)
            </h2>
            <p className="text-sm text-zinc-700 font-sans mt-1">
              Under the Bangladesh Bangla Academy rules, month lengths are standardized into fixed 31-day and 30-day periods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
            {BANGLA_CIVIL_MONTHS.map((m, idx) => (
              <div key={m.id} className="bg-[#fefce8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#000000] space-y-2">
                <div className="flex items-center justify-between border-b-2 border-zinc-200 pb-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-600 block">Month {idx + 1}</span>
                    <h3 className="text-lg font-extrabold font-mono text-black">
                      {m.name} ({m.nativeName})
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-amber-300 border border-black rounded-full px-2.5 py-0.5 text-black">
                    {m.season}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-rose-700 block">
                  Gregorian: {m.gregorianPeriod}
                </span>
                <p className="text-xs text-zinc-800 leading-relaxed">
                  {m.characteristics}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT IS THE BANGLA CALENDAR EXPLANATORY SECTION */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-4 font-sans text-zinc-900 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
            What Is the Bangladesh Bangla Calendar?
          </h2>
          <p>
            The <strong>Bangla Calendar</strong> used in Bangladesh is the country's official civil national calendar. In 1966, a committee formed under the <strong>Bangla Academy</strong> and headed by eminent scholar <strong>Dr. Muhammad Shahidullah</strong> modified the traditional calendar rules to align with civil governance.
          </p>
          <p>
            Key rules of the Bangladesh Civil Bangla Calendar:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Fixed Pohela Boishakh:</strong> New Year Day (Pohela Boishakh) ALWAYS falls on <strong>April 14</strong> in Gregorian calendar.</li>
            <li><strong>First 5 Months:</strong> Boishakh, Joishtho, Asharh, Shrabon, and Bhadro are fixed at <strong>31 days each</strong>.</li>
            <li><strong>Remaining 7 Months:</strong> Ashwin, Kartik, Agrahayan, Poush, Magh, Falgun, and Chaitra are fixed at <strong>30 days each</strong> (Chaitra has 31 days during Gregorian leap years).</li>
          </ul>
        </article>

        {/* TODAY'S BANGLA DATE FEATURE CARD */}
        <section className="bg-amber-50 border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">Dynamic Today Snapshot</span>
              <h2 className="text-2xl font-extrabold font-mono text-black">
                Today's Bangla Civil Date
              </h2>
              <span className="text-3xl font-extrabold font-serif text-black block mt-1">
                {banglaToday.formattedBanglaDate}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 font-mono text-xs font-bold">
              <a href="/shubh-muhurat-today/" className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 border-2 border-black rounded-xl text-black shadow-[2px_2px_0px_#000000] transition-all inline-flex items-center space-x-1">
                <span>View Today's Shubh Muhurat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/calculators/birth-panchang/" className="px-4 py-2.5 bg-white hover:bg-amber-100 border-2 border-black rounded-xl text-black shadow-[2px_2px_0px_#000000] transition-all inline-flex items-center space-x-1">
                <span>View Today's Panchang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
            Explore Related Tools & Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <a href="/bengali-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Bengali Calendar 2026–2027</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/assamese-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Assamese Calendar 2026–2027</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/shubh-muhurat-today/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Shubh Muhurat Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/d9-chart-calculator/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>D9 Chart Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/birth-panchang/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Daily Panchang Tool</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/kundli-matching/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Kundli Matching</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
