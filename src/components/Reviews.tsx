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
    <section className="border-y border-line bg-porcelain/55 py-16 md:py-20">
      <div className="site-shell">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
              Customer reviews
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-[-0.03em] text-ink md:text-5xl">
              {heading}
            </h2>
          </div>
          <p className="text-sm text-ink-soft">
            {reviewAggregate.ratingValue}/5 · {reviewAggregate.reviewCount}{" "}
            verified deliveries
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((review) => (
            <article
              key={review.id}
              className="border border-line bg-canvas/40 p-5 md:p-6"
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
