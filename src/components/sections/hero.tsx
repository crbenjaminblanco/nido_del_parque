import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import heroMobile from "../../../public/images/hero-movil.jpg";
import heroWide from "../../../public/images/hero-ancho.jpg";
import { AirbnbIcon, WhatsAppIcon } from "../social-icons";

/**
 * Hero minimalista que cabe en una pantalla: paisaje de Zarcero, nombre, una línea,
 * reserva en Airbnb como acción principal y WhatsApp como secundaria.
 */
export function Hero({ t }: { t: Dictionary }) {
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="relative isolate -mt-16 flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0b1517] text-[#f4f7f5]"
    >
      <div className="absolute inset-0 -z-10">
        {/* Celular: la foto ocupa la parte de arriba y se funde con el fondo del texto.
            Pantallas anchas: panorámica a pantalla completa. */}
        <div className="absolute inset-x-0 top-0 h-[68svh] md:hidden">
          <Image
            src={heroMobile}
            alt={t.hero.imageAlt}
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="hero-zoom object-cover object-top"
          />
        </div>
        <Image
          src={heroWide}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="hero-zoom hidden object-cover object-[50%_60%] md:block"
        />
        {/* Lectura fácil sobre la foto:
            1) desenfoque suave de la foto solo detrás del texto (se desvanece hacia arriba),
            2) velo oscuro firme abajo y, en pantallas anchas, también a la izquierda,
            3) velo arriba para la barra de navegación. */}
        <div className="absolute inset-x-0 bottom-0 h-[62%] backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_55%,transparent)] md:h-[70%] md:[mask-image:linear-gradient(to_top,black_35%,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1517] from-30% via-[#0b1517]/85 via-50% to-transparent to-[75%] md:from-20% md:via-[#0b1517]/60 md:via-45% md:to-70%" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b1517]/75 via-[#0b1517]/30 via-45% to-transparent to-70% md:block" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0b1517]/60 to-transparent" />
      </div>

      <div className="hero-in mx-auto w-full max-w-7xl px-4 pt-32 [text-shadow:0_1px_2px_rgb(0_0_0/0.35),0_4px_24px_rgb(0_0_0/0.45)] pb-[max(2.25rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-16 lg:px-8">
        <p className="text-xs font-bold tracking-[0.22em] text-[#9fdde2] uppercase">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="mt-3 font-display text-[clamp(3.2rem,15vw,7.5rem)] leading-[0.9]">
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty sm:text-xl">{t.hero.lead}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.stay.title}>
          {t.hero.facts.map((f) => (
            <li
              key={f}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={site.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4f7f5] px-7 [text-shadow:none] text-sm font-semibold text-[#0b1517] transition hover:bg-white active:scale-[0.98]"
          >
            <AirbnbIcon className="size-[18px] text-[#d6334f]" />
            {t.hero.ctaPrimary}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold transition hover:bg-white/10 sm:border-0 sm:px-0 sm:hover:bg-transparent sm:hover:underline"
          >
            <WhatsAppIcon className="size-[18px] text-[#25d366]" />
            {t.hero.whatsapp}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
