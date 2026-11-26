import type { MetadataRoute } from "next";
import { occasions, products, styles } from "@/lib/catalog";
import { boroughs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.petalswift.com";
  const lastModified = "2026-11-26";

  const staticRoutes = [
    "",
    "/christmas",
    "/order",
    "/shop",
    "/arrangements",
    "/delivery",
    "/policies",
    "/privacy",
    "/terms",
    "/sizes",
    "/updates",
    "/gallery",
    "/corporate",
    "/subscribe",
    "/about",
    "/faq",
    "/nyc",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency:
      path === "/christmas" || path === "/order"
        ? ("daily" as const)
        : ("weekly" as const),
    priority:
      path === "" || path === "/christmas" || path === "/arrangements"
        ? 1
        : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/shop/${product.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const occasionRoutes = occasions.map((occasion) => ({
    url: `${base}/occasions/${occasion.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const styleRoutes = styles.map((style) => ({
    url: `${base}/styles/${style.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const boroughRoutes = boroughs.map((borough) => ({
    url: `${base}/nyc/${borough.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...occasionRoutes,
    ...styleRoutes,
    ...boroughRoutes,
  ];
}
