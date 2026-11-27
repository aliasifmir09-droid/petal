import type { Metadata } from "next";
import Link from "next/link";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { JsonLd } from "@/components/JsonLd";
import { ShopMarketplace } from "@/components/ShopMarketplace";
import { breadcrumbSchema, itemListSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Flower Marketplace — NYC and Los Angeles",
  description:
    "Shop the Petalswift flower marketplace: birthday, anniversary, sympathy, corporate and same-day bouquets delivered across New York City and Los Angeles.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marketplace", path: "/shop" },
          ]),
          itemListSchema(),
        ]}
      />
      <div className="site-shell mb-6">
        <Link
          href="/arrangements"
          className="text-sm text-leaf underline-offset-4 hover:underline"
        >
          Prefer the full arrangements catalog with every Interflora-class option? Open All Arrangements →
        </Link>
      </div>
      <ShopMarketplace
        heading="A flower marketplace for New York City and Los Angeles."
        intro="Browse every arrangement option—occasion, style, color, bloom, recipient, same-day and next-day—then send something considered."
      />
      <div className="site-shell pb-24">
        <DeliveryChecker />
      </div>
    </div>
  );
}
