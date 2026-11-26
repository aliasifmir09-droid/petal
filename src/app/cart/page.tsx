"use client";

import Image from "next/image";
import Link from "next/link";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { useCart } from "@/lib/cart";
import { site } from "@/lib/site";

export default function CartPage() {
  const { lines, subtotal, setQuantity, removeItem, count } = useCart();

  return (
    <div className="pt-28 md:pt-36">
      <section className="site-shell pb-10">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Cart
        </p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Your order
        </h1>
        <p className="mt-4 text-ink-soft">
          {count === 0
            ? "Your cart is empty."
            : `${count} item${count === 1 ? "" : "s"} · Same-day across NYC when ordered by ${site.orderCutoff}`}
        </p>
      </section>

      {count === 0 ? (
        <section className="site-shell pb-28">
          <Link
            href="/shop"
            className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Browse marketplace
          </Link>
        </section>
      ) : (
        <section className="site-shell grid gap-10 pb-28 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {lines.map(({ product, quantity, lineTotal }) => (
              <div
                key={product.slug}
                className="grid grid-cols-[96px_1fr] gap-4 border-b border-line pb-6 md:grid-cols-[120px_1fr_auto]"
              >
                <div className="relative aspect-square overflow-hidden bg-mist/30">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="font-display text-2xl tracking-[-0.02em] text-ink"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-ink-soft">${product.price}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <label className="text-sm text-ink-soft">
                      Qty
                      <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(product.slug, Number(e.target.value) || 1)
                        }
                        className="ml-2 w-16 border border-ink/15 bg-white px-2 py-1.5 text-sm"
                      />
                    </label>
                    <button
                      type="button"
                      className="text-sm text-ink-soft underline-offset-4 hover:underline"
                      onClick={() => removeItem(product.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-sm text-ink md:text-right">${lineTotal}</p>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-porcelain/80 p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
                Summary
              </p>
              <div className="mt-4 flex items-center justify-between text-ink">
                <span>Subtotal</span>
                <span className="font-display text-3xl tracking-[-0.03em]">
                  ${subtotal}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                Delivery calculated at confirmation. Call{" "}
                <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
                  {site.phoneDisplay}
                </a>{" "}
                or email {site.email} to complete checkout while Stripe is being
                connected.
              </p>
              <a
                href={`mailto:${site.email}?subject=Petalswift%20order&body=${encodeURIComponent(
                  lines
                    .map(
                      (l) =>
                        `${l.quantity}x ${l.product.name} ($${l.lineTotal})`,
                    )
                    .join("\n") + `\n\nSubtotal: $${subtotal}`,
                )}`}
                className="mt-6 inline-flex w-full items-center justify-center bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
              >
                Request order by email
              </a>
            </div>
            <DeliveryChecker compact />
          </aside>
        </section>
      )}
    </div>
  );
}
