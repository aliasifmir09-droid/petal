import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { boroughs, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Same-Day Flower Delivery Across NYC",
  description:
    "Same-day flower delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Order by 1pm ET from Petalswift in Jackson Heights.",
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

      <section className="site-shell pb-16">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          NYC Delivery
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Same-day across the five boroughs.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Order by {site.orderCutoff} for delivery the same day. Arrangements
          leave our Jackson Heights atelier upright, cool, and
          presentation-ready.
        </p>
      </section>

      <section className="border-y border-line bg-porcelain/60 py-20">
        <div className="site-shell grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              Coverage
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
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              What to expect
            </h2>
            <div className="mt-8 space-y-6 text-ink-soft">
              <p className="leading-relaxed">
                You’ll receive confirmation, a delivery window, and a short
                message when the courier is en route.
              </p>
              <p className="leading-relaxed">
                Buildings, doormen, and office lobbies are handled with clear
                recipient instructions—so the gift doesn’t sit in a mailroom.
              </p>
              <p className="leading-relaxed">
                Atelier: {site.address.streetAddress},{" "}
                {site.address.addressLocality}, {site.address.addressRegion}{" "}
                {site.address.postalCode}. Call{" "}
                <a className="text-leaf underline-offset-2 hover:underline" href={`tel:${site.phone}`}>
                  {site.phoneDisplay}
                </a>{" "}
                for timed arrivals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16">
        <Link
          href="/shop"
          className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Choose a bouquet
        </Link>
      </section>
    </div>
  );
}
