"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { site } from "@/lib/site";

const links = [
  { href: "/shop", label: "Marketplace" },
  { href: "/delivery", label: "NYC Delivery" },
  { href: "/nyc", label: "Boroughs" },
  { href: "/about", label: "Atelier" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const inverted = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-porcelain/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-shell flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          className={`font-display text-[1.7rem] leading-none tracking-[-0.04em] md:text-[1.95rem] ${
            inverted ? "text-porcelain" : "text-ink"
          }`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.92rem] tracking-[0.01em] transition-colors ${
                inverted
                  ? "text-porcelain/80 hover:text-porcelain"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className={`hidden text-sm transition-colors md:inline ${
              inverted
                ? "text-porcelain/80 hover:text-porcelain"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/cart"
            className={`hidden text-sm transition-colors md:inline ${
              inverted
                ? "text-porcelain/80 hover:text-porcelain"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            Cart{count > 0 ? ` (${count})` : ""}
          </Link>
          <Link
            href="/shop"
            className={`inline-flex items-center px-4 py-2.5 text-sm transition-colors ${
              inverted
                ? "bg-porcelain text-leaf hover:bg-white"
                : "bg-leaf text-porcelain hover:bg-leaf-deep"
            }`}
          >
            Order same-day
          </Link>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center border lg:hidden ${
              inverted
                ? "border-porcelain/40 text-porcelain"
                : "border-ink/15 text-ink"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 transition-transform ${
                  inverted ? "bg-porcelain" : "bg-ink"
                } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 transition-transform ${
                  inverted ? "bg-porcelain" : "bg-ink"
                } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-porcelain/95 px-4 py-5 backdrop-blur-xl lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cart"
                className="block text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                Cart{count > 0 ? ` (${count})` : ""}
              </Link>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="block text-lg text-ink">
                Call {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
