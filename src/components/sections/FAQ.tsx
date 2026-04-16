"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "Who is the Elite Program for?",
    a: "Entrepreneurs, investors, and business owners with capital they want to deploy into a real Amazon business. It's not for beginners looking to learn — it's for operators ready to launch.",
  },
  {
    q: "How much capital do I need to commit?",
    a: "We allocate $7,000 per launch, with three launches over 18 months. That's in addition to your share of cost of goods and reinvestment into winners. We'll walk you through the full capital plan in the onboarding call.",
  },
  {
    q: "How does the 80/20 profit share work?",
    a: "You keep 80% of the profit; we retain 20%. Our share is structured to unlock at ROI milestones — we earn 10% once ROI crosses 50%, and 20% once ROI crosses 100%. We only profit when you profit first.",
  },
  {
    q: "What if a product doesn't work?",
    a: "We build testing into the model. Not every launch succeeds. We retire losers quickly, document the lesson, and push winners aggressively. Three launches gives us a portfolio, not a single bet.",
  },
  {
    q: "Can I hire just a virtual assistant instead?",
    a: "Yes. Our VA service is separate and flexible — full-time or part-time, trained on Amazon operations, and placed inside your existing setup. It's the fastest way to add Amazon expertise to your team.",
  },
  {
    q: "Do you operate outside of Amazon?",
    a: "Yes. We also launch and operate on Walmart, TikTok Shop, Etsy, and Amazon Wholesale. Your strategy will match your product and market, not a single platform.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-white py-24 sm:py-32 border-t border-brand-navy/5"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED"
          title={
            <>
              Answers, before you ask.
            </>
          }
          subtitle="The real questions capital-serious operators actually want addressed."
        />

        <div className="mt-14 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 sm:py-8 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    <span className="font-display text-sm tracking-[0.2em] text-brand-yellow pt-1.5 tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-brand-navy tracking-tight group-hover:text-brand-azure transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "bg-brand-navy border-brand-navy text-brand-yellow rotate-[135deg]"
                        : "bg-white border-brand-navy/15 text-brand-navy group-hover:border-brand-navy/30"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pl-10 sm:pl-14 pr-16 text-brand-navy/70 text-[15px] sm:text-base leading-relaxed text-pretty">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
