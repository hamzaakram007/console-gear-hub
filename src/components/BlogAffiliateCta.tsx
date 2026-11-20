import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import type { BlogPostWithAffiliate } from "@/lib/posts";

export function BlogAffiliateCta({ post }: { post: BlogPostWithAffiliate }) {
  const { cta, affiliateUrl, affiliateLabel } = post;

  return (
    <aside
      className="mt-12 border-t border-edge pt-8"
      aria-label="Product recommendations"
    >
      <h2 className="font-display text-2xl font-bold text-ink">{cta.headline}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {cta.body}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="btn-buy"
        >
          {affiliateLabel}
        </a>
        {cta.categorySlug ? (
          <Link href={`/category/${cta.categorySlug}`} className="btn-secondary">
            {cta.categoryLabel ?? "View comparisons"}
          </Link>
        ) : null}
      </div>
      <p className="stock-note mt-3">
        Confirm live stock &amp; shipping on Amazon before you buy.
      </p>
      <div className="mt-3">
        <AffiliateDisclosure variant="inline" />
      </div>
    </aside>
  );
}
