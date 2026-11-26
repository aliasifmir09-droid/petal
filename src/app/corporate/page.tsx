import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { corporateCases } from "@/lib/ops";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Corporate & Hotel Flower Delivery NYC",
  description:
    "Petalswift corporate gifting and hotel arrival florals across NYC—timed handoffs, published fees, and Jackson Heights atelier quality.",
  alternates: { canonical: "/corporate" },
};

export default function CorporatePage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Corporate", path: "/corporate" },
        ])}
      />
      <section className="site-shell pb-12">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Corporate & hotels
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Client gifts and hotel arrivals, handled quietly.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Timed lobby handoffs, office suites, and multi-address holiday lists.
          Email the atelier or call {site.phoneDisplay} for volume orders.
          Taking orders from {site.ordersStartDate}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ContactEmail subject="Corporate flower order" className="btn-spark">
            Email corporate desk
          </ContactEmail>
          <Link href="/updates" className="btn-brand">
            Order updates
          </Link>
        </div>
      </section>
      <section className="site-shell grid gap-6 pb-24 md:grid-cols-3">
        {corporateCases.map((item) => (
          <article key={item.title} className="rounded-xl border border-line bg-porcelain p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf">
              {item.borough}
            </p>
            <h2 className="font-display mt-3 text-2xl text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.result}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
