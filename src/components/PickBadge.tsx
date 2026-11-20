import { type PickType, pickLabels } from "@/lib/products";

const styles: Record<PickType, string> = {
  "best-overall": "border-neon/40 bg-neon-soft text-neon-ink",
  "best-budget": "border-trust/35 bg-trust/10 text-trust",
  "best-premium": "border-gulf/35 bg-gulf-soft text-gulf",
};

export function PickBadge({ pick }: { pick: PickType }) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-semibold tracking-wide ${styles[pick]}`}
    >
      {pickLabels[pick]}
    </span>
  );
}
