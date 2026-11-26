import Link from "next/link";

const points = [
  {
    title: "Same-day, five boroughs",
    body: "Order by 1pm for delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
  },
  {
    title: "Fresh this morning",
    body: "We arrange to order—no tired overnight inventory staged for tomorrow’s photo.",
  },
  {
    title: "Quiet, reliable handoff",
    body: "Clear tracking, careful packaging, and a delivery experience that feels considered.",
  },
];

export function NycPromise() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-leaf text-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-petal/20 blur-3xl"
      />
      <div className="site-shell py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-canvas/60">
            Built for New York
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Trust, earned in hours—not ads.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-canvas/75 md:text-lg">
            New Yorkers judge florists on punctuality, freshness, and presence.
            Petalswift is designed around those three—nothing ornamental.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {points.map((point) => (
            <div key={point.title}>
              <h3 className="font-display text-2xl tracking-[-0.02em]">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-canvas/70">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/delivery"
            className="inline-flex bg-canvas px-6 py-3.5 text-sm text-leaf transition-colors hover:bg-white"
          >
            See delivery windows
          </Link>
        </div>
      </div>
    </section>
  );
}
