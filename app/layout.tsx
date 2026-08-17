import type { Metadata } from "next";
import "./globals.css";
import RetroMascot from "@/components/retro-mascot";
import RetroAudioInitializer from "@/components/retro-audio-initializer";
import Header from "@/components/header";
import FooterClient from "@/components/footer-client";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "AstroRomantic — Free Love, Numerology & Astrology Calculators",
    template: "%s",
  },
  description: "Free retro-themed love calculators, numerology tools, compatibility tests, couple name generators, and AI-powered romantic content. Instant results.",
  metadataBase: new URL("https://www.astroromantic.com"),
  alternates: { canonical: "https://www.astroromantic.com/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AstroRomantic — Free Love, Numerology & Astrology Calculators",
    description: "Free retro-themed love calculators, numerology tools, compatibility tests, couple name generators, and AI-powered romantic content.",
    url: "https://www.astroromantic.com/",
    siteName: "AstroRomantic",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "AstroRomantic — Free Love & Numerology Tools",
    description: "Free retro-themed love calculators, numerology tools, and AI romantic content generators.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AstroRomantic",
  url: "https://www.astroromantic.com",
  logo: "https://www.astroromantic.com/icon.svg",
  description: "Free retro-themed love calculators, numerology tools, and AI-powered romantic content generators.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AstroRomantic",
  url: "https://www.astroromantic.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TTHVT8NV');`,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-13T0HG75VL" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-13T0HG75VL', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f4f3ef] text-black">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTHVT8NV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          {/* Organization + WebSite Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />

          <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 space-y-4">
            <Header />

            {/* Main Content */}
            <main className="flex-1 flex flex-col">{children}</main>

            {/* Footer */}
            <FooterClient />
          </div>
          <RetroMascot />
          <RetroAudioInitializer />
        </LanguageProvider>
      </body>
    </html>
  );
}
