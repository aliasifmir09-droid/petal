import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const date = "2026-11-27";

const photos = [
  ["https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80", "Mixed flower bouquet"],
  ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80", "Peach and blush bouquet"],
  ["https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80", "Soft rose bouquet"],
  ["https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1600&q=80", "Florist composing a bouquet"],
  ["https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1600&q=80", "Hand-tied bouquet"],
  ["https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1600&q=80", "White floral arrangement"],
];

const nycZones = {
  manhattan: { fee: 18, window: "5:00–9:00pm ET", next: "10:00am–7:00pm ET" },
  brooklyn: { fee: 16, window: "5:00–9:00pm ET", next: "10:00am–7:00pm ET" },
  queens: { fee: 12, window: "4:00–8:00pm ET", next: "10:00am–6:00pm ET" },
  bronx: { fee: 18, window: "5:00–8:30pm ET", next: "10:00am–6:00pm ET" },
  "staten-island": { fee: 24, window: "5:00–8:00pm ET", next: "11:00am–6:00pm ET" },
};

const laZones = {
  central: { fee: 16, window: "4:00–8:00pm PT", name: "central Los Angeles" },
  eastside: { fee: 16, window: "4:00–8:00pm PT", name: "the Eastside" },
  westside: { fee: 18, window: "5:00–9:00pm PT", name: "the Westside" },
  valley: { fee: 18, window: "5:00–9:00pm PT", name: "the San Fernando Valley neighborhoods inside the city" },
};

const nycNeighborhoods = [
  ["midtown", "Midtown", "manhattan", "Times Square hotels, Grand Central offices, and the Bryant Park area", "Name the hotel desk or the lobby and the recipient. Midtown handoffs fail when the note only says the street."],
  ["upper-east-side", "Upper East Side", "manhattan", "Museum Mile and Park Avenue doorman buildings", "Write the doorman desk and the apartment number. Anniversary and sympathy sends are common here, and lily-free is available."],
  ["upper-west-side", "Upper West Side", "manhattan", "Central Park West, Lincoln Center, and Amsterdam Avenue residences", "Walk-ups need the floor and the buzzer. High-rises need the desk name."],
  ["west-village", "West Village", "manhattan", "Bleecker Street, Hudson Street townhouses, and the Washington Square vicinity", "Townhouses often have no doorman. Put the buzzer and a phone number in the note."],
  ["chelsea", "Chelsea", "manhattan", "galleries, High Line residences, and offices west of Seventh Avenue", "Gallery and office sends need the company name and the suite, not only the avenue."],
  ["harlem", "Harlem", "manhattan", "the 125th Street corridor and brownstone blocks", "Brownstones need the bell name. Avenues with larger buildings need the apartment."],
  ["williamsburg", "Williamsburg", "brooklyn", "Bedford Avenue, the waterfront towers, and the McCarren vicinity", "Lofts and walk-ups need a buzzer code. Waterfront towers need the desk."],
  ["park-slope", "Park Slope", "brooklyn", "Prospect Park West, Seventh Avenue, and brownstone blocks", "A garden-style hand-tied bouquet is the usual Slope gift. Stoop deliveries need a working bell."],
  ["brooklyn-heights", "Brooklyn Heights", "brooklyn", "the Promenade, Montague Street, and Court Street offices", "Promenade buildings are often doorman desks. Court Street offices need the firm name."],
  ["dumbo", "DUMBO", "brooklyn", "waterfront towers, bridge-view apartments, and Jay Street offices", "Use the building name. DUMBO towers share streets, and a street number alone is not enough."],
  ["bushwick", "Bushwick", "brooklyn", "Myrtle-Broadway, warehouse lofts, and residential walk-ups", "Lofts need the buzzer and the floor. A weekend garden bouquet is a frequent request."],
  ["astoria", "Astoria", "queens", "Ditmars, Steinway, and the Astoria Park area", "Queens delivery starts at $12. Astoria walk-ups need the bell name."],
  ["long-island-city", "Long Island City", "queens", "waterfront towers, Court Square offices, and Vernon Boulevard residences", "Name the tower and the apartment. Court Square offices need the company and the floor."],
  ["forest-hills", "Forest Hills", "queens", "Austin Street, the Gardens vicinity, and Queens Boulevard residences", "Houses and apartments both show up here. Add a side door or buzzer if there is one."],
  ["flushing", "Flushing", "queens", "the Main Street corridor, residential towers, and family homes", "Family celebrations are a common reason to send. Put the apartment and a phone number in the note."],
  ["riverdale", "Riverdale", "bronx", "Riverdale residences, family homes, and campus-area addresses", "Houses need a clear entrance note. The Bronx same-day window ends at 8:30pm ET."],
  ["mott-haven", "Mott Haven", "bronx", "waterfront lofts, newer residences, and local studios", "Lofts need the buzzer. The Bronx fee is $18."],
  ["st-george", "St. George", "staten-island", "the ferry area, nearby residences, and downtown Staten Island offices", "Staten Island delivery is $24. The same-day window is 5:00–8:00pm ET."],
];

const laNeighborhoods = [
  ["downtown", "Downtown", "central", "Historic Core lofts, South Park towers, and hotel desks", "Name the front desk and the unit. Downtown towers share streets."],
  ["hollywood", "Hollywood", "central", "apartments and production offices around Hollywood Boulevard", "Gate codes belong in the note. A Signature bouquet fits most Hollywood apartments."],
  ["koreatown", "Koreatown", "central", "Wilshire towers and residential high-rises", "High-rises need the building name and the apartment. Celebrations here are often same-day."],
  ["mid-wilshire", "Mid-Wilshire", "central", "Miracle Mile apartments and museum-adjacent homes", "Apartments need the buzzer. Houses need the entrance."],
  ["silver-lake", "Silver Lake", "eastside", "reservoir streets, hillside houses, and Sunset-adjacent homes", "Hillside houses need a gate or stair note. The Eastside fee is $16."],
  ["echo-park", "Echo Park", "eastside", "walk-up residences and local houses", "Walk-ups need the bell. Do not assume a doorman."],
  ["los-feliz", "Los Feliz", "eastside", "Los Feliz Boulevard, hillside homes, and courtyard apartments", "Courtyard apartments need the building letter and the unit."],
  ["highland-park", "Highland Park", "eastside", "York Boulevard and family houses", "Houses need the porch or side gate in the note. The Eastside window is 4:00–8:00pm PT."],
  ["venice", "Venice", "westside", "walk streets, Abbot Kinney area homes, and houses near the canals", "Walk streets need the walk name, not only a nearby drive street. Venice is inside the City of Los Angeles."],
  ["brentwood", "Brentwood", "westside", "residential streets and gated houses inside the City of Los Angeles", "Gate codes go in the note. Beverly Hills is a different city and is not on this route."],
  ["westwood", "Westwood", "westside", "Village apartments, office suites, and residential towers", "Apartments need the unit. Offices need the suite. The Westside fee is $18."],
  ["sherman-oaks", "Sherman Oaks", "valley", "Ventura Boulevard and nearby condo buildings", "Sherman Oaks is inside the City of Los Angeles. The Valley fee is $18."],
  ["studio-city", "Studio City", "valley", "Ventura corridor homes, courtyard buildings, and hillside streets", "Courtyards need the building number. Studio City is in the city, not a separate delivery zone of its own."],
];

const topics = [
  ["birthday", "Birthday flower bouquet", "A birthday bouquet should look finished when it is handed over. Brighter color and a Signature size usually sit better on a table than a very small bunch.", "Put the recipient’s name on the note so a desk or a family member can match the gift."],
  ["anniversary", "Anniversary flower bouquet", "An anniversary bouquet is usually roses or a soft mixed bunch, sized for the room rather than for a photo. Classic is enough for an apartment. Grand is for a table that needs to hold the evening.", "Say whether you want roses or a mixed bouquet in the note, and add the card line before you pay."],
  ["sympathy", "Sympathy flower bouquet", "A sympathy bouquet should be calm. White, cream, and green read as respectful. Skip novelty wraps and loud color unless the family asked for them.", "If the address is a home, say who should receive it. Petalswift does not invent a chapel list."],
  ["funeral", "Funeral flowers", "Funeral flowers need a clear address and a time. A standing spray is not the same as a hand-tied bouquet for the house. Order the home bouquet when the family asked for flowers at the residence.", "Write the family name and the address exactly. Christmas Eve is not the only early cutoff: check the date if the service is on a holiday."],
  ["get-well", "Get-well flower bouquet", "A get-well bouquet should be easy to place and, when the room is shared, lily-free. Strong scent is the usual reason people ask for lily-free.", "If you are sending to a residence, add the buzzer. Do not assume a hospital will accept a delivery unless you have confirmed the desk."],
  ["thank-you", "Thank-you flower bouquet", "A thank-you bouquet works when the words on the card are specific. The flowers can be a simple Classic bunch. The note does the real work.", "Keep the card to one or two sentences. The delivery note is for the address, not for the thank-you."],
  ["new-baby", "New-baby flower bouquet", "New-baby flowers should be soft in color and easy to move. A hand-tied bunch is simpler in a small apartment than a large vase.", "Write the parent’s name. Avoid assuming a hospital will take the delivery."],
  ["congratulations", "Congratulations flower bouquet", "Congratulations flowers mark a promotion, a new office, or a win. A cleaner arrangement reads better in a lobby than a loose wild bunch.", "Offices need the company, the floor, and the person’s name."],
  ["romance", "Romantic flower bouquet", "A romantic bouquet is usually blush, peach, or red, hand-tied or in a vase. The size should match the room, not a catalog photo taken in a studio.", "Add the card line you actually want read aloud. The delivery note stays practical."],
  ["just-because", "Just-because flower bouquet", "A just-because bouquet is an ordinary day made specific. Classic is the right size for most of these. There is no reason to jump to Grand unless the table is large.", "Same-day still ends at the city cutoff. A Tuesday bouquet follows the same clock as a birthday."],
  ["corporate", "Corporate flower delivery", "Corporate flowers go to a desk, a lobby, or a client. The arrangement should look considered and the note must name a person, not only a company.", "Multi-address sends can be discussed by phone at (917) 460-5550. The website order is still one address at a time."],
  ["rose", "Rose bouquet", "A rose bouquet from Petalswift is garden roses in a composed bunch, not a wrapped dozen from a cooler. Manhattan Morning, at $78, is the soft white and blush Classic.", "Ask for a color in the note. Red, blush, and white are the usual requests."],
  ["hand-tied", "Hand-tied flower bouquet", "A hand-tied bouquet is gathered so the stems spiral, then tied. It travels well to apartments and offices because it is not already stuck in a heavy vase.", "Add a vase only if the room does not have one. The price on the product is the bouquet, before the delivery fee."],
  ["mixed", "Mixed flower bouquet", "A mixed bouquet uses more than one bloom so the bunch has depth. Roses with seasonal stems and greenery are the usual mix.", "Filter the catalog by bloom if you want mixed stems. Lily-free mixed bunches are marked on the product."],
  ["luxury", "Luxury flower bouquet", "Luxury here means scale and stem quality, priced in the open. Signature and Grand start around $98. Classic everyday bouquets start at $78.", "Grand is the statement size for a table, a suite, or a client. It still has to be ordered by the same-day cutoff."],
  ["lily-free", "Lily-free flower bouquet", "Lily-free means no lilies, which matters for scent, cats, and shared rooms. The catalog marks lily-free styles so you do not have to guess from a photo.", "Say lily-free in the note as well as choosing a marked product, so the handoff stays consistent."],
  ["hatbox", "Hatbox flower gift", "A hatbox is a bouquet set in a box with a keepsake shape. It suits a desk or a gift that should look complete without a vase.", "The hatbox price is the gift. Delivery is still charged by the borough or Los Angeles area."],
  ["white", "White flower bouquet", "White and cream bouquets read as calm. They are the usual choice for sympathy, a quiet anniversary, or a lobby that should not shout.", "Architectural whites suit offices. Softer garden whites suit a home."],
];

const practical = [
  {
    slug: "how-to-order-a-flower-bouquet",
    title: "How to order a flower bouquet",
    point: "Pick the bouquet, choose Classic, Signature, or Grand, then enter the ZIP. The fee and the window show before you pay. Same-day needs the order in by the city cutoff.",
  },
  {
    slug: "flower-delivery-fees-explained",
    title: "Flower delivery fees, explained",
    point: "The bouquet price and the delivery fee are separate. New York City fees are $12 in Queens, $16 in Brooklyn, $18 in Manhattan and the Bronx, and $24 on Staten Island. In the City of Los Angeles, central and eastside are $16, and the westside and Valley neighborhoods are $18.",
  },
  {
    slug: "what-same-day-flower-delivery-means",
    title: "What same-day flower delivery means",
    point: "Same-day means the bouquet is composed for that order and handed off the same afternoon, if you order by 4:00pm local time. It is not a morning guarantee, and it is not overnight shipping.",
  },
  {
    slug: "what-to-write-in-a-flower-delivery-note",
    title: "What to write in a flower delivery note",
    point: "The note needs the buzzer, gate, desk, or apartment. The card message is separate and should be the words you want the person to read. Do not hide the gate code inside the card.",
  },
  {
    slug: "how-long-a-flower-bouquet-lasts",
    title: "How long a flower bouquet lasts",
    point: "A fresh hand-tied bouquet usually looks its best for several days if the stems go into clean water the day it arrives, the water is changed, and the bunch stays out of a hot window. Vase life still depends on the stems and the room.",
  },
  {
    slug: "classic-signature-or-grand-bouquet",
    title: "Classic, Signature, or Grand",
    point: "Classic starts at $78 and fits an everyday gift. Signature is fuller and is the usual birthday or anniversary size. Grand is the large table or client bouquet. The product page shows the dollar price of each size.",
  },
  {
    slug: "flower-bouquet-or-vase-arrangement",
    title: "Flower bouquet or vase arrangement",
    point: "A hand-tied bouquet is gathered and tied, so the recipient needs a vase. A vase arrangement arrives ready to set down. Hatboxes are the third option when the gift should look finished on a desk.",
  },
  {
    slug: "what-to-write-on-a-flower-card",
    title: "What to write on a flower card",
    point: "One or two sentences are enough. Name the person, say why you sent the flowers, and stop. The delivery instructions do not belong on the card.",
  },
];

const posts = [];
let photoIndex = 0;

function photo(alt) {
  const [src, label] = photos[photoIndex % photos.length];
  photoIndex += 1;
  return { heroImage: src, heroAlt: `${label}. ${alt}` };
}

function add(post) {
  if (post.description.length > 160) {
    throw new Error(`Description too long (${post.description.length}): ${post.slug}`);
  }
  posts.push({
    publishedAt: date,
    updatedAt: date,
    tags: post.tags,
    ...photo(post.heroAlt),
    ...post,
  });
}

function nycOrder(place) {
  return `Orders open December 10, 2026. Order by 4:00pm ET for same-day in ${place}. Christmas Eve in New York City is 11:00am ET. Call (917) 460-5550 if you want help choosing a size. The office at 37-68 74th Street is not a walk-in shop.`;
}

function laOrder(place) {
  return `Orders open December 10, 2026. Order by 4:00pm PT for same-day in ${place}. Christmas Eve in Los Angeles is 11:00am PT. Beverly Hills and Santa Monica are separate cities and are not included. Call (917) 460-5550 for help with a size.`;
}

for (const [slug, name, borough, where, handoff] of nycNeighborhoods) {
  const z = nycZones[borough];
  const boroughLabel = {
    manhattan: "Manhattan",
    brooklyn: "Brooklyn",
    queens: "Queens",
    bronx: "Bronx",
    "staten-island": "Staten Island",
  }[borough];
  add({
    slug: `${slug}-flower-bouquet-guide`,
    title: `${name} flower bouquet delivery`,
    description: `${name} flower bouquets with same-day delivery. $${z.fee} ${boroughLabel} fee. Order by 4:00pm ET.`,
    city: "nyc",
    borough,
    tags: [name, "flower bouquet", "New York City"],
    heroAlt: `Bouquet photographed for a ${name} delivery guide`,
    sections: [
      {
        heading: `A bouquet in ${name}`,
        body: `A ${name} bouquet goes to ${where}. ${handoff} Petalswift composes the bouquet for that order and delivers it inside New York City.`,
      },
      {
        heading: "Fee and same-day window",
        body: `The delivery fee for this borough is $${z.fee}. Same-day, when you order by 4:00pm ET, arrives ${z.window}. Next-day is ${z.next}. The bouquet price starts at $78 and is separate from the fee.`,
      },
      {
        heading: "What to send",
        body: `Classic, from $78, fits a desk or a small ${name} apartment. Signature is the usual birthday or anniversary size. Grand is for a table. Lily-free is marked in the catalog when the room is shared.`,
      },
      {
        heading: "How the order works",
        body: nycOrder(name),
      },
    ],
  });
}

for (const [slug, name, area, where, handoff] of laNeighborhoods) {
  const z = laZones[area];
  add({
    slug: `${slug}-los-angeles-flower-bouquet`,
    title: `${name} flower bouquet delivery`,
    description: `${name} flower bouquets in the City of Los Angeles. $${z.fee} delivery. Order by 4:00pm PT. Beverly Hills is not included.`,
    city: "los-angeles",
    tags: [name, "Los Angeles", "flower bouquet"],
    heroAlt: `Bouquet photographed for a ${name} delivery guide`,
    sections: [
      {
        heading: `${name} is inside the City of Los Angeles`,
        body: `${name} delivery covers ${where}. ${handoff} Petalswift delivers in the City of Los Angeles only. Beverly Hills and Santa Monica are not part of this launch.`,
      },
      {
        heading: "Fee and same-day window",
        body: `Delivery in ${z.name} is $${z.fee}. Order by 4:00pm PT and the same-day window is ${z.window}. Bouquets start at $78 before that fee.`,
      },
      {
        heading: "What belongs in the note",
        body: `Classic starts at $78. A hand-tied bouquet is easier to carry into a ${name} apartment than a wide vase. Put the gate, buzzer, or desk in the delivery note, and keep the card message separate.`,
      },
      {
        heading: "How the order works",
        body: laOrder(name),
      },
    ],
  });
}

for (const [key, title, why, pick] of topics) {
  add({
    slug: `${key}-flower-bouquet-new-york-city`,
    title: `${title} in New York City`,
    description: `${title} for New York City, from $78. Same-day by 4:00pm ET. Fees from $12, shown before you pay.`,
    city: "nyc",
    borough: "nyc",
    tags: [title, "New York City", "same-day"],
    heroAlt: `${title} for New York City`,
    sections: [
      { heading: title, body: `${why} In New York City the same bouquet can go to a doorman building, a walk-up, or an office. The address note has to match that building.` },
      { heading: "Price, fee, and cutoff", body: "Bouquet prices start at $78 for Classic. Delivery is extra: $12 in Queens, $16 in Brooklyn, $18 in Manhattan and the Bronx, and $24 on Staten Island. Order by 4:00pm ET for same-day. Windows start at 4:00pm in Queens and later in the other boroughs." },
      { heading: "Choosing the bunch", body: pick },
      { heading: "Order in New York City", body: nycOrder("New York City") },
    ],
  });
  add({
    slug: `${key}-flower-bouquet-los-angeles`,
    title: `${title} in Los Angeles`,
    description: `${title} in the City of Los Angeles, from $78. Same-day by 4:00pm PT. Central delivery is $16.`,
    city: "los-angeles",
    tags: [title, "Los Angeles", "same-day"],
    heroAlt: `${title} for Los Angeles`,
    sections: [
      { heading: title, body: `${why} In Los Angeles that means the City of Los Angeles: Downtown, Hollywood, the Eastside, Venice, Brentwood, Westwood, Sherman Oaks, and Studio City.` },
      { heading: "Price, fee, and cutoff", body: "Bouquet prices start at $78. Central and eastside delivery is $16, with a 4:00–8:00pm PT window. Westside and Valley delivery is $18, with a 5:00–9:00pm PT window. Order by 4:00pm PT." },
      { heading: "Choosing the bunch", body: pick + " Beverly Hills and Santa Monica are outside this delivery area." },
      { heading: "Order in Los Angeles", body: laOrder("Los Angeles") },
    ],
  });
}

for (const item of practical) {
  add({
    slug: `${item.slug}-nyc`,
    title: `${item.title} in New York City`,
    description: `${item.title} for New York City flower delivery. Fees from $12. Same-day when you order by 4:00pm ET.`,
    city: "nyc",
    borough: "nyc",
    tags: ["New York City", "flower delivery", "guide"],
    heroAlt: `${item.title} in New York City`,
    sections: [
      { heading: item.title, body: item.point },
      { heading: "New York City specifics", body: "Queens is $12 and 4:00–8:00pm ET. Brooklyn is $16 and 5:00–9:00pm ET. Manhattan is $18 and 5:00–9:00pm ET. The Bronx is $18 and 5:00–8:30pm ET. Staten Island is $24 and 5:00–8:00pm ET. All of those same-day windows require an order by 4:00pm ET." },
      { heading: "What not to assume", body: "The Jackson Heights address is the office, not a shop you can walk into. Petalswift does not deliver nationwide. Orders open December 10, 2026." },
      { heading: "Next step", body: nycOrder("New York City") },
    ],
  });
  add({
    slug: `${item.slug}-los-angeles`,
    title: `${item.title} in Los Angeles`,
    description: `${item.title} for flower delivery in the City of Los Angeles. Order by 4:00pm PT. Fees from $16.`,
    city: "los-angeles",
    tags: ["Los Angeles", "flower delivery", "guide"],
    heroAlt: `${item.title} in Los Angeles`,
    sections: [
      { heading: item.title, body: item.point },
      { heading: "Los Angeles specifics", body: "Central Los Angeles and the Eastside are $16, same-day 4:00–8:00pm PT. The Westside and the Valley neighborhoods inside the city are $18, same-day 5:00–9:00pm PT. Order by 4:00pm PT. Beverly Hills and Santa Monica are not included." },
      { heading: "What not to assume", body: "There is no Los Angeles storefront to visit. Delivery is how the bouquet arrives. Nationwide shipping is not offered." },
      { heading: "Next step", body: laOrder("Los Angeles") },
    ],
  });
}

const extras = [
  {
    slug: "which-los-angeles-neighborhoods-get-flower-delivery",
    title: "Which Los Angeles neighborhoods get flower delivery",
    city: "los-angeles",
    description: "Petalswift delivers flower bouquets inside the City of Los Angeles, from Downtown to Studio City. Beverly Hills and Santa Monica are not included.",
    sections: [
      { heading: "Inside the city", body: "The launch covers Downtown, Hollywood, Koreatown, Mid-Wilshire, Silver Lake, Echo Park, Los Feliz, Highland Park, Venice, Brentwood, Westwood, Sherman Oaks, and Studio City." },
      { heading: "Outside the city", body: "Beverly Hills, Santa Monica, Pasadena, and the rest of Los Angeles County are separate places. A ZIP such as 90210 is outside this delivery area." },
      { heading: "Fees", body: "Central and eastside delivery is $16. Westside and Valley delivery is $18. Order by 4:00pm PT for same-day." },
      { heading: "How to check", body: laOrder("the City of Los Angeles") },
    ],
  },
  {
    slug: "five-borough-flower-delivery-fees",
    title: "Five-borough flower delivery fees",
    city: "nyc",
    borough: "nyc",
    description: "New York City flower delivery fees: Queens $12, Brooklyn $16, Manhattan and the Bronx $18, Staten Island $24. Order by 4:00pm ET.",
    sections: [
      { heading: "The five fees", body: "Queens is $12. Brooklyn is $16. Manhattan is $18. The Bronx is $18. Staten Island is $24. The fee is for delivery. The bouquet starts at $78." },
      { heading: "The windows", body: "Queens same-day is 4:00–8:00pm ET. Brooklyn and Manhattan are 5:00–9:00pm ET. The Bronx is 5:00–8:30pm ET. Staten Island is 5:00–8:00pm ET. Every same-day window needs the order by 4:00pm ET." },
      { heading: "Why the fee changes", body: "The fee follows the borough, not a surprise at the door. Enter the ZIP before you pay and the fee on the checker is the fee for that borough." },
      { heading: "Holiday exception", body: nycOrder("all five boroughs") },
    ],
  },
  {
    slug: "christmas-flower-bouquets-los-angeles-2026",
    title: "Christmas flower bouquets in Los Angeles, 2026",
    city: "los-angeles",
    description: "Christmas flower bouquets in the City of Los Angeles. Orders from December 10, 2026. Same-day by 4:00pm PT. Christmas Eve cutoff 11:00am PT.",
    sections: [
      { heading: "Dates", body: "Orders open December 10, 2026. Same-day Christmas bouquets in Los Angeles follow the 4:00pm PT cutoff. Christmas Eve is earlier: 11:00am PT." },
      { heading: "What to send", body: "Red, ivory, and green bouquets, hatboxes, and lily-free gifts are in the catalog. The price starts at $78 before the area delivery fee." },
      { heading: "Where they go", body: "Downtown through Studio City, inside the City of Los Angeles. Beverly Hills and Santa Monica are not included." },
      { heading: "How to book", body: laOrder("Los Angeles") },
    ],
  },
  {
    slug: "office-desk-flower-delivery",
    title: "Office desk flower delivery",
    city: "nyc",
    borough: "nyc",
    description: "Send a flower bouquet to an office desk in New York City or Los Angeles. Name the person, the company, and the floor. Order by 4:00pm.",
    sections: [
      { heading: "What the desk needs", body: "A lobby will not hunt for a first name alone. Write the person’s name, the company, the floor, and the suite. Add a phone number if the building asks for one." },
      { heading: "New York City offices", body: "Manhattan delivery is $18, with a 5:00–9:00pm ET same-day window after a 4:00pm ET order. Brooklyn offices are $16. Queens offices are $12." },
      { heading: "Los Angeles offices", body: "Downtown, Hollywood, and Koreatown offices use the $16 central fee. Westwood and the Valley offices in the city use the $18 fee. Order by 4:00pm PT." },
      { heading: "The bouquet", body: "A cleaner arrangement or a hatbox reads better on a desk than a very loose bunch. Classic starts at $78." },
    ],
  },
];

const more = [
  {
    slug: "doorman-flower-delivery-new-york-city",
    title: "Doorman flower delivery in New York City",
    city: "nyc",
    borough: "nyc",
    description: "How a flower bouquet gets through a New York City doorman. Name the desk, the apartment, and the recipient. Order by 4:00pm ET.",
    sections: [
      { heading: "What the doorman needs", body: "A doorman matches a bouquet to a person. Write the recipient’s full name, the apartment, and the building. A first name and a street is how bouquets sit at the desk." },
      { heading: "Where this comes up", body: "Midtown hotels, Upper East Side buildings, Upper West Side high-rises, and Long Island City towers all work this way. The borough fee still applies: $18 in Manhattan, $12 in Queens." },
      { heading: "Timing", body: "Same-day Manhattan delivery is 5:00–9:00pm ET when you order by 4:00pm ET. Do not promise a guest that the flowers will be there at noon." },
      { heading: "The card", body: "Keep the card as the message. Keep the apartment number in the delivery note. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "walk-up-flower-delivery-new-york-city",
    title: "Walk-up flower delivery in New York City",
    city: "nyc",
    borough: "nyc",
    description: "Flower delivery to a New York City walk-up. Add the buzzer, the floor, and a phone number. Same-day by 4:00pm ET.",
    sections: [
      { heading: "Walk-ups need a bell", body: "Without a doorman, the driver needs the buzzer name and the floor. A brownstone in the West Village, a Bushwick loft, and an Astoria walk-up all fail the same way if the note is blank." },
      { heading: "Hand-tied travels better", body: "A hand-tied bouquet is easier on a stair than a wide vase. If the apartment has no vase, choose a hatbox or say so in the order." },
      { heading: "Fees", body: "Brooklyn walk-ups are a $16 delivery. Queens walk-ups are $12. Manhattan walk-ups are $18. Order by 4:00pm ET for same-day." },
      { heading: "If nobody is home", body: "Add a phone number. Petalswift cannot invent a safe place to leave flowers. The note should say what to do if the bell is not answered." },
    ],
  },
  {
    slug: "hotel-flower-delivery-new-york-city",
    title: "Hotel flower delivery in New York City",
    city: "nyc",
    borough: "manhattan",
    description: "Send a flower bouquet to a New York City hotel desk. Use the guest name and the arrival date. Manhattan delivery is $18.",
    sections: [
      { heading: "The desk, not the room", body: "Most hotel bouquets are left with the desk under the guest’s name. Write the hotel, the guest name exactly as the reservation, and the arrival date if they are not checked in yet." },
      { heading: "Midtown is the usual case", body: "Times Square and Grand Central hotels are Manhattan. The fee is $18. Same-day is 5:00–9:00pm ET after a 4:00pm ET order." },
      { heading: "What to send", body: "A vase arrangement or a hatbox is easier for a desk to hold than a loose bunch that needs water immediately. Classic starts at $78." },
      { heading: "Order", body: nycOrder("a Manhattan hotel") },
    ],
  },
  {
    slug: "next-day-flower-delivery-new-york-city",
    title: "Next-day flower delivery in New York City",
    city: "nyc",
    borough: "nyc",
    description: "Next-day flower delivery in New York City when you miss the 4:00pm ET cutoff. Windows run through the daytime. Fees stay the borough price.",
    sections: [
      { heading: "When next-day is the right choice", body: "After 4:00pm ET, same-day is closed. Next-day still uses the borough fee and a daytime window, so the bouquet is not a rush at the door that evening." },
      { heading: "The windows", body: "Queens next-day is 10:00am–6:00pm ET. Manhattan and Brooklyn are 10:00am–7:00pm ET. The Bronx is 10:00am–6:00pm ET. Staten Island is 11:00am–6:00pm ET." },
      { heading: "The fee does not change", body: "Missing the cutoff does not add a new borough fee. Queens stays $12, Brooklyn $16, Manhattan and the Bronx $18, Staten Island $24." },
      { heading: "Holidays", body: "Christmas Eve in New York City is 11:00am ET, which is earlier than a normal same-day cutoff. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "saturday-flower-delivery-new-york-city",
    title: "Saturday flower delivery in New York City",
    city: "nyc",
    borough: "nyc",
    description: "Saturday flower bouquets in New York City follow the same 4:00pm ET cutoff. Borough fees do not change for the weekend.",
    sections: [
      { heading: "Saturday uses the weekday clock", body: "A Saturday birthday still needs the order by 4:00pm ET for same-day. The window is the borough window, not a special weekend slot." },
      { heading: "Plan the handoff", body: "People are home more often on Saturday, but a doorman building still needs the name and the apartment. A walk-up still needs the buzzer." },
      { heading: "What people send", body: "Birthday and just-because bouquets are the usual Saturday orders. Signature is the common size. Classic starts at $78." },
      { heading: "Fees", body: "Saturday does not change the fee. Queens $12, Brooklyn $16, Manhattan and the Bronx $18, Staten Island $24." },
    ],
  },
  {
    slug: "dinner-party-flower-bouquet-new-york-city",
    title: "Dinner-party flower bouquet in New York City",
    city: "nyc",
    borough: "nyc",
    description: "A dinner-party bouquet for a New York City table. Signature or Grand, ordered by 4:00pm ET, with the host’s name on the note.",
    sections: [
      { heading: "Size for a table", body: "A dinner table needs a bouquet that can sit low or move to a sideboard. Signature is the usual size. Grand is for a long table. Classic can look small in a dining room." },
      { heading: "Color", body: "White, blush, and green stay out of the way of food. A very tall arrangement blocks the people across the table." },
      { heading: "Arrival", body: "Order by 4:00pm ET so the bunch can arrive in the same-day window, before guests. Manhattan is 5:00–9:00pm ET, which can be tight for an early dinner. Next-day is safer for a 6:00pm table." },
      { heading: "The host", body: "Address it to the host, with the buzzer or the doorman note. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "gate-code-flower-delivery-los-angeles",
    title: "Gate-code flower delivery in Los Angeles",
    city: "los-angeles",
    description: "Los Angeles flower delivery to a gate or a courtyard. Put the code in the delivery note. Order by 4:00pm PT.",
    sections: [
      { heading: "Where the code goes", body: "Brentwood gates, Hollywood courts, and courtyard apartments in Los Feliz all need the code in the delivery note. Do not put the only copy of the code on the gift card." },
      { heading: "Walk streets", body: "Venice walk streets need the walk name. A nearby drive address is not the door." },
      { heading: "Fees", body: "Westside addresses, including Venice, Brentwood, and Westwood, are $18. Eastside courtyards are $16. Order by 4:00pm PT." },
      { heading: "Outside the city", body: laOrder("a gated address in the City of Los Angeles") },
    ],
  },
  {
    slug: "next-day-flower-delivery-los-angeles",
    title: "Next-day flower delivery in Los Angeles",
    city: "los-angeles",
    description: "Next-day flower delivery in the City of Los Angeles when the 4:00pm PT cutoff has passed. Area fees stay $16 or $18.",
    sections: [
      { heading: "After 4:00pm PT", body: "Same-day closes at 4:00pm PT. The bouquet can still be set for the next day at the same area fee." },
      { heading: "Daytime windows", body: "Central and eastside next-day runs 10:00am–6:00pm PT. Westside next-day runs 10:00am–7:00pm PT. Valley next-day runs 11:00am–6:00pm PT." },
      { heading: "The fee", body: "Central and eastside stay $16. Westside and Valley stay $18. The bouquet price starts at $78 on top of that." },
      { heading: "Christmas Eve", body: "Christmas Eve in Los Angeles cuts off at 11:00am PT, earlier than a normal same-day. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "eastside-and-westside-flower-delivery-los-angeles",
    title: "Eastside and Westside flower delivery in Los Angeles",
    city: "los-angeles",
    description: "Eastside Los Angeles flower delivery is $16. Westside delivery inside the city is $18. Both require an order by 4:00pm PT.",
    sections: [
      { heading: "Eastside", body: "Silver Lake, Echo Park, Los Feliz, and Highland Park are Eastside. Delivery is $16. Same-day is 4:00–8:00pm PT." },
      { heading: "Westside", body: "Venice, Brentwood, and Westwood are inside the City of Los Angeles and use the Westside fee of $18. Same-day is 5:00–9:00pm PT." },
      { heading: "Not the Westside", body: "Santa Monica and Beverly Hills are not Westside stops on this route. They are separate cities." },
      { heading: "Same cutoff", body: laOrder("either side of the city") },
    ],
  },
  {
    slug: "valley-flower-bouquet-los-angeles",
    title: "Valley flower bouquet delivery in Los Angeles",
    city: "los-angeles",
    description: "Flower bouquets in Sherman Oaks and Studio City. $18 Valley delivery. Order by 4:00pm PT for a 5:00–9:00pm window.",
    sections: [
      { heading: "Which Valley neighborhoods", body: "This launch includes Sherman Oaks and Studio City because they are inside the City of Los Angeles. It is not a promise for every Valley city." },
      { heading: "Fee and window", body: "Valley delivery is $18. Order by 4:00pm PT and the same-day window is 5:00–9:00pm PT. Next-day is 11:00am–6:00pm PT." },
      { heading: "Buildings", body: "Ventura Boulevard condos and courtyard buildings need the unit. Hillside streets need a gate note if there is one." },
      { heading: "The bouquet", body: "Prices start at $78. Hand-tied bunches are the usual home gift. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "mothers-day-flower-bouquet-new-york-city",
    title: "Mother’s Day flower bouquet in New York City",
    city: "nyc",
    borough: "nyc",
    description: "Mother’s Day flower bouquets in New York City, from $78. The same-day cutoff stays 4:00pm ET. Order ahead if the Sunday table is early.",
    sections: [
      { heading: "What to send", body: "Soft color, a hand-tied bunch or a vase, and a short card. Signature is the usual Mother’s Day size. Lily-free is available when scent matters." },
      { heading: "The clock does not move", body: "Mother’s Day does not get a private cutoff on this site. Same-day is still 4:00pm ET. If lunch is at noon, order the day before and use the next-day window." },
      { heading: "Where it goes", body: "All five boroughs. The fee is the borough fee, from $12 in Queens to $24 on Staten Island." },
      { heading: "The card", body: "Write the card in plain words. Put the buzzer in the delivery note. Orders open December 10, 2026, which is before the spring holiday." },
    ],
  },
  {
    slug: "mothers-day-flower-bouquet-los-angeles",
    title: "Mother’s Day flower bouquet in Los Angeles",
    city: "los-angeles",
    description: "Mother’s Day flower bouquets in the City of Los Angeles, from $78. Order by 4:00pm PT for same-day, or the day before for an early table.",
    sections: [
      { heading: "What to send", body: "A soft mixed bouquet or garden roses, sized for the house. Signature fits most tables. Classic fits a smaller apartment." },
      { heading: "Timing", body: "Same-day still ends at 4:00pm PT. A noon brunch needs a next-day order so the window is in the morning or early afternoon, not the evening route." },
      { heading: "Where", body: "City of Los Angeles neighborhoods from Downtown to Studio City. Beverly Hills and Santa Monica are not included. Fees are $16 or $18 by area." },
      { heading: "Order", body: laOrder("Los Angeles") },
    ],
  },
  {
    slug: "pink-rose-bouquet-new-york-city",
    title: "Pink rose bouquet in New York City",
    city: "nyc",
    borough: "nyc",
    description: "Pink and blush rose bouquets in New York City, from $78. Manhattan Morning is the soft Classic. Order by 4:00pm ET.",
    sections: [
      { heading: "Blush, not a guess", body: "Say blush or pink in the note. Manhattan Morning is a soft white and blush rose bouquet at $78. Fuller rose bunches sit at Signature and Grand prices on the product page." },
      { heading: "When people send them", body: "Anniversaries, birthdays, and thank-yous. The borough changes the fee, not the flowers." },
      { heading: "Delivery", body: "Order by 4:00pm ET. Queens is the earliest same-day window, 4:00–8:00pm ET, at $12. Manhattan is $18 and 5:00–9:00pm ET." },
      { heading: "Care", body: "Cut the stems and use clean water the day it arrives. Keep the bunch out of a radiator. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "red-rose-bouquet-los-angeles",
    title: "Red rose bouquet in Los Angeles",
    city: "los-angeles",
    description: "Red rose bouquets in the City of Los Angeles, composed to order from $78. Same-day by 4:00pm PT. Area fees are $16 or $18.",
    sections: [
      { heading: "Ask for the color", body: "Write red in the note so the bunch is not swapped for blush. The bouquet is composed for the order. Classic starts at $78." },
      { heading: "Where it can go", body: "Downtown, Hollywood, the Eastside, Venice, Brentwood, Westwood, Sherman Oaks, and Studio City. Not Beverly Hills. Not Santa Monica." },
      { heading: "Windows", body: "Central and eastside same-day is 4:00–8:00pm PT for $16. Westside and Valley same-day is 5:00–9:00pm PT for $18. Order by 4:00pm PT." },
      { heading: "The card", body: "Keep the card short. Put any gate code in the delivery note. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "flower-bouquet-care-after-delivery",
    title: "Flower bouquet care after delivery",
    city: "nyc",
    borough: "nyc",
    description: "How to keep a delivered flower bouquet looking fresh. Clean water, a recut stem, and a cool room. The same care applies in New York City and Los Angeles.",
    sections: [
      { heading: "The first hour", body: "Take the wrap off a hand-tied bouquet and put the stems in clean water. If it arrived in a vase, check the water level. A hatbox should be opened so the stems are not sitting in a closed warm box." },
      { heading: "The next days", body: "Change the water. Recut the stems at an angle. Pull any leaf that would sit under the water. Keep the bouquet away from a radiator, a sunny window, and a fruit bowl." },
      { heading: "What shortens the life", body: "Heat, an empty vase, and leaves rotting in the water. A bouquet that sat all afternoon in a hot lobby will not last as long as one that went into water right away." },
      { heading: "If it arrives damaged", body: "Contact Petalswift within 24 hours with a photo if the flowers arrive damaged or clearly below the standard. The phone is (917) 460-5550. Orders open December 10, 2026." },
    ],
  },
  {
    slug: "who-petalswift-delivers-for",
    title: "Who Petalswift delivers flower bouquets for",
    city: "nyc",
    borough: "nyc",
    description: "Petalswift delivers flower bouquets in New York City and the City of Los Angeles. Orders open December 10, 2026. The office is not a shop.",
    sections: [
      { heading: "Two cities", body: "New York City means all five boroughs. Los Angeles means neighborhoods inside the City of Los Angeles, from Downtown to Studio City. It does not mean Los Angeles County, Beverly Hills, or Santa Monica." },
      { heading: "The company", body: "Petalswift is a brand of AJ Fashion Inc. The office is 37-68 74th Street, Jackson Heights, NY 11372. That office is not a walk-in flower shop. Phone (917) 460-5550. Email hello@petalswift.com." },
      { heading: "The clock", body: "Same-day is 4:00pm ET in New York City and 4:00pm PT in Los Angeles. Christmas Eve is 11:00am in each city’s time zone. Orders open December 10, 2026." },
      { heading: "The price", body: "Bouquets start at $78. New York City delivery starts at $12. Los Angeles delivery starts at $16. Both fees show before you pay." },
    ],
  },
];

for (const extra of [...extras, ...more]) {
  add({
    ...extra,
    tags: extra.tags ?? [extra.city === "los-angeles" ? "Los Angeles" : "New York City", "flower bouquet"],
    heroAlt: extra.title,
  });
}

const slugs = new Set();
for (const post of posts) {
  if (slugs.has(post.slug)) throw new Error(`Duplicate slug ${post.slug}`);
  slugs.add(post.slug);
  for (const section of post.sections) {
    if (!section.heading || !section.body) throw new Error(`Empty section ${post.slug}`);
  }
}

if (posts.length < 100) throw new Error(`Only ${posts.length} posts`);

const body = `import type { BlogPost } from "@/lib/blog";

/** Informative New York City and Los Angeles flower guides. Generated by scripts/build-blog-guides.mjs. */
export const guidePosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};
`;

writeFileSync(join(root, "src/lib/blog-guides.ts"), body);
console.log(`wrote ${posts.length} guides`);
