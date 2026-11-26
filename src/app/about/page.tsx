import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PhotoStrip } from "@/components/PhotoStrip";
import { atelierPhotos } from "@/lib/ops";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Atelier in Jackson Heights, Queens",
  description:
    "Visit the Petalswift flower atelier in Jackson Heights—florist photography, composition process, and same-day NYC delivery from 37-68 74th Street.",
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

      <section className="site-shell grid items-center gap-14 pb-16 lg:grid-cols-2 lg:gap-20">
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
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/arrangements"
              className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
            >
              Explore arrangements
            </Link>
            <Link
              href="/policies"
              className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
            >
              Our policies
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
          <Image
            src={atelierPhotos[0].src}
            alt={atelierPhotos[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <PhotoStrip
        title="Atelier and florist photography."
        intro="Morning stems, conditioning, and composition at 37-68 74th Street—the work behind every same-day New York delivery."
        photos={atelierPhotos}
      />
    </div>
  );
}
