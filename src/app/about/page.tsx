import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Atelier",
  description:
    "Petalswift is a New York flower studio composing premium bouquets with same-day delivery across the five boroughs.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="site-shell grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/80">
            Our atelier
          </p>
          <h1 className="font-display mt-3 text-5xl tracking-[-0.03em] text-ink md:text-6xl">
            A flower brand New York can trust at a glance.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            Petalswift exists for people who want flowers to feel considered—not
            transactional. We compose with restraint, source for longevity, and
            deliver with the reliability the city demands.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            The goal is simple: when someone receives a Petalswift arrangement,
            they should feel the care before they read the card.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex bg-leaf px-6 py-3.5 text-sm text-canvas transition-colors hover:bg-leaf-deep"
          >
            Explore bouquets
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-mist/40">
          <Image
            src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1600&q=80"
            alt="Florist arranging premium blooms at a studio table"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
}
