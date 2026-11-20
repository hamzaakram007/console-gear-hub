import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://gear.neongulf.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Console Gear Hub — Compare SSDs, headsets, TVs & capture cards for PS5 / Xbox",
    template: "%s · Console Gear Hub",
  },
  description:
    "Honest side-by-side console gear comparisons for PS5 and Xbox Series: SSD storage, gaming headsets, TVs & monitors, and capture cards. Best overall, budget, and premium picks with Amazon affiliate links and a clear FTC disclosure.",
  keywords: [
    "console gear",
    "PS5 SSD",
    "Xbox headset",
    "gaming TV HDMI 2.1",
    "capture card console",
    "console comparison",
    "Amazon Associates",
  ],
  authors: [{ name: "Console Gear Hub" }],
  creator: "Console Gear Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Console Gear Hub",
    title: "Console Gear Hub — Console gear comparisons that stay honest",
    description:
      "Three picks per category for SSD, headset, display, and capture gear built for PS5 and Xbox Series—not PC mod shops.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Console Gear Hub",
    description:
      "Compare console SSDs, headsets, TVs, and capture cards with clear affiliate disclosure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: "#04121c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Console Gear Hub",
    url: siteUrl,
    description:
      "Side-by-side console gear comparisons for PS5 and Xbox Series with affiliate disclosure.",
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AffiliateDisclosure variant="banner" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
