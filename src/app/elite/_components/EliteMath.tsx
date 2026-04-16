"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { Info } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

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
