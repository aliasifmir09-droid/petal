import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getQa, qaItems } from "@/lib/qa";
import { site } from "@/lib/site";
import { breadcrumbSchema, qaPageSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return qaItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getQa(slug);
  if (!item) return { title: "Q&A" };
  const title =
    item.question.length > 58
      ? `${item.question.slice(0, 55)}…`
      : item.question;
  return {
    title,
    description: item.answer.slice(0, 155),
    alternates: {
      canonical: `/qa/${item.slug}`,
      languages: {
        "en-US": `/qa/${item.slug}`,
        "x-default": `/qa/${item.slug}`,
      },
    },
    keywords: item.keywords,
  };
}

export default async function QaArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getQa(slug);
  if (!item) notFound();

  const related = qaItems
    .filter((q) => q.slug !== item.slug)
    .filter(
      (q) =>
        q.borough === item.borough ||
        q.topic === item.topic ||
        q.borough === "nyc",
    )
    .slice(0, 4);

  const boroughHref =
    item.borough && item.borough !== "nyc" ? `/nyc/${item.borough}` : "/nyc";

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Q&A", path: "/qa" },
            { name: item.question, path: `/qa/${item.slug}` },
          ]),
          qaPageSchema([item]),
        ]}
      />

      <article className="site-shell max-w-3xl pb-16">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Q&amp;A · {item.borough === "nyc" ? "All NYC" : item.borough}
        </p>
        <h1 className="font-display mt-4 text-4xl tracking-[-0.035em] text-ink md:text-5xl">
          {item.question}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/order" className="btn-spark">
            Start an order
          </Link>
          <Link href={boroughHref} className="btn-brand">
            Borough delivery guide
          </Link>
          <Link href="/qa" className="inline-flex border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf">
            All Q&amp;A
          </Link>
        </div>
        <p className="mt-8 text-sm text-ink-soft">
          Petalswift · {site.address.streetAddress}, {site.address.addressLocality},{" "}
          {site.address.addressRegion} {site.address.postalCode} ·{" "}
          <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
            {site.phoneDisplay}
          </a>
        </p>
      </article>

      <section className="site-shell border-t border-line pb-24 pt-12">
        <h2 className="font-display text-3xl text-ink">Related questions</h2>
        <ul className="mt-6 space-y-4">
          {related.map((q) => (
            <li key={q.slug}>
              <Link href={`/qa/${q.slug}`} className="font-semibold text-leaf hover:underline">
                {q.question}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
