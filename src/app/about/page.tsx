import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Atelier in Jackson Heights, Queens",
  description:
    "Petalswift is a New York flower atelier in Jackson Heights composing premium bouquets with same-day delivery across the five boroughs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Atelier", path: "/about" },
        ])}
      />

      <section className="site-shell grid items-center gap-14 pb-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
            Our atelier
          </p>
          <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-7xl">
            A flower brand New York can trust at a glance.
          </h1>
          <p className="mt-7 text-base leading-relaxed text-ink-soft md:text-lg">
            Petalswift exists for people who want flowers to feel considered—not
            transactional. From our atelier at {site.address.streetAddress} in
            Jackson Heights, we compose with restraint, source for longevity,
            and deliver with the reliability the city demands.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            When someone receives a Petalswift arrangement, they should feel the
            care before they read the card.
          </p>
          <div className="mt-8 space-y-2 text-sm text-ink-soft">
            <p>
              {site.address.streetAddress}, {site.address.addressLocality},{" "}
              {site.address.addressRegion} {site.address.postalCode}
            </p>
            <p>
              <a href={`tel:${site.phone}`} className="hover:text-ink">
                {site.phoneDisplay}
              </a>
              {" · "}
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </p>
          </div>
          <Link
            href="/shop"
            className="mt-10 inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Explore bouquets
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
          <Image
            src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1600&q=80"
            alt="Florist arranging premium blooms at the Petalswift atelier"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
}
