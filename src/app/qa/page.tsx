import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { qaItems } from "@/lib/qa";
import { site } from "@/lib/site";
import { breadcrumbSchema, qaPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "NYC Flower Delivery Q&A | Five Borough Answers",
  },
  description:
    "Q&A for same-day flower delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island—fees, cutoffs, Christmas, and Jackson Heights florist facts.",
  alternates: {
    canonical: "/qa",
    languages: { "en-US": "/qa", "x-default": "/qa" },
  },
};

const boroughFilters = [
  { slug: "nyc", label: "All NYC" },
  { slug: "manhattan", label: "Manhattan" },
  { slug: "brooklyn", label: "Brooklyn" },
  { slug: "queens", label: "Queens" },
  { slug: "bronx", label: "Bronx" },
  { slug: "staten-island", label: "Staten Island" },
] as const;

export default function QaHubPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Q&A", path: "/qa" },
          ]),
          qaPageSchema(qaItems),
        ]}
      />

      <section className="site-shell pb-10">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Q&amp;A · Indexable for NYC search
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Flower delivery answers for all five boroughs.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Straight answers for same-day flowers in Manhattan, Brooklyn, Queens,
          the Bronx, and Staten Island—from our Jackson Heights atelier. Taking
          orders from {site.ordersStartDate}.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {boroughFilters.map((b) => (
            <a
              key={b.slug}
              href={`#borough-${b.slug}`}
              className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf"
            >
              {b.label}
            </a>
          ))}
          <Link
            href="/blog"
            className="rounded-full bg-leaf px-4 py-2 text-sm font-semibold text-porcelain hover:bg-leaf-deep"
          >
            Read the NYC flower blog →
          </Link>
        </div>
      </section>

      {boroughFilters.map((filter) => {
        const items =
          filter.slug === "nyc"
            ? qaItems
            : qaItems.filter(
                (q) => q.borough === filter.slug || q.borough === "nyc",
              );
        const unique =
          filter.slug === "nyc"
            ? items
            : items.filter(
                (q, i, arr) => arr.findIndex((x) => x.slug === q.slug) === i,
              );
        return (
          <section
            key={filter.slug}
            id={`borough-${filter.slug}`}
            className="site-shell border-t border-line py-12"
          >
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              {filter.label} questions
            </h2>
            <div className="mt-8 space-y-8">
              {unique.map((item) => (
                <article key={`${filter.slug}-${item.slug}`}>
                  <h3 className="text-xl font-semibold text-ink md:text-2xl">
                    <Link
                      href={`/qa/${item.slug}`}
                      className="hover:text-leaf"
                    >
                      {item.question}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                  <p className="mt-3 text-sm">
                    <Link
                      href={`/qa/${item.slug}`}
                      className="font-semibold text-leaf hover:underline"
                    >
                      Open full answer →
                    </Link>
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="site-shell pb-24 pt-4">
        <p className="text-sm text-ink-soft">
          Also see our{" "}
          <Link href="/faq" className="text-leaf hover:underline">
            classic FAQ
          </Link>
          ,{" "}
          <Link href="/nyc" className="text-leaf hover:underline">
            borough delivery guides
          </Link>
          , and{" "}
          <Link href="/blog" className="text-leaf hover:underline">
            NYC flower blog
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
