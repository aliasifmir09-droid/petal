import type { Metadata } from "next";
import Link from "next/link";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import { deliveryZones } from "@/lib/ops";
import { boroughs, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "NYC Flower Delivery Fees & Windows",
  description:
    "Petalswift same-day flower delivery fees and time windows for Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Order by 1pm ET.",
  alternates: { canonical: "/delivery" },
};

export default function DeliveryPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "NYC Delivery", path: "/delivery" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          NYC Delivery
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Delivery fees and windows—shown upfront.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Order by {site.orderCutoff} for same-day. Christmas Eve cutoff{" "}
          {site.christmasEveCutoff}. Fees are flat by borough—no surprise
          surcharges at the door.
        </p>
      </section>

      <section className="site-shell pb-16">
        <div className="overflow-x-auto border border-line">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-porcelain/80 text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              <tr>
                <th className="px-4 py-3 font-medium">Borough</th>
                <th className="px-4 py-3 font-medium">Delivery fee</th>
                <th className="px-4 py-3 font-medium">Same-day window</th>
                <th className="px-4 py-3 font-medium">Next-day window</th>
              </tr>
            </thead>
            <tbody>
              {deliveryZones.map((zone) => (
                <tr key={zone.slug} className="border-t border-line">
                  <td className="px-4 py-4">
                    <Link
                      href={`/nyc/${zone.slug}`}
                      className="text-ink hover:text-leaf"
                    >
                      {zone.borough}
                    </Link>
                    <p className="mt-1 text-xs text-ink-soft">{zone.notes}</p>
                  </td>
                  <td className="px-4 py-4 text-ink">${zone.fee}</td>
                  <td className="px-4 py-4 text-ink-soft">{zone.sameDayWindow}</td>
                  <td className="px-4 py-4 text-ink-soft">{zone.nextDayWindow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Timed corporate arrivals and hotel handoffs available—call{" "}
          <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
            {site.phoneDisplay}
          </a>
          . See{" "}
          <Link href="/policies" className="text-leaf hover:underline">
            refund & freshness policies
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-line bg-porcelain/60 py-16">
        <div className="site-shell grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              Borough coverage
            </h2>
            <ul className="mt-8 space-y-4">
              {boroughs.map((borough) => (
                <li
                  key={borough.slug}
                  className="border-b border-line pb-4 text-lg text-ink-soft"
                >
                  <Link
                    href={`/nyc/${borough.slug}`}
                    className="transition-colors hover:text-ink"
                  >
                    {borough.name} flower delivery
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <DeliveryChecker />
        </div>
      </section>

      <section className="site-shell flex flex-wrap gap-3 py-16">
        <Link
          href="/updates"
          className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Email & SMS updates
        </Link>
        <Link
          href="/shop"
          className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
        >
          Choose a bouquet
        </Link>
      </section>
    </div>
  );
}
