import Link from "next/link";
import { site } from "@/lib/site";

export function FreshnessGuarantee({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className={
        compact
          ? "rounded-xl border border-leaf/20 bg-leaf/5 p-4"
          : "rounded-xl border border-leaf/20 bg-leaf/5 p-6 md:p-8"
      }
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-leaf">
        Freshness guarantee
      </p>
      <p className={`mt-3 leading-relaxed text-ink ${compact ? "text-sm" : "text-base"}`}>
        {site.freshnessGuarantee}
      </p>
      <p className="mt-3 text-sm text-ink-soft">
        Call{" "}
        <a href={`tel:${site.phone}`} className="font-semibold text-leaf hover:underline">
          {site.phoneDisplay}
        </a>{" "}
        or see{" "}
        <Link href="/policies#freshness" className="font-semibold text-leaf hover:underline">
          full policies
        </Link>
        .
      </p>
    </aside>
  );
}
