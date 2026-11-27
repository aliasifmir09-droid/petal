import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import {
  getLaArea,
  laAreas,
  laNeighborhoodPath,
  laNeighborhoodsInArea,
  losAngeles,
} from "@/lib/los-angeles";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ area: string }>;
};

export function generateStaticParams() {
  return laAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getLaArea(slug);
  if (!area) return {};
  const path = `/los-angeles/${area.slug}`;
  return {
    title: `Flower Delivery in ${area.name}`,
    description: `${area.blurb} Fee $${area.fee}. Order by ${losAngeles.orderCutoff}.`,
    alternates: { canonical: path },
    openGraph: {
      title: `${area.name} flower delivery | Petalswift`,
      description: area.blurb,
      url: `${site.url}${path}`,
    },
  };
}

export default async function LosAngelesAreaPage({ params }: Props) {
  const { area: slug } = await params;
  const area = getLaArea(slug);
  if (!area) notFound();
  const places = laNeighborhoodsInArea(area.slug);

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Los Angeles", path: "/los-angeles" },
            { name: area.name, path: `/los-angeles/${area.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: area.headline,
            description: area.blurb,
            url: `${site.url}/los-angeles/${area.slug}`,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: { "@type": "City", name: "Los Angeles" },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: area.fee.toFixed(2),
              description: `Delivery fee $${area.fee}. Same-day window ${area.sameDayWindow}.`,
            },
          },
        ]}
      />
      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Los Angeles · {area.name}
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {area.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {area.blurb}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
          {area.seoExtra}
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">
          ${area.fee} · same-day {area.sameDayWindow} · next-day {area.nextDayWindow} ·
          order by {losAngeles.orderCutoff}
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {places.map((n) => (
            <li key={n.slug}>
              <Link href={laNeighborhoodPath(n)} className="btn-spark">
                {n.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="site-shell pb-20">
        <DeliveryChecker />
      </section>
    </div>
  );
}
