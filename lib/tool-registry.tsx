import React from "react";

export interface ToolConfig {
  title: string;
  description: string;
  directAnswer?: string;
  category: "numerology" | "love" | "couple-names" | "wedding" | "relationship" | "ai-generators";
  toolSlug: string;
  howItWorks?: { name: string; text: string }[];
  faqs: { question: string; answer: string }[];
  educationalTitle?: string;
  educationalBody: React.ReactNode;
  closingBody?: React.ReactNode;
  relatedTools: { name: string; href: string }[];
}

export const toolRegistry: Record<string, ToolConfig> = {
  // --- NUMEROLOGY ---
  "life-path-calculator": {
    title: "Life Path Number Calculator",
    description: "Discover your life path number, destiny, and core personality traits using Pythagorean numerology.",
    category: "numerology",
    toolSlug: "life-path-calculator",
    educationalBody: (
      <div className="space-y-6">
        <p>
          There's a moment almost everyone who discovers numerology has — you type in your birthday, watch a single number appear on the screen, and think: <em>wait, that's oddly accurate.</em> That's the pull of the life path number. It's not a horoscope you share with a twelfth of the planet. It's built from the one date that belongs entirely to you — the day you were born — and it's often the first number people calculate when they start exploring numerology, because it tends to explain more about a person's instincts, choices, and recurring life lessons than almost anything else in a numerology chart.
        </p>
        <p>
          If you've just used the calculator above and landed on a number, this guide will walk you through what that number is actually telling you, how it was calculated, and why numerologists treat it as the cornerstone of your entire numerology profile.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          What Is a Life Path Number, Exactly?
        </h2>
        <p>
          Your life path number is a single digit (or, in some cases, a master number) derived entirely from your full birth date — month, day, and year. Think of it as the numerological equivalent of your sun sign in astrology, except instead of tracking where the sun sat in the sky the moment you were born, it tracks the mathematical "vibration" encoded in your birthday.
        </p>
        <p>
          Numerologists describe it as the broadest, most defining number in your chart because it doesn't just describe a trait — it describes a <em>direction</em>. It points toward the lessons you're here to learn, the natural talents you arrived with, and the kind of experiences that tend to keep showing up in your life whether you go looking for them or not. Where your expression number (sometimes called your destiny number) speaks to your name and outer personality, your life path speaks to the deeper blueprint underneath it.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          How to Calculate Your Life Path Number by Hand
        </h2>
        <p>
          You don't need the calculator to work this out — it's simple reduction math, and doing it yourself is a good way to actually understand what's happening behind the scenes.
        </p>
        <p>
          <strong>Step 1: Break your birth date into month, day, and year.</strong><br />
          Reduce each part separately to a single digit by adding its numbers together, unless you land on 11, 22, or 33 — the master numbers, which are never reduced further.
        </p>
        <p>
          <strong>Step 2: Add the three reduced numbers together.</strong><br />
          Take your reduced month, day, and year and add them.
        </p>
        <p>
          <strong>Step 3: Reduce the final total.</strong><br />
          If the sum is a double-digit number (other than 11, 22, or 33), add those digits together one more time until you reach a single digit or a master number.
        </p>
        <p>
          Here's a worked example: someone born on November 24, 1994.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300">
          <li>Month: November is the 11th month, and 11 is already a master number, so it stays as 11.</li>
          <li>Day: 24 becomes 2 + 4 = 6.</li>
          <li>Year: 1994 becomes 1 + 9 + 9 + 4 = 23, then 2 + 3 = 5.</li>
          <li>Add them: 11 + 6 + 5 = 22.</li>
          <li>22 is itself a master number, so this person's life path number is 22.</li>
        </ul>
        <p>
          A quick word of caution: a lot of free calculators online skip the "reduce each part separately" step and instead just add every digit of the full date together at once. That shortcut can accidentally erase a hidden master number or manufacture one that shouldn't be there. It's a small detail, but it's the difference between an accurate reading and a rough guess — and it's exactly why using a properly built calculator (rather than doing quick mental math) tends to give more reliable results.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Life Path Numbers 1 Through 9, and the Master Numbers
        </h2>
        <p>
          Every life path number carries its own personality, strengths, and blind spots. Here's a natural-language overview of each one:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>Life Path 1 — The Initiator.</strong> Independent, driven, and naturally suited to leadership. Ones learn early to trust their own instincts rather than wait for permission.</li>
          <li><strong>Life Path 2 — The Peacemaker.</strong> Sensitive, diplomatic, and deeply attuned to other people's emotions. Their gift is harmony; their lesson is standing firm without losing that gift.</li>
          <li><strong>Life Path 3 — The Communicator.</strong> Expressive, creative, and often the person who lights up a room. Threes are here to create and to be seen doing it.</li>
          <li><strong>Life Path 4 — The Builder.</strong> Practical, disciplined, and happiest when constructing something that lasts. Fours thrive on structure and distrust shortcuts.</li>
          <li><strong>Life Path 5 — The Free Spirit.</strong> Curious, adaptable, and allergic to routine. Fives are here to experience as much of life as possible and to teach others that change isn't dangerous.</li>
          <li><strong>Life Path 6 — The Nurturer.</strong> Responsible, protective, and drawn toward home, family, and community. Sixes often become the emotional anchor of every group they're in.</li>
          <li><strong>Life Path 7 — The Seeker.</strong> Analytical, private, and pulled toward deeper truths — spiritual, scientific, or both. Sevens need solitude the way other numbers need company.</li>
          <li><strong>Life Path 8 — The Powerhouse.</strong> Ambitious, business-minded, and comfortable with authority and money. Eights are here to master the material world without letting it master them.</li>
          <li><strong>Life Path 9 — The Humanitarian.</strong> Compassionate, idealistic, and often carrying an old-soul quality. Nines are here to give, release, and see the bigger picture.</li>
          <li><strong>Master Number 11 — The Intuitive.</strong> An amplified 2; visionary, sensitive, and often gifted with a strong sixth sense, paired with the pressure of high personal expectations.</li>
          <li><strong>Master Number 22 — The Master Builder.</strong> An amplified 4; capable of turning big, idealistic dreams into real, tangible structures that benefit large numbers of people.</li>
          <li><strong>Master Number 33 — The Master Teacher.</strong> An amplified 6; rare, and associated with a life devoted to healing, teaching, and unconditional compassion, usually only fully activated later in life.</li>
        </ul>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Life Path Number and Compatibility
        </h2>
        <p>
          One of the most common reasons people search for their life path number isn't curiosity about themselves at all — it's curiosity about someone else. Life path compatibility looks at how two numbers interact: some pairings (like 2 and 6, or 1 and 5) tend to flow naturally, while others (like 4 and 5) can create friction simply because their core needs point in different directions. It's not a verdict on whether a relationship will work — it's more like a weather forecast, giving you a heads-up on where the natural ease and the natural friction points are likely to show up.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Can my life path number change?",
        answer: "No. Because it's built from your birth date, which never changes, your life path number is fixed for life. It doesn't shift with age, location, or life events the way some other numerology numbers (like personal year numbers) do."
      },
      {
        question: "What if I get a Master Number — do I use it or reduce it?",
        answer: "Keep it. Master numbers (11, 22, 33) carry a distinct, more intense meaning than their reduced single-digit counterparts and should never be collapsed down for the sake of tidiness."
      },
      {
        question: "Is life path number the same as destiny number?",
        answer: "No, and this is one of the most common mix-ups in numerology. Your life path number comes from your birth date. Your destiny (or expression) number comes from the letters in your full birth name. They work together, but they're calculated completely differently."
      },
      {
        question: "Which is more important, life path or zodiac sign?",
        answer: "Neither outranks the other — they're different systems measuring different things. Your zodiac sign comes from astrology and the position of the sun at your birth; your life path number comes from numerology and the digits of your birth date. Many people find the richest self-understanding by looking at both side by side."
      }
    ],
    closingBody: (
      <p>
        Ready to see how your life path stacks up against someone else's? Try the{" "}
        <a href="/love/love-calculator/" className="text-amber-400 hover:underline font-medium">
          compatibility calculator
        </a>{" "}
        to compare two numbers directly, or explore your{" "}
        <a href="/numerology/destiny-number-calculator/" className="text-amber-400 hover:underline font-medium">
          destiny number
        </a>{" "}
        next to see the other half of your numerology profile.
      </p>
    ),
    relatedTools: [
      { name: "Destiny Number Calculator", href: "/numerology/destiny-number-calculator/" },
      { name: "Love Compatibility Calculator", href: "/love/love-calculator/" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator/" }
    ]
  },

  "destiny-number-calculator": {
    title: "Destiny Number Calculator",
    description: "Free online Destiny Number Calculator tool. Get instant results and calculations.",
    category: "numerology",
    toolSlug: "destiny-number-calculator",
    educationalBody: (
      <div className="space-y-6">
        <p>
          Your parents picked your name before they knew who you'd become — before your personality, your talents, or your quirks had even started to form. And yet, according to numerology, that name wasn't random at all. Every letter carries a numeric value, and when you add them all together, they form what's known as your destiny number (also called your fate number or expression number) — a figure numerologists believe reveals the direction your life's purpose is meant to take.
        </p>
        <p>
          If your life path number describes the terrain you're meant to travel, your destiny number describes the vehicle you're meant to travel it in — the natural talents, tendencies, and outer expression that were already encoded in your name the moment it was chosen.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Destiny Number, Fate Number, Expression Number — Are They the Same Thing?
        </h2>
        <p>
          Yes. This trips a lot of people up, so it's worth clearing up early: destiny number, fate number, and expression number all refer to the exact same calculation. Different numerology traditions and different websites simply prefer different labels for it. Whichever term you searched, you're looking for the same result — a number derived from every letter in your full birth name.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          How the Destiny Number Is Calculated
        </h2>
        <p>
          The math follows the same Pythagorean system used throughout numerology, where each letter of the alphabet maps to a number from 1 to 9:
        </p>

        <div className="overflow-x-auto my-6 border border-white/10 rounded-xl bg-white/5 p-2">
          <table className="w-full text-center text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-amber-400 font-semibold">
                <th className="py-2 px-3">1</th>
                <th className="py-2 px-3">2</th>
                <th className="py-2 px-3">3</th>
                <th className="py-2 px-3">4</th>
                <th className="py-2 px-3">5</th>
                <th className="py-2 px-3">6</th>
                <th className="py-2 px-3">7</th>
                <th className="py-2 px-3">8</th>
                <th className="py-2 px-3">9</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              <tr>
                <td className="py-2 px-3">A</td>
                <td className="py-2 px-3">B</td>
                <td className="py-2 px-3">C</td>
                <td className="py-2 px-3">D</td>
                <td className="py-2 px-3">E</td>
                <td className="py-2 px-3">F</td>
                <td className="py-2 px-3">G</td>
                <td className="py-2 px-3">H</td>
                <td className="py-2 px-3">I</td>
              </tr>
              <tr>
                <td className="py-2 px-3">J</td>
                <td className="py-2 px-3">K</td>
                <td className="py-2 px-3">L</td>
                <td className="py-2 px-3">M</td>
                <td className="py-2 px-3">N</td>
                <td className="py-2 px-3">O</td>
                <td className="py-2 px-3">P</td>
                <td className="py-2 px-3">Q</td>
                <td className="py-2 px-3">R</td>
              </tr>
              <tr>
                <td className="py-2 px-3">S</td>
                <td className="py-2 px-3">T</td>
                <td className="py-2 px-3">U</td>
                <td className="py-2 px-3">V</td>
                <td className="py-2 px-3">W</td>
                <td className="py-2 px-3">X</td>
                <td className="py-2 px-3">Y</td>
                <td className="py-2 px-3">Z</td>
                <td className="py-2 px-3"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Step 1:</strong> Write out your full name exactly as it appears on your birth certificate — first, middle, and last. This matters: a married name, nickname, or professional alias creates a different vibration and won't give you your true destiny number.
        </p>
        <p>
          <strong>Step 2:</strong> Convert each letter into its corresponding number using the chart above.
        </p>
        <p>
          <strong>Step 3:</strong> Add the numbers within each name (first, middle, last) separately, reducing each to a single digit or master number.
        </p>
        <p>
          <strong>Step 4:</strong> Add the totals for each name together, then reduce that final sum the same way — to a single digit, or to 11, 22, or 33 if a master number appears.
        </p>
        <p>
          A quick worked example using the name "John Michael Smith":
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300">
          <li>First name (John): J=1, O=6, H=8, N=5 → 1+6+8+5 = 20 → 2+0 = 2</li>
          <li>Middle name (Michael): M=4, I=9, C=3, H=8, A=1, E=5, L=3 → 4+9+3+8+1+5+3 = 33 (a master number, so it stays as 33)</li>
          <li>Last name (Smith): S=1, M=4, I=9, T=2, H=8 → 1+4+9+2+8 = 24 → 2+4 = 6</li>
          <li>Add the three: 2 + 33 + 6 = 41 → 4+1 = 5</li>
        </ul>
        <p>
          This person's destiny number is 5.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          What Your Destiny Number Reveals
        </h2>
        <p>
          Because it's drawn from your name rather than your birthday, your destiny number leans more toward how your talents show up in the world — your career instincts, your communication style, and the kind of impact you're naturally built to make. Here's a quick snapshot of each number:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>1:</strong> Natural-born leaders with an instinct for originality and independence.</li>
          <li><strong>2:</strong> Diplomats and collaborators, gifted at reading a room and building bridges.</li>
          <li><strong>3:</strong> Communicators and creatives, drawn to self-expression in whatever form fits them.</li>
          <li><strong>4:</strong> Organizers and builders, most fulfilled when creating something stable and lasting.</li>
          <li><strong>5:</strong> Adventurers and connectors, energized by variety, travel, and freedom.</li>
          <li><strong>6:</strong> Caretakers and community-builders, often pulled toward service and family roles.</li>
          <li><strong>7:</strong> Analysts and truth-seekers, happiest doing deep, focused, often solitary work.</li>
          <li><strong>8:</strong> Executives and dealmakers, comfortable with ambition, money, and authority.</li>
          <li><strong>9:</strong> Humanitarians and idealists, driven by a bigger picture than their own success.</li>
          <li><strong>11 / 22 / 33 (Master Numbers):</strong> An amplified, higher-pressure version of 2, 4, or 6 — associated with unusually strong intuitive, structural, or teaching gifts.</li>
        </ul>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Destiny Number vs. Life Path Number: What's the Difference?
        </h2>
        <p>
          This is the single most common point of confusion in numerology, so it deserves a clear answer: your <strong>life path number</strong> comes from your birth date and describes your overall life journey and the lessons you're here to learn. Your <strong>destiny number</strong> comes from your birth name and describes how your natural talents get expressed outwardly. One is about the path; the other is about the vehicle. Numerologists typically look at both together, because a strong destiny number that clashes with your life path can point to inner tension between what you're naturally good at and what your life circumstances keep steering you toward.
        </p>
        <p>
          Two related numbers often calculated alongside your destiny number:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>Soul Urge Number</strong> — built only from the vowels in your name, this reveals your inner desires and what genuinely motivates you beneath the surface.</li>
          <li><strong>Personality Number</strong> — built only from the consonants, this reveals the impression you tend to make on others before they get to know you.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        question: "Does changing my name change my destiny number?",
        answer: "Your original destiny number, based on your birth certificate name, stays with you for life. However, many numerologists also calculate a \"minor\" expression number from a current or married name, treating it as an overlay rather than a replacement."
      },
      {
        question: "Why do some people say destiny number and fate number are different?",
        answer: "In most Western (Pythagorean) numerology resources, they're treated as identical terms. A small number of traditions use \"fate number\" to describe a birth-date-based calculation similar to the life path number instead — so if a result feels off, it's worth checking which method a given calculator is using."
      },
      {
        question: "What if my destiny number is a Master Number?",
        answer: "Master numbers (11, 22, 33) come with heightened potential and, often, heightened pressure. They're generally seen as a \"more\" version of their base number — 11 is an amplified 2, 22 an amplified 4, and 33 an amplified 6."
      },
      {
        question: "How does my destiny number affect relationships?",
        answer: "Comparing destiny numbers with a partner can reveal how well your outward personalities and expressed talents mesh day to day, which complements — rather than replaces — a life path compatibility comparison."
      }
    ],
    closingBody: (
      <p>
        Curious how your destiny number lines up with your life path number, or how it compares to a partner's? Use the{" "}
        <a href="/numerology/life-path-calculator/" className="text-amber-400 hover:underline font-medium">
          life path calculator
        </a>{" "}
        next, or run a{" "}
        <a href="/love/love-calculator/" className="text-amber-400 hover:underline font-medium">
          full compatibility check
        </a>{" "}
        to see the bigger picture.
      </p>
    ),
    relatedTools: [
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Love Compatibility Calculator", href: "/love/love-calculator/" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator/" }
    ]
  },

  "name-numerology-calculator": {
    title: "Name Numerology Calculator (Pythagorean)",
    description: "Calculate your Destiny, Soul Urge, and Personality numbers based on the Pythagorean system.",
    category: "numerology",
    toolSlug: "name-numerology-calculator",
    faqs: [
      { question: "What name should I use?", answer: "Always use your full name at birth as recorded on your birth certificate for the most accurate foundation." },
      { question: "What is the difference between Pythagorean and Chaldean?", answer: "Pythagorean uses a linear 1-9 system, while Chaldean uses a spiritual 1-8 system based on vibrational sound values." },
      { question: "What does the Soul Urge number represent?", answer: "Also known as the Heart's Desire, it represents your inner motivations, secret yearnings, and what truly makes you happy." },
      { question: "How is the Personality number calculated?", answer: "It is calculated by summing only the consonants in your name, representing how others perceive you." },
      { question: "Can a name change affect my numerology?", answer: "Yes, a new legal or nickname changes your secondary vibration, but the birth name remain the core blueprint." }
    ],
    educationalTitle: "Acoustic Resonance & Letter Mapping in Pythagorean Gematria",
    educationalBody: (
      <span>
        Pythagorean name numerology operates on the premise that letters are symbols of phonetic frequencies. The Greek system of isopsephy and the Hebrew system of Gematria are the direct historical ancestors of modern name calculators. By assigning numerical values (1 through 9) to letters, we convert alphabetical patterns into quantitative variables. Under this system, the Destiny Number representing the 'outer self' is computed by summing the value of all characters in the full name, while the Soul Urge (inner motivations) sums only the vowels, and the Personality (social mask) sums the consonants. These calculations trace back to the study of harmonics and acoustics popularized by early Greek academies. For historical context on the development of alphabets and numerical values, see the{" "}
        <a
          href="https://www.britannica.com/topic/gematria"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-amber-400 hover:text-amber-300 font-semibold"
        >
          Encyclopaedia Britannica's history of Gematria
        </a>
        .
      </span>
    ),
    relatedTools: [
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Destiny Number Calculator", href: "/numerology/destiny-number-calculator/" },
      { name: "Soul Urge Calculator", href: "/numerology/soul-urge-number-calculator/" }
    ]
  },

  "chaldean-numerology-calculator": {
    title: "Chaldean Numerology Calculator",
    description: "Decode your name's spiritual meaning using the ancient Chaldean sound-vibration system.",
    category: "numerology",
    toolSlug: "chaldean-numerology-calculator",
    faqs: [
      { question: "Why is there no number 9 in Chaldean mapping?", answer: "Ancient Chaldeans believed 9 was a sacred, holy number that represents the divine and should not be mapped directly to letters." },
      { question: "What is a compound number?", answer: "It is the double-digit sum before reduction, which carries mystical meanings and warnings." },
      { question: "Is Chaldean more accurate than Pythagorean?", answer: "Many spiritual practitioners prefer Chaldean because it is based on sound vibration rather than alphabetical order." },
      { question: "How do I interpret compound number 10?", answer: "Known as the 'Wheel of Fortune', it indicates success, honor, and carrying out planned ambitions." },
      { question: "Which name should I enter?", answer: "For Chaldean, calculate the name you are most commonly called or use daily, as it represents your current active energy." }
    ],
    educationalTitle: "Ancient Babylonian Sound Science and Chaldean Astrology",
    educationalBody: (
      <span>
        The Chaldean system originated in ancient Mesopotamia (Chaldea/Babylon) and was heavily integrated with astronomical observations. Unlike the sequential Pythagorean system, Chaldean letter assignments are determined entirely by the sound frequency and acoustic vibration of spoken phonemes. This system focuses on compound double-digit numbers (10 through 52) which represent external forces, luck, and karmic destiny. The single digit (1 to 8) represents the inner person. The number 9 was held as sacred, representing the infinite divine boundary, and was never assigned to any individual letter, though it can appear as a final reduced sum. The historical Chaldean Empire and its advanced mathematics and astronomy laid the foundation for modern Western astrology and numerological tables. Read more about the history of the Chaldeans at the{" "}
        <a
          href="https://www.britannica.com/place/Chaldea"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-amber-400 hover:text-amber-300 font-semibold"
        >
          Encyclopaedia Britannica article on Chaldea
        </a>
        .
      </span>
    ),
    relatedTools: [
      { name: "Name Numerology Calculator", href: "/numerology/name-numerology-calculator/" },
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Lucky Number Calculator", href: "/numerology/lucky-number-calculator/" }
    ]
  },

  // --- LOVE CALCULATORS ---
  "love-calculator": {
    title: "Love Compatibility Calculator",
    description: "Determine your compatibility score with your partner based on name-vibration analysis.",
    category: "love",
    toolSlug: "love-calculator",
    educationalBody: (
      <div className="space-y-6">
        <p>
          Almost everyone who's ever had a crush has done the mental math — same interests, same sense of humor, same weird sleep schedule, surely that means something. A love compatibility calculator takes that instinct and gives it a framework, using birth dates, names, zodiac signs, or a mix of all three to estimate how naturally two people's energies align.
        </p>
        <p>
          It won't replace a real conversation, and no serious numerologist or astrologer would claim it can predict the future of a relationship. What it can do is highlight patterns — the places where two people are likely to click without effort, and the places where a relationship might need a little more patience and communication to thrive.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          How a Love Compatibility Calculator Actually Works
        </h2>
        <p>
          Most compatibility tools blend two or three different systems, and understanding each one helps you read your results more accurately.
        </p>
        <p>
          <strong>1. Zodiac (astrological) compatibility</strong><br />
          This method compares sun signs — and sometimes moon signs and rising signs for a fuller synastry picture — based on the classical elements: fire, earth, air, and water. Signs that share an element (like two fire signs) tend to understand each other instinctively, while opposite or clashing elements can create either magnetic attraction or friction, depending on the specific pairing.
        </p>
        <p>
          <strong>2. Numerology compatibility</strong><br />
          This method reduces each person's birth date (or full name) into a life path number, then compares how those two numbers historically interact. Certain life path pairings — like 2 and 6, or 3 and 5 — tend to flow with ease, while others require more conscious effort to balance differing needs.
        </p>
        <p>
          <strong>3. Name-based methods</strong><br />
          Older, more playful traditions — like the FLAMES game many people remember from childhood — assign meaning to shared and differing letters between two names. These are lighter-hearted than astrology or numerology but remain popular because they're fast, simple, and fun to try with a crush.
        </p>
        <p>
          A comprehensive love compatibility calculator layers these methods together, then produces a percentage score alongside a breakdown of specific relationship dimensions — usually things like emotional connection, communication style, physical chemistry, and long-term stability.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          What a Compatibility Score Actually Means
        </h2>
        <p>
          It's worth being upfront about this: a high compatibility score is not a guarantee, and a lower score is not a red flag. Relationships are built on choices, communication, and effort — not just cosmic math. What a compatibility score is genuinely useful for is context. A high score can validate a connection that already feels easy. A moderate or lower score isn't a warning sign so much as a nudge to pay closer attention to the areas most likely to need extra patience, whether that's differing communication styles, contrasting paces of emotional openness, or simply different definitions of stability.
        </p>
        <p>
          Think of it the way you'd think of a personality assessment at work — genuinely insightful, occasionally uncannily accurate, but never a substitute for actually getting to know the person in front of you.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          The Key Dimensions Most Calculators Measure
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>Emotional Compatibility</strong> — how naturally you understand and support each other's feelings.</li>
          <li><strong>Communication Style</strong> — whether your ways of expressing needs, conflict, and affection line up or need translating.</li>
          <li><strong>Physical & Romantic Chemistry</strong> — the spark factor, often drawn from Venus and Mars placements in astrology-based tools.</li>
          <li><strong>Long-Term Stability</strong> — how well your core values, life goals, and pace of commitment align over time.</li>
          <li><strong>Friendship Foundation</strong> — the day-to-day ease of simply enjoying each other's company, independent of romance.</li>
        </ul>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Love Compatibility Test vs. Love Compatibility Calculator: Any Difference?
        </h2>
        <p>
          Functionally, no — both terms describe the same kind of tool, and people search for them interchangeably. "Test" tends to imply a quicker, more playful format (think a short quiz you'd share with friends), while "calculator" implies something using real birth data and a more detailed methodology. On most sites, including the tools here, they draw from the same underlying compatibility engine.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Getting the Most Accurate Results
        </h2>
        <p>
          A few things genuinely improve the accuracy of any love compatibility calculator:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>Use full, accurate birth dates</strong> for both people whenever possible — numerology-based results depend entirely on this.</li>
          <li><strong>Use birth names rather than nicknames</strong> if the tool incorporates name-based numerology, since nicknames carry a different vibrational value.</li>
          <li><strong>Add birth times and locations</strong> if the calculator supports full synastry — this unlocks moon sign and rising sign comparisons, which often explain emotional and instinctive compatibility far better than sun sign alone.</li>
          <li><strong>Treat the result as a conversation starter, not a verdict</strong> — the most useful compatibility readings are the ones that spark an honest conversation between two people about the dynamics the results point to.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        question: "Can a love compatibility calculator predict if a relationship will last?",
        answer: "No tool can predict the future of a relationship — compatibility calculators highlight natural tendencies and potential friction points, but the outcome of any relationship still comes down to communication, effort, and choice."
      },
      {
        question: "Why did I get different results on different websites?",
        answer: "Different calculators weigh zodiac, numerology, and name-based methods differently, and some use more detailed birth data (like exact birth time) than others. Slight variation between tools is completely normal."
      },
      {
        question: "Is a low compatibility score a bad sign?",
        answer: "Not necessarily. A lower score usually points to areas that need more conscious effort — different communication styles or paces, for example — rather than predicting incompatibility. Many long, happy relationships involve real, ongoing effort in exactly these areas."
      },
      {
        question: "Does love compatibility only apply to romantic relationships?",
        answer: "Not at all. The same underlying methods — zodiac elements, life path comparisons, name numerology — are commonly used to explore friendships, family dynamics, and even business partnerships."
      }
    ],
    closingBody: (
      <p>
        Want a deeper look at what's driving your results? Check your individual{" "}
        <a href="/numerology/life-path-calculator/" className="text-amber-400 hover:underline font-medium">
          life path number
        </a>{" "}
        and{" "}
        <a href="/numerology/destiny-number-calculator/" className="text-amber-400 hover:underline font-medium">
          destiny number
        </a>{" "}
        first, then run the compatibility calculator together for the full picture.
      </p>
    ),
    relatedTools: [
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Destiny Number Calculator", href: "/numerology/destiny-number-calculator/" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator/" }
    ]
  },

  "soulmate-calculator": {
    title: "Soulmate Calculator",
    description: "Evaluate spiritual affinity, Twin Flame resonance, and karmic ties based on name vibrations.",
    category: "love",
    toolSlug: "soulmate-calculator",
    educationalBody: (
      <div className="space-y-6">
        <p>
          Some connections feel calm and easy. Others feel like they've cracked something open in you — familiar in a way you can't explain, intense in a way that's almost uncomfortable, and impossible to shake even when the relationship itself is complicated. If you've ever found yourself wondering <em>what even is this bond</em>, a karmic soulmate twin flame calculator is built to help answer exactly that question, using birth dates and names to sort a connection into one of three categories: soulmate, twin flame, or karmic bond.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Twin Flame vs. Soulmate vs. Karmic Connection: The Real Difference
        </h2>
        <p>
          These three terms get used interchangeably online, but in spiritual and numerological traditions, they describe genuinely different dynamics.
        </p>
        <p>
          <strong>A soulmate</strong> is a connection that feels harmonious and safe. Soulmates click naturally, support each other's growth without much friction, and tend to build steady, peaceful partnerships. There isn't just one soulmate for each person — most traditions hold that we have many, across romantic relationships, friendships, and family.
        </p>
        <p>
          <strong>A twin flame</strong> is often described as your soul's mirror rather than its match. Twin flame connections tend to feel instant and overwhelming — intense recognition, magnetic pull, and a sense of being reflected back at yourself, flaws included. These bonds are transformative rather than comfortable; they tend to push both people toward growth, sometimes through periods of separation as much as togetherness.
        </p>
        <p>
          <strong>A karmic connection</strong> shows up to teach a specific lesson, and it isn't always meant to last. These relationships can feel powerful and consuming, often repeating a pattern until the lesson is finally learned — after which the connection frequently fades, having served its purpose.
        </p>
        <p>
          Knowing which category a relationship falls into isn't about labeling it correctly for its own sake — it's about understanding what the relationship is actually <em>for</em>, which changes how you show up inside it.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          How the Calculator Works
        </h2>
        <p>
          A karmic soulmate twin flame calculator draws on the same core numerology used throughout the rest of a numerology chart, applied to two people at once instead of one.
        </p>
        <p>
          <strong>Step 1: Life path numbers.</strong> Each person's birth date is reduced to a life path number using the standard numerology method — month, day, and year each reduced separately, then combined.
        </p>
        <p>
          <strong>Step 2: Name-based numerology.</strong> If names are included, each is converted into its own numerological value, adding a second layer to the comparison beyond birth date alone.
        </p>
        <p>
          <strong>Step 3: Comparing the numbers.</strong> The calculator looks at how the two life path numbers (and, where included, name numbers) interact — whether they mirror each other, sit in natural harmony, or create the kind of charged contrast associated with karmic or twin flame dynamics.
        </p>
        <p>
          <strong>Step 4: The result.</strong> Most calculators translate this comparison into a percentage score and a connection type, often across a small number of tiers — for example, a very high alignment might read as a "mirror soul" or twin flame connection, a strong but gentler alignment as soulmate, and a more challenging, lesson-heavy alignment as karmic.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Signs Each Connection Tends to Show
        </h2>
        <p>
          <strong>You might be looking at a twin flame connection if:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300">
          <li>The recognition felt instant, almost disorienting.</li>
          <li>The relationship swings between intense closeness and periods of distance or separation.</li>
          <li>Being around this person pushes you to confront things about yourself you'd normally avoid.</li>
        </ul>
        <p>
          <strong>You might be looking at a soulmate connection if:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300">
          <li>Things feel easy and steady, without a lot of drama or push-pull.</li>
          <li>You feel safe being fully yourself around them from early on.</li>
          <li>The relationship supports your growth without requiring conflict to get there.</li>
        </ul>
        <p>
          <strong>You might be looking at a karmic connection if:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300">
          <li>The same argument or pattern keeps resurfacing no matter what changes.</li>
          <li>The pull toward this person is strong even when the relationship is clearly difficult.</li>
          <li>The connection seems to fade naturally once a specific lesson finally lands.</li>
        </ul>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          A Grounded Way to Use Your Result
        </h2>
        <p>
          It's worth saying plainly: these frameworks come from spiritual and numerological tradition, not from scientific research, and no calculator can tell you with certainty what another person means to you. The real value of a karmic soulmate twin flame calculator isn't the label itself — it's the reflection it prompts. If your result says "karmic," that's a good moment to ask honestly whether a repeating pattern in the relationship needs addressing. If it says "twin flame," it's worth checking whether the intensity you're feeling is genuinely mutual growth, or simply mutual chaos mistaken for destiny. Use the result as a starting point for self-reflection, not as the final word on the relationship.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Can I have more than one twin flame or soulmate?",
        answer: "Most traditions hold that everyone has exactly one twin flame but potentially many soulmates across different types of relationships — romantic, platonic, and familial."
      },
      {
        question: "Is a karmic connection always a bad thing?",
        answer: "No. Karmic connections can be some of the most transformative relationships a person experiences — they're just typically lesson-driven rather than built for permanence, which is different from being \"bad.\""
      },
      {
        question: "Do twin flame calculators work for any relationship, or only romantic ones?",
        answer: "While most people use them for romantic connections, the underlying numerology can be applied to any deeply significant relationship, including close friendships and family bonds."
      },
      {
        question: "Why did my result feel off compared to how the relationship actually feels?",
        answer: "Numerology-based tools are a reflection prompt built on birth data, not a full picture of a relationship's history, communication, or effort — treat a surprising result as a reason to reflect rather than a reason to doubt what you already know."
      }
    ],
    closingBody: (
      <p>
        Curious how the numbers behind your connection break down further? Try the{" "}
        <a href="/numerology/life-path-calculator/" className="text-amber-400 hover:underline font-medium">
          life path compatibility calculator
        </a>{" "}
        to compare your core numbers directly, or run a{" "}
        <a href="/love/love-calculator/" className="text-amber-400 hover:underline font-medium">
          full love compatibility check
        </a>{" "}
        for a broader read on the relationship.
      </p>
    ),
    relatedTools: [
      { name: "Love Compatibility Calculator", href: "/love/love-calculator/" },
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Anniversary Calculator", href: "/relationship/anniversary-calculator/" }
    ]
  },

  "anniversary-calculator": {
    title: "Anniversary Calculator",
    description: "Calculate your anniversary milestones, next anniversary countdown, and traditional landmark gifts.",
    category: "relationship",
    toolSlug: "anniversary-calculator",
    educationalBody: (
      <div className="space-y-6">
        <p>
          There's a specific kind of satisfaction in knowing the exact number — not "about three years," but 1,142 days, down to the hour. An anniversary calculator turns a start date into that kind of precision, showing you exactly how long you've been together in years, months, and days, along with when your next milestone lands and what it traditionally represents.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          What an Anniversary Calculator Actually Shows You
        </h2>
        <p>
          At its core, an anniversary calculator does one simple thing very well: it measures the time between your relationship's start date and today. But a good one goes a few steps further, giving you:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>Exact duration</strong> — years, months, days (and often hours) since your start date.</li>
          <li><strong>Next anniversary date</strong> — the exact upcoming date of your next yearly milestone.</li>
          <li><strong>Countdown</strong> — how many days remain until that milestone arrives.</li>
          <li><strong>Milestone markers</strong> — smaller, meaningful checkpoints like 100 days, 6 months, or 1,000 days together, which are especially popular for couples early in a relationship.</li>
          <li><strong>Traditional gift themes</strong> — the customary material or symbol associated with each year, from paper (year one) to gold (year fifty).</li>
        </ul>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Choosing the Right "Start Date"
        </h2>
        <p>
          This trips people up more often than you'd expect, because relationships rarely have one single, obvious beginning. A few common approaches:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>First date</strong> — the day you actually went out together for the first time.</li>
          <li><strong>"Official" date</strong> — the day you both agreed to be exclusive or called yourselves a couple.</li>
          <li><strong>First meeting</strong> — for couples who count from the day they met, even before dating began.</li>
          <li><strong>Wedding date</strong> — for married couples, this typically becomes the sole anniversary reference point going forward.</li>
        </ul>
        <p>
          There's no universally "correct" answer here. The right start date is whichever one genuinely feels like the true beginning of your story to both of you — consistency matters more than precision when it comes to picking it.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Traditional Anniversary Gift Themes by Year
        </h2>
        <p>
          Anniversary gift traditions date back generations, originally tied to materials that symbolized the relative durability of a marriage at each stage. Here's the classic Western list:
        </p>

        <div className="overflow-x-auto my-6 border border-white/10 rounded-xl bg-white/5 p-2">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-amber-400 font-semibold">
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Traditional Theme</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              <tr><td className="py-2 px-4">1</td><td className="py-2 px-4">Paper</td></tr>
              <tr><td className="py-2 px-4">2</td><td className="py-2 px-4">Cotton</td></tr>
              <tr><td className="py-2 px-4">3</td><td className="py-2 px-4">Leather</td></tr>
              <tr><td className="py-2 px-4">5</td><td className="py-2 px-4">Wood</td></tr>
              <tr><td className="py-2 px-4">10</td><td className="py-2 px-4">Tin</td></tr>
              <tr><td className="py-2 px-4">15</td><td className="py-2 px-4">Crystal</td></tr>
              <tr><td className="py-2 px-4">20</td><td className="py-2 px-4">China</td></tr>
              <tr><td className="py-2 px-4">25</td><td className="py-2 px-4">Silver</td></tr>
              <tr><td className="py-2 px-4">30</td><td className="py-2 px-4">Pearl</td></tr>
              <tr><td className="py-2 px-4">40</td><td className="py-2 px-4">Ruby</td></tr>
              <tr><td className="py-2 px-4">50</td><td className="py-2 px-4">Gold</td></tr>
              <tr><td className="py-2 px-4">60</td><td className="py-2 px-4">Diamond</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          These themes aren't obligatory — most couples treat them as playful inspiration rather than a strict shopping list. A "wood" fifth anniversary might just as easily become a weekend at a cabin as an actual wooden gift, and a lot of modern couples mix in contemporary alternatives alongside the traditional ones.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          Milestones Worth Celebrating Before Year One
        </h2>
        <p>
          Yearly anniversaries get most of the attention, but plenty of couples — especially earlier in a relationship — celebrate smaller milestones too:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li><strong>100 days together</strong>, a milestone with particularly strong roots in dating culture across parts of Asia.</li>
          <li><strong>6 months</strong>, often the first real checkpoint for a still-new relationship.</li>
          <li><strong>1,000 days</strong>, a favorite for couples who like tracking things by the day rather than the month.</li>
        </ul>
        <p>
          None of these are required celebrations — but marking them is a low-effort, high-reward way to build small traditions into a relationship early, long before the first "real" anniversary arrives.
        </p>

        <h2 className="font-serif text-2xl font-semibold border-b border-white/5 pb-2 text-zinc-200 mt-8 mb-4">
          A Numerology Angle on Your Anniversary Date
        </h2>
        <p>
          Because this is a number-driven idea already, some couples enjoy taking it one step further: reducing their relationship start date the same way you'd calculate a life path number. Adding the digits of your start date down to a single number (or master number) gives your relationship its own numerological "life path" of sorts — a fun, optional layer for couples who already enjoy numerology, and a natural next step after using an anniversary calculator.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Does an anniversary calculator account for leap years?",
        answer: "Yes — a properly built calculator accounts for leap years automatically, which is exactly the kind of calendar math that becomes error-prone if you try to work it out by hand over a span of several years."
      },
      {
        question: "What if my partner and I disagree on our start date?",
        answer: "It happens more than people admit. The simplest fix is picking whichever date feels most meaningful to both of you and agreeing to use it going forward — the \"correct\" date matters far less than having one you both celebrate together."
      },
      {
        question: "Can I use an anniversary calculator for things other than romantic relationships?",
        answer: "Absolutely. The same tool works for tracking work anniversaries, friendship milestones, or any other meaningful date you want to measure precisely."
      },
      {
        question: "Is there a difference between a relationship calculator and a wedding anniversary calculator?",
        answer: "Functionally, no — both measure elapsed time from a start date. \"Wedding anniversary calculator\" simply implies the start date is a marriage date rather than a dating milestone, and may lean more heavily on the traditional gift-theme list."
      }
    ],
    closingBody: (
      <p>
        Once you know exactly how long you've been together, it's worth checking how your numbers align, too — try the{" "}
        <a href="/love/love-calculator/" className="text-amber-400 hover:underline font-medium">
          love compatibility calculator
        </a>{" "}
        or compare your{" "}
        <a href="/numerology/life-path-calculator/" className="text-amber-400 hover:underline font-medium">
          life path numbers
        </a>{" "}
        for a deeper look at your connection.
      </p>
    ),
    relatedTools: [
      { name: "Love Compatibility Calculator", href: "/love/love-calculator/" },
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator/" }
    ]
  },

  "zodiac-love-calculator": {
    title: "Zodiac Love Calculator",
    description: "Find out if your astrological signs are a match made in heaven or bound for storms.",
    category: "love",
    toolSlug: "zodiac-love-calculator",
    faqs: [
      { question: "What elements are most compatible?", answer: "Fire and Air signs align beautifully, as do Earth and Water signs, representing mutual growth and nourishment." },
      { question: "Can incompatible signs have a great relationship?", answer: "Yes! Opposites often attract, and minor astrological friction can create passion and dynamic learning opportunities." },
      { question: "Does this look at moon signs?", answer: "This tool focuses on Sun sign elements, which represent core personalities. Moon signs represent emotional depth." },
      { question: "What is an element match?", answer: "Matching signs of the same element (e.g. Taurus and Virgo, both Earth) creates an easy, stable understanding." },
      { question: "What are the fire signs?", answer: "Aries, Leo, and Sagittarius are the Fire signs, characterized by passion, energy, and directness." }
    ],
    educationalTitle: "Astrological Elements and Harmonic Geometric Aspects",
    educationalBody: (
      <span>
        Classical astrology categorizes the twelve zodiac signs into four primary elements: Fire, Earth, Air, and Water. The compatibility score is determined by element interaction and angular aspects (trine, sextile, square, opposition) on the 360-degree ecliptic plane. Signs of the same element (trine aspects, 120° apart) share a harmonious vibrational link, while opposing signs (180° apart) can create high-tension/high-attraction dynamics. Fire and Air elements fuel one another, while Earth and Water nurture growth. Read about the history of the zodiac signs and elements in the{" "}
        <a
          href="https://www.britannica.com/topic/astrology"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-amber-400 hover:text-amber-300 font-semibold"
        >
          Encyclopaedia Britannica's guide on Astrology
        </a>
        .
      </span>
    ),
    relatedTools: [
      { name: "Love Calculator", href: "/love/love-calculator/" },
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator/" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator/" }
    ]
  }
};
export type { ToolConfig as ToolRegistryConfig };

