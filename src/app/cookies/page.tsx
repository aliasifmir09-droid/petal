import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Cookies — Petalswift",
  description:
    "How Petalswift uses cookies and similar technologies on petalswift.com for cart, preferences, and analytics.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cookies", path: "/cookies" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">Legal</p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Cookies
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          This page explains cookies and similar storage we use on petalswift.com. For broader data
          practices, see our{" "}
          <Link href="/privacy" className="text-leaf hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </section>

      <section className="site-shell space-y-12 pb-28">
        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">What we use</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
            <li>
              <strong className="text-ink">Essential</strong> — cart contents, checkout session, and
              security tokens so the shop works.
            </li>
            <li>
              <strong className="text-ink">Preferences</strong> — items such as ZIP or delivery hints
              you save so we do not ask again every visit.
            </li>
            <li>
              <strong className="text-ink">Analytics</strong> — when enabled, aggregate traffic
              metrics (for example page views) to improve the site. We avoid selling personal data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Your choices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            You can block or delete cookies in your browser settings. Blocking essential cookies may
            prevent checkout. Clearing site data removes a saved cart on this device.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Updates</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            We may update this notice when our tooling changes. The effective date follows the
            privacy policy revision on{" "}
            <Link href="/privacy" className="text-leaf hover:underline">
              /privacy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
