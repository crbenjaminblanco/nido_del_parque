// Exporta las fotos del sitio a versiones web livianas.
// Uso: npm run images
// Toma los originales de assets-src/ y genera public/images/. Aplica un ajuste
// suave y uniforme (luz, contraste y nitidez) para que las fotos del apartamento
// se vean como una misma sesión. Las fotos profesionales del anuncio están en assets-src/pro/. Las fotos de la zona (assets-src/zona/) son de
// Wikimedia Commons con licencia libre: ver créditos en README.md.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("assets-src");
const OUT = path.resolve("public/images");

/** Ajuste común: un poco más de luz y contraste, nitidez fina. */
function grade(img, { lift = 0, sat = 1.04 } = {}) {
  return img
    .rotate()
    .modulate({ brightness: 1.01 + lift, saturation: sat })
    .linear(1.04, -4)
    .sharpen({ sigma: 0.7, m1: 0.5, m2: 2 });
}

const jpeg = { quality: 82, mozjpeg: true, progressive: true };

/** Portada: corrige la diapositiva antigua (tonos lavados y azulados) con un look de
 *  película suave: rango completo, verde profundo, buganvilla viva y un toque cálido. */
function heroGrade(img) {
  return img
    .normalise({ lower: 2, upper: 99 })
    .modulate({ saturation: 1.15 })
    .recomb([
      [1.05, 0.03, 0],
      [0, 1.0, 0.02],
      [0, 0.04, 0.88],
    ])
    .gamma(1.1)
    .linear(0.92, 14)
    .sharpen({ sigma: 0.6, m1: 0.4, m2: 1.5 });
}

const jobs = [
  // Hero: figuras de ciprés del parque de Zarcero (Wikimedia Commons, ver README).
  // Panorámica para escritorio; la vertical del celular se recorta aparte (abajo).
  // Galería del apartamento (4:5 para tarjetas verticales)
  { src: "living-room.jpg", out: "galeria/sala.jpg", w: 640, h: 800 },
  { src: "bedroom.jpg", out: "galeria/habitacion.jpg", w: 1200, h: 1500 },
  { src: "IMG_8110.JPG", out: "galeria/habitacion-2.jpg", w: 780, h: 975, opts: { lift: 0.03 } },
  { src: "pro/bano.jpg", out: "galeria/bano.jpg", w: 1200, h: 1500 },
  { src: "balcony.jpg", out: "galeria/vista.jpg", w: 1080, h: 1350, opts: { lift: -0.04 } },
  { src: "exterior.jpg", out: "galeria/exterior.jpg", w: 1200, h: 1500 },
  { src: "pro/parqueo.png", out: "galeria/parqueo.jpg", w: 1200, h: 1500, opts: { lift: -0.03 } },
  // Calle con la iglesia al fondo (foto profesional): galería y sección de ubicación
  { src: "pro/calle.jpg", out: "galeria/calle.jpg", w: 1200, h: 1500, position: "centre" },
  { src: "pro/calle.jpg", out: "ubicacion.jpg", w: 1600, h: 1000, position: "centre" },
  { src: "DJI_0571_1.jpg", out: "galeria/rotulo.jpg", w: 1200, h: 1500, position: "centre" },
  // Portada del video del recorrido (fotograma del propio video)
  { src: "pro/detalle.png", out: "recorrido-portada.jpg", w: 540, h: 960, position: "centre" },
  // Zona (Wikimedia Commons, 4:3)
  // Túnel de arcos de ciprés con la iglesia al fondo (Flickr, original de 1024×683: no se agranda)
  { src: "zona/arcos-flickr.jpg", out: "zona/parque.jpg", w: 911, h: 683, position: "centre", opts: { sat: 1 } },
  // Iglesia como se ve hoy (2016): recorte con torres, reloj y entrada
  { src: "zona/iglesia-2016.jpg", out: "zona/iglesia.jpg", w: 960, h: 720, position: "north" },
  { src: "zona/parque.jpg", out: "zona/mosaico.jpg", w: 1200, h: 900 },
  { src: "zona/dinosaurio.jpg", out: "zona/dinosaurio.jpg", w: 1200, h: 900 },
  { src: "zona/toro.jpg", out: "zona/toro.jpg", w: 1200, h: 900 },
  { src: "background.jpg", out: "zona/montana.jpg", w: 1200, h: 900, position: "centre" },
];

await mkdir(path.join(OUT, "galeria"), { recursive: true });
await mkdir(path.join(OUT, "zona"), { recursive: true });

for (const j of jobs) {
  const base = sharp(path.join(SRC, j.src)).rotate().resize(j.w, j.h, {
    fit: "cover",
    position: j.position ?? "attention",
    kernel: "lanczos3",
  });
  await grade(base, j.opts).jpeg(jpeg).toFile(path.join(OUT, j.out));
  console.log("✓", j.out);
}

// Portada (hero): figuras de ciprés del parque de Zarcero (Wikimedia Commons, ver README).
{
  const src = path.join(SRC, "zona/figuras-parque.jpg");
  // Computadora: panorámica a pantalla completa
  await heroGrade(sharp(src).rotate().resize(2400, 1400, { fit: "cover", position: "centre", kernel: "lanczos3" }))
    .jpeg(jpeg)
    .toFile(path.join(OUT, "hero-ancho.jpg"));
  console.log("✓ hero-ancho.jpg");
  // Celular: encuadre abierto (figura completa y buganvilla) para la parte de arriba
  const { width, height } = await sharp(src).metadata();
  const w = Math.round(height * (1080 / 1300));
  const left = Math.min(width - w, Math.max(0, Math.round(width * 0.6 - w / 2)));
  await heroGrade(sharp(src).extract({ left, top: 0, width: w, height }).resize(1080, 1300, { kernel: "lanczos3" }))
    .jpeg(jpeg)
    .toFile(path.join(OUT, "hero-movil.jpg"));
  console.log("✓ hero-movil.jpg");
}

// Open Graph 1200x630 a partir de la habitación
await grade(sharp(path.join(SRC, "bedroom.jpg")).resize(1200, 630, { fit: "cover", position: "attention" }))
  .jpeg({ ...jpeg, quality: 80 })
  .toFile(path.join(OUT, "og.jpg"));
console.log("✓ og.jpg");

// Logo: fondo blanco → transparente (la luminancia es el alfa) para modo claro/oscuro
const { data, info } = await sharp(path.join(SRC, "logo.png"))
  .flatten({ background: "#ffffff" })
  .greyscale()
  .raw()
  .toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0; i < info.width * info.height; i++) {
  rgba[i * 4 + 3] = 255 - data[i * info.channels];
}
const logo = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim()
  .png({ compressionLevel: 9 })
  .toBuffer();
await sharp(logo).toFile(path.join(OUT, "logo.png"));
console.log("✓ logo.png");

// Íconos: ave blanca sobre el turquesa del rótulo
const white = await sharp(logo).negate({ alpha: false }).png().toBuffer();
for (const [size, file] of [
  [512, "src/app/icon.png"],
  [180, "src/app/apple-icon.png"],
]) {
  const mark = await sharp(white).resize(Math.round(size * 0.72), null).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#0f6670" } })
    .composite([{ input: mark, gravity: "centre" }])
    .png()
    .toFile(path.resolve(file));
  console.log("✓", file);
}
