import { PickBadge } from "@/components/PickBadge";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col border-b border-cyan-400/15 pb-6 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0">
      <div className="flex flex-wrap items-center gap-2">
        <PickBadge pick={product.pick} />
        <span className="text-xs text-teal-200/45">{product.brand}</span>
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-cyan-50">
        {product.name}
      </h3>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-teal-100">
        {product.price}
        <span className="ml-2 text-xs font-normal text-teal-200/40">
          {product.priceNote}
        </span>
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-teal-100/65">
        {product.summary}
      </p>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-5 inline-flex items-center justify-center rounded-md border border-cyan-300/40 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 px-4 py-2.5 text-sm font-medium text-cyan-50 transition hover:border-cyan-200/60 hover:from-cyan-400/30 hover:to-teal-400/25"
      >
        {product.affiliateLabel}
      </a>
    </article>
  );
}
