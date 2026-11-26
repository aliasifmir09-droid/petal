import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ShopMarketplace } from "@/components/ShopMarketplace";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { breadcrumbSchema, itemListSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Flower Marketplace — Same-Day NYC Bouquets",
  description:
    "Shop the Petalswift flower marketplace: birthday, anniversary, sympathy, corporate and same-day bouquets delivered across New York City from Jackson Heights.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marketplace", path: "/shop" },
          ]),
          itemListSchema(),
        ]}
      />
      <ShopMarketplace
        heading="A flower marketplace composed for New York."
        intro="Search by occasion, filter same-day, and send arrangements that feel considered—not catalog-generic. Better than the big networks because every bouquet is composed for NYC rooms from our Jackson Heights atelier."
      />
      <div className="site-shell pb-24">
        <DeliveryChecker />
      </div>
    </div>
  );
}
