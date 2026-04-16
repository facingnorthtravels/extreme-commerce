"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-brand-navy text-white py-14 sm:py-20 overflow-hidden texture-grain"
    >
      {/* Backgrounds */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.15)_0%,_transparent_60%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[24rem] lg:text-[32rem] leading-none text-white/[0.04] tracking-tighter">
          eX
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      {/* Premium gradient blending into footer — covers bottom 55% of section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "55%",
          background:
            "linear-gradient(172deg, transparent 0%, rgba(1,15,41,0.45) 40%, rgba(1,15,41,0.85) 70%, #010f29 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            APPLICATIONS OPEN
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-balance"
          >
            Ready to build something{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-yellow">profitable?</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
                className="absolute left-0 -bottom-1 h-1.5 w-full bg-brand-yellow/25 origin-left rounded-full -z-10"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Book a call with our team. We&rsquo;ll map your capital, your
            timeline, and what a launch with us actually looks like — in under
            30 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button href="#" size="lg" variant="primary" arrow>
              Book a Call
            </Button>
            <Button href="#" size="lg" variant="ghost">
              Download the playbook
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { k: "30-min", v: "Discovery call" },
              { k: "No fee", v: "For qualified applicants" },
              { k: "< 48h", v: "Team response" },
            ].map((item) => (
              <div key={item.k} className="text-center">
                <div className="font-display text-2xl sm:text-3xl text-brand-yellow tracking-tight leading-none">
                  {item.k}
                </div>
                <div className="mt-1 text-xs text-white/50">{item.v}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
