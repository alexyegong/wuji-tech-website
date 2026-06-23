import type { MetadataRoute } from "next";

const BASE_URL = "https://wjkj-prys.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  return pages;
}
