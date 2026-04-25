import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/clinic";

interface HandwritingCTAProps {
  buttonText?: string;
  href?: string;
  className?: string;
}

const HandwritingCTA = ({
  buttonText = "Book Your Appointment",
  href,
  className = "",
}: HandwritingCTAProps) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" as const },
        opacity: { duration: 0.3 },
      },
    },
  };

  const link = href ?? waLink();

  return (
    <a
      href={link}
      target={href ? undefined : "_blank"}
      rel={href ? undefined : "noopener noreferrer"}
      className={`relative inline-flex items-center gap-2.5 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-cta transition-smooth hover:bg-cta-hover hover:-translate-y-0.5 ${className}`}
      aria-label={buttonText}
    >
      {/* Handwriting underline SVG */}
      <motion.svg
        className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2"
        width="220"
        height="14"
        viewBox="0 0 220 14"
        fill="none"
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        <motion.path
          d="M4 8 C 40 2, 90 12, 130 6 S 200 4, 216 9"
          stroke="hsl(var(--pink))"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          variants={draw}
        />
      </motion.svg>

      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span>{buttonText}</span>
    </a>
  );
};

export { HandwritingCTA };
