import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faqs, site } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ — Same-Day NYC Flower Delivery",
  description:
    "Answers about Petalswift same-day flower delivery across New York City, freshness, notes, corporate orders, and our Jackson Heights atelier.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(),
        ]}
      />

      <section className="site-shell pb-10">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          FAQ
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Clear answers for New York orders.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Still need help? Call{" "}
          <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
            {site.phoneDisplay}
          </a>{" "}
          or email {site.email}.
        </p>
      </section>

      <section className="site-shell max-w-3xl space-y-8 pb-28">
        {faqs.map((faq) => (
          <article key={faq.question} className="border-b border-line pb-8">
            <h2 className="font-display text-2xl tracking-[-0.025em] text-ink md:text-3xl">
              {faq.question}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {faq.answer}
            </p>
          </article>
        ))}
        <Link
          href="/shop"
          className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Shop bouquets
        </Link>
      </section>
    </div>
  );
}
