import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { productSubtitle } from "@/lib/product-details";

/** Priced bouquet grid, rendered in the HTML the way ranking florist collections are. */
export function BouquetShelf({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  const from = Math.min(...products.map((product) => product.price));

  return (
    <section className="site-shell pb-16">
      <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
        Bouquets from ${from}
      </h2>
      <p className="mt-3 text-sm text-ink-soft">
        {products.length} bouquet{products.length === 1 ? "" : "s"} · price of
        the flowers, before the delivery fee
      </p>
      <div className="mt-10 grid gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 xl:grid-cols-3 xl:gap-x-12">
        {products.map((product, index) => (
          <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority={index === 0}
                className="img-zoom object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {product.sameDay ? (
                <span className="absolute left-3 top-3 bg-porcelain/90 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-leaf">
                  Same-day
                </span>
              ) : null}
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl tracking-[-0.025em] text-ink md:text-3xl">
                {product.name}
              </h3>
              <p className="text-sm text-ink-soft">${product.price}</p>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{productSubtitle(product)}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
