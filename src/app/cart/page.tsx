"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { FreshnessGuarantee } from "@/components/FreshnessGuarantee";
import { GiftAddons } from "@/components/GiftAddons";
import { OrderUpdatesForm } from "@/components/OrderUpdatesForm";
import { PaymentTrust } from "@/components/PaymentTrust";
import { useCart } from "@/lib/cart";
import { deliveryZones } from "@/lib/ops";
import { site } from "@/lib/site";

export default function CartPage() {
  const { lines, subtotal, setQuantity, removeItem, count } = useCart();
  const [boroughSlug, setBoroughSlug] = useState("queens");

  const zone = useMemo(
    () => deliveryZones.find((z) => z.slug === boroughSlug) ?? deliveryZones[0],
    [boroughSlug],
  );
  const total = subtotal + zone.fee;

  return (
    <div className="pt-8 md:pt-10">
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
        <section className="site-shell space-y-10 pb-28">
          <Link
            href="/arrangements"
            className="btn-spark"
          >
            Browse arrangements
          </Link>
          <GiftAddons />
        </section>
      ) : (
        <section className="site-shell grid gap-10 pb-28 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {lines.map((line) => (
              <div
                key={line.lineKey}
                className="grid grid-cols-[96px_1fr] gap-4 border-b border-line pb-6 md:grid-cols-[120px_1fr_auto]"
              >
                <div className="relative aspect-square overflow-hidden bg-mist/30">
                  <Image
                    src={line.image}
                    alt={line.imageAlt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div>
                  {line.kind === "product" ? (
                    <Link
                      href={`/shop/${line.slug}`}
                      className="font-display text-2xl tracking-[-0.02em] text-ink"
                    >
                      {line.name}
                    </Link>
                  ) : (
                    <p className="font-display text-2xl tracking-[-0.02em] text-ink">
                      {line.name}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-ink-soft">
                    ${line.price}
                    {line.kind === "addon" ? " · Add-on" : ""}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <label className="text-sm text-ink-soft">
                      Qty
                      <input
                        type="number"
                        min={1}
                        value={line.quantity}
                        onChange={(e) =>
                          setQuantity(
                            line.slug,
                            Number(e.target.value) || 1,
                            line.size,
                          )
                        }
                        className="ml-2 w-16 border border-ink/15 bg-white px-2 py-1.5 text-sm"
                      />
                    </label>
                    <button
                      type="button"
                      className="text-sm text-ink-soft underline-offset-4 hover:underline"
                      onClick={() => removeItem(line.slug, line.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-sm text-ink md:text-right">${line.lineTotal}</p>
              </div>
            ))}
            <GiftAddons />
            <OrderUpdatesForm />
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-porcelain/80 p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
                Summary
              </p>
              <label className="mt-4 block text-sm text-ink-soft">
                Delivery borough
                <select
                  value={boroughSlug}
                  onChange={(e) => setBoroughSlug(e.target.value)}
                  className="mt-1.5 w-full border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
                >
                  {deliveryZones.map((z) => (
                    <option key={z.slug} value={z.slug}>
                      {z.borough} — ${z.fee}
                    </option>
                  ))}
                </select>
              </label>
              <p className="mt-3 text-xs text-ink-soft">
                Same-day window {zone.sameDayWindow} · Next-day{" "}
                {zone.nextDayWindow}
              </p>
              <div className="mt-5 space-y-2 text-sm text-ink">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery ({zone.borough})</span>
                  <span>${zone.fee}</span>
                </div>
                <div className="flex items-center justify-between border-t border-line pt-3">
                  <span>Estimated total</span>
                  <span className="font-display text-3xl tracking-[-0.03em]">
                    ${total}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                Policies:{" "}
                <Link href="/policies" className="text-leaf hover:underline">
                  refunds, cancellation, substitution, freshness
                </Link>
                . Call{" "}
                <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
                  {site.phoneDisplay}
                </a>{" "}
                or email {site.email} to complete checkout.
              </p>
              <a
                href={`mailto:${site.email}?subject=Petalswift%20order&body=${encodeURIComponent(
                  [
                    ...lines.map(
                      (l) => `${l.quantity}x ${l.name} ($${l.lineTotal})`,
                    ),
                    "",
                    `Delivery: ${zone.borough} ($${zone.fee})`,
                    `Window preference: same-day ${zone.sameDayWindow}`,
                    `Subtotal: $${subtotal}`,
                    `Estimated total: $${total}`,
                    "",
                    "Please confirm email/SMS updates using the contacts in my saved preferences.",
                  ].join("\n"),
                )}`}
                className="btn-spark mt-6 w-full"
              >
                Request order by email
              </a>
            </div>
            <PaymentTrust />
            <FreshnessGuarantee compact />
            <DeliveryChecker compact />
          </aside>
        </section>
      )}
    </div>
  );
}
