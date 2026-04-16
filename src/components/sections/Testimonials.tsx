"use client";

import { motion } from "motion/react";
import { Star, CheckCircle2, Package } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    quote:
      "We deployed capital, they deployed a team. Six months in, we're three products deep and profitable on two of them.",
    name: "Ahmed R.",
    role: "Investor · Dubai",
    accent: "navy" as const,
    account: {
      category: "Home & Kitchen",
      marketplace: "USA · Amazon",
      revenue: "$184K/mo",
      roi: "194%",
      deliverables: [
        "3 product launches",
        "Full PPC management",
        "A+ content & listings",
        "Weekly strategy reporting",
      ],
    },
  },
  {
    quote:
      "The weekly reporting alone is worth it. I finally understand what's actually happening inside my Amazon business.",
    name: "Maria K.",
    role: "Founder · UK",
    accent: "yellow" as const,
    account: {
      category: "Beauty & Skincare",
      marketplace: "UK · Amazon",
      revenue: "$96K/mo",
      roi: "167%",
      deliverables: [
        "PPC & DSP campaigns",
        "Storefront redesign",
        "Bi-weekly strategy calls",
        "Full account operations",
      ],
    },
  },
  {
    quote:
      "Zero fluff. Practical, outcome-driven, and they don't waste time. We went from idea to live listing in under 12 weeks.",
    name: "James O.",
    role: "Business Owner · USA",
    accent: "azure" as const,
    account: {
      category: "Sports & Outdoors",
      marketplace: "USA · Amazon",
      revenue: "$72K/mo",
      roi: "148%",
      deliverables: [
        "Product research & sourcing",
        "Brand identity & packaging",
        "Launch PPC setup",
        "Listing copywriting",
      ],
    },
  },
  {
    quote:
      "They've already done what I was trying to learn. Skipping the 2-year learning curve alone paid for itself.",
    name: "Saba F.",
    role: "Entrepreneur · Canada",
    accent: "navy" as const,
    account: {
      category: "Pet Supplies",
      marketplace: "CA · Amazon",
      revenue: "$58K/mo",
      roi: "132%",
      deliverables: [
        "1 product launch",
        "Virtual assistant placement",
        "Monthly strategy calls",
        "PPC management",
      ],
    },
  },
];

const accentStyles = {
  navy: {
    card: "bg-brand-navy text-white",
    star: "text-brand-yellow",
    avatar: "bg-white/15 text-white border border-white/20",
    sub: "text-white/60",
    tag: "bg-white/10 text-white/80",
    check: "text-brand-yellow",
    divider: "bg-white/20",
  },
  yellow: {
    card: "bg-brand-yellow text-brand-navy",
    star: "text-brand-navy",
    avatar: "bg-brand-navy text-brand-yellow",
    sub: "text-brand-navy/60",
    tag: "bg-brand-navy/10 text-brand-navy/80",
    check: "text-brand-navy",
    divider: "bg-brand-navy/20",
  },
  azure: {
    card: "bg-brand-azure text-white",
    star: "text-brand-yellow",
    avatar: "bg-white/15 text-white border border-white/20",
    sub: "text-white/60",
    tag: "bg-white/10 text-white/80",
    check: "text-brand-yellow",
    divider: "bg-white/20",
  },
};

export function Testimonials() {
  return (
    <section className="relative bg-white py-10 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs tracking-[0.2em] mb-4 bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT OPERATORS SAY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Built for people with capital,
            <br />
            intent, and ambition.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="mt-3 text-base text-brand-navy/70 leading-relaxed"
          >
            We filter hard for the right partners. The ones who join don&rsquo;t leave quietly.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 text-[11px] text-brand-navy/35 font-display tracking-[0.18em]"
          >
            HOVER CARDS TO SEE ACCOUNT DETAILS
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => {
            const s = accentStyles[t.accent];
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="group [perspective:1200px]"
              >
                {/* Flip container */}
                <div className="relative h-[230px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* ── FRONT ── */}
                  <div
                    className={`absolute inset-0 rounded-3xl p-5 [backface-visibility:hidden] overflow-hidden ${s.card}`}
                  >
                    {/* Giant quote watermark */}
                    <span
                      aria-hidden
                      className="absolute -top-2 right-4 font-display text-[8rem] leading-none opacity-[0.08] pointer-events-none select-none"
                    >
                      &ldquo;
                    </span>

                    <div className={`flex gap-0.5 mb-3`}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-3.5 w-3.5 fill-current ${s.star}`} />
                      ))}
                    </div>

                    <blockquote className="relative font-display text-sm sm:text-base tracking-tight leading-snug text-pretty">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="relative mt-4 flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 flex-none items-center justify-center rounded-full font-bold text-sm ${s.avatar}`}
                      >
                        {initials}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className={`text-xs ${s.sub}`}>{t.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* ── BACK ── */}
                  <div
                    className={`absolute inset-0 rounded-3xl p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden ${s.card}`}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        {/* Header row */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`font-display text-[10px] tracking-[0.22em] ${s.star}`}>
                            ACCOUNT OVERVIEW
                          </span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${s.tag}`}>
                            {t.account.marketplace}
                          </span>
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center gap-4 mb-3">
                          <div>
                            <div className="font-display text-2xl font-black leading-none">
                              {t.account.revenue}
                            </div>
                            <div className={`text-xs mt-0.5 ${s.sub}`}>Monthly revenue</div>
                          </div>
                          <div className={`h-8 w-px ${s.divider}`} />
                          <div>
                            <div className="font-display text-2xl font-black leading-none">
                              {t.account.roi}
                            </div>
                            <div className={`text-xs mt-0.5 ${s.sub}`}>ROI achieved</div>
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div className={`text-[10px] font-display tracking-[0.18em] mb-1.5 ${s.sub}`}>
                          WHAT WE DELIVERED
                        </div>
                        <ul className="space-y-1">
                          {t.account.deliverables.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm leading-tight">
                              <CheckCircle2 className={`h-3.5 w-3.5 flex-none ${s.check}`} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category footer */}
                      <div className={`flex items-center gap-1.5 text-xs ${s.sub}`}>
                        <Package className="h-3 w-3" />
                        {t.account.category}
                      </div>
                    </div>
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
