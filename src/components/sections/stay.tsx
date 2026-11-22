import type { CSSProperties } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Car,
  LogIn,
  LogOut,
  PawPrint,
  ShowerHead,
  Tv,
  Users,
  WashingMachine,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container, SectionHeading } from "../ui";
import { Tabs } from "../tabs";
import { sectionId } from "../nav-items";
import living from "../../../public/images/galeria/sala.jpg";

type AmenityKey = keyof Dictionary["stay"]["amenities"];
type RuleKey = keyof Dictionary["stay"]["rules"];

const amenityIcons: Record<AmenityKey, LucideIcon> = {
  wifi: Wifi,
  tv: Tv,
  hotWater: ShowerHead,
  washer: WashingMachine,
  parking: Car,
  workspace: CalendarDays,
};

const ruleIcons: Record<RuleKey, LucideIcon> = {
  checkIn: LogIn,
  checkOut: LogOut,
  guests: Users,
  pets: PawPrint,
};

export function Stay({ t }: { t: Dictionary }) {
  const amenities = (Object.keys(amenityIcons) as AmenityKey[]).map((k) => ({ key: k, Icon: amenityIcons[k], label: t.stay.amenities[k] }));
  const rules = (Object.keys(ruleIcons) as RuleKey[]).map((k) => ({ key: k, Icon: ruleIcons[k], ...t.stay.rules[k] }));

  return (
    <section id={sectionId.stay} aria-labelledby="stay-title" className="bg-paper-2/60 py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div className="reveal relative hidden aspect-square overflow-hidden rounded-[2rem] lg:block">
          <Image src={living} alt={t.gallery.items.livingRoom.alt} fill placeholder="blur" sizes="40vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading id="stay-title" eyebrow={t.stay.eyebrow} title={t.stay.title} lead={t.stay.lead} />
          <Tabs
            label={t.stay.tabsLabel}
            className="mt-8"
            tabs={[
              {
                id: "amenities",
                label: t.stay.tabs.amenities,
                panel: (
                  <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {amenities.map(({ key, Icon, label }, i) => (
                      <li key={key} style={{ "--i": i } as CSSProperties} className="reveal flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-card px-3.5 py-3 text-sm font-medium">
                        <Icon aria-hidden className="size-5 shrink-0 text-accent" />
                        {label}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "rules",
                label: t.stay.tabs.rules,
                panel: (
                  <>
                    <dl className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      {rules.map(({ key, Icon, label, value }, i) => (
                        <div key={key} style={{ "--i": i } as CSSProperties} className="reveal rounded-2xl border border-line bg-card p-4">
                          <dt className="flex items-center gap-2 text-xs font-bold tracking-wider text-ink-soft uppercase">
                            <Icon aria-hidden className="size-4 text-accent" />
                            {label}
                          </dt>
                          <dd className="mt-1.5 text-sm font-semibold">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
                      <Car aria-hidden className="size-4 shrink-0" />
                      {t.stay.parkingNote}
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
