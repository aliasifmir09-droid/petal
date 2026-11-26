import Link from "next/link";
import { LocalNap } from "@/components/LocalNap";
import { faqs, site } from "@/lib/site";

/** People-first keyword copy + FAQ for Google discovery (SEO Starter Guide). */
export function MarketSeoCopy() {
  const topFaqs = faqs.slice(0, 4);

  return (
    <section className="border-y border-line bg-canvas">
      <div className="site-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
            Same-day flower delivery in New York City
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Petalswift is a Jackson Heights florist for same-day flower delivery
            across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.
            We compose Classic, Signature, and Grand bouquets to order—Christmas
            centerpieces, hatboxes, lily-free gifts, and corporate lobby
            florals—then hand them off with published borough fees and email/SMS
            updates. Taking orders from {site.ordersStartDate}.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft md:text-base">
            <li>
              <Link href="/christmas" className="font-semibold text-leaf hover:underline">
                Christmas flower delivery NYC
              </Link>{" "}
              — holiday bouquets through Dec 23, Eve cutoff{" "}
              {site.christmasEveCutoff}.
            </li>
            <li>
              <Link href="/arrangements" className="font-semibold text-leaf hover:underline">
                Shop all arrangements
              </Link>{" "}
              — filter by style, color, bloom, and recipient.
            </li>
            <li>
              <Link href="/delivery" className="font-semibold text-leaf hover:underline">
                NYC delivery fees &amp; windows
              </Link>{" "}
              — from ${site.deliveryFeeFrom}, order by {site.orderCutoff}.
            </li>
            <li>
              <Link href="/nyc" className="font-semibold text-leaf hover:underline">
                Borough flower delivery guides
              </Link>{" "}
              — Manhattan through Staten Island.
            </li>
          </ul>

          <div className="mt-10 space-y-6">
            {topFaqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm">
            <Link href="/faq" className="font-semibold text-leaf hover:underline">
              More NYC flower delivery FAQs →
            </Link>
          </p>
        </div>
        <LocalNap />
      </div>
    </section>
  );
}
