import Image from "next/image";
import { ArrowUp } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { heroCredit, places } from "@/data/media";
import { navLinks } from "./nav-items";
import { Container } from "./ui";
import { InstagramIcon, WhatsAppIcon } from "./social-icons";

/** Año para el copyright; se fija al compilar (el sitio es estático). */
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ t }: { t: Dictionary }) {
  const year = await getYear();
  const credited = [
    { key: "hero", name: t.footer.heroCredit, credit: heroCredit },
    ...places.filter((p) => p.credit).map((p) => ({ key: p.key, name: t.area.places[p.key].name, credit: p.credit! })),
  ];

  return (
    <footer className="border-t border-line pt-14 pb-28 sm:pb-14">
      <Container className="reveal grid gap-10 md:grid-cols-[1.2fr_2fr] md:items-start">
        <div>
          <Image src="/images/logo.png" alt="Nido del Parque" width={538} height={253} className="h-10 w-auto dark:invert" />
          <p className="mt-5 max-w-xs font-display text-2xl text-ink-soft">{t.footer.tagline}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.contact.whatsapp.title} ${t.a11y.newTab}`}
              className="grid size-11 place-items-center rounded-full border border-line text-ink-soft transition hover:text-ink"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.contact.instagram.title} ${t.a11y.newTab}`}
              className="grid size-11 place-items-center rounded-full border border-line text-ink-soft transition hover:text-ink"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <ul className="grid grid-cols-2 gap-x-6 text-sm">
            {navLinks(t).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center text-ink-soft hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contenido" className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink hover:text-accent">
                <ArrowUp aria-hidden className="size-4" />
                {t.footer.backToTop}
              </a>
            </li>
          </ul>
          <details className="group text-sm text-ink-soft">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {t.footer.credits}
              <span aria-hidden className="transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-1 text-xs">{t.footer.creditsNote}</p>
            <ul className="mt-2 text-xs">
              {credited.map((p) => (
                <li key={p.key}>
                  {p.name}:{" "}
                  <a href={p.credit.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-ink">
                    {p.credit.author}
                  </a>{" "}
                  ·{" "}
                  <a href={p.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-ink">
                    {p.credit.license}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </Container>
      <Container className="mt-12 border-t border-line pt-6 text-xs text-ink-soft">
        <p>{t.footer.rights.replace("{year}", String(year))}</p>
      </Container>
    </footer>
  );
}
