import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sparkles, Heart, Star, Compass, Layers, Users } from "lucide-react";

const SITE_URL = "https://astroromantic.com";

const categoryMeta: Record<string, { title: string; description: string }> = {
  numerology: {
    title: "Numerology Calculators — Life Path, Destiny & More | AstroRomantic",
    description: "Free online numerology calculators: Life Path, Name Numerology, Chaldean, Destiny Number, Soul Urge, Lucky Number, and more. Instant results with detailed interpretations.",
  },
  love: {
    title: "Love & Compatibility Calculators — Free Match Tests | AstroRomantic",
    description: "Calculate your love compatibility, zodiac match, soulmate score, and relationship chemistry. Free tools powered by numerology and astrology.",
  },
  "couple-names": {
    title: "Couple Name Generators — Ship Names & Hashtags | AstroRomantic",
    description: "Generate couple names, ship names, nicknames, hashtags, and matching usernames. Fun tools for couples and social media.",
  },
  wedding: {
    title: "Wedding Planning Tools — Date, Budget & Countdown | AstroRomantic",
    description: "Free wedding planning calculators: hashtag generator, date numerology, countdown timer, and budget planner. Plan your perfect day.",
  },
  relationship: {
    title: "Relationship Quizzes & Calculators | AstroRomantic",
    description: "Take relationship quizzes: love language, relationship health score, anniversary calculator, and duration tracker. Free instant results.",
  },
  "ai-generators": {
    title: "AI Love Letter & Vow Generators — Free Templates | AstroRomantic",
    description: "Generate love letters, romantic messages, wedding vows, anniversary wishes, and proposal speeches with AI-powered templates. Free and instant.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  const canonicalUrl = `${SITE_URL}/${category}/`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "AstroRomantic",
      type: "website",
    },
    twitter: { card: "summary", title: meta.title, description: meta.description },
  };
}

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

export function generateStaticParams() {
  return Object.keys(categoryToolsMap).map((category) => ({
    category,
  }));
}

import CategoryHubClient from "@/components/category-hub-client";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const tools = categoryToolsMap[category];

  if (!tools) {
    notFound();
  }

  return <CategoryHubClient category={category} tools={tools} />;
}
