"use client";

import YARL, { type Labels, type SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = { index: number; onClose: () => void; slides: SlideImage[]; labels: Labels };

/** Visor de fotos a pantalla completa (se carga bajo demanda). */
export default function Lightbox({ index, onClose, slides, labels }: Props) {
  return (
    <YARL
      open
      index={index}
      close={onClose}
      slides={slides}
      labels={labels}
      carousel={{ finite: false, padding: 0 }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
    />
  );
}
