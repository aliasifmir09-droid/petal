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

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  lines: { product: Product; quantity: number; lineTotal: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "petalswift-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
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
        const product = getProduct(item.slug);
        if (!product) return null;
        return {
          product,
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
      addItem: (slug, quantity = 1) => {
        setItems((prev) => {
          const existing = prev.find((item) => item.slug === slug);
          if (existing) {
            return prev.map((item) =>
              item.slug === slug
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          }
          return [...prev, { slug, quantity }];
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
