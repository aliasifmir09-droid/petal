import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactEmail } from "@/components/ContactEmail";
import { boroughs, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-leaf-deep text-porcelain">
      <div className="site-shell grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.9fr_1.1fr] md:gap-12 md:py-24">
        <div>
          <BrandLogo variant="on-dark" size="lg" href="/" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-porcelain/72">
            Luxury flowers and composed bouquets for New York City—arranged
            delivered across New York City and Los Angeles.
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-porcelain/85">
            <li>
              <Link href="/christmas" className="hover:text-porcelain">
                Christmas flowers
              </Link>
            </li>
            <li>
              <Link href="/order" className="hover:text-porcelain">
                Start an order
              </Link>
            </li>
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
              <Link href="/gallery" className="hover:text-porcelain">
                Photo gallery
              </Link>
            </li>
            <li>
              <Link href="/corporate" className="hover:text-porcelain">
                Corporate
              </Link>
            </li>
            <li>
              <Link href="/sell" className="hover:text-porcelain">
                Sell on Petalswift
              </Link>
            </li>
            <li>
              <Link href="/sell/apply" className="hover:text-porcelain">
                Shop owner account
              </Link>
            </li>
            <li>
              <Link href="/subscribe" className="hover:text-porcelain">
                Subscriptions
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-porcelain">
                Our Atelier
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-porcelain">
                Press & brand kit
              </Link>
            </li>
            <li>
              <Link href="/nyc" className="hover:text-porcelain">
                NYC neighborhoods
              </Link>
            </li>
            <li>
              <Link href="/qa" className="hover:text-porcelain">
                NYC Q&amp;A
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-porcelain">
                Flower blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            Customer service
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-porcelain/85">
            <li>
              <Link href="/contact" className="hover:text-porcelain">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-porcelain">
                Shipping & delivery
              </Link>
            </li>
            <li>
              <Link href="/delivery" className="hover:text-porcelain">
                Fees & windows
              </Link>
            </li>
            <li>
              <Link href="/delivery-zips" className="hover:text-porcelain">
                Delivery ZIP codes
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-porcelain">
                Returns & remakes
              </Link>
            </li>
            <li>
              <Link href="/care" className="hover:text-porcelain">
                Flower care guides
              </Link>
            </li>
            <li>
              <Link href="/sizes" className="hover:text-porcelain">
                Size guide
              </Link>
            </li>
            <li>
              <Link href="/updates" className="hover:text-porcelain">
                Order updates
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-porcelain">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/policies" className="hover:text-porcelain">
                Policies
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-porcelain">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-porcelain">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-porcelain">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-porcelain">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            NYC Boroughs
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-porcelain/85">
            <li>
              <Link href="/nyc" className="hover:text-porcelain">
                New York City
              </Link>
            </li>
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
            <li>
              <Link href="/los-angeles" className="font-semibold hover:text-porcelain">
                Los Angeles
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            Office
          </p>
          <address className="mt-4 space-y-2.5 text-sm not-italic leading-relaxed text-porcelain/85">
            <p>
              {/* Full street for local SEO — keep “37-68”, never truncate */}
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality}, {site.address.addressRegion}{" "}
              {site.address.postalCode}
              <br />
              United States
            </p>
            <p>
              <a className="hover:text-porcelain" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <ContactEmail className="hover:text-porcelain" />
            </p>
            <p>
              <a
                className="hover:text-porcelain"
                href={site.googleBusinessUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Maps / Business Profile
              </a>
            </p>
          </address>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-porcelain/50">
            Social
          </p>
          <p className="mt-3 text-sm text-porcelain/60">
            Instagram, Facebook, X, LinkedIn, and YouTube profiles launch with
            holiday orders from {site.ordersStartShort}. Link them in schema{" "}
            <code className="text-porcelain/80">sameAs</code> once live.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-porcelain/50 md:flex-row md:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>
            Taking orders from {site.ordersStartDate} · Same-day by{" "}
            {site.orderCutoff}
          </p>
        </div>
      </div>
    </footer>
  );
}
