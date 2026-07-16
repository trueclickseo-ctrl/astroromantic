import React from "react";
import { notFound } from "next/navigation";
import { toolRegistry } from "@/lib/tool-registry";
import ToolLayout from "@/components/tool-layout";
import {
  LifePathCalculator,
  NameNumerologyCalculator,
  ChaldeanCalculator,
  LoveCalculatorComponent,
  ZodiacLoveCalculatorComponent
} from "@/components/calculators";
import { GenericCalculatorComponent, AiGeneratorComponent } from "@/components/calculators/generic";

interface PageProps {
  params: Promise<{
    category: string;
    tool: string;
  }>;
}

export function generateStaticParams() {
  const allRoutes: { category: string; tool: string }[] = [
    // Numerology
    { category: "numerology", tool: "life-path-calculator" },
    { category: "numerology", tool: "name-numerology-calculator" },
    { category: "numerology", tool: "chaldean-numerology-calculator" },
    { category: "numerology", tool: "destiny-number-calculator" },
    { category: "numerology", tool: "soul-urge-number-calculator" },
    { category: "numerology", tool: "baby-name-numerology-calculator" },
    { category: "numerology", tool: "marriage-numerology-calculator" },
    { category: "numerology", tool: "lucky-number-calculator" },
    // Love
    { category: "love", tool: "love-calculator" },
    { category: "love", tool: "love-percentage-calculator" },
    { category: "love", tool: "zodiac-love-calculator" },
    { category: "love", tool: "relationship-compatibility-calculator" },
    { category: "love", tool: "marriage-compatibility-calculator" },
    { category: "love", tool: "soulmate-calculator" },
    // Couple Names
    { category: "couple-names", tool: "couple-name-combiner" },
    { category: "couple-names", tool: "ship-name-generator" },
    { category: "couple-names", tool: "nickname-generator" },
    { category: "couple-names", tool: "couple-hashtag-generator" },
    { category: "couple-names", tool: "couple-username-generator" },
    // Wedding
    { category: "wedding", tool: "wedding-hashtag-generator" },
    { category: "wedding", tool: "wedding-date-numerology" },
    { category: "wedding", tool: "wedding-countdown" },
    { category: "wedding", tool: "wedding-budget" },
    // Relationship
    { category: "relationship", tool: "anniversary-calculator" },
    { category: "relationship", tool: "relationship-duration" },
    { category: "relationship", tool: "love-language-quiz" },
    { category: "relationship", tool: "relationship-health-score" },
    // AI Generators
    { category: "ai-generators", tool: "love-letter-generator" },
    { category: "ai-generators", tool: "romantic-message-generator" },
    { category: "ai-generators", tool: "wedding-vow-generator" },
    { category: "ai-generators", tool: "anniversary-wish-generator" },
    { category: "ai-generators", tool: "proposal-speech-generator" },
  ];
  return allRoutes;
}

export default async function ToolPage({ params }: PageProps) {
  const resolvedParams = await params;
  const toolSlug = resolvedParams.tool;
  const category = resolvedParams.category;

  const toolConfig = toolRegistry[toolSlug];

  if (!toolConfig || toolConfig.category !== category) {
    // If not in static registry, let's make a virtual configuration so that *all* 35 tools work automatically!
    // This allows complete crawlability and indexability.
    const title = toolSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    let description = `Free online ${title} tool. Get instant results and calculations.`;
    let directAnswer = `The ${title} provides precise results based on your inputs. Use this calculator to immediately evaluate and receive guidance on your relationship, wedding, or numerology queries.`;
    let howItWorks = [
      { name: "Input Details", text: "Fill out the required inputs inside the calculator form." },
      { name: "Process", text: "The generator processes the inputs matching vibrational frequencies." },
      { name: "Result", text: "Receive your custom calculations instantly, showing scores and options." }
    ];
    let faqs = [
      { question: `What is the ${title}?`, answer: `It is an interactive calculator designed to compute values for your search queries.` },
      { question: `How is the ${title} calculated?`, answer: "It uses standard relationship algorithms and numerological tables." },
      { question: "Is this tool free?", answer: "Yes, it is entirely free to use with no registrations required." },
      { question: "Can I share my results?", answer: "Yes! You can copy results to your clipboard to send to your loved ones." },
      { question: "How often can I use it?", answer: "You can run as many calculations as you need." }
    ];
    let educationalBody = `This tool calculates metrics using ancient calculations and contemporary relationship theories. By studying these elements, we can build stable paths, discover hidden traits, and plan meaningful events.`;

    if (toolSlug.includes("marriage")) {
      description = "Check your marital suitability and alignment across financial, lifestyle, and family planning metrics.";
      directAnswer = "The Marriage Compatibility Calculator measures alignment in three primary areas: Financial Alignment, Lifestyle Harmony, and Family Planning Sync. Marriage requires strong cooperation, and this tool assesses how well your goals merge.";
      howItWorks = [
        { name: "Enter Partner Names", text: "Input your first name and your partner's first name." },
        { name: "Calculate Alignment", text: "The algorithm calculates key marital pillars including financial alignment and lifestyle harmony based on name frequencies." },
        { name: "View Marriage Report", text: "Instantly see your overall marriage readiness score and specific pillar percentages." }
      ];
      faqs[1] = { question: "How is marriage compatibility calculated?", answer: "It assesses core pillars (finance, lifestyle, family sync) using Pythagorean sound frequencies mapped to your names." };
      educationalBody = "Marriage compatibility goes beyond affection; it requires alignment on daily life choices. This tool studies the phonetic frequencies of both names to gauge alignment across financial plans, domestic lifestyles, and family planning timelines, helping couples understand their strengths.";
    } else if (toolSlug.includes("soulmate") || toolSlug.includes("flame")) {
      description = "Evaluate spiritual affinity, Twin Flame resonance, and karmic ties based on name vibrations.";
      directAnswer = "The Soulmate Calculator analyzes cosmic resonance to check if your partnership carries Twin Flame or Karmic markings. It evaluates the spiritual frequency between your names.";
      howItWorks = [
        { name: "Enter Partner Names", text: "Input both names to initiate the spiritual vibration scanner." },
        { name: "Analyze Soul Resonance", text: "The scanner computes the spiritual resonance score and connection type." },
        { name: "View Karmic Connection", text: "See whether your connection is classified as a Twin Flame, Karmic Soulmate, or Destined Partner." }
      ];
      faqs[1] = { question: "What is a Twin Flame resonance?", answer: "It indicates a perfect mirror-soul connection, sparking rapid spiritual growth and deep mutual recognition." };
      educationalBody = "The concept of soulmates suggests that some spirits are energetically bound to meet and learn together. By analyzing the name inputs, this calculator maps their frequencies onto ancient kabbalistic sound matrices to identify specific karmic ties and twin flame alignment.";
    } else if (toolSlug.includes("duration")) {
      description = "Calculate the precise amount of time you have been together down to the exact second.";
      directAnswer = "The Relationship Duration Calculator computes the total duration of your relationship, breaking down the elapsed time into total days, weeks, hours, minutes, and seconds.";
      howItWorks = [
        { name: "Select Anniversary Date", text: "Pick the day you and your partner officially started your relationship." },
        { name: "Break Down Time", text: "The calculator compares the selected date with the current moment." },
        { name: "Get Total Duration", text: "See your total elapsed time instantly broken down into years, weeks, days, hours, and seconds." }
      ];
      educationalBody = "Understanding the sheer volume of time spent together can highlight the scale of a commitment. This calculator converts dates into Unix timestamps, computing exact durations and converting them into days, weeks, hours, and seconds.";
    } else if (toolSlug.includes("anniversary")) {
      description = "Calculate your anniversary milestones, next anniversary countdown, and traditional landmark gifts.";
      directAnswer = "The Anniversary Calculator tracks your relationship timeline, displaying years, months, and days elapsed, along with countdowns to the next celebration and traditional gift ideas.";
      howItWorks = [
        { name: "Select Milestone Date", text: "Input your relationship start date or wedding anniversary date." },
        { name: "Compute Milestones", text: "The tool calculates years celebrated and counts down to the next upcoming anniversary." },
        { name: "See Traditional Gifts", text: "Find traditional gift ideas matching your current anniversary year (such as Paper, Cotton, or Silver)." }
      ];
      educationalBody = "Anniversaries celebrate endurance and growth. By tracking the exact years elapsed, this tool aligns your relationship timeline with traditional wedding gift registries, providing traditional material guides for each milestone year.";
    } else if (toolSlug.includes("health") || toolSlug.includes("score") || toolSlug.includes("quiz") || toolSlug.includes("test")) {
      description = "Take the interactive relationship health assessment to evaluate communication, trust, and future alignment.";
      directAnswer = "The Relationship Health Assessment runs a multi-question check evaluating communication patterns, trust metrics, and shared long-term values to determine relationship strength.";
      howItWorks = [
        { name: "Answer Questionnaire", text: "Select your preferred answers to the multiple-choice relationship scenario questions." },
        { name: "Process Answers", text: "The test evaluates your choices against established relationship therapy metrics." },
        { name: "Read Health Advice", text: "Get an overall compatibility rating score alongside specific actionable growth advice." }
      ];
      faqs[1] = { question: "What does this assessment evaluate?", answer: "It evaluates core communication styles, trust, and future alignment to give you a clear map of relationship growth areas." };
      educationalBody = "Relationship wellness is built on communication habits and value alignment. This assessment leverages standard counselor templates to analyze interactive scenarios and determine focus areas for a stronger, healthier bond.";
    }

    const virtualConfig = {
      title,
      description,
      directAnswer,
      category: category as any,
      toolSlug,
      howItWorks,
      faqs,
      educationalTitle: `Understanding the Science behind ${title}`,
      educationalBody,
      relatedTools: [
        { name: "Life Path Calculator", href: "/numerology/life-path-calculator" },
        { name: "Love Calculator", href: "/love/love-calculator" }
      ]
    };

    return (
      <ToolLayout
        title={virtualConfig.title}
        description={virtualConfig.description}
        directAnswer={virtualConfig.directAnswer}
        category={virtualConfig.category}
        toolSlug={toolSlug}
        howItWorks={virtualConfig.howItWorks}
        faqs={virtualConfig.faqs}
        relatedTools={virtualConfig.relatedTools}
        educationalContent={
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-zinc-200">{virtualConfig.educationalTitle}</h3>
            <p>{virtualConfig.educationalBody}</p>
          </div>
        }
      >
        {category === "ai-generators" ? (
          <AiGeneratorComponent slug={toolSlug} />
        ) : (
          toolSlug.includes("love") || toolSlug.includes("compat") || toolSlug.includes("couple") || toolSlug.includes("soulmate") ? (
            <LoveCalculatorComponent />
          ) : (
            <GenericCalculatorComponent slug={toolSlug} />
          )
        )}
      </ToolLayout>
    );
  }

  // Choose the interactive calculator component
  let calculatorNode: React.ReactNode;
  if (toolSlug === "life-path-calculator") {
    calculatorNode = <LifePathCalculator />;
  } else if (toolSlug === "name-numerology-calculator") {
    calculatorNode = <NameNumerologyCalculator />;
  } else if (toolSlug === "chaldean-numerology-calculator") {
    calculatorNode = <ChaldeanCalculator />;
  } else if (toolSlug.includes("love") || toolSlug.includes("compat") || toolSlug.includes("couple") || toolSlug.includes("soulmate")) {
    calculatorNode = <LoveCalculatorComponent />;
  } else if (toolSlug === "zodiac-love-calculator") {
    calculatorNode = <ZodiacLoveCalculatorComponent />;
  } else {
    calculatorNode = <GenericCalculatorComponent slug={toolSlug} />;
  }

  return (
    <ToolLayout
      title={toolConfig.title}
      description={toolConfig.description}
      directAnswer={toolConfig.directAnswer}
      category={toolConfig.category}
      toolSlug={toolSlug}
      howItWorks={toolConfig.howItWorks}
      faqs={toolConfig.faqs}
      relatedTools={toolConfig.relatedTools}
      educationalContent={
        <div className="space-y-4">
          <h3 className="text-lg font-serif font-bold text-zinc-200">{toolConfig.educationalTitle}</h3>
          <p>{toolConfig.educationalBody}</p>
        </div>
      }
    >
      {calculatorNode}
    </ToolLayout>
  );
}
