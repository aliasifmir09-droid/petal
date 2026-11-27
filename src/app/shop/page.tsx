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
        <p className="text-sm text-ink-soft">
          Prefer the full catalog?{" "}
          <Link href="/flower-bouquets" className="text-leaf underline underline-offset-4">
            Flower bouquets
          </Link>{" "}
          or{" "}
          <Link href="/arrangements" className="text-leaf underline underline-offset-4">
            all arrangements
          </Link>
          .
        </p>
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
