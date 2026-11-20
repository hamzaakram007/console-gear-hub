import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About NeonGulf Console Gear Hub",
  description:
    "Who builds Console Gear Hub, how we pick console SSDs, headsets, displays, and capture cards, and how Amazon Associates disclosure works on NeonGulf.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Console Gear Hub · NeonGulf",
    description:
      "Independent console gear comparisons for PS5 and Xbox Series—how we research picks and disclose affiliate relationships.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Console Gear Hub · NeonGulf",
    description:
      "How NeonGulf researches console gear picks and discloses Amazon Associates links.",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_NAME}`,
    url: absoluteUrl("/about"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  return (
    <div className="hero-wash relative">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <nav className="text-sm text-teal-100/50" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-cyan-200">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-teal-100/80">About</span>
        </nav>

        <header className="mt-6">
          <h1 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-cyan-50 sm:text-5xl">
            About Console Gear Hub
          </h1>
          <p className="mt-4 text-base leading-relaxed text-teal-100/70 sm:text-lg">
            Console Gear Hub is a NeonGulf editorial site for players who want
            clear, console-first gear advice—not PC mod shop marketing recycled
            for living-room setups.
          </p>
        </header>

        <div className="prose-gear mt-10 space-y-6 text-sm leading-relaxed text-teal-100/70 sm:text-base">
          <section aria-labelledby="what-we-do">
            <h2
              id="what-we-do"
              className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
            >
              What we do
            </h2>
            <p className="mt-3">
              We publish side-by-side comparisons for SSD storage, headsets, TVs
              & monitors, and capture cards aimed at PS5 and Xbox Series. Each
              category lists three picks—best overall, best budget, and best
              premium—with specs, trade-offs, and tagged Amazon product links.
            </p>
            <p className="mt-3">
              The{" "}
              <Link href="/blog" className="text-cyan-200 underline-offset-2 hover:underline">
                blog
              </Link>{" "}
              adds practical setup and buying guides that link back to those
              comparisons so you can move from research to a short shortlist.
            </p>
          </section>

          <section aria-labelledby="how-we-pick">
            <h2
              id="how-we-pick"
              className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
            >
              How we pick
            </h2>
            <p className="mt-3">
              Picks emphasize console-relevant constraints: heatsink clearance,
              HDMI 2.1 and VRR behavior, dialogue-friendly audio, and capture
              paths that do not assume a full streaming PC. We prefer verified
              ASINs and current product pages over vague “best gaming gear”
              lists.
            </p>
          </section>

          <section aria-labelledby="affiliate">
            <h2
              id="affiliate"
              className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
            >
              Affiliate relationships
            </h2>
            <p className="mt-3">
              NeonGulf participates in the Amazon Associates Program. When you
              buy through links on this site, we may earn a commission at no
              extra cost to you. That never changes the editorial criteria for
              which products appear on a comparison page.
            </p>
            <div className="mt-4">
              <AffiliateDisclosure variant="inline" />
            </div>
          </section>

          <section aria-labelledby="independence">
            <h2
              id="independence"
              className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
            >
              Independence
            </h2>
            <p className="mt-3">
              Console Gear Hub is not affiliated with Sony, Microsoft,
              Nintendo, Amazon, or any game publisher. Product names and brands
              belong to their owners and are used for identification.
            </p>
          </section>
        </div>

        <nav
          className="mt-12 border-t border-cyan-400/15 pt-8"
          aria-label="Related pages"
        >
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <Link
                href="/#categories"
                className="text-cyan-300/85 transition hover:text-cyan-200"
              >
                Browse categories →
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-cyan-300/85 transition hover:text-cyan-200"
              >
                Read the blog →
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-cyan-300/85 transition hover:text-cyan-200"
              >
                Privacy →
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </div>
  );
}
