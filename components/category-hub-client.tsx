"use client";

import React from "react";
import { Compass, Heart, Users, Layers, Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ToolItem {
  title: string;
  desc: string;
  slug: string;
}

interface CategoryHubClientProps {
  category: string;
  tools: ToolItem[];
}

import { toolTranslations } from "@/lib/tool-translations";

export default function CategoryHubClient({ category, tools }: CategoryHubClientProps) {
  const { language, t } = useLanguage();

  const categoryIcons: Record<string, React.ReactNode> = {
    numerology: <Compass className="w-8 h-8 text-[#D97706]" />,
    love: <Heart className="w-8 h-8 text-[#EE5265]" />,
    "couple-names": <Users className="w-8 h-8 text-[#4F46E5]" />,
    wedding: <Layers className="w-8 h-8 text-[#059669]" />,
    relationship: <Star className="w-8 h-8 text-[#D97706]" />,
    "ai-generators": <Sparkles className="w-8 h-8 text-[#7C3AED]" />
  };

  const getHubText = () => {
    switch (category) {
      case "numerology":
        return { title: t.hubTitleNumerology, desc: t.hubDescNumerology };
      case "love":
        return { title: t.hubTitleLove, desc: t.hubDescLove };
      case "couple-names":
        return { title: t.hubTitleCoupleNames, desc: t.hubDescCoupleNames };
      case "wedding":
        return { title: t.hubTitleWedding, desc: t.hubDescWedding };
      case "relationship":
        return { title: t.hubTitleRelationship, desc: t.hubDescRelationship };
      case "ai-generators":
        return { title: t.hubTitleAiGenerators, desc: t.hubDescAiGenerators };
      default:
        return { title: category, desc: "" };
    }
  };

  const hubInfo = getHubText();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000000] rounded-2xl mb-2">
          {categoryIcons[category]}
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B4B]">
          {hubInfo.title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto font-medium leading-relaxed">
          {hubInfo.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => {
          // Check if there is a custom translation for this tool in the active language
          const translation = toolTranslations[language]?.[tool.slug];
          const displayedTitle = translation ? translation.title : tool.title;
          const displayedDesc = translation ? translation.desc : tool.desc;

          return (
            <a
              key={idx}
              href={`/${category}/${tool.slug}/`}
              className="win-outset glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group min-h-[190px] relative overflow-hidden bg-white border-[3px] border-black shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#000000] transition-all"
            >
              <div className="space-y-2">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-black group-hover:text-[#EE5265] transition-colors">
                  {displayedTitle}
                </h2>
                <p className="text-zinc-700 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {displayedDesc}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-extrabold text-black group-hover:text-[#EE5265] transition-colors pt-4">
                <span>{t.openTool}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>
          );
        })}
      </div>

      {category === "numerology" && (
        <div className="mt-16 space-y-12 font-sans border-t-2 border-[#E5E7EB] pt-12">
          {/* Section 1: Overview */}
          <section className="space-y-4 max-w-4xl mx-auto bg-white border-[3px] border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B]">
              Understanding Pythagorean & Chaldean Numerology
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
              Numerology is the ancient study of how numbers, frequencies, and sound vibrations correlate with human personality traits, life events, and spiritual paths. At <strong>AstroRomantic</strong>, our numerology suite combines classical Pythagorean letter-number formulas and ancient Chaldean sound vibration matrices to deliver instant, clear insights into your destiny.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
              Whether you are calculating your core Life Path Number from your date of birth, analyzing your Name Numerology, or exploring Soul Urge and Destiny numbers, our suite gives you instant access to authentic calculations.
            </p>
          </section>

          {/* Section 2: Numerology Comparison Matrix */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#1E1B4B]">
              AstroRomantic Numerology Tools Guide
            </h2>
            <div className="overflow-x-auto border-[3px] border-black rounded-2xl bg-white shadow-[6px_6px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse text-black">
                <thead>
                  <tr className="bg-[#FEF3C7] border-b-2 border-black font-mono font-bold text-[#92400E]">
                    <th className="p-3.5 border-r-2 border-black">Numerology Tool</th>
                    <th className="p-3.5 border-r-2 border-black">Core Focus</th>
                    <th className="p-3.5 border-r-2 border-black">Required Input</th>
                    <th className="p-3.5">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-amber-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Life Path Number Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Core identity & life roadmap</td>
                    <td className="p-3.5 border-r-2 border-black">Full Date of Birth</td>
                    <td className="p-3.5">Understanding life purpose & lessons</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Name Numerology Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Pythagorean full name letter analysis</td>
                    <td className="p-3.5 border-r-2 border-black">Full Birth Name</td>
                    <td className="p-3.5">Expressive personality & destiny</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Chaldean Numerology Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Ancient Chaldean sound vibrations</td>
                    <td className="p-3.5 border-r-2 border-black">Name or Word</td>
                    <td className="p-3.5">Deep spiritual & vibrational resonance</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Destiny Number Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Cosmic goal & outer potential</td>
                    <td className="p-3.5 border-r-2 border-black">Full Birth Name</td>
                    <td className="p-3.5">Career & life mission analysis</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Soul Urge Number Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Vowels & inner heart callings</td>
                    <td className="p-3.5 border-r-2 border-black">Full Name Vowels</td>
                    <td className="p-3.5">Uncovering hidden emotional desires</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Baby Name Numerology</td>
                    <td className="p-3.5 border-r-2 border-black">Selecting lucky high-vibe names</td>
                    <td className="p-3.5 border-r-2 border-black">Candidate Name & DOB</td>
                    <td className="p-3.5">Parents naming newborn babies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: FAQs */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#1E1B4B]">
              Numerology Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group bg-white border-[3px] border-black rounded-2xl p-5 cursor-pointer shadow-[4px_4px_0px_#000000]">
                <summary className="font-serif font-bold text-base sm:text-lg text-black list-none flex justify-between items-center">
                  <span>What is the difference between Pythagorean and Chaldean numerology?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-[#D97706]">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200 font-sans">
                  Pythagorean numerology maps letters sequentially from 1 to 9 based on the alphabet position. Chaldean numerology maps letters from 1 to 8 based on ancient sound-vibration energy frequencies (the number 9 is held sacred and excluded from basic letter mapping). Both provide complementary insights.
                </p>
              </details>
              <details className="group bg-white border-[3px] border-black rounded-2xl p-5 cursor-pointer shadow-[4px_4px_0px_#000000]">
                <summary className="font-serif font-bold text-base sm:text-lg text-black list-none flex justify-between items-center">
                  <span>Which numerology number is the most important?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-[#D97706]">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200 font-sans">
                  Your Life Path Number (calculated from your full birth date) is considered the single most influential number in your chart, outlining your core nature, innate talents, and life journey.
                </p>
              </details>
            </div>
          </section>
        </div>
      )}

      {category === "love" && (
        <div className="mt-16 space-y-12 font-sans border-t-2 border-[#E5E7EB] pt-12">
          {/* Section 1: Overview */}
          <section className="space-y-4 max-w-4xl mx-auto bg-white border-[3px] border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B]">
              Understanding Cosmic Love & Relationship Compatibility
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
              Love compatibility is the study of how two energetic signatures—expressed through names, birth dates, and zodiac positions—interact with one another. At <strong>AstroRomantic</strong>, our love suite synthesizes Pythagorean name numerology, ancient Chaldean sound vibrations, and Western/Vedic astrological synastry into intuitive calculators designed for self-reflection and romantic discovery.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
              Whether you are testing early chemistry with a crush, assessing long-term marital alignment, or exploring spiritual Twin Flame ties, our suite of specialized tools provides layered perspectives for every stage of your relationship journey.
            </p>
          </section>

          {/* Section 2: Tool Comparison Matrix */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#1E1B4B]">
              AstroRomantic Love Tools Comparison Matrix
            </h2>
            <div className="overflow-x-auto border-[3px] border-black rounded-2xl bg-white shadow-[6px_6px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse text-black">
                <thead>
                  <tr className="bg-[#FFE4E6] border-b-2 border-black font-mono font-bold text-[#BE123C]">
                    <th className="p-3.5 border-r-2 border-black">Calculator Tool</th>
                    <th className="p-3.5 border-r-2 border-black">Primary Focus</th>
                    <th className="p-3.5 border-r-2 border-black">Inputs Used</th>
                    <th className="p-3.5">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  <tr className="hover:bg-rose-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Love Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">General Name & Phonetic Chemistry</td>
                    <td className="p-3.5 border-r-2 border-black">Partner Names</td>
                    <td className="p-3.5">Quick fun spark check</td>
                  </tr>
                  <tr className="hover:bg-rose-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Love Percentage Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Numerical Affinity Score</td>
                    <td className="p-3.5 border-r-2 border-black">First Names</td>
                    <td className="p-3.5">Social sharing & instant percentages</td>
                  </tr>
                  <tr className="hover:bg-rose-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Zodiac Love Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Astrological Element & Sun Sign Match</td>
                    <td className="p-3.5 border-r-2 border-black">Zodiac Signs</td>
                    <td className="p-3.5">Fire/Earth/Air/Water compatibility</td>
                  </tr>
                  <tr className="hover:bg-rose-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Relationship Compatibility</td>
                    <td className="p-3.5 border-r-2 border-black">Multi-Pillar Dynamics & Communication</td>
                    <td className="p-3.5 border-r-2 border-black">Names & Birth Dates</td>
                    <td className="p-3.5">Couples in established relationships</td>
                  </tr>
                  <tr className="hover:bg-rose-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Marriage Compatibility</td>
                    <td className="p-3.5 border-r-2 border-black">Lifelong Financial & Domestic Alignment</td>
                    <td className="p-3.5 border-r-2 border-black">Names & Marriage Goals</td>
                    <td className="p-3.5">Engaged couples & long-term planning</td>
                  </tr>
                  <tr className="hover:bg-rose-50">
                    <td className="p-3.5 border-r-2 border-black font-bold text-black">Soulmate Calculator</td>
                    <td className="p-3.5 border-r-2 border-black">Karmic Ties & Twin Flame Markings</td>
                    <td className="p-3.5 border-r-2 border-black">Full Names & Birth Dates</td>
                    <td className="p-3.5">Deep spiritual soul connection analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: How to Use */}
          <section className="space-y-4 max-w-4xl mx-auto bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B4B]">
              How to Get the Most Out of AstroRomantic Love Tools
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base text-zinc-700">
              <li><strong className="text-black">Start with the Love Calculator:</strong> Test basic name resonance for a quick, entertaining percentage overview.</li>
              <li><strong className="text-black">Add Zodiac & Element Layers:</strong> Check how your Sun sign elements (Fire, Earth, Air, Water) balance each other in daily communication.</li>
              <li><strong className="text-black">Explore Soulmate Markings:</strong> For deeper relationships, use full birth names and dates in the Soulmate Calculator to inspect spiritual alignment.</li>
              <li><strong className="text-black">Use Scores as Conversation Starters:</strong> Use your results to discuss relationship strengths, communication styles, and shared goals.</li>
            </ol>
          </section>

          {/* Section 4: FAQs */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#1E1B4B]">
              Love & Compatibility Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group bg-white border-3 border-black rounded-2xl p-5 cursor-pointer shadow-[4px_4px_0px_#000000]">
                <summary className="font-serif font-bold text-base sm:text-lg text-black list-none flex justify-between items-center">
                  <span>What makes AstroRomantic love calculators unique?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-[#EE5265]">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200 font-sans">
                  Our tools combine Pythagorean name letter math with Chaldean sound frequencies and astrological element synastry. All calculations run 100% privately in your browser with zero data storage.
                </p>
              </details>
              <details className="group bg-white border-3 border-black rounded-2xl p-5 cursor-pointer shadow-[4px_4px_0px_#000000]">
                <summary className="font-serif font-bold text-base sm:text-lg text-black list-none flex justify-between items-center">
                  <span>Are online love calculators accurate?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-[#EE5265]">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200 font-sans">
                  Love calculators analyze vibrational pattern-matching rather than predicting concrete relationship outcomes. Use them as lighthearted icebreakers and self-reflection prompts.
                </p>
              </details>
              <details className="group bg-white border-3 border-black rounded-2xl p-5 cursor-pointer shadow-[4px_4px_0px_#000000]">
                <summary className="font-serif font-bold text-base sm:text-lg text-black list-none flex justify-between items-center">
                  <span>Should I use full birth names or nicknames?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-[#EE5265]">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed pt-2 border-t border-zinc-200 font-sans">
                  Full birth names reveal your core numerological destiny, while nicknames reflect present daily energy. You can test both to compare your birth resonance with daily dynamic scores.
                </p>
              </details>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

