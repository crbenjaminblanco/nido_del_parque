"use client";

import { useEffect } from "react";

/**
 * Hace aparecer los bloques marcados con `.reveal` cuando entran en pantalla
 * (fundido y subida suave, una sola vez), como el `InView` de PlayBookCR.
 * El estilo vive en globals.css; `--i` en cada elemento escalona la entrada.
 * Sin JavaScript o con "reducir movimiento" todo se ve desde el inicio.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.motion !== "on" || typeof IntersectionObserver === "undefined") {
      root.dataset.motion = "off";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Lo que quedó arriba (p. ej. al saltar a una sección con el menú) se muestra
          // ya, para que al volver no haya huecos.
          const passed = e.boundingClientRect.bottom < 0;
          if (!e.isIntersecting && !passed) continue;
          // En una fila que se desliza de lado, las tarjetas fuera de pantalla aparecen
          // junto con la primera para no verse vacías al deslizar con el dedo.
          const row = e.target.parentElement;
          const group =
            row && row.scrollWidth > row.clientWidth + 1
              ? row.querySelectorAll<HTMLElement>(":scope > .reveal:not([data-shown])")
              : [e.target as HTMLElement];
          group.forEach((el) => {
            el.dataset.shown = "";
            io.unobserve(el);
          });
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    const watch = (scope: ParentNode) =>
      scope.querySelectorAll<HTMLElement>(".reveal:not([data-shown])").forEach((el) => io.observe(el));
    watch(document);

    // Bloques que aparecen después (p. ej. al cambiar de pestaña).
    const mo = new MutationObserver((records) => {
      for (const r of records) r.addedNodes.forEach((n) => n instanceof HTMLElement && watch(n.parentNode ?? n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
