import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
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

  const posts = getPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...categories,
    ...posts,
  ];
}
