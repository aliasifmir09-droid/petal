import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Flower Subscriptions & Gift Reminders NYC",
  description:
    "Join the Petalswift waitlist for NYC flower subscriptions, reorder shortcuts, and gift reminders.",
  alternates: { canonical: "/subscribe" },
};

export default function SubscribePage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Subscribe", path: "/subscribe" },
        ])}
      />
      <section className="site-shell max-w-3xl pb-24">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Subscriptions & reorder
        </p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-6xl">
          Weekly flowers and gift reminders—coming next.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
          We are building UrbanStems-style subscriptions and reorder tools
          without losing Petalswift’s curated NYC atelier standard. Join the
          waitlist and we will email when Classic / Signature recurring
          deliveries open.
        </p>
        <a
          href={`mailto:${site.email}?subject=Subscription%20waitlist&body=Please%20add%20me%20to%20the%20Petalswift%20subscription%20and%20gift-reminder%20waitlist.`}
          className="btn-spark mt-8"
        >
          Join waitlist by email
        </a>
        <p className="mt-6 text-sm text-ink-soft">
          Need flowers today?{" "}
          <Link href="/arrangements" className="font-semibold text-leaf hover:underline">
            Shop arrangements
          </Link>{" "}
          or{" "}
          <Link href="/order" className="font-semibold text-leaf hover:underline">
            start an order
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
