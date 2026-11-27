export type Occasion = {
  slug: string;
  name: string;
  blurb: string;
  seoTitle: string;
};

export type StyleOption = {
  slug: string;
  name: string;
  blurb: string;
};

export type ColorOption = {
  slug: string;
  name: string;
};

export type BloomOption = {
  slug: string;
  name: string;
};

export type RecipientOption = {
  slug: string;
  name: string;
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
  styles: string[];
  colors: string[];
  blooms: string[];
  recipients: string[];
  tags: string[];
  sameDay: boolean;
  nextDay: boolean;
  bestseller?: boolean;
  size: "Classic" | "Signature" | "Grand";
  /** Partner shop slug when sold by a marketplace seller (defaults to house atelier). */
  sellerSlug?: string;
};

export const occasions: Occasion[] = [
  {
    slug: "birthday",
    name: "Birthday",
    blurb: "Joyful compositions that arrive same-day in New York City and Los Angeles.",
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
    slug: "thinking-of-you",
    name: "Thinking of You",
    blurb: "Quiet arrangements that say you’re on their mind.",
    seoTitle: "Thinking of You Flowers NYC",
  },
  {
    slug: "thank-you",
    name: "Thank You",
    blurb: "Quiet luxury that says gratitude without overstatement.",
    seoTitle: "Thank You Flower Delivery NYC",
  },
  {
    slug: "congratulations",
    name: "Congratulations",
    blurb: "Elevated arrangements for promotions, openings, and wins.",
    seoTitle: "Congratulations Flowers NYC",
  },
  {
    slug: "new-baby",
    name: "New Baby",
    blurb: "Soft, joyful florals to welcome someone new.",
    seoTitle: "New Baby Flower Delivery NYC",
  },
  {
    slug: "get-well",
    name: "Get Well",
    blurb: "Gentle color and calm greenery for recovery rooms.",
    seoTitle: "Get Well Flowers NYC Delivery",
  },
  {
    slug: "housewarming",
    name: "Housewarming",
    blurb: "Arrangements that make a new address feel like home.",
    seoTitle: "Housewarming Flowers NYC",
  },
  {
    slug: "sympathy",
    name: "Sympathy",
    blurb: "Calm, respectful compositions delivered with care.",
    seoTitle: "Sympathy Flowers NYC Delivery",
  },
  {
    slug: "funeral",
    name: "Funeral",
    blurb: "Dignified tributes composed with restraint and precision.",
    seoTitle: "Funeral Flowers NYC",
  },
  {
    slug: "wedding",
    name: "Wedding",
    blurb: "Ceremony and reception florals with quiet grandeur.",
    seoTitle: "Wedding Flowers NYC",
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
    blurb: "Everyday luxury for New York City and Los Angeles rooms and tables.",
    seoTitle: "Same-Day Everyday Flowers NYC",
  },
  {
    slug: "christmas",
    name: "Christmas",
    blurb: "Holiday centerpieces and gift bouquets for NYC tables and doorsteps.",
    seoTitle: "Christmas Flower Delivery NYC Same-Day",
  },
];

export const styles: StyleOption[] = [
  {
    slug: "hand-tied",
    name: "Hand-tied",
    blurb: "Spiral-bound bouquets wrapped for presentation and easy gifting.",
  },
  {
    slug: "hand-tied-vase",
    name: "Hand-tied with vase",
    blurb: "A finished bouquet plus a vessel—ready to place on arrival.",
  },
  {
    slug: "arrangement",
    name: "Arrangement",
    blurb: "Designed in a container, styled for tables and lobbies.",
  },
  {
    slug: "hatbox",
    name: "Hatbox",
    blurb: "Bloom-filled hatboxes with keepsake presence.",
  },
  {
    slug: "gift-box",
    name: "Gift box",
    blurb: "Compact, protective, gift-ready boxed florals.",
  },
  {
    slug: "lily-free",
    name: "Lily-free",
    blurb: "Beautiful compositions without lilies—pet- and scent-conscious.",
  },
];

export const colors: ColorOption[] = [
  { slug: "soft", name: "Soft & pastel" },
  { slug: "blush", name: "Blush & peach" },
  { slug: "white", name: "White & ivory" },
  { slug: "vibrant", name: "Vibrant" },
  { slug: "bold", name: "Bold color" },
  { slug: "neutral", name: "Neutral & green" },
];

export const blooms: BloomOption[] = [
  { slug: "roses", name: "Roses" },
  { slug: "mixed", name: "Mixed seasonal" },
  { slug: "garden", name: "Garden style" },
  { slug: "orchids", name: "Orchids" },
  { slug: "peonies", name: "Peonies / lush" },
  { slug: "lily-free", name: "Lily-free" },
];

export const recipients: RecipientOption[] = [
  { slug: "partner", name: "Partner" },
  { slug: "parent", name: "Parent" },
  { slug: "friend", name: "Friend" },
  { slug: "colleague", name: "Colleague" },
  { slug: "client", name: "Client" },
  { slug: "family", name: "Family" },
];

const img = {
  softRoses:
    "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80",
  peachJar:
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80",
  garden:
    "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
  tulips:
    "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1600&q=80",
  whiteBloom:
    "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80",
  duskRoses:
    "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1600&q=80",
  daisy:
    "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80",
  florist:
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1600&q=80",
};

export const products: Product[] = [
  {
    slug: "manhattan-morning",
    name: "Manhattan Morning",
    blurb: "Soft whites and blush garden roses with airy greenery—quiet luxury for any table.",
    price: 78,
    image: img.softRoses,
    imageAlt: "Soft blush and white rose bouquet",
    occasions: ["just-because", "thank-you", "birthday", "thinking-of-you"],
    styles: ["hand-tied", "lily-free"],
    colors: ["soft", "blush"],
    blooms: ["roses", "lily-free"],
    recipients: ["friend", "partner", "family"],
    tags: ["roses", "soft"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Classic",
    sellerSlug: "petalswift-atelier",
  },
  {
    slug: "west-village-whisper",
    name: "West Village Whisper",
    blurb: "Peach and blush blooms with ribbon—romantic without trying too hard.",
    price: 98,
    image: img.peachJar,
    imageAlt: "Romantic peach and blush bouquet in a glass jar",
    occasions: ["romance", "anniversary", "birthday"],
    styles: ["hand-tied-vase", "arrangement"],
    colors: ["blush", "soft"],
    blooms: ["mixed", "roses"],
    recipients: ["partner"],
    tags: ["romantic", "peach"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Signature",
    sellerSlug: "chelsea-cut-flowers",
  },
  {
    slug: "brooklyn-botanic",
    name: "Brooklyn Botanic",
    blurb: "Seasonal stems, wild texture, and deep greens—composed like a private garden.",
    price: 88,
    image: img.garden,
    imageAlt: "Textured seasonal garden-style bouquet",
    occasions: ["congratulations", "thank-you", "just-because", "housewarming"],
    styles: ["hand-tied", "lily-free"],
    colors: ["neutral", "vibrant"],
    blooms: ["garden", "mixed", "lily-free"],
    recipients: ["friend", "colleague", "family"],
    tags: ["garden", "textured"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Signature",
    sellerSlug: "greenpoint-stem-co",
  },
  {
    slug: "soho-soiree",
    name: "SoHo Soirée",
    blurb: "Bold color-blocked florals for celebrations that deserve a statement.",
    price: 128,
    compareAt: 148,
    image: img.tulips,
    imageAlt: "Bold colorful celebration bouquet",
    occasions: ["birthday", "congratulations", "wedding"],
    styles: ["hand-tied", "arrangement"],
    colors: ["bold", "vibrant"],
    blooms: ["mixed"],
    recipients: ["friend", "partner", "colleague"],
    tags: ["bold", "celebration"],
    sameDay: true,
    nextDay: true,
    size: "Grand",
  },
  {
    slug: "fifth-avenue-white",
    name: "Fifth Avenue White",
    blurb: "Architectural white blooms on a quiet ground—calm, precise, unmistakably elevated.",
    price: 148,
    image: img.whiteBloom,
    imageAlt: "Architectural white flower against a dark background",
    occasions: ["corporate", "sympathy", "congratulations", "funeral"],
    styles: ["arrangement", "lily-free"],
    colors: ["white"],
    blooms: ["orchids", "lily-free"],
    recipients: ["client", "colleague", "family"],
    tags: ["white", "architectural"],
    sameDay: true,
    nextDay: true,
    size: "Grand",
    sellerSlug: "chelsea-cut-flowers",
  },
  {
    slug: "hudson-dusk",
    name: "Hudson Dusk",
    blurb: "Peach-to-plum roses with soft dusk depth—for evenings that linger.",
    price: 108,
    image: img.duskRoses,
    imageAlt: "Peach and plum rose bouquet in a clear vase",
    occasions: ["romance", "anniversary", "thank-you"],
    styles: ["hand-tied-vase", "hand-tied"],
    colors: ["blush"],
    blooms: ["roses"],
    recipients: ["partner"],
    tags: ["roses", "evening"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "astoria-amber",
    name: "Astoria Amber",
    blurb: "Warm apricot and cream stems with eucalyptus—sunny without shouting.",
    price: 84,
    image: img.duskRoses,
    imageAlt: "Warm apricot and cream floral bouquet",
    occasions: ["birthday", "just-because", "congratulations", "get-well"],
    styles: ["hand-tied", "lily-free"],
    colors: ["blush", "soft"],
    blooms: ["mixed", "lily-free"],
    recipients: ["friend", "family", "colleague"],
    tags: ["warm", "cheerful"],
    sameDay: true,
    nextDay: true,
    size: "Classic",
  },
  {
    slug: "lic-linen",
    name: "LIC Linen",
    blurb: "Muted neutrals and soft greenery for modern apartments and gallery rooms.",
    price: 92,
    image: img.peachJar,
    imageAlt: "Neutral soft greenery bouquet",
    occasions: ["corporate", "just-because", "thank-you", "housewarming"],
    styles: ["arrangement", "hand-tied-vase", "lily-free"],
    colors: ["neutral", "soft"],
    blooms: ["garden", "lily-free"],
    recipients: ["client", "colleague", "friend"],
    tags: ["neutral", "modern"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "park-slope-peony",
    name: "Park Slope Peony",
    blurb: "Lush seasonal peonies when available—otherwise the closest romantic twin stems.",
    price: 138,
    image: img.softRoses,
    imageAlt: "Lush romantic peony-style bouquet",
    occasions: ["romance", "anniversary", "birthday", "wedding"],
    styles: ["hand-tied", "hatbox"],
    colors: ["blush", "soft"],
    blooms: ["peonies", "roses"],
    recipients: ["partner"],
    tags: ["lush", "romantic"],
    sameDay: false,
    nextDay: true,
    size: "Grand",
  },
  {
    slug: "tribeca-tower",
    name: "Tribeca Tower",
    blurb: "Tall, sculptural greens and white blooms for lobbies and long tables.",
    price: 168,
    image: img.garden,
    imageAlt: "Tall sculptural white and green arrangement",
    occasions: ["corporate", "congratulations", "wedding"],
    styles: ["arrangement"],
    colors: ["white", "neutral"],
    blooms: ["mixed", "orchids"],
    recipients: ["client", "colleague"],
    tags: ["sculptural", "tall"],
    sameDay: true,
    nextDay: true,
    size: "Grand",
  },
  {
    slug: "quiet-condolence",
    name: "Quiet Condolence",
    blurb: "Soft whites and greens composed with restraint for sympathy and remembrance.",
    price: 118,
    image: img.whiteBloom,
    imageAlt: "Soft white sympathy floral arrangement",
    occasions: ["sympathy", "funeral"],
    styles: ["arrangement", "lily-free"],
    colors: ["white", "neutral"],
    blooms: ["mixed", "lily-free"],
    recipients: ["family", "friend"],
    tags: ["sympathy", "white"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "chelsea-citrus",
    name: "Chelsea Citrus",
    blurb: "Bright stems with green accents—energetic, clean, and celebration-ready.",
    price: 96,
    image: img.tulips,
    imageAlt: "Bright citrus-toned celebration bouquet",
    occasions: ["birthday", "congratulations", "just-because", "new-baby"],
    styles: ["hand-tied", "gift-box"],
    colors: ["vibrant", "bold"],
    blooms: ["mixed"],
    recipients: ["friend", "colleague", "family"],
    tags: ["bright", "fresh"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "hatbox-harlem",
    name: "Harlem Hatbox",
    blurb: "A keepsake hatbox filled with seasonal color—gift-ready the moment it arrives.",
    price: 124,
    image: img.softRoses,
    imageAlt: "Luxury floral hatbox arrangement",
    occasions: ["birthday", "thank-you", "romance", "just-because"],
    styles: ["hatbox", "lily-free"],
    colors: ["blush", "soft"],
    blooms: ["roses", "mixed", "lily-free"],
    recipients: ["partner", "friend", "parent"],
    tags: ["hatbox", "gift"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Signature",
  },
  {
    slug: "giftbox-gramercy",
    name: "Gramercy Gift Box",
    blurb: "A compact hand-tied nestled in a protective gift box—perfect for desks and doorsteps.",
    price: 72,
    image: img.peachJar,
    imageAlt: "Compact gift box bouquet",
    occasions: ["thank-you", "thinking-of-you", "get-well", "just-because"],
    styles: ["gift-box", "lily-free"],
    colors: ["soft", "neutral"],
    blooms: ["mixed", "lily-free"],
    recipients: ["colleague", "friend", "client"],
    tags: ["giftbox", "compact"],
    sameDay: true,
    nextDay: true,
    size: "Classic",
  },
  {
    slug: "orchid-opera",
    name: "Opera Orchid",
    blurb: "Sculptural orchids for clients and openings—architectural and long-lasting.",
    price: 158,
    image: img.whiteBloom,
    imageAlt: "Architectural orchid arrangement",
    occasions: ["corporate", "congratulations", "housewarming"],
    styles: ["arrangement"],
    colors: ["white", "neutral"],
    blooms: ["orchids"],
    recipients: ["client", "colleague"],
    tags: ["orchid", "corporate"],
    sameDay: true,
    nextDay: true,
    size: "Grand",
  },
  {
    slug: "baby-bloom-flushing",
    name: "Flushing Baby Bloom",
    blurb: "Soft pastels and gentle greens to welcome a new arrival.",
    price: 86,
    image: img.softRoses,
    imageAlt: "Soft pastel new baby bouquet",
    occasions: ["new-baby", "congratulations"],
    styles: ["hand-tied", "gift-box", "lily-free"],
    colors: ["soft", "blush"],
    blooms: ["mixed", "lily-free"],
    recipients: ["family", "friend"],
    tags: ["baby", "pastel"],
    sameDay: true,
    nextDay: true,
    size: "Classic",
  },
  {
    slug: "get-well-greenpoint",
    name: "Greenpoint Get Well",
    blurb: "Calm color and restorative greenery for recovery and rest.",
    price: 82,
    image: img.garden,
    imageAlt: "Calm get well floral arrangement",
    occasions: ["get-well", "thinking-of-you"],
    styles: ["arrangement", "hand-tied-vase", "lily-free"],
    colors: ["soft", "neutral"],
    blooms: ["garden", "lily-free"],
    recipients: ["friend", "family", "colleague"],
    tags: ["get-well", "calm"],
    sameDay: true,
    nextDay: true,
    size: "Classic",
  },
  {
    slug: "housewarming-heights",
    name: "Heights Housewarming",
    blurb: "A vase-ready arrangement that settles into a new home instantly.",
    price: 102,
    image: img.peachJar,
    imageAlt: "Housewarming vase arrangement",
    occasions: ["housewarming", "congratulations", "thank-you"],
    styles: ["hand-tied-vase", "arrangement"],
    colors: ["vibrant", "soft"],
    blooms: ["mixed", "garden"],
    recipients: ["friend", "family", "colleague"],
    tags: ["housewarming", "vase"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "wedding-white-aisle",
    name: "White Aisle",
    blurb: "Ivory and soft green for ceremonies, rehearsal dinners, and hotel suites.",
    price: 178,
    image: img.garden,
    imageAlt: "Ivory wedding floral arrangement",
    occasions: ["wedding", "anniversary", "romance"],
    styles: ["hand-tied", "arrangement", "lily-free"],
    colors: ["white", "soft"],
    blooms: ["roses", "garden", "lily-free"],
    recipients: ["partner", "family"],
    tags: ["wedding", "ivory"],
    sameDay: false,
    nextDay: true,
    size: "Grand",
  },
  {
    slug: "funeral-quiet-tribute",
    name: "Quiet Tribute",
    blurb: "A dignified standing arrangement for services and remembrances.",
    price: 188,
    image: img.whiteBloom,
    imageAlt: "Dignified funeral floral tribute",
    occasions: ["funeral", "sympathy"],
    styles: ["arrangement", "lily-free"],
    colors: ["white", "neutral"],
    blooms: ["mixed", "lily-free"],
    recipients: ["family"],
    tags: ["funeral", "tribute"],
    sameDay: true,
    nextDay: true,
    size: "Grand",
  },
  {
    slug: "lilies-optional-luxe",
    name: "No-Lily Luxe",
    blurb: "A full, fragrant-free composition designed without lilies for pets and sensitive spaces.",
    price: 94,
    image: img.duskRoses,
    imageAlt: "Lily-free luxury bouquet",
    occasions: ["just-because", "thank-you", "birthday", "thinking-of-you"],
    styles: ["hand-tied", "lily-free", "gift-box"],
    colors: ["blush", "soft"],
    blooms: ["roses", "mixed", "lily-free"],
    recipients: ["friend", "family", "partner"],
    tags: ["lily-free", "pet-friendly"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Signature",
  },
  {
    slug: "parent-posy",
    name: "Parent Posy",
    blurb: "Warm, classic blooms for parents—grateful, polished, never fussy.",
    price: 88,
    image: img.softRoses,
    imageAlt: "Classic bouquet for parents",
    occasions: ["thank-you", "birthday", "thinking-of-you", "just-because"],
    styles: ["hand-tied-vase", "hand-tied"],
    colors: ["soft", "blush"],
    blooms: ["roses", "mixed"],
    recipients: ["parent", "family"],
    tags: ["parent", "classic"],
    sameDay: true,
    nextDay: true,
    size: "Classic",
  },
  {
    slug: "client-closer",
    name: "Client Closer",
    blurb: "A refined corporate send that feels considered after a deal or kickoff.",
    price: 132,
    image: img.florist,
    imageAlt: "Refined corporate floral gift",
    occasions: ["corporate", "thank-you", "congratulations"],
    styles: ["arrangement", "hand-tied-vase"],
    colors: ["neutral", "white"],
    blooms: ["orchids", "mixed"],
    recipients: ["client", "colleague"],
    tags: ["corporate", "client"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "seasonal-studio",
    name: "Seasonal Studio",
    blurb: "Whatever is freshest this morning—composed for color balance and longevity.",
    price: 90,
    image: img.garden,
    imageAlt: "Seasonal studio mixed bouquet",
    occasions: ["just-because", "birthday", "thinking-of-you", "thank-you"],
    styles: ["hand-tied", "lily-free"],
    colors: ["vibrant", "soft"],
    blooms: ["mixed", "garden", "lily-free"],
    recipients: ["friend", "partner", "family"],
    tags: ["seasonal", "fresh"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Signature",
  },
  {
    slug: "christmas-crimson",
    name: "Christmas Crimson",
    blurb: "Deep red roses with winter greens—classic Christmas presence for NYC rooms.",
    price: 118,
    image: img.duskRoses,
    imageAlt: "Deep red Christmas rose bouquet with winter greens",
    occasions: ["christmas", "thank-you", "corporate", "just-because"],
    styles: ["hand-tied", "hand-tied-vase"],
    colors: ["bold", "vibrant"],
    blooms: ["roses", "mixed"],
    recipients: ["partner", "family", "colleague", "client"],
    tags: ["christmas", "red", "holiday"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Signature",
  },
  {
    slug: "evergreen-centerpiece",
    name: "Evergreen Centerpiece",
    blurb: "A table-ready holiday arrangement with evergreen texture and soft ivory blooms.",
    price: 142,
    image: img.garden,
    imageAlt: "Holiday evergreen and ivory centerpiece arrangement",
    occasions: ["christmas", "corporate", "housewarming"],
    styles: ["arrangement", "lily-free"],
    colors: ["white", "neutral"],
    blooms: ["mixed", "garden", "lily-free"],
    recipients: ["family", "client", "colleague"],
    tags: ["christmas", "centerpiece", "table"],
    sameDay: true,
    nextDay: true,
    bestseller: true,
    size: "Grand",
  },
  {
    slug: "noel-hatbox",
    name: "Noël Hatbox",
    blurb: "A keepsake holiday hatbox filled with festive color—gift-ready for Christmas Eve.",
    price: 134,
    image: img.softRoses,
    imageAlt: "Festive Christmas floral hatbox gift",
    occasions: ["christmas", "thank-you", "romance"],
    styles: ["hatbox", "lily-free"],
    colors: ["blush", "bold"],
    blooms: ["roses", "mixed", "lily-free"],
    recipients: ["partner", "parent", "friend"],
    tags: ["christmas", "hatbox", "gift"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "office-yule",
    name: "Office Yule",
    blurb: "Refined holiday florals for desks, lobbies, and client Christmas gifts across NYC.",
    price: 128,
    image: img.florist,
    imageAlt: "Corporate Christmas floral arrangement for offices",
    occasions: ["christmas", "corporate", "thank-you"],
    styles: ["arrangement", "hand-tied-vase"],
    colors: ["white", "neutral"],
    blooms: ["orchids", "mixed"],
    recipients: ["client", "colleague"],
    tags: ["christmas", "corporate", "office"],
    sameDay: true,
    nextDay: true,
    size: "Signature",
  },
  {
    slug: "midnight-mass-white",
    name: "Midnight Mass White",
    blurb: "Ivory and soft green for Christmas Eve dinners, churches, and quiet gatherings.",
    price: 156,
    image: img.whiteBloom,
    imageAlt: "Ivory Christmas Eve floral arrangement",
    occasions: ["christmas", "wedding", "sympathy"],
    styles: ["arrangement", "lily-free"],
    colors: ["white", "soft"],
    blooms: ["roses", "mixed", "lily-free"],
    recipients: ["family", "friend"],
    tags: ["christmas", "ivory", "eve"],
    sameDay: true,
    nextDay: true,
    size: "Grand",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getOccasion(slug: string) {
  return occasions.find((o) => o.slug === slug);
}

export function getStyle(slug: string) {
  return styles.find((s) => s.slug === slug);
}

export function productsForOccasion(slug: string) {
  return products.filter((p) => p.occasions.includes(slug));
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const hay = [
      p.name,
      p.blurb,
      ...p.tags,
      ...p.occasions,
      ...p.styles,
      ...p.colors,
      ...p.blooms,
      ...p.recipients,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

/** @deprecated use products */
export const bouquets = products;
export const getBouquet = getProduct;
