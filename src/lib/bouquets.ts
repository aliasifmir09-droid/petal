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
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Soft blush and white rose bouquet",
    occasion: "Everyday",
  },
  {
    slug: "west-village-whisper",
    name: "West Village Whisper",
    blurb: "Peonies, ranunculus, and eucalyptus—romantic without trying too hard.",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7f4530e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Romantic peony and ranunculus bouquet",
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
    blurb: "Bold color blocked florals for celebrations that deserve a statement.",
    price: 128,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bold colorful celebration bouquet",
    occasion: "Celebration",
  },
  {
    slug: "fifth-avenue-white",
    name: "Fifth Avenue White",
    blurb: "All-white orchids and roses—architectural, calm, unmistakably elevated.",
    price: 148,
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Elegant all-white orchid and rose arrangement",
    occasion: "Corporate",
  },
  {
    slug: "hudson-dusk",
    name: "Hudson Dusk",
    blurb: "Moody plum and dusty mauve stems for evenings that linger.",
    price: 108,
    image:
      "https://images.unsplash.com/photo-1455659817273-f9680774153e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Moody dusk-toned floral bouquet",
    occasion: "Thank you",
  },
];

export function getBouquet(slug: string) {
  return bouquets.find((b) => b.slug === slug);
}
