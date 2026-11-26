import Link from "next/link";
import { boroughs, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-leaf-deep text-porcelain">
      <div className="site-shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
        <div>
          <p className="font-display text-4xl tracking-[-0.04em]">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-porcelain/72">
            Luxury flowers and composed bouquets for New York City—arranged
            fresh in Jackson Heights, delivered across all five boroughs.
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-porcelain/85">
            <li>
              <Link href="/arrangements" className="hover:text-porcelain">
                All arrangements
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-porcelain">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-porcelain">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/delivery" className="hover:text-porcelain">
                NYC Delivery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-porcelain">
                Our Atelier
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-porcelain">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            NYC Boroughs
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-porcelain/85">
            {boroughs.map((borough) => (
              <li key={borough.slug}>
                <Link
                  href={`/nyc/${borough.slug}`}
                  className="hover:text-porcelain"
                >
                  {borough.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            Visit & contact
          </p>
          <address className="mt-4 space-y-2.5 text-sm not-italic leading-relaxed text-porcelain/85">
            <p>
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality}, {site.address.addressRegion}{" "}
              {site.address.postalCode}
            </p>
            <p>
              <a className="hover:text-porcelain" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-porcelain" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-porcelain/50 md:flex-row md:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Same-day across the five boroughs · Order by {site.orderCutoff}</p>
        </div>
      </div>
    </footer>
  );
}
