import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import heroMobile from "../../../public/images/hero-movil.jpg";
import heroWide from "../../../public/images/hero-ancho.jpg";
import { AirbnbIcon, WhatsAppIcon } from "../social-icons";

/**
 * Portada: el túnel de arcos de Zarcero a pantalla completa.
 * - El centro queda nítido y los bordes se difuminan (desenfoque con máscara radial).
 * - La foto entra con un fundido y se acerca muy despacio (Ken Burns).
 * - Abajo (y a la izquierda en pantallas anchas) se funde en oscuro para que el texto se lea.
 * Con "reducir movimiento" la foto queda quieta (ver globals.css).
 */
export function Hero({ t }: { t: Dictionary }) {
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="relative isolate -mt-16 flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0b1517] text-[#f4f7f5]"
    >
      <div className="absolute inset-0 -z-10">
        {/* Celular: la foto ocupa la parte de arriba. Pantallas anchas: a pantalla completa. */}
        <div className="absolute inset-x-0 top-0 h-[72svh] overflow-hidden md:hidden">
          <Image
            src={heroMobile}
            alt={t.hero.imageAlt}
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="hero-kenburns object-cover"
          />
        </div>
        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <Image src={heroWide} alt="" fill placeholder="blur" sizes="100vw" className="hero-kenburns object-cover object-[55%_45%]" />
        </div>

        {/* Bordes difuminados: el centro queda nítido */}
        <div className="absolute inset-0 backdrop-blur-[6px] [mask-image:radial-gradient(ellipse_55%_50%_at_55%_38%,transparent_35%,black_100%)] md:[mask-image:radial-gradient(ellipse_50%_55%_at_60%_45%,transparent_40%,black_100%)]" />
        {/* Velo para leer el texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1517] from-[30%] via-[#0b1517]/80 via-[45%] to-transparent to-[70%] md:from-[8%] md:via-[#0b1517]/50 md:via-[35%] md:to-[65%]" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b1517]/85 via-[#0b1517]/35 via-[40%] to-transparent to-[65%] md:block" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b1517]/70 to-transparent" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="hero-in mx-auto w-full max-w-7xl px-4 pt-32 pb-[max(2rem,env(safe-area-inset-bottom))] [text-shadow:0_1px_2px_rgb(0_0_0/0.35),0_4px_24px_rgb(0_0_0/0.45)] sm:px-6 md:pb-20 lg:px-8">
        <p className="text-xs font-bold tracking-[0.22em] text-[#9fdde2] uppercase">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="mt-3 font-display text-[clamp(3.2rem,15vw,7.5rem)] leading-[0.9]">
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty sm:text-xl">{t.hero.lead}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.stay.title}>
          {t.hero.facts.map((f) => (
            <li key={f} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-3">
          <a
            href={site.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#f4f7f5] px-7 text-sm font-semibold text-[#0b1517] [text-shadow:none] transition hover:bg-white active:scale-[0.98] sm:flex-none"
          >
            <AirbnbIcon className="size-[18px] text-[#d6334f]" />
            {t.hero.ctaPrimary}
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.hero.whatsapp} ${t.a11y.newTab}`}
            className="inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full border border-white/30 px-3.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/10 sm:px-5"
          >
            <WhatsAppIcon className="size-5 text-[#25d366]" />
            <span className="hidden sm:inline">{t.hero.whatsapp}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
