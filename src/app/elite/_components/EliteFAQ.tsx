"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "How much capital do I actually need beyond the $7K per launch?",
    a: "The $7K per launch covers our testing capital — the budget we use to source, create, and launch your product. You'll also need capital for cost of goods (typically $5–12K depending on category and MOQ) and initial inventory replenishment once a product starts selling. We walk you through the full capital plan in the onboarding call so there are no surprises.",
  },
  {
    q: "Who owns the Amazon account and the brand?",
    a: "You do, entirely. The Amazon Seller Central account is in your name, the brand is registered to you, and all the intellectual property is yours. We operate inside your account as an authorised team. At any point, you have full access and ownership.",
  },
  {
    q: "What happens if a launch fails?",
    a: "We build a portfolio, not a single bet. Across three launches, the data shows diversification absorbs individual product failures. We retire underperformers fast — within 60–90 days if the signals aren't there — and redirect energy and budget toward the winners. We document every lesson and apply it to subsequent launches.",
  },
  {
    q: "When do I start seeing returns?",
    a: "Realistically, your first product reaches profitability around week 9–14 post-launch, meaning month 8–10 from your start date once you factor in sourcing and production timelines. We set explicit expectations in your onboarding. Anyone telling you they'll have you profitable in 30 days is not being honest.",
  },
  {
    q: "How is the 80/20 split tracked and distributed?",
    a: "Every client gets a monthly financial report showing gross revenue, cost of goods, Amazon fees, PPC spend, and net profit. Your 80% is calculated from net profit and transferred to you monthly once the account is in a profitable state. The 10% milestone unlocks at 50% ROI; the full 20% at 100% ROI — documented in your agreement.",
  },
  {
    q: "Can I be involved in product decisions?",
    a: "Absolutely. We run the research and present you with a validated product brief at every stage. You have approval rights on the product selection, brand direction, and major creative decisions. What you won't be doing is the day-to-day operational work — that's entirely on us.",
  },
  {
    q: "What happens after the 18 months?",
    a: "You own a portfolio of Amazon products generating ongoing revenue. At that point you have three paths: continue working with us under an ongoing management model, take over operations with your own team, or explore a sale (Amazon FBA businesses routinely sell for 3–5x annual net profit multiples). We help you evaluate all three.",
  },
];

export function EliteFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-24 sm:py-32 border-t border-brand-navy/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            ELITE PROGRAM FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl leading-[1.02] text-balance"
          >
            The questions investors
            <br />
            <span className="text-brand-azure">actually ask.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-brand-navy/8 border-y border-brand-navy/8">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 sm:py-7 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    <span className="font-display text-sm tracking-[0.2em] text-brand-yellow pt-1 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-brand-navy tracking-tight group-hover:text-brand-azure transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen
                      ? "bg-brand-navy border-brand-navy text-brand-yellow rotate-[135deg]"
                      : "bg-white border-brand-navy/15 text-brand-navy group-hover:border-brand-navy/30"
                  }`}>
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-9 sm:pl-11 pr-14 text-brand-navy/65 text-[15px] sm:text-base leading-relaxed text-pretty">
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
