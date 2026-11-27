import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { careGuides } from "@/lib/care-guides";
import { occasions, products, styles } from "@/lib/catalog";
import { marketLandingPath, marketLandings } from "@/lib/market-landings";
import { neighborhoodPath, neighborhoods } from "@/lib/neighborhoods";
import { qaItems } from "@/lib/qa";
import { partnerShops } from "@/lib/sellers";
import { boroughs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date("2026-11-26T15:00:00.000Z");

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/christmas", priority: 1, changeFrequency: "daily" as const },
    { path: "/order", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/arrangements", priority: 1, changeFrequency: "daily" as const },
    { path: "/shop", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/delivery", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/nyc", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/policies", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/shipping", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/returns", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/care", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/delivery-zips", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/accessibility", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/sizes", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/updates", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/corporate", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "/sell", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sell/apply", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/sell/shops", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/qa", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/press", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/subscribe", priority: 0.6, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
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
    priority: 0.8,
  }));

  const neighborhoodRoutes = neighborhoods.map((n) => ({
    url: `${base}${neighborhoodPath(n)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  const marketRoutes = marketLandings.map((page) => ({
    url: `${base}${marketLandingPath(page)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.84,
  }));

  const sellerRoutes = partnerShops.map((shop) => ({
    url: `${base}/sell/shops/${shop.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const qaRoutes = qaItems.map((item) => ({
    url: `${base}/qa/${item.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const careRoutes = careGuides.map((guide) => ({
    url: `${base}/care/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...occasionRoutes,
    ...styleRoutes,
    ...boroughRoutes,
    ...neighborhoodRoutes,
    ...marketRoutes,
    ...sellerRoutes,
    ...blogRoutes,
    ...qaRoutes,
    ...careRoutes,
  ];
}
