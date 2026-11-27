import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { deliveryZipGroups } from "@/lib/delivery-zips";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "NYC Delivery ZIP Codes — Petalswift",
  description:
    "NYC flower delivery ZIP codes by borough for Petalswift—Queens, Manhattan, Brooklyn, Bronx, and Staten Island. Confirm fee at checkout.",
  alternates: { canonical: "/delivery-zips" },
};

export default function DeliveryZipsPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Delivery", path: "/delivery" },
          { name: "ZIP codes", path: "/delivery-zips" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Customer service
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Delivery ZIP codes
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Representative coverage by borough. Exact fee and same-day availability are confirmed when
          you enter a ZIP on{" "}
          <Link href="/delivery" className="text-leaf hover:underline">
            Delivery
          </Link>{" "}
          or at checkout. See also{" "}
          <Link href="/shipping" className="text-leaf hover:underline">
            Shipping & delivery
          </Link>
          .
        </p>
      </section>

      <section className="site-shell space-y-12 pb-28">
        {deliveryZipGroups.map((group) => (
          <div key={group.slug} id={group.slug}>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">{group.borough}</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Fees from ${group.feeFrom}. {group.note}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.zips.map((zip) => (
                <li
                  key={zip}
                  className="border border-line bg-porcelain/60 px-2.5 py-1 font-mono text-sm text-ink"
                >
                  {zip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
