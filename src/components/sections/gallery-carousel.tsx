"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import { Expand, Play, X } from "lucide-react";
import { Carousel } from "../carousel";

// El lightbox solo se descarga cuando alguien abre una foto.
const Lightbox = dynamic(() => import("./lightbox"), { ssr: false });

export type Photo = { key: string; src: StaticImageData; title: string; alt: string };

type Labels = {
  carousel: string;
  prev: string;
  next: string;
  openPhoto: string;
  close: string;
  slide: string;
  tour: string;
  video: { cta: string; duration: string; title: string; close: string; label: string };
};

type Chip = { label: string; index: number };

export function GalleryCarousel({
  photos,
  labels,
  poster,
  chips,
}: {
  photos: Photo[];
  labels: Labels;
  poster: StaticImageData;
  chips: Chip[];
}) {
  const [index, setIndex] = useState(-1);
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const openVideo = () => {
    dialog.current?.showModal();
    video.current?.play().catch(() => {
      /* el navegador pidió un toque extra: los controles siguen visibles */
    });
  };

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClose = () => video.current?.pause();
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const slides = [
    <button
      key="video"
      type="button"
      onClick={openVideo}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink text-left text-white"
    >
      <Image src={poster} alt="" fill sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 78vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-full bg-white/90 text-[#0b1517] shadow-lg transition group-hover:scale-110">
          <Play aria-hidden className="ml-1 size-7 fill-current" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <span className="font-display text-2xl leading-tight">{labels.video.cta}</span>
        <span className="rounded-full bg-black/45 px-2 py-0.5 text-xs font-semibold tabular-nums">{labels.video.duration}</span>
      </span>
    </button>,
    ...photos.map((p, i) => (
      <button
        key={p.key}
        type="button"
        onClick={() => setIndex(i)}
        aria-label={labels.openPhoto.replace("{title}", p.title)}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-paper-2"
      >
        <Image
          src={p.src}
          alt={p.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 78vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
          <span className="font-display text-2xl">{p.title}</span>
          <Expand aria-hidden className="size-4 opacity-80" />
        </span>
      </button>
    )),
  ];

  return (
    <>
      <Carousel label={labels.carousel} prevLabel={labels.prev} nextLabel={labels.next} slideClassName="basis-[78%] sm:basis-[42%] lg:basis-[26%]"
        chips={chips}
        chipsLabel={labels.tour}
      >
        {slides}
      </Carousel>

      {index >= 0 && (
        <Lightbox
          index={index}
          onClose={() => setIndex(-1)}
          slides={photos.map((p) => ({ src: p.src.src, width: p.src.width, height: p.src.height, alt: p.alt, title: p.title }))}
          labels={{
            Previous: labels.prev,
            Next: labels.next,
            Close: labels.close,
            Lightbox: labels.carousel,
            "Photo gallery": labels.carousel,
            "{index} of {total}": labels.slide.replace("{n}", "{index}"),
          }}
        />
      )}

      <dialog
        ref={dialog}
        aria-label={labels.video.label}
        className="m-auto max-h-[92svh] w-[min(92vw,26rem)] overflow-visible rounded-3xl bg-black p-0 backdrop:bg-black/85"
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        <video
          ref={video}
          src="/video/recorrido.mp4"
          poster={poster.src}
          controls
          playsInline
          preload="none"
          title={labels.video.title}
          className="block aspect-[9/16] max-h-[92svh] w-full rounded-3xl object-contain"
        />
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label={labels.video.close}
          className="absolute -top-3 -right-3 grid size-11 place-items-center rounded-full bg-white text-[#0b1517] shadow-lg"
        >
          <X aria-hidden className="size-5" />
        </button>
      </dialog>
    </>
  );
}
