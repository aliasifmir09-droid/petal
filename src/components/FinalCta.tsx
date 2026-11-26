import Link from "next/link";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-24 md:py-32">
      <div className="site-shell">
        <div className="relative overflow-hidden bg-canvas-deep px-8 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-leaf/10 blur-3xl"
          />
          <p className="font-display text-4xl tracking-[-0.035em] text-ink md:text-6xl">
            Send something unforgettable today.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Choose a composition, add a note, and we handle the rest—from our
            Jackson Heights atelier across New York.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
            >
              Browse bouquets
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
