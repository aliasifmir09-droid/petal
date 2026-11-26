import Link from "next/link";
import { sizeTiers } from "@/lib/ops";

export function SizeGuide({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={
        compact
          ? "border border-line bg-porcelain/70 p-6"
          : "border-y border-line bg-porcelain/55 py-16 md:py-20"
      }
    >
      <div className={compact ? undefined : "site-shell"}>
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Size & pricing
        </p>
        <h2
          className={`font-display mt-3 tracking-[-0.03em] text-ink ${
            compact ? "text-2xl" : "text-3xl md:text-5xl"
          }`}
        >
          Classic, Signature, and Grand—explained.
        </h2>
        {!compact ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Price reflects stem count, vessel complexity, and presence in the
            room—not markup theater. Choose the tier that fits the space and the
            moment.
          </p>
        ) : null}
        <div
          className={`mt-8 grid gap-4 ${compact ? "" : "md:grid-cols-3"}`}
        >
          {sizeTiers.map((tier) => (
            <article
              key={tier.name}
              className="border border-line bg-canvas/40 p-5"
            >
              <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-leaf">
                ${tier.priceFrom}–${tier.priceTo}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-soft/70">
                {tier.stemGuide}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {tier.details}
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Best for: {tier.bestFor}
              </p>
            </article>
          ))}
        </div>
        {!compact ? (
          <Link
            href="/sizes"
            className="mt-8 inline-flex text-sm text-leaf underline-offset-4 hover:underline"
          >
            Full size guide →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
