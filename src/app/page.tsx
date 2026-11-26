import type { Metadata } from "next";
import { Collection } from "@/components/Collection";
import { Craft } from "@/components/Craft";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { NycPromise } from "@/components/NycPromise";
import { OccasionsStrip } from "@/components/OccasionsStrip";
import { breadcrumbSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Petalswift | Luxury Same-Day Flower Marketplace in NYC",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <OccasionsStrip />
      <Craft />
      <Collection />
      <NycPromise />
      <section className="site-shell pb-24 md:pb-28">
        <DeliveryChecker />
      </section>
      <FinalCta />
    </>
  );
}
