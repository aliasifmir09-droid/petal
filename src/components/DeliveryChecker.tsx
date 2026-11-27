"use client";

import { useMemo, useState } from "react";
import { lookupLaZip, losAngeles } from "@/lib/los-angeles";
import { deliveryFeeForBorough } from "@/lib/ops";
import { boroughs, site } from "@/lib/site";

const nycZips = new Set([
  // Manhattan sample + common
  "10001", "10002", "10003", "10011", "10012", "10013", "10014", "10016",
  "10017", "10019", "10021", "10022", "10023", "10024", "10025", "10028",
  "10036", "10128",
  // Brooklyn
  "11201", "11205", "11211", "11215", "11217", "11222", "11231", "11238",
  // Queens / Jackson Heights
  "11372", "11373", "11374", "11375", "11101", "11102", "11103", "11104",
  "11105", "11106", "11354", "11355", "11358", "11361", "11364", "11365",
  "11366", "11367", "11368", "11369", "11370", "11371", "11377", "11378",
  "11379", "11385", "11415", "11418", "11421", "11432",
  // Bronx
  "10451", "10452", "10453", "10454", "10455", "10456", "10457", "10458",
  "10461", "10462", "10463", "10464", "10465", "10467", "10468", "10471",
  // Staten Island
  "10301", "10302", "10304", "10305", "10306", "10307", "10308", "10309",
  "10310", "10312", "10314",
]);

function guessBorough(zip: string) {
  if (zip.startsWith("100") || zip.startsWith("101") || zip.startsWith("102")) {
    return "Manhattan";
  }
  if (zip.startsWith("112")) return "Brooklyn";
  if (zip.startsWith("111") || zip.startsWith("113") || zip.startsWith("114")) {
    return "Queens";
  }
  if (zip.startsWith("104")) return "The Bronx";
  if (zip.startsWith("103")) return "Staten Island";
  return null;
}

export function DeliveryChecker({ compact = false }: { compact?: boolean }) {
  const [zip, setZip] = useState("");
  const [touched, setTouched] = useState(false);

  const result = useMemo(() => {
    const clean = zip.replace(/\D/g, "").slice(0, 5);
    if (clean.length < 5) return null;
    if (nycZips.has(clean)) {
      const borough = guessBorough(clean);
      const zone = borough ? deliveryFeeForBorough(borough) : null;
      return {
        clean,
        eligible: true as const,
        place: borough,
        city: "New York City" as const,
        fee: zone?.fee ?? null,
        window: zone?.sameDayWindow ?? null,
        cutoff: site.orderCutoff,
      };
    }
    const la = lookupLaZip(clean);
    if (la) {
      return {
        clean,
        eligible: true as const,
        place: la.label,
        city: "Los Angeles" as const,
        fee: la.area.fee,
        window: la.area.sameDayWindow,
        cutoff: losAngeles.orderCutoff,
      };
    }
    return { clean, eligible: false as const };
  }, [zip]);

  return (
    <div
      className={
        compact
          ? "border border-line bg-porcelain/70 p-4"
          : "border border-line bg-porcelain/80 p-6 md:p-8"
      }
    >
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
        Delivery check
      </p>
      <h3 className="font-display mt-2 text-2xl tracking-[-0.03em] text-ink md:text-3xl">
        Can we reach them today?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Enter a New York City or Los Angeles ZIP. Same-day by {site.orderCutoff}{" "}
        in New York City, or {losAngeles.orderCutoff} in Los Angeles.
      </p>
      <form
        className="mt-5 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          setTouched(true);
        }}
      >
        <label className="sr-only" htmlFor="delivery-zip">
          ZIP code
        </label>
        <input
          id="delivery-zip"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={5}
          placeholder="e.g. 11372"
          value={zip}
          onChange={(e) => {
            setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
            setTouched(false);
          }}
          className="w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-leaf sm:max-w-[180px]"
        />
        <button
          type="submit"
          className="bg-leaf px-5 py-3 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Check delivery
        </button>
      </form>

      {touched && result ? (
        <p
          className={`mt-4 text-sm leading-relaxed ${
            result.eligible ? "text-leaf" : "text-ink-soft"
          }`}
        >
          {result.eligible ? (
            <>
              Yes — we deliver to {result.clean}
              {result.place ? ` (${result.place}, ${result.city})` : ""}. Same-day
              available when ordered by {result.cutoff}
              {result.fee && result.window
                ? ` · Fee $${result.fee} · Window ${result.window}`
                : ""}
              .
            </>
          ) : (
            <>
              That ZIP is outside the cities we deliver to now. We start in New
              York City ({boroughs.map((b) => b.name).join(", ")}) and in the
              City of Los Angeles.
            </>
          )}
        </p>
      ) : null}
    </div>
  );
}
