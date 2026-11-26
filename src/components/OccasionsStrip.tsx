import Link from "next/link";
import { occasions } from "@/lib/catalog";

export function OccasionsStrip() {
  return (
    <section className="border-y border-line bg-porcelain/55 py-16 md:py-20">
      <div className="site-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
              Shop by occasion
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-[-0.03em] text-ink md:text-5xl">
              Flowers that say exactly enough.
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm text-leaf underline-offset-4 hover:underline"
          >
            Browse full marketplace
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {occasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/occasions/${occasion.slug}`}
              className="group border border-line bg-canvas/40 px-4 py-5 transition-colors hover:border-leaf hover:bg-porcelain"
            >
              <p className="font-display text-xl tracking-[-0.02em] text-ink md:text-2xl">
                {occasion.name}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft md:text-sm">
                {occasion.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
