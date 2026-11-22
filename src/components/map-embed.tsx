"use client";

import { useState } from "react";
import { Map } from "lucide-react";

/**
 * Mapa de Google bajo demanda: no carga nada de Google hasta que la persona lo pide
 * (más rápido y más privado).
 */
export function MapEmbed({ src, title, cta, note }: { src: string; title: string; cta: string; note: string }) {
  const [show, setShow] = useState(false);

  if (show) {
    return <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full border-0" />;
  }
  return (
    <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_50%_45%,var(--card),var(--paper-2))] p-6 text-center">
      <div>
        <button
          type="button"
          onClick={() => setShow(true)}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-card px-6 text-sm font-semibold shadow-sm transition hover:bg-paper-2"
        >
          <Map aria-hidden className="size-4 text-accent" />
          {cta}
        </button>
        <p className="mt-3 text-xs text-ink-soft">{note}</p>
      </div>
    </div>
  );
}
