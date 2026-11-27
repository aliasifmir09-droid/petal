import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { laAreas, laNeighborhoodsInArea, laNeighborhoodPath, losAngeles } from "@/lib/los-angeles";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Flower Delivery in Los Angeles",
  description:
    "Same-day Petalswift flower delivery in the City of Los Angeles. Downtown through Studio City, with fees from $16. Order by 1:00pm PT.",
  alternates: { canonical: "/los-angeles" },
};

export default function LosAngelesIndexPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Los Angeles", path: "/los-angeles" },
        ])}
      />
      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Los Angeles · launch city
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Same-day flowers in Los Angeles.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Petalswift starts in two cities: New York City and Los Angeles.
          Los Angeles delivery stays inside the city. Order by {losAngeles.orderCutoff}.
          The studio remains {site.address.streetAddress}, {site.address.addressLocality}.
          More cities, then nationwide delivery, come after this launch.
        </p>
      </section>
      <section className="site-shell grid gap-8 pb-28 md:grid-cols-2">
        {laAreas.map((area) => (
          <div key={area.slug} className="border-t border-line pt-6">
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
              <Link href={`/los-angeles/${area.slug}`} className="hover:text-leaf">
                {area.name}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.blurb}</p>
            <p className="mt-2 text-sm font-semibold text-ink">
              ${area.fee} · {area.sameDayWindow}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {laNeighborhoodsInArea(area.slug).map((n) => (
                <li key={n.slug}>
                  <Link
                    href={laNeighborhoodPath(n)}
                    className="font-semibold text-leaf hover:underline"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
