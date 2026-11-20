import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { formatPostDate, getPosts } from "@/lib/posts";
import { getCategories } from "@/lib/products";
import { BRAND_NAME, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} — Compare SSDs, headsets, TVs & capture cards for PS5 / Xbox`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — console gear comparisons that stay honest`,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Compare console SSDs, headsets, TVs, and capture cards with clear affiliate disclosure.",
  },
};

export default function Home() {
  const categories = getCategories();
  const latestPosts = getPosts().slice(0, 3);
  const featured = categories[0];
  const featuredOverall = featured?.products.find(
    (p) => p.pick === "best-overall",
  );

  return (
    <>
      <section className="hero-wash relative overflow-hidden">
        <div className="noise-overlay absolute inset-0" aria-hidden />
        <div
          className="animate-drift absolute -right-20 top-16 h-[22rem] w-[22rem] rounded-full bg-neon/15 blur-3xl"
          aria-hidden
        />
        <div
          className="animate-drift absolute -left-16 bottom-8 h-56 w-56 rounded-full bg-gulf/15 blur-3xl"
          style={{ animationDelay: "2.2s" }}
          aria-hidden
        />

        {/* Z-pattern: brand → headline → primary Amazon CTA */}
        <div className="relative mx-auto flex min-h-[min(88vh,54rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
          <p className="animate-fade-up font-display text-5xl font-extrabold tracking-tight text-ink sm:text-7xl md:text-8xl">
            {BRAND_NAME}
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-2xl text-xl font-medium leading-snug text-ink/90 sm:text-2xl md:text-3xl">
            Console gear picks you can buy with confidence.
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Side-by-side SSD, headset, display, and capture comparisons for PS5
            and Xbox Series—photo-first cards, honest pick labels, tagged Amazon
            buy links, clear disclosure.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            {featuredOverall ? (
              <a
                href={featuredOverall.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="btn-buy"
              >
                Check price on Amazon
              </a>
            ) : (
              <Link href="/category/ssd" className="btn-buy">
                Check price on Amazon
              </Link>
            )}
            <Link href="/#categories" className="btn-secondary">
              Browse all categories
            </Link>
          </div>
          <p className="animate-fade-up-delay-2 stock-note mt-3 max-w-md">
            Prices move. Confirm live stock &amp; shipping on Amazon before you
            buy—we never invent countdown timers or fake scarcity.
          </p>
          <div className="animate-fade-up-delay-2 mt-5 max-w-xl">
            <AffiliateDisclosure variant="inline" />
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Shop by category
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Four gear lanes with curated shortlists (about 4–6 picks each)—best
          overall, best budget, best premium, best value, and top picks—with
          real Amazon product photos and tagged buy links.
        </p>

        <ul className="mt-10 grid gap-0 sm:grid-cols-2">
          {categories.map((cat) => {
            const overall = cat.products.find((p) => p.pick === "best-overall");
            return (
              <li
                key={cat.slug}
                className="border-t border-edge py-6 sm:odd:pr-8 sm:even:pl-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="min-w-0">
                    <Link
                      href={`/category/${cat.slug}`}
                      className="group block"
                    >
                      <span className="font-display text-2xl font-bold text-ink transition group-hover:text-gulf">
                        {cat.name}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {cat.tagline}
                      </p>
                    </Link>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {overall ? (
                      <a
                        href={overall.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored nofollow"
                        className="btn-buy !min-h-10 !px-3.5 !text-sm"
                      >
                        Amazon
                      </a>
                    ) : null}
                    <Link
                      href={`/category/${cat.slug}`}
                      className="btn-secondary !min-h-10 !px-3.5 !text-sm"
                    >
                      Compare {cat.products.length}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-edge bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-ink">
            Why players trust these picks
          </h2>
          <ol className="mt-6 grid gap-8 sm:grid-cols-3">
            {[
              {
                t: "Console-first filters",
                d: "Heatsink clearance, HDMI 2.1 / VRR, dialogue-friendly audio, and capture paths that fit living-room setups—not PC mod sheets.",
              },
              {
                t: "Clear pick labels",
                d: "Best overall, best budget, best premium, best value, and top picks—honest social proof, not fake scarcity.",
              },
              {
                t: "Honest affiliate path",
                d: "Amazon links are tagged and disclosed. We never fake stock timers. You verify live price and shipping on Amazon.",
              },
            ].map((item) => (
              <li key={item.t}>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gulf">
                  {item.t}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="guides"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
        aria-labelledby="guides-heading"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="guides-heading"
              className="font-display text-3xl font-bold text-ink sm:text-4xl"
            >
              From the blog
            </h2>
            <p className="mt-2 max-w-2xl text-muted">
              Setup and buying guides that lead back to comparison pages and
              Amazon buy links.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex min-h-10 items-center text-sm font-semibold text-gulf transition hover:text-ink"
          >
            All guides →
          </Link>
        </div>

        <ul className="mt-10 grid gap-8 border-t border-edge pt-8 sm:grid-cols-3">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <article>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
                  <time dateTime={post.publishedAt}>
                    {formatPostDate(post.publishedAt)}
                  </time>
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-gulf"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={`/category/${post.categorySlug}`}
                  className="mt-3 inline-flex min-h-9 items-center text-xs font-semibold text-neon transition hover:text-ink"
                >
                  Related category →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
