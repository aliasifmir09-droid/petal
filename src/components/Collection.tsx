import Image from "next/image";
import Link from "next/link";
import { bouquets } from "@/lib/bouquets";

export function Collection() {
  const featured = bouquets.slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <div className="site-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/80">
              Featured compositions
            </p>
            <h2 className="font-display mt-3 text-4xl tracking-[-0.03em] text-ink md:text-5xl">
              Bouquets for this week
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm text-leaf underline-offset-4 transition-colors hover:text-leaf-deep hover:underline"
          >
            View the full collection
          </Link>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {featured.map((bouquet) => (
            <Link
              key={bouquet.slug}
              href={`/shop/${bouquet.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-mist/40">
                <Image
                  src={bouquet.image}
                  alt={bouquet.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">
                  {bouquet.name}
                </h3>
                <p className="text-sm text-ink-soft">${bouquet.price}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {bouquet.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
