import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bouquets } from "@/lib/bouquets";

export const metadata: Metadata = {
  title: "Bouquets",
  description:
    "Shop Petalswift’s curated collection of luxury bouquets with same-day delivery across New York City.",
};

export default function ShopPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="site-shell pb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/80">
          Collection
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-5xl tracking-[-0.03em] text-ink md:text-6xl">
          Bouquets composed for presence.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          Each arrangement is designed for New York rooms—generous, refined, and
          ready for same-day delivery.
        </p>
      </section>

      <section className="site-shell grid gap-10 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {bouquets.map((bouquet) => (
          <Link key={bouquet.slug} href={`/shop/${bouquet.slug}`} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist/40">
              <Image
                src={bouquet.image}
                alt={bouquet.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">
                {bouquet.name}
              </h2>
              <p className="text-sm text-ink-soft">${bouquet.price}</p>
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft/70">
              {bouquet.occasion}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {bouquet.blurb}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
