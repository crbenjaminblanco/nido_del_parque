"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Contenedor de la barra superior. Sobre el hero queda transparente con texto claro;
 * al bajar (o en páginas sin hero) se vuelve sólida. Los colores cambian vía
 * `data-over` en globals.css, así la barra no necesita saber nada de cada botón.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [over, setOver] = useState(true);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!hero) {
      // Páginas sin hero (p. ej. 404): barra sólida desde el inicio.
      const id = requestAnimationFrame(() => setOver(false));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(([entry]) => setOver(entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
      threshold: 0,
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header data-over={over} className="site-header sticky top-0 z-50">
      <div
        aria-hidden
        className="header-bg absolute inset-0 -z-10 border-b border-line bg-paper/80 backdrop-blur-xl transition-opacity duration-300"
      />
      {children}
    </header>
  );
}
