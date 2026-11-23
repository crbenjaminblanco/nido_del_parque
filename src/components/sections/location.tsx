import Image from "next/image";
import type { CSSProperties } from "react";
import { MapPin, ShoppingBasket, UtensilsCrossed, Coffee } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { Container, SectionHeading } from "../ui";
import { MapEmbed } from "../map-embed";
import { WazeIcon } from "../social-icons";
import { sectionId } from "../nav-items";
import street from "../../../public/images/ubicacion.jpg";

const nearbyIcons = [ShoppingBasket, UtensilsCrossed, Coffee];

export function Location({ t }: { t: Dictionary }) {
  return (
    <section id={sectionId.location} aria-labelledby="location-title" className="bg-paper-2/60 py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div>
          <SectionHeading id="location-title" eyebrow={t.location.eyebrow} title={t.location.title} />
          <p className="reveal mt-5 flex gap-2 text-lg leading-relaxed text-ink-soft">
            <MapPin aria-hidden className="mt-1.5 size-5 shrink-0 text-accent" />
            {t.location.address}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {t.location.nearby.map((n, i) => {
              const Icon = nearbyIcons[i] ?? MapPin;
              return (
                <li key={n} style={{ "--i": i } as CSSProperties} className="reveal inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold">
                  <Icon aria-hidden className="size-3.5 text-accent" />
                  {n}
                </li>
              );
            })}
          </ul>
          <div className="reveal mt-8 grid grid-cols-2 gap-3">
            <a
              href={site.maps.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#33ccff] px-4 text-sm font-bold text-[#08242e] transition hover:brightness-105 active:scale-[0.98]"
            >
              <WazeIcon className="size-5" />
              {t.location.waze}
              <span className="sr-only"> {t.a11y.newTab}</span>
            </a>
            <a
              href={site.maps.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-bold text-accent-ink transition hover:brightness-110 active:scale-[0.98]"
            >
              <MapPin aria-hidden className="size-5" />
              {t.location.google}
              <span className="sr-only"> {t.a11y.newTab}</span>
            </a>
          </div>
          <div className="reveal relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image src={street} alt={t.location.imageAlt} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="reveal aspect-[4/3] overflow-hidden rounded-3xl border border-line lg:mt-8 lg:aspect-auto lg:h-auto lg:min-h-[28rem]">
          <MapEmbed src={site.maps.embed} title={t.location.mapTitle} activate={t.location.mapActivate} />
        </div>
      </Container>
    </section>
  );
}
