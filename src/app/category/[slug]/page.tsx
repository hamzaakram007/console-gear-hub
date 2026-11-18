import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  getAllCategorySlugs,
  getCategory,
} from "@/lib/products";

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
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <div className="hero-wash relative">
      <div className="noise-overlay absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm text-teal-100/50" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-cyan-200">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-teal-100/80">{category.name}</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-cyan-50 sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 text-lg text-teal-100/70">{category.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-teal-100/55">
            {category.description}
          </p>
          <p className="mt-3 rounded-md border border-cyan-400/15 bg-cyan-950/40 px-3 py-2 text-sm text-cyan-100/75">
            Console angle: {category.consoleAngle}
          </p>
        </header>

        <section className="mt-12" aria-labelledby="picks-heading">
          <h2
            id="picks-heading"
            className="font-[family-name:var(--font-display)] text-2xl text-cyan-50"
          >
            Our three picks
          </h2>
          <div className="mt-6 grid gap-8 border-t border-cyan-400/15 pt-8 sm:grid-cols-3 sm:gap-6">
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
          <p className="mt-2 text-sm text-teal-100/55">
            Placeholder specs — swap JSON when real SKUs and affiliate tags are
            ready.
          </p>
          <div className="mt-6">
            <ComparisonTable category={category} />
          </div>
        </section>

        <nav
          className="mt-16 border-t border-cyan-400/15 pt-8"
          aria-label="Other categories"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-teal-200/45">
            More categories
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="rounded-md border border-cyan-400/20 px-3 py-1.5 text-sm text-teal-100/75 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
