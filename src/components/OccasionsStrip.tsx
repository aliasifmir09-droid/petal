import Link from "next/link";
import { occasions, styles } from "@/lib/catalog";

export function OccasionsStrip() {
  return (
    <section className="section-gap border-y border-line bg-porcelain">
      <div className="site-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
              Shop every option
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.03em] text-ink md:text-5xl">
              Occasions, styles, and more ways in.
            </h2>
          </div>
          <Link
            href="/arrangements"
            className="text-sm font-semibold text-leaf underline-offset-4 hover:underline"
          >
            View all arrangements
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/occasions/${occasion.slug}`}
              className="group border border-line bg-canvas/50 px-5 py-7 transition-colors hover:border-leaf hover:bg-porcelain"
            >
              <p className="font-display text-xl tracking-[-0.02em] text-ink md:text-2xl">
                {occasion.name}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft md:text-sm">
                {occasion.blurb}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {styles.map((style) => (
            <Link
              key={style.slug}
              href={`/styles/${style.slug}`}
              className="border border-line bg-porcelain px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-leaf hover:text-leaf"
            >
              {style.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
