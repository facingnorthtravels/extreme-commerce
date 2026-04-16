"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Shield, Clock, MessageCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function EliteCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="apply"
      ref={ref}
      className="relative bg-brand-navy text-white py-24 sm:py-40 overflow-hidden texture-grain"
    >
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,205,29,0.18),transparent_60%)]" />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[22rem] sm:text-[36rem] leading-none text-white/[0.04] tracking-tighter">
          APPLY
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
          APPLICATIONS OPEN NOW
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-balance"
        >
          Ready to stop
          <br />
          <span className="text-brand-yellow">wondering</span> and start?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Book a 30-minute call. We&rsquo;ll review your situation, walk through the model honestly, and tell you directly whether Elite is the right fit — even if the answer is no.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="mt-3 text-sm text-white/40 italic"
        >
          No pitch deck. No pressure. No commitment required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#" size="lg" variant="primary" arrow>
            Book Your Discovery Call
          </Button>
          <Button href="/#faq" size="lg" variant="ghost">
            Still have questions?
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: Clock,
              title: "30-minute call",
              sub: "Structured. Efficient. Respectful of your time.",
            },
            {
              icon: Shield,
              title: "Zero commitment",
              sub: "The call is free. Qualification is mutual.",
            },
            {
              icon: MessageCircle,
              title: "< 48h response",
              sub: "Our team confirms your slot within two business days.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-yellow/20 text-brand-yellow">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-white/45 text-xs mt-1 leading-snug">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
