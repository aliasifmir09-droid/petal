import type { MetadataRoute } from "next";
import { marketLandingPath, marketLandings } from "@/lib/market-landings";
import { site } from "@/lib/site";

const marketPaths = marketLandings.map((page) => marketLandingPath(page));

const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", ...marketPaths],
        disallow: ["/cart", "/cart/", "/sell/account", "/sell/account/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", ...marketPaths],
        disallow: ["/cart", "/cart/", "/sell/account", "/sell/account/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/cart", "/cart/", "/sell/account", "/sell/account/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url.replace(/^https?:\/\//, ""),
  };
}
