import type { Dictionary } from "@/i18n/dictionaries";

/** Anclas de las secciones; las etiquetas salen de `nav` en las traducciones. */
export const sectionId = {
  gallery: "galeria",
  stay: "espacio",
  area: "zona",
  location: "ubicacion",
  contact: "reservar",
} as const;

export type NavKey = keyof typeof sectionId;
const order: NavKey[] = ["gallery", "stay", "area", "location", "contact"];

export function navLinks(t: Dictionary) {
  return order.map((key) => ({ href: `#${sectionId[key]}`, label: t.nav[key] }));
}
