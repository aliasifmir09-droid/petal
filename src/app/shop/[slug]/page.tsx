import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bouquets, getBouquet } from "@/lib/bouquets";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return bouquets.map((bouquet) => ({ slug: bouquet.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bouquet = getBouquet(slug);
  if (!bouquet) return { title: "Bouquet" };
  return {
    title: bouquet.name,
    description: bouquet.blurb,
  };
}

export default async function BouquetPage({ params }: Props) {
  const { slug } = await params;
  const bouquet = getBouquet(slug);
  if (!bouquet) notFound();

  return (
    <div className="pt-28 md:pt-32">
      <div className="site-shell grid gap-10 pb-24 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist/40">
          <Image
            src={bouquet.image}
            alt={bouquet.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/80">
            {bouquet.occasion}
          </p>
          <h1 className="font-display mt-3 text-5xl tracking-[-0.03em] text-ink md:text-6xl">
            {bouquet.name}
          </h1>
          <p className="mt-4 text-2xl text-ink-soft">${bouquet.price}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {bouquet.blurb} Includes a handwritten note and protective packaging
            for New York delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:hello@petalswift.com?subject=Order%20${encodeURIComponent(bouquet.name)}`}
              className="inline-flex bg-leaf px-6 py-3.5 text-sm text-canvas transition-colors hover:bg-leaf-deep"
            >
              Request this bouquet
            </a>
            <Link
              href="/shop"
              className="inline-flex border border-ink/15 px-6 py-3.5 text-sm text-ink transition-colors hover:border-ink/30"
            >
              Back to collection
            </Link>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Same-day available across NYC when ordered by 1pm. Checkout and
            live inventory come next—this page is ready for Stripe or Shopify
            wiring.
          </p>
        </div>
      </div>
    </div>
  );
}
