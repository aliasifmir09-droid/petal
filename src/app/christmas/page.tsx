import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import { ShopMarketplace } from "@/components/ShopMarketplace";
import { productsForOccasion } from "@/lib/catalog";
import { christmasFaqs, site } from "@/lib/site";
import {
  breadcrumbSchema,
  christmasFaqSchema,
  flowerDeliveryServiceSchema,
  howToOrderSchema,
  itemListSchema,
  speakableSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Christmas Flower Delivery in NYC | Same-Day Bouquets",
  },
  description:
    "Taking Christmas flower orders from Dec 10. Same-day bouquets, centerpieces, and hatboxes in New York City and Los Angeles. Call (917) 460-5550.",
  keywords: [
    "Christmas flower delivery NYC",
    "same day Christmas flowers New York",
    "Christmas Eve flower delivery Manhattan",
    "holiday centerpiece Brooklyn",
    "Christmas bouquet Queens",
    "corporate Christmas flowers NYC",
  ],
  alternates: {
    canonical: "/christmas",
    languages: {
      "en-US": "/christmas",
      "x-default": "/christmas",
    },
  },
  openGraph: {
    title: "Christmas Flower Delivery NYC | Petalswift",
    description: site.holidayNote,
    url: "/christmas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Flower Delivery NYC | Petalswift",
    description: site.holidayNote,
  },
};

export default function ChristmasPage() {
  const christmasProducts = productsForOccasion("christmas");

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Christmas Flowers", path: "/christmas" },
          ]),
          christmasFaqSchema(),
          howToOrderSchema(),
          flowerDeliveryServiceSchema(),
          speakableSchema([".xmas-headline", ".xmas-summary", ".xmas-ops"]),
          itemListSchema(christmasProducts.map((p) => p.slug)),
        ]}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Christmas 2026 · Taking orders from {site.ordersStartDate}
        </p>
        <h1 className="xmas-headline font-display mt-4 max-w-5xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Christmas flower delivery across New York City.
        </h1>
        <p className="xmas-summary mt-6 max-w-3xl text-base leading-relaxed text-ink-soft md:text-lg">
          Petalswift starts taking Christmas orders from {site.ordersStartDate}.
          Office: {site.address.streetAddress}, {site.address.addressLocality}, NY{" "}
          {site.address.postalCode}. Same-day holiday bouquets, evergreen
          centerpieces, hatboxes, and corporate gifts delivered to all five
          boroughs. Order by {site.orderCutoff} for same-day.
        </p>
        <div className="xmas-ops mt-8 flex flex-wrap gap-3">
          <Link
            href="/order"
            className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Start an order
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-leaf hover:text-leaf"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
        <p className="mt-5 text-sm text-ink-soft">{site.holidayNote}</p>
      </section>

      <section className="site-shell grid gap-8 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-mist/30 md:min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80"
            alt="Christmas floral arrangement ready for NYC delivery"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </div>
        <div className="border border-line bg-porcelain/70 p-6 md:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/75">
            Operations before Christmas
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft md:text-base">
            <li>
              <strong className="text-ink">Taking orders from:</strong>{" "}
              {site.ordersStartDate} ({site.holidaySeason})
            </li>
            <li>
              <strong className="text-ink">Same-day cutoff:</strong>{" "}
              {site.orderCutoff} (most December days)
            </li>
            <li>
              <strong className="text-ink">Christmas Eve cutoff:</strong>{" "}
              {site.christmasEveCutoff}
            </li>
            <li>
              <strong className="text-ink">Phone orders:</strong>{" "}
              <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <strong className="text-ink">Email / corporate:</strong>{" "}
              <ContactEmail className="text-leaf hover:underline" />
            </li>
            <li>
              <strong className="text-ink">Studio:</strong>{" "}
              {site.address.streetAddress}, {site.address.addressLocality}, NY{" "}
              {site.address.postalCode}
            </li>
          </ul>
          <Link
            href="/order"
            className="mt-8 inline-flex text-sm text-leaf underline-offset-4 hover:underline"
          >
            Full how-to-order guide →
          </Link>
        </div>
      </section>

      <ShopMarketplace
        initialOccasion="christmas"
        heading="Christmas arrangements ready to send."
        intro="Holiday reds, ivory centerpieces, hatboxes, lily-free gifts, and corporate Christmas florals—filter further by style, color, bloom, or recipient."
      />

      <section className="site-shell max-w-3xl space-y-8 pb-16">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
          Christmas delivery FAQ
        </h2>
        {christmasFaqs.map((faq) => (
          <article key={faq.question} className="border-b border-line pb-6">
            <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">
              {faq.question}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {faq.answer}
            </p>
          </article>
        ))}
      </section>

      <div className="site-shell pb-24">
        <DeliveryChecker />
      </div>
    </div>
  );
}
