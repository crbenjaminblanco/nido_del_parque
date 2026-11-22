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
import calle from "../../public/images/galeria/calle.jpg";
import parqueo from "../../public/images/galeria/parqueo.jpg";
import rotulo from "../../public/images/galeria/rotulo.jpg";
import parque from "../../public/images/zona/parque.jpg";
import iglesia from "../../public/images/zona/iglesia.jpg";
import mosaico from "../../public/images/zona/mosaico.jpg";
import toro from "../../public/images/zona/toro.jpg";
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
  { key: "street", src: calle },
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

type Credit = { author: string; license: string; licenseUrl: string; source: string };

/** Foto de portada (hero): túnel de arcos del parque de Zarcero. */
export const heroCredit: Credit = {
  author: "Vytautas Šėrys",
  license: "CC BY 2.0",
  licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  source: "https://www.flickr.com/photos/32992770@N05/6866143932",
};

/** Lugares de la zona. `query` alimenta el enlace de Google Maps de cada tarjeta. */
export const places: {
  key: "park" | "church" | "mosaic" | "palmira" | "toro";
  src: typeof parque;
  query: string;
  /** Cómo se llega desde el apartamento (cambia el ícono de la distancia). */
  mode: "walk" | "drive";
  credit?: Credit;
}[] = [
  {
    key: "park",
    mode: "walk",
    src: parque,
    query: "Parque Francisco Alvarado Segura, Zarcero",
    credit: {
      author: "Vytautas Šėrys",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      source: "https://www.flickr.com/photos/32992770@N05/6866143932",
    },
  },
  {
    key: "church",
    mode: "walk",
    src: iglesia,
    query: "Parroquia San Rafael Arcángel, Zarcero",
    credit: {
      author: "Rodtico21",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      source: "https://commons.wikimedia.org/wiki/File:Zarcero_church.jpg",
    },
  },
  {
    key: "mosaic",
    mode: "walk",
    src: mosaico,
    query: "Parque de Zarcero, Alajuela",
    credit: {
      author: "Peloy (Allan H.M.)",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      source: "https://commons.wikimedia.org/wiki/File:Parque_de_Zarcero,_Alajuela,_Costa_Rica_-_panoramio.jpg",
    },
  },
  // Foto propia del alojamiento (vista de las montañas de Zarcero)
  { key: "palmira", mode: "drive", src: montana, query: "Palmira, Zarcero, Alajuela" },
  {
    key: "toro",
    mode: "drive",
    src: toro,
    query: "Catarata del Toro, Bajos del Toro",
    credit: {
      author: "Steve Jurvetson",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      source: "https://commons.wikimedia.org/wiki/File:Catarata_del_Toro._Waterfall._Costa_Rica.jpg",
    },
  },
];
