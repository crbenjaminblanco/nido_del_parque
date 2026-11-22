/**
 * Mapa de Google siempre visible. Se carga en diferido (`loading="lazy"`), así que no
 * pesa en la carga inicial de la página: el navegador lo pide al acercarse a la sección.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className="size-full border-0"
    />
  );
}
