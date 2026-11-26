import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="site-shell">
        <div className="relative overflow-hidden bg-canvas-deep px-8 py-16 md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-leaf/10 blur-3xl"
          />
          <p className="font-display text-4xl tracking-[-0.03em] text-ink md:text-5xl">
            Send something unforgettable today.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Choose a composition, add a note, and we handle the rest—across New
            York, with the restraint of a brand people trust on first glance.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex bg-leaf px-6 py-3.5 text-sm text-canvas transition-colors hover:bg-leaf-deep"
          >
            Browse bouquets
          </Link>
        </div>
      </div>
    </section>
  );
}
