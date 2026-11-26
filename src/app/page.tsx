import type { Metadata } from "next";
import { Collection } from "@/components/Collection";
import { Craft } from "@/components/Craft";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { FinalCta } from "@/components/FinalCta";
import { FloristsStrip } from "@/components/FloristsStrip";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { NycPromise } from "@/components/NycPromise";
import { OccasionsStrip } from "@/components/OccasionsStrip";
import { PhotoStrip } from "@/components/PhotoStrip";
import { Reviews } from "@/components/Reviews";
import { SizeGuide } from "@/components/SizeGuide";
import { TrustBar } from "@/components/TrustBar";
import { atelierPhotos, deliveryPhotos } from "@/lib/ops";
import {
  breadcrumbSchema,
  flowerDeliveryServiceSchema,
  howToOrderSchema,
  reviewsSchema,
} from "@/lib/structured-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "NYC Same-Day Flower Delivery | Petalswift · Florist",
  },
  description: site.description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
};

export default function Home() {
  const reviewLd = reviewsSchema();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          howToOrderSchema(),
          flowerDeliveryServiceSchema(),
          ...(reviewLd ? [reviewLd] : []),
        ]}
      />
      <Hero />
      <TrustBar />
      <OccasionsStrip />
      <Craft />
      <Collection />
      <SizeGuide />
      <FloristsStrip />
      <PhotoStrip
        title="Atelier craft and delivery photography."
        intro="Florist work in Jackson Heights and NYC handoffs—operational proof, not decoration."
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
