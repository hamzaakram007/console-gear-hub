import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import type { BlogPostWithAffiliate } from "@/lib/posts";

export function BlogAffiliateCta({ post }: { post: BlogPostWithAffiliate }) {
  const { cta, affiliateUrl, affiliateLabel } = post;

  return (
    <aside
      className="mt-12 border-t border-cyan-400/20 pt-8"
      aria-label="Product recommendations"
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl text-cyan-50">
        {cta.headline}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-teal-100/65">
        {cta.body}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {cta.categorySlug ? (
          <Link
            href={`/category/${cta.categorySlug}`}
            className="inline-flex min-h-11 items-center rounded-md border border-cyan-300/45 bg-cyan-400/20 px-5 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/30"
          >
            {cta.categoryLabel ?? "View comparisons"}
          </Link>
        ) : null}
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="inline-flex min-h-11 items-center rounded-md border border-teal-300/30 px-5 py-2.5 text-sm font-medium text-teal-100/85 transition hover:border-teal-300/50 hover:text-teal-50"
        >
          {affiliateLabel}
        </a>
      </div>
      <div className="mt-4">
        <AffiliateDisclosure variant="inline" />
      </div>
    </aside>
  );
}
