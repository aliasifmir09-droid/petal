import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import {
  getLaArea,
  getLaNeighborhood,
  laNeighborhoodPath,
  laNeighborhoods,
  laNeighborhoodsInArea,
  losAngeles,
} from "@/lib/los-angeles";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ area: string; neighborhood: string }>;
};

export function generateStaticParams() {
  return laNeighborhoods.map((n) => ({
    area: n.areaSlug,
    neighborhood: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area, neighborhood } = await params;
  const n = getLaNeighborhood(area, neighborhood);
  if (!n) return {};
  const path = laNeighborhoodPath(n);
  const description = `${n.blurb} Order by ${losAngeles.orderCutoff}.`;
  return {
    title: `${n.name} Flower Delivery, Los Angeles`,
    description,
    alternates: {
      canonical: path,
      languages: { "en-US": path, "x-default": path },
    },
    openGraph: {
      title: n.headline,
      description,
      url: `${site.url}${path}`,
    },
  };
}

export default async function LosAngelesNeighborhoodPage({ params }: Props) {
  const { area, neighborhood } = await params;
  const n = getLaNeighborhood(area, neighborhood);
  if (!n) notFound();
  const zone = getLaArea(n.areaSlug);
  if (!zone) notFound();
  const siblings = laNeighborhoodsInArea(n.areaSlug).filter((s) => s.slug !== n.slug);

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Los Angeles", path: "/los-angeles" },
            { name: zone.name, path: `/los-angeles/${zone.slug}` },
            { name: n.name, path: laNeighborhoodPath(n) },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: n.headline,
            description: n.blurb,
            url: `${site.url}${laNeighborhoodPath(n)}`,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: {
              "@type": "Place",
              name: `${n.name}, Los Angeles, CA`,
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: zone.fee.toFixed(2),
              description: `Delivery fee $${zone.fee}. Same-day window ${zone.sameDayWindow}.`,
            },
          },
        ]}
      />
      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          {n.name} · Los Angeles
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {n.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {n.blurb}
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">
          ${zone.fee} · {zone.sameDayWindow} · order by {losAngeles.orderCutoff}
        </p>
        <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
          {n.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-soft">
          Nearby: {n.landmarks.join(", ")}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {siblings.map((s) => (
            <Link key={s.slug} href={laNeighborhoodPath(s)} className="font-semibold text-leaf hover:underline">
              {s.name}
            </Link>
          ))}
        </div>
      </section>
      <section className="site-shell pb-20">
        <DeliveryChecker />
      </section>
    </div>
  );
}
