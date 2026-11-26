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
      heading="All floral arrangements—every option, elevated."
      intro="Hand-tied, vase, hatbox, gift box, lily-free, same-day, next-day, every major occasion, color story, bloom type, and recipient. Built to outclass cluttered network catalogs with clearer filters and New York atelier quality."
    />
  );
}
