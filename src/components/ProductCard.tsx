import { PickBadge } from "@/components/PickBadge";
import type { ProductWithAffiliate } from "@/lib/products";

export function ProductCard({ product }: { product: ProductWithAffiliate }) {
  return (
    <article className="flex h-full flex-col border-b border-cyan-400/15 pb-8 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0">
      <div className="flex flex-wrap items-center gap-2">
        <PickBadge pick={product.pick} />
        <span className="text-xs text-teal-200/45">{product.brand}</span>
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug text-cyan-50 sm:text-[1.35rem]">
        {product.name}
      </h3>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-teal-100">
        {product.price}
        <span className="ml-2 text-xs font-normal text-teal-200/40">
          {product.priceNote}
        </span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-teal-100/70">
        {product.summary}
      </p>
      <p className="mt-3 text-sm text-cyan-100/80">
        <span className="font-medium text-cyan-200/90">Best for:</span>{" "}
        {product.bestFor}
      </p>

      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-1">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-200/55">
            Pros
          </p>
          <ul className="mt-1.5 space-y-1 text-teal-100/70">
            {product.pros.map((pro) => (
              <li key={pro} className="flex gap-2">
                <span className="text-emerald-300/70" aria-hidden>
                  +
                </span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-amber-200/50">
            Cons
          </p>
          <ul className="mt-1.5 space-y-1 text-teal-100/60">
            {product.cons.map((con) => (
              <li key={con} className="flex gap-2">
                <span className="text-amber-300/60" aria-hidden>
                  −
                </span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-cyan-300/40 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 px-4 py-2.5 text-sm font-medium text-cyan-50 transition hover:border-cyan-200/60 hover:from-cyan-400/30 hover:to-teal-400/25"
      >
        {product.affiliateLabel}
      </a>
    </article>
  );
}
