import Link from "next/link";
import { site } from "@/lib/site";

export function HolidayOpsBanner() {
  return (
    <section className="border-b border-line bg-petal text-ink">
      <div className="site-shell flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:py-3.5">
        <p className="text-sm leading-relaxed md:text-base">
          <span className="font-semibold">
            Taking orders from {site.ordersStartDate}.
          </span>{" "}
          Same-day in New York City through Dec 23 · Eve cutoff{" "}
          {site.christmasEveCutoff}. Los Angeles same-day by 1:00pm PT.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/christmas"
            className="inline-flex rounded-full bg-leaf px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-porcelain transition-colors hover:bg-leaf-deep"
          >
            Shop Christmas
          </Link>
          <Link
            href="/order"
            className="inline-flex rounded-full border border-ink/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink hover:bg-ink/5"
          >
            Start order
          </Link>
        </div>
      </div>
    </section>
  );
}
