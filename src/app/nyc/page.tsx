import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { boroughs, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Flower Delivery by NYC Borough",
  description:
    "Same-day Petalswift flower delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island from our Jackson Heights atelier.",
  alternates: { canonical: "/nyc" },
};

export default function NycIndexPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "NYC Boroughs", path: "/nyc" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          NYC coverage
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Same-day flowers in every borough.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Petalswift delivers luxury bouquets citywide from{" "}
          {site.address.streetAddress}, Jackson Heights. Choose your borough for
          neighborhoods and local delivery details.
        </p>
      </section>

      <section className="site-shell grid gap-8 pb-28 md:grid-cols-2 lg:grid-cols-3">
        {boroughs.map((borough) => (
          <Link
            key={borough.slug}
            href={`/nyc/${borough.slug}`}
            className="group border-t border-line pt-6 transition-colors hover:border-leaf"
          >
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              {borough.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {borough.blurb}
            </p>
            <span className="mt-5 inline-flex text-sm text-leaf underline-offset-4 group-hover:underline">
              View {borough.name} delivery
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
