import Link from "next/link";
import { boroughs, site } from "@/lib/site";

const points = [
  {
    title: "Same-day, five boroughs",
    body: `Order by ${site.orderCutoff} for delivery across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.`,
  },
  {
    title: "Fresh this morning",
    body: "We arrange to order from our Jackson Heights atelier—no tired overnight inventory staged for tomorrow’s photo.",
  },
  {
    title: "Quiet, reliable handoff",
    body: "Clear tracking, careful packaging, and delivery instructions for doormen, lobbies, and offices.",
  },
];

export function NycPromise() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-leaf text-porcelain">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-petal/15 blur-3xl"
      />
      <div className="site-shell section-gap">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-petal">
            Built for New York
          </p>
          <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-[-0.035em] md:text-6xl">
            Trust, earned in hours—not ads.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-porcelain/72 md:text-lg">
            New Yorkers judge florists on punctuality, freshness, and presence.
            Petalswift is designed around those three—from Jackson Heights to
            every borough.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {points.map((point) => (
            <div key={point.title}>
              <h3 className="font-display text-2xl tracking-[-0.025em] md:text-3xl">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-porcelain/70 md:text-base">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm text-porcelain/80">
          {boroughs.map((borough) => (
            <Link
              key={borough.slug}
              href={`/nyc/${borough.slug}`}
              className="underline-offset-4 hover:text-porcelain hover:underline"
            >
              {borough.name}
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/delivery"
            className="inline-flex bg-porcelain px-7 py-3.5 text-sm text-leaf transition-colors hover:bg-white"
          >
            See delivery windows
          </Link>
        </div>
      </div>
    </section>
  );
}
