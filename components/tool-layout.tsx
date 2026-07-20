"use client";

import React from "react";
import Head from "next/head";
import WinDialog from "./win-dialog";
import { useLanguage } from "@/lib/i18n";
import { toolTranslations } from "@/lib/tool-translations";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export interface ToolLayoutProps {
  title: string;
  description: string;
  directAnswer: string;
  category: "numerology" | "love" | "couple-names" | "wedding" | "relationship" | "ai-generators";
  toolSlug: string;
  howItWorks: HowToStep[];
  faqs: FAQItem[];
  relatedTools: { name: string; href: string }[];
  educationalContent: React.ReactNode;
  children: React.ReactNode; // The interactive tool goes here
}

export default function ToolLayout({
  title,
  description,
  directAnswer,
  category,
  toolSlug,
  howItWorks,
  faqs,
  relatedTools,
  educationalContent,
  children
}: ToolLayoutProps) {
  const { language, t } = useLanguage();

  // Load translations dynamically for this specific tool at runtime on client side
  const localized = toolTranslations[language]?.[toolSlug];

  const displayTitle = localized?.title || title;
  const displayDesc = localized?.desc || description;
  const displayDirectAnswer = localized?.directAnswer || directAnswer;
  const displayHowItWorks = localized?.howItWorks || howItWorks;
  const displayFaqs = localized?.faqs || faqs;
  const displayEducationalBody = localized?.educationalBody || null;
  const displayEducationalTitle = localized?.educationalTitle || null;

  // Generate Schema JSON-LD objects
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": displayTitle,
    "operatingSystem": "All",
    "applicationCategory": "Application",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to use the ${displayTitle}`,
    "step": displayHowItWorks.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://astroromantic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.charAt(0).toUpperCase() + category.slice(1),
        "item": `https://astroromantic.com/${category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": displayTitle,
        "item": `https://astroromantic.com/${category}/${toolSlug}`
      }
    ]
  };

  // Localize related tool names if available
  const localizedRelatedTools = relatedTools.map((tool) => {
    const slug = tool.href.split("/").pop() || "";
    const nameTranslation = toolTranslations[language]?.[slug]?.title;
    return {
      name: nameTranslation || tool.name,
      href: tool.href
    };
  });

  return (
    <>
      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Breadcrumbs (Visual) */}
        <nav className="text-xs text-zinc-500 flex items-center space-x-2">
          <a href="/" className="hover:text-zinc-300">Home</a>
          <span>/</span>
          <a href={`/${category}`} className="hover:text-zinc-300 capitalize">{category.replace("-", " ")}</a>
          <span>/</span>
          <span className="text-zinc-400 font-semibold">{displayTitle}</span>
        </nav>

        {/* 3 & 4. The Interactive Tool & Results Section */}
        <div className="w-full">
          <WinDialog
            title={`${displayTitle}.exe`}
            onClose={() => window.location.href = `/${category}`}
            positionMode="relative"
          >
            {children}
          </WinDialog>
        </div>

        {/* 1. H1 Header */}
        <div className="text-center space-y-4 pt-4 border-t border-white/5">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-rose-300 to-purple-400 bg-clip-text text-transparent">
            {displayTitle}
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">{displayDesc}</p>
        </div>

        {/* 2. Direct Answer Block */}
        <div className="border border-amber-500/20 bg-amber-500/5 rounded-2xl p-6 text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto shadow-inner text-center">
          <span className="font-semibold text-amber-400 block mb-1 text-xs tracking-widest uppercase">
            {t.sectionQuickAnswer}
          </span>
          <p>{displayDirectAnswer}</p>
        </div>

        {/* 5. How It Works */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200">
            {t.sectionHowItWorks}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {displayHowItWorks.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-5 relative">
                <div className="absolute top-4 right-4 text-3xl font-bold text-white/5 font-serif">
                  {idx + 1}
                </div>
                <h3 className="font-medium text-amber-400 mb-2 text-sm">{step.name}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Educational Content (EEAT) */}
        <div className="prose prose-invert max-w-none text-zinc-400 text-xs sm:text-sm leading-relaxed space-y-4">
          {displayEducationalTitle && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-zinc-200">{displayEducationalTitle}</h3>
              <div>{displayEducationalBody}</div>
            </div>
          )}
          {!displayEducationalTitle && educationalContent}
        </div>

        {/* 6. FAQ Section */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200">
            {t.sectionFaq}
          </h2>
          <div className="space-y-4">
            {displayFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-5">
                <h3 className="font-medium text-zinc-200 text-sm mb-2 flex items-start">
                  <span className="text-rose-400 mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Related Tools */}
        <div className="border-t border-white/5 pt-8">
          <h2 className="font-serif text-lg font-semibold text-zinc-300 mb-4">
            {t.sectionRelatedTools}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {localizedRelatedTools.map((tool, idx) => (
              <a
                key={idx}
                href={tool.href}
                className="bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-white/10 rounded-2xl p-4 transition-all text-sm font-medium text-zinc-300 hover:text-amber-400 flex items-center justify-between"
              >
                <span>{tool.name}</span>
                <span className="text-xs text-zinc-500">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
