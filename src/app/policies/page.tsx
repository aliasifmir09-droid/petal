import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { policies } from "@/lib/ops";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Refund, Cancellation, Substitution & Freshness Policies",
  description:
    "Petalswift policies for NYC flower delivery: refunds within 24 hours, free cancellation before composition, seasonal substitutions, and freshness guarantee.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Policies", path: "/policies" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Trust & policies
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Refunds, cancellations, substitutions, freshness, and delivery policies.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Clear rules before you order. Questions? Call{" "}
          <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
            {site.phoneDisplay}
          </a>{" "}
          or email {site.email}.
        </p>
      </section>

      <section className="site-shell grid gap-8 pb-28 md:grid-cols-2">
        {policies.map((policy) => (
          <article
            key={policy.slug}
            id={policy.slug}
            className="border border-line bg-porcelain/70 p-6 md:p-8"
          >
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
              {policy.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
              {policy.summary}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              {policy.points.map((point) => (
                <li key={point} className="border-b border-line pb-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <div className="site-shell pb-24">
        <Link
          href="/order"
          className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Start an order
        </Link>
      </div>
    </div>
  );
}
