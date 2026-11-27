import { bouquetLandings } from "@/lib/bouquet-landings";
import {
  getLaArea,
  getLaNeighborhood,
  laMarketLandings,
  laNeighborhoodPath,
  losAngeles,
} from "@/lib/los-angeles";
import { neighborhoodPath, neighborhoods } from "@/lib/neighborhoods";
import { deliveryFeeForBorough } from "@/lib/ops";
import { site } from "@/lib/site";

export type MarketLanding = {
  slug: string;
  /** Title before the site template adds “| Petalswift”. */
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lead: string;
  details: string[];
  /** Schema city. New York City is the default for existing pages. */
  cityName?: "New York City" | "Los Angeles";
  boroughSlug?: string;
  /** Los Angeles area slug when this page is not a New York City borough page. */
  areaSlug?: string;
  neighborhoodSlug?: string;
  /** Keyword page that serves both launch cities. */
  serveBoth?: boolean;
};

/**
 * Keyword URLs in the same shape Petshiwu publishes for local search
 * (`/pet-supplies-queens-ny`, `/pet-supplies-jackson-heights-ny`, …),
 * written for flowers and only the facts Petalswift already publishes.
 */
export const marketLandings: MarketLanding[] = [
  {
    slug: "same-day-flower-delivery-nyc",
    title: "Same-Day Flower Delivery NYC",
    description:
      "Same-day flower delivery across all five NYC boroughs. Order by 4:00pm ET. Fees from $12, shown before you pay.",
    h1: "Same-day flower delivery across New York City.",
    kicker: "Five boroughs · order by 4:00pm ET",
    lead: `Petalswift composes bouquets to order at ${site.address.streetAddress}, ${site.address.addressLocality}, and delivers them the same day across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island when you order by ${site.orderCutoff}.`,
    details: [
      "Queens from $12 (4:00–8:00pm ET), Brooklyn $16, Manhattan and the Bronx $18, Staten Island $24.",
      "Classic, Signature, and Grand sizes, plus hatboxes and lily-free gifts.",
      `Taking orders from ${site.ordersStartDate}. Christmas Eve cutoff is ${site.christmasEveCutoff}.`,
    ],
  },
  {
    slug: "flower-delivery-nyc",
    title: "Flower Delivery NYC",
    description:
      "New York City flower delivery with published fees and email or SMS updates. Call (917) 460-5550.",
    h1: "Flower delivery in New York City.",
    kicker: "New York City handoff",
    lead: "Petalswift is a flower delivery company for New York City and Los Angeles. The office address is not a walk-in shop. We compose to order, then hand off across the city.",
    details: [
      `Phone ${site.phoneDisplay}. Email ${site.email}.`,
      "Add doorman, buzzer, or lobby notes so the first handoff sticks.",
      "Shop arrangements online or start an order by phone from December 10, 2026.",
    ],
  },
  {
    slug: "online-florist-nyc",
    title: "Online Florist NYC",
    description:
      "Order from an online New York City florist. Petalswift delivers same-day across five boroughs. Fees are shown before checkout.",
    h1: "An online florist for New York City.",
    kicker: "Order online · composed in Queens",
    lead: "Choose a bouquet, a size, and a ZIP. Petalswift routes it across New York City with the borough fee and window printed before you pay.",
    details: [
      "Filter the catalog by occasion, style, color, and bloom.",
      "Hatboxes, hand-tied bouquets, and vase arrangements are listed with prices.",
      "Corporate and timed sends can email the atelier.",
    ],
  },
  {
    slug: "flowers-near-me-nyc",
    title: "Flowers Near Me NYC",
    description:
      "Looking for flowers near you in New York City? Petalswift delivers to Queens, Brooklyn, Manhattan, the Bronx, and Staten Island.",
    h1: "Flowers near you in New York City.",
    kicker: "Local atelier · citywide delivery",
    lead: "If you are in New York City and searching for flowers nearby, Petalswift delivers. The office is not a walk-in cooler.",
    details: [
      "Same-day in the neighborhood list below when ordered by 4:00pm ET.",
      "Enter a ZIP on the homepage to confirm we cover it.",
      "Neighborhood guides name the handoff details that matter on that block.",
    ],
  },
  {
    slug: "luxury-bouquets-nyc",
    title: "Luxury Bouquets NYC",
    description:
      "Luxury bouquets in New York City: Classic, Signature, and Grand compositions from $72, delivered same-day.",
    h1: "Luxury bouquets, composed for New York City rooms.",
    kicker: "Classic · Signature · Grand",
    lead: "Price follows stem count and presence in the room. Classic is about 15–20 stems, Signature 25–35, and Grand is statement scale for tables, suites, and client gifts.",
    details: [
      "Soft garden roses, architectural whites, and holiday color are in the catalog.",
      "A note card can go with every bouquet.",
      "Same-day luxury delivery still follows the 4:00pm ET cutoff.",
    ],
  },
  {
    slug: "florist-queens-ny",
    title: "Florist in Queens, NY",
    description:
      "Queens flower delivery from $12, window 4:00–8:00pm ET. Order by 4:00pm ET.",
    h1: "Flower delivery in Queens.",
    kicker: "Queens · from $12",
    boroughSlug: "queens",
    lead: "Queens deliveries are $12, with a same-day window of 4:00–8:00pm ET. Office: 37-68 74th Street, Jackson Heights, NY 11372.",
    details: [
      "Astoria, Long Island City, Forest Hills, and Flushing each have a delivery guide.",
      "Walk-ups need a floor and buzzer. Towers need the package room or desk name.",
      "Local questions: (917) 460-5550 or hello@petalswift.com.",
    ],
  },
  {
    slug: "flower-delivery-brooklyn-ny",
    title: "Flower Delivery Brooklyn, NY",
    description:
      "Brooklyn flower delivery from $16. Same-day window 5:00–9:00pm ET for Williamsburg, Park Slope, Brooklyn Heights, DUMBO, and Bushwick.",
    h1: "Flower delivery in Brooklyn.",
    kicker: "Brooklyn · $16",
    boroughSlug: "brooklyn",
    lead: "Petalswift delivers composed bouquets across Brooklyn the same day when you order by 4:00pm ET. The Brooklyn fee is $16, with a 5:00–9:00pm ET window.",
    details: [
      "Brownstones, lofts, and waterfront towers are all in range.",
      "Add stoop versus buzzer instructions so the courier does not guess.",
      "Williamsburg, Park Slope, Brooklyn Heights, DUMBO, and Bushwick have their own pages.",
    ],
  },
  {
    slug: "flower-delivery-manhattan-ny",
    title: "Flower Delivery Manhattan, NY",
    description:
      "Manhattan flower delivery from $18. Same-day 5:00–9:00pm ET for Midtown, UES, UWS, West Village, Chelsea, and Harlem.",
    h1: "Flower delivery in Manhattan.",
    kicker: "Manhattan · $18",
    boroughSlug: "manhattan",
    lead: "Hotel desks, doorman buildings, and downtown walk-ups. Manhattan delivery is $18, same-day window 5:00–9:00pm ET, ordered by 4:00pm ET.",
    details: [
      "Name the recipient the way the desk has them listed.",
      "Lobby, suite, and mobile number shorten Midtown handoffs.",
      "Guides cover the Upper East Side, Upper West Side, West Village, Chelsea, Midtown, and Harlem.",
    ],
  },
  {
    slug: "flower-delivery-bronx-ny",
    title: "Flower Delivery Bronx, NY",
    description:
      "Bronx flower delivery from $18. Same-day window 5:00–8:30pm ET, including Riverdale and Mott Haven. Order by 4:00pm ET.",
    h1: "Flower delivery in the Bronx.",
    kicker: "The Bronx · $18",
    boroughSlug: "bronx",
    lead: "Petalswift delivers to the Bronx for $18. The same-day window is 5:00–8:30pm ET.",
    details: [
      "Gate codes and buzzers belong in the delivery note.",
      "Riverdale and Mott Haven have neighborhood pages.",
      "Lily-free options are available when the room needs them.",
    ],
  },
  {
    slug: "flower-delivery-staten-island-ny",
    title: "Flower Delivery Staten Island",
    description:
      "Staten Island flower delivery from $24. Same-day most weekdays, window 5:00–8:00pm ET. St. George and nearby homes included.",
    h1: "Flower delivery on Staten Island.",
    kicker: "Staten Island · $24",
    boroughSlug: "staten-island",
    lead: "Staten Island is the longest run. The fee is $24, the same-day window is 5:00–8:00pm ET, and next-day is often smoother on peak weekends.",
    details: [
      "Order by 4:00pm ET for same-day. Christmas Eve cutoff is 11:00am ET.",
      "St. George has its own delivery guide.",
      "The fee is shown before payment, not after.",
    ],
  },
  {
    slug: "flower-delivery-astoria-queens-ny",
    title: "Flower Delivery Astoria, Queens",
    description:
      "Astoria flower delivery. Queens fee from $12, same-day when ordered by 4:00pm ET.",
    h1: "Flower delivery in Astoria, Queens.",
    kicker: "Astoria · Queens",
    boroughSlug: "queens",
    neighborhoodSlug: "astoria",
    lead: "Astoria is a short run from the atelier. Walk-ups need a buzzer and floor. The Queens fee starts at $12.",
    details: [
      "Ditmars, Steinway, and Astoria Park-area addresses are in range.",
      "Same-day when ordered by 4:00pm ET.",
      "See the Astoria neighborhood guide for handoff notes.",
    ],
  },
  {
    slug: "flower-delivery-long-island-city-queens-ny",
    title: "Flower Delivery Long Island City",
    description:
      "Long Island City flower delivery for waterfront towers and offices. Queens fee from $12. Lobby notes help the handoff.",
    h1: "Flower delivery in Long Island City.",
    kicker: "Long Island City · Queens",
    boroughSlug: "queens",
    neighborhoodSlug: "long-island-city",
    lead: "LIC towers want a building name and a package-room or desk contact. Petalswift sends lobby-ready bouquets on the Queens fee.",
    details: [
      "Court Square and Vernon Boulevard addresses are covered.",
      "Signature size is the usual office and host gift.",
      "Same-day window for Queens is 4:00–8:00pm ET.",
    ],
  },
  {
    slug: "flower-delivery-williamsburg-brooklyn-ny",
    title: "Flower Delivery Williamsburg",
    description:
      "Williamsburg flower delivery, Brooklyn fee $16. Same-day 5:00–9:00pm ET for lofts and walk-ups. Order by 4:00pm ET.",
    h1: "Flower delivery in Williamsburg, Brooklyn.",
    kicker: "Williamsburg · Brooklyn",
    boroughSlug: "brooklyn",
    neighborhoodSlug: "williamsburg",
    lead: "Lofts and walk-ups along Bedford and the waterfront. Add the courier code. Brooklyn delivery is $16.",
    details: [
      "Garden-style and lily-free bouquets are common weekend sends.",
      "Order by 4:00pm ET for same-day.",
      "The Williamsburg guide lists the handoff details.",
    ],
  },
  {
    slug: "flower-delivery-park-slope-brooklyn-ny",
    title: "Flower Delivery Park Slope",
    description:
      "Park Slope flower delivery for brownstones and stoops. Brooklyn fee $16, same-day window 5:00–9:00pm ET.",
    h1: "Flower delivery in Park Slope.",
    kicker: "Park Slope · Brooklyn",
    boroughSlug: "brooklyn",
    neighborhoodSlug: "park-slope",
    lead: "Stoops along Prospect Park West and 7th Avenue need a leave-versus-buzzer note. Petalswift delivers on the Brooklyn fee.",
    details: [
      "Classic and Signature sizes fit most Slope rooms.",
      "Teacher gifts and family celebrations are typical.",
      "Confirm the Brooklyn ZIP before payment.",
    ],
  },
  {
    slug: "flower-delivery-upper-west-side-nyc",
    title: "Flower Delivery Upper West Side",
    description:
      "Upper West Side flower delivery, Manhattan fee $18. Same-day 5:00–9:00pm ET for doorman buildings and walk-ups.",
    h1: "Flower delivery on the Upper West Side.",
    kicker: "Upper West Side · Manhattan",
    boroughSlug: "manhattan",
    neighborhoodSlug: "upper-west-side",
    lead: "Central Park West, Amsterdam, and the blocks near Lincoln Center. Doorman desks need the resident’s name. Walk-ups need a floor and buzzer.",
    details: [
      "Manhattan fee $18. Window 5:00–9:00pm ET.",
      "Signature size is the usual host and birthday send.",
      "Order by 4:00pm ET for same-day.",
    ],
  },
  {
    slug: "flower-delivery-upper-east-side-nyc",
    title: "Flower Delivery Upper East Side",
    description:
      "Upper East Side flower delivery for doorman buildings. Manhattan fee $18, same-day when ordered by 4:00pm ET.",
    h1: "Flower delivery on the Upper East Side.",
    kicker: "Upper East Side · Manhattan",
    boroughSlug: "manhattan",
    neighborhoodSlug: "upper-east-side",
    lead: "Park Avenue and Museum Mile buildings want the name on the desk list and the apartment number. Petalswift routes these on the Manhattan fee.",
    details: [
      "Anniversary and sympathy sends are common. Lily-free is available.",
      "Same-day window 5:00–9:00pm ET.",
      "The Upper East Side guide has the handoff notes.",
    ],
  },
  {
    slug: "flower-delivery-dumbo-brooklyn-ny",
    title: "Flower Delivery DUMBO, Brooklyn",
    description:
      "DUMBO flower delivery for lofts and offices. Brooklyn fee $16. Add the suite and reception contact for a clean handoff.",
    h1: "Flower delivery in DUMBO.",
    kicker: "DUMBO · Brooklyn",
    boroughSlug: "brooklyn",
    neighborhoodSlug: "dumbo",
    lead: "Waterfront lofts and Jay Street offices. Put the suite and the front-desk name in the note. Brooklyn fee is $16.",
    details: [
      "Architectural arrangements suit loft rooms.",
      "Same-day when ordered by 4:00pm ET.",
      "Window 5:00–9:00pm ET.",
    ],
  },
  {
    slug: "flower-delivery-west-village-nyc",
    title: "Flower Delivery West Village",
    description:
      "West Village flower delivery for townhouses and walk-ups. Manhattan fee $18. Add stoop or intercom notes.",
    h1: "Flower delivery in the West Village.",
    kicker: "West Village · Manhattan",
    boroughSlug: "manhattan",
    neighborhoodSlug: "west-village",
    lead: "Townhouses around Bleecker and Hudson need a stoop-versus-intercom note. Petalswift delivers hand-tied bouquets on the Manhattan fee.",
    details: [
      "Romance and thank-you sends are the usual order.",
      "Friday same-day needs the 4:00pm ET cutoff.",
      "See the West Village guide for block-level notes.",
    ],
  },
  {
    slug: "flower-delivery-chelsea-nyc",
    title: "Flower Delivery Chelsea, NYC",
    description:
      "Chelsea flower delivery for galleries, lofts, and homes. Manhattan fee $18, same-day window 5:00–9:00pm ET.",
    h1: "Flower delivery in Chelsea.",
    kicker: "Chelsea · Manhattan",
    boroughSlug: "manhattan",
    neighborhoodSlug: "chelsea",
    lead: "Gallery openings and loft dinners in Chelsea. Name the front desk if it is an office or gallery. Manhattan delivery is $18.",
    details: [
      "Architectural whites are a common Chelsea choice.",
      "High Line residences are in the Manhattan window.",
      "Order by 4:00pm ET for same-day.",
    ],
  },
  {
    slug: "flower-delivery-brooklyn-heights-ny",
    title: "Flower Delivery Brooklyn Heights",
    description:
      "Brooklyn Heights flower delivery for co-ops and the Promenade blocks. Brooklyn fee $16. List the resident as the desk has them.",
    h1: "Flower delivery in Brooklyn Heights.",
    kicker: "Brooklyn Heights · Brooklyn",
    boroughSlug: "brooklyn",
    neighborhoodSlug: "brooklyn-heights",
    lead: "Promenade residences and Montague Street. Co-op desks need the resident’s name as listed. The Brooklyn fee is $16.",
    details: [
      "Sympathy and congratulations are frequent. Ask for lily-free if needed.",
      "Same-day window 5:00–9:00pm ET.",
      "The Brooklyn Heights guide has the rest of the handoff notes.",
    ],
  },
  {
    slug: "flower-delivery-forest-hills-queens-ny",
    title: "Flower Delivery Forest Hills",
    description:
      "Forest Hills flower delivery for homes and co-ops. Queens fee from $12, same-day window 4:00–8:00pm ET.",
    h1: "Flower delivery in Forest Hills.",
    kicker: "Forest Hills · Queens",
    boroughSlug: "queens",
    neighborhoodSlug: "forest-hills",
    lead: "Co-ops near Austin Street and homes toward Forest Hills Gardens. Use the resident’s name as the desk has it. Queens fee from $12.",
    details: [
      "Holiday centerpieces and sympathy designs are available.",
      "Same-day cutoff is 4:00pm ET.",
      "Window 4:00–8:00pm ET.",
    ],
  },
  {
    slug: "flower-delivery-flushing-queens-ny",
    title: "Flower Delivery Flushing, Queens",
    description:
      "Flushing flower delivery. Queens fee from $12. Grand sizes for family gatherings. Order by 4:00pm ET.",
    h1: "Flower delivery in Flushing.",
    kicker: "Flushing · Queens",
    boroughSlug: "queens",
    neighborhoodSlug: "flushing",
    lead: "Family celebrations around Main Street and the residential towers. Petalswift routes these on the Queens fee.",
    details: [
      "A short note for building staff helps the handoff.",
      "Grand size is the usual family-gathering choice.",
      "Confirm the Queens ZIP before payment.",
    ],
  },
  {
    slug: "flower-delivery-harlem-nyc",
    title: "Flower Delivery Harlem, NYC",
    description:
      "Harlem flower delivery, Manhattan fee $18. Same-day 5:00–9:00pm ET for brownstones and residences. Order by 4:00pm ET.",
    h1: "Flower delivery in Harlem.",
    kicker: "Harlem · Manhattan",
    boroughSlug: "manhattan",
    neighborhoodSlug: "harlem",
    lead: "Brownstones and residences across Harlem. Put the buzzer or doorman instruction in the note. Manhattan fee is $18.",
    details: [
      "Celebrations and sympathy sends are both common.",
      "Lily-free on request.",
      "Same-day window 5:00–9:00pm ET.",
    ],
  },
  {
    slug: "flower-delivery-bushwick-brooklyn-ny",
    title: "Flower Delivery Bushwick",
    description:
      "Bushwick flower delivery for lofts and walk-ups. Brooklyn fee $16, same-day window 5:00–9:00pm ET.",
    h1: "Flower delivery in Bushwick.",
    kicker: "Bushwick · Brooklyn",
    boroughSlug: "brooklyn",
    neighborhoodSlug: "bushwick",
    lead: "Warehouse lofts and walk-ups near Myrtle-Broadway. Buzzer codes belong in the note. Brooklyn delivery is $16.",
    details: [
      "Garden-style bouquets are a frequent weekend order.",
      "Order by 4:00pm ET for same-day.",
      "The Bushwick guide covers the handoff details.",
    ],
  },
  ...laMarketLandings,
  ...bouquetLandings,
];

export function getMarketLanding(slug: string) {
  return marketLandings.find((page) => page.slug === slug);
}

export function marketLandingPath(page: MarketLanding) {
  return `/${page.slug}`;
}

export function marketLandingLinks(page: MarketLanding) {
  const links: { href: string; label: string }[] = [
    { href: "/arrangements", label: "Shop arrangements" },
    { href: "/delivery", label: "Fees and windows" },
  ];
  if (page.serveBoth) {
    links.push(
      { href: "/nyc", label: "New York City" },
      { href: "/los-angeles", label: "Los Angeles" },
    );
  } else if (page.areaSlug) {
    links.push({ href: losAngeles.path, label: "Los Angeles guides" });
    links.push({
      href: `/los-angeles/${page.areaSlug}`,
      label: "Area delivery guide",
    });
    if (page.neighborhoodSlug) {
      const neighborhood = getLaNeighborhood(page.areaSlug, page.neighborhoodSlug);
      if (neighborhood) {
        links.push({
          href: laNeighborhoodPath(neighborhood),
          label: `${neighborhood.name} guide`,
        });
      }
    }
  } else {
    links.push({ href: "/nyc", label: "New York City guides" });
    if (page.boroughSlug) {
      links.push({
        href: `/nyc/${page.boroughSlug}`,
        label: "Borough delivery guide",
      });
    }
    if (page.boroughSlug && page.neighborhoodSlug) {
      const neighborhood = neighborhoods.find(
        (n) => n.boroughSlug === page.boroughSlug && n.slug === page.neighborhoodSlug,
      );
      if (neighborhood) {
        links.push({
          href: neighborhoodPath(neighborhood),
          label: `${neighborhood.name} guide`,
        });
      }
    }
  }

  if (bouquetLandings.some((item) => item.slug === page.slug)) {
    for (const other of bouquetLandings) {
      if (other.slug === page.slug) continue;
      links.push({ href: `/${other.slug}`, label: other.title });
      if (links.length >= 8) break;
    }
  }
  return links;
}

export function marketLandingFee(page: MarketLanding) {
  if (page.areaSlug) {
    const area = getLaArea(page.areaSlug);
    return area ? { fee: area.fee, sameDayWindow: area.sameDayWindow } : null;
  }
  if (!page.boroughSlug) return null;
  const zone = deliveryFeeForBorough(page.boroughSlug);
  return zone ? { fee: zone.fee, sameDayWindow: zone.sameDayWindow } : null;
}
