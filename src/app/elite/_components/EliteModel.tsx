"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

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
