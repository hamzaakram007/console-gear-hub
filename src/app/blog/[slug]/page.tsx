import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogAffiliateCta } from "@/components/BlogAffiliateCta";
import { BlogArticleBody } from "@/components/BlogArticleBody";
import {
  formatPostDate,
  getAllPostSlugs,
  getPost,
  getPosts,
} from "@/lib/posts";
import { getCategory } from "@/lib/products";
import { absoluteUrl, BRAND_NAME, SITE_NAME } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      siteName: `${SITE_NAME} · ${BRAND_NAME}`,
      authors: [BRAND_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const category = getCategory(post.categorySlug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.keywords.join(", "),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <nav className="text-sm text-teal-100/50" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-cyan-200">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/blog" className="transition hover:text-cyan-200">
            Blog
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-teal-100/80">{post.title}</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-teal-200/45">
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
            <span className="mx-2 opacity-40" aria-hidden>
              ·
            </span>
            {post.readingMinutes} min read
            {category ? (
              <>
                <span className="mx-2 opacity-40" aria-hidden>
                  ·
                </span>
                <Link
                  href={`/category/${category.slug}`}
                  className="transition hover:text-cyan-200"
                >
                  {category.name}
                </Link>
              </>
            ) : null}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-cyan-50 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-teal-100/70 sm:text-lg">
            {post.description}
          </p>
        </header>

        <BlogArticleBody blocks={post.blocks} />
        <BlogAffiliateCta post={post} />

        {category ? (
          <aside
            className="mt-12 rounded-md border border-cyan-400/15 bg-cyan-950/30 px-4 py-4"
            aria-label="Related comparison"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-teal-200/45">
              Related comparison
            </p>
            <Link
              href={`/category/${category.slug}`}
              className="mt-2 inline-flex font-[family-name:var(--font-display)] text-xl text-cyan-100 transition hover:text-cyan-50"
            >
              {category.name} picks →
            </Link>
            <p className="mt-1 text-sm text-teal-100/55">{category.tagline}</p>
          </aside>
        ) : null}

        <nav
          className="mt-16 border-t border-cyan-400/15 pt-8"
          aria-label="More guides"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-teal-200/45">
            More guides
          </p>
          <ul className="mt-3 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="block rounded-md border border-cyan-400/15 px-3 py-3 text-sm text-teal-100/75 transition hover:border-cyan-300/40 hover:text-cyan-100"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="mt-6 inline-flex min-h-10 items-center text-sm text-cyan-300/85 transition hover:text-cyan-200"
          >
            ← All blog posts
          </Link>
        </nav>
      </article>
    </div>
  );
}
