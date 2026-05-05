import { useEffect, useRef } from "react";

type Direction = "left" | "right" | "bottom";

interface ScrollRevealOptions {
  direction?: Direction;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const getTransform = (dir: Direction) => {
  switch (dir) {
    case "left": return "translateX(-40px)";
    case "right": return "translateX(40px)";
    case "bottom": return "translateY(30px)";
  }
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { direction = "bottom", delay = 0, threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = getTransform(direction);
    el.style.transition = `opacity 0.45s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.45s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`;
    el.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          if (once) observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, threshold, once]);

  return ref;
}

/** Wrapper component for scroll reveal */
import React from "react";

interface RevealProps {
  direction?: Direction;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal: React.FC<RevealProps> = ({
  direction = "bottom",
  delay = 0,
  className = "",
  children,
  as: Tag = "div",
}) => {
  const ref = useScrollReveal<HTMLElement>({ direction, delay });
  return React.createElement(Tag, { ref, className }, children);
};
