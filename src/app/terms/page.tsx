import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Petalswift terms for NYC flower orders, delivery, substitutions, and customer responsibilities.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <section className="site-shell max-w-3xl pb-24">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Legal
        </p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-6xl">
          Terms & conditions
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
          <p>
            By ordering from Petalswift you agree to the product descriptions,
            published delivery fees/windows, and policies at{" "}
            <Link href="/policies" className="text-leaf hover:underline">
              /policies
            </Link>
            .
          </p>
          <p>
            Floral products are perishable. Seasonal substitutions may occur
            while preserving color story and value. Lily-free requests are
            always honored.
          </p>
          <p>
            Customers are responsible for accurate recipient addresses, building
            access notes, and reachable contact details for courier updates.
          </p>
          <p>
            Questions: <ContactEmail className="text-leaf hover:underline" /> ·{" "}
            {site.phoneDisplay} · {site.address.streetAddress},{" "}
            {site.address.addressLocality}, NY {site.address.postalCode}.
          </p>
        </div>
        <Link href="/privacy" className="mt-10 inline-flex text-sm font-semibold text-leaf hover:underline">
          Privacy policy →
        </Link>
      </section>
    </div>
  );
}
