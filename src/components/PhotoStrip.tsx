import Image from "next/image";
import type { StudioPhoto } from "@/lib/ops";

export function PhotoStrip({
  title,
  intro,
  photos,
}: {
  title: string;
  intro: string;
  photos: StudioPhoto[];
}) {
  return (
    <section className="section-gap">
      <div className="site-shell">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          Photography
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-3xl tracking-[-0.03em] text-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          {intro}
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {photos.map((photo) => (
            <figure key={photo.src + photo.caption} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-mist/30">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="img-zoom object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-soft/75">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
