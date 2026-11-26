import Image from "next/image";
import Link from "next/link";
import { florists } from "@/lib/ops";

export function FloristsStrip() {
  return (
    <section className="section-gap border-y border-line bg-canvas/40">
      <div className="site-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
              Our florists
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.03em] text-ink md:text-5xl">
              The Jackson Heights team behind every send.
            </h2>
          </div>
          <Link
            href="/about#florists"
            className="text-sm font-semibold text-leaf underline-offset-4 hover:underline"
          >
            Atelier story →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {florists.map((person) => (
            <article key={person.role} className="overflow-hidden rounded-xl border border-line bg-porcelain">
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.image}
                  alt={`${person.role} at Petalswift`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-leaf">{person.role}</p>
                <h3 className="font-display mt-2 text-2xl text-ink">{person.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
