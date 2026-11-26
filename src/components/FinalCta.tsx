import Link from "next/link";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="section-gap">
      <div className="site-shell">
        <div className="relative overflow-hidden border border-line bg-porcelain px-8 py-20 md:px-16 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-petal/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-leaf/15 blur-3xl"
          />
          <p className="font-display relative text-4xl tracking-[-0.035em] text-ink md:text-6xl">
            Start Christmas orders now.
          </p>
          <p className="relative mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Operations are live for holiday gifts and same-day NYC delivery.
            Shop Christmas, place an order online, or call the atelier.
          </p>
          <div className="relative mt-11 flex flex-wrap gap-4">
            <Link href="/christmas" className="btn-spark">
              Shop Christmas
            </Link>
            <Link href="/order" className="btn-brand">
              How to order
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-leaf hover:text-leaf"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
