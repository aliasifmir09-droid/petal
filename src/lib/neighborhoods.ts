import { boroughs, type Borough } from "@/lib/site";
import { deliveryFeeForBorough } from "@/lib/ops";

export type NeighborhoodGuide = {
  slug: string;
  name: string;
  boroughSlug: Borough["slug"];
  headline: string;
  blurb: string;
  tips: string[];
  landmarks: string[];
  keywords: string[];
};

/** High-intent NYC neighborhood pages — unique copy per area (not doorway spam). */
export const neighborhoods: NeighborhoodGuide[] = [
  {
    slug: "midtown",
    name: "Midtown",
    boroughSlug: "manhattan",
    headline: "Same-day flower delivery in Midtown Manhattan.",
    blurb:
      "Hotel desks, corporate lobbies, and timed Midtown handoffs—Petalswift delivers vase-ready bouquets with clear recipient notes for doormen and concierges.",
    tips: [
      "Add lobby, suite, and recipient mobile number for faster Midtown handoffs.",
      "Order by 4:00pm ET for same-day Midtown delivery most days.",
      "Corporate and hotel amenity sends are common—ask for note cards at checkout.",
    ],
    landmarks: ["Times Square hotels", "Grand Central offices", "Bryant Park area", "Rockefeller Center"],
    keywords: ["Midtown flower delivery", "same-day flowers Midtown NYC", "hotel flower delivery Midtown"],
  },
  {
    slug: "upper-east-side",
    name: "Upper East Side",
    boroughSlug: "manhattan",
    headline: "Upper East Side same-day florist delivery.",
    blurb:
      "Doorman buildings from Midtown to the park—UES deliveries need accurate buzzers and building notes. Same-day when ordered by 4:00pm ET.",
    tips: [
      "Include doorman desk instructions and apartment number.",
      "Anniversary and sympathy sends are frequent on the UES—lily-free options available.",
      "Confirm ZIP at checkout for Manhattan fee and window.",
    ],
    landmarks: ["Museum Mile", "Doorman residences", "Park Avenue apartments"],
    keywords: ["Upper East Side flower delivery", "UES florist same-day"],
  },
  {
    slug: "upper-west-side",
    name: "Upper West Side",
    boroughSlug: "manhattan",
    headline: "Upper West Side flower delivery, same day.",
    blurb:
      "Brownstones and high-rises near the park—Petalswift delivers composed bouquets across the Upper West Side with SMS/email tracking.",
    tips: [
      "Walk-ups: add floor and buzzer code in delivery notes.",
      "Weekend host gifts and birthday sends are popular—Signature size fits most UWS tables.",
      "Same-day cutoff is 4:00pm ET most days.",
    ],
    landmarks: ["Amsterdam Ave residences", "Lincoln Center area", "Central Park West"],
    keywords: ["Upper West Side flower delivery", "UWS same-day florist"],
  },
  {
    slug: "west-village",
    name: "West Village",
    boroughSlug: "manhattan",
    headline: "West Village same-day flower delivery.",
    blurb:
      "Townhouses and walk-ups in the West Village need careful handoff notes. Petalswift delivers garden-style and lily-free options same day across downtown Manhattan.",
    tips: [
      "Add stoop vs. doorman preference and intercom details.",
      "Romance and thank-you bouquets are frequent—hand-tied styles travel well.",
      "Order early on Fridays for weekend Village deliveries.",
    ],
    landmarks: ["Bleecker Street", "Hudson Street townhouses", "Washington Square vicinity"],
    keywords: ["West Village flower delivery", "downtown NYC florist same-day"],
  },
  {
    slug: "chelsea",
    name: "Chelsea",
    boroughSlug: "manhattan",
    headline: "Chelsea flower delivery for galleries and homes.",
    blurb:
      "Gallery openings, loft dinners, and Chelsea residences—Petalswift delivers architectural and soft pastel arrangements with same-day Midtown-adjacent windows.",
    tips: [
      "Office and gallery lobbies: name the front desk contact.",
      "Architectural whites work well for Chelsea loft entertaining.",
      "Corporate gifting available with brand-safe note cards.",
    ],
    landmarks: ["Chelsea galleries", "High Line residences", "Office buildings west of 7th"],
    keywords: ["Chelsea flower delivery NYC", "gallery flowers Chelsea"],
  },
  {
    slug: "williamsburg",
    name: "Williamsburg",
    boroughSlug: "brooklyn",
    headline: "Williamsburg same-day flower delivery.",
    blurb:
      "Lofts, walk-ups, and waterfront buildings—Petalswift delivers same-day flowers across Williamsburg with published Brooklyn fees and windows.",
    tips: [
      "Many buildings need courier codes—add them in notes.",
      "Garden-style and lily-free bouquets are popular for weekend hosts.",
      "Order by 4:00pm ET for same-day Williamsburg delivery.",
    ],
    landmarks: ["Bedford Ave", "Waterfront towers", "McCarren vicinity"],
    keywords: ["Williamsburg flower delivery", "same-day florist Williamsburg Brooklyn"],
  },
  {
    slug: "park-slope",
    name: "Park Slope",
    boroughSlug: "brooklyn",
    headline: "Park Slope florist delivery, same day.",
    blurb:
      "Stoops and brownstones across Park Slope—Petalswift brings composed bouquets with clear fees and careful handoffs for walk-ups.",
    tips: [
      "Note stoop leave-vs-buzzer preferences for brownstones.",
      "Family celebrations and teacher gifts are common—Classic and Signature sizes fit well.",
      "Confirm Brooklyn ZIP for fee before payment.",
    ],
    landmarks: ["Prospect Park West", "7th Avenue shops", "Brownstone blocks"],
    keywords: ["Park Slope flower delivery", "Brooklyn brownstone florist"],
  },
  {
    slug: "brooklyn-heights",
    name: "Brooklyn Heights",
    boroughSlug: "brooklyn",
    headline: "Brooklyn Heights same-day flower delivery.",
    blurb:
      "Historic blocks and waterfront views—Petalswift delivers elegant arrangements to Brooklyn Heights residences and offices same day when ordered by cutoff.",
    tips: [
      "Doorman and co-op desks: include recipient full name as listed.",
      "Sympathy and congratulations sends are frequent—ask for lily-free if needed.",
      "Same-day Brooklyn window shown at checkout.",
    ],
    landmarks: ["Promenade residences", "Montague Street", "Court Street offices"],
    keywords: ["Brooklyn Heights flower delivery", "same-day florist Brooklyn Heights"],
  },
  {
    slug: "dumbo",
    name: "DUMBO",
    boroughSlug: "brooklyn",
    headline: "DUMBO flower delivery for lofts and offices.",
    blurb:
      "Waterfront lofts and tech offices in DUMBO—Petalswift delivers presentation-ready bouquets with timed handoff notes.",
    tips: [
      "Office floors need suite numbers and reception contacts.",
      "Architectural arrangements photograph well for loft entertaining.",
      "Order by 4:00pm ET for same-day DUMBO delivery.",
    ],
    landmarks: ["Waterfront towers", "Bridge views apartments", "Jay Street offices"],
    keywords: ["DUMBO flower delivery", "Brooklyn loft florist"],
  },
  {
    slug: "astoria",
    name: "Astoria",
    boroughSlug: "queens",
    headline: "Astoria same-day flower delivery.",
    blurb:
      "Close to our Queens atelier—Astoria gets some of Petalswift’s fastest same-day windows and the Queens delivery fee from $12.",
    tips: [
      "Queens fee starts at $12—confirm ZIP at checkout.",
      "Walk-ups: add buzzer and floor details.",
      "Taking orders from December 10, 2026.",
    ],
    landmarks: ["Ditmars residences", "Steinway corridor", "Astoria Park area"],
    keywords: ["Astoria flower delivery", "Queens florist Astoria same-day"],
  },
  {
    slug: "long-island-city",
    name: "Long Island City",
    boroughSlug: "queens",
    headline: "Long Island City same-day florist delivery.",
    blurb:
      "High-rises and waterfront towers in LIC—Petalswift delivers same-day bouquets with lobby-friendly packaging.",
    tips: [
      "Tower lobbies: include building name and package room instructions.",
      "Corporate studio gifts are common—Signature size recommended.",
      "Queens same-day windows often run 4:00–8:00pm ET.",
    ],
    landmarks: ["Waterfront towers", "Court Square offices", "Vernon Blvd residences"],
    keywords: ["LIC flower delivery", "Long Island City florist same-day"],
  },
  {
    slug: "forest-hills",
    name: "Forest Hills",
    boroughSlug: "queens",
    headline: "Forest Hills same-day flower delivery.",
    blurb:
      "Homes and co-ops in Forest Hills—Petalswift delivers composed bouquets with Queens fees and clear building notes.",
    tips: [
      "Co-op desks: list resident name exactly as on file.",
      "Holiday centerpieces and sympathy sprays available—order early for Christmas.",
      "Same-day cutoff 4:00pm ET most days.",
    ],
    landmarks: ["Austin Street area", "Forest Hills Gardens vicinity", "Queens Blvd residences"],
    keywords: ["Forest Hills flower delivery", "Queens florist Forest Hills"],
  },
  {
    slug: "flushing",
    name: "Flushing",
    boroughSlug: "queens",
    headline: "Flushing flower delivery, same day.",
    blurb:
      "Family celebrations and congratulations across Flushing—Petalswift routes same-day Queens deliveries with transparent fees.",
    tips: [
      "Add language preference notes if helpful for building staff handoff.",
      "Grand size works well for family gatherings.",
      "Confirm Queens ZIP for fee and window.",
    ],
    landmarks: ["Main Street corridor", "Residential towers", "Family homes"],
    keywords: ["Flushing flower delivery", "same-day florist Flushing Queens"],
  },
  {
    slug: "riverdale",
    name: "Riverdale",
    boroughSlug: "bronx",
    headline: "Riverdale same-day flower delivery.",
    blurb:
      "Homes and residences in Riverdale—Petalswift delivers composed bouquets across the Bronx with published fees and building-access notes.",
    tips: [
      "Gate and buzzer details help couriers on first attempt.",
      "Sympathy and congratulations are common—lily-free on request.",
      "Bronx same-day when ordered by 4:00pm ET.",
    ],
    landmarks: ["Riverdale residences", "Family homes", "Campus-area gifts"],
    keywords: ["Riverdale flower delivery", "Bronx florist Riverdale"],
  },
  {
    slug: "mott-haven",
    name: "Mott Haven",
    boroughSlug: "bronx",
    headline: "Mott Haven florist delivery, same day.",
    blurb:
      "Lofts and new residences in Mott Haven—Petalswift delivers same-day flowers with Bronx windows and SMS updates.",
    tips: [
      "New buildings often need package-room instructions.",
      "Architectural styles suit loft entertaining.",
      "Order by 4:00pm ET for same-day Bronx delivery.",
    ],
    landmarks: ["Waterfront lofts", "Residential developments", "Local studios"],
    keywords: ["Mott Haven flower delivery", "South Bronx florist same-day"],
  },
  {
    slug: "st-george",
    name: "St. George",
    boroughSlug: "staten-island",
    headline: "St. George Staten Island flower delivery.",
    blurb:
      "Ferry-adjacent St. George and nearby neighborhoods—Petalswift delivers with Staten Island fees and same-day options when ordered by cutoff.",
    tips: [
      "Staten Island fee starts higher—shown before checkout.",
      "Next-day is often smoothest on peak weekends; same-day still available most weekdays.",
      "Christmas Eve needs earlier ordering (11:00am ET cutoff).",
    ],
    landmarks: ["St. George ferry area", "Local residences", "Downtown SI offices"],
    keywords: ["St. George flower delivery", "Staten Island florist St George"],
  },
  {
    slug: "bushwick",
    name: "Bushwick",
    boroughSlug: "brooklyn",
    headline: "Bushwick same-day flower delivery.",
    blurb:
      "Lofts, walk-ups, and studio buildings in Bushwick—Petalswift delivers composed bouquets with Brooklyn fees and same-day windows when ordered by cutoff.",
    tips: [
      "Many Bushwick buildings need a buzzer code—add it in delivery notes.",
      "Garden-style and lily-free bouquets travel well for weekend hosts.",
      "Order by 4:00pm ET for same-day Bushwick delivery.",
    ],
    landmarks: ["Myrtle-Broadway area", "Warehouse lofts", "Residential walk-ups"],
    keywords: ["Bushwick flower delivery", "same-day florist Bushwick Brooklyn"],
  },
  {
    slug: "harlem",
    name: "Harlem",
    boroughSlug: "manhattan",
    headline: "Harlem same-day flower delivery.",
    blurb:
      "Brownstones and residences across Harlem—Petalswift delivers same-day bouquets with Manhattan fees, doorman notes, and a 4:00pm ET order cutoff most days.",
    tips: [
      "Include buzzer or doorman instructions for the first handoff.",
      "Celebrations and sympathy sends are common—lily-free on request.",
      "Manhattan same-day window is shown before you pay.",
    ],
    landmarks: ["125th Street corridor", "Brownstone blocks", "Residential avenues"],
    keywords: ["Harlem flower delivery", "same-day florist Harlem NYC"],
  },
];

export function getNeighborhood(boroughSlug: string, neighborhoodSlug: string) {
  return neighborhoods.find(
    (n) => n.boroughSlug === boroughSlug && n.slug === neighborhoodSlug,
  );
}

export function neighborhoodsInBorough(boroughSlug: string) {
  return neighborhoods.filter((n) => n.boroughSlug === boroughSlug);
}

export function neighborhoodPath(n: NeighborhoodGuide) {
  return `/nyc/${n.boroughSlug}/${n.slug}`;
}

export function neighborhoodDelivery(n: NeighborhoodGuide) {
  const borough = boroughs.find((b) => b.slug === n.boroughSlug);
  const zone = deliveryFeeForBorough(n.boroughSlug);
  return { borough, zone };
}

export function slugifyNeighborhoodName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
