import Link from "next/link";
import { reviews, reviewAggregate } from "@/lib/ops";
import { site } from "@/lib/site";

export function Reviews({
  limit = 6,
  heading = "Customer proof, built honestly",
  productName,
}: {
  limit?: number;
  heading?: string;
  productName?: string;
}) {
  const list = productName
    ? reviews.filter((r) => r.product === productName).slice(0, limit)
    : reviews.slice(0, limit);

  if (list.length === 0) {
    return (
      <section className="section-gap border-y border-line bg-porcelain">
        <div className="site-shell max-w-3xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
            Reviews
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-[-0.03em] text-ink md:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            Petalswift is a new NYC atelier. We do not publish invented
            testimonials. As verified deliveries arrive, reviews will appear
            here and on our Google Business Profile—with delivery photos when
            customers share them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-spark"
            >
              Find us on Google
            </a>
            <Link href="/gallery" className="btn-brand">
              Delivery photo gallery
            </Link>
            <Link
              href="/policies"
              className="inline-flex border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf"
            >
              Read policies
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-gap border-y border-line bg-porcelain">
      <div className="site-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
              Verified reviews
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.03em] text-ink md:text-5xl">
              {heading}
            </h2>
          </div>
          <p className="text-sm font-semibold text-ink-soft">
            {reviewAggregate.ratingValue}/5 · {reviewAggregate.reviewCount}{" "}
            verified deliveries
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {list.map((review) => (
            <article key={review.id} className="commerce-card bg-canvas/40">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-leaf">
                {"★".repeat(review.rating)}
                <span className="text-ink-soft/40">
                  {"★".repeat(5 - review.rating)}
                </span>
              </p>
              <h3 className="font-display mt-3 text-2xl tracking-[-0.02em] text-ink">
                {review.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {review.body}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft/70">
                {review.name} · {review.neighborhood}
                {review.verifiedDelivery ? " · Verified delivery" : ""}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
