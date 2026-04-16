"use client";

import { motion } from "motion/react";
import { Check, Rocket, Wallet, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const inclusions = [
  {
    icon: Rocket,
    title: "3 product launches",
    detail: "Spaced 6 months apart. First launch within 6 months of joining.",
  },
  {
    icon: Wallet,
    title: "$7,000 per launch",
    detail:
      "Testing capital allocated strategically. Winners get aggressive reinvestment.",
  },
  {
    icon: Shield,
    title: "Full team deployed",
    detail:
      "Research, sourcing, creatives, PPC, and account ops — all staffed on your behalf.",
  },
  {
    icon: Zap,
    title: "80 / 20 profit share",
    detail:
      "You keep 80%. We earn 20% only once your ROI clears defined milestones.",
  },
];

export function Elite() {
  return (
    <section
      id="elite"
      className="relative bg-white py-10 sm:py-12 overflow-hidden"
    >
      {/* Decorative yellow accent bar */}
      <div className="absolute left-0 top-20 h-[2px] w-20 bg-brand-yellow" />
      <div className="absolute right-0 bottom-20 h-[2px] w-20 bg-brand-yellow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left — narrative */}
          <div className="lg:sticky lg:top-32">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs tracking-[0.2em] mb-4 bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                THE ELITE PROGRAM
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
                className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]"
              >
                Turn capital into a{" "}
                <span className="text-brand-azure">scalable Amazon</span>{" "}
                income stream.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
                className="mt-3 text-base sm:text-lg leading-relaxed text-pretty text-brand-navy/70"
              >
                Designed for investors and business owners with capital to deploy. You bring the ambition — we run the operation end-to-end.
              </motion.p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                className="rounded-2xl bg-brand-navy p-4 text-white"
              >
                <div className="font-display text-4xl text-brand-yellow leading-none">
                  80%
                </div>
                <div className="mt-1.5 text-sm text-white/70">
                  Your share of profits
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                className="rounded-2xl bg-brand-yellow p-4 text-brand-navy"
              >
                <div className="font-display text-4xl leading-none">18mo</div>
                <div className="mt-1.5 text-sm opacity-80">
                  Full launch cycle
                </div>
              </motion.div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="#contact" size="lg" variant="secondary" arrow>
                Apply for Elite
              </Button>
              <Button href="#process" size="lg" variant="outline">
                Read the playbook
              </Button>
            </div>
          </div>

          {/* Right — what's included */}
          <div>
            <div className="space-y-2">
              {inclusions.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: i * 0.08,
                    }}
                    className="group relative rounded-2xl border border-brand-navy/10 bg-white p-3 sm:p-4 hover:border-brand-navy/30 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-500"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-500">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base text-brand-navy tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-brand-navy/70 leading-snug text-sm">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Guarantee strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
              className="mt-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-700 p-4 text-white"
            >
              <div className="absolute -right-8 -top-8 font-display text-[10rem] leading-none text-white/[0.05] pointer-events-none select-none">
                eX
              </div>
              <div className="relative flex items-start gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <div>
                  <div className="font-display text-xs tracking-[0.2em] text-brand-yellow">
                    ALIGNED INCENTIVES
                  </div>
                  <h4 className="mt-1 font-bold text-lg tracking-tight">
                    We only earn when you profit.
                  </h4>
                  <p className="mt-1 text-white/70 text-sm leading-snug">
                    Our profit share only unlocks once your ROI crosses 50%.
                    Your success comes first — always.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
