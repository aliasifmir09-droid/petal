import { products, type Product } from "@/lib/catalog";
import { boroughs } from "@/lib/site";

export type SellerStatus = "pending" | "approved" | "live";

export type SellerShop = {
  slug: string;
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  borough: string;
  neighborhood: string;
  addressLine: string;
  blurb: string;
  specialties: string[];
  sameDay: boolean;
  status: SellerStatus;
  commissionPercent: number;
  joined: string;
  image: string;
  imageAlt: string;
};

export type SellerListingDraft = {
  id: string;
  name: string;
  blurb: string;
  price: number;
  size: "Classic" | "Signature" | "Grand";
  sameDay: boolean;
  createdAt: string;
};

export type SellerAccount = {
  shop: Omit<SellerShop, "status" | "commissionPercent" | "joined" | "image" | "imageAlt"> & {
    status: SellerStatus;
    commissionPercent: number;
    joined: string;
    image?: string;
    imageAlt?: string;
  };
  listings: SellerListingDraft[];
};

export const SELLER_STORAGE_KEY = "petalswift-seller-account-v1";
export const PLATFORM_COMMISSION_PERCENT = 15;

/** Launch partner shops already selling on the marketplace. */
export const partnerShops: SellerShop[] = [
  {
    slug: "petalswift-atelier",
    name: "Petalswift Atelier",
    ownerName: "Petalswift",
    email: "hello@petalswift.com",
    phone: "+1-917-460-5550",
    borough: "queens",
    neighborhood: "Jackson Heights",
    addressLine: "37-68 74th Street, Jackson Heights, NY 11372",
    blurb:
      "House atelier composing same-day Classic, Signature, and Grand bouquets for all five boroughs.",
    specialties: ["Same-day NYC", "Christmas", "Corporate", "Hatboxes"],
    sameDay: true,
    status: "live",
    commissionPercent: 0,
    joined: "2026-11-01",
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Petalswift atelier florist composing stems",
  },
  {
    slug: "greenpoint-stem-co",
    name: "Greenpoint Stem Co.",
    ownerName: "Maya Ortiz",
    email: "maya@greenpointstem.example",
    phone: "+1-718-555-0142",
    borough: "brooklyn",
    neighborhood: "Greenpoint",
    addressLine: "Greenpoint, Brooklyn, NY",
    blurb:
      "Garden-forward hand-ties and vase arrangements with wild texture—ideal for brownstones and host gifts.",
    specialties: ["Garden style", "Lily-free", "Weekend host gifts"],
    sameDay: true,
    status: "live",
    commissionPercent: PLATFORM_COMMISSION_PERCENT,
    joined: "2026-11-18",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Garden-style bouquet from Greenpoint Stem Co.",
  },
  {
    slug: "chelsea-cut-flowers",
    name: "Chelsea Cut Flowers",
    ownerName: "James Park",
    email: "james@chelseacut.example",
    phone: "+1-212-555-0198",
    borough: "manhattan",
    neighborhood: "Chelsea",
    addressLine: "Chelsea, Manhattan, NY",
    blurb:
      "Architectural whites and corporate lobby florals with timed Midtown and hotel handoffs.",
    specialties: ["Corporate", "Hotel arrivals", "White architectural"],
    sameDay: true,
    status: "live",
    commissionPercent: PLATFORM_COMMISSION_PERCENT,
    joined: "2026-11-20",
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Architectural white arrangement from Chelsea Cut Flowers",
  },
];

export function getSeller(slug: string) {
  return partnerShops.find((s) => s.slug === slug);
}

export function getLiveSellers() {
  return partnerShops.filter((s) => s.status === "live");
}

export function productsForSeller(sellerSlug: string): Product[] {
  return products.filter((p) => p.sellerSlug === sellerSlug);
}

export function sellerForProduct(product: Product) {
  if (!product.sellerSlug) return getSeller("petalswift-atelier");
  return getSeller(product.sellerSlug) ?? getSeller("petalswift-atelier");
}

export function boroughLabel(slug: string) {
  return boroughs.find((b) => b.slug === slug)?.name ?? slug;
}

export function slugifyShopName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
}
