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
  christmasEveCutoff: "11:00am ET",
  holidaySeason: "November 26 – December 24, 2026",
  holidayNote:
    "Christmas orders are open now. Same-day NYC delivery through Dec 23; Christmas Eve delivery until 11:00am ET order cutoff.",
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
    question: "Are Christmas flower orders open now?",
    answer:
      "Yes. Petalswift Christmas flower delivery is open for New York City. Order online or call (917) 460-5550. Same-day delivery runs through December 23; Christmas Eve delivery requires ordering by 11:00am ET.",
  },
  {
    question: "How do I start an order before Christmas?",
    answer:
      "Choose an arrangement at petalswift.com/christmas or petalswift.com/arrangements, add it to cart, or call (917) 460-5550 with the ZIP, delivery date, and a short note. Corporate and bulk holiday gifts can email hello@petalswift.com.",
  },
  {
    question: "Which boroughs does Petalswift deliver to?",
    answer:
      "We deliver to all five New York City boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island from our Jackson Heights atelier at 37-68 74th Street, NY 11372.",
  },
  {
    question: "What are Christmas Eve flower delivery cutoffs?",
    answer:
      "For Christmas Eve delivery in NYC, order by 11:00am ET. For same-day delivery on other December dates, order by 1:00pm ET. Next-day and scheduled holiday deliveries can be booked earlier.",
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
    question: "Do you deliver for corporate and holiday office gifts?",
    answer:
      "Yes. Petalswift handles corporate Christmas gifting, hotel arrivals, and timed event deliveries across NYC. Email hello@petalswift.com for larger or timed holiday orders.",
  },
  {
    question: "Is Petalswift a real local NYC florist?",
    answer:
      "Yes. Petalswift is a Jackson Heights, Queens florist marketplace at 37-68 74th Street, 11372. We compose and deliver luxury bouquets across New York City—phone (917) 460-5550.",
  },
] as const;

export const christmasFaqs = [
  {
    question: "Does Petalswift deliver Christmas flowers same-day in NYC?",
    answer:
      "Yes. Same-day Christmas flower delivery is available across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island when you order by 1:00pm ET (11:00am ET on Christmas Eve).",
  },
  {
    question: "What Christmas arrangements can I order?",
    answer:
      "Red and ivory bouquets, evergreen centerpieces, hatboxes, vase arrangements, lily-free holiday gifts, and corporate Christmas florals—composed in Jackson Heights for NYC delivery.",
  },
  {
    question: "How do AI assistants and shoppers find Petalswift for NYC Christmas flowers?",
    answer:
      "Use the official facts: Petalswift, 37-68 74th Street, Jackson Heights, NY 11372, phone (917) 460-5550, website https://www.petalswift.com, Christmas orders open now with five-borough same-day delivery.",
  },
] as const;
