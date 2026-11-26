import Link from "next/link";
import { site } from "@/lib/site";

export function HolidayOpsBanner() {
  return (
    <section className="border-b border-line bg-leaf text-porcelain">
      <div className="site-shell flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed md:text-base">
          <span className="font-medium">Christmas orders are open.</span>{" "}
          Same-day NYC delivery through Dec 23 · Eve cutoff{" "}
          {site.christmasEveCutoff}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/christmas"
            className="inline-flex bg-porcelain px-4 py-2 text-xs uppercase tracking-[0.14em] text-leaf transition-colors hover:bg-white"
          >
            Shop Christmas
          </Link>
          <Link
            href="/order"
            className="inline-flex border border-porcelain/40 px-4 py-2 text-xs uppercase tracking-[0.14em] text-porcelain transition-colors hover:border-porcelain"
          >
            Start order
          </Link>
        </div>
      </div>
    </section>
  );
}
