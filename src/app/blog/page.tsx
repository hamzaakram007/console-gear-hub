import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { formatPostDate, getPosts } from "@/lib/posts";
import { getCategories } from "@/lib/products";
import { BRAND_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Console storage, headsets, displays & capture guides",
  description:
    "Practical console gear guides for PS5 and Xbox Series: SSD upgrades for large installs, dialogue-friendly headsets, TV vs monitor buying advice, capture card basics, and a storage upgrade checklist.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${SITE_NAME} Blog`,
    description:
      "Editorial guides for console storage, audio, displays, and capture—with clear Amazon affiliate disclosure.",
    url: "/blog",
    type: "website",
    siteName: `${SITE_NAME} · ${BRAND_NAME}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} Blog`,
    description:
      "Practical PS5 and Xbox Series gear guides from NeonGulf.",
  },
};

export default function BlogIndexPage() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <div className="page-wash relative">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <nav className="text-sm text-muted-soft" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-gulf">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">Blog</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            Practical buying and setup guides for console storage, headsets,
            displays, and capture—written for PS5 and Xbox Series players, not
            PC mod shops.
          </p>
          <div className="mt-4">
            <AffiliateDisclosure variant="inline" />
          </div>
        </header>

        <nav className="mt-8" aria-label="Jump to comparison categories">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
            Compare &amp; buy
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="btn-secondary !min-h-10 !px-3 !py-1.5 !text-sm"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-12 grid gap-10 border-t border-edge pt-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
                  <time dateTime={post.publishedAt}>
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <span className="mx-2 opacity-40" aria-hidden>
                    ·
                  </span>
                  {post.readingMinutes} min read
                  <span className="mx-2 opacity-40" aria-hidden>
                    ·
                  </span>
                  <Link
                    href={`/category/${post.categorySlug}`}
                    className="transition hover:text-gulf"
                  >
                    {
                      categories.find((c) => c.slug === post.categorySlug)
                        ?.name ?? "Category"
                    }
                  </Link>
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-gulf"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex min-h-10 items-center text-sm font-semibold text-gulf transition hover:text-ink"
                  >
                    Read guide →
                  </Link>
                  <Link
                    href={`/category/${post.categorySlug}`}
                    className="btn-buy !min-h-10 !px-3.5 !text-sm"
                  >
                    Shop category
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
