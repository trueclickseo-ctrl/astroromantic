import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight, ChevronRight, Home } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "/reports/saturn";

export const metadata: Metadata = {
  title: "Saturn (Shani) Report – Effects, Sade Sati & Remedies",
  description: "Understand your Saturn (Shani) report: Sade Sati phases, Shani Dhaiya, and what Saturn's placement means for discipline, delay, and growth.",
  alternates: { canonical: `${SITE_URL}${SLUG}/` },
  openGraph: {
    title: "Saturn (Shani) Report – Effects, Sade Sati & Remedies",
    description: "Understand your Saturn (Shani) report: Sade Sati phases, Shani Dhaiya, and what Saturn's placement means for discipline, delay, and growth.",
    url: `${SITE_URL}${SLUG}/`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saturn (Shani) Report – Effects, Sade Sati & Remedies",
    description: "Understand your Saturn (Shani) report: Sade Sati phases, Shani Dhaiya, and what Saturn's placement means for discipline, delay, and growth.",
  },
};

const faqs: { question: string; answer: string }[] = [];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${SLUG}/#article`,
      "headline": "Saturn (Shani) Report: Understanding Saturn's Effects in Your Chart",
      "description": "Understand your Saturn (Shani) report: Sade Sati phases, Shani Dhaiya, and what Saturn's placement means for discipline, delay, and growth.",
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
          <span className="font-bold text-black">Saturn (Shani) Report: Understanding Saturn's Effects in Your Chart</span>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-200 border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Astrology Report Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            Saturn (Shani) Report: Understanding Saturn's Effects in Your Chart
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">Your **Saturn (Shani) report** focuses on one of the most discussed and, frankly, most feared planets in Vedic astrology — not because it's malicious, but because its lessons are earned the hard way, through discipline, patience, and time. This report covers where Saturn sits in your natal chart, whether you're currently in a Sade Sati or Shani Dhaiya transit period, and what that specific placement is likely asking of you.</p>
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
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Saturn (Shani)** is the planet of discipline, karma, and structure in Vedic astrology — often feared, but ultimately associated with earned, lasting achievement.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Sade Sati** is a 7.5-year transit period, occurring when Saturn moves through the 12th, 1st, and 2nd houses from your natal Moon.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>**Shani Dhaiya** refers to shorter, related Saturn transits — through the 4th house (Ardha Kantak Shani) or the 8th house (Ashtam Shani, considered more challenging) from your natal Moon.</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Saturn's effects depend heavily on your **natal Moon sign** — Sade Sati tends to feel milder if your Moon sits in Capricorn or Aquarius (Saturn's own signs) and more intense in Cancer or Leo (ruled by Saturn's traditional enemies, Moon and Sun).</span></li>
            <li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>Saturn is a **karmic teacher, not a punisher** — its lessons build patience, resilience, and long-term maturity rather than existing purely to cause hardship.</span></li>
          </ul>
        </section>
        

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Why Saturn Has Such a Serious Reputation
            </h2>
            <p>In Vedic mythology, Shani is known as **Karmphaldata** — the giver of the results of one's actions — earned after performing deep penance to Lord Shiva. This origin story reflects Saturn's core astrological role: it doesn't create difficulty arbitrarily, it delivers the consequences, positive or negative, of choices already made. Saturn is also the only planet in the tradition said to be able to influence even the gods, which is part of why it's approached with such respect.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Sade Sati: The 7.5-Year Saturn Transit
            </h2>
            <p>**Sade Sati** ("seven and a half") is one of the most significant Saturn transits in Vedic astrology, occurring when Saturn moves through three consecutive houses relative to your natal Moon: the 12th, 1st, and 2nd. Since Saturn takes about 2.5 years to pass through each sign, the full transit spans roughly 7.5 years total.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              The Three Phases of Sade Sati
            </h2>
            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    <th className="p-3 border-r-2 border-black">Phase</th><th className="p-3 border-r-2 border-black">Saturn's Position (from natal Moon)</th><th className="p-3 ">General Theme</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Rising Phase**</td><td className="p-3 border-r-2 border-black">12th house</td><td className="p-3 ">Preparation, subtle pressure building</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Peak Phase**</td><td className="p-3 border-r-2 border-black">1st house (over the natal Moon)</td><td className="p-3 ">Most intense; direct pressure on mind and identity</td></tr>
                  <tr className="hover:bg-amber-50"><td className="p-3 border-r-2 border-black">**Setting Phase**</td><td className="p-3 border-r-2 border-black">2nd house</td><td className="p-3 ">Gradual easing, opportunities for recovery</td></tr>
                </tbody>
              </table>
            </div>
            <p>Sade Sati is often surrounded by anxiety and misconceptions, but many astrologers frame it as a **balancing act** — a period that dismantles illusions while also building genuine clarity, discipline, and long-term resilience.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Shani Dhaiya: The Shorter Saturn Transits
            </h2>
            <p>Beyond Sade Sati, two other Saturn transits deserve attention:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ardha Kantak Shani (4th house)** — Saturn transiting the 4th house from your natal Moon; considered moderately challenging, often affecting home and emotional stability.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ashtam Shani (8th house)** — Saturn transiting the 8th house from your natal Moon; considered the most challenging of the Dhaiya transits, often bringing disturbances in family life or close relationships.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Does Your Moon Sign Change How Hard Saturn Hits?
            </h2>
            <p>Yes — significantly. Saturn's transiting effects are read against your **natal Moon sign**, and its intensity varies depending on how that sign relates to Saturn:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Milder effects:** Moon in Capricorn or Aquarius (Saturn's own ruled signs) — Saturn is "at home," so its lessons tend to feel more natural and less disruptive.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**More intense effects:** Moon in Cancer or Leo (ruled by the Moon and Sun, both traditionally considered enemies of Saturn) — the friction between rulerships tends to sharpen Saturn's challenges.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              What Sade Sati Can Actually Bring (Beyond Hardship)
            </h2>
            <p>Despite its reputation, Sade Sati isn't purely negative. Astrologers commonly note it can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Build **patience and emotional resilience**</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Instill the value of **hard work and discipline**</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encourage deep **reflection on life goals and direction**</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prompt **necessary restructuring** in areas that had been avoided or neglected</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Traditional Saturn Remedies
            </h2>
            <p>Vedic tradition offers several remedial practices to work constructively with a challenging Saturn period, though these are understood as support tools rather than guaranteed fixes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Worship on Saturdays**, Saturn's dedicated day, often at a Shani or Hanuman temple</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Chanting the Shani mantra** ("Om Sham Shanicharaya Namah") or the Hanuman Chalisa</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Wearing Blue Sapphire (Neelam)** — traditionally recommended only after consultation with a qualified astrologer</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Charitable donations**, especially of items associated with Saturn: black items, iron, sesame oil, or food for the needy</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2">
              Common Mistakes When Reading a Saturn Report
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Treating Saturn as purely malefic** — it's a karmic teacher, and many of its "difficult" periods correspond to major, hard-won achievements.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Assuming Sade Sati automatically means seven and a half years of misfortune** — its actual intensity depends heavily on your natal Moon sign and Saturn's broader chart placement.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Confusing Sade Sati with Shani Dasha** — Sade Sati is a specific transit-based period, while Shani Dasha refers to any period where Saturn is the ruling Mahadasha planet in your Vimshottari timeline.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Ignoring your natal Saturn placement** while focusing only on the transit — both layers matter for a complete picture.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is Sade Sati and how long does it last?
            </h2>
            <p>Sade Sati is a 7.5-year Saturn transit through the 12th, 1st, and 2nd houses from your natal Moon, divided into three roughly 2.5-year phases.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Sade Sati always a bad period?
            </h2>
            <p>Not necessarily — while it's associated with pressure, delays, and tests, many astrologers frame it as a period that also builds patience, discipline, and long-term resilience, with its actual intensity depending on your natal chart.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              What is the difference between Sade Sati and Shani Dhaiya?
            </h2>
            <p>Sade Sati is the full 7.5-year transit through three houses from the natal Moon, while Shani Dhaiya refers to shorter, related transits through the 4th house (Ardha Kantak) or 8th house (Ashtam Shani) from the natal Moon.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Which Moon signs experience Sade Sati least intensely?
            </h2>
            <p>Moon in Capricorn or Aquarius tends to experience milder Sade Sati effects, since these are Saturn's own ruled signs, while Moon in Cancer or Leo tends to feel more intensity due to traditional planetary rivalry.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Is Saturn Dasha the same as Sade Sati?
            </h2>
            <p>No — Shani Dasha refers to any period where Saturn is your ruling Mahadasha planet in the Vimshottari Dasha timeline, while Sade Sati is a specific transit-based period independent of your Dasha sequence.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1">
              Do Saturn remedies actually work?
            </h2>
            <p>Remedies like mantras, charitable acts, and gemstones are traditional support tools meant to help a person work constructively with Saturn's lessons, though they're generally understood as complements to effort and patience, not guaranteed fixes.</p>
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
              <li>Classical Vedic mythology and Jyotish literature on Shani (Saturn) as Karmphaldata</li>
              <li>Standard Sade Sati and Shani Dhaiya transit framework used across contemporary Vedic astrology practice</li>
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
