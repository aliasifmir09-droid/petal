export type Bouquet = {
  slug: string;
  name: string;
  blurb: string;
  price: number;
  image: string;
  imageAlt: string;
  occasion: string;
};

export const bouquets: Bouquet[] = [
  {
    slug: "manhattan-morning",
    name: "Manhattan Morning",
    blurb: "Soft whites and blush garden roses with airy greenery—quiet luxury for any table.",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Soft blush and white rose bouquet",
    occasion: "Everyday",
  },
  {
    slug: "west-village-whisper",
    name: "West Village Whisper",
    blurb: "Peach and blush blooms with ribbon—romantic without trying too hard.",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Romantic peach and blush bouquet in a glass jar",
    occasion: "Romance",
  },
  {
    slug: "brooklyn-botanic",
    name: "Brooklyn Botanic",
    blurb: "Seasonal stems, wild texture, and deep greens—composed like a private garden.",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Textured seasonal garden-style bouquet",
    occasion: "Congratulations",
  },
  {
    slug: "soho-soiree",
    name: "SoHo Soirée",
    blurb: "Bold color-blocked florals for celebrations that deserve a statement.",
    price: 128,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bold colorful celebration bouquet",
    occasion: "Celebration",
  },
  {
    slug: "fifth-avenue-white",
    name: "Fifth Avenue White",
    blurb: "Architectural white blooms on a quiet ground—calm, precise, unmistakably elevated.",
    price: 148,
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Architectural white flower against a dark background",
    occasion: "Corporate",
  },
  {
    slug: "hudson-dusk",
    name: "Hudson Dusk",
    blurb: "Peach-to-plum roses with soft dusk depth—for evenings that linger.",
    price: 108,
    image:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Peach and plum rose bouquet in a clear vase",
    occasion: "Thank you",
  },
];

export function getBouquet(slug: string) {
  return bouquets.find((b) => b.slug === slug);
}
