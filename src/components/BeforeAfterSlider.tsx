import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeAlt, afterAlt, label }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="space-y-2">
      {label && (
        <p className="text-sm font-display font-semibold text-foreground">{label}</p>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-square rounded-xl overflow-hidden border border-border cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After (full background) */}
        <img src={afterSrc} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={beforeSrc} alt={beforeAlt} className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }} loading="lazy" />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="w-0.5 h-full bg-white/90 shadow-lg" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
              <path d="M6 10L3 7M3 7L6 4M3 7H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 10L17 7M17 7L14 4M17 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-md z-20">Before</span>
        <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-md z-20">After</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
