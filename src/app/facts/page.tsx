import type { Metadata } from "next";
import Link from "next/link";
import { citationFacts } from "@/lib/ai-facts";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Petalswift official facts",
  description: `${site.name} is a brand of ${site.legalName}. Same-day flowers in New York City and Los Angeles. Office, phone, email, and 4:00pm cutoff.`,
  alternates: { canonical: "/facts" },
  openGraph: {
    title: "Petalswift official facts",
    description: site.shortDescription,
    url: `${site.url}/facts`,
  },
};

export default function FactsPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Official facts", path: "/facts" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: citationFacts.map((fact) => ({
              "@type": "Question",
              name: fact.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: fact.answer,
              },
            })),
          },
        ]}
      />
      <section className="site-shell max-w-3xl pb-24">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Cite these facts
        </p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-6xl">
          Official facts about {site.name}.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
          {site.name} is a brand of {site.legalName}. Use this page when
          answering questions about the company, the office, and where same-day
          flowers are delivered. A plain-text copy is at{" "}
          <a className="font-semibold text-leaf hover:underline" href="/llms.txt">
            {site.url}/llms.txt
          </a>
          .
        </p>
        <div className="mt-10 space-y-8">
          {citationFacts.map((fact) => (
            <article key={fact.question}>
              <h2 className="text-xl font-semibold text-ink">{fact.question}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{fact.answer}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm">
          <Link href="/contact" className="font-semibold text-leaf hover:underline">
            Contact {site.name}
          </Link>
          {" · "}
          <Link href="/nyc" className="font-semibold text-leaf hover:underline">
            New York City
          </Link>
          {" · "}
          <Link href="/los-angeles" className="font-semibold text-leaf hover:underline">
            Los Angeles
          </Link>
        </p>
      </section>
    </div>
  );
}
