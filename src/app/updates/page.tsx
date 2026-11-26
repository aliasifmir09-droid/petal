import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { OrderUpdatesForm } from "@/components/OrderUpdatesForm";
import { notificationChannels } from "@/lib/ops";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Email & SMS Order Updates",
  description:
    "Get Petalswift NYC flower order updates by email and SMS—confirmation, out for delivery, and handoff notifications.",
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  return (
    <div className="pt-28 md:pt-36">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Order updates", path: "/updates" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Notifications
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Email and SMS order updates.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Every Petalswift delivery includes proactive updates so you are not
          guessing where the bouquet is. Prefer phone? Call{" "}
          <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <section className="site-shell grid gap-8 pb-24 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          {notificationChannels.map((channel) => (
            <article
              key={channel.id}
              className="border border-line bg-canvas/40 p-6"
            >
              <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">
                {channel.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {channel.description}
              </p>
            </article>
          ))}
          <article className="border border-line bg-canvas/40 p-6">
            <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">
              What you receive
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-soft">
              <li>Order confirmation with delivery fee and window</li>
              <li>Composition started at the Jackson Heights atelier</li>
              <li>Out for delivery with courier window</li>
              <li>Delivered / handoff confirmation</li>
            </ol>
          </article>
        </div>
        <OrderUpdatesForm />
      </section>
    </div>
  );
}
