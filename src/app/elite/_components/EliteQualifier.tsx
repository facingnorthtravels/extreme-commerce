"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

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
