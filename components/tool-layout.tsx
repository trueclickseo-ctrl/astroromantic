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
  directAnswer?: string;
  category: "numerology" | "love" | "couple-names" | "wedding" | "relationship" | "ai-generators";
  toolSlug: string;
  howItWorks?: HowToStep[];
  faqs?: FAQItem[];
  relatedTools?: { name: string; href: string }[];
  educationalContent?: React.ReactNode;
  closingContent?: React.ReactNode;
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
  relatedTools = [],
  educationalContent,
  closingContent,
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
    "mainEntity": (displayFaqs || []).map((faq) => ({
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
    "step": (displayHowItWorks || []).map((step, idx) => ({
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
        "item": "https://www.astroromantic.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.charAt(0).toUpperCase() + category.slice(1),
        "item": `https://www.astroromantic.com/${category}/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": displayTitle,
        "item": `https://www.astroromantic.com/${category}/${toolSlug}/`
      }
    ]
  };

  // Localize related tool names if available
  const localizedRelatedTools = (relatedTools || []).map((tool) => {
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
      {displayFaqs && displayFaqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {displayHowItWorks && displayHowItWorks.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-black">
        {/* Breadcrumbs (Visual) */}
        <nav className="text-xs font-mono font-bold text-zinc-700 flex items-center space-x-2">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span>/</span>
          <a href={`/${category}/`} className="hover:text-black transition-colors capitalize">{category.replace("-", " ")}</a>
          <span>/</span>
          <span className="text-black font-extrabold">{displayTitle}</span>
        </nav>

        {/* The Interactive Tool Container */}
        <div className="w-full">
          <WinDialog
            title={`${displayTitle}.exe`}
            onClose={() => window.location.href = `/${category}/`}
            positionMode="relative"
          >
            {children}
          </WinDialog>
        </div>

        {/* H1 Header */}
        <div className="text-center space-y-3 pt-4 border-t-2 border-black">
          <h1 className="font-mono text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
            {displayTitle}
          </h1>
          <p className="text-sm sm:text-base text-zinc-800 max-w-2xl mx-auto font-sans leading-relaxed font-medium">
            {displayDesc}
          </p>
        </div>

        {/* Direct Answer / Quick Overview Block */}
        {displayDirectAnswer ? (
          <div className="bg-amber-100 border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] text-center space-y-2 max-w-3xl mx-auto">
            <span className="font-mono font-bold text-amber-900 text-xs tracking-widest uppercase block">
              {t.sectionQuickAnswer}
            </span>
            <p className="text-sm sm:text-base text-zinc-900 font-sans leading-relaxed font-medium">
              {displayDirectAnswer}
            </p>
          </div>
        ) : null}

        {/* How It Works Steps */}
        {displayHowItWorks && displayHowItWorks.length > 0 ? (
          <div className="space-y-6 bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
            <h2 className="font-mono text-xl sm:text-2xl font-extrabold border-b-2 border-black pb-3 text-black">
              {t.sectionHowItWorks}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {displayHowItWorks.map((step, idx) => (
                <div key={idx} className="bg-[#FAF7F2] border-2 border-black rounded-xl p-5 relative shadow-[2px_2px_0px_#000000] space-y-2">
                  <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-mono font-bold text-black text-sm sm:text-base">{step.name}</h3>
                  <p className="text-zinc-800 text-xs sm:text-sm font-sans leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Educational Content Section */}
        {(displayEducationalBody || educationalContent) && (
          <div className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4 text-black font-sans leading-relaxed">
            {displayEducationalTitle && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-mono font-extrabold text-black border-b-2 border-black pb-3">
                  {displayEducationalTitle}
                </h3>
                <div className="text-sm sm:text-base text-zinc-800 space-y-4 leading-relaxed">{displayEducationalBody}</div>
              </div>
            )}
            {!displayEducationalTitle && (
              <div className="text-sm sm:text-base text-zinc-800 space-y-4 leading-relaxed">{educationalContent}</div>
            )}
          </div>
        )}

        {/* FAQ Section */}
        {displayFaqs && displayFaqs.length > 0 ? (
          <div className="bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
            <h2 className="font-mono text-xl sm:text-2xl font-extrabold border-b-2 border-black pb-3 text-black">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {displayFaqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FAF7F2] border-2 border-black rounded-xl p-5 space-y-2 shadow-[2px_2px_0px_#000000]">
                  <h3 className="font-mono font-bold text-black text-sm sm:text-base flex items-start">
                    <span className="text-rose-600 mr-2 font-extrabold">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-zinc-800 text-xs sm:text-sm pl-6 font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Closing Paragraph */}
        {closingContent ? (
          <div className="bg-white border-3 border-black rounded-2xl p-6 text-zinc-800 text-sm sm:text-base leading-relaxed shadow-[4px_4px_0px_#000000]">
            {closingContent}
          </div>
        ) : null}

        {/* Related Tools */}
        {localizedRelatedTools && localizedRelatedTools.length > 0 ? (
          <div className="bg-white border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="font-mono text-base sm:text-lg font-bold text-black">
              {t.sectionRelatedTools}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {localizedRelatedTools.map((tool, idx) => (
                <a
                  key={idx}
                  href={tool.href}
                  className="bg-[#FAF7F2] hover:bg-black hover:text-white border-2 border-black rounded-xl p-4 transition-all text-xs sm:text-sm font-mono font-bold text-black flex items-center justify-between shadow-[2px_2px_0px_#000000]"
                >
                  <span>{tool.name}</span>
                  <span className="text-xs">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
