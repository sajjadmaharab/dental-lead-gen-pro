import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
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
    <div className="relative inline-flex flex-col items-center">
      {/* Sparkle badge */}
      <motion.span
        className="absolute -top-3 -right-2 z-10 flex items-center gap-1 rounded-full bg-pink px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg"
        initial={{ scale: 0, rotate: -12 }}
        animate={{ scale: 1, rotate: -6 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
      >
        <Sparkles className="h-3 w-3" />
        Free
      </motion.span>

      <motion.a
        href={link}
        target={href ? undefined : "_blank"}
        rel={href ? undefined : "noopener noreferrer"}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4.5 text-base font-bold text-white transition-all duration-300 ${className}`}
        aria-label={buttonText}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        style={{
          background: "linear-gradient(135deg, hsl(142 71% 45%), hsl(160 70% 42%), hsl(142 71% 38%))",
          boxShadow:
            "0 4px 24px hsl(142 71% 45% / 0.35), 0 1px 3px hsl(142 71% 45% / 0.2), inset 0 1px 0 hsl(142 71% 80% / 0.3)",
        }}
      >
        {/* Animated shine sweep */}
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />

        {/* Soft pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping pointer-events-none"
          style={{
            background: "hsl(142 71% 45% / 0.12)",
            animationDuration: "3s",
          }}
        />

        {/* Inner border highlight */}
        <span className="absolute inset-[1px] rounded-full border border-white/15 pointer-events-none" />

        <MessageCircle className="relative z-10 h-5 w-5 drop-shadow-sm" aria-hidden="true" />
        <span className="relative z-10 tracking-wide drop-shadow-sm">{buttonText}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 drop-shadow-sm" aria-hidden="true" />
      </motion.a>

      {/* Handwriting underline */}
      <motion.svg
        className="pointer-events-none mt-1"
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
    </div>
  );
};

export { HandwritingCTA };
