import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { careGuides } from "@/lib/care-guides";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Flower Care Guides — Keep Bouquets Fresh",
  description:
    "Petalswift flower care guides—vase life, hand-tied bouquets, sympathy etiquette, and delivery-day tips for NYC orders.",
  alternates: { canonical: "/care" },
};

export default function CareIndexPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Care guides", path: "/care" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Customer service
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Flower care guides
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Practical tips so bouquets and arrangements stay presentation-ready after delivery. Every
          order also includes a care card when space allows.
        </p>
      </section>

      <section className="site-shell pb-28">
        <ul className="space-y-8">
          {careGuides.map((guide) => (
            <li key={guide.slug} className="border-b border-line pb-8">
              <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
                <Link href={`/care/${guide.slug}`} className="hover:text-leaf">
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                {guide.summary}
              </p>
              <Link
                href={`/care/${guide.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-leaf underline-offset-4 hover:underline"
              >
                Read guide
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
