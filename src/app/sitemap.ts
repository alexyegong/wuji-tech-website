import type { MetadataRoute } from "next";

const BASE_URL = "https://wjkj-prys.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const common = {
    lastModified: new Date("2026-09-01"),
    changeFrequency: "monthly" as const,
  };
  const zhPages = [
    { url: BASE_URL, priority: 1.0, ...common },
    { url: `${BASE_URL}/about`, priority: 0.8, ...common },
    { url: `${BASE_URL}/products`, priority: 0.9, ...common },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.6, ...common },
  ];
  const enPages = [
    { url: `${BASE_URL}/en`, priority: 1.0, ...common },
    { url: `${BASE_URL}/en/about`, priority: 0.8, ...common },
    { url: `${BASE_URL}/en/products`, priority: 0.9, ...common },
    { url: `${BASE_URL}/en/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/en/contact`, priority: 0.6, ...common },
  ];
  const enPosts = [
    { url: `${BASE_URL}/en/blog/article-01-en-sleep-alcohol-blood-sugar`, priority: 0.6, ...common },
    { url: `${BASE_URL}/en/blog/article-04-en-elderly-diabetes-refuses-hospital`, priority: 0.6, ...common },
    { url: `${BASE_URL}/en/blog/article-05-en-blood-sugar-monitor-data`, priority: 0.6, ...common },
  ];

  return [...zhPages, ...enPages, ...enPosts];
}
