const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'scratch', 'extracted_files');
const appDir = path.join(__dirname, '..', 'app');

const filesMap = [
  { mdFile: 'vedic-zodiac-signs.md', category: 'vedic', slug: 'zodiac-signs', route: '/vedic/zodiac-signs' },
  { mdFile: 'vedic-planets.md', category: 'vedic', slug: 'planets', route: '/vedic/planets' },
  { mdFile: 'vedic-houses.md', category: 'vedic', slug: 'houses', route: '/vedic/houses' },
  { mdFile: 'vedic-numerology.md', category: 'vedic', slug: 'numerology', route: '/vedic/numerology' },
  { mdFile: 'vedic-kp-astrology.md', category: 'vedic', slug: 'kp-astrology', route: '/vedic/kp-astrology' },

  { mdFile: 'western-overview.md', category: 'western', slug: 'overview', route: '/western/overview' },
  { mdFile: 'western-zodiac-signs.md', category: 'western', slug: 'zodiac-signs', route: '/western/zodiac-signs' },
  { mdFile: 'western-planets.md', category: 'western', slug: 'planets', route: '/western/planets' },
  { mdFile: 'western-houses.md', category: 'western', slug: 'houses', route: '/western/houses' },
  { mdFile: 'western-aspects.md', category: 'western', slug: 'aspects', route: '/western/aspects' },

  { mdFile: 'life-insights-report.md', category: 'reports', slug: 'life-insights', route: '/reports/life-insights' },
  { mdFile: 'report-dasha.md', category: 'reports', slug: 'dasha', route: '/reports/dasha' },
  { mdFile: 'report-love-marriage.md', category: 'reports', slug: 'love-marriage', route: '/reports/love-marriage' },
  { mdFile: 'report-saturn.md', category: 'reports', slug: 'saturn', route: '/reports/saturn' },
  { mdFile: 'report-mangal-dosha.md', category: 'reports', slug: 'mangal-dosha', route: '/reports/mangal-dosha' },
  { mdFile: 'report-kalsarp-dosha.md', category: 'reports', slug: 'kalsarp-dosha', route: '/reports/kalsarp-dosha' },
  { mdFile: 'report-pitra-dosha.md', category: 'reports', slug: 'pitra-dosha', route: '/reports/pitra-dosha' },
  { mdFile: 'report-raj-yoga.md', category: 'reports', slug: 'raj-yoga', route: '/reports/raj-yoga' },
  { mdFile: 'report-gemstone.md', category: 'reports', slug: 'gemstone', route: '/reports/gemstone' },
  { mdFile: 'report-videsh-yoga.md', category: 'reports', slug: 'videsh-yoga', route: '/reports/videsh-yoga' },
];

function escapeJsx(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
}

function parseMarkdown(mdText, routeConfig) {
  const lines = mdText.split('\n');

  let h1Title = '';
  let seoTitle = '';
  let metaDesc = '';
  let keyTakeaways = [];
  let introParagraphs = [];
  let bodySections = [];
  let faqs = [];
  let internalLinks = [];
  let externalRefs = [];

  let mode = 'HEADER';
  let currentSection = null;
  let inTable = false;
  let tableHeader = [];
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (line.startsWith('# ')) {
      h1Title = line.replace('# ', '').trim();
      continue;
    }
    if (line.startsWith('**SEO Title:**')) {
      seoTitle = line.replace('**SEO Title:**', '').trim();
      continue;
    }
    if (line.startsWith('**Meta Description:**')) {
      metaDesc = line.replace('**Meta Description:**', '').trim();
      continue;
    }
    if (line.startsWith('**URL Slug:**')) {
      continue;
    }

    if (line === '## Key Takeaways') {
      mode = 'TAKEAWAYS';
      continue;
    }

    if (line.startsWith('## ') || line.startsWith('### ')) {
      const headingText = line.replace(/^###?\s+/, '').trim();
      if (headingText === 'Key Takeaways') {
        mode = 'TAKEAWAYS';
        continue;
      } else if (headingText.includes('Frequently Asked Questions') || headingText === 'FAQ' || headingText === 'FAQs') {
        mode = 'FAQS';
        continue;
      } else if (headingText.includes('Internal Links') || headingText.includes('Related') || headingText.includes('Explore Related')) {
        mode = 'INTERNAL_LINKS';
        continue;
      } else if (headingText.includes('External References') || headingText.includes('Sources') || headingText.includes('References')) {
        mode = 'EXTERNAL_REFS';
        continue;
      } else if (headingText.includes('Suggested Schema') || headingText.includes('Schema')) {
        mode = 'SCHEMA';
        continue;
      } else {
        mode = 'BODY';
        if (currentSection) {
          if (inTable && tableRows.length > 0) {
            currentSection.items.push({ type: 'table', header: tableHeader, rows: tableRows });
            inTable = false;
            tableHeader = [];
            tableRows = [];
          }
          bodySections.push(currentSection);
        }
        currentSection = { heading: headingText, isH3: line.startsWith('### '), items: [] };
        continue;
      }
    }

    if (mode === 'TAKEAWAYS') {
      if (line.startsWith('- ') || line.startsWith('* ')) {
        keyTakeaways.push(line.replace(/^[-*]\s+/, '').trim());
      } else if (line === '---' || line.startsWith('## ')) {
        mode = 'INTRO';
      }
      continue;
    }

    if (mode === 'INTRO' || (mode === 'HEADER' && line.length > 0 && !line.startsWith('---') && !line.startsWith('**'))) {
      if (line === '---') continue;
      if (line.length > 0) {
        introParagraphs.push(line);
      }
      continue;
    }

    if (mode === 'BODY' && currentSection) {
      if (line.startsWith('|')) {
        const parts = line.split('|').map(p => p.trim()).filter((p, idx, arr) => idx > 0 && idx < arr.length - 1);
        if (parts.length > 0) {
          if (parts.every(p => p.replace(/-/g, '').trim() === '')) {
            // separator line
            continue;
          }
          if (!inTable) {
            inTable = true;
            tableHeader = parts;
            tableRows = [];
          } else {
            tableRows.push(parts);
          }
        }
        continue;
      } else if (inTable) {
        currentSection.items.push({ type: 'table', header: tableHeader, rows: tableRows });
        inTable = false;
        tableHeader = [];
        tableRows = [];
      }

      if (line.startsWith('- ') || line.startsWith('* ')) {
        currentSection.items.push({ type: 'list-item', text: line.replace(/^[-*]\s+/, '').trim() });
      } else if (/^\d+\.\s+/.test(line)) {
        currentSection.items.push({ type: 'numbered-item', text: line.replace(/^\d+\.\s+/, '').trim() });
      } else if (line.length > 0 && line !== '---') {
        currentSection.items.push({ type: 'paragraph', text: line });
      }
      continue;
    }

    if (mode === 'FAQS') {
      if (line.startsWith('**Q:') || line.startsWith('Q:') || line.startsWith('### ') || line.startsWith('**Question:') || line.startsWith('**') && line.endsWith('**')) {
        const qText = line.replace(/^\*\*(Q:|\d+\.|\s*)?/, '').replace(/\*\*/g, '').replace(/###\s*/, '').trim();
        faqs.push({ question: qText, answer: '' });
      } else if (line.startsWith('- **Q:') || line.startsWith('- Question:')) {
        const qText = line.replace(/^-\s*\*\*(Q:)?/, '').replace(/\*\*/g, '').trim();
        faqs.push({ question: qText, answer: '' });
      } else if (line.length > 0 && faqs.length > 0) {
        let cleanAns = line.replace(/^(A:|\*\*A:\*\*|Answer:)\s*/i, '').trim();
        if (cleanAns) {
          if (faqs[faqs.length - 1].answer) {
            faqs[faqs.length - 1].answer += ' ' + cleanAns;
          } else {
            faqs[faqs.length - 1].answer = cleanAns;
          }
        }
      }
      continue;
    }

    if (mode === 'INTERNAL_LINKS') {
      if (line.startsWith('- ') || line.startsWith('* ')) {
        internalLinks.push(line.replace(/^[-*]\s+/, '').trim());
      }
      continue;
    }

    if (mode === 'EXTERNAL_REFS') {
      if (line.startsWith('- ') || line.startsWith('* ')) {
        externalRefs.push(line.replace(/^[-*]\s+/, '').trim());
      }
      continue;
    }
  }

  if (inTable && currentSection && tableRows.length > 0) {
    currentSection.items.push({ type: 'table', header: tableHeader, rows: tableRows });
  }
  if (currentSection) {
    bodySections.push(currentSection);
  }

  // Fallback defaults if titles/metadata empty
  if (!h1Title) h1Title = routeConfig.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  if (!seoTitle) seoTitle = `${h1Title} | AstroRomantic`;
  if (!metaDesc) metaDesc = `Read our complete guide to ${h1Title} on AstroRomantic.`;

  return {
    h1Title,
    seoTitle,
    metaDesc,
    keyTakeaways,
    introParagraphs,
    bodySections,
    faqs: faqs.filter(f => f.question && f.answer),
    internalLinks,
    externalRefs,
  };
}

console.log('Starting compilation of 20 Astrology Guides...');

filesMap.forEach(item => {
  const filePath = path.join(srcDir, item.mdFile);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    return;
  }
  const mdText = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseMarkdown(mdText, item);

  const categoryLabel = item.category === 'vedic' ? 'Vedic Astrology Guide' : item.category === 'western' ? 'Western Astrology Guide' : 'Astrology Report Guide';
  const categoryBadgeColor = item.category === 'vedic' ? 'bg-amber-300' : item.category === 'western' ? 'bg-rose-200' : 'bg-purple-200';

  let code = `import React from "react";
import type { Metadata } from "next";
import ExploreAstrologyPanel from "@/components/explore-astrology-panel";
import { Sparkles, CheckCircle2, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://www.astroromantic.com";
const SLUG = "${item.route}";

export const metadata: Metadata = {
  title: ${JSON.stringify(parsed.seoTitle)},
  description: ${JSON.stringify(parsed.metaDesc)},
  alternates: { canonical: \`\${SITE_URL}\${SLUG}/\` },
  openGraph: {
    title: ${JSON.stringify(parsed.seoTitle)},
    description: ${JSON.stringify(parsed.metaDesc)},
    url: \`\${SITE_URL}\${SLUG}/\`,
    siteName: "AstroRomantic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(parsed.seoTitle)},
    description: ${JSON.stringify(parsed.metaDesc)},
  },
};

const faqs: { question: string; answer: string }[] = ${JSON.stringify(parsed.faqs, null, 2)};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": \`\${SITE_URL}\${SLUG}/#article\`,
      "headline": ${JSON.stringify(parsed.h1Title)},
      "description": ${JSON.stringify(parsed.metaDesc)},
      "mainEntityOfPage": \`\${SITE_URL}\${SLUG}/\`,
      "publisher": {
        "@type": "Organization",
        "name": "AstroRomantic",
        "url": SITE_URL
      }
    },
    {
      "@type": "FAQPage",
      "@id": \`\${SITE_URL}\${SLUG}/#faq\`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export default function GuidePage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] text-black font-sans box-border overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 box-border">
        {/* Header Section */}
        <header className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] text-center space-y-4">
          <div className="inline-flex items-center space-x-2 ${categoryBadgeColor} border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase text-black">
            <Sparkles className="w-4 h-4 text-black" />
            <span>${categoryLabel}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-black tracking-tight leading-tight">
            ${parsed.h1Title}
          </h1>
          ${parsed.introParagraphs.map(p => `<p className="text-sm sm:text-base text-zinc-700 max-w-3xl mx-auto leading-relaxed">${p}</p>`).join('\n          ')}
        </header>

        ${parsed.keyTakeaways.length > 0 ? `
        {/* Key Takeaways Box */}
        <section className="bg-amber-100 border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
            <h2 className="text-xl font-bold font-mono text-black uppercase tracking-wide">
              Key Takeaways
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-zinc-900 font-sans leading-relaxed pl-2">
            ${parsed.keyTakeaways.map(t => `<li className="flex items-start space-x-2"><span className="font-bold text-black">•</span><span>${t}</span></li>`).join('\n            ')}
          </ul>
        </section>
        ` : ''}

        {/* Main Article Content */}
        <article className="bg-white border-3 border-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8 text-zinc-900 leading-relaxed font-sans">
`;

  parsed.bodySections.forEach((sec, sIdx) => {
    code += `          {/* Section ${sIdx + 1} */}
          <section className="space-y-4">
            <h2 className="${sec.isH3 ? 'text-xl sm:text-2xl font-bold font-mono text-black border-b-2 border-black pb-1' : 'text-2xl sm:text-3xl font-extrabold font-mono text-black border-b-3 border-black pb-2'}">
              ${sec.heading}
            </h2>
`;

    sec.items.forEach(it => {
      if (it.type === 'paragraph') {
        code += `            <p>${it.text}</p>\n`;
      } else if (it.type === 'list-item') {
        code += `            <ul className="list-disc pl-6 space-y-2">\n              <li>${it.text}</li>\n            </ul>\n`;
      } else if (it.type === 'numbered-item') {
        code += `            <ol className="list-decimal pl-6 space-y-2">\n              <li>${it.text}</li>\n            </ol>\n`;
      } else if (it.type === 'table') {
        code += `            <div className="overflow-x-auto border-2 border-black rounded-xl shadow-[4px_4px_0px_#000000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-300 border-b-2 border-black font-mono font-bold uppercase text-black">
                    ${it.header.map((h, hIdx) => `<th className="p-3 ${hIdx < it.header.length - 1 ? 'border-r-2 border-black' : ''}">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-sans">
                  ${it.rows.map(row => `<tr className="hover:bg-amber-50">${row.map((cell, cIdx) => `<td className="p-3 ${cIdx < row.length - 1 ? 'border-r-2 border-black' : ''}">${cell}</td>`).join('')}</tr>`).join('\n                  ')}
                </tbody>
              </table>
            </div>\n`;
      }
    });

    code += `          </section>\n\n`;
  });

  if (parsed.faqs.length > 0) {
    code += `          {/* FAQs */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-b-3 border-black pb-2">
              <HelpCircle className="w-7 h-7 text-black flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#f4f3ef] border-2 border-black rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_#000000] cursor-pointer"
                >
                  <summary className="font-bold font-mono text-base sm:text-lg text-black list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 font-mono text-xl font-bold ml-2">▼</span>
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-zinc-800 font-sans leading-relaxed pt-2 border-t border-zinc-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>\n\n`;
  }

  code += `          {/* Related Internal Links */}
          <section className="bg-amber-50 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_#000000] space-y-4">
            <h2 className="text-xl font-bold font-mono text-black uppercase">
              Explore Related Astrology Guides & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="/calculators/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>All Astrology & Numerology Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/horoscope/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Daily Horoscope Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/astrology-guides/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Explore All 20 Astrology Guides</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/reports/life-insights/" className="p-3 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-200">
                <span>Life Insights Kundli Report</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>\n\n`;

  if (parsed.externalRefs.length > 0) {
    code += `          {/* External References */}
          <section className="border-t-2 border-zinc-300 pt-6 space-y-2 text-xs text-zinc-600 font-mono">
            <h3 className="font-bold uppercase text-black flex items-center space-x-1">
              <BookOpen className="w-4 h-4 text-black mr-1" />
              <span>External References & Sources</span>
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              ${parsed.externalRefs.map(ref => `<li>${ref}</li>`).join('\n              ')}
            </ul>
          </section>\n\n`;
  }

  code += `        </article>

        {/* Explore Astrology Navigation Panel */}
        <section className="w-full">
          <ExploreAstrologyPanel />
        </section>
      </div>
    </div>
  );
}
`;

  const targetDir = path.join(appDir, item.category, item.slug);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetPath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetPath, code, 'utf-8');
  console.log(`✅ Generated ${targetPath}`);
});

console.log('\n🎉 Finished processing all 20 Astrology Guides!');
