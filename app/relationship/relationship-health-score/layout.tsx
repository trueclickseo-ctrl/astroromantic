import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationship Health Score Calculator — Free Test | AstroRomantic",
  description: "Take the interactive relationship health assessment to evaluate communication, trust, and future alignment.",
  alternates: { canonical: "https://astroromantic.com/relationship/relationship-health-score/" },
  openGraph: {
    title: "Relationship Health Score Calculator — Free Test | AstroRomantic",
    description: "Take the interactive relationship health assessment to evaluate communication, trust, and future alignment.",
    url: "https://astroromantic.com/relationship/relationship-health-score/",
    siteName: "AstroRomantic",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Relationship Health Score Calculator — Free Test | AstroRomantic",
    description: "Take the interactive relationship health assessment to evaluate communication, trust, and future alignment.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
