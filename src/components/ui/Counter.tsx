"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "motion/react";
type Props={from?:number;to:number;duration?:number;formatFn?:(n:number)=>string;className?:string;prefix?:string;suffix?:string;};
export function Counter({from=0,to,formatFn,className,prefix,suffix}:Props){
  const ref=useRef<HTMLSpanElement>(null);
  const inView=useInView(ref,{once:true,margin:"-40px"});
  const mv=useMotionValue(from);
  const spring=useSpring(mv,{stiffness:80,damping:20,mass:1});
  const display=useTransform(spring,(latest)=>{const n=Math.round(latest);return formatFn?formatFn(n):n.toLocaleString("en-US");});
  useEffect(()=>{if(inView)mv.set(to);},[inView,mv,to]);
  return <span ref={ref} className={className}>{prefix}<motion.span>{display}</motion.span>{suffix}</span>;
}
