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
          className="font-display text-[1.65rem] leading-none tracking-[-0.03em] text-ink drop-shadow-[0_1px_12px_rgba(244,242,239,0.9)] md:text-[1.85rem]"
        >
          Petalswift
        </Link>
        <nav
          className="hidden items-center gap-8 rounded-sm bg-[#f4f2ef]/72 px-5 py-2.5 backdrop-blur-md md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.01em] text-ink transition-colors hover:text-leaf"
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
