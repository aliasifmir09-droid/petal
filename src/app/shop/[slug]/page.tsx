import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { FreshnessGuarantee } from "@/components/FreshnessGuarantee";
import { GiftAddons } from "@/components/GiftAddons";
import { JsonLd } from "@/components/JsonLd";
import { PhotoStrip } from "@/components/PhotoStrip";
import { ProductBuyBox } from "@/components/ProductBuyBox";
import { Reviews } from "@/components/Reviews";
import { SizeGuide } from "@/components/SizeGuide";
import { getProduct, occasions, products, styles } from "@/lib/catalog";
import { deliveryPhotos } from "@/lib/ops";
import { productDisplayName } from "@/lib/product-details";
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
  const titleName = productDisplayName(product);
  return {
    title: `${titleName} — Same-Day NYC Flower Delivery`,
    description: `${product.blurb} Dimensions, vase details, delivery fees, and freshness guarantee from Petalswift.`,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: `${titleName} | Petalswift`,
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
  const related = products
    .filter((p) => p.slug !== product.slug)
    .filter((p) => p.occasions.some((o) => product.occasions.includes(o)))
    .slice(0, 3);

  return (
    <div className="pt-8 md:pt-10">
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
        <div className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-mist/30">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="text-sm text-ink-soft">
            Packaging includes protective wrap, water source for hand-tieds, and
            a handwritten note card. Scale varies by Classic / Signature / Grand.
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedOccasions.map((occasion) => (
              <Link
                key={occasion.slug}
                href={`/occasions/${occasion.slug}`}
                className="rounded-full border border-line px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-leaf hover:text-leaf"
              >
                {occasion.name}
              </Link>
            ))}
            {relatedStyles.map((style) => (
              <Link
                key={style.slug}
                href={`/styles/${style.slug}`}
                className="rounded-full border border-line px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-leaf hover:text-leaf"
              >
                {style.name}
              </Link>
            ))}
          </div>
        </div>

        <ProductBuyBox product={product} />
      </div>

      <div className="site-shell grid gap-8 pb-16 lg:grid-cols-2">
        <GiftAddons />
        <div className="space-y-8">
          <FreshnessGuarantee compact />
          <SizeGuide compact />
          <DeliveryChecker />
        </div>
      </div>

      <PhotoStrip
        title="Packaging, scale, and delivery photography."
        intro="How arrangements look on arrival in New York rooms—not only studio crops."
        photos={deliveryPhotos}
      />

      <Reviews
        limit={3}
        productName={product.name}
        heading={`Reviews for ${product.name}`}
      />

      <div className="site-shell grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-line bg-porcelain p-6 md:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-leaf">
            Care & policies
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-[-0.03em] text-ink">
            Built to last 5–7 days with simple care.
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
            <li>Trim stems and change water daily.</li>
            <li>Keep away from heat vents and direct midday sun.</li>
            <li>
              Full steps:{" "}
              <Link href="/care/vase-life" className="text-leaf hover:underline">
                vase-life care guide
              </Link>{" "}
              and all{" "}
              <Link href="/care" className="text-leaf hover:underline">
                flower care guides
              </Link>
              .
            </li>
            <li>
              Seasonal substitutions keep the same palette and value—see{" "}
              <Link href="/policies#substitution" className="text-leaf hover:underline">
                substitution policy
              </Link>
              .
            </li>
            <li>
              Quality issues within 24 hours: remake or refund per{" "}
              <Link href="/returns" className="text-leaf hover:underline">
                returns & remakes
              </Link>{" "}
              and{" "}
              <Link href="/policies#freshness" className="text-leaf hover:underline">
                freshness policy
              </Link>
              .
            </li>
            <li>
              Delivery fees and windows:{" "}
              <Link href="/shipping" className="text-leaf hover:underline">
                shipping & delivery
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-porcelain p-6 md:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-leaf">
            You may also like
          </p>
          <ul className="mt-5 space-y-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/shop/${item.slug}`}
                  className="text-lg text-ink-soft transition-colors hover:text-ink"
                >
                  {productDisplayName(item)} — ${item.price}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/arrangements"
            className="mt-6 inline-flex text-sm font-semibold text-leaf underline-offset-4 hover:underline"
          >
            All arrangements
          </Link>
        </div>
      </div>
    </div>
  );
}
