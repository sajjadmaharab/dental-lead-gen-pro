"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/clinic";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export function HandWrittenTitle({
  title = "Your Brightest Smile With",
  subtitle = "Experience the artistry of our skilled dentists, harnessing advanced technology to craft radiant smiles that transform lives and instil unwavering confidence.",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative w-full">
      {/* Hand-drawn circle stroke */}
      <div className="pointer-events-none absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate="visible"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M 950 90
               C 1250 300, 1050 480, 600 520
               C 250 520, 150 480, 150 300
               C 150 120, 350 80, 600 80
               C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-pink opacity-30"
          />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}{" "}
          <span className="text-pink">Motiur's Dental</span>
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-5 text-base md:text-lg text-primary/80 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="gap-2 rounded-md h-12 px-7">
              <MessageCircle className="h-5 w-5" /> Book Your Appointment
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
