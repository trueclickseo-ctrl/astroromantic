import React from "react";
import type { Metadata } from "next";
import { RegionalCalendarShell } from "@/components/calendars/regional-calendar-shell";
import { BENGALI_MONTHS, BENGALI_EVENTS_2026_2027, getBengaliPanjikaDate } from "@/lib/regional-calendars";
import { Sparkles, Calendar as CalendarIcon, CheckCircle2, HelpCircle, ArrowRight, Info, Moon, MapPin } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "bengali-calendar-2026-2027";

export const metadata: Metadata = {
  title: "Bengali Calendar 2026–2027 | Bengali Panjika & Festival Dates",
  description: "Explore the Bengali Calendar 2026–2027 with Bengali months, tithi, Durga Puja 2026 dates, Poila Boishakh, Kojagari Lakshmi Puja, Kali Puja and Panjika observances.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Bengali Calendar 2026–2027 | Bengali Panjika & Festival Dates",
    description: "Explore the Bengali Calendar 2026–2027 with Bengali months, tithi, Durga Puja 2026 dates, Poila Boishakh, Kojagari Lakshmi Puja, Kali Puja and Panjika observances.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengali Calendar 2026–2027 | Bengali Panjika & Festival Dates",
    description: "Explore the Bengali Calendar 2026–2027 with Bengali months, tithi, Durga Puja 2026 dates, Poila Boishakh, Kojagari Lakshmi Puja, Kali Puja and Panjika observances.",
  },
};

const faqs = [
  {
    question: "What is the Bengali calendar 2026–2027?",
    answer: "The Bengali calendar 2026–2027 is the traditional lunisolar regional calendar used across West Bengal, Tripura, and Indian Bengali communities. It covers Bangabda years 1433 and 1434, displaying Bengali months (Boishakh to Chaitra), Tithi, Ekadashi, and major Pujas."
  },
  {
    question: "What Bengali year (Bangabda) corresponds to 2026?",
    answer: "The year 2026 spans Bangabda 1433 (up to mid-April 2026) and Bangabda 1434 (beginning on Poila Boishakh / April 15, 2027)."
  },
  {
    question: "When is Poila Boishakh in 2026?",
    answer: "Poila Boishakh (Bengali New Year 1433) in the Indian Bengali Panjika calendar falls on April 15, 2026."
  },
  {
    question: "What are the 12 Bengali months?",
    answer: "The 12 Bengali months are Boishakh (বৈশাখ), Joishtho (জ্যৈষ্ঠ), Asharh (আষাঢ়), Shrabon (শ্রাবণ), Bhadro (ভাদ), Ashwin (আশ্বিন), Kartik (কার্তিক), Agrahayan (অগ্রহায়ণ), Poush (পৌষ), Magh (মাঘ), Falgun (ফাল্গুন), and Chaitra (চৈত্র)."
  },
  {
    question: "What is Bengali Panjika?",
    answer: "Bengali Panjika (পঞ্জিকা) is the traditional Hindu astronomical almanac that calculates auspicious timings, Tithi, Nakshatra, Yoga, Karana, Ekadashi dates, and ceremonial Puja schedules."
  },
  {
    question: "Why can Bengali festival dates differ by location?",
    answer: "Bengali festival dates depend on local solar sunrise/sunset and Tithi transition timings. Additionally, different Panjika traditions (such as Vishuddha Siddhanta vs Surya Siddhanta) may calculate exact Tithi boundaries with slight variations."
  },
  {
    question: "Is the Bengali calendar the same as the Bangladesh Bangla calendar?",
    answer: "No. The Indian Bengali calendar follows the traditional astronomical solar Panjika system where month lengths vary year to year. Bangladesh uses a revised civil calendar where month lengths and Pohela Boishakh (fixed on April 14) follow fixed civil rules."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${SLUG}/#webpage`,
      "url": `${SITE_URL}/${SLUG}/`,
      "name": "Bengali Calendar 2026–2027 | Bengali Panjika & Festival Dates",
      "description": "Explore the Bengali Calendar 2026–2027 with Bengali months, tithi, Durga Puja 2026 dates, Poila Boishakh, Kojagari Lakshmi Puja, Kali Puja and Panjika observances."
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${SLUG}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Calendars", "item": `${SITE_URL}/calculators/` },
        { "@type": "ListItem", "position": 3, "name": "Bengali Calendar 2026–2027", "item": `${SITE_URL}/${SLUG}/` }
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

export default function BengaliCalendarPage() {
  const today = new Date();
  const bengaliToday = getBengaliPanjikaDate(today);

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
          <span className="font-bold text-black">Bengali Calendar 2026–2027</span>
        </nav>

        {/* COMPACT HERO SECTION */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Bangabda 1433–1434 • West Bengal Indian Panjika</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Bengali Calendar 2026–2027
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Explore the <strong>Bengali Calendar 2026–2027</strong> with Bengali months (বৈশাখ, জ্যৈষ্ঠ, আশ্বিন), Tithi transitions, Durga Puja 2026 dates, Poila Boishakh, Kali Puja, Saraswati Puja, and Ekadashi schedules.
          </p>

          {/* COMPACT METADATA STRIP */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold">
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              System: Bangabda Solar Panjika
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              Years: 1433 – 1434
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              Today: {bengaliToday.formattedRegionalDate}
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>West Bengal / Kolkata Ref</span>
            </span>
          </div>
        </header>

        {/* HIGH-INFORMATION DENSITY CALENDAR COMPONENT */}
        <section className="w-full">
          <RegionalCalendarShell
            calendarType="bengali"
            systemTitle="Bengali Interactive Panjika Calendar 2026–2027"
            systemSubtitle="Navigate through monthly Bengali dates, tithis, and festival schedules."
            eraName="Bangabda 1433 – 1434 (বাংলা পঞ্জিকা)"
            months={BENGALI_MONTHS}
            events={BENGALI_EVENTS_2026_2027}
            defaultYear={2026}
            locationNote="Calendar timings reflect West Bengal Indian Panjika calculations (Kolkata solar reference). For Bangladesh civil dates, see the Bangla Calendar."
          />
        </section>

        {/* TITHI & PANJIKA INFORMATION SECTION */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center space-x-3">
            <Moon className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl font-bold font-mono text-black uppercase tracking-wide">
              Understanding Tithi &amp; Panjika in the Bengali Calendar
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-900 font-sans leading-relaxed">
            Unlike standard civil calendars, the Indian Bengali Panjika is deeply astronomical. Religious festivals such as Durga Puja, Kali Puja, and Kojagari Lakshmi Puja depend on exact <strong>Tithi (lunar day)</strong> transitions rather than fixed clock hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-1">
            <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
              <span className="font-extrabold text-black block">🟣 Ekadashi &amp; Fasting</span>
              <span className="text-[11px] text-zinc-700 block mt-0.5">Observed on the 11th lunar day of Shukla and Krishna Pakshas.</span>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
              <span className="font-extrabold text-black block">🌕 Purnima &amp; Amavasya</span>
              <span className="text-[11px] text-zinc-700 block mt-0.5">Full moon (Kojagari, Dol) and new moon (Mahalaya, Kali Puja) timings.</span>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000000]">
              <span className="font-extrabold text-black block">☀️ Sankranti Transits</span>
              <span className="text-[11px] text-zinc-700 block mt-0.5">Marks the end of each Bengali month as the Sun enters a new zodiac sign.</span>
            </div>
          </div>
        </section>

        {/* BENGALI MONTHS DETAILED GRID */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              The 12 Bengali Months (১২ বাংলা মাস)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
            {BENGALI_MONTHS.map((m, idx) => (
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

        {/* MAJOR PUJA & FESTIVAL DATES TABLE */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              Verified Bengali Puja & Festival Dates (2026–2027)
            </h2>
          </div>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
            <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse bg-white">
              <thead>
                <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                  <th className="p-3 border-r-2 border-black">Festival / Puja</th>
                  <th className="p-3 border-r-2 border-black">Bengali Name</th>
                  <th className="p-3 border-r-2 border-black">Date (2026)</th>
                  <th className="p-3 border-r-2 border-black">Date (2027)</th>
                  <th className="p-3">Panjika Description</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black font-sans">
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Poila Boishakh</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">পহেলা বৈশাখ</td>
                  <td className="p-3 border-r-2 border-black font-mono">Apr 15, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Apr 15, 2027</td>
                  <td className="p-3">Bengali New Year Day (Bangabda 1433 & 1434). Haal Khata ledger ritual.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Mahalaya</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">মহালয়া</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 10, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Sep 29, 2027</td>
                  <td className="p-3">Beginning of Debi Paksha and ancestral Tarpan rituals.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Durga Puja (Sasthi–Dashami)</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">দুর্গা পূজা</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 16 – 20, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 6 – 9, 2027</td>
                  <td className="p-3">Grand autumnal worship of Goddess Durga across Bengal.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Kojagari Lakshmi Puja</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">লক্ষ্মী পূজা</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 25, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 14, 2027</td>
                  <td className="p-3">Full moon night worship of Goddess Lakshmi.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Kali Puja & Diwali</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">কালী পূজা</td>
                  <td className="p-3 border-r-2 border-black font-mono">Nov 8, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 29, 2027</td>
                  <td className="p-3">Midnight worship of Goddess Kali and Deepavali lights.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TODAY'S BENGALI DATE FEATURE CARD */}
        <section className="bg-amber-50 border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">Dynamic Today Snapshot</span>
              <h2 className="text-2xl font-extrabold font-mono text-black">
                Today's Bengali Panjika Date
              </h2>
              <span className="text-3xl font-extrabold font-serif text-black block mt-1">
                {bengaliToday.formattedRegionalDate}
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
            <a href="/bangla-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Bangla Calendar 2026–2027</span>
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
