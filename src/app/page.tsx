import type { Metadata } from "next";
import { Collection } from "@/components/Collection";
import { Craft } from "@/components/Craft";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { NycPromise } from "@/components/NycPromise";
import { OccasionsStrip } from "@/components/OccasionsStrip";
import { PhotoStrip } from "@/components/PhotoStrip";
import { Reviews } from "@/components/Reviews";
import { SizeGuide } from "@/components/SizeGuide";
import { atelierPhotos, deliveryPhotos } from "@/lib/ops";
import {
  breadcrumbSchema,
  flowerDeliveryServiceSchema,
  howToOrderSchema,
  reviewsSchema,
} from "@/lib/structured-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Petalswift | Same-Day Flower Marketplace in NYC",
  description: `${site.description} Christmas flower orders open now.`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          howToOrderSchema(),
          flowerDeliveryServiceSchema(),
          reviewsSchema(),
        ]}
      />
      <Hero />
      <OccasionsStrip />
      <Craft />
      <Collection />
      <SizeGuide />
      <PhotoStrip
        title="Atelier craft and delivery photography."
        intro="Florist work in Jackson Heights and real NYC handoffs—so shoppers see the standard before they order."
        photos={[...atelierPhotos.slice(0, 2), ...deliveryPhotos.slice(0, 2)]}
      />
      <Reviews />
      <NycPromise />
      <section className="site-shell pb-24 md:pb-28">
        <DeliveryChecker />
      </section>
      <FinalCta />
    </>
  );
}
