import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ShopMarketplace } from "@/components/ShopMarketplace";
import { getOccasion, occasions } from "@/lib/catalog";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return occasions.map((occasion) => ({ slug: occasion.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const occasion = getOccasion(slug);
  if (!occasion) return { title: "Occasions" };
  return {
    title: occasion.seoTitle,
    description: `${occasion.blurb} Same-day NYC flower delivery from Petalswift in Jackson Heights.`,
    alternates: { canonical: `/occasions/${occasion.slug}` },
  };
}

export default async function OccasionPage({ params }: Props) {
  const { slug } = await params;
  const occasion = getOccasion(slug);
  if (!occasion) notFound();

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Marketplace", path: "/shop" },
          { name: occasion.name, path: `/occasions/${occasion.slug}` },
        ])}
      />
      <ShopMarketplace
        initialOccasion={occasion.slug}
        heading={occasion.seoTitle}
        intro={occasion.blurb}
      />
    </div>
  );
}
