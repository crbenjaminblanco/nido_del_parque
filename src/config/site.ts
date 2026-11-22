/**
 * Datos de contacto, enlaces y ubicación. Solo datos, sin texto visible:
 * los textos viven en src/i18n/messages/*.json.
 */
const lat = 10.1848;
const lng = -84.3903;

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nidodelparque.com",
  name: "Nido del Parque",
  phoneE164: "+50686150014",
  phoneDisplay: "+506 8615 0014",
  whatsapp: "https://wa.me/50686150014",
  airbnb: "https://www.airbnb.com/rooms/1310574339008768562",
  instagram: "https://www.instagram.com/nidodelparquezarcero/",
  instagramHandle: "@nidodelparquezarcero",
  wifiNetwork: "nidodelparque",
  /**
   * Coordenadas del anuncio de Airbnb (detrás de la iglesia, a pasos del parque).
   * Si el punto exacto de la entrada es otro, cámbielo aquí: Waze, Google Maps,
   * el mapa y los datos estructurados lo toman de este lugar.
   */
  geo: { lat, lng },
  maps: {
    waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
    google: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
    embed: `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`,
  },
} as const;
