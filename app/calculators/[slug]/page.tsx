import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CALCULATORS_REGISTRY, CalculatorItem } from "@/lib/calculator-registry";
import { CalculatorLayout } from "@/components/calculators/shared-ui";
import {
  MoonSignCalculatorComp, SunSignCalculatorComp, NakshatraCalculatorComp,
  LagnaCalculatorComp, NavamsaChartComp, MoonPhaseComp,
  MangalDoshaComp, KaalSarpDoshaComp, SadeSatiComp,
  VimshottariDashaComp, PitraDoshaComp, KundliMatchingComp,
  AtmakarakaDarakarakaComp, IshtaDevataComp, KPHoraryComp,
  KPSubLordComp, KPRulingPlanetsComp, GemstoneRecommenderComp,
  RudrakshaRecommenderComp, BabyNameComp, BirthPanchangComp,
  AyanamsaComp
} from "@/components/calculators/astrology-calculators";
import {
  LifePathComp, NameNumerologyComp, MobileNumberComp,
  VehicleNumberComp, HouseNumberComp, BusinessNameComp,
  PersonalYearComp, LoShuGridComp, NumerologyLoveCompatibilityComp,
  NameCorrectionComp
} from "@/components/calculators/numerology-calculators";
import { LoveCalculatorComponent } from "@/components/calculators";

const SITE_URL = "https://www.astroromantic.com";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CALCULATORS_REGISTRY).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calc = CALCULATORS_REGISTRY[slug];
  if (!calc) return {};

  const canonicalUrl = `${SITE_URL}/calculators/${slug}/`;

  return {
    title: calc.seoTitle,
    description: calc.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: calc.seoTitle,
      description: calc.metaDescription,
      url: canonicalUrl,
      siteName: "AstroRomantic",
      type: "website"
    },
    twitter: {
      card: "summary",
      title: calc.seoTitle,
      description: calc.metaDescription
    }
  };
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calc = CALCULATORS_REGISTRY[slug];

  if (!calc) {
    notFound();
  }

  // Choose appropriate interactive calculator component node
  let componentNode: React.ReactNode = null;

  switch (slug) {
    // Astrology 1-23
    case "moon-sign": componentNode = <MoonSignCalculatorComp />; break;
    case "sun-sign": componentNode = <SunSignCalculatorComp />; break;
    case "nakshatra": componentNode = <NakshatraCalculatorComp />; break;
    case "lagna": componentNode = <LagnaCalculatorComp />; break;
    case "navamsa-chart": componentNode = <NavamsaChartComp />; break;
    case "moon-phase": componentNode = <MoonPhaseComp />; break;
    case "mangal-dosha": componentNode = <MangalDoshaComp />; break;
    case "kaal-sarp-dosha": componentNode = <KaalSarpDoshaComp />; break;
    case "sade-sati": componentNode = <SadeSatiComp />; break;
    case "vimshottari-dasha": componentNode = <VimshottariDashaComp />; break;
    case "pitra-dosha": componentNode = <PitraDoshaComp />; break;
    case "kundli-matching": componentNode = <KundliMatchingComp />; break;
    case "love-calculator": componentNode = <LoveCalculatorComponent />; break;
    case "atmakaraka-darakaraka": componentNode = <AtmakarakaDarakarakaComp />; break;
    case "ishta-devata": componentNode = <IshtaDevataComp />; break;
    case "kp-horary": componentNode = <KPHoraryComp />; break;
    case "kp-sub-lord": componentNode = <KPSubLordComp />; break;
    case "kp-ruling-planets": componentNode = <KPRulingPlanetsComp />; break;
    case "gemstone-recommender": componentNode = <GemstoneRecommenderComp />; break;
    case "rudraksha-recommender": componentNode = <RudrakshaRecommenderComp />; break;
    case "baby-name": componentNode = <BabyNameComp />; break;
    case "birth-panchang": componentNode = <BirthPanchangComp />; break;
    case "ayanamsa": componentNode = <AyanamsaComp />; break;
    // Numerology 24-33
    case "life-path": componentNode = <LifePathComp />; break;
    case "name-numerology": componentNode = <NameNumerologyComp />; break;
    case "mobile-number": componentNode = <MobileNumberComp />; break;
    case "vehicle-number": componentNode = <VehicleNumberComp />; break;
    case "house-number": componentNode = <HouseNumberComp />; break;
    case "business-name": componentNode = <BusinessNameComp />; break;
    case "personal-year": componentNode = <PersonalYearComp />; break;
    case "lo-shu-grid": componentNode = <LoShuGridComp />; break;
    case "numerology-love-compatibility": componentNode = <NumerologyLoveCompatibilityComp />; break;
    case "name-correction": componentNode = <NameCorrectionComp />; break;
    default: componentNode = <LifePathComp />; break;
  }

  // Structured JSON-LD Data
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: calc.seoTitle,
    description: calc.metaDescription,
    url: `${SITE_URL}/calculators/${slug}/`
  };

  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: calc.name,
    operatingSystem: "All",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD"
    }
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators/` },
      { "@type": "ListItem", position: 3, name: calc.name, item: `${SITE_URL}/calculators/${slug}/` }
    ]
  };

  const jsonLdFaq = calc.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calc.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      {jsonLdFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}

      <CalculatorLayout
        title={calc.name}
        description={calc.shortDescription}
        category={calc.category}
        slug={calc.slug}
        h1={calc.h1}
        directAnswer={calc.directAnswer}
        howItWorks={calc.howItWorks}
        faqs={calc.faqs}
        educationalTitle={calc.educationalTitle}
        educationalBody={calc.educationalBody}
        relatedCalculators={calc.relatedCalculators}
      >
        {componentNode}
      </CalculatorLayout>
    </>
  );
}
