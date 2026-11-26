import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import { getProduct, occasions, products } from "@/lib/catalog";
import { site } from "@/lib/site";
import { breadcrumbSchema, productSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Bouquet" };
  return {
    title: `${product.name} — Same-Day NYC Flower Delivery`,
    description: `${product.blurb} Order from Petalswift in Jackson Heights for delivery across New York City.`,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: `${product.name} | Petalswift`,
      description: product.blurb,
      url: `/shop/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productLd = productSchema(slug);
  const relatedOccasions = occasions.filter((o) =>
    product.occasions.includes(o.slug),
  );

  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marketplace", path: "/shop" },
            { name: product.name, path: `/shop/${product.slug}` },
          ]),
          ...(productLd ? [productLd] : []),
        ]}
      />

      <div className="site-shell grid gap-12 pb-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/75">
            {product.size}
            {product.sameDay ? " · Same-day NYC" : " · Next-day / scheduled"}
          </p>
          <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-7xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-baseline gap-3">
            <p className="text-2xl text-ink">${product.price}</p>
            {product.compareAt ? (
              <p className="text-base text-ink-soft line-through">
                ${product.compareAt}
              </p>
            ) : null}
          </div>
          <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {product.blurb} Includes a handwritten note and protective packaging
            for New York delivery.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {relatedOccasions.map((occasion) => (
              <Link
                key={occasion.slug}
                href={`/occasions/${occasion.slug}`}
                className="border border-line px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-leaf hover:text-leaf"
              >
                {occasion.name}
              </Link>
            ))}
          </div>

          <ul className="mt-8 space-y-2 text-sm text-ink-soft">
            <li>
              {product.sameDay
                ? `Same-day available when ordered by ${site.orderCutoff}`
                : "Available for next-day and scheduled delivery"}
              {product.nextDay ? " · Next-day ready" : ""}
            </li>
            <li>
              Style: {product.styles.map((s) => s.replace(/-/g, " ")).join(", ")}
            </li>
            <li>Composed in Jackson Heights · {site.address.streetAddress}</li>
            <li>Call {site.phoneDisplay} for timed corporate delivery</li>
          </ul>

          <div className="mt-10">
            <AddToCartButton slug={product.slug} />
          </div>
        </div>
      </div>

      <div className="site-shell grid gap-8 pb-28 lg:grid-cols-[1.1fr_0.9fr]">
        <DeliveryChecker />
        <div className="border border-line bg-porcelain/70 p-6 md:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
            Why Petalswift over big networks
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-[-0.03em] text-ink">
            Local atelier. Citywide reach.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
            Interflora-style marketplaces route orders through a generic network.
            Petalswift composes in one New York atelier and delivers with
            borough-level care—so quality stays consistent and the design feels
            intentional.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex text-sm text-leaf underline-offset-4 hover:underline"
          >
            Back to marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}
