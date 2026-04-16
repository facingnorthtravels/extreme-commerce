"use client";
import { motion } from "motion/react";
import { Check, Rocket, Wallet, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
const EASE=[0.16,1,0.3,1] as const;
const inclusions=[{icon:Rocket,title:"3 product launches",detail:"Spaced 6 months apart. First launch within 6 months of joining."},{icon:Wallet,title:"$7,000 per launch",detail:"Testing capital allocated strategically. Winners get aggressive reinvestment."},{icon:Shield,title:"Full team deployed",detail:"Research, sourcing, creatives, PPC, and account ops â€” all staffed on your behalf."},{icon:Zap,title:"80 / 20 profit share",detail:"You keep 80%. We earn 20% only once your ROI clears defined milestones."}];
export function Elite(){
  return(
    <section id="elite" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute left-0 top-20 h-[2px] w-20 bg-brand-yellow"/><div className="absolute right-0 bottom-20 h-[2px] w-20 bg-brand-yellow"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="THE ELITE PROGRAM" align="left" title={<>Turn capital into a<br/><span className="text-brand-azure">scalable Amazon</span><br/>income stream.</>} subtitle="Designed for investors and business owners with capital to deploy. You bring the ambition â€” we run the operation end-to-end."/>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,ease:EASE,delay:0.1}} className="rounded-2xl bg-brand-navy p-6 text-white"><div className="font-display text-5xl text-brand-yellow leading-none">80%</div><div className="mt-2 text-sm text-white/70">Your share of profits</div></motion.div>
              <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,ease:EASE,delay:0.2}} className="rounded-2xl bg-brand-yellow p-6 text-brand-navy"><div className="font-display text-5xl leading-none">18mo</div><div className="mt-2 text-sm opacity-80">Full launch cycle</div></motion.div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="#contact" size="lg" variant="secondary" arrow>Apply for Elite</Button><Button href="#process" size="lg" variant="outline">Read the playbook</Button></div>
          </div>
          <div>
            <div className="space-y-4">
              {inclusions.map((item,i)=>{const Icon=item.icon;return(<motion.div key={item.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.6,ease:EASE,delay:i*0.08}} className="group relative rounded-2xl border border-brand-navy/10 bg-white p-6 sm:p-7 hover:border-brand-navy/30 hover:shadow-xl transition-all duration-500"><div className="flex items-start gap-5"><div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-500"><Icon className="h-5 w-5" strokeWidth={2}/></div><div><h3 className="font-bold text-lg sm:text-xl text-brand-navy tracking-tight">{item.title}</h3><p className="mt-1.5 text-brand-navy/70 leading-relaxed text-[15px]">{item.detail}</p></div></div></motion.div>);})}
            </div>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,ease:EASE,delay:0.5}} className="mt-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-700 p-6 sm:p-8 text-white">
              <div className="absolute -right-8 -top-8 font-display text-[10rem] leading-none text-white/[0.05] pointer-events-none select-none">eX</div>
              <div className="relative flex items-start gap-4"><div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy"><Check className="h-5 w-5" strokeWidth={3}/></div><div><div className="font-display text-sm tracking-[0.2em] text-brand-yellow">ALIGNED INCENTIVES</div><h4 className="mt-2 font-bold text-xl sm:text-2xl tracking-tight">We only earn when you profit.</h4><p className="mt-2 text-white/70 text-[15px] leading-relaxed">Our profit share only unlocks once your ROI crosses 50%. Your success comes first â€” always.</p></div></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
