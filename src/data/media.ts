/**
 * Fotos del sitio. Los textos (títulos, descripciones, alt) están en las traducciones
 * bajo `gallery.items` y `area.places`, con la misma clave que aquí.
 */
import sala from "../../public/images/galeria/sala.jpg";
import habitacion from "../../public/images/galeria/habitacion.jpg";
import habitacion2 from "../../public/images/galeria/habitacion-2.jpg";
import bano from "../../public/images/galeria/bano.jpg";
import vista from "../../public/images/galeria/vista.jpg";
import exterior from "../../public/images/galeria/exterior.jpg";
import parqueo from "../../public/images/galeria/parqueo.jpg";
import rotulo from "../../public/images/galeria/rotulo.jpg";
import parque from "../../public/images/zona/parque.jpg";
import montana from "../../public/images/zona/montana.jpg";

/** Ordenadas por espacio, como el recorrido de fotos de Airbnb (ver `galleryTour`). */
export const gallery = [
  { key: "livingRoom", src: sala },
  { key: "bedroom", src: habitacion },
  { key: "bedroomLight", src: habitacion2 },
  { key: "view", src: vista },
  { key: "bathroom", src: bano },
  { key: "sign", src: rotulo },
  { key: "exterior", src: exterior },
  { key: "parking", src: parqueo },
] as const;

/** Primer elemento de cada espacio en el carrusel (0 es el video). */
export const galleryTour = [
  { key: "video", index: 0 },
  { key: "living", index: 1 },
  { key: "bedroom", index: 2 },
  { key: "bathroom", index: 5 },
  { key: "outside", index: 6 },
] as const;

export type GalleryKey = (typeof gallery)[number]["key"];

/** Lugares de la zona (todas las fotos son propias). `query` alimenta el enlace de Google Maps. */
export const places: {
  key: "park" | "palmira";
  src: typeof parque;
  query: string;
  /** Cómo se llega desde el apartamento (cambia el ícono de la distancia). */
  mode: "walk" | "drive";
}[] = [
  { key: "park", mode: "walk", src: parque, query: "Parque Francisco Alvarado Segura, Zarcero" },
  { key: "palmira", mode: "drive", src: montana, query: "Palmira, Zarcero, Alajuela" },
];
