import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import {
  getMarketLanding,
  marketLandingFee,
  marketLandingLinks,
  marketLandingPath,
  marketLandings,
} from "@/lib/market-landings";
import { losAngeles } from "@/lib/los-angeles";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return marketLandings.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarketLanding(slug);
  if (!page) return {};
  const path = marketLandingPath(page);
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: { "en-US": path, "x-default": path },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${site.url}${path}`,
    },
  };
}

export default async function MarketLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getMarketLanding(slug);
  if (!page) notFound();

  const path = marketLandingPath(page);
  const fee = marketLandingFee(page);
  const links = marketLandingLinks(page);

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.h1,
            description: page.lead,
            url: `${site.url}${path}`,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: page.serveBoth
              ? [
                  { "@type": "City", name: "New York City" },
                  { "@type": "City", name: "Los Angeles" },
                ]
              : {
                  "@type": "City",
                  name: page.cityName ?? "New York City",
                },
            offers: fee
              ? {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: fee.fee.toFixed(2),
                  description: `Delivery fee $${fee.fee}. Same-day window ${fee.sameDayWindow}.`,
                }
              : undefined,
          },
        ]}
      />
      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          {page.kicker}
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {page.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {page.lead}
        </p>
        <ul className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-ink-soft md:text-base">
          {page.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {fee ? (
          <p className="mt-6 text-sm font-semibold text-ink">
            Delivery fee ${fee.fee} · same-day window {fee.sameDayWindow} · order
            by {page.cityName === "Los Angeles" ? losAngeles.orderCutoff : site.orderCutoff}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="btn-spark">
              {link.label}
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
