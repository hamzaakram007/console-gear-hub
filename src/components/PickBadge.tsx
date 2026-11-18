import { type PickType, pickLabels } from "@/lib/products";

const styles: Record<PickType, string> = {
  "best-overall": "border-cyan-300/40 bg-cyan-400/15 text-cyan-100",
  "best-budget": "border-emerald-300/35 bg-emerald-400/10 text-emerald-100",
  "best-premium": "border-amber-300/35 bg-amber-400/10 text-amber-100",
};

export function PickBadge({ pick }: { pick: PickType }) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-medium tracking-wide ${styles[pick]}`}
    >
      {pickLabels[pick]}
    </span>
  );
}
