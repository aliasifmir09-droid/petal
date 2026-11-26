"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { occasions, products, type Product } from "@/lib/catalog";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

function sortProducts(list: Product[], sort: SortKey) {
  const next = [...list];
  switch (sort) {
    case "price-asc":
      return next.sort((a, b) => a.price - b.price);
    case "price-desc":
      return next.sort((a, b) => b.price - a.price);
    case "name":
      return next.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return next.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
  }
}

export function ShopMarketplace({
  initialOccasion = "all",
  heading,
  intro,
}: {
  initialOccasion?: string;
  heading: string;
  intro: string;
}) {
  const [occasion, setOccasion] = useState(initialOccasion);
  const [sameDayOnly, setSameDayOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = products;
    if (occasion !== "all") {
      list = list.filter((p) => p.occasions.includes(occasion));
    }
    if (sameDayOnly) list = list.filter((p) => p.sameDay);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) =>
        [p.name, p.blurb, ...p.tags, ...p.occasions].join(" ").toLowerCase().includes(q),
      );
    }
    return sortProducts(list, sort);
  }, [occasion, sameDayOnly, query, sort]);

  return (
    <div>
      <section className="site-shell pb-10">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Marketplace
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {heading}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {intro}
        </p>
      </section>

      <section className="site-shell pb-8">
        <div className="flex flex-col gap-4 border border-line bg-porcelain/70 p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <label className="flex-1">
            <span className="sr-only">Search bouquets</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roses, birthday, corporate…"
              className="w-full border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-leaf"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                checked={sameDayOnly}
                onChange={(e) => setSameDayOnly(e.target.checked)}
              />
              Same-day only
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="border border-ink/10 bg-white px-3 py-3 text-sm outline-none focus:border-leaf"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to high</option>
              <option value="price-desc">Price: High to low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setOccasion("all")}
            className={`shrink-0 border px-4 py-2 text-sm transition-colors ${
              occasion === "all"
                ? "border-leaf bg-leaf text-porcelain"
                : "border-line bg-white text-ink-soft hover:border-ink/30"
            }`}
          >
            All
          </button>
          {occasions.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setOccasion(item.slug)}
              className={`shrink-0 border px-4 py-2 text-sm transition-colors ${
                occasion === item.slug
                  ? "border-leaf bg-leaf text-porcelain"
                  : "border-line bg-white text-ink-soft hover:border-ink/30"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </section>

      <section className="site-shell grid gap-10 pb-28 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {product.sameDay ? (
                <span className="absolute left-3 top-3 bg-porcelain/90 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-leaf">
                  Same-day
                </span>
              ) : null}
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl tracking-[-0.025em] text-ink md:text-3xl">
                {product.name}
              </h2>
              <p className="text-sm text-ink-soft">${product.price}</p>
            </div>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft/70">
              {product.size}
              {product.bestseller ? " · Bestseller" : ""}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {product.blurb}
            </p>
          </Link>
        ))}
        {filtered.length === 0 ? (
          <p className="text-ink-soft sm:col-span-2 lg:col-span-3">
            No bouquets match that filter. Try another occasion or clear search.
          </p>
        ) : null}
      </section>
    </div>
  );
}
