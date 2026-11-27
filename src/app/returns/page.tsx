import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Returns & Remakes — Flower Guarantee",
  description:
    "Petalswift return, remake, and refund policy for NYC flower deliveries—24-hour photo window and freshness guarantee.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Returns & remakes", path: "/returns" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Customer service
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Returns & remakes
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Cut flowers are perishable—we do not accept unused returns like apparel. We do remake or
          refund when quality or delivery falls short under our freshness promise.
        </p>
      </section>

      <section className="site-shell space-y-12 pb-28">
        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Freshness guarantee</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            {site.freshnessGuarantee} Full language:{" "}
            <Link href="/policies#freshness" className="text-leaf hover:underline">
              Freshness & remake policy
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
            What we can remake or refund
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
            <li>Damaged or severely wilted flowers on arrival</li>
            <li>Wrong product or major substitution without prior notice when avoidable</li>
            <li>Failed delivery attributable to us (wrong address after our confirmation error)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
            What usually is not refundable
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
            <li>Change of mind after composition has started or courier is en route</li>
            <li>
              Recipient preference (color/style taste) when the design matches the product
              description
            </li>
            <li>
              Issues reported after the 24-hour photo window without exceptional circumstances
            </li>
            <li>Access failures when buzzer/lobby notes were missing or incorrect</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Cancellations</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            Cancel or change before composition begins for a full refund when possible. Same-day
            cutoffs and peak days leave less room—call as soon as you know. See{" "}
            <Link href="/policies#cancellation" className="text-leaf hover:underline">
              cancellation policy
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">How to request help</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
            <li>Have your order ID ready (email confirmation or /updates).</li>
            <li>Photograph the full arrangement and any damaged stems in good light.</li>
            <li>
              Email <ContactEmail className="text-leaf" /> or call{" "}
              <a className="text-leaf hover:underline" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
              , or use{" "}
              <Link href="/contact" className="text-leaf hover:underline">
                Contact
              </Link>
              .
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
