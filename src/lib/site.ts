export const site = {
  name: "Petalswift",
  legalName: "Petalswift",
  url: "https://www.petalswift.com",
  email: "hello@petalswift.com",
  phone: "+1-917-460-5550",
  phoneDisplay: "(917) 460-5550",
  locale: "en_US",
  tagline: "Flowers, composed for New York.",
  description:
    "Petalswift is a New York City luxury flower marketplace based at 37-68 74th Street, Jackson Heights. Same-day flower delivery and composed bouquets across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
  shortDescription:
    "NYC flower marketplace for same-day luxury bouquets—composed in Jackson Heights, delivered across all five boroughs.",
  address: {
    streetAddress: "37-68 74th Street",
    addressLocality: "Jackson Heights",
    addressRegion: "NY",
    postalCode: "11372",
    addressCountry: "US",
  },
  geo: {
    latitude: 40.7473,
    longitude: -73.8894,
  },
  priceRange: "$$–$$$",
  sameAs: [] as string[],
  orderCutoff: "1:00pm ET",
  ogImage:
    "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
} as const;

export type Borough = {
  slug: string;
  name: string;
  headline: string;
  blurb: string;
  neighborhoods: string[];
};

export const boroughs: Borough[] = [
  {
    slug: "manhattan",
    name: "Manhattan",
    headline: "Same-day flowers across Manhattan.",
    blurb:
      "From Midtown boardrooms to West Village stoops, Petalswift delivers composed bouquets across Manhattan the same day—fresh stems, careful handoff.",
    neighborhoods: [
      "Upper East Side",
      "Upper West Side",
      "Midtown",
      "Chelsea",
      "West Village",
      "SoHo",
      "Tribeca",
      "Financial District",
    ],
  },
  {
    slug: "brooklyn",
    name: "Brooklyn",
    headline: "Brooklyn flower delivery, same day.",
    blurb:
      "Williamsburg lofts to Park Slope brownstones—Petalswift brings atelier-level bouquets across Brooklyn with same-day reliability.",
    neighborhoods: [
      "Williamsburg",
      "Greenpoint",
      "Park Slope",
      "Brooklyn Heights",
      "DUMBO",
      "Fort Greene",
      "Cobble Hill",
      "Bushwick",
    ],
  },
  {
    slug: "queens",
    name: "Queens",
    headline: "Luxury bouquets delivered in Queens.",
    blurb:
      "Astoria, Long Island City, Forest Hills, and beyond—same-day Petalswift arrangements composed for Queens rooms and celebrations.",
    neighborhoods: [
      "Long Island City",
      "Astoria",
      "Sunnyside",
      "Forest Hills",
      "Jackson Heights",
      "Flushing",
      "Ridgewood",
    ],
  },
  {
    slug: "bronx",
    name: "The Bronx",
    headline: "Same-day florist delivery in the Bronx.",
    blurb:
      "Thoughtful, elevated bouquets delivered across the Bronx—fresh composition, clear tracking, and a calm delivery experience.",
    neighborhoods: [
      "Riverdale",
      "Fordham",
      "Pelham Bay",
      "Throgs Neck",
      "Mott Haven",
      "Kingsbridge",
    ],
  },
  {
    slug: "staten-island",
    name: "Staten Island",
    headline: "Staten Island same-day flower delivery.",
    blurb:
      "Petalswift delivers composed bouquets across Staten Island with the same freshness and care as our Manhattan atelier work.",
    neighborhoods: [
      "St. George",
      "Todt Hill",
      "Great Kills",
      "New Dorp",
      "Tottenville",
    ],
  },
];

export function getBorough(slug: string) {
  return boroughs.find((b) => b.slug === slug);
}

export const faqs = [
  {
    question: "Do you offer same-day flower delivery in NYC?",
    answer:
      "Yes. Order by 1:00pm ET for same-day delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
  },
  {
    question: "Which boroughs does Petalswift deliver to?",
    answer:
      "We deliver to all five New York City boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
  },
  {
    question: "How fresh are the flowers?",
    answer:
      "Arrangements are composed to order from morning stems—not pulled from overnight display inventory—so presence and longevity stay high.",
  },
  {
    question: "Can I include a handwritten note?",
    answer:
      "Yes. Every bouquet can include a personal note. Add your message when you request or order the arrangement.",
  },
  {
    question: "What if the recipient is not available?",
    answer:
      "Our couriers follow your delivery instructions for doormen, lobbies, and offices. If needed, we coordinate a safe handoff or short follow-up window.",
  },
  {
    question: "Do you deliver for corporate and events?",
    answer:
      "Yes. Petalswift handles corporate gifting, hotel arrivals, and timed event deliveries. Email hello@petalswift.com for larger or timed orders.",
  },
] as const;
