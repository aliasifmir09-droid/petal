import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Petalswift collects and uses order, delivery, email, and SMS information for NYC flower delivery.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <section className="site-shell max-w-3xl pb-24">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Legal
        </p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-6xl">
          Privacy policy
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
          <p>
            {site.legalName} operates {site.name} ({site.address.streetAddress},{" "}
            {site.address.addressLocality}, {site.address.addressRegion}{" "}
            {site.address.postalCode}) and collects the information needed to
            fulfill flower orders and support customers.
          </p>
          <p>
            We may collect name, email, phone, delivery address, ZIP, order
            notes, payment confirmation details from processors, and SMS/email
            preference settings.
          </p>
          <p>
            We use this data to compose and deliver arrangements, send order
            updates, respond to support requests, and improve service quality. We
            do not sell personal information.
          </p>
          <p>
            Contact <ContactEmail className="text-leaf hover:underline" /> or{" "}
            {site.phoneDisplay} to request access, correction, or deletion of
            personal data where applicable.
          </p>
        </div>
        <Link href="/terms" className="mt-10 inline-flex text-sm font-semibold text-leaf hover:underline">
          Terms & conditions →
        </Link>
      </section>
    </div>
  );
}
