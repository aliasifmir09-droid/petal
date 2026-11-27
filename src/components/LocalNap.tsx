import { site } from "@/lib/site";

type LocalNapProps = {
  className?: string;
  compact?: boolean;
};

/** Crawlable Name–Address–Phone block for Google local SEO. */
export function LocalNap({ className = "", compact = false }: LocalNapProps) {
  return (
    <section
      className={className}
      aria-label="Petalswift business name, address, and phone"
      itemScope
      itemType="https://schema.org/Florist"
    >
      <meta itemProp="url" content={site.url} />
      <div
        className={
          compact
            ? "text-sm leading-relaxed text-ink-soft"
            : "rounded-xl border border-line bg-porcelain p-6 text-sm leading-relaxed text-ink-soft md:p-8"
        }
      >
        {!compact ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-leaf">
            Office
          </p>
        ) : null}
        <p className={compact ? "font-semibold text-ink" : "mt-3 font-semibold text-ink"}>
          <span itemProp="name">{site.name}</span>
        </p>
        <p
          className="mt-2"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">{site.address.streetAddress}</span>
          <br />
          <span itemProp="addressLocality">{site.address.addressLocality}</span>
          , <span itemProp="addressRegion">{site.address.addressRegion}</span>{" "}
          <span itemProp="postalCode">{site.address.postalCode}</span>
          <meta itemProp="addressCountry" content={site.address.addressCountry} />
        </p>
        <p className="mt-2">
          <a
            href={`tel:${site.phone}`}
            itemProp="telephone"
            className="font-semibold text-leaf hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </p>
        <p className="mt-2">
          Hours:{" "}
          <span itemProp="openingHours" content="Mo-Su 08:00-20:00">
            {site.openingHours.days} {site.openingHours.opens}–
            {site.openingHours.closes} ET
          </span>
        </p>
        <p className="mt-1 text-xs text-ink-soft/80">{site.openingHours.note}</p>
        <p className="mt-2">
          <a
            href={site.googleBusinessUrl}
            className="text-leaf hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Find Petalswift on Google Maps
          </a>
          {" · "}
          Taking orders from {site.ordersStartDate}
        </p>
      </div>
    </section>
  );
}
