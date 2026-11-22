"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { site } from "@/config/site";
import { AirbnbIcon, WhatsAppIcon } from "./social-icons";

type Props = {
  labels: { label: string; title: string; sub: string; cta: string; whatsapp: string; newTab: string };
};

/**
 * Reserva siempre a mano, como la barra inferior de los anuncios de Airbnb: en el
 * celular, una barra fija con el resumen y el botón de reservar; en pantallas grandes,
 * solo el botón flotante de WhatsApp. Aparece después del hero y se esconde en Reservar.
 */
export function BookingBar({ labels }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    const contact = document.getElementById("reservar");
    const state = { hero: Boolean(hero), contact: false };
    const update = () => setVisible(!state.hero && !state.contact);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.hero = e.isIntersecting;
        if (e.target === contact) state.contact = e.isIntersecting;
      }
      update();
    });
    if (hero) io.observe(hero);
    if (contact) io.observe(contact);
    update();
    return () => io.disconnect();
  }, []);

  const hidden = !visible;

  return (
    <>
      {/* Celular: barra inferior */}
      <aside
        aria-label={labels.label}
        aria-hidden={hidden}
        inert={hidden}
        className={clsx(
          "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition duration-300 sm:hidden",
          visible ? "translate-y-0" : "pointer-events-none translate-y-full",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-xl leading-tight">{labels.title}</p>
            <p className="truncate text-xs text-ink-soft">{labels.sub}</p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labels.whatsapp} ${labels.newTab}`}
            className="grid size-12 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#0b2e17]"
          >
            <WhatsAppIcon className="size-6" />
          </a>
          <a
            href={site.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-accent-ink"
          >
            <AirbnbIcon className="size-[18px]" />
            {labels.cta}
            <span className="sr-only"> {labels.newTab}</span>
          </a>
        </div>
      </aside>

      {/* Pantallas grandes: botón flotante de WhatsApp */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${labels.whatsapp} ${labels.newTab}`}
        title={labels.whatsapp}
        aria-hidden={hidden}
        tabIndex={visible ? 0 : -1}
        className={clsx(
          "fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-[#25d366] text-[#0b2e17] shadow-[0_12px_30px_-8px_rgb(0_0_0/0.45)] transition duration-300 hover:scale-105 sm:grid",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
