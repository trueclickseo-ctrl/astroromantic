import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AstroRomantic",
  description: "Terms of Service for using AstroRomantic astrology, numerology, and relationship calculators.",
  alternates: { canonical: "https://www.astroromantic.com/terms/" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8 font-sans text-black">
      <h1 className="text-3xl font-extrabold font-mono text-black">Terms of Service</h1>
      <p className="text-xs text-zinc-500 font-mono">Last updated: July 16, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed text-zinc-700 font-sans">
        <h2 className="text-xl font-bold font-mono text-black pt-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using AstroRomantic (astroromantic.com), you accept and agree to be bound by the terms and provisions of this agreement.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">2. Description of Service</h2>
        <p>
          AstroRomantic provides online astrology, numerology, and relationship calculator tools for educational, self-reflection, and entertainment purposes.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">3. Informational & Entertainment Disclaimer</h2>
        <p>
          All calculations, reports, horoscopes, and AI-generated outputs provided on this website are intended solely for entertainment and personal insight. They do not constitute financial, legal, medical, or professional mental health advice.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">4. Intellectual Property</h2>
        <p>
          All content, software, layout design, and branding on AstroRomantic are protected by intellectual property laws. You may not reproduce, redistribute, or create derivative works without prior permission.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">5. Contact Information</h2>
        <p>
          If you have questions regarding these terms, please contact us via our{" "}
          <a href="/contact/" className="underline text-rose-600 font-semibold">Contact Page</a>.
        </p>
      </section>
    </article>
  );
}
