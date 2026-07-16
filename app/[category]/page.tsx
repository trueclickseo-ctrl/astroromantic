import React from "react";
import { notFound } from "next/navigation";
import { Sparkles, Heart, Star, Compass, Layers, Users } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const categoryToolsMap: Record<string, { title: string; desc: string; slug: string }[]> = {
  numerology: [
    { title: "Life Path Number Calculator", desc: "Calculate your core identity and life roadmap.", slug: "life-path-calculator" },
    { title: "Name Numerology Calculator", desc: "Pythagorean analysis of your full name's letters.", slug: "name-numerology-calculator" },
    { title: "Chaldean Numerology Calculator", desc: "Ancient Chaldean sound-vibration analysis.", slug: "chaldean-numerology-calculator" },
    { title: "Destiny Number Calculator", desc: "Unlock the cosmic purpose written in your birth name.", slug: "destiny-number-calculator" },
    { title: "Soul Urge Number Calculator", desc: "Find your inner desires and heart's callings.", slug: "soul-urge-number-calculator" },
    { title: "Baby Name Numerology Calculator", desc: "Pick a lucky name with high vibes for your baby.", slug: "baby-name-numerology-calculator" },
    { title: "Marriage Numerology Calculator", desc: "Find the best, most harmonious wedding date.", slug: "marriage-numerology-calculator" },
    { title: "Lucky Number Calculator", desc: "Discover the numeric markers that guide your fortune.", slug: "lucky-number-calculator" }
  ],
  love: [
    { title: "Love Calculator", desc: "Enter names to discover your energetic match score.", slug: "love-calculator" },
    { title: "Love Percentage Calculator", desc: "Calculate the strength of your relationship affinity.", slug: "love-percentage-calculator" },
    { title: "Zodiac Love Calculator", desc: "Determine cosmological sun-sign element match.", slug: "zodiac-love-calculator" },
    { title: "Relationship Compatibility Calculator", desc: "Analyze personality dynamics between partners.", slug: "relationship-compatibility-calculator" },
    { title: "Marriage Compatibility Calculator", desc: "Check alignment for lifelong commitment.", slug: "marriage-compatibility-calculator" },
    { title: "Soulmate Calculator", desc: "Calculate if your connection carries soulmate markings.", slug: "soulmate-calculator" }
  ],
  "couple-names": [
    { title: "Couple Name Combiner", desc: "Blend your names into a unique combination.", slug: "couple-name-combiner" },
    { title: "Ship Name Generator", desc: "Generate ship names for celebrity pairings or you.", slug: "ship-name-generator" },
    { title: "Nickname Generator", desc: "Find cute terms of endearment for couples.", slug: "nickname-generator" },
    { title: "Couple Hashtag Generator", desc: "Create hashtags for social sharing and posts.", slug: "couple-hashtag-generator" },
    { title: "Couple Username Generator", desc: "Generate joint Instagram/social handles.", slug: "couple-username-generator" }
  ],
  wedding: [
    { title: "Wedding Hashtag Generator", desc: "Custom wedding tags for Instagram & photo prints.", slug: "wedding-hashtag-generator" },
    { title: "Wedding Date Numerology", desc: "Calculate the numerology of your tentative date.", slug: "wedding-date-numerology" },
    { title: "Wedding Countdown Calculator", desc: "Visual counter telling you days until the big event.", slug: "wedding-countdown" },
    { title: "Wedding Budget Calculator", desc: "Allocate costs across venues, rings, and florals.", slug: "wedding-budget" }
  ],
  relationship: [
    { title: "Anniversary Calculator", desc: "Keep track of milestones and years together.", slug: "anniversary-calculator" },
    { title: "Relationship Duration", desc: "Calculate precisely how long you have been together.", slug: "relationship-duration" },
    { title: "Love Language Quiz", desc: "Find your expression style: words, quality time, acts.", slug: "love-language-quiz" },
    { title: "Relationship Health Score", desc: "Assess communication, trust, and connection.", slug: "relationship-health-score" }
  ],
  "ai-generators": [
    { title: "Love Letter Generator", desc: "Write heartfelt declarations using Claude AI.", slug: "love-letter-generator" },
    { title: "Romantic Message Generator", desc: "Quick daily notes to make your partner smile.", slug: "romantic-message-generator" },
    { title: "Wedding Vow Generator", desc: "Create romantic, customized vows for your ceremony.", slug: "wedding-vow-generator" },
    { title: "Anniversary Wish Generator", desc: "Perfect text or card write-ups for yearly milestones.", slug: "anniversary-wish-generator" },
    { title: "Proposal Speech Generator", desc: "A speech built on your memories for the proposal.", slug: "proposal-speech-generator" }
  ]
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const tools = categoryToolsMap[category];

  if (!tools) {
    notFound();
  }

  const categoryIcons: Record<string, React.ReactNode> = {
    numerology: <Compass className="w-8 h-8 text-amber-400" />,
    love: <Heart className="w-8 h-8 text-rose-400" />,
    "couple-names": <Users className="w-8 h-8 text-indigo-400" />,
    wedding: <Layers className="w-8 h-8 text-emerald-400" />,
    relationship: <Star className="w-8 h-8 text-cyan-400" />,
    "ai-generators": <Sparkles className="w-8 h-8 text-purple-400" />
  };

  const title = category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex p-3 bg-white/5 border border-white/10 rounded-3xl mb-2">
          {categoryIcons[category]}
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-rose-300 to-purple-400 bg-clip-text text-transparent">
          {title} Hub
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
          Explore our collection of expert-grade {title.toLowerCase()} calculators, tools, and generators designed to bring clarity, fun, and insight to your life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <a
            key={idx}
            href={`/${category}/${tool.slug}`}
            className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group h-48 relative overflow-hidden"
          >
            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                {tool.title}
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                {tool.desc}
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 group-hover:text-amber-400 transition-colors">
              <span>Open Tool</span>
              <span>&rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
