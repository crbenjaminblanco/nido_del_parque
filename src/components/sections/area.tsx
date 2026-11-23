import Image from "next/image";
import { ArrowUpRight, Car, Footprints } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { places } from "@/data/media";
import { Container, SectionHeading } from "../ui";
import { Carousel } from "../carousel";
import { sectionId } from "../nav-items";

const mapsSearch = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export function Area({ t }: { t: Dictionary }) {
  return (
    <section id={sectionId.area} aria-labelledby="area-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="area-title" eyebrow={t.area.eyebrow} title={t.area.title} lead={t.area.lead} />
        <div className="reveal mt-10">
          <Carousel
            label={t.area.title}
            prevLabel={t.a11y.prev}
            nextLabel={t.a11y.next}
            slideClassName="basis-[86%] sm:basis-[48%] lg:basis-[32%]"
          >
            {places.map((p) => {
              const copy = t.area.places[p.key];
              const Mode = p.mode === "walk" ? Footprints : Car;
              return (
                <article key={p.key} className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card">
                  <div className="relative aspect-[4/3] bg-paper-2">
                    <Image
                      src={p.src}
                      alt={copy.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 84vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0b1517]/75 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      <Mode aria-hidden className="size-3.5" />
                      {copy.distance}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[1.75rem] leading-tight">{copy.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pretty text-ink-soft">{copy.text}</p>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-x-3 pt-4">
                      <a
                        href={mapsSearch(p.query)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent hover:underline"
                      >
                        {t.area.map}
                        <ArrowUpRight aria-hidden className="size-4" />
                        <span className="sr-only"> {t.a11y.newTab}</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
