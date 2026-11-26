import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=2400&q=85"
          alt="Hand-tied luxury bouquet with seasonal blooms"
          fill
          priority
          className="hero-media object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2ef]/92 via-[#f4f2ef]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ebe7e1]/55 via-transparent to-[#f4f2ef]/20" />
      </div>

      <div className="relative site-shell flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-xl">
          <p className="reveal font-display text-5xl leading-[0.92] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            Petalswift
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-md text-2xl leading-snug text-ink md:text-3xl">
            Flowers, composed for New York.
          </h1>
          <p className="reveal reveal-delay-2 mt-4 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            Same-day bouquets across the five boroughs—arranged this morning,
            delivered with quiet precision.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex bg-leaf px-6 py-3.5 text-sm text-canvas transition-colors hover:bg-leaf-deep"
            >
              Shop bouquets
            </Link>
            <Link
              href="/delivery"
              className="inline-flex border border-ink/15 bg-white/40 px-6 py-3.5 text-sm text-ink backdrop-blur-sm transition-colors hover:border-ink/30 hover:bg-white/70"
            >
              NYC same-day
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
