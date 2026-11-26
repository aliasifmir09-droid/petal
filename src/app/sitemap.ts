import type { MetadataRoute } from "next";
import { bouquets } from "@/lib/bouquets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.petalswift.com";
  const lastModified = "2026-11-26";

  const staticRoutes = ["", "/shop", "/delivery", "/about"].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = bouquets.map((bouquet) => ({
    url: `${base}/shop/${bouquet.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
