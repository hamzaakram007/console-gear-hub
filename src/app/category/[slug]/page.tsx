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
  const count = category.products.length;
  const title = `Best ${category.name} for PS5 & Xbox — ${count} picks compared`;
  const description = `${category.description} Curated picks with product photos, honest labels, and Amazon affiliate links.`;
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
  const overall = category.products.find((p) => p.pick === "best-overall");

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
        image: p.imageUrl ? [p.imageUrl] : undefined,
        brand: {
          "@type": "Brand",
          name: p.brand,
        },
        sku: p.amazonAsin,
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

  const productJsonLd = category.products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.summary,
    image: p.imageUrl ? [p.imageUrl] : undefined,
    brand: {
      "@type": "Brand",
      name: p.brand,
    },
    sku: p.amazonAsin,
    category: category.name,
    offers: {
      "@type": "Offer",
      url: p.affiliateUrl,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      price: p.price.replace(/[^0-9.]/g, ""),
    },
  }));

  return (
    <div className="page-wash relative">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {productJsonLd.map((schema) => (
        <script
          key={String(schema.sku ?? schema.name)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <nav className="text-sm text-muted-soft" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-gulf">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">{category.name}</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 text-base text-muted sm:text-lg">
            {category.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {category.description}
          </p>
          <p className="mt-3 border border-edge bg-surface-raised px-3 py-2.5 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-gulf">Console angle:</span>{" "}
            {category.consoleAngle}
          </p>
          {overall ? (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={overall.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="btn-buy"
              >
                {overall.affiliateLabel}
              </a>
              <Link href="#spec-comparison" className="btn-secondary">
                Compare all {category.products.length}
              </Link>
              <p className="stock-note max-w-xs">
                Best-overall pick — confirm live stock &amp; shipping on Amazon.
              </p>
            </div>
          ) : null}
          <div className="mt-4">
            <AffiliateDisclosure variant="inline" />
          </div>
        </header>

        <section className="mt-12" aria-labelledby="picks-heading">
          <h2
            id="picks-heading"
            className="font-display text-2xl font-bold text-ink"
          >
            Our {category.products.length} picks
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Photo-first cards with a short benefit headline, one Amazon buy
            button, and a compare link—no fake scarcity timers.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {category.products.map((product) => (
              <div key={product.id} className="group">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        <section
          id="spec-comparison"
          className="mt-16 scroll-mt-24"
          aria-labelledby="table-heading"
        >
          <h2
            id="table-heading"
            className="font-display text-2xl font-bold text-ink"
          >
            Spec comparison
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
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
              className="font-display text-2xl font-bold text-ink"
            >
              Related guides
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Blog posts that dig into buying and setup decisions for this
              category.
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block border border-edge bg-surface-raised px-4 py-3 transition hover:border-gulf"
                  >
                    <span className="font-display text-lg font-bold text-ink">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {post.excerpt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav
          className="mt-16 border-t border-edge pt-8"
          aria-label="Other categories"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
            More categories
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {getCategories()
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="btn-secondary !min-h-10 !px-3 !py-1.5 !text-sm"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/blog"
                className="btn-secondary !min-h-10 !px-3 !py-1.5 !text-sm"
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
