import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { GiftAddons } from "@/components/GiftAddons";
import { JsonLd } from "@/components/JsonLd";
import { PhotoStrip } from "@/components/PhotoStrip";
import { Reviews } from "@/components/Reviews";
import { SizeGuide } from "@/components/SizeGuide";
import { getProduct, occasions, products, styles } from "@/lib/catalog";
import { deliveryPhotos, deliveryZones, sizeTiers } from "@/lib/ops";
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
    description: `${product.blurb} Order from Petalswift in Jackson Heights for delivery across New York City. Includes note, packaging, and published delivery fees.`,
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
  const relatedStyles = styles.filter((s) => product.styles.includes(s.slug));
  const sizeMeta = sizeTiers.find((t) => t.name === product.size);
  const related = products
    .filter((p) => p.slug !== product.slug)
    .filter((p) => p.occasions.some((o) => product.occasions.includes(o)))
    .slice(0, 3);

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

          <dl className="mt-8 grid gap-3 border border-line bg-porcelain/60 p-4 text-sm text-ink-soft">
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt>Size tier</dt>
              <dd className="text-ink">
                {product.size}
                {sizeMeta ? ` · ${sizeMeta.stemGuide}` : ""}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt>Styles</dt>
              <dd className="text-right text-ink">
                {relatedStyles.map((s) => s.name).join(", ") ||
                  product.styles.map((s) => s.replace(/-/g, " ")).join(", ")}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt>Colors / blooms</dt>
              <dd className="text-right text-ink">
                {product.colors.join(", ")} · {product.blooms.join(", ")}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt>Delivery</dt>
              <dd className="text-right text-ink">
                {product.sameDay
                  ? `Same-day by ${site.orderCutoff}`
                  : "Next-day / scheduled"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Delivery fees</dt>
              <dd className="text-right text-ink">
                From ${Math.min(...deliveryZones.map((z) => z.fee))} (Queens)
              </dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            <li>Composed in Jackson Heights · {site.address.streetAddress}</li>
            <li>
              <Link href="/policies#freshness" className="text-leaf hover:underline">
                Freshness guarantee
              </Link>
              {" · "}
              <Link href="/policies#refunds" className="text-leaf hover:underline">
                Refunds
              </Link>
              {" · "}
              <Link href="/updates" className="text-leaf hover:underline">
                Email & SMS updates
              </Link>
            </li>
            <li>Call {site.phoneDisplay} for timed corporate delivery</li>
          </ul>

          <div className="mt-10">
            <AddToCartButton slug={product.slug} />
          </div>
        </div>
      </div>

      <div className="site-shell grid gap-8 pb-16 lg:grid-cols-2">
        <GiftAddons />
        <div className="space-y-8">
          <SizeGuide compact />
          <DeliveryChecker />
        </div>
      </div>

      <PhotoStrip
        title="How this style arrives in New York."
        intro="Delivery photography from recent handoffs—presentation-ready, not warehouse-generic."
        photos={deliveryPhotos}
      />

      <Reviews limit={3} heading="What customers say after delivery" />

      <div className="site-shell grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-line bg-porcelain/70 p-6 md:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
            Care & policies
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-[-0.03em] text-ink">
            Built to last 5–7 days with simple care.
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
            <li>Trim stems and change water daily.</li>
            <li>Keep away from heat vents and direct midday sun.</li>
            <li>
              Seasonal substitutions keep the same palette and value—see our{" "}
              <Link href="/policies#substitution" className="text-leaf hover:underline">
                substitution policy
              </Link>
              .
            </li>
            <li>
              Quality issues within 24 hours: remake or refund per{" "}
              <Link href="/policies" className="text-leaf hover:underline">
                policies
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className="border border-line bg-porcelain/70 p-6 md:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
            You may also like
          </p>
          <ul className="mt-5 space-y-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/shop/${item.slug}`}
                  className="text-lg text-ink-soft transition-colors hover:text-ink"
                >
                  {item.name} — ${item.price}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/arrangements"
            className="mt-6 inline-flex text-sm text-leaf underline-offset-4 hover:underline"
          >
            All arrangements
          </Link>
        </div>
      </div>
    </div>
  );
}
