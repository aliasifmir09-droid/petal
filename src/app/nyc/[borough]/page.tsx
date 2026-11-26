import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import { Reviews } from "@/components/Reviews";
import { products } from "@/lib/catalog";
import { deliveryFeeForBorough } from "@/lib/ops";
import { boroughs, getBorough, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ borough: string }>;
};

export async function generateStaticParams() {
  return boroughs.map((borough) => ({ borough: borough.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough: slug } = await params;
  const borough = getBorough(slug);
  if (!borough) return { title: "NYC Delivery" };
  const zone = deliveryFeeForBorough(slug);
  return {
    title: `Same-Day Flower Delivery in ${borough.name} | Fees & Windows`,
    description: `${borough.blurb} ${borough.seoExtra} Delivery from $${zone?.fee ?? 12}. Order by ${site.orderCutoff}.`,
    alternates: { canonical: `/nyc/${borough.slug}` },
    openGraph: {
      title: `Same-Day Flower Delivery in ${borough.name} | Petalswift`,
      description: borough.blurb,
      url: `/nyc/${borough.slug}`,
      images: [{ url: borough.heroImage, alt: `${borough.name} flower delivery` }],
    },
  };
}

export default async function BoroughPage({ params }: Props) {
  const { borough: slug } = await params;
  const borough = getBorough(slug);
  if (!borough) notFound();
  const zone = deliveryFeeForBorough(slug);
  const featured = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "NYC Boroughs", path: "/nyc" },
            { name: borough.name, path: `/nyc/${borough.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Same-day flower delivery in ${borough.name}`,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: {
              "@type": "AdministrativeArea",
              name: `${borough.name}, New York`,
            },
            description: `${borough.blurb} ${borough.seoExtra}`,
            url: `${site.url}/nyc/${borough.slug}`,
            offers: zone
              ? {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: zone.fee.toFixed(2),
                  description: `Flat ${borough.name} delivery fee. Same-day window ${zone.sameDayWindow}.`,
                }
              : undefined,
          },
        ]}
      />

      <section className="site-shell grid gap-10 pb-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
            {borough.name} · NYC flower delivery
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
            {borough.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {borough.blurb}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            {borough.seoExtra}
          </p>
          {zone ? (
            <dl className="mt-8 grid gap-3 border border-line bg-porcelain/70 p-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-ink-soft/70">Delivery fee</dt>
                <dd className="mt-1 text-lg text-ink">${zone.fee}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70">Same-day window</dt>
                <dd className="mt-1 text-ink">{zone.sameDayWindow}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70">Next-day window</dt>
                <dd className="mt-1 text-ink">{zone.nextDayWindow}</dd>
              </div>
            </dl>
          ) : null}
          <p className="mt-4 text-sm text-ink-soft">
            Order by {site.orderCutoff} · Call{" "}
            <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
              {site.phoneDisplay}
            </a>
            {" · "}
            <Link href="/updates" className="text-leaf hover:underline">
              Email & SMS updates
            </Link>
          </p>
        </div>
        <div className="relative min-h-[280px] overflow-hidden bg-mist/30">
          <Image
            src={borough.heroImage}
            alt={`Flower delivery atmosphere for ${borough.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>
      </section>

      <section className="border-y border-line bg-porcelain/60 py-16">
        <div className="site-shell grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              Neighborhoods we serve in {borough.name}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {borough.neighborhoods.map((neighborhood) => (
                <li
                  key={neighborhood}
                  className="border-b border-line pb-3 text-ink-soft"
                >
                  {neighborhood}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              Common delivery moments
            </h2>
            <ul className="mt-8 space-y-3">
              {borough.landmarks.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-3 text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              {zone?.notes} Composed in Jackson Heights and routed with
              borough-level care—not a generic national network.
            </p>
          </div>
        </div>
      </section>

      <section className="site-shell py-16">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
          Popular bouquets for {borough.name}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {featured.map((bouquet) => (
            <li key={bouquet.slug} className="border border-line p-4">
              <Link
                href={`/shop/${bouquet.slug}`}
                className="font-display text-2xl tracking-[-0.02em] text-ink hover:text-leaf"
              >
                {bouquet.name}
              </Link>
              <p className="mt-2 text-sm text-ink-soft">
                ${bouquet.price} · {bouquet.size}
                {bouquet.sameDay ? " · Same-day" : ""}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{bouquet.blurb}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/arrangements"
            className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Shop arrangements
          </Link>
          <Link
            href="/delivery"
            className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
          >
            All delivery fees
          </Link>
          <Link
            href="/policies"
            className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
          >
            Policies
          </Link>
        </div>
      </section>

      <div className="site-shell pb-16">
        <DeliveryChecker />
      </div>

      <Reviews
        limit={3}
        heading={`Delivery feedback from across NYC—including ${borough.name}`}
      />
    </div>
  );
}
