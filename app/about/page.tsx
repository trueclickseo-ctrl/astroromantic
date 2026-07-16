import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AstroRomantic — Our Story & Mission",
  description: "AstroRomantic is a free platform offering retro-themed love calculators, numerology tools, couple name generators, and AI-powered romantic content.",
  alternates: { canonical: "https://astroromantic.com/about/" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold font-mono text-black">About AstroRomantic</h1>

      <section className="space-y-4 text-sm leading-relaxed text-zinc-700 font-mono">
        <p>
          <strong>AstroRomantic</strong> is a free, retro-themed web platform dedicated to love,
          numerology, and astrology tools. We believe that understanding cosmic energies and
          numerological vibrations can offer meaningful insights into relationships, compatibility,
          and personal growth.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">Our Mission</h2>
        <p>
          We aim to make numerology, astrology, and relationship tools accessible to everyone — for free,
          with no sign-ups required. Every calculator on AstroRomantic delivers instant results with
          detailed, educational interpretations based on established numerological and astrological traditions.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Numerology Calculators</strong> — Life Path, Name Numerology, Chaldean, Destiny Number, Soul Urge, Lucky Number, and more.</li>
          <li><strong>Love & Compatibility Tests</strong> — Love percentage, zodiac compatibility, soulmate score, marriage compatibility.</li>
          <li><strong>Couple Name Generators</strong> — Ship names, couple hashtags, nicknames, and matching usernames.</li>
          <li><strong>Wedding Tools</strong> — Date numerology, countdown timers, hashtag generators, and budget planners.</li>
          <li><strong>Relationship Quizzes</strong> — Love language, relationship health, anniversary calculators.</li>
          <li><strong>AI-Powered Generators</strong> — Love letters, wedding vows, romantic messages, proposal speeches.</li>
        </ul>

        <h2 className="text-xl font-bold text-black pt-4">Our Approach</h2>
        <p>
          AstroRomantic tools are designed for entertainment and self-reflection. While we draw on
          centuries-old numerological and astrological traditions, our calculators should not be
          considered professional relationship advice. They are meant to spark conversation, deepen
          self-understanding, and add a touch of cosmic wonder to your love life.
        </p>

        <h2 className="text-xl font-bold text-black pt-4">Contact</h2>
        <p>
          Have questions, feedback, or partnership inquiries? Visit our{" "}
          <a href="/contact/" className="underline text-blue-600">Contact page</a>.
        </p>
      </section>
    </article>
  );
}
