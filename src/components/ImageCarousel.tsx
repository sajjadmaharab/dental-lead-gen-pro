import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  /** Max height on mobile. Default 200px */
  mobileMaxH?: string;
  /** Grid cols on desktop. Default 2 */
  desktopCols?: number;
}

const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
    <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white z-50">
      <X className="h-8 w-8" />
    </button>
    <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain" />
  </div>
);

const ImageCarousel = ({ images, mobileMaxH = "200px", desktopCols = 2 }: ImageCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = useCallback(() => {
    setIndex((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIndex((p) => (p + 1) % images.length);
  }, [images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const gridClass =
    desktopCols === 4
      ? "hidden md:grid md:grid-cols-4 gap-3 my-6"
      : desktopCols === 3
      ? "hidden md:grid md:grid-cols-3 gap-3 my-6"
      : "hidden md:grid md:grid-cols-2 gap-3 my-6";

  return (
    <>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      {/* Mobile: swipe carousel */}
      <div
        className="relative my-6 md:hidden select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <figure
          className="overflow-hidden border border-border cursor-pointer"
          style={{ maxHeight: mobileMaxH }}
          onClick={() => setLightbox({ src: images[index].src, alt: images[index].alt })}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figcaption className="text-xs text-muted-foreground text-center py-1.5">{images[index].caption}</figcaption>

        <button
          onClick={handlePrev}
          className="absolute left-1.5 top-[40%] -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-1 shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4 text-foreground" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1.5 top-[40%] -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-1 shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4 text-foreground" />
        </button>

        <div className="flex justify-center gap-1.5 mt-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className={gridClass}>
        {images.map((img, i) => (
          <figure
            key={i}
            className="overflow-hidden border border-border cursor-pointer group"
            onClick={() => setLightbox({ src: img.src, alt: img.alt })}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="text-xs text-muted-foreground text-center py-1.5 px-2">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
