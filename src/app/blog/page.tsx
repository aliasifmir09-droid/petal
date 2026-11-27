import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, type BlogPost } from "@/lib/blog";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Bouquet Guides | New York City and Los Angeles",
  },
  description:
    "Flower bouquet guides for New York City and Los Angeles: fees, 4:00pm cutoffs, neighborhoods, and how to order from Petalswift.",
  alternates: {
    canonical: "/blog",
    languages: { "en-US": "/blog", "x-default": "/blog" },
  },
};

function placeLabel(post: BlogPost) {
  if (post.city === "los-angeles") return "Los Angeles";
  if (!post.borough || post.borough === "nyc") return "New York City";
  return post.borough.replace("-", " ");
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="site-shell pb-10">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Blog · New York City and Los Angeles
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Flower bouquet guides for New York City and Los Angeles.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {blogPosts.length} practical guides for bouquets, fees, and same-day
          cutoffs in the five boroughs and in the City of Los Angeles. Orders
          open {site.ordersStartDate}.
        </p>
        <p className="mt-4 text-sm">
          Prefer short answers?{" "}
          <Link href="/qa" className="font-semibold text-leaf hover:underline">
            Browse NYC flower Q&amp;A →
          </Link>
        </p>
      </section>

      <section className="site-shell grid gap-8 pb-24 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-xl border border-line bg-porcelain"
          >
            <div className="relative aspect-[16/9] bg-mist/30">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf">
                {placeLabel(post)} · {post.publishedAt}
              </p>
              <h2 className="font-display mt-3 text-2xl text-ink md:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">
                {post.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-leaf">Read guide →</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
