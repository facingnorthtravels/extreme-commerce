"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Factory, Rocket, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
const EASE=[0.16,1,0.3,1] as const;
const steps=[{num:"01",title:"Research & Validate",description:"We mine data from 1,000+ past launches to find products with proven demand, defensible margins, and a clear path to profitability.",icon:Search,timeframe:"Weeks 1â€“3"},{num:"02",title:"Source & Ship",description:"Vetted suppliers, sample cycles, QC inspections, and freight â€” managed by a dedicated sourcing team on your behalf.",icon:Factory,timeframe:"Weeks 4â€“10"},{num:"03",title:"Launch with Precision",description:"Creative, copy, listings, PPC, and first-week reviews orchestrated to win placement and momentum from day one.",icon:Rocket,timeframe:"Weeks 11â€“14"},{num:"04",title:"Scale & Compound",description:"Weekly reports, monthly strategy, reinvestment â€” we push winners aggressively and retire losers without emotion.",icon:TrendingUp,timeframe:"Month 4+"}];
export function Process(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const lineHeight=useTransform(scrollYProgress,[0.15,0.85],["0%","100%"]);
  return(
    <section id="process" className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.15)_0%,_transparent_50%)]"/>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="HOW IT WORKS" variant="dark" title={<>From idea to income,<br/>in <span className="text-brand-yellow">four phases.</span></>} subtitle="A proven sequence we've run hundreds of times. You don't wonder what's next â€” you see exactly where you are."/>
        <div ref={ref} className="relative mt-20 max-w-5xl mx-auto">
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] hidden sm:block"><div className="absolute inset-0 bg-white/10 rounded-full"/><motion.div style={{height:lineHeight}} className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-yellow via-brand-yellow to-brand-azure rounded-full"/></div>
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step,i)=>{const Icon=step.icon;const isEven=i%2===0;return(<motion.div key={step.num} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-100px"}} transition={{duration:0.8,ease:EASE}} className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-center ${isEven?"":"sm:[&>*:first-child]:order-2"}`}><div className={`flex flex-col ${isEven?"sm:items-end sm:text-right":"sm:items-start"}`}><span className="font-display text-7xl sm:text-8xl lg:text-9xl text-brand-yellow leading-none tracking-tight">{step.num}</span><span className="mt-3 inline-block font-display text-xs tracking-[0.25em] text-brand-azure">{step.timeframe}</span></div><div className="absolute left-8 sm:left-1/2 top-8 -translate-x-1/2 z-10 hidden sm:block"><div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy border-2 border-brand-yellow shadow-[0_0_0_8px_rgba(2,39,102,1),0_0_40px_rgba(244,205,29,0.3)]"><Icon className="h-6 w-6 text-brand-yellow" strokeWidth={2}/></div></div><div><div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 hover:border-brand-yellow/40 hover:bg-white/[0.05] transition-all duration-500"><div className="sm:hidden mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow"><Icon className="h-5 w-5"/></div><h3 className="font-black text-2xl sm:text-3xl tracking-tight text-white">{step.title}</h3><p className="mt-3 text-white/70 leading-relaxed">{step.description}</p></div></div></motion.div>);})}
          </div>
        </div>
      </div>
    </section>
  );
}
