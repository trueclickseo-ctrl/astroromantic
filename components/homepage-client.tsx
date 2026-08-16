"use client";

import React from "react";
import { HeroSection } from "./home/hero-section";
import { KundliMatchingSpotlight } from "./home/kundli-matching-spotlight";
import { TodaysAstrologyPrediction } from "./home/todays-astrology-prediction";
import { CosmicInsightCard } from "./home/cosmic-insight-card";
import { QuickLinks } from "./home/quick-links";

export default function HomepageClient() {
  return (
    <div className="flex-1 flex flex-col space-y-8 py-4 px-2 sm:px-4 max-w-7xl mx-auto w-full font-sans">
      {/* 1. Animated Hero Section (Headline, Subhead, CTAs, Stats Row, Astrology Composition) */}
      <HeroSection />

      {/* 2. Featured Spotlight: Kundli Matching / Gun Milan (36 Points) */}
      <KundliMatchingSpotlight />

      {/* 3. Today's Astrology Prediction Section (12 Zodiac Signs Grid) */}
      <TodaysAstrologyPrediction />

      {/* 4. Cosmic Insight & 4 Feature Pillars Container */}
      <CosmicInsightCard />

      {/* 5. Bottom Quick Access Links Bar */}
      <QuickLinks />
    </div>
  );
}
