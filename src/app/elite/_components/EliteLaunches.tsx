"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { TrendingUp } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

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
