import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { productDisplayName } from "@/lib/product-details";
import {
  boroughLabel,
  getSeller,
  partnerShops,
  productsForSeller,
} from "@/lib/sellers";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return partnerShops.map((shop) => ({ slug: shop.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const shop = getSeller(slug);
  if (!shop) return { title: "Shop" };
  return {
    title: `${shop.name} | Petalswift Marketplace Seller`,
    description: `${shop.blurb} Shop owner ${shop.ownerName} · ${shop.neighborhood}, ${boroughLabel(shop.borough)}.`,
    alternates: { canonical: `/sell/shops/${shop.slug}` },
  };
}

export default async function SellerShopPage({ params }: Props) {
  const { slug } = await params;
  const shop = getSeller(slug);
  if (!shop) notFound();
  const listings = productsForSeller(shop.slug);

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partner shops", path: "/sell/shops" },
          { name: shop.name, path: `/sell/shops/${shop.slug}` },
        ])}
      />

      <section className="site-shell grid gap-10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
            Marketplace seller · {boroughLabel(shop.borough)}
          </p>
          <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-6xl">
            {shop.name}
          </h1>
          <p className="mt-4 text-ink-soft">
            Owned by {shop.ownerName} · {shop.neighborhood}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {shop.blurb}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {shop.specialties.map((item) => (
              <li
                key={item}
                className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-soft">
            {shop.addressLine}
            {shop.sameDay ? " · Same-day capable" : ""}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/sell/apply" className="btn-spark">
              Sell your shop here too
            </Link>
            <Link href="/arrangements" className="btn-brand">
              Browse all marketplace flowers
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-mist/30 md:min-h-[360px]">
          <Image
            src={shop.image}
            alt={shop.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </section>

      <section className="site-shell pb-24">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Products from {shop.name}
        </h2>
        {listings.length === 0 ? (
          <p className="mt-4 text-ink-soft">
            Listings for this shop are coming online.{" "}
            <Link href="/arrangements" className="text-leaf hover:underline">
              Browse the marketplace
            </Link>
            .
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((product) => (
              <Link
                key={product.slug}
                href={`/shop/${product.slug}`}
                className="group overflow-hidden rounded-xl border border-line bg-porcelain"
              >
                <div className="relative aspect-[4/5] bg-mist/30">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">
                    {productDisplayName(product)}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft line-clamp-2">{product.blurb}</p>
                  <p className="mt-3 font-semibold text-ink">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
