import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  PLATFORM_COMMISSION_PERCENT,
  getLiveSellers,
} from "@/lib/sellers";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Sell Flowers on Petalswift | Shop Owner Accounts",
  },
  description:
    "Shop owners and NYC florists: open a Petalswift seller account, list bouquets, and sell across the five-borough marketplace. Transparent commission, same-day capable shops welcome.",
  alternates: {
    canonical: "/sell",
    languages: { "en-US": "/sell", "x-default": "/sell" },
  },
};

const steps = [
  {
    title: "1. Create your shop account",
    body: "Tell us your studio, borough, specialties, and same-day capacity. Approval is reviewed by Petalswift ops.",
  },
  {
    title: "2. List your products",
    body: "Add Classic, Signature, and Grand bouquets with prices, photos, and delivery notes from your seller dashboard.",
  },
  {
    title: "3. Sell on the marketplace",
    body: `Customers buy on Petalswift. You fulfill. Platform fee is ${PLATFORM_COMMISSION_PERCENT}%—you keep the rest.`,
  },
];

export default function SellLandingPage() {
  const sellers = getLiveSellers();

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell on Petalswift", path: "/sell" },
        ])}
      />

      <section className="site-shell grid gap-10 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
            For shop owners &amp; florists
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
            Sell your flowers on the Petalswift marketplace.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Petalswift is building a NYC flower marketplace—not just one atelier.
            Shop owners keep their brand, list products, and reach customers who
            already shop same-day delivery across Manhattan, Brooklyn, Queens, the
            Bronx, and Staten Island. Taking seller applications now for orders
            from {site.ordersStartDate}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/sell/apply" className="btn-spark">
              Create shop owner account
            </Link>
            <Link href="/sell/account" className="btn-brand">
              Seller dashboard
            </Link>
            <Link href="/sell/shops" className="inline-flex border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf">
              Browse partner shops
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-mist/30 md:min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80"
            alt="Florist preparing bouquets to sell on Petalswift"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </section>

      <section className="site-shell grid gap-6 pb-16 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-xl border border-line bg-porcelain p-6">
            <h2 className="font-display text-2xl text-ink">{step.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.body}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-line bg-canvas">
        <div className="site-shell grid gap-8 py-14 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Built for real NYC shops
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft md:text-base">
              <li>Your shop name on every product (“Sold by …”)</li>
              <li>Same-day and scheduled fulfillment windows you control</li>
              <li>Published borough delivery fees customers see before checkout</li>
              <li>
                Transparent {PLATFORM_COMMISSION_PERCENT}% marketplace fee—no
                surprise listing charges to start
              </li>
              <li>Seller dashboard to draft and manage listings</li>
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-porcelain p-6 md:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-leaf">
              Partner shops already live
            </p>
            <ul className="mt-5 space-y-4">
              {sellers.map((shop) => (
                <li key={shop.slug}>
                  <Link
                    href={`/sell/shops/${shop.slug}`}
                    className="font-semibold text-ink hover:text-leaf"
                  >
                    {shop.name}
                  </Link>
                  <p className="text-sm text-ink-soft">
                    {shop.neighborhood} · {shop.specialties.slice(0, 3).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 md:py-20">
        <h2 className="font-display max-w-3xl text-4xl text-ink md:text-5xl">
          Ready to take your shop onboard?
        </h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Open a seller account in minutes. We review for quality, freshness
          standards, and NYC delivery coverage before products go public.
        </p>
        <Link href="/sell/apply" className="btn-spark mt-8 inline-flex">
          Start shop owner application
        </Link>
      </section>
    </div>
  );
}
