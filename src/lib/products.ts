import productsData from "@/data/products.json";
import {
  affiliateCtaLabel,
  buildAffiliateUrl,
  type AffiliateTarget,
} from "@/lib/affiliate";

export type PickType = "best-overall" | "best-budget" | "best-premium";

export type Product = {
  id: string;
  name: string;
  brand: string;
  pick: PickType;
  price: string;
  priceNote: string;
  summary: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  amazonAsin?: string;
  amazonKeywords?: string;
};

export type ProductWithAffiliate = Product & {
  affiliateUrl: string;
  affiliateLabel: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  consoleAngle: string;
  specKeys: string[];
  products: Product[];
};

export type CategoryWithAffiliate = Omit<Category, "products"> & {
  products: ProductWithAffiliate[];
};

/** Raw catalog — safe to import from client components (no env reads). */
export const rawCategories = productsData.categories as Category[];

export type NavCategory = Pick<Category, "slug" | "name" | "tagline">;

export const navCategories: NavCategory[] = rawCategories.map((c) => ({
  slug: c.slug,
  name: c.name,
  tagline: c.tagline,
}));

function withAffiliate(product: Product): ProductWithAffiliate {
  const target: AffiliateTarget = {
    amazonAsin: product.amazonAsin,
    amazonKeywords: product.amazonKeywords,
  };
  return {
    ...product,
    affiliateUrl: buildAffiliateUrl(target),
    affiliateLabel: affiliateCtaLabel(),
  };
}

/** Server-only: builds tagged Amazon URLs from AMAZON_TAG. */
export function getCategories(): CategoryWithAffiliate[] {
  return rawCategories.map((cat) => ({
    ...cat,
    products: cat.products.map(withAffiliate),
  }));
}

export function getCategory(slug: string): CategoryWithAffiliate | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return rawCategories.map((c) => c.slug);
}

export const pickLabels: Record<PickType, string> = {
  "best-overall": "Best overall",
  "best-budget": "Best budget",
  "best-premium": "Best premium",
};

export const pickShortLabels: Record<PickType, string> = {
  "best-overall": "Overall",
  "best-budget": "Budget",
  "best-premium": "Premium",
};

export const specLabels: Record<string, string> = {
  capacity: "Capacity",
  interface: "Interface",
  consoleCompat: "Console compat",
  readSpeed: "Read speed",
  formFactor: "Form factor",
  warranty: "Warranty",
  connection: "Connection",
  mic: "Mic",
  battery: "Battery",
  surround: "Surround",
  weight: "Weight",
  platformNotes: "Platform notes",
  size: "Size",
  panel: "Panel",
  refresh: "Refresh",
  hdmi: "HDMI",
  hdr: "HDR",
  vrr: "VRR / ALLM",
  passthrough: "Pass-through",
  capture: "Capture",
  latency: "Latency",
};

/** Spec keys where higher / richer values are usually better (for highlight heuristics). */
export const highlightPreferKeys = new Set([
  "capacity",
  "readSpeed",
  "battery",
  "refresh",
  "passthrough",
  "capture",
  "warranty",
]);
