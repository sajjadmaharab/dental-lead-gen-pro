import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoogleReviewCard, type GoogleReview } from "./GoogleReviewCard";

interface Props {
  reviews: GoogleReview[];
}

export const GoogleReviewCarousel = ({ reviews }: Props) => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  // Clamp index when cardsPerView changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsPerView + 5 / cardsPerView)}%)`,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / cardsPerView}% - ${(20 * (cardsPerView - 1)) / cardsPerView}px)` }}
            >
              <GoogleReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {index > 0 && (
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          aria-label="Previous reviews"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      )}
      {index < maxIndex && (
        <button
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          aria-label="Next reviews"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      )}
    </div>
  );
};
