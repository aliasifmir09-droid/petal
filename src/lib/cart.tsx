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
  size?: "Classic" | "Signature" | "Grand";
  unitPrice?: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (
    slug: string,
    quantity?: number,
    kind?: "product" | "addon",
    options?: { size?: CartItem["size"]; unitPrice?: number },
  ) => void;
  removeItem: (slug: string, size?: CartItem["size"]) => void;
  setQuantity: (slug: string, quantity: number, size?: CartItem["size"]) => void;
  clear: () => void;
  lines: {
    kind: "product" | "addon";
    product?: Product;
    addon?: GiftAddon;
    slug: string;
    size?: CartItem["size"];
    name: string;
    price: number;
    image: string;
    imageAlt: string;
    quantity: number;
    lineTotal: number;
    lineKey: string;
  }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "petalswift-cart-v3";

function lineKey(slug: string, size?: string) {
  return size ? `${slug}::${size}` : slug;
}

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
      const size =
        row.size === "Classic" || row.size === "Signature" || row.size === "Grand"
          ? row.size
          : undefined;
      return {
        slug: String(row.slug),
        quantity: Number(row.quantity),
        kind,
        size,
        unitPrice: typeof row.unitPrice === "number" ? row.unitPrice : undefined,
      };
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
        const legacy =
          localStorage.getItem("petalswift-cart-v2") ||
          localStorage.getItem("petalswift-cart-v1");
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
            lineKey: lineKey(addon.slug),
          };
        }
        const product = getProduct(item.slug);
        if (!product) return null;
        const price = item.unitPrice ?? product.price;
        const sizeLabel = item.size ? ` · ${item.size}` : "";
        return {
          kind: "product" as const,
          product,
          slug: product.slug,
          size: item.size,
          name: `${product.name}${sizeLabel}`,
          price,
          image: product.image,
          imageAlt: product.imageAlt,
          quantity: item.quantity,
          lineTotal: price * item.quantity,
          lineKey: lineKey(product.slug, item.size),
        };
      })
      .filter(Boolean) as CartContextValue["lines"];

    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: lines.reduce((sum, line) => sum + line.lineTotal, 0),
      lines,
      addItem: (slug, quantity = 1, kind, options) => {
        const resolvedKind =
          kind ?? (slug.startsWith("addon-") ? "addon" : "product");
        setItems((prev) => {
          const existing = prev.find(
            (item) =>
              item.slug === slug &&
              (resolvedKind === "addon" || item.size === options?.size),
          );
          if (existing) {
            return prev.map((item) =>
              item.slug === slug &&
              (resolvedKind === "addon" || item.size === options?.size)
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          }
          return [
            ...prev,
            {
              slug,
              quantity,
              kind: resolvedKind,
              size: options?.size,
              unitPrice: options?.unitPrice,
            },
          ];
        });
      },
      removeItem: (slug, size) => {
        setItems((prev) =>
          prev.filter(
            (item) => !(item.slug === slug && (size ? item.size === size : true)),
          ),
        );
      },
      setQuantity: (slug, quantity, size) => {
        setItems((prev) => {
          if (quantity <= 0) {
            return prev.filter(
              (item) =>
                !(item.slug === slug && (size ? item.size === size : true)),
            );
          }
          return prev.map((item) => {
            const sameLine =
              item.slug === slug && (size ? item.size === size : true);
            return sameLine ? { ...item, quantity } : item;
          });
        });
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
