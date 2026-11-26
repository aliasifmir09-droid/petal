"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  blooms,
  colors,
  occasions,
  products,
  recipients,
  styles,
  type Product,
} from "@/lib/catalog";

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

type Props = {
  initialOccasion?: string;
  initialStyle?: string;
  initialColor?: string;
  initialBloom?: string;
  initialRecipient?: string;
  heading: string;
  intro: string;
  showAllFacets?: boolean;
};

export function ShopMarketplace({
  initialOccasion = "all",
  initialStyle = "all",
  initialColor = "all",
  initialBloom = "all",
  initialRecipient = "all",
  heading,
  intro,
  showAllFacets = true,
}: Props) {
  const [occasion, setOccasion] = useState(initialOccasion);
  const [style, setStyle] = useState(initialStyle);
  const [color, setColor] = useState(initialColor);
  const [bloom, setBloom] = useState(initialBloom);
  const [recipient, setRecipient] = useState(initialRecipient);
  const [sameDayOnly, setSameDayOnly] = useState(false);
  const [nextDayOnly, setNextDayOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = products;
    if (occasion !== "all") list = list.filter((p) => p.occasions.includes(occasion));
    if (style !== "all") list = list.filter((p) => p.styles.includes(style));
    if (color !== "all") list = list.filter((p) => p.colors.includes(color));
    if (bloom !== "all") list = list.filter((p) => p.blooms.includes(bloom));
    if (recipient !== "all") {
      list = list.filter((p) => p.recipients.includes(recipient));
    }
    if (sameDayOnly) list = list.filter((p) => p.sameDay);
    if (nextDayOnly) list = list.filter((p) => p.nextDay);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) =>
        [
          p.name,
          p.blurb,
          ...p.tags,
          ...p.occasions,
          ...p.styles,
          ...p.colors,
          ...p.blooms,
          ...p.recipients,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
    }
    return sortProducts(list, sort);
  }, [
    occasion,
    style,
    color,
    bloom,
    recipient,
    sameDayOnly,
    nextDayOnly,
    query,
    sort,
  ]);

  return (
    <div>
      <section className="site-shell pb-8">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          All floral arrangements
        </p>
        <h1 className="font-display mt-4 max-w-5xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          {heading}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-soft md:text-lg">
          {intro}
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          {filtered.length} arrangement{filtered.length === 1 ? "" : "s"} · More
          ways to shop than a generic network catalog
        </p>
      </section>

      <section className="site-shell pb-6">
        <div className="flex flex-col gap-4 border border-line bg-porcelain/70 p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <label className="flex-1">
            <span className="sr-only">Search arrangements</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roses, hatbox, birthday, corporate, lily-free…"
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
              Same-day
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                checked={nextDayOnly}
                onChange={(e) => setNextDayOnly(e.target.checked)}
              />
              Next-day
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
      </section>

      <section className="site-shell grid gap-8 pb-10 lg:grid-cols-[240px_1fr]">
        {showAllFacets ? (
          <aside className="space-y-7 border border-line bg-porcelain/60 p-5">
            <Facet
              label="Occasion"
              value={occasion}
              onChange={setOccasion}
              options={[
                { slug: "all", name: "All occasions" },
                ...occasions.map((o) => ({ slug: o.slug, name: o.name })),
              ]}
            />
            <Facet
              label="Style"
              value={style}
              onChange={setStyle}
              options={[
                { slug: "all", name: "All styles" },
                ...styles.map((s) => ({ slug: s.slug, name: s.name })),
              ]}
            />
            <Facet
              label="Color"
              value={color}
              onChange={setColor}
              options={[
                { slug: "all", name: "All colors" },
                ...colors.map((c) => ({ slug: c.slug, name: c.name })),
              ]}
            />
            <Facet
              label="Flower type"
              value={bloom}
              onChange={setBloom}
              options={[
                { slug: "all", name: "All blooms" },
                ...blooms.map((b) => ({ slug: b.slug, name: b.name })),
              ]}
            />
            <Facet
              label="Recipient"
              value={recipient}
              onChange={setRecipient}
              options={[
                { slug: "all", name: "Anyone" },
                ...recipients.map((r) => ({ slug: r.slug, name: r.name })),
              ]}
            />
          </aside>
        ) : (
          <div className="hidden lg:block" />
        )}

        <div>
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {occasions.slice(0, 8).map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setOccasion(item.slug)}
                className={`shrink-0 border px-3 py-2 text-xs transition-colors ${
                  occasion === item.slug
                    ? "border-leaf bg-leaf text-porcelain"
                    : "border-line bg-white text-ink-soft"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 xl:grid-cols-3">
            {filtered.map((product) => (
              <Link
                key={product.slug}
                href={`/shop/${product.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-3 top-3 flex flex-col gap-1">
                    {product.sameDay ? (
                      <span className="bg-porcelain/90 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-leaf">
                        Same-day
                      </span>
                    ) : null}
                    {product.styles.includes("lily-free") ? (
                      <span className="bg-porcelain/90 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink">
                        Lily-free
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl tracking-[-0.025em] text-ink md:text-3xl">
                    {product.name}
                  </h2>
                  <p className="text-sm text-ink-soft">${product.price}</p>
                </div>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft/70">
                  {product.size}
                  {" · "}
                  {product.styles[0]?.replace(/-/g, " ")}
                  {product.bestseller ? " · Bestseller" : ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {product.blurb}
                </p>
              </Link>
            ))}
            {filtered.length === 0 ? (
              <p className="text-ink-soft sm:col-span-2 xl:col-span-3">
                No arrangements match those filters. Clear a filter or try
                another occasion/style.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

function Facet({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { slug: string; name: string }[];
}) {
  return (
    <div>
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/75">
        {label}
      </p>
      <div className="mt-3 space-y-1.5">
        {options.map((option) => (
          <button
            key={option.slug}
            type="button"
            onClick={() => onChange(option.slug)}
            className={`block w-full px-2 py-1.5 text-left text-sm transition-colors ${
              value === option.slug
                ? "bg-leaf text-porcelain"
                : "text-ink-soft hover:bg-canvas hover:text-ink"
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}
