"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function AddToCartButton({
  slug,
  label = "Add to cart",
  size,
  unitPrice,
}: {
  slug: string;
  label?: string;
  size?: "Classic" | "Signature" | "Grand";
  unitPrice?: number;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        className="btn-spark min-w-[160px]"
        onClick={() => {
          addItem(slug, 1, "product", { size, unitPrice });
          setAdded(true);
        }}
      >
        {added ? "Added" : label}
      </button>
      {added ? (
        <Link
          href="/cart"
          className="text-sm font-semibold text-leaf underline-offset-4 hover:underline"
        >
          View cart
        </Link>
      ) : null}
    </div>
  );
}
