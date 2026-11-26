import Link from "next/link";
import { site } from "@/lib/site";

const items = [
  {
    title: "Freshness guarantee",
    body: "Damaged or below standard? Photo within 24 hours → remake or resolution.",
    href: "/policies#freshness",
  },
  {
    title: "Delivery fees upfront",
    body: `From $${site.deliveryFeeFrom} by borough—shown before you pay.`,
    href: "/delivery",
  },
  {
    title: "Email & SMS updates",
    body: "Confirmation, out-for-delivery, and handoff messages.",
    href: "/updates",
  },
  {
    title: "Secure checkout",
    body: site.paymentMethods.join(" · "),
    href: "/order",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-porcelain">
      <div className="site-shell grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-8">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-xl border border-line bg-canvas/40 p-4 transition-colors hover:border-leaf"
          >
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft md:text-sm">
              {item.body}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
