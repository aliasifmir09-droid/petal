import Link from "next/link";
import { site } from "@/lib/site";

export function HolidayOpsBanner() {
  return (
    <section className="border-b border-line bg-leaf text-porcelain">
      <div className="site-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:py-6">
        <p className="text-sm leading-relaxed md:text-base">
          <span className="font-semibold">Christmas orders are open.</span>{" "}
          Same-day NYC delivery through Dec 23 · Eve cutoff{" "}
          {site.christmasEveCutoff}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/christmas"
            className="inline-flex bg-petal px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-petal-deep"
          >
            Shop Christmas
          </Link>
          <Link
            href="/order"
            className="inline-flex border border-porcelain/50 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-porcelain transition-colors hover:border-porcelain hover:bg-white/10"
          >
            Start order
          </Link>
        </div>
      </div>
    </section>
  );
}
