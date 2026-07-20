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
              href={`/${category}/${tool.slug}`}
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
    </div>
  );
}
