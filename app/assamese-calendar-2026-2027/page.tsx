import React from "react";
import type { Metadata } from "next";
import { RegionalCalendarShell } from "@/components/calendars/regional-calendar-shell";
import { ASSAMESE_MONTHS, ASSAMESE_EVENTS_2026_2027, getAssameseDate } from "@/lib/regional-calendars";
import { Sparkles, Calendar as CalendarIcon, BookOpen, CheckCircle2, HelpCircle, ArrowRight, Sun, Flame, MapPin } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "assamese-calendar-2026-2027";

export const metadata: Metadata = {
  title: "Assamese Calendar 2026–2027 | Assamese Panjika & Bihu Dates",
  description: "Explore the complete Assamese Calendar 2026–2027 with Assamese months, Gregorian dates, Bohag Bihu, Magh Bihu, Kati Bihu, holidays and Bhaskarabda observances.",
  alternates: { canonical: `${SITE_URL}/${SLUG}/` },
  openGraph: {
    title: "Assamese Calendar 2026–2027 | Assamese Panjika & Bihu Dates",
    description: "Explore the complete Assamese Calendar 2026–2027 with Assamese months, Gregorian dates, Bohag Bihu, Magh Bihu, Kati Bihu, holidays and Bhaskarabda observances.",
    url: `${SITE_URL}/${SLUG}/`,
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assamese Calendar 2026–2027 | Assamese Panjika & Bihu Dates",
    description: "Explore the complete Assamese Calendar 2026–2027 with Assamese months, Gregorian dates, Bohag Bihu, Magh Bihu, Kati Bihu, holidays and Bhaskarabda observances.",
  },
};

const faqs = [
  {
    question: "What is the Assamese calendar 2026–2027?",
    answer: "The Assamese calendar 2026–2027 is the traditional solar regional calendar used in Assam, India. It spans the Bhaskarabda years 1433 and 1434, marking regional months like Bohag, Magh, Kati, and festivals such as Bohag Bihu and Ambubachi Mela alongside Gregorian dates."
  },
  {
    question: "What Assamese year (Bhaskarabda) corresponds to 2026?",
    answer: "The year 2026 corresponds primarily to Bhaskarabda 1433 (which runs until mid-April 2026) and Bhaskarabda 1434 (which begins on Bohag Bihu / April 15, 2027)."
  },
  {
    question: "When is Bohag Bihu in 2026?",
    answer: "Bohag Bihu 2026 begins on April 14, 2026 (Goru Bihu) and continues with Manuh Bihu (Assamese New Year) on April 15, 2026."
  },
  {
    question: "When is Magh Bihu in 2027?",
    answer: "Magh Bihu 2027 (Bhogali Bihu) takes place on January 14–15, 2027, starting with Uruka feast night on January 14 followed by Meji bonfires on January 15."
  },
  {
    question: "What are the 12 Assamese months?",
    answer: "The 12 Assamese months are Bohag (বহাগ), Jeth (জেঠ), Ahar (আহাৰ), Saon (শাওণ), Bhado (ভাদ), Ahin (আহিন), Kati (কাতি), Aghon (আঘোণ), Puh (পুহ), Magh (মাঘ), Phagun (ফাগুন), and Chait (চ’ত)."
  },
  {
    question: "What is today's Assamese date?",
    answer: "Today's Assamese date is calculated dynamically from the active Bhaskarabda solar calendar system, displayed in the 'Today's Regional Date' card above."
  },
  {
    question: "How is the Assamese calendar different from the Gregorian calendar?",
    answer: "The Assamese calendar is a solar sidereal calendar calculated from the movement of the Sun across the 12 zodiac signs (Rashi), whereas the Gregorian calendar is a tropical solar calendar. Assamese months begin around the middle of Gregorian months."
  },
  {
    question: "What is Bhaskarabda?",
    answer: "Bhaskarabda is the traditional Assamese era named after King Bhaskaravarman of Kamarupa (600–650 CE). It counts years starting approximately 593 years after the Gregorian era."
  }
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${SLUG}/#webpage`,
      "url": `${SITE_URL}/${SLUG}/`,
      "name": "Assamese Calendar 2026–2027 | Assamese Panjika & Bihu Dates",
      "description": "Explore the complete Assamese Calendar 2026–2027 with Assamese months, Gregorian dates, Bohag Bihu, Magh Bihu, Kati Bihu, holidays and Bhaskarabda observances."
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/${SLUG}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Calendars", "item": `${SITE_URL}/calculators/` },
        { "@type": "ListItem", "position": 3, "name": "Assamese Calendar 2026–2027", "item": `${SITE_URL}/${SLUG}/` }
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

export default function AssameseCalendarPage() {
  const today = new Date();
  const assameseToday = getAssameseDate(today);

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
          <span className="font-bold text-black">Assamese Calendar 2026–2027</span>
        </nav>

        {/* COMPACT HERO SECTION */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-300 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Bhaskarabda 1433–1434 • Assam Regional Panjika</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Assamese Calendar 2026–2027
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed font-sans">
            Explore the complete <strong>Assamese Calendar 2026–2027</strong> with Assamese months (বহাগ, মাঘ, কাতি), Bihu celebrations, Gregorian dates, Ambubachi Mela, Durga Puja dates, and important regional observances.
          </p>

          {/* COMPACT METADATA STRIP */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold">
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              System: Bhaskarabda Solar
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              Years: 1433 – 1434
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black">
              Today: {assameseToday.formattedRegionalDate}
            </span>
            <span className="bg-[#f4f3ef] border border-black rounded-lg px-3 py-1 text-black flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Assam, India</span>
            </span>
          </div>
        </header>

        {/* HIGH-INFORMATION DENSITY CALENDAR COMPONENT */}
        <section className="w-full">
          <RegionalCalendarShell
            calendarType="assamese"
            systemTitle="Assamese Interactive Calendar 2026–2027"
            systemSubtitle="Select any month or year to explore verified Assamese dates, Bihu schedules, and festivals."
            eraName="Bhaskarabda 1433 – 1434"
            months={ASSAMESE_MONTHS}
            events={ASSAMESE_EVENTS_2026_2027}
            defaultYear={2026}
            locationNote="Calendar observances and tithis are calibrated for Guwahati and Assam regional solar ephemeris."
          />
        </section>

        {/* PROMINENT BIHU 2026–2027 FEATURE SECTION */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-5">
          <div className="flex items-center space-x-3 border-b-2 border-black pb-3">
            <Flame className="w-7 h-7 text-amber-700 flex-shrink-0" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                The Three Bihus of Assam (২০২৬–২০২৭)
              </h2>
              <p className="text-xs text-zinc-800 font-sans">
                Bihu is the soul of Assamese culture, marking three distinct stages of the agricultural cycle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
            {/* Bohag Bihu */}
            <div className="bg-white border-2 border-black rounded-xl p-5 shadow-[3px_3px_0px_#000000] space-y-2">
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200 border border-black rounded-full px-2.5 py-0.5">
                Spring • Rongali Bihu
              </span>
              <h3 className="text-xl font-extrabold font-mono text-black">
                Bohag Bihu (বহাগ বিহু)
              </h3>
              <span className="text-xs font-mono font-bold text-rose-700 block">
                Apr 14 – 16, 2026 | Apr 14 – 16, 2027
              </span>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Marks the Assamese New Year (Bohag 1) and arrival of spring. Begins with Goru Bihu (cattle worship) followed by Manuh Bihu, Husori dance, and presenting woven Gamosas.
              </p>
            </div>

            {/* Kati Bihu */}
            <div className="bg-white border-2 border-black rounded-xl p-5 shadow-[3px_3px_0px_#000000] space-y-2">
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200 border border-black rounded-full px-2.5 py-0.5">
                Autumn • Kongali Bihu
              </span>
              <h3 className="text-xl font-extrabold font-mono text-black">
                Kati Bihu (কাতি বিহু)
              </h3>
              <span className="text-xs font-mono font-bold text-rose-700 block">
                October 18, 2026 | October 18, 2027
              </span>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Observed in Kati month when granaries are empty and paddy is growing. Families light earthen lamps (Saki) at the foot of Tulsi plants and in paddy fields for crop protection.
              </p>
            </div>

            {/* Magh Bihu */}
            <div className="bg-white border-2 border-black rounded-xl p-5 shadow-[3px_3px_0px_#000000] space-y-2">
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200 border border-black rounded-full px-2.5 py-0.5">
                Winter • Bhogali Bihu
              </span>
              <h3 className="text-xl font-extrabold font-mono text-black">
                Magh Bihu (মাঘ বিহু)
              </h3>
              <span className="text-xs font-mono font-bold text-rose-700 block">
                Jan 14 – 15, 2026 | Jan 14 – 15, 2027
              </span>
              <p className="text-xs text-zinc-800 leading-relaxed">
                Post-harvest feast festival. Starts with Uruka community feasts inside Bhelaghar huts, followed by lighting tall Meji bonfires, pitha eating, and traditional games.
              </p>
            </div>
          </div>
        </section>

        {/* ASSAMESE MONTHS DETAILED GRID */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              The 12 Assamese Months (অসমীয়া ১২ মাহ)
            </h2>
            <p className="text-sm text-zinc-700 font-sans mt-1">
              The Assamese calendar divides the year into 12 solar months based on solar transits (Sankranti).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
            {ASSAMESE_MONTHS.map((m, idx) => (
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

        {/* MAJOR FESTIVALS TABLE */}
        <section className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="border-b-3 border-black pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
              Verified Major Assamese Festivals & Holidays (2026–2027)
            </h2>
          </div>

          <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
            <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse bg-white">
              <thead>
                <tr className="bg-amber-300 border-b-2 border-black text-black font-bold uppercase">
                  <th className="p-3 border-r-2 border-black">Festival / Observance</th>
                  <th className="p-3 border-r-2 border-black">Assamese Name</th>
                  <th className="p-3 border-r-2 border-black">Date (2026)</th>
                  <th className="p-3 border-r-2 border-black">Date (2027)</th>
                  <th className="p-3">Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black font-sans">
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Bohag Bihu (Rongali Bihu)</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">বহাগ বিহু</td>
                  <td className="p-3 border-r-2 border-black font-mono">Apr 14 – 16, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Apr 14 – 16, 2027</td>
                  <td className="p-3">Assamese New Year, cattle worship (Goru Bihu), Bihu dance, Gamosa present.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Kati Bihu (Kongali Bihu)</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">কাতি বিহু</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 18, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 18, 2027</td>
                  <td className="p-3">Lighting earthen lamps (Saki) in paddy fields praying for good crop yield.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Magh Bihu (Bhogali Bihu)</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">মাঘ বিহু</td>
                  <td className="p-3 border-r-2 border-black font-mono">Jan 14 – 15, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Jan 14 – 15, 2027</td>
                  <td className="p-3">Post-harvest festival, Uruka feast night, lighting Meji bonfires, pitha sweets.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Ambubachi Mela</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">অম্বুবাচী মেলা</td>
                  <td className="p-3 border-r-2 border-black font-mono">Jun 22 – 26, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Jun 22 – 26, 2027</td>
                  <td className="p-3">Annual Tantric festival at Kamakhya Temple, Guwahati.</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border-r-2 border-black font-bold font-mono">Durga Puja</td>
                  <td className="p-3 border-r-2 border-black font-bold text-rose-700">দুৰ্গা পূজা</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 17 – 20, 2026</td>
                  <td className="p-3 border-r-2 border-black font-mono">Oct 6 – 9, 2027</td>
                  <td className="p-3">Grand autumn worship of Goddess Durga across Assam.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* WHAT IS THE ASSAMESE CALENDAR EXPLANATORY SECTION */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-4 font-sans text-zinc-900 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
            What Is the Assamese Calendar (Bhaskarabda)?
          </h2>
          <p>
            The <strong>Assamese calendar</strong> is the regional lunisolar calendar used in the state of Assam, India. It is dated according to the <strong>Bhaskarabda era</strong>, named in honor of King Bhaskaravarman of Kamarupa (600–650 CE), who was a contemporary of King Harshavardhana.
          </p>
          <p>
            The Assamese year begins on <strong>Bohag 1</strong> (mid-April), which marks the spring festival of <strong>Rongali Bihu</strong>. Because the calendar follows solar transits across sidereal zodiac signs, each month starts when the Sun enters a new Rashi (Sankranti).
          </p>
        </article>

        {/* TODAY'S ASSAMESE DATE FEATURE CARD */}
        <section className="bg-amber-50 border-3 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase block">Dynamic Today Snapshot</span>
              <h2 className="text-2xl font-extrabold font-mono text-black">
                Today's Assamese Date
              </h2>
              <span className="text-3xl font-extrabold font-serif text-black block mt-1">
                {assameseToday.formattedRegionalDate}
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

        {/* INTERNAL LINKS / RELATED TOOLS */}
        <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
          <h2 className="text-xl font-bold font-mono text-black uppercase">
            Explore Related Astrology & Calendar Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <a href="/bengali-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Bengali Calendar 2026–2027</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/bangla-calendar-2026-2027/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Bangla Calendar 2026–2027</span>
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
            <a href="/calculators/moon-sign/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Moon Sign Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/calculators/nakshatra/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
              <span>Nakshatra Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
