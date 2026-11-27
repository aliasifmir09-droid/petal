import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { careGuides, getCareGuide } from "@/lib/care-guides";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCareGuide(slug);
  if (!guide) return { title: "Care guide" };
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/care/${guide.slug}` },
  };
}

export default async function CareGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getCareGuide(slug);
  if (!guide) notFound();

  return (
    <article className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Care guides", path: "/care" },
          { name: guide.title, path: `/care/${guide.slug}` },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          <Link href="/care" className="hover:text-ink">
            Care guides
          </Link>
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-6xl">
          {guide.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {guide.summary}
        </p>
      </section>

      <section className="site-shell pb-12">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Steps</h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
          {guide.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="site-shell pb-28">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Tips</h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
          {guide.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-soft">
          Related:{" "}
          <Link href={guide.relatedHref} className="text-leaf hover:underline">
            Learn more
          </Link>
          {" · "}
          <Link href="/returns" className="text-leaf hover:underline">
            Returns & remakes
          </Link>
          {" · "}
          <Link href="/contact" className="text-leaf hover:underline">
            Contact
          </Link>
        </p>
      </section>
    </article>
  );
}
