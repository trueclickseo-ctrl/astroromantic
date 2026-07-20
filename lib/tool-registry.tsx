import React from "react";

export interface ToolConfig {
  title: string;
  description: string;
  directAnswer: string;
  category: "numerology" | "love" | "couple-names" | "wedding" | "relationship" | "ai-generators";
  toolSlug: string;
  howItWorks: { name: string; text: string }[];
  faqs: { question: string; answer: string }[];
  educationalTitle: string;
  educationalBody: React.ReactNode;
  relatedTools: { name: string; href: string }[];
}

export const toolRegistry: Record<string, ToolConfig> = {
  // --- NUMEROLOGY ---
  "life-path-calculator": {
    title: "Life Path Number Calculator",
    description: "Discover your life path number, destiny, and core personality traits using Pythagorean numerology.",
    directAnswer: "Your Life Path Number reveals your core identity, life purpose, and path of growth. It is calculated by adding all digits of your full birth date and reducing the sum to a single digit (1-9) or a master number (11, 22, 33). For instance, a birthdate of Dec 15, 1995 reduces to Life Path 6, representing the Nurturer.",
    category: "numerology",
    toolSlug: "life-path-calculator",
    howItWorks: [
      { name: "Enter Date of Birth", text: "Select your month, day, and year of birth in the calculator input form." },
      { name: "Reduce to Single Digits", text: "The calculator reduces the month, day, and year individually to single digits (or Master Numbers: 11, 22, 33) according to Pythagorean standards." },
      { name: "Sum and Reduce", text: "Add the reduced values together and reduce the sum once more to get your final Life Path number." }
    ],
    faqs: [
      { question: "What is a Life Path Number?", answer: "It is the most significant number in your numerology chart, determined by your birthdate. It outlines your natural talents, challenges, and life's primary mission." },
      { question: "What are Master Numbers?", answer: "The numbers 11, 22, and 33 are considered Master Numbers. They possess higher spiritual potential and double the vibrational energy of their single-digit equivalents." },
      { question: "Can my Life Path Number change?", answer: "No. Since your birthdate remains constant, your Life Path Number never changes. It represents your permanent roadmap for this life." },
      { question: "How do I calculate it manually?", answer: "Reduce month, day, and year to single digits. Add them together. If the sum is a double digit (excluding 11, 22, or 33), add those digits together to get a single number." },
      { question: "Which Life Path numbers are most compatible?", answer: "Generally, numbers with similar vibrational frequencies align best (e.g., intellectual 1, 5, and 7; or emotional/nurturing 2, 4, 8, and 6)." }
    ],
    educationalTitle: "The Mathematical Blueprint of Your Life Path Number",
    educationalBody: (
      <span>
        In Pythagorean numerology, the date of birth is not considered a random occurrence, but a key to an individual's cosmic frequency. Pythagoras of Samos (c. 570 – c. 495 BC), the ancient Greek philosopher, taught that "all things are numbers" and that numbers represent the spiritual qualities of the universe. According to Pythagorean theory, the cosmos is governed by mathematical ratios resembling the musical intervals of the "Music of the Spheres". To learn more about Pythagoras and the history of mathematics, see the{" "}
        <a
          href="https://www.britannica.com/biography/Pythagoras"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-amber-400 hover:text-amber-300 font-semibold"
        >
          Encyclopaedia Britannica article on Pythagoras
        </a>
        . The Life Path calculation utilizes a linear addition method: let {"\\(D\\)"} be the day, {"\\(M\\)"} the month, and {"\\(Y\\)"} the year. We compute {"\\(L = f(f(D) + f(M) + f(Y))\\)"} where {"\\(f(n)\\)"} is the digital root function that sums digits repeatedly until a single digit or a Master Number is reached. This process strips away the layers of time to reveal the core vibrational essence of your birth.
      </span>
    ),
    relatedTools: [
      { name: "Name Numerology Calculator", href: "/numerology/name-numerology-calculator" },
      { name: "Chaldean Numerology Calculator", href: "/numerology/chaldean-numerology-calculator" },
      { name: "Lucky Number Calculator", href: "/numerology/lucky-number-calculator" }
    ]
  },
  "name-numerology-calculator": {
    title: "Name Numerology Calculator (Pythagorean)",
    description: "Calculate your Destiny, Soul Urge, and Personality numbers based on the Pythagorean system.",
    directAnswer: "The Name Numerology Calculator maps letters in your full name to numbers 1-9 to calculate your Destiny Number. This number describes your outer persona, natural capabilities, and what you are destined to achieve in this lifetime.",
    category: "numerology",
    toolSlug: "name-numerology-calculator",
    howItWorks: [
      { name: "Enter Full Name", text: "Provide your birth name exactly as it appears on your birth certificate." },
      { name: "Pythagorean Value Summation", text: "Letters are converted to numbers (A=1, B=2, ... I=9, J=1, etc.) and added up." },
      { name: "Receive Triple Report", text: "Get your Destiny Number (all letters), Soul Urge (vowels), and Personality Number (consonants)." }
    ],
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
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator" },
      { name: "Destiny Number Calculator", href: "/numerology/destiny-number-calculator" },
      { name: "Soul Urge Calculator", href: "/numerology/soul-urge-number-calculator" }
    ]
  },
  "chaldean-numerology-calculator": {
    title: "Chaldean Numerology Calculator",
    description: "Decode your name's spiritual meaning using the ancient Chaldean sound-vibration system.",
    directAnswer: "Chaldean numerology is an ancient system that maps letters to numbers 1-8 based on sound vibrations (leaving 9 as a sacred number). It focuses on compound numbers to reveal deep-seated karmic influences and hidden challenges in your name.",
    category: "numerology",
    toolSlug: "chaldean-numerology-calculator",
    howItWorks: [
      { name: "Enter Name", text: "Enter your first name, last name, or full name." },
      { name: "Sound-Vibration Translation", text: "The letters are mapped to values 1-8 based on Chaldean phonetics." },
      { name: "Compound Number Interpretation", text: "Analyze both the single-digit root and the double-digit compound number." }
    ],
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
      { name: "Name Numerology Calculator", href: "/numerology/name-numerology-calculator" },
      { name: "Life Path Calculator", href: "/numerology/life-path-calculator" },
      { name: "Lucky Number Calculator", href: "/numerology/lucky-number-calculator" }
    ]
  },

  // --- LOVE CALCULATORS ---
  "love-calculator": {
    title: "Love Compatibility Calculator",
    description: "Determine your compatibility score with your partner based on name-vibration analysis.",
    directAnswer: "The Love Calculator evaluates the energetic match between two names by calculating their combined numerology frequencies. By analyzing overlapping letter vibrations, it generates a compatibility percentage that indicates relationship potential.",
    category: "love",
    toolSlug: "love-calculator",
    howItWorks: [
      { name: "Enter Both Names", text: "Input your full name and your partner or crush's full name." },
      { name: "Analyze Letters", text: "The algorithm computes the numeric matches and overlapping phonetic alignments." },
      { name: "Get Compatibility Score", text: "See your love match percentage and an analysis of your partnership dynamics." }
    ],
    faqs: [
      { question: "How accurate is the Love Calculator?", answer: "While based on name numerology principles, relationship compatibility relies on many factors. Use this as a guide to name compatibility." },
      { question: "Does a high score guarantee success?", answer: "A high score indicates harmonious sound vibrations, but effort, communication, and commitment are necessary for long-term success." },
      { question: "Can I enter nicknames?", answer: "Yes! Entering the nicknames you use for each other represents your day-to-day emotional connection." },
      { question: "What does a score below 50% mean?", answer: "It suggests contrasting styles or friction, which can actually prompt growth and learning if handled with care." },
      { question: "Can I calculate compatibility for friends?", answer: "Absolutely! The tool works for assessing friendly connection and general energetic alignment." }
    ],
    educationalTitle: "Interpersonal Vibrational Sync: The Mathematics of Name Compatibility",
    educationalBody: (
      <span>
        Name compatibility calculations utilize alphabetical character frequencies to model compatibility. By summing the Pythagorean gematria values of each name, we generate two distinct numeric arrays. The compatibility score is calculated using a deterministic mod-based algorithm: let {"\\(V_1\\)"} and {"\\(V_2\\)"} be the total integer sums of the names. The final index is determined by {"\\(C = 45 + ((V_1 \\times 7 + V_2 \\times 13) \\pmod{51})\\)"}, ensuring a balanced, consistent, and repeatable compatibility score between 45% and 95%. Historically, compatibility calculations find roots in ancient wedding match-making systems, where scholars assessed the phonetic compatibility of couples to ensure family harmony. For modern research into name phonetics, social linguistics, and name choices, refer to studies on{" "}
        <a
          href="https://www.linguisticsociety.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-amber-400 hover:text-amber-300 font-semibold"
        >
          social linguistics and sound symbolism
        </a>
        .
      </span>
    ),
    relatedTools: [
      { name: "Zodiac Love Calculator", href: "/love/zodiac-love-calculator" },
      { name: "Relationship Compatibility Calculator", href: "/love/relationship-compatibility-calculator" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator" }
    ]
  },
  "zodiac-love-calculator": {
    title: "Zodiac Love Calculator",
    description: "Find out if your astrological signs are a match made in heaven or bound for storms.",
    directAnswer: "The Zodiac Love Calculator matches your sun signs and elements (Fire, Earth, Air, Water) to determine your astrological compatibility. A Fire and Air pairing, for instance, has high compatibility, whereas Fire and Water can cause friction.",
    category: "love",
    toolSlug: "zodiac-love-calculator",
    howItWorks: [
      { name: "Select Date of Births", text: "Select your birthday and your partner's birthday." },
      { name: "Determine Sun Signs", text: "The tool calculates both of your zodiac signs and respective elemental categories." },
      { name: "Render Astrological Report", text: "See your compatibility percentage based on elements and aspect compatibility." }
    ],
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
      { name: "Love Calculator", href: "/love/love-calculator" },
      { name: "Relationship Compatibility Calculator", href: "/love/relationship-compatibility-calculator" },
      { name: "Soulmate Calculator", href: "/love/soulmate-calculator" }
    ]
  }
};
export type { ToolConfig as ToolRegistryConfig };
