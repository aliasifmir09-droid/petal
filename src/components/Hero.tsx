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
        <div className="absolute inset-0 bg-gradient-to-r from-[#004f9a]/85 via-[#0071dc]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/70 via-transparent to-[#004f9a]/25" />
      </div>

      <div className="relative site-shell flex min-h-[100svh] flex-col justify-end pb-20 pt-40 md:justify-center md:pb-32 md:pt-36">
        <div className="max-w-2xl text-porcelain">
          <p className="reveal inline-flex bg-petal px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink">
            Same-day NYC · Orders open
          </p>
          <p className="reveal reveal-delay-1 font-display mt-8 text-[4.2rem] leading-[0.88] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            {site.name}
          </p>
          <h1 className="reveal reveal-delay-2 mt-8 max-w-lg text-2xl leading-snug text-porcelain md:text-[2rem]">
            {site.tagline}
          </h1>
          <p className="reveal reveal-delay-3 mt-6 max-w-md text-base leading-relaxed text-porcelain/85 md:text-lg">
            Christmas orders are open. Same-day bouquets across the five
            boroughs—composed in Jackson Heights, delivered with quiet precision.
          </p>
          <div className="reveal reveal-delay-3 mt-11 flex flex-wrap items-center gap-4">
            <Link href="/christmas" className="btn-spark">
              Shop Christmas
            </Link>
            <Link
              href="/order"
              className="inline-flex border border-porcelain/50 px-7 py-3.5 text-sm font-semibold text-porcelain transition-colors hover:border-porcelain hover:bg-white/10"
            >
              Start an order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
