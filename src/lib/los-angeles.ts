import type { MarketLanding } from "@/lib/market-landings";

export const losAngeles = {
  name: "Los Angeles",
  region: "CA",
  path: "/los-angeles",
  orderCutoff: "1:00pm PT",
  christmasEveCutoff: "11:00am PT",
} as const;

export type LaArea = {
  slug: "central" | "eastside" | "westside" | "valley";
  name: string;
  headline: string;
  blurb: string;
  seoExtra: string;
  fee: number;
  sameDayWindow: string;
  nextDayWindow: string;
};

export type LaNeighborhood = {
  slug: string;
  name: string;
  areaSlug: LaArea["slug"];
  /** Wording inside the citywide delivery sentence. */
  listLabel: string;
  headline: string;
  blurb: string;
  tips: string[];
  landmarks: string[];
};

export const laAreas: LaArea[] = [
  {
    slug: "central",
    name: "Central Los Angeles",
    headline: "Same-day flowers across central Los Angeles.",
    blurb:
      "Downtown towers, Hollywood buildings, Koreatown residences, and Mid-Wilshire apartments—Petalswift delivers composed bouquets inside the City of Los Angeles.",
    seoExtra:
      "Central Los Angeles delivery is $16, with a same-day window of 2:00–7:00pm PT when you order by 1:00pm PT.",
    fee: 16,
    sameDayWindow: "2:00–7:00pm PT",
    nextDayWindow: "10:00am–6:00pm PT",
  },
  {
    slug: "eastside",
    name: "Eastside",
    headline: "Eastside Los Angeles flower delivery, same day.",
    blurb:
      "Silver Lake, Echo Park, Los Feliz, and Highland Park—hillside houses and walk-ups with clear buzzer notes.",
    seoExtra:
      "Eastside delivery is $16. Same-day window 2:00–7:00pm PT. Order by 1:00pm PT.",
    fee: 16,
    sameDayWindow: "2:00–7:00pm PT",
    nextDayWindow: "10:00am–6:00pm PT",
  },
  {
    slug: "westside",
    name: "Westside",
    headline: "Westside Los Angeles same-day florist delivery.",
    blurb:
      "Venice, Brentwood, and Westwood are inside the City of Los Angeles. Petalswift hands off bouquets with building notes and a published Westside fee.",
    seoExtra:
      "Westside delivery is $18. Same-day window 3:00–8:00pm PT when ordered by 1:00pm PT.",
    fee: 18,
    sameDayWindow: "3:00–8:00pm PT",
    nextDayWindow: "10:00am–7:00pm PT",
  },
  {
    slug: "valley",
    name: "San Fernando Valley",
    headline: "Same-day flowers in the Los Angeles Valley neighborhoods.",
    blurb:
      "Sherman Oaks and Studio City are in the City of Los Angeles. Petalswift delivers there with a Valley fee and a same-day window.",
    seoExtra:
      "Valley delivery is $18. Same-day window 3:00–8:00pm PT. Order by 1:00pm PT.",
    fee: 18,
    sameDayWindow: "3:00–8:00pm PT",
    nextDayWindow: "11:00am–6:00pm PT",
  },
];

export const laNeighborhoods: LaNeighborhood[] = [
  {
    slug: "downtown",
    name: "Downtown",
    areaSlug: "central",
    listLabel: "Downtown",
    headline: "Downtown Los Angeles same-day flower delivery.",
    blurb:
      "Lofts and hotel desks in Downtown Los Angeles. Name the front desk and the unit so the first handoff sticks.",
    tips: [
      "Include the building name and suite.",
      "Order by 1:00pm PT for same-day Downtown delivery.",
      "Central Los Angeles fee is $16.",
    ],
    landmarks: ["Historic Core lofts", "South Park towers", "Hotel desks"],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    areaSlug: "central",
    listLabel: "Hollywood",
    headline: "Hollywood flower delivery, same day.",
    blurb:
      "Apartments and production offices in Hollywood. Add the gate or buzzer. Petalswift delivers on the central Los Angeles fee.",
    tips: [
      "Gate codes belong in the delivery note.",
      "Signature size fits most Hollywood apartments.",
      "Same-day window 2:00–7:00pm PT.",
    ],
    landmarks: ["Hollywood Boulevard area", "Production offices", "Residential courts"],
  },
  {
    slug: "koreatown",
    name: "Koreatown",
    areaSlug: "central",
    listLabel: "Koreatown",
    headline: "Koreatown same-day flower delivery.",
    blurb:
      "High-rises in Koreatown need the resident’s name as the desk has it. Petalswift delivers inside the City of Los Angeles.",
    tips: [
      "List the tower and the apartment number.",
      "Celebrations and congratulations are common.",
      "Order by 1:00pm PT.",
    ],
    landmarks: ["Wilshire towers", "Residential high-rises", "Local celebrations"],
  },
  {
    slug: "mid-wilshire",
    name: "Mid-Wilshire",
    areaSlug: "central",
    listLabel: "Mid-Wilshire",
    headline: "Mid-Wilshire flower delivery, same day.",
    blurb:
      "Museum-adjacent apartments and houses in Mid-Wilshire. Classic and Signature sizes fit these rooms.",
    tips: [
      "Doorman buildings need the resident’s listed name.",
      "Central fee $16, window 2:00–7:00pm PT.",
      "Lily-free is available on request.",
    ],
    landmarks: ["Miracle Mile apartments", "Residential streets", "Museum-adjacent homes"],
  },
  {
    slug: "silver-lake",
    name: "Silver Lake",
    areaSlug: "eastside",
    listLabel: "Silver Lake",
    headline: "Silver Lake same-day flower delivery.",
    blurb:
      "Hillside houses and small buildings in Silver Lake. Stairs and gate codes belong in the note.",
    tips: [
      "Add stair or gate details for the first attempt.",
      "Garden-style bouquets are a frequent host gift.",
      "Eastside fee is $16.",
    ],
    landmarks: ["Reservoir streets", "Hillside houses", "Sunset-adjacent homes"],
  },
  {
    slug: "echo-park",
    name: "Echo Park",
    areaSlug: "eastside",
    listLabel: "Echo Park",
    headline: "Echo Park flower delivery, same day.",
    blurb:
      "Walk-ups around Echo Park. A buzzer and floor number keep the handoff short.",
    tips: [
      "Walk-ups need a floor and buzzer.",
      "Order by 1:00pm PT for same-day.",
      "Window 2:00–7:00pm PT.",
    ],
    landmarks: ["Echo Park streets", "Walk-up residences", "Local houses"],
  },
  {
    slug: "los-feliz",
    name: "Los Feliz",
    areaSlug: "eastside",
    listLabel: "Los Feliz",
    headline: "Los Feliz same-day florist delivery.",
    blurb:
      "Houses and courtyard apartments in Los Feliz. Petalswift delivers composed bouquets with the Eastside fee.",
    tips: [
      "Courtyard gates need a code.",
      "Anniversary and host gifts are common.",
      "Same-day cutoff is 1:00pm PT.",
    ],
    landmarks: ["Los Feliz Boulevard area", "Hillside homes", "Courtyard apartments"],
  },
  {
    slug: "highland-park",
    name: "Highland Park",
    areaSlug: "eastside",
    listLabel: "Highland Park",
    headline: "Highland Park flower delivery, same day.",
    blurb:
      "Houses in Highland Park, inside the City of Los Angeles. Petalswift delivers same-day when you order by 1:00pm PT.",
    tips: [
      "House numbers and porch notes help the courier.",
      "Eastside fee $16.",
      "Next-day window is 10:00am–6:00pm PT.",
    ],
    landmarks: ["York Boulevard area", "Residential blocks", "Family houses"],
  },
  {
    slug: "venice",
    name: "Venice",
    areaSlug: "westside",
    listLabel: "Venice",
    headline: "Venice Los Angeles same-day flower delivery.",
    blurb:
      "Walk streets and small buildings in Venice. This is the City of Los Angeles, not a separate beach city. Westside fee is $18.",
    tips: [
      "Add the walk-street or gate if there is one.",
      "Order by 1:00pm PT.",
      "Window 3:00–8:00pm PT.",
    ],
    landmarks: ["Walk streets", "Abbot Kinney area homes", "Canals-adjacent houses"],
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    areaSlug: "westside",
    listLabel: "Brentwood",
    headline: "Brentwood flower delivery, same day.",
    blurb:
      "Houses and gated entries in Brentwood. Put the gate code in the note. Petalswift delivers on the Westside fee.",
    tips: [
      "Gated entries need a code or a call box name.",
      "Signature and Grand sizes suit these rooms.",
      "Same-day window 3:00–8:00pm PT.",
    ],
    landmarks: ["Residential streets", "Gated houses", "Family homes"],
  },
  {
    slug: "westwood",
    name: "Westwood",
    areaSlug: "westside",
    listLabel: "Westwood",
    headline: "Westwood same-day flower delivery.",
    blurb:
      "Apartments and offices in Westwood. Name the desk and the unit. Westside delivery is $18.",
    tips: [
      "Office floors need a suite number.",
      "Order by 1:00pm PT for same-day.",
      "Lily-free options are listed in the catalog.",
    ],
    landmarks: ["Village apartments", "Office suites", "Residential towers"],
  },
  {
    slug: "sherman-oaks",
    name: "Sherman Oaks",
    areaSlug: "valley",
    listLabel: "Sherman Oaks",
    headline: "Sherman Oaks same-day flower delivery.",
    blurb:
      "Sherman Oaks is in the City of Los Angeles. Houses and condos here use the Valley fee of $18.",
    tips: [
      "Add a gate or buzzer when the building has one.",
      "Order by 1:00pm PT.",
      "Window 3:00–8:00pm PT.",
    ],
    landmarks: ["Ventura Boulevard area", "Residential streets", "Condo buildings"],
  },
  {
    slug: "studio-city",
    name: "Studio City",
    areaSlug: "valley",
    listLabel: "Studio City",
    headline: "Studio City flower delivery, same day.",
    blurb:
      "Houses and courtyard buildings in Studio City. Petalswift delivers inside the City of Los Angeles with the Valley fee.",
    tips: [
      "Courtyard codes belong in the note.",
      "Host gifts and birthdays are typical.",
      "Same-day cutoff 1:00pm PT.",
    ],
    landmarks: ["Ventura corridor homes", "Courtyard buildings", "Hillside streets"],
  },
];

const laZipLabels: Record<string, { areaSlug: LaArea["slug"]; label: string }> = {
  "90012": { areaSlug: "central", label: "Downtown" },
  "90013": { areaSlug: "central", label: "Downtown" },
  "90014": { areaSlug: "central", label: "Downtown" },
  "90015": { areaSlug: "central", label: "Downtown" },
  "90017": { areaSlug: "central", label: "Downtown" },
  "90028": { areaSlug: "central", label: "Hollywood" },
  "90038": { areaSlug: "central", label: "Hollywood" },
  "90004": { areaSlug: "central", label: "Koreatown" },
  "90005": { areaSlug: "central", label: "Koreatown" },
  "90006": { areaSlug: "central", label: "Koreatown" },
  "90010": { areaSlug: "central", label: "Koreatown" },
  "90019": { areaSlug: "central", label: "Mid-Wilshire" },
  "90036": { areaSlug: "central", label: "Mid-Wilshire" },
  "90026": { areaSlug: "eastside", label: "Echo Park" },
  "90039": { areaSlug: "eastside", label: "Silver Lake" },
  "90027": { areaSlug: "eastside", label: "Los Feliz" },
  "90029": { areaSlug: "eastside", label: "Los Feliz" },
  "90042": { areaSlug: "eastside", label: "Highland Park" },
  "90291": { areaSlug: "westside", label: "Venice" },
  "90049": { areaSlug: "westside", label: "Brentwood" },
  "90024": { areaSlug: "westside", label: "Westwood" },
  "90025": { areaSlug: "westside", label: "Westwood" },
  "91423": { areaSlug: "valley", label: "Sherman Oaks" },
  "91403": { areaSlug: "valley", label: "Sherman Oaks" },
  "91604": { areaSlug: "valley", label: "Studio City" },
  "91602": { areaSlug: "valley", label: "Studio City" },
};

export function getLaArea(slug: string) {
  return laAreas.find((area) => area.slug === slug);
}

export function getLaNeighborhood(areaSlug: string, neighborhoodSlug: string) {
  return laNeighborhoods.find(
    (n) => n.areaSlug === areaSlug && n.slug === neighborhoodSlug,
  );
}

export function laNeighborhoodsInArea(areaSlug: string) {
  return laNeighborhoods.filter((n) => n.areaSlug === areaSlug);
}

export function laNeighborhoodPath(n: LaNeighborhood) {
  return `/los-angeles/${n.areaSlug}/${n.slug}`;
}

export function lookupLaZip(zip: string) {
  const hit = laZipLabels[zip];
  if (!hit) return null;
  const area = getLaArea(hit.areaSlug);
  if (!area) return null;
  return { ...hit, area };
}

export const laMarketLandings: MarketLanding[] = [
  {
    slug: "same-day-flower-delivery-los-angeles",
    title: "Same-Day Flower Delivery Los Angeles",
    description:
      "Same-day flower delivery in the City of Los Angeles. Order by 1:00pm PT. Central and Eastside from $16; Westside and the Valley $18.",
    h1: "Same-day flower delivery in Los Angeles.",
    kicker: "City of Los Angeles · order by 1:00pm PT",
    cityName: "Los Angeles",
    lead: "Petalswift starts same-day flower delivery in the City of Los Angeles on December 10, 2026. Order by 1:00pm PT. Fees are published by area before you pay.",
    details: [
      "Central Los Angeles and the Eastside are $16, window 2:00–7:00pm PT.",
      "The Westside and San Fernando Valley neighborhoods in the city are $18, window 3:00–8:00pm PT.",
      "Beverly Hills, Santa Monica, and other separate cities are not in this launch. More cities come later.",
    ],
  },
  {
    slug: "flower-delivery-los-angeles",
    title: "Flower Delivery Los Angeles",
    description:
      "Flower delivery in the City of Los Angeles from Petalswift. Neighborhood guides, published fees, and the same phone and email as New York City.",
    h1: "Flower delivery in the City of Los Angeles.",
    kicker: "Los Angeles · launch city",
    cityName: "Los Angeles",
    lead: "Los Angeles is the second launch city, alongside New York City. Petalswift composes to order and delivers inside Los Angeles city limits, not across every city in the county.",
    details: [
      "Phone (917) 460-5550. Email hello@petalswift.com.",
      "The studio address remains 37-68 74th Street, Jackson Heights, NY 11372.",
      "Nationwide delivery is later. These two cities start first.",
    ],
  },
  {
    slug: "florist-los-angeles-ca",
    title: "Florist in Los Angeles, CA",
    description:
      "Los Angeles florist delivery from Petalswift. Same-day in Downtown, Hollywood, the Eastside, Venice, Brentwood, Sherman Oaks, and Studio City.",
    h1: "A florist for the City of Los Angeles.",
    kicker: "Los Angeles, CA",
    cityName: "Los Angeles",
    lead: "Search “florist Los Angeles” and the city is Los Angeles itself. Petalswift covers neighborhoods inside that city, with a fee and a window for each area.",
    details: [
      "Downtown, Hollywood, Koreatown, and Mid-Wilshire share the $16 central fee.",
      "Silver Lake, Echo Park, Los Feliz, and Highland Park are Eastside, also $16.",
      "Venice, Brentwood, Westwood, Sherman Oaks, and Studio City are $18.",
    ],
  },
  {
    slug: "flowers-near-me-los-angeles",
    title: "Flowers Near Me Los Angeles",
    description:
      "Flowers near you in Los Angeles: enter a City of Los Angeles ZIP. 90028, 90026, 90291, and 91604 are in range. 90210 is not.",
    h1: "Flowers near you in Los Angeles.",
    kicker: "Los Angeles ZIP check",
    cityName: "Los Angeles",
    lead: "If the address is in the City of Los Angeles, check the ZIP. Hollywood 90028, Echo Park 90026, Venice 90291, and Studio City 91604 are in the launch. Beverly Hills 90210 is a different city and is not in range yet.",
    details: [
      "Same-day when ordered by 1:00pm PT.",
      "The delivery checker names the area and the fee.",
      "More cities, then nationwide, come after New York City and Los Angeles.",
    ],
  },
  {
    slug: "flower-delivery-downtown-los-angeles",
    title: "Flower Delivery Downtown Los Angeles",
    description:
      "Downtown Los Angeles flower delivery, $16. Same-day window 2:00–7:00pm PT. Add the building and suite.",
    h1: "Flower delivery in Downtown Los Angeles.",
    kicker: "Downtown · Central Los Angeles",
    cityName: "Los Angeles",
    areaSlug: "central",
    neighborhoodSlug: "downtown",
    lead: "Lofts and hotels in Downtown Los Angeles. Put the building name and suite in the note. The central fee is $16.",
    details: [
      "ZIPs include 90012, 90013, 90014, 90015, and 90017.",
      "Order by 1:00pm PT for same-day.",
      "Window 2:00–7:00pm PT.",
    ],
  },
  {
    slug: "flower-delivery-hollywood-los-angeles",
    title: "Flower Delivery Hollywood",
    description:
      "Hollywood flower delivery inside the City of Los Angeles. Fee $16. Same-day 2:00–7:00pm PT. Order by 1:00pm PT.",
    h1: "Flower delivery in Hollywood.",
    kicker: "Hollywood · Los Angeles",
    cityName: "Los Angeles",
    areaSlug: "central",
    neighborhoodSlug: "hollywood",
    lead: "Hollywood apartments and offices. Gate codes belong in the note. This is Los Angeles, and the central fee is $16.",
    details: [
      "90028 and 90038 are in range.",
      "Signature size is the usual apartment gift.",
      "Same-day window 2:00–7:00pm PT.",
    ],
  },
  {
    slug: "flower-delivery-silver-lake-los-angeles",
    title: "Flower Delivery Silver Lake",
    description:
      "Silver Lake flower delivery, Eastside Los Angeles. Fee $16. Tell us about stairs and gates. Order by 1:00pm PT.",
    h1: "Flower delivery in Silver Lake.",
    kicker: "Silver Lake · Eastside",
    cityName: "Los Angeles",
    areaSlug: "eastside",
    neighborhoodSlug: "silver-lake",
    lead: "Hillside houses in Silver Lake. Stairs and gates go in the delivery note. Eastside fee is $16.",
    details: [
      "90039 is the usual Silver Lake ZIP in this launch.",
      "Order by 1:00pm PT.",
      "Window 2:00–7:00pm PT.",
    ],
  },
  {
    slug: "flower-delivery-venice-los-angeles",
    title: "Flower Delivery Venice, Los Angeles",
    description:
      "Venice flower delivery in the City of Los Angeles, not Santa Monica. Westside fee $18. Window 3:00–8:00pm PT.",
    h1: "Flower delivery in Venice, Los Angeles.",
    kicker: "Venice · Westside",
    cityName: "Los Angeles",
    areaSlug: "westside",
    neighborhoodSlug: "venice",
    lead: "Venice walk streets are in the City of Los Angeles. Santa Monica is a different city and is not included. Westside fee is $18.",
    details: [
      "90291 is in range.",
      "Add the walk-street or gate.",
      "Order by 1:00pm PT for the 3:00–8:00pm PT window.",
    ],
  },
  {
    slug: "flower-delivery-sherman-oaks",
    title: "Flower Delivery Sherman Oaks",
    description:
      "Sherman Oaks flower delivery in the City of Los Angeles. Valley fee $18. Same-day window 3:00–8:00pm PT.",
    h1: "Flower delivery in Sherman Oaks.",
    kicker: "Sherman Oaks · Valley",
    cityName: "Los Angeles",
    areaSlug: "valley",
    neighborhoodSlug: "sherman-oaks",
    lead: "Sherman Oaks is inside Los Angeles. Houses and condos here use the $18 Valley fee.",
    details: [
      "91423 and 91403 are in range.",
      "Add a gate code when there is one.",
      "Order by 1:00pm PT.",
    ],
  },
  {
    slug: "flower-delivery-studio-city",
    title: "Flower Delivery Studio City",
    description:
      "Studio City flower delivery, City of Los Angeles. Fee $18. Same-day 3:00–8:00pm PT when ordered by 1:00pm PT.",
    h1: "Flower delivery in Studio City.",
    kicker: "Studio City · Valley",
    cityName: "Los Angeles",
    areaSlug: "valley",
    neighborhoodSlug: "studio-city",
    lead: "Studio City houses and courtyards are in Los Angeles. The Valley fee is $18.",
    details: [
      "91604 and 91602 are in range.",
      "Courtyard codes belong in the note.",
      "Same-day cutoff is 1:00pm PT.",
    ],
  },
];
