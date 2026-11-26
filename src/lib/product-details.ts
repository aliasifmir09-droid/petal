import type { Product } from "@/lib/catalog";
import { sizeTiers } from "@/lib/ops";

const sizeDefaults = {
  Classic: {
    dimensions: "Approx. 12–14 in tall × 8–10 in wide",
    stemCount: "15–20 stems",
    priceDelta: 0,
  },
  Signature: {
    dimensions: "Approx. 14–18 in tall × 10–12 in wide",
    stemCount: "25–35 stems",
    priceDelta: 20,
  },
  Grand: {
    dimensions: "Approx. 18–24 in tall × 12–16 in wide",
    stemCount: "40+ stems or sculptural height",
    priceDelta: 45,
  },
} as const;

const styleLabels: Record<string, string> = {
  "hand-tied": "Hand-tied Bouquet",
  "hand-tied-vase": "Hand-tied with Vase",
  arrangement: "Container Arrangement",
  hatbox: "Hatbox Arrangement",
  "gift-box": "Gift-Box Bouquet",
  "lily-free": "Lily-free Composition",
};

export function productSubtitle(product: Product) {
  const style = product.styles.find((s) => s !== "lily-free") ?? product.styles[0];
  const styleName = styleLabels[style] ?? "Floral Arrangement";
  const bloom = product.blooms[0]?.replace(/-/g, " ") ?? "seasonal";
  return `${styleName} · ${bloom}`;
}

export function productDisplayName(product: Product) {
  return `${product.name} — ${productSubtitle(product)}`;
}

export function vaseIncluded(product: Product) {
  return (
    product.styles.includes("hand-tied-vase") ||
    product.styles.includes("arrangement") ||
    product.styles.includes("hatbox")
  );
}

export function productGoodFor(product: Product) {
  const map: Record<string, string> = {
    birthday: "Birthdays",
    anniversary: "Anniversaries",
    romance: "Date nights & romance",
    "thinking-of-you": "Thinking-of-you gestures",
    "thank-you": "Thank-you gifts",
    congratulations: "Promotions & openings",
    "new-baby": "New baby welcomes",
    "get-well": "Get-well rooms",
    housewarming: "New homes",
    sympathy: "Sympathy",
    funeral: "Funeral tributes",
    wedding: "Weddings & rehearsals",
    corporate: "Offices & clients",
    "just-because": "Everyday luxury",
    christmas: "Christmas & holiday tables",
  };
  return product.occasions.map((o) => map[o] ?? o).slice(0, 4);
}

export function productCare() {
  return [
    "Trim stems on an angle and place in clean water immediately.",
    "Change water daily; remove wilted stems to protect the rest.",
    "Keep away from heat vents, radiators, and direct midday sun.",
    "Most Petalswift compositions hold beautifully for 5–7 days with basic care.",
  ];
}

export function detailsForSize(
  product: Product,
  size: "Classic" | "Signature" | "Grand" = product.size,
) {
  const base = sizeDefaults[size];
  const tier = sizeTiers.find((t) => t.name === size);
  const delta = base.priceDelta - sizeDefaults[product.size].priceDelta;
  return {
    size,
    dimensions: base.dimensions,
    stemCount: base.stemCount,
    stemGuide: tier?.stemGuide ?? base.stemCount,
    price: Math.max(product.price + delta, 48),
    vaseIncluded: vaseIncluded(product),
    vaseNote: vaseIncluded(product)
      ? "Vessel / hatbox included—ready to place on arrival."
      : "Hand-tied, wrapped for gifting. Vase not included unless you add Hand-tied with vase style or a vessel add-on.",
    subtitle: productSubtitle(product),
    displayName: `${product.name} — ${productSubtitle(product)}`,
    goodFor: productGoodFor(product),
    care: productCare(),
  };
}

export const sizeOptions = ["Classic", "Signature", "Grand"] as const;
