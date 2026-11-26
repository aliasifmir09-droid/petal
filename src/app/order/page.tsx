import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import {
  breadcrumbSchema,
  flowerDeliveryServiceSchema,
  howToOrderSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Taking NYC Flower Orders from December 10th, 2026",
  },
  description:
    "Petalswift takes NYC flower orders from Dec 10. Same-day & Christmas delivery by phone (917) 460-5550 or online from Jackson Heights.",
  alternates: {
    canonical: "/order",
    languages: {
      "en-US": "/order",
      "x-default": "/order",
    },
  },
};

const steps = [
  {
    title: "1. Pick the arrangement",
    body: "Shop Christmas, all arrangements, or call us with a color story, budget, and occasion. We compose in Jackson Heights.",
    href: "/christmas",
    cta: "Shop Christmas",
  },
  {
    title: "2. Confirm ZIP + date",
    body: `Orders open ${site.ordersStartDate}. Same-day across five boroughs when ordered by ${site.orderCutoff}. Christmas Eve delivery needs orders by ${site.christmasEveCutoff}.`,
    href: "/delivery",
    cta: "Check delivery",
  },
  {
    title: "3. Checkout or call",
    body: `Add to cart online, or place the order by phone at ${site.phoneDisplay}. Corporate holiday lists: email the atelier.`,
    href: "/cart",
    cta: "Open cart",
  },
];

export default function OrderPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Start an order", path: "/order" },
          ]),
          howToOrderSchema(),
          flowerDeliveryServiceSchema(),
        ]}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Taking orders from {site.ordersStartDate} · {site.holidaySeason}
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Start ordering before Christmas.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Petalswift starts taking NYC flower orders from{" "}
          {site.ordersStartDate}—holiday gifts, same-day bouquets, and corporate
          Christmas deliveries. Use the site or call the atelier directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Call {site.phoneDisplay}
          </a>
          <Link
            href="/christmas"
            className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-leaf hover:text-leaf"
          >
            Christmas catalog
          </Link>
          <ContactEmail
            subject="Christmas flower order NYC"
            className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-leaf hover:text-leaf"
          >
            Email order
          </ContactEmail>
        </div>
      </section>

      <section className="site-shell grid gap-6 pb-16 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="border border-line bg-porcelain/70 p-6"
          >
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">
              {step.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {step.body}
            </p>
            <Link
              href={step.href}
              className="mt-6 inline-flex text-sm text-leaf underline-offset-4 hover:underline"
            >
              {step.cta} →
            </Link>
          </article>
        ))}
      </section>

      <section className="site-shell border border-line bg-leaf px-6 py-10 text-porcelain md:px-10 mb-24">
        <h2 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">
          NAP for maps, SEO, and AI answers
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-porcelain/80 md:text-base">
          Use these exact details everywhere—Google Business, directories, and AI
          assistants—so Christmas searchers find the real local florist.
        </p>
        <dl className="mt-8 grid gap-4 text-sm md:grid-cols-2 md:text-base">
          <div>
            <dt className="text-porcelain/60">Name</dt>
            <dd>{site.name}</dd>
          </div>
          <div>
            <dt className="text-porcelain/60">Phone</dt>
            <dd>
              <a href={`tel:${site.phone}`} className="hover:underline">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-porcelain/60">Address</dt>
            <dd>
              {site.address.streetAddress}, {site.address.addressLocality},{" "}
              {site.address.addressRegion} {site.address.postalCode}
            </dd>
          </div>
          <div>
            <dt className="text-porcelain/60">Website</dt>
            <dd>{site.url}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
