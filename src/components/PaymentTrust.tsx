import { site } from "@/lib/site";

export function PaymentTrust() {
  return (
    <div className="rounded-xl border border-line bg-porcelain p-4">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
        Secure checkout
      </p>
      <p className="mt-2 text-sm text-ink-soft">
        Orders confirm by email with delivery fee, window, and support contacts.
        Accepted methods:
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {site.paymentMethods.map((method) => (
          <li
            key={method}
            className="rounded-full border border-line bg-canvas/50 px-3 py-1 text-xs font-semibold text-ink"
          >
            {method}
          </li>
        ))}
      </ul>
    </div>
  );
}
