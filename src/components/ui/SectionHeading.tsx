"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
type Props={eyebrow?:string;title:ReactNode;subtitle?:ReactNode;align?:"left"|"center";variant?:"light"|"dark";className?:string;};
export function SectionHeading({eyebrow,title,subtitle,align="center",variant="light",className}:Props){
  const isDark=variant==="dark";
  return(
    <div className={cn("max-w-3xl",align==="center"&&"mx-auto text-center",className)}>
      {eyebrow&&(<motion.span initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.6,ease:[0.16,1,0.3,1]}} className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs tracking-[0.2em] mb-5",isDark?"bg-brand-azure/15 text-brand-azure border border-brand-azure/30":"bg-brand-navy/5 text-brand-navy border border-brand-navy/10")}><span className="h-1.5 w-1.5 rounded-full bg-brand-yellow"/>{eyebrow}</motion.span>)}
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.7,ease:[0.16,1,0.3,1],delay:0.05}} className={cn("font-black tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.02]",isDark?"text-white":"text-brand-navy")}>{title}</motion.h2>
      {subtitle&&<motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.7,ease:[0.16,1,0.3,1],delay:0.12}} className={cn("mt-5 text-lg sm:text-xl leading-relaxed text-pretty",isDark?"text-white/70":"text-brand-navy/70",align==="center"&&"mx-auto")}>{subtitle}</motion.p>}
    </div>
  );
}
