import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ShopMarketplace } from "@/components/ShopMarketplace";
import { getStyle, styles } from "@/lib/catalog";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return styles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) return { title: "Styles" };
  return {
    title: `${style.name} Flower Arrangements NYC`,
    description: `${style.blurb} Same-day New York City delivery from Petalswift.`,
    alternates: { canonical: `/styles/${style.slug}` },
  };
}

export default async function StylePage({ params }: Props) {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) notFound();

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Arrangements", path: "/arrangements" },
          { name: style.name, path: `/styles/${style.slug}` },
        ])}
      />
      <ShopMarketplace
        initialStyle={style.slug}
        heading={`${style.name} arrangements`}
        intro={style.blurb}
      />
    </div>
  );
}
