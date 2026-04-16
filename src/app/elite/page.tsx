"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown, Check, X, ArrowRight, Search, Factory, Paintbrush, Rocket, TrendingUp, RefreshCw, BarChart3, Info, Plus, Shield, Clock, MessageCircle } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

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


const forYou = [
  "You have capital to deploy and want it working harder",
  "You want a real business asset, not just a side hustle",
  "You understand that real returns take 12–18 months",
  "You value delegation over micromanagement",
  "You're comfortable with a results-based partnership",
  "You want a team that has done this 1,000+ times",
];

const notForYou = [
  "You're looking for a course to learn Amazon yourself",
  "You need returns within 90 days to cover living costs",
  "You want full daily control of every decision",
  "You're not comfortable with a profit-share model",
  "You have under $25,000 in deployable capital",
  "You're testing ideas rather than building a business",
];

export function EliteQualifier() {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            IS THIS FOR YOU?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance"
          >
            Honest about who
            <br />
            <span className="text-brand-azure">we&rsquo;re built for.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/60 max-w-2xl mx-auto"
          >
            We filter hard. Every client we take on gets our full team&rsquo;s attention.
            That means we only work with people we can genuinely win with.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative rounded-3xl bg-brand-navy p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none">✓</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 mb-8">
                <Check className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={3} />
                <span className="font-display text-xs tracking-[0.2em] text-brand-yellow">BUILT FOR YOU IF...</span>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* NOT FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-brand-navy/10 bg-white p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-brand-navy/[0.04] pointer-events-none select-none">✗</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 mb-8">
                <X className="h-3.5 w-3.5 text-brand-navy/50" strokeWidth={3} />
                <span className="font-display text-xs tracking-[0.2em] text-brand-navy/60">NOT THE RIGHT FIT IF...</span>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-brand-navy/15 text-brand-navy/40">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-brand-navy/60 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bridge line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 text-center text-brand-navy/60 text-lg"
        >
          If the left column describes you —{" "}
          <span className="text-brand-navy font-semibold">keep reading.</span>
        </motion.p>
      </div>
    </section>
  );
}


const flow = [
  { label: "Your Capital", sub: "$7K / launch", color: "bg-brand-yellow text-brand-navy", dot: "bg-brand-yellow" },
  { label: "Research", sub: "Data-led product selection", color: "bg-brand-navy text-white", dot: "bg-brand-azure" },
  { label: "Sourcing", sub: "Vetted supplier + QC", color: "bg-brand-navy text-white", dot: "bg-brand-azure" },
  { label: "Launch", sub: "Creatives, PPC, listings", color: "bg-brand-navy text-white", dot: "bg-brand-azure" },
  { label: "Revenue", sub: "Optimised & scaled", color: "bg-brand-navy text-white", dot: "bg-brand-azure" },
  { label: "Profit Split", sub: "80% yours · 20% ours", color: "bg-brand-yellow text-brand-navy", dot: "bg-brand-yellow" },
];

export function EliteModel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section id="model" className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(54,128,195,0.15),transparent_50%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-azure/15 border border-brand-azure/30 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-azure"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            THE MODEL, EXPLAINED
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance"
          >
            Capital in. Profit out.
            <br />
            <span className="text-brand-yellow">Everything else — on us.</span>
          </motion.h2>
        </div>

        {/* Flow diagram */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-[52px] left-0 right-0 hidden lg:block h-[2px] bg-white/10">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-brand-yellow via-brand-azure to-brand-yellow"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3 relative">
            {flow.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Node */}
                <div className={`relative z-10 flex h-[104px] w-full max-w-[160px] flex-col items-center justify-center rounded-2xl px-4 py-5 shadow-xl ${step.color}`}>
                  <div className="font-bold text-sm leading-tight">{step.label}</div>
                  <div className={`mt-1 text-xs leading-snug ${step.color.includes("yellow") ? "text-brand-navy/70" : "text-white/60"}`}>{step.sub}</div>
                </div>

                {/* Arrow (between nodes, desktop) */}
                {i < flow.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] text-white/20" style={{ left: `${(i + 1) * (100 / 6)}%`, transform: "translateX(-50%) translateY(-50%)" }}>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}

                {/* Step label */}
                <div className="font-display text-xs tracking-[0.15em] text-white/40">
                  {i === 0 ? "YOU" : i === flow.length - 1 ? "YOU + US" : `STEP ${String(i).padStart(2, "0")}`}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Profit share breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-20 grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-12 items-center max-w-5xl mx-auto"
        >
          {/* Your share */}
          <div className="rounded-3xl bg-brand-yellow p-8 sm:p-10 text-brand-navy text-center">
            <div className="font-display text-8xl sm:text-9xl leading-none tracking-tight">80%</div>
            <div className="mt-3 font-bold text-xl">Your profit share</div>
            <div className="mt-2 text-brand-navy/70 text-sm leading-relaxed">
              Paid directly to you. No delays, no ambiguity. Every dollar above the ROI threshold is tracked and distributed.
            </div>
          </div>

          {/* Divider */}
          <div className="flex lg:flex-col items-center justify-center gap-3">
            <div className="h-[1px] w-12 lg:h-12 lg:w-[1px] bg-white/15" />
            <span className="font-display text-sm tracking-[0.2em] text-white/30">SPLIT</span>
            <div className="h-[1px] w-12 lg:h-12 lg:w-[1px] bg-white/15" />
          </div>

          {/* Our share */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 text-center">
            <div className="font-display text-8xl sm:text-9xl leading-none tracking-tight text-brand-azure">20%</div>
            <div className="mt-3 font-bold text-xl text-white">Our performance fee</div>
            <div className="mt-2 text-white/50 text-sm leading-relaxed">
              We earn nothing until your ROI crosses 50%. Our upside is tied to your success — not your fees.
            </div>
          </div>
        </motion.div>

        {/* Key callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-8 text-center"
        >
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            <span className="text-brand-yellow font-semibold">Milestone-based unlock:</span> We earn 10% once ROI crosses 50%, and the full 20% once ROI crosses 100%. We only win when you win first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


const milestones = [
  {
    range: "Month 1–3",
    title: "Research & Validation",
    icon: Search,
    color: "brand-yellow",
    items: [
      "Market opportunity analysis",
      "Competitor landscape deep-dive",
      "Margin modelling & supplier benchmarking",
      "Product 1 shortlisted & validated",
    ],
    launch: null,
  },
  {
    range: "Month 3–6",
    title: "Sourcing & Manufacturing",
    icon: Factory,
    color: "brand-azure",
    items: [
      "Supplier vetting & sample ordering",
      "Quality control inspections",
      "Freight planning & fulfilment setup",
      "Inventory to Amazon warehouse",
    ],
    launch: null,
  },
  {
    range: "Month 6–7",
    title: "Creative & Launch Prep",
    icon: Paintbrush,
    color: "brand-yellow",
    items: [
      "Brand identity & packaging",
      "A+ content & listing copy",
      "Photography & video",
      "PPC campaign architecture",
    ],
    launch: null,
  },
  {
    range: "Month 7+",
    title: "Launch #1 Goes Live",
    icon: Rocket,
    color: "brand-yellow",
    items: [
      "Day-1 launch execution",
      "Review velocity strategy",
      "PPC spend optimisation",
      "Weekly reporting begins",
    ],
    launch: 1,
  },
  {
    range: "Month 12+",
    title: "Launch #2 + Scaling",
    icon: TrendingUp,
    color: "brand-azure",
    items: [
      "Product 2 launches",
      "Winner from L1 scaled aggressively",
      "Reinvestment strategy refined",
      "Portfolio momentum builds",
    ],
    launch: 2,
  },
  {
    range: "Month 17+",
    title: "Launch #3 + Compound",
    icon: RefreshCw,
    color: "brand-yellow",
    items: [
      "Product 3 launches",
      "Multi-product portfolio active",
      "Profit distributions in motion",
      "Exit or reinvest decision point",
    ],
    launch: 3,
  },
];

export function EliteTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            YOUR 18-MONTH ROADMAP
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance"
          >
            You always know
            <br />
            <span className="text-brand-azure">exactly where you are.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/60 max-w-2xl mx-auto"
          >
            Every phase is planned, reported, and accountable. No black boxes. No vague updates.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]">
            <div className="absolute inset-0 bg-brand-navy/10 rounded-full" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-yellow via-brand-azure to-brand-yellow rounded-full"
            />
          </div>

          <div className="space-y-10 sm:space-y-14">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
                  className={`relative grid sm:grid-cols-2 gap-4 sm:gap-10 items-start pl-16 sm:pl-0 ${
                    isEven ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Text side */}
                  <div className={`${isEven ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                    <span className="font-display text-xs tracking-[0.2em] text-brand-azure">
                      {m.range}
                    </span>
                    <h3 className="mt-1 font-black text-xl sm:text-2xl text-brand-navy tracking-tight">
                      {m.title}
                      {m.launch && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-brand-yellow px-2.5 py-0.5 text-xs font-bold text-brand-navy align-middle">
                          Launch #{m.launch}
                        </span>
                      )}
                    </h3>
                    <ul className={`mt-3 space-y-1.5 ${isEven ? "sm:items-end" : ""}`}>
                      {m.items.map((item) => (
                        <li key={item} className={`flex items-center gap-2 text-sm text-brand-navy/60 ${isEven ? "sm:flex-row-reverse sm:justify-start" : ""}`}>
                          <span className="h-1 w-1 rounded-full bg-brand-yellow flex-none" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Node */}
                  <div className="absolute left-6 sm:left-1/2 top-0 -translate-x-1/2 z-10">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-xl ${
                      m.color === "brand-yellow" ? "bg-brand-yellow text-brand-navy" : "bg-brand-azure text-white"
                    }`}>
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Empty col for alternating layout */}
                  <div className="hidden sm:block" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative mt-14 flex flex-col items-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy border-4 border-brand-yellow shadow-2xl shadow-brand-yellow/30">
              <span className="font-display text-brand-yellow text-sm tracking-widest">18M</span>
            </div>
            <p className="mt-4 font-bold text-brand-navy text-center">
              Portfolio built. Profit in motion.
            </p>
            <p className="text-sm text-brand-navy/50 text-center mt-1">
              Reinvest, exit, or extend — your call.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Research & Validation",
    summary: "We find the product. You approve the direction.",
    tasks: [
      "Amazon marketplace opportunity scanning",
      "Search volume & trend analysis",
      "Competitor pricing & review mining",
      "Profit margin modelling (landed cost + fees)",
      "Supplier landscape mapping",
      "Product brief & go / no-go memo",
      "Client approval checkpoint",
    ],
  },
  {
    icon: Factory,
    phase: "Phase 2",
    title: "Sourcing & Manufacturing",
    summary: "Factory relationships, sample cycles, freight — fully managed.",
    tasks: [
      "Supplier outreach & RFQ (3+ bids)",
      "Factory vetting & due diligence",
      "Sample ordering & testing",
      "Packaging & branding spec",
      "Third-party quality inspection (pre-shipment)",
      "Freight forwarding & customs brokerage",
      "Amazon FBA inbound shipment creation",
    ],
  },
  {
    icon: Paintbrush,
    phase: "Phase 3",
    title: "Creative & Launch",
    summary: "Every creative asset, listing, and campaign built from data.",
    tasks: [
      "Product photography (main + lifestyle)",
      "Infographic & feature-callout imagery",
      "A+ content & brand story",
      "SEO-optimised listing copy (title, bullets, description)",
      "Amazon storefront build",
      "PPC campaign architecture (Sponsored Products, Brands, Display)",
      "Launch promotion strategy (coupons, Vine, early reviews)",
      "Day-1 launch execution",
    ],
  },
  {
    icon: BarChart3,
    phase: "Phase 4",
    title: "Operations & Scaling",
    summary: "Ongoing management so you never have to open Seller Central.",
    tasks: [
      "Weekly PPC optimisation & bid management",
      "Inventory forecasting & reorder planning",
      "Listing health monitoring & suppression fixes",
      "Review management & response",
      "Promotions & deal scheduling",
      "Monthly strategy call with your dedicated manager",
      "Weekly performance report delivered to you",
      "Reinvestment planning for winners",
    ],
  },
];

export function EliteHandled() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(244,205,29,0.1),transparent_50%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-azure/15 border border-brand-azure/30 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-azure"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              WHAT WE RUN FOR YOU
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="mt-5 font-black tracking-tight text-white text-4xl sm:text-5xl leading-[1.02]"
            >
              Everything.
              <br />
              <span className="text-brand-yellow">Seriously.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
              className="mt-5 text-lg text-white/60 leading-relaxed"
            >
              From the first data pull to the hundredth PPC optimisation — every task is handled by a dedicated, experienced team. Your job is to review, approve, and collect.
            </motion.p>

            {/* Task count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="font-display text-6xl text-brand-yellow leading-none">30+</div>
              <div className="mt-2 text-white/70 text-sm">distinct operational tasks across all four phases — all included, all handled.</div>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div>
            <div className="space-y-3">
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                    className={cn(
                      "rounded-2xl border transition-all duration-500",
                      isOpen
                        ? "border-brand-yellow/30 bg-white/[0.07]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center gap-4 p-6 text-left"
                    >
                      <div className={cn(
                        "flex h-11 w-11 flex-none items-center justify-center rounded-xl transition-colors duration-500",
                        isOpen ? "bg-brand-yellow text-brand-navy" : "bg-white/10 text-white"
                      )}>
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-xs tracking-[0.2em] text-brand-azure">{phase.phase}</div>
                        <div className="font-bold text-lg text-white mt-0.5 leading-tight">{phase.title}</div>
                        <div className="text-sm text-white/50 mt-0.5">{phase.summary}</div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 flex-none text-white/40 transition-transform duration-500",
                          isOpen && "rotate-180 text-brand-yellow"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <ul className="px-6 pb-6 space-y-2.5 pl-[4.75rem]">
                            {phase.tasks.map((task, ti) => (
                              <motion.li
                                key={task}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: ti * 0.04, duration: 0.3 }}
                                className="flex items-center gap-3 text-sm text-white/70"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                                {task}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const scenarios = [
  {
    label: "Conservative",
    tag: "50% avg ROI",
    capital: 21,
    revenue: 31.5,
    gross: 10.5,
    yourShare: 8.4,
    color: "bg-white border-brand-navy/10",
    textColor: "text-brand-navy",
    subColor: "text-brand-navy/60",
    tagColor: "bg-brand-navy/5 text-brand-navy/60",
    numColor: "text-brand-navy",
  },
  {
    label: "Base Case",
    tag: "150% avg ROI",
    capital: 21,
    revenue: 52.5,
    gross: 31.5,
    yourShare: 25.2,
    color: "bg-brand-navy",
    textColor: "text-white",
    subColor: "text-white/60",
    tagColor: "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30",
    numColor: "text-brand-yellow",
    featured: true,
  },
  {
    label: "Strong",
    tag: "250% avg ROI",
    capital: 21,
    revenue: 73.5,
    gross: 52.5,
    yourShare: 42,
    color: "bg-white border-brand-navy/10",
    textColor: "text-brand-navy",
    subColor: "text-brand-navy/60",
    tagColor: "bg-brand-azure/10 text-brand-azure",
    numColor: "text-brand-navy",
  },
];

export function EliteMath() {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            THE NUMBERS, HONESTLY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance"
          >
            What $21K deployed
            <br />
            <span className="text-brand-azure">can realistically look like.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/60 max-w-2xl mx-auto"
          >
            Three launches. $7,000 of testing capital each. Here&rsquo;s how the math works across three scenarios — modelled from our actual launch data, not promises.
          </motion.p>
        </div>

        {/* Capital deployed callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex items-center justify-center gap-6 flex-wrap"
        >
          {[
            { label: "Launches", value: "3" },
            { label: "Capital per launch", value: "$7K" },
            { label: "Total deployed", value: "$21K" },
            { label: "Your profit share", value: "80%" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-display text-3xl text-brand-navy leading-none">{item.value}</div>
                <div className="text-xs text-brand-navy/50 mt-1">{item.label}</div>
              </div>
              {i < 3 && <span className="text-brand-navy/20 text-2xl hidden sm:block">×</span>}
            </div>
          ))}
        </motion.div>

        {/* Scenario cards */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-4 lg:gap-6">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className={`relative rounded-3xl border p-7 sm:p-8 ${s.color} ${s.featured ? "shadow-2xl shadow-brand-navy/20 scale-[1.02] z-10" : ""}`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold text-brand-navy whitespace-nowrap">
                  Most likely outcome
                </div>
              )}

              {/* Label */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className={`font-black text-xl ${s.textColor}`}>{s.label}</div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${s.tagColor}`}>
                  {s.tag}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {[
                  { label: "Capital deployed", value: s.capital, prefix: "$", suffix: "K", note: "" },
                  { label: "Total revenue", value: s.revenue, prefix: "$", suffix: "K", note: "" },
                  { label: "Gross profit", value: s.gross, prefix: "$", suffix: "K", note: "" },
                  { label: "Your share (80%)", value: s.yourShare, prefix: "$", suffix: "K", note: "highlight" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className={`flex items-center justify-between py-2.5 border-b last:border-0 ${
                      s.featured ? "border-white/10" : "border-brand-navy/8"
                    } ${metric.note === "highlight" ? "pt-4 mt-2" : ""}`}
                  >
                    <span className={`text-sm ${s.subColor}`}>{metric.label}</span>
                    <span className={`font-display text-2xl leading-none ${
                      metric.note === "highlight" ? s.numColor : s.textColor
                    } ${metric.note === "highlight" ? "text-3xl" : ""}`}>
                      <Counter to={metric.value} prefix={metric.prefix} suffix={metric.suffix} duration={1.8} formatFn={(n) => n.toString()} />
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-8 flex items-start gap-2 max-w-2xl mx-auto text-center justify-center"
        >
          <Info className="h-4 w-4 text-brand-navy/30 mt-0.5 flex-none" />
          <p className="text-xs text-brand-navy/40 leading-relaxed text-pretty">
            Figures are illustrative projections based on historical launch data from our portfolio. Past performance does not guarantee future results. Actual returns depend on product selection, market conditions, and execution quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


const launches = [
  {
    id: "L-084",
    category: "Premium Skincare",
    marketplace: "Amazon USA",
    launched: "Q2 2024",
    timeToProfit: "11 weeks",
    roi: 218,
    revenue: "$284K",
    status: "Scaling",
    accent: "navy",
  },
  {
    id: "L-091",
    category: "Home Organisation",
    marketplace: "Amazon UK",
    launched: "Q3 2024",
    timeToProfit: "9 weeks",
    roi: 174,
    revenue: "$143K",
    status: "Scaling",
    accent: "yellow",
  },
  {
    id: "L-078",
    category: "Sports & Outdoors",
    marketplace: "Amazon USA",
    launched: "Q1 2024",
    timeToProfit: "14 weeks",
    roi: 132,
    revenue: "$198K",
    status: "Profitable",
    accent: "azure",
  },
  {
    id: "L-103",
    category: "Pet Accessories",
    marketplace: "Amazon Canada",
    launched: "Q4 2024",
    timeToProfit: "8 weeks",
    roi: 291,
    revenue: "$97K",
    status: "Scaling",
    accent: "navy",
  },
];

const accentStyles = {
  navy: { card: "bg-brand-navy", text: "text-white", sub: "text-white/60", tag: "bg-brand-yellow text-brand-navy", num: "text-brand-yellow" },
  yellow: { card: "bg-brand-yellow", text: "text-brand-navy", sub: "text-brand-navy/60", tag: "bg-brand-navy text-brand-yellow", num: "text-brand-navy" },
  azure: { card: "bg-brand-azure", text: "text-white", sub: "text-white/60", tag: "bg-white/20 text-white border border-white/30", num: "text-white" },
};

export function EliteLaunches() {
  return (
    <section className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(54,128,195,0.12),transparent_50%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-azure/15 border border-brand-azure/30 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-azure"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            FROM THE LAUNCH ARCHIVE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance"
          >
            Real launches.
            <br />
            <span className="text-brand-yellow">Real data.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-white/60 max-w-2xl mx-auto"
          >
            Anonymised launch snapshots from our active portfolio. Categories, timelines, and returns — no embellishment.
          </motion.p>
        </div>

        {/* Launch cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {launches.map((launch, i) => {
            const style = accentStyles[launch.accent as keyof typeof accentStyles];
            return (
              <motion.div
                key={launch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden ${style.card}`}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`rounded-full px-3 py-1 font-display text-xs tracking-[0.15em] ${style.tag}`}>
                      {launch.status}
                    </span>
                    <span className={`font-display text-xs tracking-widest ${style.sub}`}>
                      {launch.id}
                    </span>
                  </div>

                  <h3 className={`font-black text-xl leading-tight ${style.text}`}>
                    {launch.category}
                  </h3>
                  <div className={`text-sm mt-1 ${style.sub}`}>{launch.marketplace}</div>
                </div>

                {/* Divider */}
                <div className={`mx-6 h-[1px] ${launch.accent === "yellow" ? "bg-brand-navy/10" : "bg-white/10"}`} />

                {/* Metrics */}
                <div className="p-6 pt-4 space-y-3">
                  {[
                    { label: "Launched", value: launch.launched },
                    { label: "Time to profit", value: launch.timeToProfit },
                    { label: "Total revenue", value: launch.revenue },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <span className={`text-xs ${style.sub}`}>{metric.label}</span>
                      <span className={`text-sm font-semibold ${style.text}`}>{metric.value}</span>
                    </div>
                  ))}

                  {/* ROI big number */}
                  <div className={`mt-4 pt-4 border-t ${launch.accent === "yellow" ? "border-brand-navy/10" : "border-white/10"}`}>
                    <div className={`text-xs mb-1 ${style.sub}`}>ROI achieved</div>
                    <div className="flex items-end gap-2">
                      <div className={`font-display text-5xl leading-none ${style.num}`}>
                        <Counter to={launch.roi} suffix="%" duration={2} />
                      </div>
                      <TrendingUp className={`h-5 w-5 mb-1 ${style.num} opacity-70`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 text-center text-white/30 text-sm"
        >
          Product names and client details withheld for confidentiality. Data verified internally.
        </motion.p>
      </div>
    </section>
  );
}


const faqs = [
  {
    q: "How much capital do I actually need beyond the $7K per launch?",
    a: "The $7K per launch covers our testing capital — the budget we use to source, create, and launch your product. You'll also need capital for cost of goods (typically $5–12K depending on category and MOQ) and initial inventory replenishment once a product starts selling. We walk you through the full capital plan in the onboarding call so there are no surprises.",
  },
  {
    q: "Who owns the Amazon account and the brand?",
    a: "You do, entirely. The Amazon Seller Central account is in your name, the brand is registered to you, and all the intellectual property is yours. We operate inside your account as an authorised team. At any point, you have full access and ownership.",
  },
  {
    q: "What happens if a launch fails?",
    a: "We build a portfolio, not a single bet. Across three launches, the data shows diversification absorbs individual product failures. We retire underperformers fast — within 60–90 days if the signals aren't there — and redirect energy and budget toward the winners. We document every lesson and apply it to subsequent launches.",
  },
  {
    q: "When do I start seeing returns?",
    a: "Realistically, your first product reaches profitability around week 9–14 post-launch, meaning month 8–10 from your start date once you factor in sourcing and production timelines. We set explicit expectations in your onboarding. Anyone telling you they'll have you profitable in 30 days is not being honest.",
  },
  {
    q: "How is the 80/20 split tracked and distributed?",
    a: "Every client gets a monthly financial report showing gross revenue, cost of goods, Amazon fees, PPC spend, and net profit. Your 80% is calculated from net profit and transferred to you monthly once the account is in a profitable state. The 10% milestone unlocks at 50% ROI; the full 20% at 100% ROI — documented in your agreement.",
  },
  {
    q: "Can I be involved in product decisions?",
    a: "Absolutely. We run the research and present you with a validated product brief at every stage. You have approval rights on the product selection, brand direction, and major creative decisions. What you won't be doing is the day-to-day operational work — that's entirely on us.",
  },
  {
    q: "What happens after the 18 months?",
    a: "You own a portfolio of Amazon products generating ongoing revenue. At that point you have three paths: continue working with us under an ongoing management model, take over operations with your own team, or explore a sale (Amazon FBA businesses routinely sell for 3–5x annual net profit multiples). We help you evaluate all three.",
  },
];

export function EliteFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-24 sm:py-32 border-t border-brand-navy/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            ELITE PROGRAM FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl leading-[1.02] text-balance"
          >
            The questions investors
            <br />
            <span className="text-brand-azure">actually ask.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-brand-navy/8 border-y border-brand-navy/8">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 sm:py-7 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    <span className="font-display text-sm tracking-[0.2em] text-brand-yellow pt-1 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-brand-navy tracking-tight group-hover:text-brand-azure transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen
                      ? "bg-brand-navy border-brand-navy text-brand-yellow rotate-[135deg]"
                      : "bg-white border-brand-navy/15 text-brand-navy group-hover:border-brand-navy/30"
                  }`}>
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-9 sm:pl-11 pr-14 text-brand-navy/65 text-[15px] sm:text-base leading-relaxed text-pretty">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export function EliteCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="apply"
      ref={ref}
      className="relative bg-brand-navy text-white py-24 sm:py-40 overflow-hidden texture-grain"
    >
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,205,29,0.18),transparent_60%)]" />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[22rem] sm:text-[36rem] leading-none text-white/[0.04] tracking-tighter">
          APPLY
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
          APPLICATIONS OPEN NOW
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-balance"
        >
          Ready to stop
          <br />
          <span className="text-brand-yellow">wondering</span> and start?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Book a 30-minute call. We&rsquo;ll review your situation, walk through the model honestly, and tell you directly whether Elite is the right fit — even if the answer is no.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mt-3 text-sm text-white/40 italic"
        >
          No pitch deck. No pressure. No commitment required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#" size="lg" variant="primary" arrow>
            Book Your Discovery Call
          </Button>
          <Button href="/#faq" size="lg" variant="ghost">
            Still have questions?
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: Clock,
              title: "30-minute call",
              sub: "Structured. Efficient. Respectful of your time.",
            },
            {
              icon: Shield,
              title: "Zero commitment",
              sub: "The call is free. Qualification is mutual.",
            },
            {
              icon: MessageCircle,
              title: "< 48h response",
              sub: "Our team confirms your slot within two business days.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-yellow/20 text-brand-yellow">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-white/45 text-xs mt-1 leading-snug">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


export default function ElitePage() {
  return (
    <>
      <Nav />
      <main>
        <EliteHero />
        <EliteQualifier />
        <EliteModel />
        <EliteTimeline />
        <EliteHandled />
        <EliteMath />
        <EliteLaunches />
        <EliteFAQ />
        <EliteCTA />
      </main>
      <Footer />
    </>
  );
}