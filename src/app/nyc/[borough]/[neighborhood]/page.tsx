import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import {
  getNeighborhood,
  neighborhoodDelivery,
  neighborhoodPath,
  neighborhoods,
  neighborhoodsInBorough,
} from "@/lib/neighborhoods";
import { boroughs, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ borough: string; neighborhood: string }>;
};

export function generateStaticParams() {
  return neighborhoods.map((n) => ({
    borough: n.boroughSlug,
    neighborhood: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough: boroughSlug, neighborhood: neighborhoodSlug } = await params;
  const n = getNeighborhood(boroughSlug, neighborhoodSlug);
  if (!n) return {};
  const title = `${n.name} Same-Day Flower Delivery | Petalswift`;
  const description = `${n.blurb.slice(0, 140)} Taking orders from ${site.ordersStartShort}.`;
  return {
    title,
    description,
    alternates: {
      canonical: neighborhoodPath(n),
      languages: { "en-US": neighborhoodPath(n), "x-default": neighborhoodPath(n) },
    },
    openGraph: {
      title,
      description,
      url: `${site.url}${neighborhoodPath(n)}`,
    },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { borough: boroughSlug, neighborhood: neighborhoodSlug } = await params;
  const n = getNeighborhood(boroughSlug, neighborhoodSlug);
  if (!n) notFound();

  const { borough, zone } = neighborhoodDelivery(n);
  if (!borough || !zone) notFound();

  const siblings = neighborhoodsInBorough(n.boroughSlug).filter(
    (s) => s.slug !== n.slug,
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Same-day flower delivery in ${n.name}, ${borough.name}`,
    provider: { "@type": "Florist", name: site.name, telephone: site.phone },
    areaServed: {
      "@type": "Place",
      name: `${n.name}, ${borough.name}, NY`,
    },
    description: n.blurb,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: String(zone.fee),
      description: `Delivery fee from $${zone.fee}; same-day window ${zone.sameDayWindow}`,
    },
  };

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "NYC", path: "/nyc" },
            { name: borough.name, path: `/nyc/${borough.slug}` },
            { name: n.name, path: neighborhoodPath(n) },
          ]),
          serviceSchema,
        ]}
      />

      <section className="site-shell pb-16">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          {borough.name} · Neighborhood delivery
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {n.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {n.blurb}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          Taking orders from {site.ordersStartDate}. Same-day cutoff{" "}
          {site.orderCutoff} most days.
        </p>

        <dl className="mt-8 grid gap-3 border border-line bg-porcelain/70 p-5 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-ink-soft">Delivery fee from</dt>
            <dd className="mt-1 text-lg font-semibold text-ink">${zone.fee}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Same-day window</dt>
            <dd className="mt-1 font-semibold text-ink">{zone.sameDayWindow}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Next-day window</dt>
            <dd className="mt-1 font-semibold text-ink">{zone.nextDayWindow}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/arrangements" className="btn-brand">
            Shop arrangements
          </Link>
          <Link href="/order" className="btn-spark">
            Start an order
          </Link>
          <a href={`tel:${site.phone}`} className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink hover:border-ink/35">
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="border-y border-line bg-porcelain/60 py-16">
        <div className="site-shell grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
              Ordering tips for {n.name}
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              {n.tips.map((tip) => (
                <li key={tip} className="border-l-2 border-leaf/40 pl-4">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
              Nearby landmarks
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-ink-soft">
              {n.landmarks.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Office: {site.address.streetAddress}. Email{" "}
              <ContactEmail className="text-leaf hover:underline" /> or see{" "}
              <Link href="/delivery" className="font-semibold text-leaf hover:underline">
                borough fees
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {siblings.length > 0 ? (
        <section className="site-shell py-16">
          <h2 className="font-display text-3xl text-ink">
            More {borough.name} neighborhoods
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link
                  href={neighborhoodPath(s)}
                  className="inline-flex border border-line px-4 py-2 text-sm text-ink hover:border-leaf hover:text-leaf"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/nyc/${borough.slug}`}
                className="inline-flex px-4 py-2 text-sm font-semibold text-leaf hover:underline"
              >
                All {borough.name} →
              </Link>
            </li>
          </ul>
        </section>
      ) : null}
    </div>
  );
}
