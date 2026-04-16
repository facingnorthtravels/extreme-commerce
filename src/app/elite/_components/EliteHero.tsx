"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function EliteHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] flex items-center bg-brand-navy text-white overflow-hidden texture-grain pt-28 pb-20"
    >
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(244,205,29,0.18),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(54,128,195,0.15),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-50" />

      {/* Parallax watermark */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[32rem] leading-none text-white/[0.025] tracking-tighter">
          ELITE
        </span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto text-center">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-5 py-2 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
            </span>
            <span className="font-display text-xs tracking-[0.22em] text-brand-yellow">
              ACCEPTING APPLICATIONS · LIMITED SPOTS
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-display text-[4.5rem] sm:text-[7rem] lg:text-[9.5rem] xl:text-[11rem] leading-none tracking-tight text-white"
            >
              This is not
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              className="font-display text-[4.5rem] sm:text-[7rem] lg:text-[9.5rem] xl:text-[11rem] leading-none tracking-tight text-brand-yellow"
            >
              a course.
            </motion.h1>
          </div>

          {/* Sub-statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/70 font-light leading-snug text-pretty max-w-3xl mx-auto"
          >
            It&rsquo;s a <span className="text-white font-semibold">fully-operated Amazon business</span> — researched,
            launched, and scaled by our team. Built in your name. You keep 80% of the profit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#apply" size="lg" variant="primary" arrow>
              Apply for Elite
            </Button>
            <Button href="#model" size="lg" variant="ghost">
              See the model
            </Button>
          </motion.div>

          {/* Three quick facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 grid grid-cols-3 max-w-lg mx-auto gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
          >
            {[
              { k: "3", v: "Launches" },
              { k: "80%", v: "Your share" },
              { k: "18mo", v: "Full cycle" },
            ].map((item) => (
              <div key={item.k} className="bg-brand-navy/60 backdrop-blur-sm py-5 px-4 text-center">
                <div className="font-display text-3xl text-brand-yellow leading-none">{item.k}</div>
                <div className="text-xs text-white/50 mt-1.5 font-medium">{item.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2 text-white/30"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
