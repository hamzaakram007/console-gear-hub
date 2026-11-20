import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { absoluteUrl, BRAND_NAME, SITE_NAME } from "@/lib/site";

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
          <span className="text-ink">About</span>
        </nav>

        <header className="mt-6">
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gulf">
            {BRAND_NAME}
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
            About Console Gear Hub
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Console Gear Hub is a NeonGulf editorial site for players who want
            clear, console-first gear advice—not PC mod shop marketing recycled
            for living-room setups.
          </p>
        </header>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <section aria-labelledby="what-we-do">
            <h2
              id="what-we-do"
              className="font-display text-2xl font-bold text-ink"
            >
              What we do
            </h2>
            <p className="mt-3">
              We publish side-by-side comparisons for SSD storage, headsets, TVs
              & monitors, and capture cards aimed at PS5 and Xbox Series. Each
              category lists a curated shortlist (about 4–6 picks) with product
              photos, benefit headlines, specs, trade-offs, and tagged Amazon
              product links.
            </p>
            <p className="mt-3">
              The{" "}
              <Link
                href="/blog"
                className="font-semibold text-gulf underline-offset-2 hover:underline"
              >
                blog
              </Link>{" "}
              adds practical setup and buying guides that link back to those
              comparisons so you can move from research to a short shortlist.
            </p>
          </section>

          <section aria-labelledby="how-we-pick">
            <h2
              id="how-we-pick"
              className="font-display text-2xl font-bold text-ink"
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
              className="font-display text-2xl font-bold text-ink"
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
              className="font-display text-2xl font-bold text-ink"
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/category/ssd" className="btn-buy">
            Shop SSD picks on Amazon
          </Link>
          <Link href="/#categories" className="btn-secondary">
            Browse categories
          </Link>
        </div>

        <nav
          className="mt-12 border-t border-edge pt-8"
          aria-label="Related pages"
        >
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <Link
                href="/blog"
                className="font-semibold text-gulf transition hover:text-ink"
              >
                Read the blog →
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="font-semibold text-gulf transition hover:text-ink"
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
