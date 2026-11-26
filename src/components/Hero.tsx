import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-leaf-deep">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=2400&q=90"
          alt="Hand-tied luxury Petalswift bouquet with seasonal blooms"
          fill
          priority
          className="hero-media object-cover object-[center_32%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      <div className="relative site-shell flex min-h-[100svh] flex-col justify-end pb-16 pt-36 md:justify-center md:pb-28 md:pt-32">
        <div className="max-w-2xl text-porcelain">
          <p className="reveal font-display text-[4.2rem] leading-[0.88] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            {site.name}
          </p>
          <h1 className="reveal reveal-delay-1 mt-7 max-w-lg text-2xl leading-snug text-porcelain md:text-[2rem]">
            {site.tagline}
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-md text-base leading-relaxed text-porcelain/78 md:text-lg">
            Christmas orders are open. Same-day bouquets across the five
            boroughs—composed in Jackson Heights, delivered with quiet precision.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/christmas"
              className="inline-flex bg-porcelain px-7 py-3.5 text-sm text-leaf transition-colors hover:bg-white"
            >
              Shop Christmas
            </Link>
            <Link
              href="/order"
              className="inline-flex border border-porcelain/35 px-7 py-3.5 text-sm text-porcelain transition-colors hover:border-porcelain/70 hover:bg-white/10"
            >
              Start an order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
