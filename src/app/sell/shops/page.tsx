import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { boroughLabel, getLiveSellers, productsForSeller } from "@/lib/sellers";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Partner Flower Shops | Sell on Petalswift",
  description:
    "Browse NYC flower shops selling on the Petalswift marketplace—Jackson Heights, Brooklyn, Manhattan partners and more.",
  alternates: { canonical: "/sell/shops" },
};

export default function PartnerShopsPage() {
  const shops = getLiveSellers();

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell on Petalswift", path: "/sell" },
          { name: "Partner shops", path: "/sell/shops" },
        ])}
      />
      <section className="site-shell pb-10">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Marketplace sellers
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Shops selling on Petalswift.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Independent florists and the Petalswift atelier—each shop keeps its
          name on the product. Want your studio here?{" "}
          <Link href="/sell/apply" className="font-semibold text-leaf hover:underline">
            Create a shop owner account
          </Link>
          .
        </p>
      </section>
      <section className="site-shell grid gap-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => {
          const count = productsForSeller(shop.slug).length;
          return (
            <Link
              key={shop.slug}
              href={`/sell/shops/${shop.slug}`}
              className="group overflow-hidden rounded-xl border border-line bg-porcelain"
            >
              <div className="relative aspect-[16/10] bg-mist/30">
                <Image
                  src={shop.image}
                  alt={shop.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf">
                  {boroughLabel(shop.borough)} · {shop.neighborhood}
                </p>
                <h2 className="font-display mt-2 text-2xl text-ink">{shop.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">
                  {shop.blurb}
                </p>
                <p className="mt-4 text-sm font-semibold text-leaf">
                  {count} live product{count === 1 ? "" : "s"} →
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
