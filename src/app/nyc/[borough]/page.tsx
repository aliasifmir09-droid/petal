import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/lib/catalog";
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
  return {
    title: `Same-Day Flower Delivery in ${borough.name}`,
    description: `${borough.blurb} Order by ${site.orderCutoff} from Petalswift, Jackson Heights.`,
    alternates: { canonical: `/nyc/${borough.slug}` },
    openGraph: {
      title: `Same-Day Flower Delivery in ${borough.name} | Petalswift`,
      description: borough.blurb,
      url: `/nyc/${borough.slug}`,
    },
  };
}

export default async function BoroughPage({ params }: Props) {
  const { borough: slug } = await params;
  const borough = getBorough(slug);
  if (!borough) notFound();

  const featured = products.filter((p) => p.bestseller).slice(0, 3);

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
            description: borough.blurb,
            url: `${site.url}/nyc/${borough.slug}`,
          },
        ]}
      />

      <section className="site-shell pb-14">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          {borough.name} · NYC
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {borough.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {borough.blurb}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          Order by {site.orderCutoff} · Call{" "}
          <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
            {site.phoneDisplay}
          </a>
        </p>
      </section>

      <section className="border-y border-line bg-porcelain/60 py-16">
        <div className="site-shell">
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
            Neighborhoods we serve in {borough.name}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
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
      </section>

      <section className="site-shell py-16">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
          Popular bouquets for {borough.name}
        </h2>
        <ul className="mt-8 space-y-4">
          {featured.map((bouquet) => (
            <li key={bouquet.slug}>
              <Link
                href={`/shop/${bouquet.slug}`}
                className="text-lg text-ink-soft transition-colors hover:text-ink"
              >
                {bouquet.name} — ${bouquet.price}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Shop all bouquets
          </Link>
          <Link
            href="/delivery"
            className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
          >
            Delivery details
          </Link>
        </div>
      </section>
    </div>
  );
}
