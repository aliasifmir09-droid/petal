import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PhotoStrip } from "@/components/PhotoStrip";
import { atelierPhotos, deliveryPhotos } from "@/lib/ops";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Delivery & Atelier Photo Gallery",
  description:
    "Petalswift delivery photography—operational proof for same-day flower customers.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <section className="site-shell pb-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Proof gallery
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-[-0.035em] text-ink md:text-7xl">
          Delivery and atelier photography.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Visual evidence of composition and handoff—so first-time customers can
          see the standard before they buy. Customer-submitted delivery photos
          will be added as verified orders arrive.
        </p>
      </section>
      <PhotoStrip
        title="NYC delivery photography"
        intro="Arrangements as they arrive in apartments, lobbies, and kitchens."
        photos={deliveryPhotos}
      />
      <PhotoStrip
        title="Studio"
        intro="Morning conditioning, composition, and final checks before dispatch."
        photos={atelierPhotos}
      />
      <div className="site-shell pb-24">
        <Link href="/arrangements" className="btn-spark">
          Shop arrangements
        </Link>
      </div>
    </div>
  );
}
