"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Factory, Paintbrush, Rocket, TrendingUp, RefreshCw } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

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
