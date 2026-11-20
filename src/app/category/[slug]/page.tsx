import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductCard } from "@/components/ProductCard";
import { getPostsByCategory } from "@/lib/posts";
import {
  getAllCategorySlugs,
  getCategories,
  getCategory,
} from "@/lib/products";
import { absoluteUrl, BRAND_NAME, SITE_NAME } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  const title = `Best ${category.name} for PS5 & Xbox — compared`;
  const description = `${category.description} Best overall, budget, and premium picks with Amazon affiliate links.`;
  return {
    title,
    description,
    alternates: { canonical: `/category/${slug}` },
    openGraph: {
      title,
      description,
      url: `/category/${slug}`,
      type: "website",
      siteName: `${SITE_NAME} · ${BRAND_NAME}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const relatedPosts = getPostsByCategory(category.slug);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${category.name} for console gaming`,
    description: category.description,
    url: absoluteUrl(`/category/${category.slug}`),
    numberOfItems: category.products.length,
    itemListElement: category.products.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.summary,
        brand: {
          "@type": "Brand",
          name: p.brand,
        },
        offers: {
          "@type": "Offer",
          url: p.affiliateUrl,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          price: p.price.replace(/[^0-9.]/g, ""),
        },
      },
    })),
  };

  return (
    <div className="hero-wash relative">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <nav className="text-sm text-teal-100/50" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-cyan-200">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-teal-100/80">{category.name}</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-cyan-50 sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 text-base text-teal-100/70 sm:text-lg">
            {category.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-teal-100/55">
            {category.description}
          </p>
          <p className="mt-3 rounded-md border border-cyan-400/15 bg-cyan-950/40 px-3 py-2.5 text-sm leading-relaxed text-cyan-100/75">
            <span className="font-medium text-cyan-100/90">Console angle:</span>{" "}
            {category.consoleAngle}
          </p>
          <div className="mt-4">
            <AffiliateDisclosure variant="inline" />
          </div>
        </header>

        <section className="mt-12" aria-labelledby="picks-heading">
          <h2
            id="picks-heading"
            className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
          >
            Our three picks
          </h2>
          <div className="mt-6 grid gap-10 border-t border-cyan-400/15 pt-8 lg:grid-cols-3 lg:gap-8">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="table-heading">
          <h2
            id="table-heading"
            className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
          >
            Spec comparison
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-teal-100/55">
            Filter to one pick on mobile, or scroll the sticky-column table on
            larger screens. Highlighted cells flag the strongest numeric value
            in that row.
          </p>
          <div className="mt-6">
            <ComparisonTable category={category} />
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="mt-16" aria-labelledby="guides-heading">
            <h2
              id="guides-heading"
              className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
            >
              Related guides
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-teal-100/55">
              Blog posts that dig into buying and setup decisions for this
              category.
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block rounded-md border border-cyan-400/15 px-4 py-3 transition hover:border-cyan-300/40"
                  >
                    <span className="font-[family-name:var(--font-display)] text-lg text-cyan-100">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-sm text-teal-100/55">
                      {post.excerpt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav
          className="mt-16 border-t border-cyan-400/15 pt-8"
          aria-label="Other categories"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-teal-200/45">
            More categories
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {getCategories()
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="inline-flex min-h-10 items-center rounded-md border border-cyan-400/20 px-3 py-1.5 text-sm text-teal-100/75 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/blog"
                className="inline-flex min-h-10 items-center rounded-md border border-cyan-400/20 px-3 py-1.5 text-sm text-teal-100/75 transition hover:border-cyan-300/40 hover:text-cyan-100"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
