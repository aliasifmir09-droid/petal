import Link from "next/link";
import {
  laNeighborhoodPath,
  laNeighborhoods,
  losAngeles,
} from "@/lib/los-angeles";
import { neighborhoodPath, neighborhoods } from "@/lib/neighborhoods";
import { site } from "@/lib/site";

const newYorkCityOrder = [
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

function listLabel(slug: string, name: string) {
  if (slug === "upper-east-side") return "the Upper East Side";
  if (slug === "upper-west-side") return "the Upper West Side";
  if (slug === "west-village") return "the West Village";
  return name;
}

function LinkedPlaces({
  places,
}: {
  places: { key: string; href: string; label: string }[];
}) {
  return (
    <>
      {places.map((place, index) => {
        const separator =
          index === places.length - 1
            ? ""
            : index === places.length - 2
              ? ", and "
              : ", ";
        return (
          <span key={place.key}>
            <Link href={place.href} className="font-semibold text-leaf hover:underline">
              {place.label}
            </Link>
            {separator}
          </span>
        );
      })}
    </>
  );
}

/** Crawlable city facts on every page. The city is New York City, not New York. */
export function MarketIdentity() {
  const newYorkCity = newYorkCityOrder
    .map((slug) => neighborhoods.find((n) => n.slug === slug))
    .filter((n) => n !== undefined)
    .map((place) => ({
      key: place.slug,
      href: neighborhoodPath(place),
      label: listLabel(place.slug, place.name),
    }));

  const losAngelesPlaces = laNeighborhoods.map((place) => ({
    key: place.slug,
    href: laNeighborhoodPath(place),
    label: place.listLabel,
  }));

  return (
    <section className="border-t border-line bg-canvas">
      <div className="site-shell grid gap-10 py-12 lg:grid-cols-3 lg:py-14">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            New York City Neighborhood Delivery
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            We deliver flowers across New York City, including Queens, Brooklyn,
            Manhattan, the Bronx, and Staten Island. Same-day delivery when
            ordered by {site.orderCutoff} in <LinkedPlaces places={newYorkCity} />.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            Los Angeles Neighborhood Delivery
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            We also deliver in the City of Los Angeles. Same-day delivery when
            ordered by {losAngeles.orderCutoff} in{" "}
            <LinkedPlaces places={losAngelesPlaces} />. Separate cities such as
            Beverly Hills and Santa Monica come later.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            About {site.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            {site.name} is a US florist starting in New York City and Los
            Angeles on {site.ordersStartDate}. The studio is at{" "}
            {site.address.streetAddress}, {site.address.addressLocality},{" "}
            {site.address.addressRegion} {site.address.postalCode}. Same-day in
            New York City by {site.orderCutoff}, and in Los Angeles by{" "}
            {losAngeles.orderCutoff}. Phone:{" "}
            <a className="font-semibold text-leaf hover:underline" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </a>
            . Email:{" "}
            <a className="font-semibold text-leaf hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . More cities, then nationwide delivery, follow these two.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/nyc" className="font-semibold text-leaf hover:underline">
              New York City
            </Link>
            {" · "}
            <Link href="/los-angeles" className="font-semibold text-leaf hover:underline">
              Los Angeles
            </Link>
            {" · "}
            <Link
              href="/same-day-flower-delivery-los-angeles"
              className="font-semibold text-leaf hover:underline"
            >
              LA same-day
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
