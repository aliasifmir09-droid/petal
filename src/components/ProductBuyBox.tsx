"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PaymentTrust } from "@/components/PaymentTrust";
import type { Product } from "@/lib/catalog";
import { deliveryZones } from "@/lib/ops";
import { detailsForSize, sizeOptions } from "@/lib/product-details";
import { site } from "@/lib/site";

export function ProductBuyBox({ product }: { product: Product }) {
  const [size, setSize] = useState<(typeof sizeOptions)[number]>(product.size);
  const details = useMemo(() => detailsForSize(product, size), [product, size]);
  const feeFrom = Math.min(...deliveryZones.map((z) => z.fee));

  return (
    <div className="flex flex-col justify-center">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-leaf">
        {details.size}
        {product.sameDay ? " · Same-day NYC" : " · Next-day / scheduled"}
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.035em] text-ink md:text-6xl">
        {product.name}
      </h1>
      <p className="mt-2 text-base font-semibold text-ink-soft md:text-lg">
        {details.subtitle}
      </p>
      <p className="mt-5 text-2xl text-ink">${details.price}</p>
      <p className="mt-2 text-sm text-ink-soft">
        Delivery from ${feeFrom} · Final fee + window after ZIP confirmation ·{" "}
        <Link href="/delivery" className="text-leaf hover:underline">
          See all borough fees
        </Link>
      </p>
      <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
        {product.blurb} Includes a handwritten note and protective packaging for
        New York delivery.
      </p>

      <div className="mt-8">
        <p className="text-sm font-semibold text-ink">Choose size</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {sizeOptions.map((option) => {
            const optionDetails = detailsForSize(product, option);
            const active = size === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                className={`rounded-xl border px-3 py-3 text-left transition-colors ${
                  active
                    ? "border-leaf bg-leaf text-porcelain"
                    : "border-line bg-porcelain text-ink hover:border-leaf"
                }`}
              >
                <span className="block text-sm font-semibold">{option}</span>
                <span
                  className={`mt-1 block text-xs ${
                    active ? "text-porcelain/80" : "text-ink-soft"
                  }`}
                >
                  ${optionDetails.price}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <dl className="mt-8 grid gap-3 rounded-xl border border-line bg-porcelain p-4 text-sm text-ink-soft">
        <div className="flex justify-between gap-4 border-b border-line pb-2">
          <dt>Dimensions</dt>
          <dd className="text-right text-ink">{details.dimensions}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-2">
          <dt>Stem count</dt>
          <dd className="text-right text-ink">{details.stemCount}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-2">
          <dt>Vase / vessel</dt>
          <dd className="max-w-[18rem] text-right text-ink">{details.vaseNote}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-2">
          <dt>Same-day cutoff</dt>
          <dd className="text-right text-ink">{site.orderCutoff}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Best for</dt>
          <dd className="max-w-[18rem] text-right text-ink">
            {details.goodFor.join(", ")}
          </dd>
        </div>
      </dl>

      <div className="mt-8">
        <AddToCartButton
          slug={product.slug}
          size={size}
          unitPrice={details.price}
          label={`Add ${size} · $${details.price}`}
        />
      </div>

      <ul className="mt-6 space-y-2 text-sm text-ink-soft">
        <li>
          <Link href="/policies#substitution" className="text-leaf hover:underline">
            Substitution rules
          </Link>
          {" · "}
          <Link href="/policies#freshness" className="text-leaf hover:underline">
            Freshness guarantee
          </Link>
          {" · "}
          <Link href="/updates" className="text-leaf hover:underline">
            Order updates
          </Link>
        </li>
        <li>Composed in Jackson Heights · {site.address.streetAddress}</li>
        <li>Note-card included — preview your message at checkout email</li>
      </ul>

      <div className="mt-8">
        <PaymentTrust />
      </div>
    </div>
  );
}
