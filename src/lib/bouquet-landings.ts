import { products, type Product } from "@/lib/catalog";
import type { MarketLanding } from "@/lib/market-landings";

const bothCities =
  "Petalswift delivers in New York City’s five boroughs and in neighborhoods inside the City of Los Angeles. Beverly Hills and Santa Monica are separate cities and are not included.";
const newYorkCity =
  "Delivery covers Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Fees start at $12. Order by 4:00pm ET for same-day.";
const losAngelesCity =
  "Delivery covers neighborhoods inside the City of Los Angeles, including Downtown, Hollywood, the Eastside, Venice, Brentwood, Sherman Oaks, and Studio City. Beverly Hills and Santa Monica are not included. Order by 4:00pm PT for same-day.";

function bouquetFaqs(label: string, where: string) {
  return [
    {
      question: `Can I order a ${label} for same-day delivery?`,
      answer: `Yes. Order by 4:00pm ET in New York City and by 4:00pm PT in Los Angeles. ${where}`,
    },
    {
      question: `How much does a ${label} cost?`,
      answer:
        "Petalswift bouquets start at $78 for Classic. Signature and Grand are larger. The delivery fee is separate and is shown before you pay.",
    },
    {
      question: `Where can you deliver a ${label}?`,
      answer: where,
    },
    {
      question: `Is a ${label} made to order?`,
      answer:
        "Yes. The bouquet is composed for that order. Petalswift is a brand of AJ Fashion Inc. The office at 37-68 74th Street, Jackson Heights, NY 11372 is not a walk-in flower shop.",
    },
  ];
}

function landing(
  page: Omit<MarketLanding, "faqs"> & { label: string; where: string },
): MarketLanding {
  const { label, where, ...rest } = page;
  return { ...rest, faqs: bouquetFaqs(label, where) };
}

/** Head terms people type, built like the collection pages that rank: products, price, cutoff, and FAQs. */
export const bouquetLandings: MarketLanding[] = [
  landing({
    slug: "flower-bouquets",
    title: "Flower Bouquets, Same-Day NYC and LA",
    description:
      "Flower bouquets from $78 with same-day delivery in New York City and Los Angeles. Order by 4:00pm. Fees shown before you pay.",
    h1: "Flower bouquets",
    kicker: "Same-day · New York City and Los Angeles",
    serveBoth: true,
    label: "flower bouquet",
    where: bothCities,
    lead: "Shop flower bouquets composed to order and delivered same-day in New York City and the City of Los Angeles. Classic starts at $78. Order by 4:00pm local time.",
    details: [
      "Order by 4:00pm ET in New York City and 4:00pm PT in Los Angeles.",
      "Hand-tied bouquets, roses, mixed blooms, and birthday sizes are in this collection.",
      "Call (917) 460-5550 if you need help choosing a size.",
    ],
  }),
  landing({
    slug: "flower-bouquet",
    title: "Flower Bouquet Delivery, NYC and LA",
    description:
      "Order a flower bouquet for same-day delivery in New York City or Los Angeles. From $78. Add a note. Fees show before you pay.",
    h1: "Flower bouquet delivery",
    kicker: "Order by 4:00pm",
    serveBoth: true,
    label: "flower bouquet",
    where: bothCities,
    lead: "A flower bouquet from Petalswift is one finished bunch with a note, a size, and a delivery fee you see first. Same-day in both launch cities when you order by 4:00pm.",
    details: [
      "Classic, Signature, and Grand are the three sizes.",
      "The office is not a walk-in shop. Delivery is how the bouquet arrives.",
      "Put the buzzer, gate code, or desk name in the note.",
    ],
  }),
  landing({
    slug: "bouquet-of-flowers",
    title: "Bouquet of Flowers, NYC and LA",
    description:
      "Send a bouquet of flowers in New York City or Los Angeles. Mixed blooms and roses from $78. Same-day when you order by 4:00pm.",
    h1: "Bouquet of flowers",
    kicker: "Mixed stems · one bunch",
    serveBoth: true,
    label: "bouquet of flowers",
    where: bothCities,
    lead: "A bouquet of flowers is the usual gift: color, greenery, and a note, tied so it looks finished on arrival. These are the bunches Petalswift delivers in New York City and Los Angeles.",
    details: [
      "Prices on this page are the bouquet price. Delivery is extra.",
      "Same-day cutoff is 4:00pm ET and 4:00pm PT.",
      "Lily-free options are marked on the bouquet.",
    ],
  }),
  landing({
    slug: "same-day-flower-bouquet",
    title: "Same-Day Flower Bouquet, NYC and LA",
    description:
      "Same-day flower bouquet delivery in New York City by 4:00pm ET and in Los Angeles by 4:00pm PT. From $78. Windows shown before you pay.",
    h1: "Same-day flower bouquet",
    kicker: "Order by 4:00pm",
    serveBoth: true,
    label: "same-day flower bouquet",
    where: bothCities,
    match: { sameDay: true },
    lead: "These flower bouquets can go out the same day. Order by 4:00pm ET in New York City or 4:00pm PT in Los Angeles. The afternoon window depends on the borough or Los Angeles area.",
    details: [
      "Queens and central Los Angeles windows start at 4:00pm.",
      "Manhattan and westside windows start at 5:00pm.",
      "Christmas Eve in New York City cuts off at 11:00am ET.",
    ],
  }),
  landing({
    slug: "rose-bouquet",
    title: "Rose Bouquet, Same-Day NYC and LA",
    description:
      "Rose bouquets from $78 for New York City and Los Angeles. Garden roses, composed to order. Same-day by 4:00pm.",
    h1: "Rose bouquet",
    kicker: "Roses · from $78",
    serveBoth: true,
    label: "rose bouquet",
    where: bothCities,
    match: { bloom: "roses" },
    lead: "Rose bouquets for anniversaries, apologies, and birthdays. Petalswift uses garden roses in a composed bunch, starting at $78, with same-day delivery in both cities.",
    details: [
      "Manhattan Morning is a soft white and blush rose bouquet at $78.",
      "Ask for a color story in the note.",
      "Order by 4:00pm local time for same-day rose delivery.",
    ],
  }),
  landing({
    slug: "birthday-flower-bouquet",
    title: "Birthday Flower Bouquet, NYC and LA",
    description:
      "Birthday flower bouquets from $78 with same-day delivery in New York City and Los Angeles. Add a note. Order by 4:00pm.",
    h1: "Birthday flower bouquet",
    kicker: "Birthday · same-day",
    serveBoth: true,
    label: "birthday flower bouquet",
    where: bothCities,
    match: { occasion: "birthday" },
    lead: "Birthday flower bouquets in brighter color, with a note and a size that fits the table. Same-day in New York City and Los Angeles when you order by 4:00pm.",
    details: [
      "Signature is the usual birthday size.",
      "Include the recipient’s name for doormen and front desks.",
      "Delivery fees are shown before you pay.",
    ],
  }),
  landing({
    slug: "luxury-flower-bouquet",
    title: "Luxury Flower Bouquet, NYC and LA",
    description:
      "Luxury flower bouquets from $98 in New York City and Los Angeles. Signature and Grand sizes. Same-day by 4:00pm.",
    h1: "Luxury flower bouquet",
    kicker: "Signature and Grand",
    serveBoth: true,
    label: "luxury flower bouquet",
    where: bothCities,
    match: { luxury: true },
    lead: "Luxury flower bouquets are the fuller Signature and Grand sizes, from $98. Same stems standard, more of them, delivered same-day in New York City and Los Angeles.",
    details: [
      "Grand is the statement bouquet for tables, suites, and clients.",
      "Classic everyday bouquets start at $78 on the main flower bouquets page.",
      "Same-day still ends at 4:00pm in each city.",
    ],
  }),
  landing({
    slug: "mixed-flower-bouquet",
    title: "Mixed Flower Bouquet, NYC and LA",
    description:
      "Mixed flower bouquets for New York City and Los Angeles. Seasonal stems in one bunch, from $78. Same-day by 4:00pm.",
    h1: "Mixed flower bouquet",
    kicker: "Mixed blooms",
    serveBoth: true,
    label: "mixed flower bouquet",
    where: bothCities,
    match: { bloom: "mixed" },
    lead: "A mixed flower bouquet uses more than one bloom: roses with seasonal stems, greenery, and a color chosen for the room. Same-day in both cities by 4:00pm.",
    details: [
      "Each card lists the size and the price of the bouquet.",
      "Lily-free mixed bunches are marked.",
      "Delivery is priced by borough in New York City and by area in Los Angeles.",
    ],
  }),
  landing({
    slug: "hand-tied-flower-bouquet",
    title: "Hand-Tied Flower Bouquet, NYC and LA",
    description:
      "Hand-tied flower bouquets for New York City and Los Angeles. Tied in the hand, from $78. Same-day by 4:00pm.",
    h1: "Hand-tied flower bouquet",
    kicker: "Hand-tied",
    serveBoth: true,
    label: "hand-tied flower bouquet",
    where: bothCities,
    match: { styles: ["hand-tied", "hand-tied-vase"] },
    lead: "A hand-tied flower bouquet is gathered and tied so the stems spiral. It travels well to apartments, stoops, and offices in New York City and Los Angeles.",
    details: [
      "Choose a vase style only if the room needs one.",
      "Prices below are the bouquet, before the delivery fee.",
      "Order by 4:00pm local time for same-day.",
    ],
  }),
  landing({
    slug: "flower-bouquet-new-york-city",
    title: "Flower Bouquet Delivery New York City",
    description:
      "Flower bouquet delivery in New York City. All five boroughs, from $78. Order by 4:00pm ET. Fees from $12.",
    h1: "Flower bouquet delivery in New York City",
    kicker: "Five boroughs · 4:00pm ET",
    cityName: "New York City",
    label: "flower bouquet in New York City",
    where: newYorkCity,
    lead: "Flower bouquets for New York City doormen, walk-ups, and office desks. Petalswift delivers across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
    details: [
      "Order by 4:00pm ET. Christmas Eve is 11:00am ET.",
      "Queens delivery starts at $12. Manhattan and the Bronx are $18.",
      "Put the buzzer, suite, or desk name in the note.",
    ],
  }),
  landing({
    slug: "flower-bouquet-los-angeles",
    title: "Flower Bouquet Delivery Los Angeles",
    description:
      "Flower bouquet delivery in the City of Los Angeles, from $78. Order by 4:00pm PT. Beverly Hills is not included.",
    h1: "Flower bouquet delivery in Los Angeles",
    kicker: "City of Los Angeles · 4:00pm PT",
    cityName: "Los Angeles",
    label: "flower bouquet in Los Angeles",
    where: losAngelesCity,
    lead: "Flower bouquets for the City of Los Angeles: Downtown, Hollywood, the Eastside, Venice, Brentwood, Sherman Oaks, and Studio City. Beverly Hills and Santa Monica are not in this launch.",
    details: [
      "Order by 4:00pm PT for same-day.",
      "Central and eastside delivery is $16. Westside and the Valley are $18.",
      "Gate codes and walk-street notes belong on the order.",
    ],
  }),
];

export function productsForBouquet(page: MarketLanding): Product[] {
  const match = page.match;
  return products
    .filter((product) => {
      if (!match) return true;
      if (match.occasion && !product.occasions.includes(match.occasion)) return false;
      if (match.bloom && !product.blooms.includes(match.bloom)) return false;
      if (match.styles && !match.styles.some((style) => product.styles.includes(style))) {
        return false;
      }
      if (match.sameDay && !product.sameDay) return false;
      if (match.luxury && product.price < 98) return false;
      return true;
    })
    .sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || a.price - b.price);
}
