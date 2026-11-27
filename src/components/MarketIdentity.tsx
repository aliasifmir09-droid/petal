import Link from "next/link";
import { neighborhoodPath, neighborhoods } from "@/lib/neighborhoods";
import { site } from "@/lib/site";

const neighborhoodOrder = [
  "jackson-heights",
  "astoria",
  "long-island-city",
  "forest-hills",
  "flushing",
  "williamsburg",
  "park-slope",
  "brooklyn-heights",
  "dumbo",
  "bushwick",
  "upper-east-side",
  "upper-west-side",
  "west-village",
  "chelsea",
  "harlem",
] as const;

/** Crawlable company and neighborhood facts, on every page, same role as Petshiwu’s market copy. */
export function MarketIdentity() {
  const places = neighborhoodOrder.map((slug) => {
    const neighborhood = neighborhoods.find((n) => n.slug === slug);
    if (!neighborhood) return null;
    return neighborhood;
  }).filter((n) => n !== null);

  return (
    <section className="border-t border-line bg-canvas">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-2 md:py-14">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            NYC Neighborhood Delivery
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            We deliver flowers across all five NYC boroughs including Queens,
            Brooklyn, Manhattan, the Bronx, and Staten Island. Same-day delivery
            when ordered by {site.orderCutoff} in{" "}
            {places.map((place, index) => {
              const label =
                place.slug === "upper-east-side"
                  ? "the Upper East Side"
                  : place.slug === "upper-west-side"
                    ? "the Upper West Side"
                    : place.slug === "west-village"
                      ? "the West Village"
                      : place.name;
              const separator =
                index === places.length - 1
                  ? ""
                  : index === places.length - 2
                    ? ", and "
                    : ", ";
              return (
                <span key={place.slug}>
                  <Link
                    href={neighborhoodPath(place)}
                    className="font-semibold text-leaf hover:underline"
                  >
                    {label}
                  </Link>
                  {separator}
                </span>
              );
            })}
            .
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            About {site.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            {site.name} is a US florist and flower delivery company based in{" "}
            {site.address.addressLocality}, {site.address.addressRegion}{" "}
            {site.address.postalCode}. Same-day flower delivery in NYC when
            ordered by {site.orderCutoff}. Studio at {site.address.streetAddress}.
            Phone:{" "}
            <a className="font-semibold text-leaf hover:underline" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </a>
            . Email:{" "}
            <a className="font-semibold text-leaf hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . Call or email to order. Taking orders from {site.ordersStartDate}.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/same-day-flower-delivery-nyc" className="font-semibold text-leaf hover:underline">
              Same-day flower delivery NYC
            </Link>
            {" · "}
            <Link href="/florist-queens-ny" className="font-semibold text-leaf hover:underline">
              Queens florist
            </Link>
            {" · "}
            <Link href="/flower-delivery-brooklyn-ny" className="font-semibold text-leaf hover:underline">
              Brooklyn
            </Link>
            {" · "}
            <Link href="/flower-delivery-manhattan-ny" className="font-semibold text-leaf hover:underline">
              Manhattan
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
