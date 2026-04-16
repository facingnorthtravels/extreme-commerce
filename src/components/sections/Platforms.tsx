"use client";
import { motion } from "motion/react";
const platforms=[{name:"Amazon PL",sub:"Private Label"},{name:"Amazon Wholesale",sub:"Distribution at scale"},{name:"Walmart",sub:"Marketplace"},{name:"TikTok Shop",sub:"Social commerce"},{name:"Etsy",sub:"Handmade & niche"}];
export function Platforms(){
  const items=[...platforms,...platforms];
  return(
    <section aria-label="Platforms we operate on" className="relative bg-brand-navy py-16 border-y border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6"><motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="flex items-center gap-4 mb-10"><span className="h-[1px] w-10 bg-brand-yellow"/><span className="font-display text-xs tracking-[0.25em] text-brand-yellow">PLATFORMS WE OPERATE ON</span></motion.div></div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-hidden>
        <div className="flex shrink-0 animate-marquee gap-16 pr-16">
          {items.map((p,i)=>(<div key={`${p.name}-${i}`} className="flex items-baseline gap-4 whitespace-nowrap"><span className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">{p.name}</span><span className="text-brand-azure text-sm font-medium hidden sm:inline">{p.sub}</span><span className="text-brand-yellow text-5xl sm:text-6xl lg:text-7xl font-display leading-none">âœ¦</span></div>))}
        </div>
      </div>
    </section>
  );
}
