"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Search, Factory, Paintbrush, BarChart3 } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

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
