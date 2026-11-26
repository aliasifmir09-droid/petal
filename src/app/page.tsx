import { Collection } from "@/components/Collection";
import { Craft } from "@/components/Craft";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { NycPromise } from "@/components/NycPromise";

export default function Home() {
  return (
    <>
      <Hero />
      <Craft />
      <Collection />
      <NycPromise />
      <FinalCta />
    </>
  );
}
