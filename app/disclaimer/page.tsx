import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | AstroRomantic",
  description: "Astrological and numerology disclaimer for AstroRomantic calculations and tools.",
  alternates: { canonical: "https://astroromantic.com/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8 font-sans text-black">
      <h1 className="text-3xl font-extrabold font-mono text-black">Astrological Disclaimer</h1>
      <p className="text-xs text-zinc-500 font-mono">Last updated: July 16, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed text-zinc-700 font-sans">
        <h2 className="text-xl font-bold font-mono text-black pt-4">Informational & Entertainment Purpose Only</h2>
        <p>
          AstroRomantic provides astrology, numerology, birth chart calculations, and relationship tools for informational, educational, and entertainment purposes only.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">No Professional Advice</h2>
        <p>
          The content on this website should not be used as a substitute for professional medical, legal, financial, or psychological advice. AstroRomantic does not make any guarantees regarding individual life outcomes, relationship longevity, or decision results based on our calculators.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">Client-Side Data Privacy</h2>
        <p>
          All calculations are computed locally inside your web browser. AstroRomantic does not store or transmit your personal birth data or birth details.
        </p>

        <h2 className="text-xl font-bold font-mono text-black pt-4">Contact</h2>
        <p>
          For any questions regarding our disclaimer, please reach out through our{" "}
          <a href="/contact/" className="underline text-rose-600 font-semibold">Contact Page</a>.
        </p>
      </section>
    </article>
  );
}
