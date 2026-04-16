"use client";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Link from "next/link";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
const EASE=[0.16,1,0.3,1] as const;
export function Founder(){
  return(
    <section id="founder" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.9,ease:EASE}} className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-brand-yellow"/>
            <div className="relative h-full w-full rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-navy-700 to-brand-navy-800 overflow-hidden p-8 flex flex-col justify-between">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span className="font-display text-[18rem] leading-none text-brand-yellow/[0.06] tracking-tighter">SA</span></div>
              <div className="relative flex items-center justify-between"><span className="font-display text-xs tracking-[0.25em] text-brand-yellow">FOUNDER Â· CEO</span><span className="flex h-3 w-3"><span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-brand-yellow opacity-60"/><span className="relative inline-flex h-3 w-3 rounded-full bg-brand-yellow"/></span></div>
              <div className="relative"><div className="font-display text-7xl sm:text-8xl text-white leading-none tracking-tight">Sunny</div><div className="font-display text-7xl sm:text-8xl text-brand-yellow leading-none tracking-tight">Ali</div><div className="mt-6 flex items-center gap-3"><Link href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy transition"><LinkedInIcon className="h-4 w-4"/></Link><Link href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy transition"><InstagramIcon className="h-4 w-4"/></Link><Link href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy transition"><YouTubeIcon className="h-4 w-4"/></Link></div></div>
            </div>
            <motion.div animate={{y:[0,-10,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}} className="absolute -right-4 sm:-right-8 bottom-20 rounded-2xl bg-brand-yellow p-5 shadow-xl shadow-brand-yellow/30"><div className="font-display text-3xl text-brand-navy leading-none"><Counter to={1} suffix="M+"/></div><div className="text-xs text-brand-navy/70 mt-1 font-semibold">Community</div></motion.div>
          </motion.div>
          <div>
            <motion.span initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,ease:EASE}} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"><span className="h-1.5 w-1.5 rounded-full bg-brand-yellow"/>THE FOUNDER</motion.span>
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.1}} className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">Built from the ground up.<br/><span className="text-brand-azure">Run at a global scale.</span></motion.h2>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.2}} className="mt-6 space-y-5 text-brand-navy/70 leading-relaxed text-lg"><p>Sunny Ali founded Extreme Commerce to answer a practical question: how do we move capital efficiently into real, profitable Amazon businesses â€” without gambling.</p><p>Nearly a decade later, that discipline has compounded into the largest e-commerce operator community of its kind, measurable economic impact in the hundreds of millions, and a playbook refined across a thousand launches.</p></motion.div>
            <motion.figure initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.3}} className="mt-10 relative rounded-2xl border-l-4 border-brand-yellow bg-brand-navy/[0.03] p-6 sm:p-8"><Quote className="absolute -top-3 left-6 h-6 w-6 rotate-180 text-brand-yellow fill-brand-yellow"/><blockquote className="font-display text-xl sm:text-2xl text-brand-navy tracking-tight leading-snug">&ldquo;We don&rsquo;t teach people how to start from zero. We deploy capital, build real brands, and share the upside. That&rsquo;s the entire model.&rdquo;</blockquote><figcaption className="mt-4 text-sm font-semibold text-brand-navy/80">â€” Sunny Ali, Founder &amp; CEO</figcaption></motion.figure>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.4}} className="mt-10 flex flex-wrap gap-3"><Button href="#contact" variant="secondary" arrow>Book a 1:1 with Sunny</Button><Button href="#services" variant="outline">Explore services</Button></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
