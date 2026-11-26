import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SizeGuide } from "@/components/SizeGuide";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Classic, Signature & Grand Bouquet Sizes Explained",
  description:
    "Understand Petalswift Classic, Signature, and Grand pricing—stem counts, best-fit rooms, and when to choose each NYC bouquet size.",
  alternates: { canonical: "/sizes" },
};

export default function SizesPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sizes", path: "/sizes" },
        ])}
      />
      <section className="site-shell pb-8">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Pricing clarity
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Know what Classic, Signature, and Grand mean.
        </h1>
      </section>
      <SizeGuide />
      <div className="site-shell py-16">
        <Link
          href="/arrangements"
          className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Shop by size
        </Link>
      </div>
    </div>
  );
}
