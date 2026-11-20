import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NeonGulf Console Gear Hub handles analytics, affiliate cookies, and personal information when you browse comparison and blog pages.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy · Console Gear Hub",
    description:
      "Privacy practices for NeonGulf Console Gear Hub, including affiliate links and analytics.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy · Console Gear Hub",
    description:
      "How NeonGulf handles data on Console Gear Hub comparison and blog pages.",
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: absoluteUrl("/privacy"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  return (
    <div className="page-wash relative">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <nav className="text-sm text-muted-soft" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-gulf">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">Privacy</span>
        </nav>

        <header className="mt-6">
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Last updated March 20, 2026. This policy explains what NeonGulf
            collects when you use Console Gear Hub at neongulf.com and related
            hosts such as gear.neongulf.com.
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
          <section aria-labelledby="overview">
            <h2
              id="overview"
              className="font-display text-2xl font-bold text-ink"
            >
              Overview
            </h2>
            <p className="mt-3">
              Console Gear Hub is primarily a static editorial site. We do not
              require an account to browse categories or blog posts. We aim to
              collect as little personal information as practical while running
              a useful affiliate comparison site.
            </p>
          </section>

          <section aria-labelledby="info-we-collect">
            <h2
              id="info-we-collect"
              className="font-display text-2xl font-bold text-ink"
            >
              Information we may collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-neon">
              <li>
                Standard server and CDN logs (IP address, user agent, referrer,
                timestamps) used for security, debugging, and traffic
                measurement.
              </li>
              <li>
                Aggregate analytics if enabled by our hosting provider (for
                example page views), without selling personal profiles.
              </li>
              <li>
                Information Amazon or other retailers collect if you follow an
                affiliate link and shop on their site—governed by their privacy
                policies, not ours.
              </li>
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2
              id="cookies"
              className="font-display text-2xl font-bold text-ink"
            >
              Cookies and affiliate links
            </h2>
            <p className="mt-3">
              Product links may include Amazon Associates tracking parameters
              (our tag is configured server-side). Clicking those links can set
              cookies or similar identifiers on Amazon&apos;s domains so a
              commission can be attributed if you purchase. We do not control
              Amazon&apos;s cookies.
            </p>
          </section>

          <section aria-labelledby="use">
            <h2 id="use" className="font-display text-2xl font-bold text-ink">
              How we use information
            </h2>
            <p className="mt-3">
              We use technical logs and aggregate traffic data to keep the site
              reliable, understand which guides are useful, and improve
              comparisons. We do not sell personal information.
            </p>
          </section>

          <section aria-labelledby="third-parties">
            <h2
              id="third-parties"
              className="font-display text-2xl font-bold text-ink"
            >
              Third parties
            </h2>
            <p className="mt-3">
              Hosting, DNS, and CDN providers process requests as needed to
              deliver the site. Retailers you visit via affiliate links process
              data under their own terms. See also our{" "}
              <Link
                href="/about"
                className="font-semibold text-gulf underline-offset-2 hover:underline"
              >
                About
              </Link>{" "}
              page for affiliate disclosure.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="font-display text-2xl font-bold text-ink"
            >
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy can be directed through the NeonGulf
              project channels associated with this site. If we expand contact
              options (for example a public email), we will update this page.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm">
          <Link
            href="/"
            className="font-semibold text-gulf transition hover:text-ink"
          >
            ← Back to Console Gear Hub
          </Link>
        </p>
      </article>
    </div>
  );
}
