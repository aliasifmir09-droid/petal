import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPost, postsByBorough } from "@/lib/blog";
import { site } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title.length > 60 ? `${post.title.slice(0, 57)}…` : post.title,
    description: post.description.slice(0, 160),
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        "en-US": `/blog/${post.slug}`,
        "x-default": `/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.heroImage, alt: post.heroAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (
    post.city === "los-angeles"
      ? blogPosts.filter((item) => item.city === "los-angeles")
      : postsByBorough(post.borough ?? "nyc")
  )
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const isLosAngeles = post.city === "los-angeles";
  const boroughLink = isLosAngeles
    ? "/los-angeles"
    : post.borough && post.borough !== "nyc"
      ? `/nyc/${post.borough}`
      : "/nyc";

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
        ]}
      />

      <article className="site-shell pb-16">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Blog · {post.publishedAt}
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl tracking-[-0.035em] text-ink md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {post.description}
        </p>
        <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-xl bg-mist/30">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-3xl text-ink">{section.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-line bg-porcelain p-6 md:p-8">
          <p className="font-semibold text-ink">
            {isLosAngeles
              ? "Ready to send a bouquet in Los Angeles?"
              : "Ready to send a bouquet in New York City?"}
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Taking orders from {site.ordersStartDate}. Same-day when ordered by{" "}
            {isLosAngeles ? "4:00pm PT" : site.orderCutoff}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/flower-bouquets" className="btn-spark">
              Shop flower bouquets
            </Link>
            <Link href={boroughLink} className="btn-brand">
              {isLosAngeles ? "Los Angeles guide" : "Borough guide"}
            </Link>
            <Link href="/qa" className="inline-flex border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf">
              NYC Q&amp;A
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="site-shell border-t border-line pb-24 pt-12">
          <h2 className="font-display text-3xl text-ink">Related guides</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="font-semibold text-leaf hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
