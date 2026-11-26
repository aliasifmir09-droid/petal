import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const promos = [
  {
    href: "/christmas",
    badge: "Holiday deals",
    title: "Christmas flowers—same-day NYC",
    cta: "Shop Christmas",
    tone: "light" as const,
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Christmas floral arrangement",
  },
  {
    href: "/arrangements",
    badge: "Marketplace",
    title: "Fashion stems & beyond: every style",
    cta: "Shop all flowers",
    tone: "blue" as const,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Assorted luxury bouquets",
  },
  {
    href: "/styles/hatbox",
    badge: "Gift ready",
    title: "Hatboxes & gift sets up to wow",
    cta: "Shop hatboxes",
    tone: "blue" as const,
    image:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Hatbox flower gift",
  },
  {
    href: "/delivery",
    badge: "NYC delivery",
    title: "Race into same-day across 5 boroughs",
    cta: "See fees & windows",
    tone: "blue" as const,
    image:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Same-day bouquet delivery",
  },
];

export function Hero() {
  const [featured, ...rest] = promos;

  return (
    <section className="bg-canvas pb-6 pt-4 md:pb-8 md:pt-5">
      <div className="site-shell">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 md:mb-5">
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">{site.name}</span> · Same-day
            flower marketplace for New York
          </p>
          <Link
            href="/order"
            className="text-sm font-semibold text-leaf underline-offset-2 hover:underline"
          >
            Start an order →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          <Link
            href={featured.href}
            className="group relative overflow-hidden rounded-xl bg-porcelain md:col-span-5 md:min-h-[420px]"
          >
            <div className="absolute inset-0">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>
            <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6 md:min-h-[420px] md:p-8">
              <span className="inline-flex w-fit rounded-md bg-petal px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink">
                {featured.badge}
              </span>
              <h1 className="mt-4 max-w-sm text-3xl font-bold leading-tight tracking-[-0.02em] text-porcelain md:text-4xl">
                {featured.title}
              </h1>
              <span className="mt-4 text-sm font-semibold text-porcelain underline underline-offset-4">
                {featured.cta}
              </span>
            </div>
          </Link>

          <div className="grid gap-4 sm:grid-cols-3 md:col-span-7 md:grid-cols-3 md:gap-5 lg:gap-6">
            {rest.map((promo) => (
              <Link
                key={promo.href}
                href={promo.href}
                className={`group flex min-h-[280px] flex-col overflow-hidden rounded-xl md:min-h-[420px] ${
                  promo.tone === "blue" ? "bg-leaf-deep text-porcelain" : "bg-porcelain text-ink"
                }`}
              >
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <span
                    className={`inline-flex w-fit rounded-md px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] ${
                      promo.tone === "blue"
                        ? "bg-white/15 text-porcelain"
                        : "bg-canvas text-ink"
                    }`}
                  >
                    {promo.badge}
                  </span>
                  <h2 className="mt-4 text-xl font-bold leading-snug tracking-[-0.02em] md:text-2xl">
                    {promo.title}
                  </h2>
                  <span
                    className={`mt-3 text-sm font-semibold underline underline-offset-4 ${
                      promo.tone === "blue" ? "text-petal" : "text-leaf"
                    }`}
                  >
                    {promo.cta}
                  </span>
                </div>
                <div className="relative mt-auto h-36 md:h-44">
                  <Image
                    src={promo.image}
                    alt={promo.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 22vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
