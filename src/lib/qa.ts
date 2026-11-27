export type QaItem = {
  slug: string;
  question: string;
  answer: string;
  borough?: "manhattan" | "brooklyn" | "queens" | "bronx" | "staten-island" | "nyc";
  topic: "delivery" | "pricing" | "christmas" | "ordering" | "local";
  keywords: string[];
};

export const qaItems: QaItem[] = [
  {
    slug: "same-day-flower-delivery-nyc-five-boroughs",
    question: "Does Petalswift offer same-day flower delivery across all five NYC boroughs?",
    answer:
      "Yes. Petalswift delivers same-day flowers across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island when you order by 4:00pm ET. Published borough fees start at $12. Office: 37-68 74th Street, Jackson Heights, NY 11372. Taking orders from December 10, 2026.",
    borough: "nyc",
    topic: "delivery",
    keywords: ["same-day flower delivery NYC", "five boroughs"],
  },
  {
    slug: "manhattan-same-day-flower-delivery",
    question: "How does same-day flower delivery work in Manhattan?",
    answer:
      "Order Petalswift by 4:00pm ET for same-day Manhattan flower delivery to Midtown, downtown, Uptown, and surrounding neighborhoods. Fees and windows are shown before checkout. Lobby, doorman, and hotel handoffs are supported—ideal for corporate gifts and timed arrivals.",
    borough: "manhattan",
    topic: "delivery",
    keywords: ["Manhattan flower delivery", "same-day Manhattan florist"],
  },
  {
    slug: "brooklyn-same-day-flower-delivery",
    question: "Can I get same-day flowers delivered in Brooklyn?",
    answer:
      "Yes. Petalswift offers same-day flower delivery across Brooklyn—including Williamsburg, Park Slope, Brooklyn Heights, Bushwick, and more—when ordered by 4:00pm ET. Garden-style and lily-free options are popular for brownstones and weekend host gifts.",
    borough: "brooklyn",
    topic: "delivery",
    keywords: ["Brooklyn flower delivery", "same-day Brooklyn florist"],
  },
  {
    slug: "queens-flower-delivery",
    question: "Where is Petalswift’s Queens florist based?",
    answer:
      "The office is 37-68 74th Street, Jackson Heights, NY 11372. It is not a walk-in shop. We deliver same-day bouquets across Queens and the other four boroughs. Call (917) 460-5550.",
    borough: "queens",
    topic: "local",
    keywords: ["Queens flower delivery", "New York City florist"],
  },
  {
    slug: "bronx-flower-delivery-same-day",
    question: "Do you deliver same-day flowers to the Bronx?",
    answer:
      "Yes. Petalswift provides same-day flower delivery in the Bronx when ordered by 4:00pm ET. Delivery fees and windows are published on our NYC delivery page before you pay. Sympathy, congratulations, and family celebration arrangements are frequently requested.",
    borough: "bronx",
    topic: "delivery",
    keywords: ["Bronx flower delivery", "same-day Bronx florist"],
  },
  {
    slug: "staten-island-flower-delivery",
    question: "Is same-day flower delivery available on Staten Island?",
    answer:
      "Petalswift delivers to Staten Island with same-day windows when ordered by 4:00pm ET (availability can vary by ZIP and season). Christmas Eve and peak holiday days may require earlier cutoffs—check the delivery page or call (917) 460-5550.",
    borough: "staten-island",
    topic: "delivery",
    keywords: ["Staten Island flower delivery", "Staten Island florist"],
  },
  {
    slug: "nyc-flower-delivery-fees",
    question: "How much is flower delivery in NYC with Petalswift?",
    answer:
      "Delivery fees start from $12 and vary by borough. Exact fee and time window appear after you enter a NYC ZIP—before payment. There are no surprise add-ons for standard five-borough routes.",
    borough: "nyc",
    topic: "pricing",
    keywords: ["NYC flower delivery fees", "borough delivery cost"],
  },
  {
    slug: "christmas-flower-delivery-nyc",
    question: "When can I order Christmas flowers for NYC delivery?",
    answer:
      "Petalswift takes Christmas flower orders from December 10, 2026. Same-day holiday delivery runs through December 23; Christmas Eve delivery needs orders by 11:00am ET. Shop centerpieces, hatboxes, and gift bouquets on the Christmas page.",
    borough: "nyc",
    topic: "christmas",
    keywords: ["Christmas flower delivery NYC", "holiday bouquets New York"],
  },
  {
    slug: "order-flowers-same-day-nyc",
    question: "How do I order same-day flowers in New York City?",
    answer:
      "Browse arrangements or Christmas collections, choose Classic / Signature / Grand, enter your ZIP to confirm fee and window, then checkout or call (917) 460-5550. Shop owners can also sell on Petalswift via a seller account. Orders open December 10, 2026.",
    borough: "nyc",
    topic: "ordering",
    keywords: ["order flowers same-day NYC", "how to order NYC florist"],
  },
  {
    slug: "is-petalswift-a-real-florist",
    question: "Is Petalswift a real florist?",
    answer:
      "Yes. Petalswift composes to order and delivers across New York City and Los Angeles. Office: 37-68 74th Street, Jackson Heights, NY 11372. Phone (917) 460-5550.",
    borough: "queens",
    topic: "local",
    keywords: ["New York City florist", "local florist"],
  },
  {
    slug: "corporate-flower-delivery-manhattan",
    question: "Can Petalswift handle corporate flower delivery in Manhattan?",
    answer:
      "Yes. Timed lobby and hotel handoffs, multi-address lists, and architectural white arrangements are available for Manhattan corporate gifting. Email the atelier or call (917) 460-5550 for volume orders from December 10, 2026.",
    borough: "manhattan",
    topic: "ordering",
    keywords: ["corporate flower delivery Manhattan", "hotel flower delivery NYC"],
  },
  {
    slug: "lily-free-flower-delivery-nyc",
    question: "Do you offer lily-free flower delivery in NYC?",
    answer:
      "Yes. Filter arrangements for lily-free styles for cat-friendly homes, offices, and sensitive recipients across all five boroughs. Lily-free requests are always honored on Petalswift orders.",
    borough: "nyc",
    topic: "ordering",
    keywords: ["lily-free flower delivery NYC", "cat friendly flowers New York"],
  },
];

export function getQa(slug: string) {
  return qaItems.find((q) => q.slug === slug);
}

export function qaByBorough(borough: string) {
  return qaItems.filter((q) => q.borough === borough || q.borough === "nyc");
}

export function qaByTopic(topic: QaItem["topic"]) {
  return qaItems.filter((q) => q.topic === topic);
}
