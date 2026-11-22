import type { CSSProperties } from "react";
import { ArrowUpRight, Wifi } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { Container, SectionHeading } from "../ui";
import { CopyButton } from "../copy-button";
import { AirbnbIcon, InstagramIcon, WhatsAppIcon } from "../social-icons";
import { sectionId } from "../nav-items";

/** Reservas solo fuera del sitio: Airbnb (principal), WhatsApp e Instagram. */
export function Contact({ t }: { t: Dictionary }) {
  const channels = [
    { key: "airbnb", href: site.airbnb, Icon: AirbnbIcon, copy: t.contact.airbnb, tone: "bg-[#d6334f] text-white" },
    { key: "whatsapp", href: site.whatsapp, Icon: WhatsAppIcon, copy: t.contact.whatsapp, tone: "bg-[#25d366] text-[#0b2e17]" },
    { key: "instagram", href: site.instagram, Icon: InstagramIcon, copy: t.contact.instagram, tone: "bg-paper-2 text-ink" },
  ];

  return (
    <section id={sectionId.contact} aria-labelledby="contact-title" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} align="center" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {channels.map(({ key, href, Icon, copy, tone }, i) => (
            <li key={key} style={{ "--i": i } as CSSProperties} className={i === 0 ? "reveal sm:col-span-2" : "reveal"}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center gap-4 rounded-3xl border border-line bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${tone}`}>
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block font-semibold ${i === 0 ? "text-lg" : ""}`}>{copy.title}</span>
                  <span className="block text-sm text-ink-soft">{copy.text}</span>
                </span>
                <ArrowUpRight aria-hidden className="size-5 text-ink-soft transition group-hover:text-ink" />
                <span className="sr-only"> {t.a11y.newTab}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 rounded-3xl border border-dashed border-line p-5">
          <p className="flex items-center gap-2 text-sm font-bold">
            <Wifi aria-hidden className="size-4 text-accent" />
            {t.contact.guests.title}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-paper-2 py-2 pr-2 pl-4">
            <div className="min-w-0">
              <p className="text-xs text-ink-soft">{t.contact.guests.network}</p>
              <p className="truncate font-mono text-base font-semibold">{site.wifiNetwork}</p>
            </div>
            <CopyButton value={site.wifiNetwork} label={t.contact.guests.copyLabel} text={t.contact.guests.copy} copiedLabel={t.contact.guests.copied} />
          </div>
          <p className="mt-3 text-sm text-ink-soft">{t.contact.guests.password}</p>
        </div>
      </Container>
    </section>
  );
}
