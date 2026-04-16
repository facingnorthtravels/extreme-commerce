"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
const EASE=[0.16,1,0.3,1] as const;
export function CTA(){
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const bgY=useTransform(scrollYProgress,[0,1],[0,-100]);
  return(
    <section id="contact" ref={ref} className="relative bg-brand-navy text-white py-24 sm:py-40 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.15)_0%,_transparent_60%)]"/>
      <motion.div aria-hidden style={{y:bgY}} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"><span className="font-display text-[20rem] sm:text-[32rem] lg:text-[44rem] leading-none text-white/[0.04] tracking-tighter">eX</span></motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,ease:EASE}} className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow mb-6"><span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse"/>APPLICATIONS OPEN</motion.span>
          <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE,delay:0.1}} className="font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-balance">Ready to build<br/>something{" "}<span className="relative inline-block"><span className="relative z-10 text-brand-yellow">profitable?</span><motion.span initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{duration:0.9,ease:EASE,delay:0.4}} className="absolute left-0 -bottom-1 h-2 w-full bg-brand-yellow/25 origin-left rounded-full -z-10"/></span></motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE,delay:0.25}} className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">Book a call with our team. We&rsquo;ll map your capital, your timeline, and what a launch with us actually looks like â€” in under 30 minutes.</motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE,delay:0.4}} className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"><Button href="#" size="lg" variant="primary" arrow>Book a Call</Button><Button href="#" size="lg" variant="ghost">Download the playbook</Button></motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1,delay:0.6}} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">{[{k:"30-min",v:"Discovery call"},{k:"No fee",v:"For qualified applicants"},{k:"< 48h",v:"Team response"}].map(item=>(<div key={item.k} className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 justify-center"><div className="font-display text-3xl sm:text-4xl text-brand-yellow tracking-tight leading-none">{item.k}</div><div className="text-sm text-white/60">{item.v}</div></div>))}</motion.div>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1,delay:0.8}} className="mt-20 flex justify-center"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-yellow/30 text-brand-yellow"><ArrowUpRight className="h-6 w-6"/></div></motion.div>
      </div>
    </section>
  );
}
