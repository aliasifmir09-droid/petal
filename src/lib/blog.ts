export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  borough?: "manhattan" | "brooklyn" | "queens" | "bronx" | "staten-island" | "nyc";
  tags: string[];
  heroImage: string;
  heroAlt: string;
  /** Short paragraphs for the article body */
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "same-day-flower-delivery-nyc-five-boroughs",
    title: "Same-Day Flower Delivery Across NYC’s Five Boroughs",
    description:
      "How Petalswift delivers same-day flowers to Manhattan, Brooklyn, Queens, the Bronx, and Staten Island—fees, cutoffs, and how to order from Jackson Heights.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "nyc",
    tags: ["same-day", "NYC", "five boroughs"],
    heroImage:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Same-day bouquet ready for NYC delivery",
    sections: [
      {
        heading: "One marketplace, five boroughs",
        body: "New Yorkers search for same-day flower delivery NYC when they need reliable handoffs—not a generic catalog. Petalswift composes in Jackson Heights and delivers across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island with published fees from $12 and a 1:00pm ET same-day cutoff most days.",
      },
      {
        heading: "What “same-day” means here",
        body: "Enter a NYC ZIP before you pay to see the borough fee and window. Same-day is available when you order by 1:00pm ET. Christmas Eve uses an 11:00am ET cutoff. Taking orders from December 10, 2026 for holiday volume.",
      },
      {
        heading: "How to order fast",
        body: "Shop arrangements or Christmas collections, pick Classic / Signature / Grand, confirm ZIP, and checkout—or call (917) 460-5550. Shop owners can also sell on the marketplace via a Petalswift seller account.",
      },
    ],
  },
  {
    slug: "manhattan-same-day-flower-delivery-guide",
    title: "Manhattan Same-Day Flower Delivery Guide",
    description:
      "Same-day flower delivery in Manhattan from Petalswift—Midtown lobbies, hotels, downtown apartments, fees, and ordering tips.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "manhattan",
    tags: ["Manhattan", "same-day", "corporate"],
    heroImage:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Architectural white flowers for Manhattan delivery",
    sections: [
      {
        heading: "Built for Manhattan handoffs",
        body: "Manhattan flower delivery often means doormen, hotel desks, and timed lobbies. Petalswift supports clear delivery notes and SMS/email updates so Midtown and downtown arrivals land quietly.",
      },
      {
        heading: "Cutoff and fees",
        body: "Order by 1:00pm ET for same-day Manhattan delivery. Borough fees show after ZIP entry. Corporate and hotel lists can email the atelier for multi-address sends starting December 10, 2026.",
      },
      {
        heading: "What to send",
        body: "Architectural whites and Signature tiers work well for offices; romantic vase arrangements suit residential addresses. Browse Manhattan-ready bouquets in the marketplace and filter by occasion.",
      },
    ],
  },
  {
    slug: "brooklyn-same-day-flower-delivery",
    title: "Brooklyn Same-Day Flower Delivery: Neighborhoods & Tips",
    description:
      "Same-day Brooklyn flower delivery from Petalswift—Williamsburg, Park Slope, Heights, fees, and garden-style picks.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "brooklyn",
    tags: ["Brooklyn", "same-day", "garden"],
    heroImage:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Garden-style bouquet for Brooklyn delivery",
    sections: [
      {
        heading: "Brooklyn same-day, without guesswork",
        body: "From Williamsburg to Park Slope and Brooklyn Heights, Petalswift delivers same-day when ordered by 1:00pm ET. Fees and windows are published before checkout so walk-ups and brownstones are planned correctly.",
      },
      {
        heading: "Styles that fit Brooklyn",
        body: "Garden-textured hand-ties and lily-free options are frequent Brooklyn requests. Partner shops on the marketplace, including garden-forward sellers, appear as “Sold by” on product pages.",
      },
      {
        heading: "Order path",
        body: "Open the Brooklyn borough page for neighborhoods and landmarks, then shop arrangements or call (917) 460-5550. Holiday orders open December 10, 2026.",
      },
    ],
  },
  {
    slug: "queens-jackson-heights-florist-same-day",
    title: "Queens Flower Delivery from a Jackson Heights Florist",
    description:
      "Same-day Queens flower delivery from Petalswift’s Jackson Heights atelier at 37-68 74th Street—local NAP, cutoffs, and borough coverage.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "queens",
    tags: ["Queens", "Jackson Heights", "local florist"],
    heroImage:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Jackson Heights florist composing a bouquet",
    sections: [
      {
        heading: "A real Queens atelier",
        body: "Petalswift is based at 37-68 74th Street, Jackson Heights, NY 11372. Same-day Queens flower delivery starts here—composed to order, then routed across the borough and the rest of NYC.",
      },
      {
        heading: "Why local matters for SEO and trust",
        body: "Searchers looking for a Jackson Heights florist want a real address and phone. Ours is (917) 460-5550, with Google Maps linked from the site NAP and LocalBusiness schema.",
      },
      {
        heading: "Order locally or citywide",
        body: "Use the Queens borough guide for neighborhoods, or shop the full marketplace for Christmas and everyday sends. Taking orders from December 10, 2026.",
      },
    ],
  },
  {
    slug: "bronx-same-day-flower-delivery",
    title: "Bronx Same-Day Flower Delivery",
    description:
      "Same-day flower delivery in the Bronx from Petalswift—cutoff, fees, occasions, and how to order across the borough.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "bronx",
    tags: ["Bronx", "same-day"],
    heroImage:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Bouquet prepared for Bronx same-day delivery",
    sections: [
      {
        heading: "Coverage across the Bronx",
        body: "Petalswift delivers same-day flowers in the Bronx when you order by 1:00pm ET. Confirm ZIP for fee and window before payment—transparent borough pricing from $12 citywide starting points.",
      },
      {
        heading: "Popular occasions",
        body: "Sympathy, congratulations, birthdays, and family celebrations are common Bronx requests. Choose lily-free when needed and add a handwritten note at checkout.",
      },
      {
        heading: "Start an order",
        body: "Visit the Bronx delivery page, shop arrangements, or call (917) 460-5550. Christmas ordering opens December 10, 2026.",
      },
    ],
  },
  {
    slug: "staten-island-flower-delivery-guide",
    title: "Staten Island Flower Delivery Guide",
    description:
      "Flower delivery on Staten Island with Petalswift—same-day windows, holiday cutoffs, and how to order from our NYC marketplace.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "staten-island",
    tags: ["Staten Island", "delivery"],
    heroImage:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Hand-tied bouquet for Staten Island delivery",
    sections: [
      {
        heading: "Island-wide delivery",
        body: "Petalswift serves Staten Island with same-day options when ordered by 1:00pm ET (ZIP-dependent). Peak holidays may need earlier ordering—especially Christmas Eve (11:00am ET cutoff).",
      },
      {
        heading: "Planning a send",
        body: "Enter the recipient ZIP on the delivery checker for fee and window. Classic and Signature tiers cover most homes; Grand suits larger gatherings.",
      },
      {
        heading: "Order now for the holidays",
        body: "Taking orders from December 10, 2026. Shop Christmas flowers or call (917) 460-5550 for timed Staten Island deliveries.",
      },
    ],
  },
  {
    slug: "christmas-flower-delivery-nyc-2026",
    title: "Christmas Flower Delivery NYC 2026: Dates & Cutoffs",
    description:
      "Christmas flower delivery in NYC for 2026—orders from December 10, same-day through Dec 23, Eve cutoff 11:00am ET, five-borough coverage.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "nyc",
    tags: ["Christmas", "NYC", "holiday"],
    heroImage:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Christmas floral arrangement for NYC delivery",
    sections: [
      {
        heading: "Key 2026 dates",
        body: "Petalswift takes Christmas flower orders from December 10, 2026. Same-day holiday delivery runs through December 23. Christmas Eve delivery requires ordering by 11:00am ET.",
      },
      {
        heading: "What to send",
        body: "Centerpieces, red and ivory bouquets, hatboxes, lily-free gifts, and corporate holiday florals ship across all five boroughs from the Jackson Heights atelier.",
      },
      {
        heading: "How to book",
        body: "Shop /christmas, start an order online, or call (917) 460-5550. Partner shop owners can list holiday products through their seller accounts.",
      },
    ],
  },
  {
    slug: "how-to-order-same-day-flowers-nyc",
    title: "How to Order Same-Day Flowers in NYC",
    description:
      "Step-by-step: order same-day flowers in New York City with Petalswift—ZIP check, sizes, fees, phone orders, and marketplace sellers.",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    borough: "nyc",
    tags: ["how to", "ordering", "same-day"],
    heroImage:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Ordering a same-day NYC bouquet",
    sections: [
      {
        heading: "Step 1 — Pick the arrangement",
        body: "Browse /arrangements or /christmas. Filter by style, color, bloom, and recipient. Note the seller name on multi-vendor products.",
      },
      {
        heading: "Step 2 — Confirm ZIP and size",
        body: "Choose Classic, Signature, or Grand. Enter the delivery ZIP to see borough fee and window before you pay. Same-day needs order by 1:00pm ET.",
      },
      {
        heading: "Step 3 — Checkout or call",
        body: "Complete checkout with email/SMS updates, or call (917) 460-5550. Orders open December 10, 2026. Florists who want to sell can apply at /sell/apply.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function postsByBorough(borough: string) {
  return blogPosts.filter((p) => p.borough === borough || p.borough === "nyc");
}
