import Image from "next/image";
import Link from "next/link";
import { PickBadge } from "@/components/PickBadge";
import type { ProductWithAffiliate } from "@/lib/products";

export function ProductCard({
  product,
  compareHref = "#spec-comparison",
}: {
  product: ProductWithAffiliate;
  compareHref?: string;
}) {
  return (
    <article className="product-card flex h-full flex-col overflow-hidden border border-edge bg-surface-raised">
      <div className="relative aspect-[4/3] bg-[linear-gradient(160deg,#eef6f9_0%,#f7fbfd_55%,#e8f3f7_100%)]">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-5 transition duration-500 ease-out sm:p-6 [.group:hover_&]:scale-[1.03]"
            priority={product.pick === "best-overall"}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-muted-soft">
            Product photo unavailable
          </div>
        )}
        <div className="absolute left-3 top-3">
          <PickBadge pick={product.pick} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-soft">
          {product.brand}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink sm:text-xl">
          {product.headline}
        </h3>
        <p className="mt-1 text-sm text-muted">{product.name}</p>
        <p className="mt-3 text-2xl font-semibold tabular-nums text-ink">
          {product.price}
          <span className="ml-2 text-xs font-normal text-muted-soft">
            {product.priceNote}
          </span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {product.summary}
        </p>
        <p className="mt-3 text-sm text-ink/85">
          <span className="font-semibold text-gulf">Best for:</span>{" "}
          {product.bestFor}
        </p>

        <details className="mt-4 border-t border-edge pt-3 text-sm">
          <summary className="cursor-pointer font-semibold text-ink/90 transition hover:text-gulf">
            Pros &amp; cons
          </summary>
          <div className="mt-3 grid gap-3">
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
        </details>

        <div className="mt-auto pt-5">
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="btn-buy w-full"
          >
            {product.affiliateLabel}
          </a>
          <Link
            href={compareHref}
            className="mt-2.5 inline-flex min-h-10 w-full items-center justify-center text-sm font-semibold text-gulf transition hover:text-ink"
          >
            Compare specs →
          </Link>
          <p className="stock-note mt-2 text-center">
            Confirm live stock &amp; shipping on Amazon before you buy.
          </p>
        </div>
      </div>
    </article>
  );
}
