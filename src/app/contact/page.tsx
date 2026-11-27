import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Petalswift — NYC Florist Help",
  description:
    "Contact Petalswift for flower delivery help—phone, email, hours, and the office address.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const hours = `${site.openingHours.days}, ${site.openingHours.opens}–${site.openingHours.closes} ET`;

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Customer service
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Contact Petalswift
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Questions about an order, delivery window, or custom design? We reply during business
          hours from our Queens atelier.
        </p>
      </section>

      <section className="site-shell grid gap-12 pb-28 lg:grid-cols-2">
        <div className="space-y-6 text-sm text-ink">
          <div>
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">Phone</h2>
            <p className="mt-2">
              <a className="text-leaf hover:underline" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">Email</h2>
            <p className="mt-2">
              <ContactEmail className="text-leaf hover:underline" />
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">Address</h2>
            <p className="mt-2 text-ink-soft">
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality}, {site.address.addressRegion}{" "}
              {site.address.postalCode}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">Hours</h2>
            <p className="mt-2 text-ink-soft">{hours}</p>
            <p className="mt-1 text-ink-soft">
              Same-day cutoff: {site.orderCutoff} most days. {site.openingHours.note}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">Order updates</h2>
            <p className="mt-2">
              <Link href="/updates" className="text-leaf hover:underline">
                Track an order
              </Link>
              {" · "}
              <Link href="/faq" className="text-leaf hover:underline">
                FAQ
              </Link>
              {" · "}
              <Link href="/shipping" className="text-leaf hover:underline">
                Shipping
              </Link>
            </p>
          </div>
        </div>
        <div className="border border-line bg-porcelain/70 p-6 md:p-8">
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Send a message</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Opens your email app with a draft—no account required.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
