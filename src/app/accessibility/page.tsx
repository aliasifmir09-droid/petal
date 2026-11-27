import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Accessibility — Petalswift",
  description:
    "Petalswift accessibility commitment for our NYC flower shop website—how to request assistance and report barriers.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  const hours = `${site.openingHours.days}, ${site.openingHours.opens}–${site.openingHours.closes} ET`;

  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ])}
      />

      <section className="site-shell pb-12">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Customer service
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Accessibility
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          We want everyone to browse and order flowers from Petalswift. We aim for clear structure,
          readable contrast, and keyboard-friendly navigation as we improve the site.
        </p>
      </section>

      <section className="site-shell space-y-12 pb-28">
        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Our commitment</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
            <li>Semantic headings and labels on core shopping flows</li>
            <li>Text alternatives for product photography where we control the markup</li>
            <li>Visible focus states and skip-friendly page structure on key templates</li>
            <li>Phone ordering available if the website is difficult to use</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Need help ordering?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            Call{" "}
            <a className="text-leaf hover:underline" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </a>{" "}
            during {hours}, or email <ContactEmail className="text-leaf" />. We can take recipient
            details, ZIP, and card payment securely over the phone when needed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">Report a barrier</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            Tell us the page URL, what you were trying to do, and which assistive technology you use
            (if any). Use{" "}
            <Link href="/contact" className="text-leaf hover:underline">
              Contact
            </Link>{" "}
            or email <ContactEmail className="text-leaf" /> with subject “Accessibility”.
          </p>
        </div>
      </section>
    </div>
  );
}
