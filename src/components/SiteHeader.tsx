"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/lib/cart";
import { site } from "@/lib/site";

const departments = [
  { href: "/christmas", label: "Christmas" },
  { href: "/arrangements", label: "All flowers" },
  { href: "/occasions/birthday", label: "Birthday" },
  { href: "/occasions/anniversary", label: "Anniversary" },
  { href: "/occasions/sympathy", label: "Sympathy" },
  { href: "/styles/hatbox", label: "Hatboxes" },
  { href: "/styles/lily-free", label: "Lily-free" },
  { href: "/delivery", label: "Same-day" },
  { href: "/nyc", label: "NYC boroughs" },
  { href: "/sell", label: "Sell on Petalswift" },
  { href: "/blog", label: "Blog" },
  { href: "/qa", label: "Q&A" },
  { href: "/sizes", label: "Sizes" },
];

export function SiteHeader() {
  const router = useRouter();
  const { count, subtotal } = useCart();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/arrangements?q=${encodeURIComponent(q)}` : "/arrangements");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-leaf text-porcelain">
        <div className="site-shell flex flex-wrap items-center gap-3 py-3 lg:flex-nowrap lg:gap-4 lg:py-3.5">
          <BrandLogo
            variant="on-brand"
            className="shrink-0"
            onClick={() => setOpen(false)}
          />

          <Link
            href="/delivery"
            className="hidden min-w-[132px] shrink-0 rounded-full px-3 py-2 text-xs leading-tight text-porcelain/95 hover:bg-white/10 xl:block"
          >
            <span className="block font-semibold">Same-day delivery</span>
            <span className="block text-porcelain/75">
              to {site.address.addressLocality} & NYC
            </span>
          </Link>

          <form
            onSubmit={onSearch}
            className="order-last flex w-full min-w-0 flex-1 basis-full lg:order-none lg:basis-auto"
            role="search"
          >
            <label className="sr-only" htmlFor="site-search">
              Search flowers
            </label>
            <div className="flex w-full overflow-hidden rounded-full bg-porcelain shadow-sm">
              <input
                id="site-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Christmas flowers, roses, hatbox, birthday…"
                className="w-full border-0 bg-transparent px-5 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/70"
              />
              <button
                type="submit"
                className="m-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf-deep text-porcelain transition-colors hover:bg-ink"
                aria-label="Search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </form>

          <div className="ml-auto flex items-center gap-1 md:gap-2">
            <a
              href={`tel:${site.phone}`}
              className="hidden rounded-full px-3 py-2 text-sm text-porcelain hover:bg-white/10 xl:inline"
            >
              {site.phoneDisplay}
            </a>
            <Link
              href="/order"
              className="hidden rounded-full px-3 py-2 text-sm text-porcelain hover:bg-white/10 md:inline"
            >
              Reorder
            </Link>
            <Link
              href="/sell/account"
              className="hidden rounded-full px-3 py-2 text-sm text-porcelain hover:bg-white/10 lg:inline"
            >
              Seller account
            </Link>
            <Link
              href="/updates"
              className="hidden rounded-full px-3 py-2 text-sm text-porcelain hover:bg-white/10 xl:inline"
            >
              Order updates
            </Link>
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-porcelain hover:bg-white/10"
            >
              <span className="relative inline-flex">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="20" r="1.4" fill="currentColor" />
                  <circle cx="18" cy="20" r="1.4" fill="currentColor" />
                </svg>
                {count > 0 ? (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.15rem] items-center justify-center rounded-full bg-petal px-1 text-[0.65rem] font-bold text-ink">
                    {count}
                  </span>
                ) : null}
              </span>
              <span className="hidden sm:inline">
                {count > 0 ? `$${subtotal}` : "Cart"}
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-porcelain/35 text-porcelain lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-px w-4 bg-porcelain ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <span className={`block h-px w-4 bg-porcelain ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <nav className="border-b border-line bg-porcelain" aria-label="Departments">
        <div className="site-shell flex items-center gap-2 overflow-x-auto py-2.5 md:gap-3 md:py-3">
          <Link
            href="/arrangements"
            className="shrink-0 rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf"
          >
            Departments
          </Link>
          <Link
            href="/order"
            className="shrink-0 rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf"
          >
            Services
          </Link>
          {departments.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 text-sm text-ink-soft hover:bg-canvas hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-b border-line bg-porcelain px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-3">
            {departments.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cart" className="block text-base text-ink" onClick={() => setOpen(false)}>
                Cart{count > 0 ? ` (${count})` : ""}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
