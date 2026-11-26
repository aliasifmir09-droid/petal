import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NYC Delivery",
  description:
    "Same-day flower delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
};

const boroughs = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "The Bronx",
  "Staten Island",
];

export default function DeliveryPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="site-shell pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/80">
          NYC Delivery
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-5xl tracking-[-0.03em] text-ink md:text-6xl">
          Same-day across the five boroughs.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Order by 1:00pm ET for delivery the same day. We route with care—so
          arrangements arrive upright, cool, and presentation-ready.
        </p>
      </section>

      <section className="border-y border-line bg-white/40 py-16">
        <div className="site-shell grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-ink">
              Coverage
            </h2>
            <ul className="mt-6 space-y-3 text-ink-soft">
              {boroughs.map((borough) => (
                <li key={borough} className="border-b border-line pb-3 text-lg">
                  {borough}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-ink">
              What to expect
            </h2>
            <div className="mt-6 space-y-6 text-ink-soft">
              <p className="leading-relaxed">
                You’ll receive a confirmation, a delivery window, and a short
                message when the courier is en route.
              </p>
              <p className="leading-relaxed">
                Buildings, doormen, and office lobbies are handled with clear
                recipient instructions—so the gift doesn’t sit in a mailroom.
              </p>
              <p className="leading-relaxed">
                Need a timed arrival for an event? Email{" "}
                <a
                  className="text-leaf underline-offset-2 hover:underline"
                  href="mailto:hello@petalswift.com"
                >
                  hello@petalswift.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16">
        <Link
          href="/shop"
          className="inline-flex bg-leaf px-6 py-3.5 text-sm text-canvas transition-colors hover:bg-leaf-deep"
        >
          Choose a bouquet
        </Link>
      </section>
    </div>
  );
}
