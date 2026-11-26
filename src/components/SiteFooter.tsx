import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-leaf-deep text-canvas">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl tracking-[-0.03em]">Petalswift</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-canvas/75">
            Premium flowers and composed bouquets for New York City—arranged
            fresh, delivered with the care of a private atelier.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-canvas/55">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-canvas/85">
            <li>
              <Link href="/shop" className="hover:text-canvas">
                Bouquets
              </Link>
            </li>
            <li>
              <Link href="/delivery" className="hover:text-canvas">
                NYC Delivery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-canvas">
                Our Atelier
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-canvas/55">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-canvas/85">
            <li>hello@petalswift.com</li>
            <li>New York, NY</li>
            <li>Same-day across the five boroughs</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-canvas/55 md:flex-row md:justify-between">
          <p>© 2026 Petalswift. All rights reserved.</p>
          <p>Crafted for New York.</p>
        </div>
      </div>
    </footer>
  );
}
