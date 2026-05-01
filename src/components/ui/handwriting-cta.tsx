import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";

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
  const [dialogOpen, setDialogOpen] = useState(false);

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

  // If a custom href is provided, use direct link behavior
  if (href) {
    return (
      <motion.a
        href={href}
        className={`group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cta to-emerald-500 px-9 py-4 text-base font-bold text-cta-foreground shadow-[0_4px_20px_hsl(142_71%_45%/0.4)] transition-all duration-300 hover:shadow-[0_6px_30px_hsl(142_71%_45%/0.55)] hover:-translate-y-1 ${className}`}
        aria-label={buttonText}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-cta/20 pointer-events-none" style={{ animationDuration: '2.5s' }} />
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="tracking-wide">{buttonText}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </motion.a>
    );
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setDialogOpen(true)}
        className={`group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cta to-emerald-500 px-9 py-4 text-base font-bold text-cta-foreground shadow-[0_4px_20px_hsl(142_71%_45%/0.4)] transition-all duration-300 hover:shadow-[0_6px_30px_hsl(142_71%_45%/0.55)] hover:-translate-y-1 ${className}`}
        aria-label={buttonText}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-cta/20 pointer-events-none" style={{ animationDuration: '2.5s' }} />

        {/* Handwriting underline SVG */}
        <motion.svg
          className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2"
          width="240"
          height="14"
          viewBox="0 0 240 14"
          fill="none"
          initial="hidden"
          animate="visible"
          aria-hidden="true"
        >
          <motion.path
            d="M4 8 C 40 2, 90 12, 140 6 S 210 4, 236 9"
            stroke="hsl(var(--pink))"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            variants={draw}
          />
        </motion.svg>

        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="tracking-wide">{buttonText}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </motion.button>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export { HandwritingCTA };
