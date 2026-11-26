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
            Start Christmas orders now.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Operations are live for holiday gifts and same-day NYC delivery.
            Shop Christmas, place an order online, or call the atelier.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/christmas"
              className="inline-flex bg-leaf px-7 py-3.5 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
            >
              Shop Christmas
            </Link>
            <Link
              href="/order"
              className="inline-flex border border-ink/15 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
            >
              How to order
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
