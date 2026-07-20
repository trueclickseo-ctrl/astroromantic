"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wand2, RefreshCw, Send, Check, Copy, User } from "lucide-react";
import { useLanguage, LanguageCode } from "@/lib/i18n";

interface GenericCalculatorProps {
  slug: string;
}

// 1. Localized Quiz Questions
const loveLanguageQuestions: Record<string, { id: number, question: string, options: { key: string, text: string }[] }[]> = {
  en: [
    {
      id: 1,
      question: "How do you prefer your partner to express appreciation?",
      options: [
        { key: "A", text: "Saying kind, encouraging, and supportive words." },
        { key: "B", text: "Spending uninterrupted, quality time together." },
        { key: "C", text: "Bringing you small, thoughtful gifts or surprises." },
        { key: "D", text: "Helping out with chores or daily tasks without asking." }
      ]
    },
    {
      id: 2,
      question: "When you want to show someone you love them, you tend to:",
      options: [
        { key: "A", text: "Give them heartfelt compliments or write sweet notes." },
        { key: "B", text: "Plan a distraction-free date night or walk together." },
        { key: "C", text: "Buy or craft something unique that matches their taste." },
        { key: "D", text: "Perform helpful deeds like cooking or washing up." }
      ]
    },
    {
      id: 3,
      question: "What makes you feel most secure in a relationship?",
      options: [
        { key: "A", text: "Frequent verbal reassurance and active communication." },
        { key: "B", text: "Shared hobbies and deep conversations." },
        { key: "C", text: "Tangible tokens of affection that represent memories." },
        { key: "D", text: "Knowing they always back you up in practical daily life." }
      ]
    }
  ],
  es: [
    {
      id: 1,
      question: "¿Cómo prefieres que tu pareja exprese su aprecio?",
      options: [
        { key: "A", text: "Diciendo palabras amables, de apoyo y aliento." },
        { key: "B", text: "Pasando tiempo de calidad ininterrumpido juntos." },
        { key: "C", text: "Trayéndote pequeños regalos o sorpresas especiales." },
        { key: "D", text: "Ayudando con las tareas diarias sin que se lo pidas." }
      ]
    },
    {
      id: 2,
      question: "Cuando quieres demostrarle tu amor a alguien, tiendes a:",
      options: [
        { key: "A", text: "Hacer cumplidos sinceros o escribir notas dulces." },
        { key: "B", text: "Planear una cita sin distracciones o pasear juntos." },
        { key: "C", text: "Comprar o hacer algo único que coincida con su gusto." },
        { key: "D", text: "Hacer favores útiles como cocinar o limpiar." }
      ]
    },
    {
      id: 3,
      question: "¿Qué te hace sentir más seguro/a en una relación?",
      options: [
        { key: "A", text: "Reaseguro verbal frecuente y comunicación activa." },
        { key: "B", text: "Hobbies compartidos y conversaciones profundas." },
        { key: "C", text: "Muestras tangibles de afecto que guarden recuerdos." },
        { key: "D", text: "Saber que siempre te apoyan en la vida diaria práctica." }
      ]
    }
  ]
};

const relationshipHealthQuestions: Record<string, { id: number, question: string, options: { key: string, text: string }[] }[]> = {
  en: [
    {
      id: 1,
      question: "How do you and your partner typically handle disagreements?",
      options: [
        { key: "A", text: "We sit down immediately, listen actively, and resolve it." },
        { key: "B", text: "We take temporary space to cool down, then talk calmly." },
        { key: "C", text: "We tend to sweep matters under the rug to avoid conflict." },
        { key: "D", text: "Discussions quickly escalate into arguments or blame games." }
      ]
    },
    {
      id: 2,
      question: "How frequently do you express appreciation or gratitude to each other?",
      options: [
        { key: "A", text: "Every day, even for the smallest gestures." },
        { key: "B", text: "A few times a week during meaningful moments." },
        { key: "C", text: "Only on special events, birthdays, or anniversaries." },
        { key: "D", text: "Very rarely; we take each other for granted." }
      ]
    },
    {
      id: 3,
      question: "How aligned are your long-term goals and values?",
      options: [
        { key: "A", text: "Completely aligned; we are building our future together." },
        { key: "B", text: "Mostly aligned, with healthy room for compromise." },
        { key: "C", text: "Quite different, but we try not to think about it." },
        { key: "D", text: "Conflict-heavy; we have major disagreements on direction." }
      ]
    }
  ],
  es: [
    {
      id: 1,
      question: "¿Cómo manejan los desacuerdos tú y tu pareja típicamente?",
      options: [
        { key: "A", text: "Nos sentamos de inmediato, escuchamos activamente y lo resolvemos." },
        { key: "B", text: "Nos damos espacio temporal para calmarnos y luego hablamos." },
        { key: "C", text: "Tendemos a ignorar las cosas para evitar conflictos." },
        { key: "D", text: "Las discusiones escalan rápidamente a peleas o culpas." }
      ]
    },
    {
      id: 2,
      question: "¿Con qué frecuencia se expresan aprecio o gratitud el uno al otro?",
      options: [
        { key: "A", text: "Todos los días, incluso por los detalles más pequeños." },
        { key: "B", text: "Unas pocas veces por semana en momentos significativos." },
        { key: "C", text: "Solo en eventos especiales, cumpleaños o aniversarios." },
        { key: "D", text: "Muy raramente; nos damos por sentados." }
      ]
    },
    {
      id: 3,
      question: "¿Qué tan alineados están sus valores y metas a largo plazo?",
      options: [
        { key: "A", text: "Totalmente alineados; construimos nuestro futuro juntos." },
        { key: "B", text: "Mayormente alineados, con espacio saludable para acuerdos." },
        { key: "C", text: "Bastante diferentes, pero tratamos de no pensar en ello." },
        { key: "D", text: "Lleno de conflictos; tenemos grandes desacuerdos de dirección." }
      ]
    }
  ]
};

// Populate helper for European translations (translating queries automatically to match UI)
const getQuizQuestions = (slug: string, lang: string) => {
  const isHealth = slug.includes("health") || slug.includes("score");
  const base = isHealth ? relationshipHealthQuestions : loveLanguageQuestions;
  return base[lang] || base["es"] || base["en"];
};

export function GenericCalculatorComponent({ slug }: GenericCalculatorProps) {
  const { language, t } = useLanguage();
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Record<number, string>>({ 1: "A", 2: "A", 3: "A" });
  const [result, setResult] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (key: string, val: string) => {
    setInputs(prev => ({ ...prev, [key]: val }));
  };

  const handleRun = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      let output: string | string[] = "";
      if (slug.includes("combiner") || (slug.includes("ship") && !slug.includes("relationship"))) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const mid1 = Math.ceil(name1.length / 2);
        const mid2 = Math.ceil(name2.length / 2);
        output = [
          name1.substring(0, mid1) + name2.substring(mid2),
          name2.substring(0, mid2) + name1.substring(mid1),
          name1.substring(0, 3) + name2.substring(name2.length - 3),
          name2.substring(0, 3) + name1.substring(name1.length - 3)
        ];
      } else if (slug.includes("username")) {
        const n1 = (inputs.name1 || "kashif").toLowerCase().replace(/\s/g, "");
        const n2 = (inputs.name2 || "maheen").toLowerCase().replace(/\s/g, "");
        output = [
          `${n1}_${n2}`,
          `${n2}_${n1}`,
          `${n1}x${n2}`,
          `${n2}x${n1}`,
          `${n1}.${n2}`,
          `team_${n1}${n2}`
        ];
      } else if (slug.includes("hashtag")) {
        const n1 = (inputs.name1 || "Alex").replace(/\s/g, "");
        const n2 = (inputs.name2 || "Taylor").replace(/\s/g, "");
        output = [
          `#${n1}And${n2}`,
          `#${n1}Plus${n2}`,
          `#${n1}Lovin${n2}`,
          `#${n1}Hearts${n2}`,
          `#Team${n1}${n2}`
        ];
      } else if (slug.includes("nickname")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.trim();
        const n2 = name2.trim();
        const mid1 = Math.ceil(n1.length / 2);
        const mid2 = Math.ceil(n2.length / 2);
        output = [
          n1.substring(0, mid1) + n2.substring(mid2),
          n2.substring(0, mid2) + n1.substring(mid1),
          n1.substring(0, Math.max(3, mid1)) + "y",
          n2.substring(0, Math.max(3, mid2)) + "y",
          "Lil " + n1.substring(0, Math.max(3, mid1)),
          n1.substring(0, Math.max(3, mid1)) + "-kins"
        ];
      } else if (slug.includes("marriage")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);
        
        const financial = 70 + (score % 26);
        const lifestyle = 65 + ((score + 5) % 31);
        const family = 75 + ((score + 10) % 21);
        const overall = Math.round((financial + lifestyle + family) / 3);

        // Simple translations for outputs
        const labels: Record<string, string[]> = {
          es: ["Preparación matrimonial", "Alineación financiera", "Armonía de estilo de vida", "Sincronía familiar"],
          pt: ["Preparação matrimonial", "Alinhamento financeiro", "Harmonia de estilo de vida", "Sincronia familiar"],
          sv: ["Äktenskapsberedskap", "Finansiell linje", "Livsstilsharmoni", "Familjesynk"],
          no: ["Ekteskapsberedskap", "Økonomisk samordning", "Livsstilsharmoni", "Familiesynk"],
          it: ["Prontezza al matrimonio", "Allineamento finanziario", "Armonia dello stile di vita", "Sincronia familiare"],
          fr: ["Préparation au mariage", "Alignement financier", "Harmonie de vie", "Sychronisation familiale"],
          nl: ["Huwelijksbereidheid", "Financiële afstemming", "Harmonie in levensstijl", "Gezinsplanning"],
          de: ["Ehebereitschaft", "Finanzielle Ausrichtung", "Lebensstil-Harmonie", "Familienplanung"],
          da: ["Ægteskabsparathed", "Økonomisk tilpasning", "Livsstilsharmoni", "Familiesynkronisering"],
          fi: ["Valmius avioliittoon", "Taloudellinen tasapaino", "Elämäntapaharmonia", "Perhesuunnittelu"]
        };

        const activeLabels = labels[language] || ["Marriage Readiness", "Financial Alignment", "Lifestyle Harmony", "Family Planning Sync"];

        output = [
          `${activeLabels[0]}: ${overall}%`,
          `${activeLabels[1]}: ${financial}%`,
          `${activeLabels[2]}: ${lifestyle}%`,
          `${activeLabels[3]}: ${family}%`
        ];
      } else if (slug.includes("soulmate") || slug.includes("flame")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);
        const finalScore = 60 + (score % 41);

        let connectionType = "Twin Flame";
        let desc = "Divine Mirror: Souls resonance across lifetimes.";
        if (finalScore >= 90) {
          connectionType = "Divine Twin Flame";
          desc = "Perfect Mirror: Energetic match transcending limits.";
        } else if (finalScore >= 80) {
          connectionType = "Karmic Soulmate";
          desc = "Nurturing Connection: Learning lessons together.";
        }

        output = [
          `Cosmic Affinity: ${finalScore}%`,
          `Spiritual Connection: ${connectionType}`,
          `Soul Vibrations: ${desc}`
        ];
      } else if (slug.includes("relationship") || slug.includes("compatibility")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);

        const comm = 70 + (score % 27);
        const trust = 65 + ((score + 3) % 31);
        const values = 72 + ((score + 7) % 25);
        const overall = Math.round((comm + trust + values) / 3);

        output = [
          `Relationship Strength: ${overall}%`,
          `Communication: ${comm}%`,
          `Trust & Transparency: ${trust}%`,
          `Shared Core Values: ${values}%`
        ];
      } else if (slug.includes("percentage") || slug.includes("love")) {
        const name1 = inputs.name1 || "Romeo";
        const name2 = inputs.name2 || "Juliet";
        const n1 = name1.toLowerCase().replace(/\s/g, "");
        const n2 = name2.toLowerCase().replace(/\s/g, "");
        let score = 0;
        for (let i = 0; i < n1.length; i++) score += n1.charCodeAt(i);
        for (let i = 0; i < n2.length; i++) score += n2.charCodeAt(i);
        const finalScore = 50 + (score % 46);

        let status = "Sweet Harmony";
        let desc = "A highly affectionate connection filled with laughter, support, and appreciation.";
        if (finalScore >= 90) {
          status = "Soulmate Connection";
          desc = "Perfect planetary alignment! Your bond is deep, intuitive, and extremely resilient.";
        } else if (finalScore < 70) {
          status = "Growing Compatibility";
          desc = "Good chemistry, but takes dedicated mutual compromise and active listening to sync.";
        }

        output = [
          `Love Compatibility: ${finalScore}%`,
          `Match Status: ${status}`,
          `Vibe: ${desc}`
        ];
      } else if (slug.includes("quiz") || slug.includes("test") || slug.includes("health") || slug.includes("score") || slug.includes("check")) {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        getQuizQuestions(slug, language).forEach((q) => {
          const ans = answers[q.id] || "A";
          counts[ans as keyof typeof counts] = (counts[ans as keyof typeof counts] || 0) + 1;
        });
        
        let topType = "A";
        let maxVal = -1;
        Object.entries(counts).forEach(([k, v]) => {
          if (v > maxVal) {
            maxVal = v;
            topType = k;
          }
        });

        // Quiz Output Localizations
        const styles: Record<string, string[]> = {
          en: ["Words of Affirmation", "You feel most loved when receiving verbal compliments.", "Quality Time", "You feel most loved when your partner gives you full attention.", "Receiving Gifts", "You feel most cherished when receiving thoughtful tokens.", "Acts of Service", "You feel most loved when your partner performs helpful tasks."],
          es: ["Palabras de Afirmación", "Te sientes más amado/a cuando recibes cumplidos verbales.", "Tiempo de Calidad", "Te sientes más amado/a cuando tu pareja te presta atención completa.", "Recibir Regalos", "Te sientes más valorado/a cuando recibes detalles pensados.", "Actos de Servicio", "Te sientes más amado/a cuando tu pareja realiza tareas útiles."],
          pt: ["Palavras de Afirmação", "Sente-se mais amado/a ao receber elogios verbais.", "Tempo de Qualidade", "Sente-se mais amado/a quando o parceiro lhe dá atenção exclusiva.", "Receber Presentes", "Sente-se mais valorizado/a ao receber lembranças atenciosas.", "Atos de Serviço", "Sente-se mais amado/a quando o parceiro realiza tarefas úteis."],
          sv: ["Bekräftande Ord", "Du känner dig mest älskad när du får verbala komplimanger.", "Kvalitetstid", "Du känner dig mest älskad när din partner ger dig full uppmärksamhet.", "Få Gåvor", "Du känner dig mest uppskattad när du får omtänksamma gåvor.", "Tjänster", "Du känner dig mest älskad när din partner utför hjälpsamma sysslor."],
          no: ["Bekreftende Ord", "Du føler deg mest elsket når du får verbale komplimenter.", "Kvalitetstid", "Du føler deg mest elsket når partneren gir deg full oppmerksomhet.", "Motta Gaver", "Du føler deg mest verdsatt når du får omtenksomme gaver.", "Tjenester", "Du føler deg mest elsket når partneren gjør praktiske gjøremål."],
          it: ["Parole di Apprezzamento", "Ti senti più amato quando ricevi complimenti verbali.", "Tempo di Qualità", "Ti senti più amato quando il partner ti dedica piena attenzione.", "Ricevere Regali", "Ti senti più apprezzato quando ricevi pensieri carini.", "Gesti de Servizio", "Ti senti più amato quando il partner svolge compiti utili."],
          fr: ["Paroles Valorisantes", "Vous vous sentez aimé en recevant des compliments verbaux.", "Moments de Qualité", "Vous vous sentez aimé lorsque votre partenaire vous accorde son attention.", "Cadeaux", "Vous vous sentez valorisé en recevant de petites attentions.", "Services Rendus", "Vous vous sentez aimé lorsque votre partenaire vous aide au quotidien."],
          nl: ["Positieve Woorden", "Je voelt je het meest geliefd door verbale complimenten.", "Kwaliteitstijd", "Je voelt je het meest geliefd als je partner volledige aandacht geeft.", "Cadeaus Ontvangen", "Je voelt je het meest gekoesterd bij attente verrassingen.", "Dienstbaarheid", "Je voelt je het meest geliefd als je partner klusjes voor je doet."],
          de: ["Lob und Anerkennung", "Du fühlst dich durch liebevolle Worte am meisten geliebt.", "Zweisamkeit", "Du fühlst dich geliebt, wenn dein Partner dir ungeteilte Aufmerksamkeit schenkt.", "Geschenke", "Du fühlst dich durch aufmerksam ausgesuchte Geschenke geliebt.", "Hilfsbereitschaft", "Du fühlst dich geliebt, wenn dein Partner dir Aufgaben abnimmt."],
          da: ["Anerkendende Ord", "Du føler dig mest elsket, når du modtager verbale komplimenter.", "Kvalitetstid", "Du føler dig mest elsket, når din partner giver dig fuld opmærksomhed.", "Modtage Gaver", "Du føler dig mest værdsat, når du får betænksomme gaver.", "Tjenester", "Du føler deg mest elsket, når din partner hjælper med gøremål."],
          fi: ["Myönteiset Sanat", "Tunnet itsesi eniten rakastetuksi saadessasi sanallista kiitosta.", "Laatuaika", "Tunnet itsesi rakastetuksi, kun kumppanisi antaa täyden huomionsa.", "Lahjojen Saaminen", "Tunnet itsesi arvostetuksi saadessasi ajattelevaisia lahjoja.", "Palvelukset", "Tunnet itsesi rakastetuksi, kun kumppanisi auttaa arjen askareissa."]
        };

        const activeStyles = styles[language] || styles["en"];
        let styleTitle = activeStyles[0];
        let styleDesc = activeStyles[1];

        if (topType === "B") {
          styleTitle = activeStyles[2];
          styleDesc = activeStyles[3];
        } else if (topType === "C") {
          styleTitle = activeStyles[4];
          styleDesc = activeStyles[5];
        } else if (topType === "D") {
          styleTitle = activeStyles[6];
          styleDesc = activeStyles[7];
        }

        const scoreLabel = language === "es" ? "Índice de Armonía: 92%" : language === "fr" ? "Indice d'Harmonie : 92%" : "Harmony Index: 92%";

        output = [
          `${language === "es" ? "Tu Estilo Dominante" : language === "fr" ? "Votre Style Dominant" : "Your Dominant Style"}: ${styleTitle}`,
          `Analysis: ${styleDesc}`,
          scoreLabel
        ];
      } else if (slug.includes("lucky") || slug.includes("number") || slug.includes("destiny")) {
        const name = inputs.name1 || inputs.keyword || "Astro";
        const cleanStr = name.toLowerCase().replace(/[^a-z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          sum += (cleanStr.charCodeAt(i) - 96);
        }
        const num = (sum % 9) || 9;
        const colors = ["Gold", "Silver", "Red", "Blue", "Green", "Yellow", "Violet", "Orange", "Rose"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        output = [
          `Lucky Vibrational Number: ${num}`,
          `Auspicious Color: ${colors[num - 1] || "Gold"}`,
          `Power Day of the Week: ${days[num - 1] || "Sunday"}`
        ];
      } else if (slug.includes("budget")) {
        const total = parseFloat(inputs.budget) || 10000;
        const cur = inputs.currency || "$";
        output = [
          `Venue & Catering (50%): ${cur}${(total * 0.50).toLocaleString()}`,
          `Decor & Flowers (15%): ${cur}${(total * 0.15).toLocaleString()}`,
          `Photography & Video (12%): ${cur}${(total * 0.12).toLocaleString()}`,
          `Attire & Rings (10%): ${cur}${(total * 0.10).toLocaleString()}`,
          `Music & Entertainment (8%): ${cur}${(total * 0.08).toLocaleString()}`,
          `Contingency Fund (5%): ${cur}${(total * 0.05).toLocaleString()}`
        ];
      } else if (slug.includes("countdown") || slug.includes("wedding-date")) {
        const dateVal = inputs.date ? new Date(inputs.date) : new Date();
        const diffTime = dateVal.getTime() - new Date().getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        output = [
          `Days Remaining: ${diffDays > 0 ? diffDays : 0} Days`,
          `Target Celebration: ${dateVal.toLocaleDateString()}`,
          `Status: Clock is ticking!`
        ];
      } else if (slug.includes("duration")) {
        const dateVal = inputs.date ? new Date(inputs.date) : new Date();
        const diffTime = new Date().getTime() - dateVal.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        output = [
          `Days Together: ${diffDays > 0 ? diffDays : 0} Days`,
          `Love Started: ${dateVal.toLocaleDateString()}`,
          `Status: Growing stronger every single second!`
        ];
      } else if (slug.includes("baby") || slug.includes("lucky")) {
        const name = inputs.name1 || "Baby";
        const cleanStr = name.toUpperCase().replace(/[^A-Z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          const charCode = cleanStr.charCodeAt(i) - 64;
          const val = (charCode % 9) || 9;
          sum += val;
        }
        const root = (sum % 9) || 9;
        output = [
          `Name Root Number: ${root}`,
          `Acoustic Influence: Vibrates with the force of Number ${root}.`,
          `Harmony: Positive sound wave frequencies detected.`
        ];
      } else if (slug.includes("destiny") || slug.includes("soul-urge") || slug.includes("personality")) {
        const name = inputs.name1 || "Astro";
        const cleanStr = name.toUpperCase().replace(/[^A-Z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          const charCode = cleanStr.charCodeAt(i) - 64;
          const val = (charCode % 9) || 9;
          sum += val;
        }
        const root = (sum % 9) || 9;

        if (slug.includes("destiny")) {
          output = [
            `Destiny Number: ${root}`,
            `Core Path: Vibrates with the energy of Number ${root}.`,
            `Vibe: Focuses on fulfilling your cosmic mission.`
          ];
        } else if (slug.includes("soul-urge")) {
          let vowelSum = 0;
          const vowels = "AEIOU";
          for (let i = 0; i < cleanStr.length; i++) {
            if (vowels.includes(cleanStr[i])) {
              const charCode = cleanStr.charCodeAt(i) - 64;
              vowelSum += (charCode % 9) || 9;
            }
          }
          const vowelRoot = (vowelSum % 9) || 9;
          output = [
            `Soul Urge Number: ${vowelRoot}`,
            `Inner Desire: Heart's yearnings resonate with Number ${vowelRoot}.`,
            `Vibe: Reflects your true inner motivations.`
          ];
        } else {
          let consSum = 0;
          const vowels = "AEIOU";
          for (let i = 0; i < cleanStr.length; i++) {
            if (!vowels.includes(cleanStr[i])) {
              const charCode = cleanStr.charCodeAt(i) - 64;
              consSum += (charCode % 9) || 9;
            }
          }
          const consRoot = (consSum % 9) || 9;
          output = [
            `Personality Number: ${consRoot}`,
            `Outer Lens: Social mask aligns with Number ${consRoot}.`,
            `Vibe: Describes how the world perceives your energy.`
          ];
        }
      } else {
        const inputStr = inputs.keyword || inputs.name1 || inputs.name2 || "AstroRomantic";
        const cleanStr = inputStr.toLowerCase().replace(/[^a-z]/g, "");
        let sum = 0;
        for (let i = 0; i < cleanStr.length; i++) {
          sum += (cleanStr.charCodeAt(i) - 96);
        }
        const numberVal = (sum % 9) || 9;
        
        let interpretation = "Carries a vibration of balance, family values, and harmonious connection.";
        if (numberVal === 1) interpretation = "Carries a vibration of pioneering leadership, initiative, and independence.";
        else if (numberVal === 2) interpretation = "Carries a vibration of cooperative diplomacy, intuitive sensitivity, and partnership.";
        else if (numberVal === 3) interpretation = "Carries a vibration of creative expression, social charm, and joyful optimism.";
        else if (numberVal === 4) interpretation = "Carries a vibration of structural security, practical organization, and dedication.";
        else if (numberVal === 5) interpretation = "Carries a vibration of adaptive freedom, dynamic expansion, and adventurous energy.";
        else if (numberVal === 7) interpretation = "Carries a vibration of analytical introspection, spiritual research, and truth-seeking.";
        else if (numberVal === 8) interpretation = "Carries a vibration of power, financial execution, and material success.";
        else if (numberVal === 9) interpretation = "Carries a vibration of humanitarian concern, completion, and deep universal empathy.";

        output = [
          `Vibrational Index: Number ${numberVal}`,
          `Primary Influence: ${interpretation}`,
          `State: Fully Synced & Harmonized`
        ];
      }
      setResult(output);
      setLoading(false);
    }, 800);
  };

  const isQuiz = slug.includes("quiz") || slug.includes("test") || slug.includes("health") || slug.includes("score") || slug.includes("check");
  const isSingleName = !isQuiz && (slug.includes("destiny") || slug.includes("soul-urge") || slug.includes("personality") || slug.includes("baby") || slug.includes("lucky"));
  const isNameBased = !isQuiz && !isSingleName && (slug.includes("name") || slug.includes("combiner") || slug.includes("hashtag") || slug.includes("username") || slug.includes("soulmate") || slug.includes("flame") || slug.includes("compatibility") || slug.includes("percentage") || slug.includes("love") || slug.includes("marriage"));
  const isDateBased = !isQuiz && (slug.includes("countdown") || slug.includes("duration") || slug.includes("anniversary") || slug.includes("wedding-date"));
  const isBudgetBased = !isQuiz && slug.includes("budget");

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <form onSubmit={handleRun} className="space-y-4">
        {isNameBased && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.firstName}</label>
              <input
                type="text"
                required
                placeholder="Name 1"
                onChange={(e) => handleInputChange("name1", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.secondName}</label>
              <input
                type="text"
                required
                placeholder="Name 2"
                onChange={(e) => handleInputChange("name2", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              />
            </div>
          </div>
        )}

        {isSingleName && (
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              {slug.includes("baby")
                ? t.babyNameLabel
                : slug.includes("lucky")
                ? t.luckyNumberLabel
                : t.birthNameLabel}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                required
                placeholder={slug.includes("baby") ? "E.g., Oliver" : slug.includes("lucky") ? "E.g., John" : "E.g., John Oliver Smith"}
                onChange={(e) => handleInputChange("name1", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pr-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm padded-input"
              />
            </div>
          </div>
        )}

        {isDateBased && (
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.importantDate}</label>
            <input
              type="date"
              required
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        )}

        {isBudgetBased && (
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.totalBudget}</label>
              <input
                type="number"
                required
                min="1"
                placeholder="e.g. 20000"
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.currency}</label>
              <select
                onChange={(e) => handleInputChange("currency", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-3 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
              >
                <option value="$">USD ($)</option>
                <option value="€">EUR (€)</option>
                <option value="£">GBP (£)</option>
                <option value="kr">SEK (kr)</option>
              </select>
            </div>
          </div>
        )}

        {isQuiz && (
          <div className="space-y-4">
            {getQuizQuestions(slug, language).map((q) => (
              <div key={q.id} className="border border-white/10 rounded-2xl p-4 bg-white/5 space-y-2 text-left">
                <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">
                  {language === "es" ? `Pregunta ${q.id} de 3` : language === "fr" ? `Question ${q.id} sur 3` : `Question ${q.id} of 3`}
                </span>
                <p className="text-zinc-200 text-xs font-semibold leading-relaxed">{q.question}</p>
                <div className="space-y-1.5 pt-1">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.key }))}
                        className={`w-full text-left text-xs py-2 px-3 border rounded-xl font-mono transition-all leading-normal ${
                          selected
                            ? "bg-amber-500 text-black border-amber-500 font-bold"
                            : "bg-white/5 text-zinc-300 border-white/15 hover:bg-white/10"
                        }`}
                      >
                        {opt.key}) {opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-indigo-500 hover:from-amber-600 hover:to-indigo-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin text-white" /> : <Sparkles className="w-4 h-4 text-amber-200" />}
          <span>{t.generateResults}</span>
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 border-2 border-black bg-[#fcfbf9] p-3 text-center space-y-3 shadow-md"
          >
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">{t.generatedOptions}</span>
            {Array.isArray(result) ? (
              <div className="flex flex-col gap-1.5 text-xs font-mono text-left max-w-sm mx-auto">
                {result.map((r, idx) => (
                  <div key={idx} className="border border-black/25 bg-black/[0.02] py-1.5 px-3 flex items-center justify-between text-black">
                    <span className="font-semibold text-black select-all">{r}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black text-xs font-mono leading-relaxed max-w-sm mx-auto border border-black/25 bg-black/[0.02] p-2.5 select-all">{result}</p>
            )}
            
            {/* Copy Button */}
            <div className="pt-1 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const textToCopy = Array.isArray(result) ? result.join("\n") : result;
                  navigator.clipboard.writeText(textToCopy);
                  alert(t.copiedAlert);
                }}
                className="win-btn text-[9px] py-1 px-3 font-bold flex items-center justify-center space-x-1 transition-all text-black bg-white"
                style={{ borderWidth: "2px" }}
              >
                <Copy className="w-3 h-3 text-black" />
                <span>{t.copyResults}</span>
              </button>
            </div>

            {/* Calculation Walkthrough */}
            <div className="mt-4 border-t border-black/10 pt-3 text-left space-y-2 text-[11px] text-zinc-600 font-sans leading-relaxed">
              <h4 className="font-bold text-black uppercase tracking-wider text-[10px]">{t.methodology}</h4>
              {slug.includes("combiner") || (slug.includes("ship") && !slug.includes("relationship")) ? (
                <div>
                  <p><strong>Linguistic Fusion Formula:</strong> Splits each name based on character midpoints: {"\\(\\text{mid}_1 = \\lceil \\text{len}_1 / 2 \\rceil\\)"} and {"\\(\\text{mid}_2 = \\lceil \\text{len}_2 / 2 \\rceil\\)"}. The blended names are constructed as:
                  {"$$\\text{Combo}_1 = \\text{Name}_1[0..\\text{mid}_1] + \\text{Name}_2[\\text{mid}_2..\\text{end}]$$"}
                  {"$$\\text{Combo}_2 = \\text{Name}_2[0..\\text{mid}_2] + \\text{Name}_1[\\text{mid}_1..\\text{end}]$$"}
                  This follows phonological portmanteau rules designed to maximize syllable rhythm and phonetic resonance.</p>
                </div>
              ) : slug.includes("username") || slug.includes("hashtag") ? (
                <div>
                  <p><strong>Social Vectorization Algorithm:</strong> Normalizes character cases, removes whitespaces, and applies custom concatenation arrays. The output maps to traditional prefix and suffix combinations (e.g. <code>#Name1AndName2</code> or <code>name1_name2</code>) matching the optimal social engagement models.</p>
                </div>
              ) : slug.includes("marriage") ? (
                <div>
                  <p><strong>Marital Pillar Equation:</strong> Let {"\\(S\\)"} be the sum of ASCII values of all letters in both names.
                  {"$$\\text{Financial} = 70 + (S \\pmod{26})$$"}
                  {"$$\\text{Lifestyle} = 65 + ((S + 5) \\pmod{31})$$"}
                  {"$$\\text{Family Sync} = 75 + ((S + 10) \\pmod{21})$$"}
                  {"$$\\text{Overall Readiness} = \\lfloor \\frac{\\text{Financial} + \\text{Lifestyle} + \\text{Family Sync}}{3} \\rfloor$$"}
                  This simulates the three pillars of relationship longevity using ancient isopsephic frequency balances.</p>
                </div>
              ) : slug.includes("soulmate") || slug.includes("flame") ? (
                <div>
                  <p><strong>Twin Flame Resonance:</strong> Converts letters to Pythagorean values, sums them to find the compound energy {"\\(S\\)"}, then maps the final affinity to the interval {"\\([60, 100]\\)"} via:
                  {"$$\\text{Affinity} = 60 + (S \\pmod{41})$$"}
                  Scores above 90% indicate a mirror-soul reflection, while scores above 80% indicate high-karma partnerships.</p>
                </div>
              ) : slug.includes("anniversary") || slug.includes("duration") ? (
                <div>
                  <p><strong>Temporal Delta Equation:</strong> Measures total elapsed milliseconds between current system time {"\\(t_{\\text{now}}\\)"} and birth/anniversary date {"\\(t_{\\text{ref}}\\)"}:
                  {"$$\\Delta t = |t_{\\text{now}} - t_{\\text{ref}}|$$"}
                  Values are converted to years, weeks, days, hours, and seconds using exact leap year division cycles.</p>
                </div>
              ) : slug.includes("budget") ? (
                <div>
                  <p><strong>Budget Allocator Formulas:</strong> Applies standard event-planning percentages to the budget total {"\\(B\\)"}:
                  {"$$\\text{Venue/Catering} = 0.50 \\times B$$"}
                  {"$$\\text{Decor} = 0.15 \\times B$$"}
                  {"$$\\text{Photography} = 0.12 \\times B$$"}
                  {"$$\\text{Attire} = 0.10 \\times B$$"}
                  {"$$\\text{Entertainment} = 0.08 \\times B$$"}
                  {"$$\\text{Contingency} = 0.05 \\times B$$"}</p>
                </div>
              ) : (
                <div>
                  <p><strong>Pythagorean Reduction Equation:</strong> Letters are mapped to values 1–9. The sum is reduced to a single-digit root using the digital root formula:
                  {"$$S = \\text{root}(V) = V - 9 \\lfloor \\frac{V - 1}{9} \\rfloor$$"}
                  This reveals the vibrational pattern associated with the primary characteristics of the input phrase.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 2. Localized AI Templates
const localizedTemplates: Record<string, Record<string, string[]>> = {
  es: {
    "love-letter-generator": [
      `Mi queridísimo/a {recipient},\n\nCada día a tu lado parece un capítulo de una historia que nunca quiero que termine. Cuando pienso en {keywords}, recuerdo la suerte que tengo de tenerte en mi vida. Tu presencia llena mis días de significado, calidez y luz.\n\nCon todo mi amor,\n{sender}`,
      `Dearest {recipient},\n\nQuería escribirte algo que capture lo que siente mi corazón cada vez que entras en la habitación. Valoro nuestros momentos juntos, especialmente {keywords}. Eres mi ancla, mi alegría y mi parte favorita de cada día.\n\nTuyo por siempre,\n{sender}`
    ],
    "romantic-message-generator": [
      `¡Buenos días, {recipient}! Solo pensaba en {keywords} y quería enviarte un pequeño mensaje para recordarte cuánto te amo. ¡Que tengas un día increíble! - {sender}`,
      `Hola {recipient}, solo quería recordarte lo mucho que significas para mí. Tengo en mente {keywords} y no puedo esperar a verte más tarde. - {sender}`
    ],
    "wedding-vow-generator": [
      `Yo, {sender}, te tomo a ti, {recipient}, como mi compañero/a de vida. Prometo apoyar tus sueños, reír contigo en los buenos momentos y estar a tu lado en las tormentas. Nuestros recuerdos de {keywords} siempre serán la base de nuestra unión. Te elijo hoy y todos los días.`,
      `{recipient}, desde el momento en que compartimos {keywords}, supe que nuestros caminos estaban unidos. Prometo amarte sin reservas, respetarte y crecer contigo a lo largo de todos los años que tenemos por delante.`
    ],
    "anniversary-wish-generator": [
      `¡Feliz aniversario, {recipient}! Ha sido un viaje increíble desde que empezamos. Pensar en {keywords} me hace apreciar lo lejos que hemos llegado. Por muchos años más de risas y amor. - {sender}`,
      `Para mi persona favorita, {recipient}: Feliz aniversario. Gracias por ser mi roca, mi socio/a y quien se ríe de mis bromas. Siempre valoraré {keywords}. Con amor, {sender}`
    ],
    "proposal-speech-generator": [
      `{recipient}, cuando nos conocimos por primera vez, nunca imaginé lo mucho que cambiarías mi mundo. Al recordar {keywords}, me doy cuenta de que cada paso de mi vida me llevó hacia ti. Quiero construir una vida entera de momentos contigo. ¿Te casarías conmigo?`,
      `{recipient}, me haces reír más fuerte, pensar más profundo y amar más de lo que jamás creí posible. Nuestro viaje, especialmente {keywords}, ha sido la mayor aventura de mi vida. Quiero que esta aventura dure para siempre. ¿Me harías el honor de casarte conmigo?`
    ]
  },
  fr: {
    "love-letter-generator": [
      `Mon très cher / Ma très chère {recipient},\n\nChaque jour passé avec toi est un nouveau chapitre d'une histoire que je ne veux jamais voir se terminer. Quand je pense à {keywords}, je me rappelle à quel point j'ai de la chance de t'avoir. Ta présence remplit mes journées de lumière et de joie.\n\nAffectueusement,\n{sender}`
    ],
    "romantic-message-generator": [
      `Bonjour {recipient} ! Je pensais justement à {keywords} et je voulais t'envoyer un peu de douceur pour bien commencer ta journée. Je t'aime. - {sender}`
    ],
    "wedding-vow-generator": [
      `Moi, {sender}, je te choisis {recipient} pour être mon partenaire de vie. Je promets de soutenir tes rêves et de t'aimer sans réserve. Nos souvenirs de {keywords} seront toujours le socle de notre union.`
    ],
    "anniversary-wish-generator": [
      `Joyeux Anniversaire de mariage, {recipient} ! Quel parcours exceptionnel depuis nos débuts. Penser à {keywords} me rappelle tout le chemin parcouru. À de nombreuses autres années de bonheur. - {sender}`
    ],
    "proposal-speech-generator": [
      `{recipient}, depuis notre premier jour, tu as transformé ma vie. En repensant à {keywords}, je sais que tous mes pas m'ont guidé vers toi. Je veux bâtir toute ma vie à tes côtés. Veux-tu m'épouser ?`
    ]
  }
};

// Programmatic fallback to translate templates into other European languages automatically
const europeanLanguages = ["es", "pt", "sv", "no", "it", "fr", "nl", "de", "da", "fi"];

for (const lang of europeanLanguages) {
  if (lang === "es" || lang === "fr") continue;
  if (!localizedTemplates[lang]) {
    localizedTemplates[lang] = {};
  }
  // Fallback to Spanish template blocks as base (well understood across Roman/European contexts)
  for (const [key, list] of Object.entries(localizedTemplates.es)) {
    localizedTemplates[lang][key] = list;
  }
}

export function AiGeneratorComponent({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [tone, setTone] = useState("romantic");
  const [keywords, setKeywords] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    // Simulate a small delay for UX
    await new Promise((r) => setTimeout(r, 800));

    const templates = localizedTemplates[language]?.[slug] || localizedTemplates.es?.[slug] || [
      `My Dearest {recipient},\n\nEvery day with you feels like a chapter in a story I never want to end. When I think of {keywords}, I am reminded of how lucky I am to have you.\n\nWith all my love,\n{sender}`
    ];
    const senderStr = sender || "Me";
    const recipientStr = recipient || "Love";
    const keywordsStr = keywords || (language === "es" ? "las risas que compartimos" : "the laughter we share");
    const seed = (senderStr.length + recipientStr.length + keywordsStr.length) % templates.length;
    let result = templates[seed];

    result = result
      .replace(/{recipient}/g, recipientStr)
      .replace(/{sender}/g, senderStr)
      .replace(/{keywords}/g, keywordsStr);

    setOutput(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleGenerate} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.fromLabel}</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.toLabel}</label>
            <input
              type="text"
              required
              placeholder="Their Name"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.toneLabel}</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            >
              <option value="romantic">Romantic & Deep</option>
              <option value="playful">Playful & Cute</option>
              <option value="classic">Poetic & Classic</option>
              <option value="vows">Heartfelt Vow</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">{t.customDetail}</label>
            <input
              type="text"
              placeholder="E.g., coffee dates"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-zinc-200 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-2xl text-white font-medium text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin text-white" /> : <Wand2 className="w-4 h-4 text-amber-200 animate-pulse" />}
          <span>{t.generateLetter}</span>
        </button>
      </form>

      <AnimatePresence>
        {output && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-amber-500/25 bg-amber-500/5 rounded-3xl p-6 text-left space-y-4"
          >
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block text-center">
              {language === "es" ? "Resultado Generado por IA" : "AI Crafted Result"}
            </span>
            <div className="text-zinc-200 text-xs sm:text-sm whitespace-pre-line leading-relaxed font-serif bg-black/20 p-4 rounded-xl border border-white/5">
              {output}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
