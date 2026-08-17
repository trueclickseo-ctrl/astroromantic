import React from "react";
import type { Metadata } from "next";
import CalculatorsHubClient from "./hub-client";

const SITE_URL = "https://astroromantic.com";

export const metadata: Metadata = {
  title: "Astrology & Numerology Calculators Directory | AstroRomantic",
  description: "Explore our free suite of 33 original astrology and numerology calculators: Moon Sign, Kundli Matching, Life Path, Vimshottari Dasha, Mangal Dosha, Lo Shu Grid, KP Astrology & more.",
  alternates: { canonical: `${SITE_URL}/calculators/` },
  openGraph: {
    title: "Astrology & Numerology Calculators Directory | AstroRomantic",
    description: "Explore our free suite of 33 original astrology and numerology calculators: Moon Sign, Kundli Matching, Life Path, Vimshottari Dasha, Mangal Dosha, Lo Shu Grid & more.",
    url: `${SITE_URL}/calculators/`,
    siteName: "AstroRomantic",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Astrology & Numerology Calculators | AstroRomantic",
    description: "Free online suite of 33 astrology and numerology calculators with instant accurate calculations."
  }
};

export default function CalculatorsHubPage() {
  return <CalculatorsHubClient />;
}
