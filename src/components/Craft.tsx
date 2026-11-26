export function Craft() {
  return (
    <section className="section-gap border-y border-line bg-porcelain">
      <div className="site-shell grid items-end gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-24">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
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
