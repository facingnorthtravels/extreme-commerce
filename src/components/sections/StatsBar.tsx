"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { Users, Rocket, Globe2, TrendingUp } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    label: "Community strong",
    value: 1,
    prefix: "",
    suffix: "M+",
    icon: Users,
    accent: "text-brand-yellow",
  },
  {
    label: "Economic impact",
    value: 200,
    prefix: "$",
    suffix: "M+",
    icon: TrendingUp,
    accent: "text-brand-yellow",
  },
  {
    label: "Product launches",
    value: 1000,
    prefix: "",
    suffix: "+",
    icon: Rocket,
    accent: "text-brand-yellow",
  },
  {
    label: "Global marketplaces",
    value: 5,
    prefix: "",
    suffix: "",
    icon: Globe2,
    accent: "text-brand-yellow",
  },
];

export function StatsBar() {
  return (
    <section className="relative bg-brand-yellow py-16 sm:py-20 overflow-hidden texture-grain">
      {/* Diagonal stripe pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #022766 0 1px, transparent 1px 22px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center justify-between mb-10 flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-brand-yellow font-display text-sm tracking-widest">
              01
            </span>
            <span className="font-display text-sm tracking-[0.25em] text-brand-navy">
              BY THE NUMBERS
            </span>
          </div>
          <h2 className="font-black text-brand-navy text-2xl sm:text-3xl lg:text-4xl tracking-tight max-w-xl text-right sm:text-left">
            Real traction. Real results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-navy/10 rounded-3xl overflow-hidden border border-brand-navy/15">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: i * 0.1,
                }}
                className="relative bg-brand-yellow p-6 sm:p-10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <div className="relative flex flex-col h-full">
                  <Icon className="h-7 w-7 text-brand-navy group-hover:text-brand-yellow transition-colors duration-500" />
                  <div className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-brand-navy group-hover:text-brand-yellow transition-colors duration-500 leading-none tracking-tight">
                    <Counter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="mt-3 text-brand-navy/80 group-hover:text-white/70 transition-colors duration-500 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
