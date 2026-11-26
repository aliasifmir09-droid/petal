export type Occasion = {
  slug: string;
  name: string;
  blurb: string;
  seoTitle: string;
};

export type Product = {
  slug: string;
  name: string;
  blurb: string;
  price: number;
  compareAt?: number;
  image: string;
  imageAlt: string;
  occasions: string[];
  tags: string[];
  sameDay: boolean;
  bestseller?: boolean;
  size: "Classic" | "Signature" | "Grand";
};

export const occasions: Occasion[] = [
  {
    slug: "birthday",
    name: "Birthday",
    blurb: "Joyful compositions that arrive same-day across New York.",
    seoTitle: "Birthday Flower Delivery NYC",
  },
  {
    slug: "anniversary",
    name: "Anniversary",
    blurb: "Romantic bouquets composed for presence, not cliché.",
    seoTitle: "Anniversary Flowers NYC Same-Day",
  },
  {
    slug: "romance",
    name: "Romance",
    blurb: "Soft, intentional blooms for evenings that linger.",
    seoTitle: "Romantic Flower Delivery NYC",
  },
  {
    slug: "congratulations",
    name: "Congratulations",
    blurb: "Elevated arrangements for promotions, openings, and wins.",
    seoTitle: "Congratulations Flowers NYC",
  },
  {
    slug: "thank-you",
    name: "Thank You",
    blurb: "Quiet luxury that says gratitude without overstatement.",
    seoTitle: "Thank You Flower Delivery NYC",
  },
  {
    slug: "sympathy",
    name: "Sympathy",
    blurb: "Calm, respectful compositions delivered with care.",
    seoTitle: "Sympathy Flowers NYC Delivery",
  },
  {
    slug: "corporate",
    name: "Corporate",
    blurb: "Architectural florals for offices, hotels, and clients.",
    seoTitle: "Corporate Flower Delivery NYC",
  },
  {
    slug: "just-because",
    name: "Just Because",
    blurb: "Everyday luxury for New York rooms and tables.",
    seoTitle: "Same-Day Everyday Flowers NYC",
  },
];

export const products: Product[] = [
  {
    slug: "manhattan-morning",
    name: "Manhattan Morning",
    blurb: "Soft whites and blush garden roses with airy greenery—quiet luxury for any table.",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Soft blush and white rose bouquet",
    occasions: ["just-because", "thank-you", "birthday"],
    tags: ["roses", "soft"],
    sameDay: true,
    bestseller: true,
    size: "Classic",
  },
  {
    slug: "west-village-whisper",
    name: "West Village Whisper",
    blurb: "Peach and blush blooms with ribbon—romantic without trying too hard.",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Romantic peach and blush bouquet in a glass jar",
    occasions: ["romance", "anniversary", "birthday"],
    tags: ["romantic", "peach"],
    sameDay: true,
    bestseller: true,
    size: "Signature",
  },
  {
    slug: "brooklyn-botanic",
    name: "Brooklyn Botanic",
    blurb: "Seasonal stems, wild texture, and deep greens—composed like a private garden.",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Textured seasonal garden-style bouquet",
    occasions: ["congratulations", "thank-you", "just-because"],
    tags: ["garden", "textured"],
    sameDay: true,
    bestseller: true,
    size: "Signature",
  },
  {
    slug: "soho-soiree",
    name: "SoHo Soirée",
    blurb: "Bold color-blocked florals for celebrations that deserve a statement.",
    price: 128,
    compareAt: 148,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bold colorful celebration bouquet",
    occasions: ["birthday", "congratulations"],
    tags: ["bold", "celebration"],
    sameDay: true,
    size: "Grand",
  },
  {
    slug: "fifth-avenue-white",
    name: "Fifth Avenue White",
    blurb: "Architectural white blooms on a quiet ground—calm, precise, unmistakably elevated.",
    price: 148,
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Architectural white flower against a dark background",
    occasions: ["corporate", "sympathy", "congratulations"],
    tags: ["white", "architectural"],
    sameDay: true,
    size: "Grand",
  },
  {
    slug: "hudson-dusk",
    name: "Hudson Dusk",
    blurb: "Peach-to-plum roses with soft dusk depth—for evenings that linger.",
    price: 108,
    image:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Peach and plum rose bouquet in a clear vase",
    occasions: ["romance", "anniversary", "thank-you"],
    tags: ["roses", "evening"],
    sameDay: true,
    size: "Signature",
  },
  {
    slug: "astoria-amber",
    name: "Astoria Amber",
    blurb: "Warm apricot and cream stems with eucalyptus—sunny without shouting.",
    price: 84,
    image:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Warm apricot and cream floral bouquet",
    occasions: ["birthday", "just-because", "congratulations"],
    tags: ["warm", "cheerful"],
    sameDay: true,
    size: "Classic",
  },
  {
    slug: "lic-linen",
    name: "LIC Linen",
    blurb: "Muted neutrals and soft greenery for modern apartments and gallery rooms.",
    price: 92,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Neutral soft greenery bouquet",
    occasions: ["corporate", "just-because", "thank-you"],
    tags: ["neutral", "modern"],
    sameDay: true,
    size: "Signature",
  },
  {
    slug: "park-slope-peony",
    name: "Park Slope Peony",
    blurb: "Lush seasonal peonies when available—otherwise the closest romantic twin stems.",
    price: 138,
    image:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Lush romantic peony-style bouquet",
    occasions: ["romance", "anniversary", "birthday"],
    tags: ["lush", "romantic"],
    sameDay: false,
    size: "Grand",
  },
  {
    slug: "tribeca-tower",
    name: "Tribeca Tower",
    blurb: "Tall, sculptural greens and white blooms for lobbies and long tables.",
    price: 168,
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Tall sculptural white and green arrangement",
    occasions: ["corporate", "congratulations"],
    tags: ["sculptural", "tall"],
    sameDay: true,
    size: "Grand",
  },
  {
    slug: "quiet-condolence",
    name: "Quiet Condolence",
    blurb: "Soft whites and greens composed with restraint for sympathy and remembrance.",
    price: 118,
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Soft white sympathy floral arrangement",
    occasions: ["sympathy"],
    tags: ["sympathy", "white"],
    sameDay: true,
    size: "Signature",
  },
  {
    slug: "chelsea-citrus",
    name: "Chelsea Citrus",
    blurb: "Bright stems with green accents—energetic, clean, and celebration-ready.",
    price: 96,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright citrus-toned celebration bouquet",
    occasions: ["birthday", "congratulations", "just-because"],
    tags: ["bright", "fresh"],
    sameDay: true,
    size: "Signature",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getOccasion(slug: string) {
  return occasions.find((o) => o.slug === slug);
}

export function productsForOccasion(slug: string) {
  return products.filter((p) => p.occasions.includes(slug));
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const hay = [p.name, p.blurb, ...p.tags, ...p.occasions].join(" ").toLowerCase();
    return hay.includes(q);
  });
}

/** @deprecated use products */
export const bouquets = products;
export const getBouquet = getProduct;
