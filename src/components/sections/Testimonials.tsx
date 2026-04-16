"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    quote:
      "We deployed capital, they deployed a team. Six months in, we're three products deep and profitable on two of them.",
    name: "Ahmed R.",
    role: "Investor · Dubai",
    accent: "navy",
  },
  {
    quote:
      "The weekly reporting alone is worth it. I finally understand what's actually happening inside my Amazon business.",
    name: "Maria K.",
    role: "Founder · UK",
    accent: "yellow",
  },
  {
    quote:
      "Zero fluff. Practical, outcome-driven, and they don't waste time. We went from idea to live listing in under 12 weeks.",
    name: "James O.",
    role: "Business Owner · USA",
    accent: "azure",
  },
  {
    quote:
      "They've already done what I was trying to learn. Skipping the 2-year learning curve alone paid for itself.",
    name: "Saba F.",
    role: "Entrepreneur · Canada",
    accent: "navy",
  },
];

const accentMap = {
  navy: "bg-brand-navy text-white",
  yellow: "bg-brand-yellow text-brand-navy",
  azure: "bg-brand-azure text-white",
};

export function Testimonials() {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT OPERATORS SAY"
          title={
            <>
              Built for people with
              <br />
              capital, intent, and ambition.
            </>
          }
          subtitle="We filter hard for the right partners. The ones who join don't leave quietly."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className={`group relative rounded-3xl p-8 sm:p-10 ${accentMap[t.accent as keyof typeof accentMap]} overflow-hidden`}
            >
              {/* Giant quote mark */}
              <span
                aria-hidden
                className="absolute -top-4 right-6 font-display text-[12rem] leading-none opacity-[0.08] pointer-events-none select-none"
              >
                &ldquo;
              </span>

              <div className="relative flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 fill-current ${
                      t.accent === "yellow"
                        ? "text-brand-navy"
                        : "text-brand-yellow"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="relative font-display text-2xl sm:text-3xl tracking-tight leading-tight text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="relative mt-8 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm ${
                    t.accent === "yellow"
                      ? "bg-brand-navy text-brand-yellow"
                      : "bg-white/15 text-white border border-white/20"
                  }`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div
                    className={`text-xs ${
                      t.accent === "yellow"
                        ? "text-brand-navy/60"
                        : "text-white/60"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
