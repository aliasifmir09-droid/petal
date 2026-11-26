import Link from "next/link";

const links = [
  { href: "/shop", label: "Bouquets" },
  { href: "/delivery", label: "NYC Delivery" },
  { href: "/about", label: "Our Atelier" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="site-shell flex items-center justify-between py-5 md:py-7">
        <Link
          href="/"
          className="font-display text-[1.65rem] leading-none tracking-[-0.03em] text-ink md:text-[1.85rem]"
        >
          Petalswift
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.01em] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="inline-flex items-center bg-leaf px-4 py-2.5 text-sm text-canvas transition-colors hover:bg-leaf-deep"
        >
          Order same-day
        </Link>
      </div>
    </header>
  );
}
