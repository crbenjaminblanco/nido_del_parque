# Nido del Parque

Sitio de Nido del Parque, apartamento para 2 personas a pasos del parque de Zarcero, Costa Rica.
Las reservas se hacen fuera del sitio: Airbnb (principal), WhatsApp e Instagram.

## Stack

- Next.js 16 (App Router, Cache Components) + React 19 + TypeScript
- Tailwind CSS 4 con tokens de color en `src/app/globals.css` y modo claro/oscuro
- i18n nativo: rutas `/es` (por defecto) y `/en`, detección de idioma en `src/proxy.ts`,
  textos en `src/i18n/messages/es.json` y `en.json` (TypeScript falla si a `en.json` le falta una clave)
- Embla Carousel (galería y zona), yet-another-react-lightbox (fotos a pantalla completa), lucide-react (íconos)
- `sharp` para exportar las fotos (`npm run images`)

## Comandos

```bash
npm install
npm run dev        # desarrollo
npm run lint
npm run typecheck
npm run build && npm start
npm run images     # regenera public/images/ desde assets-src/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Textos (español / inglés) | `src/i18n/messages/*.json` |
| WhatsApp, Airbnb, Instagram, red wifi, coordenadas, dominio | `src/config/site.ts` |
| Fotos de la galería y lugares de la zona | `src/data/media.ts` |
| Recorte y ajuste de fotos | `scripts/process-images.mjs` |

**Ubicación:** las coordenadas (10.1848, -84.3903) son las del anuncio de Airbnb. Si la entrada
está en otro punto, cámbielas en `src/config/site.ts`; Waze, Google Maps, el mapa y el JSON-LD las toman de ahí.

**Wifi:** el sitio muestra solo el nombre de la red. La contraseña no se publica (el sitio anterior
la incrustaba en el JavaScript público); se envía por WhatsApp al confirmar la reserva.

## Fotos y video

- `assets-src/`: fotos originales del alojamiento (propias).
- `assets-src/pro/`: fotos profesionales del anuncio de Airbnb (propias).
- `public/video/recorrido.mp4`: recorrido profesional (84 s), exportado a 404×720 H.264 con `avconvert`
  de macOS (~34 MB). Solo se descarga cuando alguien toca "Ver recorrido".
- `assets-src/zona/`: fotos de Zarcero con licencia libre (Wikimedia Commons y Flickr):

| Uso en el sitio | Archivo en Commons | Autor | Licencia |
| --- | --- | --- | --- |
| Portada (hero) | [ZARCERO TOPIARY GARDEN, COSTA RICA.jpg](https://commons.wikimedia.org/wiki/File:ZARCERO_TOPIARY_GARDEN,_COSTA_RICA.jpg) | Jerrye & Roy Klotz MD | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Parque Francisco Alvarado | [Parque Francisco Alvardoa (Flickr)](https://www.flickr.com/photos/32992770@N05/6866143932) | Vytautas Šėrys | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| Iglesia de San Rafael | [Zarcero church.jpg](https://commons.wikimedia.org/wiki/File:Zarcero_church.jpg) | Rodtico21 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Muro de mosaicos | [Parque de Zarcero, Alajuela, Costa Rica - panoramio.jpg](https://commons.wikimedia.org/wiki/File:Parque_de_Zarcero,_Alajuela,_Costa_Rica_-_panoramio.jpg) | Peloy (Allan H.M.) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Bajos del Toro | [Catarata del Toro. Waterfall. Costa Rica.jpg](https://commons.wikimedia.org/wiki/File:Catarata_del_Toro._Waterfall._Costa_Rica.jpg) | Steve Jurvetson | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |

Las fotos se recortaron y se les ajustó luz y nitidez (cambios permitidos por las licencias; las
versiones CC BY-SA modificadas quedan bajo la misma licencia). El sitio muestra el crédito en cada
tarjeta y en el pie de página.

## Despliegue

El sitio usa `src/proxy.ts` (redirección por idioma), así que necesita un hosting con Next.js,
como Vercel. Ya no sirve el flujo anterior de GitHub Pages (carpeta `docs/`), que se retiró.
