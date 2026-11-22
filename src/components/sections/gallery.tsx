import type { Dictionary } from "@/i18n/dictionaries";
import { gallery, galleryTour } from "@/data/media";
import { Container, SectionHeading } from "../ui";
import { sectionId } from "../nav-items";
import poster from "../../../public/images/recorrido-portada.jpg";
import { GalleryCarousel } from "./gallery-carousel";

export function Gallery({ t }: { t: Dictionary }) {
  const photos = gallery.map((g) => ({ key: g.key, src: g.src, ...t.gallery.items[g.key] }));
  return (
    <section id={sectionId.gallery} aria-labelledby="gallery-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="gallery-title" eyebrow={t.gallery.eyebrow} title={t.gallery.title} lead={t.gallery.hint} />
        <div className="reveal mt-10">
          <GalleryCarousel
            photos={photos}
            poster={poster}
            chips={galleryTour.map((c) => ({ label: t.gallery.tour[c.key], index: c.index }))}
            labels={{
              carousel: t.gallery.title,
              prev: t.a11y.prev,
              next: t.a11y.next,
              openPhoto: t.a11y.openPhoto,
              close: t.a11y.closeLightbox,
              slide: t.a11y.slide,
              tour: t.gallery.tourLabel,
              video: t.gallery.video,
            }}
          />
        </div>
      </Container>
    </section>
  );
}
