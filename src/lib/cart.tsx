"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/lib/catalog";
import { getAddon, type GiftAddon } from "@/lib/ops";

export type CartItem = {
  slug: string;
  quantity: number;
  kind: "product" | "addon";
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (slug: string, quantity?: number, kind?: "product" | "addon") => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  lines: {
    kind: "product" | "addon";
    product?: Product;
    addon?: GiftAddon;
    slug: string;
    name: string;
    price: number;
    image: string;
    imageAlt: string;
    quantity: number;
    lineTotal: number;
  }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "petalswift-cart-v2";

function normalizeStored(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as Partial<CartItem>;
      if (!row.slug || !row.quantity) return null;
      const kind =
        row.kind === "addon" || String(row.slug).startsWith("addon-")
          ? "addon"
          : "product";
      return { slug: String(row.slug), quantity: Number(row.quantity), kind };
    })
    .filter(Boolean) as CartItem[];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(normalizeStored(JSON.parse(raw)));
      else {
        const legacy = localStorage.getItem("petalswift-cart-v1");
        if (legacy) setItems(normalizeStored(JSON.parse(legacy)));
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartContextValue>(() => {
    const lines = items
      .map((item) => {
        if (item.kind === "addon") {
          const addon = getAddon(item.slug);
          if (!addon) return null;
          return {
            kind: "addon" as const,
            addon,
            slug: addon.slug,
            name: addon.name,
            price: addon.price,
            image: addon.image,
            imageAlt: addon.imageAlt,
            quantity: item.quantity,
            lineTotal: addon.price * item.quantity,
          };
        }
        const product = getProduct(item.slug);
        if (!product) return null;
        return {
          kind: "product" as const,
          product,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          imageAlt: product.imageAlt,
          quantity: item.quantity,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter(Boolean) as CartContextValue["lines"];

    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: lines.reduce((sum, line) => sum + line.lineTotal, 0),
      lines,
      addItem: (slug, quantity = 1, kind) => {
        const resolvedKind =
          kind ?? (slug.startsWith("addon-") ? "addon" : "product");
        setItems((prev) => {
          const existing = prev.find((item) => item.slug === slug);
          if (existing) {
            return prev.map((item) =>
              item.slug === slug
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          }
          return [...prev, { slug, quantity, kind: resolvedKind }];
        });
      },
      removeItem: (slug) => {
        setItems((prev) => prev.filter((item) => item.slug !== slug));
      },
      setQuantity: (slug, quantity) => {
        setItems((prev) =>
          quantity <= 0
            ? prev.filter((item) => item.slug !== slug)
            : prev.map((item) =>
                item.slug === slug ? { ...item, quantity } : item,
              ),
        );
      },
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
