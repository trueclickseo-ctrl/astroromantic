import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AstroRomantic",
  description: "AstroRomantic privacy policy. Learn how we handle your data when you use our free love calculators and numerology tools.",
  alternates: { canonical: "https://astroromantic.com/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold font-mono text-black">Privacy Policy</h1>
      <p className="text-xs text-zinc-500 font-mono">Last updated: July 16, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed text-zinc-700 font-mono">
        <h2 className="text-xl font-bold text-black pt-4">1. Information We Collect</h2>
        <p>
          AstroRomantic is designed to respect your privacy. All calculations (numerology, love compatibility,
          couple names, etc.) are performed entirely in your browser. <strong>We do not collect, store, or
          transmit any personal data you enter into our calculators.</strong>
        </p>

        <h2 className="text-xl font-bold text-black pt-4">2. Cookies & Analytics</h2>
        <p>
          We may use standard web analytics tools (such as Google Analytics) to understand general
          traffic patterns, page views, and device types. These tools may use cookies. No personally
          identifiable information is collected through analytics.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">3. Third-Party Services</h2>
        <p>
          AstroRomantic does not sell, share, or transfer your data to third parties. We do not
          use advertising networks or tracking pixels.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">4. Data Retention</h2>
        <p>
          Since all calculations happen client-side in your browser, no user-entered data is stored
          on our servers. PDF certificates and share links are generated locally on your device.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">5. Children&apos;s Privacy</h2>
        <p>
          AstroRomantic is intended for general audiences. We do not knowingly collect data from
          children under 13.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">6. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be reflected on this page
          with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">7. Contact</h2>
        <p>
          If you have questions about this privacy policy, please visit our{" "}
          <a href="/contact/" className="underline text-blue-600">Contact page</a>.
        </p>
      </section>
    </article>
  );
}
