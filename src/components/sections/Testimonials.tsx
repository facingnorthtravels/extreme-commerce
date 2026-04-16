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

const S = {
  navy: {
    card: "bg-brand-navy text-white",
    star: "text-brand-yellow",
    quote: "text-white",
    sub: "text-white/55",
    divider: "bg-white/10",
    avatar: "bg-white/10 border border-white/15 text-white",
    badge: "bg-white/10 text-white/80 border border-white/15",
    statNum: "text-white",
    statLabel: "text-white/50",
    statDivider: "bg-white/15",
    checkIcon: "text-brand-yellow",
    deliverItem: "text-white/85",
    catText: "text-white/45",
    eyebrow: "text-brand-yellow",
  },
  yellow: {
    card: "bg-brand-yellow text-brand-navy",
    star: "text-brand-navy",
    quote: "text-brand-navy",
    sub: "text-brand-navy/55",
    divider: "bg-brand-navy/10",
    avatar: "bg-brand-navy text-brand-yellow border-0",
    badge: "bg-brand-navy/10 text-brand-navy/80 border border-brand-navy/15",
    statNum: "text-brand-navy",
    statLabel: "text-brand-navy/50",
    statDivider: "bg-brand-navy/15",
    checkIcon: "text-brand-navy",
    deliverItem: "text-brand-navy/85",
    catText: "text-brand-navy/45",
    eyebrow: "text-brand-navy",
  },
  azure: {
    card: "bg-brand-azure text-white",
    star: "text-brand-yellow",
    quote: "text-white",
    sub: "text-white/55",
    divider: "bg-white/10",
    avatar: "bg-white/10 border border-white/15 text-white",
    badge: "bg-white/10 text-white/80 border border-white/15",
    statNum: "text-white",
    statLabel: "text-white/50",
    statDivider: "bg-white/15",
    checkIcon: "text-brand-yellow",
    deliverItem: "text-white/85",
    catText: "text-white/45",
    eyebrow: "text-brand-yellow",
  },
};

export function Testimonials() {
  return (
    <section className="relative bg-white py-10 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
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
            className="mt-2 text-[10px] text-brand-navy/30 font-display tracking-[0.2em] uppercase"
          >
            Hover cards to see account details
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => {
            const s = S[t.accent];
            const initials = t.name.split(" ").map((n) => n[0]).join("");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="group [perspective:1200px]"
              >
                <div className="relative h-[260px] transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* ── FRONT ── */}
                  <div className={`absolute inset-0 rounded-3xl [backface-visibility:hidden] overflow-hidden ${s.card}`}>
                    {/* Decorative giant quote */}
                    <span
                      aria-hidden
                      className="absolute -top-6 right-5 font-display text-[9rem] leading-none opacity-[0.07] pointer-events-none select-none"
                    >
                      &ldquo;
                    </span>

                    <div className="relative h-full flex flex-col justify-between p-7">
                      {/* Top: stars + quote */}
                      <div>
                        <div className="flex gap-1.5 mb-6">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`h-6 w-6 fill-current ${s.star}`} />
                          ))}
                        </div>
                        <blockquote className={`font-display text-lg sm:text-xl tracking-tight leading-snug text-pretty ${s.quote}`}>
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Bottom: divider + person */}
                      <div>
                        <div className={`h-px w-full mb-4 ${s.divider}`} />
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-full font-bold text-sm ${s.avatar}`}>
                            {initials}
                          </div>
                          <div>
                            <div className="font-semibold text-[15px] leading-tight">{t.name}</div>
                            <div className={`text-xs mt-0.5 ${s.sub}`}>{t.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── BACK ── */}
                  <div className={`absolute inset-0 rounded-3xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden ${s.card}`}>
                    <div className="relative h-full flex flex-col justify-between p-7">

                      {/* Row 1: name + marketplace badge */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-base leading-tight">{t.name}</div>
                          <div className={`text-xs mt-0.5 ${s.sub}`}>{t.role}</div>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.badge}`}>
                          {t.account.marketplace}
                        </span>
                      </div>

                      {/* Row 2: stats */}
                      <div className="flex items-stretch gap-6">
                        <div>
                          <div className={`font-display text-4xl font-black leading-none tracking-tight ${s.statNum}`}>
                            {t.account.revenue}
                          </div>
                          <div className={`text-xs mt-1 ${s.statLabel}`}>Monthly revenue</div>
                        </div>
                        <div className={`w-px self-stretch ${s.statDivider}`} />
                        <div>
                          <div className={`font-display text-4xl font-black leading-none tracking-tight ${s.statNum}`}>
                            {t.account.roi}
                          </div>
                          <div className={`text-xs mt-1 ${s.statLabel}`}>ROI achieved</div>
                        </div>
                      </div>

                      {/* Row 3: deliverables */}
                      <div>
                        <div className={`font-display text-[10px] tracking-[0.2em] uppercase mb-2 ${s.statLabel}`}>
                          What We Delivered
                        </div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {t.account.deliverables.map((d, j) => (
                            <li key={j} className={`flex items-center gap-2 text-sm leading-tight ${s.deliverItem}`}>
                              <CheckCircle2 className={`h-3.5 w-3.5 flex-none shrink-0 ${s.checkIcon}`} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Row 4: category footer */}
                      <div className={`flex items-center gap-1.5 text-xs ${s.catText}`}>
                        <Package className="h-3 w-3" />
                        <span>{t.account.category}</span>
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
