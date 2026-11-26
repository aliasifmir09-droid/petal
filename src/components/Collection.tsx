import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/catalog";

export function Collection() {
  const featured = products.filter((p) => p.bestseller).slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <div className="site-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
              Featured compositions
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.035em] text-ink md:text-6xl">
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

        <div className="mt-14 space-y-16 md:space-y-24">
          {featured.map((bouquet, index) => {
            const reverse = index % 2 === 1;
            return (
              <Link
                key={bouquet.slug}
                href={`/shop/${bouquet.slug}`}
                className={`group grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
                  <Image
                    src={bouquet.image}
                    alt={bouquet.imageAlt}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={reverse ? "md:pr-8" : "md:pl-4"}>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/70">
                    {bouquet.occasions[0]?.replace("-", " ")}
                  </p>
                  <h3 className="font-display mt-3 text-4xl tracking-[-0.03em] text-ink md:text-5xl">
                    {bouquet.name}
                  </h3>
                  <p className="mt-3 text-lg text-ink-soft">${bouquet.price}</p>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                    {bouquet.blurb}
                  </p>
                  <span className="mt-7 inline-flex text-sm text-leaf underline-offset-4 group-hover:underline">
                    View bouquet
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
