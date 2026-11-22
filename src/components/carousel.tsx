"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type Chip = { label: string; index: number };

type Props = {
  children: ReactNode[];
  label: string;
  prevLabel: string;
  nextLabel: string;
  /** Ancho de cada tarjeta (clases de Tailwind por tamaño de pantalla). */
  slideClassName: string;
  /** Atajos opcionales (p. ej. espacios del apartamento) que llevan a una tarjeta. */
  chips?: Chip[];
  chipsLabel?: string;
};

/**
 * Carrusel (Embla) pensado para celular y computadora:
 * - Celular: se desliza con el dedo, deja pasar el desplazamiento vertical y llega hasta
 *   el borde de la pantalla, con la primera tarjeta alineada al margen.
 * - Computadora: flechas de 44 px, arrastre con el mouse y deslizamiento con trackpad
 *   o rueda horizontal. Con teclado, Tab lleva a cada tarjeta y el carrusel la sigue.
 */
export function Carousel({ children, label, prevLabel, nextLabel, slideClassName, chips, chipsLabel }: Props) {
  const [ref, api] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", dragFree: false, inViewThreshold: 0.6 },
    [WheelGesturesPlugin()],
  );
  const [state, setState] = useState({ prev: false, next: true, index: 0, count: 0, slide: 0 });

  const sync = useCallback(() => {
    if (!api) return;
    const inView = api.slidesInView();
    setState({
      prev: api.canScrollPrev(),
      next: api.canScrollNext(),
      index: api.selectedScrollSnap(),
      count: api.scrollSnapList().length,
      slide: inView.length ? Math.min(...inView) : 0,
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", sync).on("reInit", sync).on("settle", sync).on("slidesInView", sync);
    const id = requestAnimationFrame(sync);
    return () => {
      cancelAnimationFrame(id);
      api.off("select", sync).off("reInit", sync).off("settle", sync).off("slidesInView", sync);
    };
  }, [api, sync]);

  // Atajo activo: el último cuyo índice ya se alcanzó.
  const activeChip = chips ? chips.reduce((acc, c, i) => (state.slide >= c.index ? i : acc), 0) : -1;

  const btn =
    "grid size-11 place-items-center rounded-full border border-line bg-card text-ink transition hover:bg-paper-2 disabled:opacity-35 disabled:hover:bg-card";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      {chips && (
        <div role="group" aria-label={chipsLabel} className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {chips.map((c, i) => (
            <button
              key={c.label}
              type="button"
              onClick={() => api?.scrollTo(c.index)}
              aria-pressed={i === activeChip}
              className={clsx(
                "min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors",
                i === activeChip ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink-soft hover:text-ink",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
      <div ref={ref} className="-mx-4 cursor-grab overflow-hidden px-4 active:cursor-grabbing sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <ul className="-ml-3 flex touch-pan-y touch-pinch-zoom sm:-ml-4">
          {children.map((child, i) => (
            <li key={i} className={clsx("min-w-0 shrink-0 grow-0 pl-3 sm:pl-4", slideClassName)}>
              {child}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div aria-hidden className="flex gap-1.5">
          {Array.from({ length: state.count }, (_, i) => (
            <span
              key={i}
              className={clsx("h-1.5 rounded-full transition-all", i === state.index ? "w-6 bg-accent" : "w-1.5 bg-line")}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" className={btn} onClick={() => api?.scrollPrev()} disabled={!state.prev} aria-label={prevLabel}>
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <button type="button" className={btn} onClick={() => api?.scrollNext()} disabled={!state.next} aria-label={nextLabel}>
            <ChevronRight aria-hidden className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
