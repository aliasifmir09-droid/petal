export type CareGuide = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
  tips: string[];
  relatedHref: string;
};

export const careGuides: CareGuide[] = [
  {
    slug: "vase-life",
    title: "How to keep bouquets fresh 5–7 days",
    summary:
      "Simple stem care so Petalswift arrangements stay presentation-ready after delivery across NYC.",
    steps: [
      "Unwrap carefully and trim ½–1 inch from each stem at an angle under clean water.",
      "Use a clean vase filled with cool water and the flower food packet if included.",
      "Remove any leaves that would sit below the water line.",
      "Change water daily (or every other day) and re-trim stems lightly.",
      "Display away from heat vents, fruit bowls, and harsh midday sun.",
    ],
    tips: [
      "Wilting early? Recut stems and refresh water immediately.",
      "Hatboxes and gift boxes: keep foam or water source moist; mist lightly if instructed on the care card.",
      "Lily pollen: remove anthers if present to avoid stains (lily-free designs skip this).",
    ],
    relatedHref: "/policies#freshness",
  },
  {
    slug: "hand-tied",
    title: "Care for hand-tied bouquets",
    summary:
      "Hand-tieds arrive with a water source for transit—transfer to a vase soon after delivery for best vase life.",
    steps: [
      "Remove transit wrap and water tube or wrap once home.",
      "Cut stems and place in a vase within a few hours of delivery.",
      "Loosen the tie only if you want a fuller spread—keep the binding for classic shape.",
      "Follow daily water changes like any cut arrangement.",
    ],
    tips: [
      "If delivery notes say “leave with doorman,” open soon after pickup.",
      "Add a clean vase at checkout when available for ready-to-display handoffs.",
    ],
    relatedHref: "/styles/hand-tied",
  },
  {
    slug: "sympathy",
    title: "Sympathy & service flower etiquette",
    summary:
      "Timing, lily-free options, and what to write on cards for NYC funeral homes and homes.",
    steps: [
      "Confirm venue name, chapel time, and delivery desk with the funeral home when possible.",
      "Order earlier on peak service days; same-day still available by 1:00pm ET most days.",
      "Choose lily-free when pets or scent sensitivity are a concern.",
      "Keep card messages short, personal, and clear for desk handoff.",
    ],
    tips: [
      "Standing sprays and hearts may need venue acceptance—call (917) 460-5550 if unsure.",
      "Home sympathy deliveries use the same freshness and remake policies as other orders.",
    ],
    relatedHref: "/occasions/sympathy",
  },
  {
    slug: "delivery-day",
    title: "What to expect on delivery day",
    summary:
      "Windows, doorman handoffs, and how SMS/email updates work for five-borough flower delivery.",
    steps: [
      "You receive confirmation when composition starts and when the courier is out for delivery.",
      "Same-day windows are borough-based (see /delivery)—add buzzer and lobby notes at checkout.",
      "If nobody is home, we follow your leave-with instructions or briefly reattempt same day when possible.",
      "Photograph any damage within 24 hours and contact us for remake or refund options.",
    ],
    tips: [
      "Hotels and offices: include recipient full name as listed at the desk.",
      "Track updates anytime on /updates.",
    ],
    relatedHref: "/delivery",
  },
];

export function getCareGuide(slug: string) {
  return careGuides.find((g) => g.slug === slug);
}
