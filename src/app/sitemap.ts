import type { MetadataRoute } from "next";
import { getAllCategorySlugs } from "@/lib/products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://gear.neongulf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const categories = getAllCategorySlugs().map((slug) => ({
    url: `${siteUrl}/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categories,
  ];
}
