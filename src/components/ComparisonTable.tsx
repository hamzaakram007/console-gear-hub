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
        <p className="mr-1 text-xs font-medium uppercase tracking-wider text-teal-200/45">
          Compare
        </p>
        <button
          type="button"
          onClick={() => setFocusId(null)}
          className={`min-h-9 rounded-md border px-3 py-1.5 text-xs font-medium transition ${
            focusId === null
              ? "border-cyan-300/50 bg-cyan-400/20 text-cyan-50"
              : "border-cyan-400/20 text-teal-100/70 hover:border-cyan-300/40 hover:text-cyan-100"
          }`}
        >
          All three
        </button>
        {products.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setFocusId(p.id === focusId ? null : p.id)}
            className={`min-h-9 rounded-md border px-3 py-1.5 text-xs font-medium transition ${
              focusId === p.id
                ? "border-cyan-300/50 bg-cyan-400/20 text-cyan-50"
                : "border-cyan-400/20 text-teal-100/70 hover:border-cyan-300/40 hover:text-cyan-100"
            }`}
          >
            {pickShortLabels[p.pick]}
          </button>
        ))}
      </div>

      {/* Mobile stacked cards */}
      <div className="grid gap-4 md:hidden">
        {visible.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-cyan-400/20 bg-cyan-950/30 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <PickBadge pick={p.pick} />
                <p className="mt-2 font-[family-name:var(--font-display)] text-lg text-cyan-50">
                  {p.name}
                </p>
                <p className="mt-1 text-sm text-teal-100/55">{p.brand}</p>
              </div>
              <p className="text-xl font-semibold tabular-nums text-teal-50">
                {p.price}
              </p>
            </div>
            <dl className="mt-4 space-y-2 border-t border-cyan-400/10 pt-3">
              {specKeys.map((key) => {
                const winners = winnersForSpec(products, key);
                const isWin = winners.has(p.id);
                return (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <dt className="text-teal-100/55">
                      {specLabels[key] ?? key}
                    </dt>
                    <dd
                      className={`text-right ${
                        isWin ? "font-medium text-cyan-100" : "text-teal-100/85"
                      }`}
                    >
                      {p.specs[key] ?? "—"}
                      {isWin ? (
                        <span className="ml-1 text-[0.65rem] uppercase tracking-wide text-cyan-300/70">
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
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-cyan-300/40 bg-cyan-400/15 px-4 py-2.5 text-sm font-medium text-cyan-50"
            >
              {p.affiliateLabel}
            </a>
          </div>
        ))}
      </div>

      {/* Desktop / tablet sticky-column table */}
      <div className="compare-scroll hidden overflow-x-auto rounded-lg border border-cyan-400/20 md:block">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-cyan-400/20 bg-cyan-950/60">
              <th className="sticky left-0 z-10 bg-cyan-950/95 px-4 py-3 font-medium text-teal-100/70 backdrop-blur">
                Spec
              </th>
              {visible.map((p) => (
                <th key={p.id} className="min-w-[11rem] px-4 py-3 font-medium text-cyan-50">
                  <div className="flex flex-col gap-1.5">
                    <PickBadge pick={p.pick} />
                    <span className="font-[family-name:var(--font-display)] text-base leading-snug">
                      {p.name}
                    </span>
                    <span className="text-xs font-normal text-teal-100/45">
                      {p.brand}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-cyan-400/10">
              <th className="sticky left-0 z-10 bg-[#061a24]/95 px-4 py-3 font-medium text-teal-100/60 backdrop-blur">
                Price
              </th>
              {visible.map((p) => (
                <td
                  key={p.id}
                  className={`px-4 py-3 tabular-nums ${
                    priceWinners.has(p.id)
                      ? "font-semibold text-emerald-100"
                      : "text-teal-50"
                  }`}
                >
                  {p.price}
                  {priceWinners.has(p.id) ? (
                    <span className="ml-1 text-[0.65rem] font-medium uppercase tracking-wide text-emerald-300/70">
                      lowest
                    </span>
                  ) : null}
                </td>
              ))}
            </tr>
            <tr className="border-b border-cyan-400/10">
              <th className="sticky left-0 z-10 bg-[#061a24]/95 px-4 py-3 font-medium text-teal-100/60 backdrop-blur">
                Best for
              </th>
              {visible.map((p) => (
                <td key={p.id} className="px-4 py-3 text-teal-100/80">
                  {p.bestFor}
                </td>
              ))}
            </tr>
            {specKeys.map((key) => {
              const winners = winnersForSpec(products, key);
              return (
                <tr
                  key={key}
                  className="border-b border-cyan-400/10 last:border-b-0"
                >
                  <th className="sticky left-0 z-10 bg-[#061a24]/95 px-4 py-3 font-medium text-teal-100/60 backdrop-blur">
                    {specLabels[key] ?? key}
                  </th>
                  {visible.map((p) => (
                    <td
                      key={p.id}
                      className={`px-4 py-3 ${
                        winners.has(p.id)
                          ? "font-medium text-cyan-100"
                          : "text-teal-100/85"
                      }`}
                    >
                      {p.specs[key] ?? "—"}
                      {winners.has(p.id) ? (
                        <span className="ml-1 text-[0.65rem] uppercase tracking-wide text-cyan-300/70">
                          top
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
              );
            })}
            <tr className="bg-cyan-950/40">
              <th className="sticky left-0 z-10 bg-cyan-950/95 px-4 py-3 font-medium text-teal-100/60 backdrop-blur">
                Buy
              </th>
              {visible.map((p) => (
                <td key={p.id} className="px-4 py-3">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    className="inline-flex min-h-10 items-center text-cyan-300 underline-offset-2 transition hover:text-cyan-200 hover:underline"
                  >
                    Amazon →
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-teal-100/45">
        Highlighted “top” cells use a simple numeric parse of the listed spec
        (capacity, speed, battery, etc.). Always read the full write-up—best
        overall is not always the biggest number.
      </p>
    </div>
  );
}
