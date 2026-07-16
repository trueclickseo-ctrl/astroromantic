import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AstroRomantic",
  description: "Get in touch with the AstroRomantic team. Questions, feedback, or partnership inquiries welcome.",
  alternates: { canonical: "https://astroromantic.com/contact/" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold font-mono text-black">Contact Us</h1>

      <section className="space-y-4 text-sm leading-relaxed text-zinc-700 font-mono">
        <p>
          We&apos;d love to hear from you! Whether you have feedback on our tools, a feature suggestion,
          a bug report, or a partnership inquiry — reach out and we&apos;ll get back to you.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">Get in Touch</h2>
        <div className="bg-white border-3 border-black rounded-xl p-6 space-y-3 shadow-[4px_4px_0px_#000000]">
          <p><strong>Email:</strong> hello@astroromantic.com</p>
          <p><strong>Website:</strong> <a href="https://astroromantic.com" className="underline text-blue-600">astroromantic.com</a></p>
        </div>

        <h2 className="text-xl font-bold text-black pt-4">Feedback</h2>
        <p>
          Found a bug or have a feature request? We actively improve AstroRomantic based on user feedback.
          Every suggestion is read and considered.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">Partnerships</h2>
        <p>
          Interested in collaborating? We&apos;re open to content partnerships, guest contributions,
          and cross-promotions with complementary platforms in the astrology, wellness, and relationships space.
        </p>
      </section>
    </article>
  );
}
