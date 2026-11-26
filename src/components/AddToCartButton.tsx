"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function AddToCartButton({
  slug,
  label = "Add to cart",
}: {
  slug: string;
  label?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        onClick={() => {
          addItem(slug, 1);
          setAdded(true);
        }}
      >
        {added ? "Added" : label}
      </button>
      {added ? (
        <Link
          href="/cart"
          className="text-sm text-leaf underline-offset-4 hover:underline"
        >
          View cart
        </Link>
      ) : null}
    </div>
  );
}
