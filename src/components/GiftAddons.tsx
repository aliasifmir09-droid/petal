"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart";
import { giftAddons } from "@/lib/ops";

export function GiftAddons() {
  const { addItem, items } = useCart();

  return (
    <div className="border border-line bg-porcelain/70 p-6 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
        Gift add-ons
      </p>
      <h2 className="font-display mt-2 text-3xl tracking-[-0.03em] text-ink">
        Chocolates, candles, plants, Champagne.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Pair your arrangement with a lasting gift. Add-ons ship with the same
        delivery window.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {giftAddons.map((addon) => {
          const inCart = items.some((item) => item.slug === addon.slug);
          return (
            <div
              key={addon.slug}
              className="grid grid-cols-[72px_1fr] gap-3 border border-line bg-white/70 p-3"
            >
              <div className="relative aspect-square overflow-hidden bg-mist/30">
                <Image
                  src={addon.image}
                  alt={addon.imageAlt}
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-medium text-ink">{addon.name}</h3>
                  <p className="text-sm text-ink-soft">${addon.price}</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {addon.blurb}
                </p>
                <button
                  type="button"
                  onClick={() => addItem(addon.slug, 1, "addon")}
                  className="mt-2 text-xs uppercase tracking-[0.14em] text-leaf hover:underline"
                >
                  {inCart ? "Add another" : "Add to cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
