import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SellerApplyForm } from "@/components/SellerApplyForm";
import { PLATFORM_COMMISSION_PERCENT } from "@/lib/sellers";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Create Shop Owner Account | Sell on Petalswift",
  description:
    "Apply to sell flowers on Petalswift. Shop owners create a seller account, list bouquets, and join the NYC marketplace.",
  alternates: { canonical: "/sell/apply" },
  robots: { index: true, follow: true },
};

export default function SellApplyPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell on Petalswift", path: "/sell" },
          { name: "Create shop account", path: "/sell/apply" },
        ])}
      />
      <section className="site-shell grid gap-10 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
            Shop owner onboarding
          </p>
          <h1 className="font-display mt-4 text-5xl tracking-[-0.035em] text-ink md:text-6xl">
            Create your seller account.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            For florists and flower shop owners who want to sell products on the
            Petalswift platform. You keep your brand; we bring NYC demand,
            delivery trust, and checkout.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>· {PLATFORM_COMMISSION_PERCENT}% platform fee on completed orders</li>
            <li>· Seller dashboard to draft listings immediately</li>
            <li>· Public shop page once approved</li>
            <li>· Same-day capable shops prioritized for holiday volume</li>
          </ul>
          <p className="mt-8 text-sm">
            Already applied?{" "}
            <Link href="/sell/account" className="font-semibold text-leaf hover:underline">
              Open seller dashboard →
            </Link>
          </p>
        </div>
        <SellerApplyForm />
      </section>
    </div>
  );
}
