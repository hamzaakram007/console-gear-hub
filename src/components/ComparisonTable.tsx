"use client";

import { useMemo, useState } from "react";
import { PickBadge } from "@/components/PickBadge";
import {
  highlightPreferKeys,
  pickShortLabels,
  specLabels,
  type CategoryWithAffiliate,
  type ProductWithAffiliate,
} from "@/lib/products";

function numericHint(value: string): number | null {
  const match = value.replace(/,/g, "").match(/(\d+(\.\d+)?)/);
  if (!match) return null;
  return Number(match[1]);
}

function winnersForSpec(
  products: ProductWithAffiliate[],
  key: string
): Set<string> {
  if (!highlightPreferKeys.has(key)) return new Set();
  const scored = products.map((p) => ({
    id: p.id,
    n: numericHint(p.specs[key] ?? ""),
  }));
  const nums = scored.filter((s) => s.n != null).map((s) => s.n as number);
  if (nums.length < 2) return new Set();
  const max = Math.max(...nums);
  return new Set(scored.filter((s) => s.n === max).map((s) => s.id));
}

export function ComparisonTable({
  category,
}: {
  category: CategoryWithAffiliate;
}) {
  const { products, specKeys } = category;
  const [focusId, setFocusId] = useState<string | null>(null);

  const priceWinners = useMemo(() => {
    const scored = products.map((p) => ({
      id: p.id,
      n: numericHint(p.price),
    }));
    const nums = scored.filter((s) => s.n != null).map((s) => s.n as number);
    if (nums.length < 2) return new Set<string>();
    const min = Math.min(...nums);
    return new Set(scored.filter((s) => s.n === min).map((s) => s.id));
  }, [products]);

  const visible = focusId
    ? products.filter((p) => p.id === focusId)
    : products;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="mr-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
          Compare
        </p>
        <button
          type="button"
          onClick={() => setFocusId(null)}
          className={`min-h-9 rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
            focusId === null
              ? "border-neon bg-neon-soft text-neon-ink"
              : "border-edge text-muted hover:border-gulf hover:text-ink"
          }`}
        >
          All three
        </button>
        {products.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setFocusId(p.id === focusId ? null : p.id)}
            className={`min-h-9 rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
              focusId === p.id
                ? "border-neon bg-neon-soft text-neon-ink"
                : "border-edge text-muted hover:border-gulf hover:text-ink"
            }`}
          >
            {pickShortLabels[p.pick]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:hidden">
        {visible.map((p) => (
          <div
            key={p.id}
            className="border border-edge bg-surface-raised p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <PickBadge pick={p.pick} />
                <p className="mt-2 font-display text-lg font-bold text-ink">
                  {p.name}
                </p>
                <p className="mt-1 text-sm text-muted-soft">{p.brand}</p>
              </div>
              <p className="text-xl font-semibold tabular-nums text-ink">
                {p.price}
              </p>
            </div>
            <dl className="mt-4 space-y-2 border-t border-edge pt-3">
              {specKeys.map((key) => {
                const winners = winnersForSpec(products, key);
                const isWin = winners.has(p.id);
                return (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <dt className="text-muted-soft">
                      {specLabels[key] ?? key}
                    </dt>
                    <dd
                      className={`text-right ${
                        isWin ? "font-semibold text-gulf" : "text-ink/85"
                      }`}
                    >
                      {p.specs[key] ?? "—"}
                      {isWin ? (
                        <span className="ml-1 text-[0.65rem] uppercase tracking-wide text-neon">
                          top
                        </span>
                      ) : null}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <a
              href={p.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="btn-buy mt-4 w-full"
            >
              {p.affiliateLabel}
            </a>
            <p className="stock-note mt-2 text-center">
              Confirm live stock &amp; shipping on Amazon.
            </p>
          </div>
        ))}
      </div>

      <div className="compare-scroll hidden overflow-x-auto border border-edge md:block">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-edge bg-gulf-soft/60">
              <th className="sticky left-0 z-10 bg-[#dceef4] px-4 py-3 font-semibold text-muted backdrop-blur">
                Spec
              </th>
              {visible.map((p) => (
                <th
                  key={p.id}
                  className="min-w-[11rem] px-4 py-3 font-semibold text-ink"
                >
                  <div className="flex flex-col gap-1.5">
                    <PickBadge pick={p.pick} />
                    <span className="font-display text-base font-bold leading-snug">
                      {p.name}
                    </span>
                    <span className="text-xs font-normal text-muted-soft">
                      {p.brand}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-edge bg-surface-raised">
              <th className="sticky left-0 z-10 bg-surface-raised px-4 py-3 font-medium text-muted-soft">
                Price
              </th>
              {visible.map((p) => (
                <td
                  key={p.id}
                  className={`px-4 py-3 tabular-nums ${
                    priceWinners.has(p.id)
                      ? "font-semibold text-trust"
                      : "text-ink"
                  }`}
                >
                  {p.price}
                  {priceWinners.has(p.id) ? (
                    <span className="ml-1 text-[0.65rem] font-semibold uppercase tracking-wide text-trust">
                      lowest
                    </span>
                  ) : null}
                </td>
              ))}
            </tr>
            <tr className="border-b border-edge bg-surface-raised">
              <th className="sticky left-0 z-10 bg-surface-raised px-4 py-3 font-medium text-muted-soft">
                Best for
              </th>
              {visible.map((p) => (
                <td key={p.id} className="px-4 py-3 text-muted">
                  {p.bestFor}
                </td>
              ))}
            </tr>
            {specKeys.map((key) => {
              const winners = winnersForSpec(products, key);
              return (
                <tr
                  key={key}
                  className="border-b border-edge bg-surface-raised last:border-b-0"
                >
                  <th className="sticky left-0 z-10 bg-surface-raised px-4 py-3 font-medium text-muted-soft">
                    {specLabels[key] ?? key}
                  </th>
                  {visible.map((p) => (
                    <td
                      key={p.id}
                      className={`px-4 py-3 ${
                        winners.has(p.id)
                          ? "font-semibold text-gulf"
                          : "text-ink/85"
                      }`}
                    >
                      {p.specs[key] ?? "—"}
                      {winners.has(p.id) ? (
                        <span className="ml-1 text-[0.65rem] uppercase tracking-wide text-neon">
                          top
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
              );
            })}
            <tr className="bg-neon-soft/50">
              <th className="sticky left-0 z-10 bg-[#dff5ef] px-4 py-3 font-medium text-muted-soft">
                Buy
              </th>
              {visible.map((p) => (
                <td key={p.id} className="px-4 py-3">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    className="btn-buy !min-h-10 !px-3 !py-2 !text-sm"
                  >
                    Amazon →
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-soft">
        Highlighted “top” cells use a simple numeric parse of the listed spec
        (capacity, speed, battery, etc.). Always read the full write-up—best
        overall is not always the biggest number. Confirm live stock and
        shipping on Amazon.
      </p>
    </div>
  );
}
