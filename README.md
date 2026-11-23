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

**Ubicación:** punto exacto de la entrada (10.1846898, -84.3901703), del lugar "Nido del Parque" en
Waze/Google. Está en `src/config/site.ts`; Waze, Google Maps, el mapa y el JSON-LD lo toman de ahí.

**Wifi:** el sitio muestra solo el nombre de la red. La contraseña no se publica (el sitio anterior
la incrustaba en el JavaScript público); se envía por WhatsApp al confirmar la reserva.

## Fotos y video

- `assets-src/`: fotos originales del alojamiento (propias).
- `assets-src/pro/`: fotos profesionales del anuncio de Airbnb (propias).
- `public/video/recorrido.mp4`: recorrido profesional (84 s), exportado a 404×720 H.264 con `avconvert`
  de macOS (~34 MB). Solo se descarga cuando alguien toca "Ver recorrido".
- `assets-src/zona/`: fotos propias de Zarcero (parque, iglesia y potreros).

Todas las fotos del sitio son propias del alojamiento; no hay fotos de terceros ni créditos
que mostrar. Para sumar lugares nuevos (por ejemplo el muro de mosaicos o la catarata de
Bajos del Toro), agregue la foto original en `assets-src/zona/` y una línea en
`scripts/process-images.mjs`.

## Despliegue

El sitio usa `src/proxy.ts` (redirección por idioma), así que necesita un hosting con Next.js,
como Vercel. Ya no sirve el flujo anterior de GitHub Pages (carpeta `docs/`), que se retiró.
