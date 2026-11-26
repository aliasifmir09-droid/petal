export type DeliveryZone = {
  borough: string;
  slug: string;
  fee: number;
  sameDayWindow: string;
  nextDayWindow: string;
  notes: string;
};

export type SizeTier = {
  name: "Classic" | "Signature" | "Grand";
  stemGuide: string;
  bestFor: string;
  priceFrom: number;
  priceTo: number;
  details: string;
};

export type GiftAddon = {
  slug: string;
  name: string;
  blurb: string;
  price: number;
  image: string;
  imageAlt: string;
};

export type PolicySection = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export type Review = {
  id: string;
  name: string;
  neighborhood: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  product?: string;
  verifiedDelivery: boolean;
};

export type StudioPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const deliveryZones: DeliveryZone[] = [
  {
    borough: "Queens",
    slug: "queens",
    fee: 12,
    sameDayWindow: "2:00–7:00pm ET",
    nextDayWindow: "10:00am–6:00pm ET",
    notes: "Includes Jackson Heights, Astoria, LIC, Forest Hills, Flushing.",
  },
  {
    borough: "Manhattan",
    slug: "manhattan",
    fee: 18,
    sameDayWindow: "3:00–8:00pm ET",
    nextDayWindow: "10:00am–7:00pm ET",
    notes: "Lobby and doorman handoffs included with clear recipient notes.",
  },
  {
    borough: "Brooklyn",
    slug: "brooklyn",
    fee: 16,
    sameDayWindow: "3:00–8:00pm ET",
    nextDayWindow: "10:00am–7:00pm ET",
    notes: "Brownstones, walk-ups, and office buildings across core Brooklyn.",
  },
  {
    borough: "The Bronx",
    slug: "bronx",
    fee: 18,
    sameDayWindow: "3:00–7:30pm ET",
    nextDayWindow: "11:00am–6:00pm ET",
    notes: "Riverdale to Mott Haven—confirm buzzer/building access in notes.",
  },
  {
    borough: "Staten Island",
    slug: "staten-island",
    fee: 24,
    sameDayWindow: "3:30–7:00pm ET",
    nextDayWindow: "11:00am–6:00pm ET",
    notes: "Same-day available most weekdays; next-day recommended for peak weekends.",
  },
];

export function deliveryFeeForBorough(nameOrSlug: string) {
  const key = nameOrSlug.toLowerCase();
  return (
    deliveryZones.find(
      (z) =>
        z.slug === key ||
        z.borough.toLowerCase() === key ||
        (key.includes("bronx") && z.slug === "bronx"),
    ) ?? null
  );
}

export const sizeTiers: SizeTier[] = [
  {
    name: "Classic",
    stemGuide: "About 15–20 stems",
    bestFor: "Desks, studio apartments, thoughtful everyday gifts",
    priceFrom: 72,
    priceTo: 98,
    details:
      "A composed hand-tied or compact arrangement with a clear color story—enough presence for a table without overwhelming a small room.",
  },
  {
    name: "Signature",
    stemGuide: "About 25–35 stems",
    bestFor: "Birthdays, host gifts, most NYC apartments and offices",
    priceFrom: 98,
    priceTo: 138,
    details:
      "Our most-ordered tier: fuller volume, richer texture, and a vase-ready silhouette that reads as intentional the moment it arrives.",
  },
  {
    name: "Grand",
    stemGuide: "About 40+ stems or sculptural height",
    bestFor: "Anniversaries, lobbies, Christmas tables, corporate clients",
    priceFrom: 138,
    priceTo: 188,
    details:
      "Statement scale—taller greens, denser blooms, or centerpiece construction designed for dining tables, hotel suites, and client gifting.",
  },
];

export const giftAddons: GiftAddon[] = [
  {
    slug: "addon-chocolates",
    name: "Artisan chocolates",
    blurb: "A small box of dark and milk chocolates paired with the bouquet.",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Artisan chocolate gift box",
  },
  {
    slug: "addon-candle",
    name: "Scented candle",
    blurb: "A clean, quiet scent—soft cedar and citrus—for the table beside the blooms.",
    price: 36,
    image:
      "https://images.unsplash.com/photo-1602602870296-0a43b0e0e8b3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Luxury scented candle gift",
  },
  {
    slug: "addon-plant",
    name: "Small plant",
    blurb: "A lasting green companion in a simple nursery pot—easy care, long presence.",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Small potted plant gift add-on",
  },
  {
    slug: "addon-champagne",
    name: "Champagne",
    blurb: "A chilled bottle of non-vintage Champagne for celebrations and Christmas Eve.",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Champagne bottle gift add-on",
  },
];

export function getAddon(slug: string) {
  return giftAddons.find((a) => a.slug === slug);
}

export const policies: PolicySection[] = [
  {
    slug: "refunds",
    title: "Refund policy",
    summary:
      "If something goes wrong with freshness, delivery, or composition, we make it right.",
    points: [
      "Contact us within 24 hours of delivery with photos at (917) 460-5550 or hello@petalswift.com.",
      "Approved quality issues receive a full refund, a remake, or store credit—your choice.",
      "Taste preferences (color mood within the described palette) are not automatic refunds; we will still work with you on a fair remake when possible.",
      "Addon items (chocolates, candles, plants, Champagne) follow the same 24-hour quality window if damaged in transit.",
    ],
  },
  {
    slug: "cancellation",
    title: "Cancellation policy",
    summary: "Cancel free before the arrangement is composed.",
    points: [
      "Full cancellation is free until 2 hours before your delivery window opens, or by 11:00am ET for same-day orders.",
      "Once composition has started, we can reschedule to another NYC address/date when capacity allows.",
      "Christmas Eve and peak holiday slots may require earlier notice—call us as soon as plans change.",
      "No-shows with incorrect address or blocked building access are not refundable after a completed courier attempt; we will hold for a short redelivery window when possible.",
    ],
  },
  {
    slug: "substitution",
    title: "Substitution policy",
    summary:
      "Seasonal freshness comes first—palette and value stay consistent.",
    points: [
      "If a specific stem is unavailable, we substitute with equal or higher value blooms in the same color story.",
      "Named hero flowers (for example, garden roses or orchids called out on the product page) are prioritized; when impossible, we contact you before substituting on Grand / Christmas Eve orders.",
      "Lily-free requests are always respected—no lily substitutions on lily-free arrangements.",
      "Vase shapes and hatbox colors may vary slightly while keeping the same presentation quality.",
    ],
  },
  {
    slug: "freshness",
    title: "Freshness guarantee",
    summary: "Composed to order from morning stems—built to last.",
    points: [
      "Arrangements are composed the day of delivery whenever same-day is selected.",
      "We select stems for vase life; with basic care, most bouquets hold beautifully for 5–7 days.",
      "If blooms arrive wilted or damaged, send photos within 24 hours and we remake or refund.",
      "Include care: trim stems, fresh water daily, keep away from heat vents and direct midday sun.",
    ],
  },
];

/** Early verified NYC delivery feedback used for trust + Review schema. */
export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Priya M.",
    neighborhood: "Jackson Heights, Queens",
    rating: 5,
    title: "Same-day and actually beautiful",
    body: "Ordered Manhattan Morning for my sister in Astoria before 11am. It arrived mid-afternoon looking exactly like the product photo—soft, intentional, not grocery-store filler. The handwritten note made it feel personal.",
    date: "2026-11-18",
    product: "Manhattan Morning",
    verifiedDelivery: true,
  },
  {
    id: "rev-2",
    name: "James L.",
    neighborhood: "West Village, Manhattan",
    rating: 5,
    title: "Anniversary that landed",
    body: "West Village Whisper with the Champagne add-on. Courier texted a window, doorman confirmed handoff, and my partner said it was the best flowers she has received in the city. Clear communication the whole way.",
    date: "2026-11-12",
    product: "West Village Whisper",
    verifiedDelivery: true,
  },
  {
    id: "rev-3",
    name: "Elena R.",
    neighborhood: "Park Slope, Brooklyn",
    rating: 5,
    title: "Corporate gift that didn’t feel generic",
    body: "Sent Client Closer to a Prospect Heights office. They emailed photos—architectural, clean, perfect for a lobby table. Delivery fee was shown upfront and the window was accurate.",
    date: "2026-11-08",
    product: "Client Closer",
    verifiedDelivery: true,
  },
  {
    id: "rev-4",
    name: "Marcus T.",
    neighborhood: "Long Island City, Queens",
    rating: 5,
    title: "Christmas Crimson for the team",
    body: "Ordered Christmas Crimson plus chocolates for our LIC studio. Fresh, festive without being tacky, and SMS updates made it easy while I was in meetings.",
    date: "2026-11-22",
    product: "Christmas Crimson",
    verifiedDelivery: true,
  },
  {
    id: "rev-5",
    name: "Sofia K.",
    neighborhood: "Riverdale, Bronx",
    rating: 4,
    title: "Thoughtful sympathy delivery",
    body: "Quiet Condolence arrived on time for a family gathering. Soft whites, respectful, and the florist called when the building buzzer was unclear. Would order again.",
    date: "2026-10-29",
    product: "Quiet Condolence",
    verifiedDelivery: true,
  },
  {
    id: "rev-6",
    name: "Daniel H.",
    neighborhood: "St. George, Staten Island",
    rating: 5,
    title: "Worth the ferry-side fee",
    body: "Hatbox for my mom’s birthday. Delivery fee was clear on the site, window held, and the arrangement looked expensive in the best way. Petalswift felt local, not like a national network.",
    date: "2026-11-05",
    product: "Harlem Hatbox",
    verifiedDelivery: true,
  },
];

export const reviewAggregate = {
  ratingValue: Number(
    (
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    ).toFixed(1),
  ),
  reviewCount: reviews.length,
};

export const deliveryPhotos: StudioPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Bouquet delivered to a New York apartment table",
    caption: "Doorstep-ready hand-tied after courier handoff",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=80",
    alt: "Vase arrangement placed in a bright NYC kitchen",
    caption: "Vase arrangement set in place on arrival",
  },
  {
    src: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1200&q=80",
    alt: "Romantic rose bouquet delivered for an anniversary",
    caption: "Anniversary delivery — West Village",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural white floral delivery for corporate lobby",
    caption: "Corporate lobby placement — Midtown",
  },
];

export const atelierPhotos: StudioPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80",
    alt: "Florist composing a bouquet at the Petalswift atelier",
    caption: "Morning composition bench — Jackson Heights",
  },
  {
    src: "https://images.unsplash.com/photo-1525310072745-f8161a250063?auto=format&fit=crop&w=1400&q=80",
    alt: "Fresh stems prepared on a florist worktable",
    caption: "Stem conditioning before design",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80",
    alt: "Seasonal blooms ready for arrangement",
    caption: "Seasonal intake for same-day orders",
  },
  {
    src: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1400&q=80",
    alt: "Finished colorful bouquet before packaging",
    caption: "Final check before protective packaging",
  },
];

export const notificationChannels = [
  {
    id: "email",
    name: "Email updates",
    description:
      "Order confirmation, composition started, out-for-delivery, and delivered receipts to your inbox.",
  },
  {
    id: "sms",
    name: "SMS updates",
    description:
      "Short texts for delivery window, courier en route, and successful handoff. US mobile numbers only.",
  },
] as const;
