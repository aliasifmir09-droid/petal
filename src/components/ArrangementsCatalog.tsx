"use client";

import { useSearchParams } from "next/navigation";
import { ShopMarketplace } from "@/components/ShopMarketplace";

export function ArrangementsCatalog() {
  const params = useSearchParams();

  return (
    <ShopMarketplace
      initialColor={params.get("color") ?? "all"}
      initialBloom={params.get("bloom") ?? "all"}
      initialRecipient={params.get("recipient") ?? "all"}
      initialStyle={params.get("style") ?? "all"}
      initialOccasion={params.get("occasion") ?? "all"}
      initialQuery={params.get("q") ?? ""}
      heading="Flower bouquets for New York City and Los Angeles."
      intro="Hand-tied bouquets, vase bouquets, hatboxes, lily-free bunches, and mixed blooms. Same-day in both cities when you order by 4:00pm. Filter by style, color, bloom, recipient, and occasion."
    />
  );
}
