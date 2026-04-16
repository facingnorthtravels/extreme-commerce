"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, PlayCircle, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-brand-navy text-white min-h-screen flex items-center pt-24 pb-12 texture-grain"
    >
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.25)_0%,_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(244,205,29,0.15)_0%,_transparent_50%)]"
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-60" />

      {/* Giant eX watermark */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute -left-20 sm:-left-32 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"
      >
        <span className="font-display text-[22rem] sm:text-[32rem] lg:text-[44rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      {/* Animated blobs */}
      <div
        aria-hidden
        className="absolute top-1/4 right-[10%] h-72 w-72 rounded-full bg-brand-azure/20 blur-3xl animate-blob -z-10"
      />
      <div
        aria-hidden
        className="absolute bottom-[15%] right-[25%] h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl animate-blob -z-10"
        style={{ animationDelay: "-8s" }}
      />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/15 px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              <span className="font-display text-xs tracking-[0.2em] text-white/90">
                AMAZON DONE-FOR-YOU — NOW ENROLLING
              </span>
            </motion.div>

            <h1 className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="block text-white"
              >
                Build a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-yellow">profitable</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.9 }}
                    className="absolute left-0 -bottom-1 h-[5px] w-full bg-brand-yellow/20 origin-left rounded-full -z-10"
                  />
                </span>{" "}
                Amazon brand.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
                className="block text-white"
              >
                With us.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              className="mt-7 text-lg sm:text-xl max-w-xl text-white/70 leading-relaxed text-pretty"
            >
              We launch, grow, and operate Amazon businesses for entrepreneurs
              and investors. Research, sourcing, creatives, PPC, and ops —
              handled by the team behind thousands of launches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button href="#elite" size="lg" variant="primary" arrow>
                Start with Elite
              </Button>
              <Link
                href="#process"
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white px-3 py-3"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/15 group-hover:bg-white/10 group-hover:border-brand-yellow/40 transition">
                  <PlayCircle className="h-5 w-5 text-brand-yellow" />
                </span>
                <span className="font-semibold text-sm">See how it works</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-yellow" />
                <span>Powered by data from 1,000+ launches</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-brand-yellow" />
                <span>80/20 profit-share model</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-[600px] w-full"
          >
            {/* Floating stat card — big revenue */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-[280px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <div className="flex items-center justify-between text-brand-navy/70 text-xs font-display tracking-[0.2em]">
                <span>MONTHLY REVENUE</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <TrendingUp className="h-3 w-3" />
                  +127%
                </span>
              </div>
              <div className="mt-4 font-black text-brand-navy text-5xl tracking-tight">
                <Counter
                  to={284}
                  prefix="$"
                  suffix="K"
                  duration={2.4}
                />
              </div>
              <div className="mt-4 flex gap-1 items-end h-10">
                {[40, 55, 48, 70, 62, 82, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.6,
                      delay: 1.2 + i * 0.08,
                      ease: EASE,
                    }}
                    className="flex-1 rounded-sm bg-brand-navy/80"
                  />
                ))}
              </div>
            </motion.div>

            {/* Main card — launch tracker */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[30%] left-0 w-[320px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between text-white/60 text-xs font-display tracking-[0.2em]">
                <span>ACTIVE LAUNCH</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  LIVE
                </span>
              </div>
              <div className="mt-3 font-bold text-white text-lg leading-tight">
                Premium Skincare
                <br />
                <span className="text-white/60 font-medium">USA Marketplace</span>
              </div>
              <div className="mt-4 space-y-2.5">
                {[
                  { label: "Research", pct: 100 },
                  { label: "Sourcing", pct: 100 },
                  { label: "Creatives", pct: 100 },
                  { label: "PPC Launch", pct: 72 },
                ].map((step, i) => (
                  <div key={step.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/80">{step.label}</span>
                      <span className="text-brand-yellow font-semibold">
                        {step.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${step.pct}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 1 + i * 0.15,
                          ease: EASE,
                        }}
                        className="h-full bg-gradient-to-r from-brand-yellow to-brand-azure"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Small metric card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-0 right-[10%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <div className="text-white/70 text-xs font-display tracking-[0.2em]">
                ROI ACHIEVED
              </div>
              <div className="mt-2 font-black text-white text-4xl">
                <Counter to={218} suffix="%" duration={2.5} />
              </div>
              <div className="mt-1 text-white/60 text-xs">
                Avg. across Q1 launches
              </div>
            </motion.div>

            {/* Decorative orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="h-[400px] w-[400px] rounded-full border border-white/5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em]"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
