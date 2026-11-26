export function Craft() {
  return (
    <section className="border-y border-line bg-white/40 py-20 md:py-28">
      <div className="site-shell grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/80">
            The standard
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl">
            Arranged like a private atelier. Delivered like a modern service.
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
          Every stem is selected for presence and longevity. We compose for the
          room it will enter—not the warehouse it left—so the first impression
          feels intentional, calm, and unmistakably elevated.
        </p>
      </div>
    </section>
  );
}
