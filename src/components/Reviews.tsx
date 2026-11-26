import { reviewAggregate, reviews } from "@/lib/ops";

export function Reviews({
  limit = 6,
  heading = "Verified NYC delivery reviews",
}: {
  limit?: number;
  heading?: string;
}) {
  const list = reviews.slice(0, limit);

  return (
    <section className="section-gap border-y border-line bg-porcelain">
      <div className="site-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
              Customer reviews
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
            <article
              key={review.id}
              className="commerce-card bg-canvas/40"
            >
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
