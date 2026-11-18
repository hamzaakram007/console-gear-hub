import productsData from "@/data/products.json";

export type PickType = "best-overall" | "best-budget" | "best-premium";

export type Product = {
  id: string;
  name: string;
  brand: string;
  pick: PickType;
  price: string;
  priceNote: string;
  summary: string;
  specs: Record<string, string>;
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

export const categories = productsData.categories as Category[];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

export const pickLabels: Record<PickType, string> = {
  "best-overall": "Best overall",
  "best-budget": "Best budget",
  "best-premium": "Best premium",
};

export const specLabels: Record<string, string> = {
  capacity: "Capacity",
  interface: "Interface",
  consoleCompat: "Console compat",
  readSpeed: "Read speed",
  formFactor: "Form factor",
  connection: "Connection",
  mic: "Mic",
  battery: "Battery",
  surround: "Surround",
  weight: "Weight",
  size: "Size",
  refresh: "Refresh",
  hdmi: "HDMI",
  hdr: "HDR",
  vrr: "VRR / ALLM",
  passthrough: "Pass-through",
  capture: "Capture",
};
