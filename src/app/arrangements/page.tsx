import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrangementsCatalog } from "@/components/ArrangementsCatalog";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import { blooms, colors, occasions, recipients, styles } from "@/lib/catalog";
import { breadcrumbSchema, itemListSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "All Floral Arrangements & Bouquets for NYC Delivery",
  description:
    "Shop every Petalswift floral arrangement: hand-tied, vase, hatbox, gift box, lily-free, by occasion, color, bloom, and recipient—with same-day NYC delivery from Jackson Heights.",
  alternates: { canonical: "/arrangements" },
  openGraph: {
    title: "All Floral Arrangements | Petalswift NYC",
    description:
      "A bigger, cleaner arrangements marketplace than generic flower networks—filter by style, color, bloom, recipient, and occasion.",
    url: "/arrangements",
  },
};

export default function ArrangementsPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Arrangements", path: "/arrangements" },
          ]),
          itemListSchema(),
        ]}
      />

      <section className="site-shell pb-10">
        <div className="grid gap-8 border border-line bg-porcelain/70 p-6 md:grid-cols-2 md:p-10 lg:grid-cols-4">
          <OptionGroup
            title="By style"
            links={styles.map((s) => ({
              href: `/styles/${s.slug}`,
              label: s.name,
            }))}
          />
          <OptionGroup
            title="By occasion"
            links={occasions.map((o) => ({
              href: `/occasions/${o.slug}`,
              label: o.name,
            }))}
          />
          <OptionGroup
            title="By color"
            links={colors.map((c) => ({
              href: `/arrangements?color=${c.slug}`,
              label: c.name,
            }))}
          />
          <OptionGroup
            title="By bloom & recipient"
            links={[
              ...blooms.map((b) => ({
                href: `/arrangements?bloom=${b.slug}`,
                label: b.name,
              })),
              ...recipients.map((r) => ({
                href: `/arrangements?recipient=${r.slug}`,
                label: `For ${r.name.toLowerCase()}`,
              })),
            ]}
          />
        </div>
      </section>

      <Suspense
        fallback={
          <div className="site-shell py-20 text-ink-soft">Loading catalog…</div>
        }
      >
        <ArrangementsCatalog />
      </Suspense>

      <div className="site-shell pb-24">
        <DeliveryChecker />
      </div>
    </div>
  );
}

function OptionGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/75">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
