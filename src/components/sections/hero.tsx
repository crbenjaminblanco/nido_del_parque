import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import heroMobile from "../../../public/images/hero-movil.jpg";
import heroWide from "../../../public/images/hero-ancho.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gallery } from "@/data/media";
import { AirbnbIcon, WhatsAppIcon } from "../social-icons";
import { sectionId } from "../nav-items";

/** Fotos del apartamento que se asoman en la portada. */
const peek = (["livingRoom", "bedroom", "bathroom"] as const).map((key) => gallery.find((g) => g.key === key)!);

/**
 * Portada: el túnel de arcos de Zarcero a pantalla completa.
 * - El centro queda nítido y los bordes se difuminan (desenfoque con máscara radial).
 * - Se ve desde el primer instante (versión borrosa mientras carga) y entra como una cámara
 *   que avanza: de grande y desenfocada a nítida; luego sigue avanzando hacia el fondo del
 *   túnel, donde está la iglesia, como si se caminara bajo los arcos.
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
            className="hero-photo object-cover [transform-origin:50%_56%] [@media(max-height:700px)]:object-[50%_25%]"
          />
        </div>
        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <Image src={heroWide} alt="" fill placeholder="blur" sizes="100vw" className="hero-photo object-cover object-[55%_45%] [transform-origin:54%_56%]" />
        </div>

        {/* Bordes difuminados: el centro queda nítido */}
        <div className="absolute inset-0 backdrop-blur-[6px] [mask-image:radial-gradient(ellipse_55%_50%_at_55%_38%,transparent_35%,black_100%)] md:[mask-image:radial-gradient(ellipse_50%_55%_at_60%_45%,transparent_40%,black_100%)]" />
        {/* Velo para leer el texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1517] from-[30%] via-[#0b1517]/80 via-[45%] to-transparent to-[70%] md:from-[8%] md:via-[#0b1517]/50 md:via-[35%] md:to-[65%]" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b1517]/85 via-[#0b1517]/35 via-[40%] to-transparent to-[65%] md:block" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b1517]/70 to-transparent" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="hero-in mx-auto w-full max-w-7xl px-4 pt-32 pb-[max(2rem,env(safe-area-inset-bottom))] [@media(max-height:700px)]:pt-20 [@media(max-height:700px)]:pb-5 [@media(min-height:860px)]:pb-16 [text-shadow:0_1px_2px_rgb(0_0_0/0.35),0_4px_24px_rgb(0_0_0/0.45)] sm:px-6 md:pb-20 lg:px-8">
        <p className="text-xs font-bold tracking-[0.22em] text-[#9fdde2] uppercase [@media(max-height:700px)]:hidden">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="mt-3 font-display text-[clamp(3.2rem,15vw,7.5rem)] leading-[0.9] [@media(max-height:700px)]:mt-0 [@media(max-height:700px)]:text-[clamp(2.6rem,12vw,4rem)]">
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty sm:text-xl [@media(max-height:700px)]:mt-2 [@media(max-height:700px)]:text-base">{t.hero.lead}</p>

        {/* Un vistazo al apartamento: tres miniaturas que llevan a la galería */}
        <a
          href={`#${sectionId.gallery}`}
          className="group mt-5 flex min-h-11 w-fit max-w-full items-center gap-3 rounded-2xl [text-shadow:none] [@media(max-height:700px)]:mt-3"
        >
          <span className="flex shrink-0 -space-x-3">
            {peek.map((p) => (
              <span key={p.key} className="relative size-9 overflow-hidden rounded-full ring-2 ring-[#0b1517] md:size-11">
                <Image src={p.src} alt="" fill sizes="48px" className="object-cover" />
              </span>
            ))}
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-1 text-sm font-semibold underline-offset-4 group-hover:underline">
              {t.hero.peek}
              <ArrowRight aria-hidden className="size-4 transition group-hover:translate-x-0.5" />
            </span>
            <span className="flex flex-wrap gap-x-1.5 text-xs leading-snug text-[#f4f7f5]/75">
              {t.hero.facts.map((f, i) => (
                <span key={f} className="whitespace-nowrap">
                  {f}
                  {i < t.hero.facts.length - 1 && <span aria-hidden> ·</span>}
                </span>
              ))}
            </span>
          </span>
        </a>

        <div className="mt-6 flex items-center gap-3 [@media(max-height:700px)]:mt-4">
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

      {/* Pista para bajar (se oculta en pantallas bajas, donde no hay espacio) */}
      <a
        href={`#${sectionId.gallery}`}
        aria-label={t.a11y.scrollDown}
        className="hero-cue absolute bottom-1 left-1/2 hidden size-11 -translate-x-1/2 place-items-center text-[#f4f7f5]/60 transition hover:text-[#f4f7f5] [@media(min-height:860px)]:grid md:bottom-4"
      >
        <ChevronDown aria-hidden className="size-5" />
      </a>
    </section>
  );
}
