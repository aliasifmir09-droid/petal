export function Craft() {
  return (
    <section className="border-y border-line bg-porcelain/70 py-24 md:py-32">
      <div className="site-shell grid items-end gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
            The standard
          </p>
          <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.02] tracking-[-0.035em] text-ink md:text-6xl">
            Arranged like a private atelier.
            <span className="block text-ink-soft">
              Delivered like a modern service.
            </span>
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
          Every stem is selected for presence and longevity. We compose for the
          room it will enter—so the first impression feels intentional, calm,
          and unmistakably elevated.
        </p>
      </div>
    </section>
  );
}
