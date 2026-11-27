import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Press & Brand Kit | Petalswift",
  description:
    "Petalswift press assets: logo downloads, office address for directories, and media contact.",
  alternates: { canonical: "/press" },
};

const assets = [
  {
    href: "/logo.png",
    label: "Horizontal lockup (PNG)",
    detail: "1200×400 — press, email, Google Business",
  },
  {
    href: "/logo.svg",
    label: "Horizontal lockup (SVG)",
    detail: "Vector wordmark on brand blue",
  },
  {
    href: "/logo-wordmark.png",
    label: "Wordmark on transparent (PNG)",
    detail: "1200×320 — light backgrounds",
  },
  {
    href: "/logo-mark.svg",
    label: "Pinwheel mark (SVG)",
    detail: "Icon-only bloom mark",
  },
  {
    href: "/icon.png",
    label: "App icon 512",
    detail: "Square tile for profiles",
  },
  {
    href: "/apple-touch-icon.png",
    label: "Apple touch icon",
    detail: "180×180",
  },
];

export default function PressPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Press", path: "/press" },
        ])}
      />

      <section className="site-shell pb-16">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/75">
          Press & brand
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Brand kit for partners and press.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Use these official assets when listing Petalswift in directories,
          partnerships, or media. NAP must match exactly for Google local SEO.
        </p>

        <div className="mt-10 grid gap-6 border border-line bg-porcelain p-6 md:grid-cols-2 md:p-8">
          <div>
            <h2 className="font-display text-2xl text-ink">Official NAP</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">{site.name}</strong>
              <br />
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality}, {site.address.addressRegion}{" "}
              {site.address.postalCode}
              <br />
              {site.phoneDisplay}
              <br />
              <ContactEmail />
              <br />
              {site.url}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Boilerplate</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Petalswift is a New York City same-day flower marketplace and
              florist for New York City and Los Angeles. We compose Classic,
              Signature, and Grand arrangements and deliver across Manhattan,
              Brooklyn, Queens, the Bronx, and Staten Island. Taking orders from{" "}
              {site.ordersStartDate}.
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              Media / partnerships:{" "}
              <ContactEmail className="text-leaf hover:underline" /> ·{" "}
              <a href={`tel:${site.phone}`} className="text-leaf hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-porcelain/60 py-16">
        <div className="site-shell">
          <h2 className="font-display text-3xl text-ink">Logo downloads</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assets.map((asset) => (
              <a
                key={asset.href}
                href={asset.href}
                className="border border-line bg-porcelain p-5 transition-colors hover:border-leaf"
                download
              >
                <div className="relative mb-4 flex h-28 items-center justify-center bg-canvas">
                  <Image
                    src={asset.href.endsWith(".svg") ? "/icon.png" : asset.href}
                    alt=""
                    width={160}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-ink">{asset.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{asset.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-16">
        <h2 className="font-display text-3xl text-ink">Get found faster</h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-ink-soft">
          <li>
            Claim Google Business Profile with this exact NAP and category{" "}
            <strong className="text-ink">Florist</strong> (+ Flower Delivery).
          </li>
          <li>
            Submit{" "}
            <Link href="/sitemap.xml" className="text-leaf hover:underline">
              sitemap.xml
            </Link>{" "}
            in Search Console; request indexing for /blog, /qa, and borough pages.
          </li>
          <li>
            Shop owners: list bouquets via{" "}
            <Link href="/sell/apply" className="text-leaf hover:underline">
              /sell/apply
            </Link>
            .
          </li>
        </ul>
      </section>
    </div>
  );
}
