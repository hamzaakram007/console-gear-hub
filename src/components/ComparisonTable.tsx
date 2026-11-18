import { PickBadge } from "@/components/PickBadge";
import { type Category, specLabels } from "@/lib/products";

export function ComparisonTable({ category }: { category: Category }) {
  const { products, specKeys } = category;

  return (
    <div className="overflow-x-auto rounded-lg border border-cyan-400/20">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-cyan-400/20 bg-cyan-950/50">
            <th className="px-4 py-3 font-medium text-teal-100/70">Spec</th>
            {products.map((p) => (
              <th key={p.id} className="px-4 py-3 font-medium text-cyan-50">
                <div className="flex flex-col gap-1.5">
                  <PickBadge pick={p.pick} />
                  <span className="font-[family-name:var(--font-display)] text-base">
                    {p.name}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-cyan-400/10">
            <th className="px-4 py-3 font-medium text-teal-100/60">Price</th>
            {products.map((p) => (
              <td key={p.id} className="px-4 py-3 tabular-nums text-teal-50">
                {p.price}
              </td>
            ))}
          </tr>
          {specKeys.map((key) => (
            <tr key={key} className="border-b border-cyan-400/10 last:border-b-0">
              <th className="px-4 py-3 font-medium text-teal-100/60">
                {specLabels[key] ?? key}
              </th>
              {products.map((p) => (
                <td key={p.id} className="px-4 py-3 text-teal-100/85">
                  {p.specs[key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-cyan-950/30">
            <th className="px-4 py-3 font-medium text-teal-100/60">Buy</th>
            {products.map((p) => (
              <td key={p.id} className="px-4 py-3">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-cyan-300 underline-offset-2 transition hover:text-cyan-200 hover:underline"
                >
                  Affiliate link →
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
