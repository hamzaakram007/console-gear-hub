import { PickBadge } from "@/components/PickBadge";
import type { ProductWithAffiliate } from "@/lib/products";

export function ProductCard({ product }: { product: ProductWithAffiliate }) {
  return (
    <article className="flex h-full flex-col border-b border-edge pb-8 last:border-b-0 last:pb-0 lg:border-b-0 lg:pb-0">
      <div className="flex flex-wrap items-center gap-2">
        <PickBadge pick={product.pick} />
        <span className="text-xs font-medium text-muted-soft">
          {product.brand}
        </span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink sm:text-[1.35rem]">
        {product.name}
      </h3>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-ink">
        {product.price}
        <span className="ml-2 text-xs font-normal text-muted-soft">
          {product.priceNote}
        </span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{product.summary}</p>
      <p className="mt-3 text-sm text-ink/85">
        <span className="font-semibold text-gulf">Best for:</span>{" "}
        {product.bestFor}
      </p>

      <div className="mt-4 grid gap-3 text-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trust">
            Pros
          </p>
          <ul className="mt-1.5 space-y-1 text-muted">
            {product.pros.map((pro) => (
              <li key={pro} className="flex gap-2">
                <span className="text-neon" aria-hidden>
                  +
                </span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warn">
            Cons
          </p>
          <ul className="mt-1.5 space-y-1 text-muted">
            {product.cons.map((con) => (
              <li key={con} className="flex gap-2">
                <span className="text-warn" aria-hidden>
                  −
                </span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="btn-buy w-full"
        >
          {product.affiliateLabel}
        </a>
        <p className="stock-note mt-2 text-center">
          Confirm live stock &amp; shipping on Amazon before you buy.
        </p>
      </div>
    </article>
  );
}
