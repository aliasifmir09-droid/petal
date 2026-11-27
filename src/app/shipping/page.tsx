import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { deliveryZones } from "@/lib/ops";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Shipping & Delivery — NYC Flowers",
  description:
    "Petalswift NYC flower delivery fees, same-day cutoff, borough windows, and what to expect on delivery day.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Shipping & delivery", path: "/shipping" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Customer service
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Shipping & delivery
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Petalswift delivers fresh flowers across New York City—not national parcel shipping. Fees
          and windows are confirmed when you enter a ZIP at checkout.
        </p>
      </section>

      <section className="site-shell pb-16">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Same-day & next-day</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
          <li>
            Same-day orders: place by <strong className="text-ink">{site.orderCutoff}</strong> on
            most days.
          </li>
          <li>
            Next-day and scheduled dates available when you need a specific morning or afternoon
            window.
          </li>
          <li>
            Peak holidays (Valentine&apos;s, Mother&apos;s Day, major sympathy days) may tighten
            cutoffs—we show the live cutoff at checkout. Christmas Eve: {site.christmasEveCutoff}.
          </li>
        </ul>
      </section>

      <section className="site-shell pb-16">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
          Delivery fees by borough
        </h2>
        <p className="mt-3 text-sm text-ink-soft md:text-base">
          Flat starting fees by borough.{" "}
          <Link href="/delivery-zips" className="text-leaf hover:underline">
            Browse ZIP lists
          </Link>{" "}
          or use the{" "}
          <Link href="/delivery" className="text-leaf hover:underline">
            delivery checker
          </Link>
          .
        </p>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-porcelain/80 text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              <tr>
                <th className="px-4 py-3 font-medium">Area</th>
                <th className="px-4 py-3 font-medium">Fee</th>
                <th className="px-4 py-3 font-medium">Same-day window</th>
              </tr>
            </thead>
            <tbody>
              {deliveryZones.map((zone) => (
                <tr key={zone.slug} className="border-t border-line">
                  <td className="px-4 py-3 text-ink">{zone.borough}</td>
                  <td className="px-4 py-3 text-ink-soft">From ${zone.fee}</td>
                  <td className="px-4 py-3 text-ink-soft">{zone.sameDayWindow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="site-shell pb-16">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Windows & handoffs</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
          <li>
            Typical windows are borough-based. Exact ETA arrives by SMS/email when out for delivery.
          </li>
          <li>Add buzzer, floor, doorman, hotel desk name, and recipient spelling at checkout.</li>
          <li>
            If nobody is available, we follow leave-with notes or briefly reattempt the same day when
            logistics allow.
          </li>
          <li>
            Full policy detail:{" "}
            <Link href="/policies#late-delivery" className="text-leaf hover:underline">
              Delivery policy
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="site-shell pb-28">
        <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Need help?</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
          Call{" "}
          <a className="text-leaf hover:underline" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>{" "}
          or visit{" "}
          <Link href="/contact" className="text-leaf hover:underline">
            Contact
          </Link>
          . Track status on{" "}
          <Link href="/updates" className="text-leaf hover:underline">
            Order updates
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
