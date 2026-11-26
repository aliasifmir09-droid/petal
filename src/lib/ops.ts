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
  {
    slug: "addon-card",
    name: "Premium note card",
    blurb: "A heavier stock card with your message—previewed before the courier leaves.",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Premium handwritten note card",
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
      "If your flowers arrive damaged or significantly below our quality standard, contact us within 24 hours with a photo and we will arrange a replacement or appropriate resolution.",
      "Include care: trim stems, fresh water daily, keep away from heat vents and direct midday sun.",
    ],
  },
  {
    slug: "late-delivery",
    title: "Late-delivery policy",
    summary: "If we miss the confirmed window, we make it right.",
    points: [
      "If delivery is late due to Petalswift routing or composition delay, we notify you as soon as we know and offer a partial credit or remake for time-critical gifts when still useful.",
      "City traffic, building access issues, and incorrect recipient details may extend windows—we still pursue completion the same day whenever possible.",
      "Holiday peak days can run longer windows; the cart and confirmation email show the active window before you pay.",
    ],
  },
  {
    slug: "damaged",
    title: "Damaged-flower policy",
    summary: "Photo within 24 hours → remake or resolution.",
    points: [
      "Email hello@petalswift.com or call (917) 460-5550 with clear photos of the issue.",
      "Approved damage cases receive a remake, refund, or store credit—your choice when inventory allows.",
      "Minor natural variation in bloom opening is normal; crushed stems, broken vessels, or wilt-on-arrival are covered.",
    ],
  },
  {
    slug: "recipient-not-home",
    title: "Recipient-not-home policy",
    summary: "Doormen, lobbies, and safe handoff instructions come first.",
    points: [
      "Add doorman, buzzer, office suite, and leave-with-neighbor instructions at checkout.",
      "If no one is available, we follow your notes, leave with building staff when allowed, or briefly hold for a same-day redelivery attempt.",
      "Failed attempts caused by unreachable addresses or blocked access after a completed courier trip are not automatic refunds; we will still help reschedule.",
    ],
  },
  {
    slug: "weather-holiday",
    title: "Weather & holiday policy",
    summary: "Safety and stem quality can shift peak-day logistics.",
    points: [
      "Severe weather may move same-day orders to the next safe window—with proactive notice.",
      "Christmas Eve and major holidays use earlier cutoffs published on /christmas and /delivery.",
      "Substitution pressure is higher on peak days; palette and value stay consistent per our substitution policy.",
    ],
  },
];

/**
 * Verified on-site reviews only. Empty until real customer feedback is collected.
 * Do not invent testimonials for a new brand—use Google Business + delivery photos instead.
 */
export const reviews: Review[] = [];

export const reviewAggregate = {
  ratingValue: 0,
  reviewCount: 0,
};

export const florists = [
  {
    name: "Atelier lead",
    role: "Composition & quality",
    bio: "Leads morning conditioning and final checks so every same-day send leaves Jackson Heights presentation-ready.",
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Design florist",
    role: "Color stories & vessels",
    bio: "Builds Classic, Signature, and Grand tiers with consistent scale so product pages match what arrives.",
    image:
      "https://images.unsplash.com/photo-1525310072745-f8161a250063?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dispatch",
    role: "NYC windows & handoffs",
    bio: "Coordinates borough routes, doorman notes, and SMS/email updates across all five boroughs.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
  },
];

export const corporateCases = [
  {
    title: "Hotel arrival amenity",
    borough: "Manhattan",
    result: "Timed lobby handoff for VIP check-ins with note cards and vase-ready Signature arrangements.",
  },
  {
    title: "Client closing gift",
    borough: "Brooklyn",
    result: "Architectural whites for a Prospect Heights office—fee and window confirmed before purchase.",
  },
  {
    title: "Studio holiday send",
    borough: "Queens",
    result: "Christmas Crimson + chocolates for an LIC team, with SMS out-for-delivery updates.",
  },
];

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
