"use client";

import { useState } from "react";
import { Hand } from "lucide-react";

/**
 * Mapa de Google siempre visible, pero inactivo hasta que la persona lo toca.
 * - Inactivo (`inert`), el mapa no puede tomar el foco al cargar; si lo hiciera, el
 *   navegador desplazaría la página hasta él sin que nadie lo pida.
 * - En el celular tampoco atrapa el dedo al bajar por la página.
 * Se carga en diferido (`loading="lazy"`), así no pesa en la carga inicial.
 */
export function MapEmbed({ src, title, activate }: { src: string; title: string; activate: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative size-full">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        inert={!active}
        tabIndex={active ? 0 : -1}
        className="size-full border-0"
      />
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-end justify-center p-4"
          aria-label={activate}
        >
          <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0b1517]/80 px-4 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition group-hover:bg-[#0b1517]">
            <Hand aria-hidden className="size-4" />
            {activate}
          </span>
        </button>
      )}
    </div>
  );
}
