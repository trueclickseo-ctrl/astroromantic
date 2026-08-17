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
    numerology: <Compass className="w-8 h-8 text-amber-400" />,
    love: <Heart className="w-8 h-8 text-rose-400" />,
    "couple-names": <Users className="w-8 h-8 text-indigo-400" />,
    wedding: <Layers className="w-8 h-8 text-emerald-400" />,
    relationship: <Star className="w-8 h-8 text-cyan-400" />,
    "ai-generators": <Sparkles className="w-8 h-8 text-purple-400" />
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex p-3 bg-white/5 border border-white/10 rounded-3xl mb-2">
          {categoryIcons[category]}
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-rose-300 to-purple-400 bg-clip-text text-transparent">
          {hubInfo.title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
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
              className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group h-48 relative overflow-hidden"
            >
              <div className="space-y-2">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  {displayedTitle}
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {displayedDesc}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 group-hover:text-amber-400 transition-colors">
                <span>{t.openTool}</span>
                <span>&rarr;</span>
              </div>
            </a>
          );
        })}
      </div>

      {category === "love" && (
        <div className="mt-16 space-y-12 text-zinc-300 font-sans border-t border-zinc-800/80 pt-12">
          {/* Section 1: Overview */}
          <section className="space-y-4 max-w-4xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-200">
              Understanding Cosmic Love & Relationship Compatibility
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
              Love compatibility is the study of how two energetic signatures—expressed through names, birth dates, and zodiac positions—interact with one another. At <strong>AstroRomantic</strong>, our love suite synthesizes Pythagorean name numerology, ancient Chaldean sound vibrations, and Western/Vedic astrological synastry into intuitive calculators designed for self-reflection and romantic discovery.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
              Whether you are testing early chemistry with a crush, assessing long-term marital alignment, or exploring spiritual Twin Flame ties, our suite of specialized tools provides layered perspectives for every stage of your relationship journey.
            </p>
          </section>

          {/* Section 2: Tool Comparison Matrix */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-amber-200">
              AstroRomantic Love Tools Comparison Matrix
            </h2>
            <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-950/80 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm border-collapse text-zinc-300">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800 font-mono font-semibold text-amber-300">
                    <th className="p-3.5 border-r border-zinc-800">Calculator Tool</th>
                    <th className="p-3.5 border-r border-zinc-800">Primary Focus</th>
                    <th className="p-3.5 border-r border-zinc-800">Inputs Used</th>
                    <th className="p-3.5">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 font-sans">
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 border-r border-zinc-800 font-semibold text-zinc-100">Love Calculator</td>
                    <td className="p-3.5 border-r border-zinc-800">General Name & Phonetic Chemistry</td>
                    <td className="p-3.5 border-r border-zinc-800">Partner Names</td>
                    <td className="p-3.5">Quick fun spark check</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 border-r border-zinc-800 font-semibold text-zinc-100">Love Percentage Calculator</td>
                    <td className="p-3.5 border-r border-zinc-800">Numerical Affinity Score</td>
                    <td className="p-3.5 border-r border-zinc-800">First Names</td>
                    <td className="p-3.5">Social sharing & instant percentages</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 border-r border-zinc-800 font-semibold text-zinc-100">Zodiac Love Calculator</td>
                    <td className="p-3.5 border-r border-zinc-800">Astrological Element & Sun Sign Match</td>
                    <td className="p-3.5 border-r border-zinc-800">Zodiac Signs</td>
                    <td className="p-3.5">Fire/Earth/Air/Water compatibility</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 border-r border-zinc-800 font-semibold text-zinc-100">Relationship Compatibility</td>
                    <td className="p-3.5 border-r border-zinc-800">Multi-Pillar Dynamics & Communication</td>
                    <td className="p-3.5 border-r border-zinc-800">Names & Birth Dates</td>
                    <td className="p-3.5">Couples in established relationships</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 border-r border-zinc-800 font-semibold text-zinc-100">Marriage Compatibility</td>
                    <td className="p-3.5 border-r border-zinc-800">Lifelong Financial & Domestic Alignment</td>
                    <td className="p-3.5 border-r border-zinc-800">Names & Marriage Goals</td>
                    <td className="p-3.5">Engaged couples & long-term planning</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 border-r border-zinc-800 font-semibold text-zinc-100">Soulmate Calculator</td>
                    <td className="p-3.5 border-r border-zinc-800">Karmic Ties & Twin Flame Markings</td>
                    <td className="p-3.5 border-r border-zinc-800">Full Names & Birth Dates</td>
                    <td className="p-3.5">Deep spiritual soul connection analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: How to Use */}
          <section className="space-y-4 max-w-4xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-200">
              How to Get the Most Out of AstroRomantic Love Tools
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base text-zinc-400">
              <li><strong className="text-zinc-200">Start with the Love Calculator:</strong> Test basic name resonance for a quick, entertaining percentage overview.</li>
              <li><strong className="text-zinc-200">Add Zodiac & Element Layers:</strong> Check how your Sun sign elements (Fire, Earth, Air, Water) balance each other in daily communication.</li>
              <li><strong className="text-zinc-200">Explore Soulmate Markings:</strong> For deeper relationships, use full birth names and dates in the Soulmate Calculator to inspect spiritual alignment.</li>
              <li><strong className="text-zinc-200">Use Scores as Conversation Starters:</strong> Use your results to discuss relationship strengths, communication styles, and shared goals.</li>
            </ol>
          </section>

          {/* Section 4: FAQs */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-amber-200">
              Love & Compatibility Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 cursor-pointer">
                <summary className="font-serif font-bold text-base sm:text-lg text-zinc-100 list-none flex justify-between items-center">
                  <span>What makes AstroRomantic love calculators unique?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-amber-400">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed pt-2 border-t border-zinc-800">
                  Our tools combine Pythagorean name letter math with Chaldean sound frequencies and astrological element synastry. All calculations run 100% privately in your browser with zero data storage.
                </p>
              </details>
              <details className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 cursor-pointer">
                <summary className="font-serif font-bold text-base sm:text-lg text-zinc-100 list-none flex justify-between items-center">
                  <span>Are online love calculators accurate?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-amber-400">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed pt-2 border-t border-zinc-800">
                  Love calculators analyze vibrational pattern-matching rather than predicting concrete relationship outcomes. Use them as lighthearted icebreakers and self-reflection prompts.
                </p>
              </details>
              <details className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 cursor-pointer">
                <summary className="font-serif font-bold text-base sm:text-lg text-zinc-100 list-none flex justify-between items-center">
                  <span>Should I use full birth names or nicknames?</span>
                  <span className="transition-transform group-open:rotate-180 font-mono text-amber-400">▼</span>
                </summary>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed pt-2 border-t border-zinc-800">
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
