(Get-Content package.json -Raw) -replace '"next dev"','"next dev -p 9001"' | Set-Content package.json -Encoding UTF8
"src\app","src\components\sections","src\components\ui","src\lib","public\brand" | ForEach-Object { New-Item -ItemType Directory -Force -Path $_ | Out-Null }

Set-Content "src\app\globals.css" -Encoding UTF8 -Value @'
@import "tailwindcss";
@theme {
  --color-brand-navy: #022766; --color-brand-navy-700: #01173d; --color-brand-navy-800: #010f29;
  --color-brand-azure: #3680c3; --color-brand-azure-light: #5b9ad6; --color-brand-azure-dark: #2668a0;
  --color-brand-yellow: #f4cd1d; --color-brand-yellow-light: #f7dc58; --color-brand-yellow-dark: #d4b00a;
  --color-brand-white: #ffffff;
  --font-sans: var(--font-montserrat); --font-display: var(--font-bebas);
}
:root { --background: #ffffff; --foreground: #022766; color-scheme: light; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
body { background: var(--background); color: var(--foreground); font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif; overflow-x: hidden; }
::selection { background: #f4cd1d; color: #022766; }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes blob { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-20px) scale(1.1); } 66% { transform: translate(-20px,30px) scale(0.9); } }
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.animate-marquee { animation: marquee 40s linear infinite; }
.animate-blob { animation: blob 22s ease-in-out infinite; }
.animate-float { animation: float 6s ease-in-out infinite; }
.texture-grain { position: relative; }
.texture-grain::after { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
.bg-grid { background-image: linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px); background-size: 60px 60px; }
.bg-grid-navy { background-image: linear-gradient(rgba(2,39,102,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(2,39,102,0.06) 1px,transparent 1px); background-size: 60px 60px; }
.font-display { font-family: var(--font-display),"Bebas Neue",Impact,sans-serif; letter-spacing: 0.01em; }
'@

Set-Content "src\app\layout.tsx" -Encoding UTF8 -Value @'
import type { Metadata, Viewport } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400","500","600","700","800","900"], display: "swap" });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://extremecommerce.com"),
  title: { default: "Extreme Commerce — Build Profitable Amazon Brands", template: "%s · Extreme Commerce" },
  description: "We build and scale Amazon businesses for entrepreneurs, investors, and business owners.",
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#022766", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebas.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-brand-navy">{children}</body>
    </html>
  );
}
'@

Set-Content "src\app\page.tsx" -Encoding UTF8 -Value @'
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Elite } from "@/components/sections/Elite";
import { Platforms } from "@/components/sections/Platforms";
import { Founder } from "@/components/sections/Founder";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
export default function Home() {
  return (<><Nav /><main className="flex-1"><Hero /><StatsBar /><Services /><Process /><Elite /><Platforms /><Founder /><Testimonials /><FAQ /><CTA /></main><Footer /></>);
}
'@

Set-Content "src\lib\utils.ts" -Encoding UTF8 -Value @'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
'@

Set-Content "src\components\ui\SocialIcons.tsx" -Encoding UTF8 -Value @'
import type { SVGProps } from "react";
export function LinkedInIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>; }
export function InstagramIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.85 5.85 0 0 0-2.13 1.39A5.85 5.85 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.32.79.74 1.46 1.39 2.13.66.66 1.34 1.07 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.85 5.85 0 0 0 2.13-1.39 5.85 5.85 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.39-2.13A5.85 5.85 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/></svg>; }
export function YouTubeIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>; }
export function FacebookIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M24 12C24 5.37 18.63 0 12 0S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85V15.47H7.08V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.96h-1.51c-1.49 0-1.96.93-1.96 1.87V12h3.33l-.53 3.47h-2.8v8.38C19.61 22.95 24 17.99 24 12Z"/></svg>; }
'@

Set-Content "src\components\ui\Logo.tsx" -Encoding UTF8 -Value @'
import Link from "next/link";
import { cn } from "@/lib/utils";
type LogoProps = { variant?: "light"|"dark"; className?: string; href?: string|null; };
export function Logo({ variant="light", className, href="/" }: LogoProps) {
  const markBg=variant==="light"?"bg-brand-navy":"bg-white", markFg=variant==="light"?"text-brand-yellow":"text-brand-navy", textColor=variant==="light"?"text-white":"text-brand-navy", subColor=variant==="light"?"text-brand-yellow":"text-brand-azure";
  const inner=(<span className={cn("inline-flex items-center gap-2.5 font-display tracking-wide",className)}><span className={cn("relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden",markBg)}><span className={cn("font-display text-[22px] leading-none translate-y-[1px]",markFg)}>eX</span></span><span className="flex flex-col leading-none"><span className={cn("font-display text-[20px] tracking-[0.08em] leading-none",textColor)}>EXTREME</span><span className={cn("font-display text-[13px] tracking-[0.32em] leading-none mt-[3px]",subColor)}>COMMERCE</span></span></span>);
  if(href===null)return inner;
  return <Link href={href} aria-label="Extreme Commerce home" className="inline-flex">{inner}</Link>;
}
'@

Set-Content "src\components\ui\Button.tsx" -Encoding UTF8 -Value @'
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode, MouseEventHandler } from "react";
type Variant="primary"|"secondary"|"ghost"|"outline"; type Size="sm"|"md"|"lg";
const base="group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-yellow disabled:opacity-50 disabled:pointer-events-none";
const variants:Record<Variant,string>={primary:"bg-brand-yellow text-brand-navy hover:bg-brand-yellow-light shadow-[0_10px_30px_-10px_rgba(244,205,29,0.6)] hover:-translate-y-0.5",secondary:"bg-brand-navy text-white hover:bg-brand-navy-700 shadow-[0_10px_30px_-10px_rgba(2,39,102,0.5)] hover:-translate-y-0.5",ghost:"bg-white/5 backdrop-blur-md border border-white/15 text-white hover:bg-white/10",outline:"border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"};
const sizes:Record<Size,string>={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-[15px]",lg:"px-8 py-4 text-base"};
type ButtonOwnProps={variant?:Variant;size?:Size;arrow?:boolean;children:ReactNode;className?:string;href?:string;onClick?:MouseEventHandler<HTMLElement>;type?:ComponentPropsWithoutRef<"button">["type"];"aria-label"?:string;target?:string;rel?:string;};
export function Button({variant="primary",size="md",arrow=false,children,className,href,onClick,type,target,rel,...rest}:ButtonOwnProps){
  const classes=cn(base,variants[variant],sizes[size],className);
  const content=(<><span className="relative z-10">{children}</span>{arrow&&<ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"/>}</>);
  if(href)return <Link href={href} className={classes} onClick={onClick} target={target} rel={rel} {...rest}>{content}</Link>;
  return <button className={classes} onClick={onClick} type={type??"button"} {...rest}>{content}</button>;
}
'@

Set-Content "src\components\ui\Counter.tsx" -Encoding UTF8 -Value @'
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
'@

Set-Content "src\components\ui\SectionHeading.tsx" -Encoding UTF8 -Value @'
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
'@

Set-Content "src\components\sections\Nav.tsx" -Encoding UTF8 -Value @'
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
const navItems=[{label:"Services",href:"#services"},{label:"Elite Program",href:"#elite"},{label:"How It Works",href:"#process"},{label:"About",href:"#founder"},{label:"FAQ",href:"#faq"}];
export function Nav(){
  const [scrolled,setScrolled]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const {scrollY}=useScroll();
  useMotionValueEvent(scrollY,"change",(l)=>setScrolled(l>20));
  useEffect(()=>{if(mobileOpen)document.body.style.overflow="hidden";else document.body.style.overflow="";return()=>{document.body.style.overflow="";};},[mobileOpen]);
  return(<>
    <motion.header initial={{y:-40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6,ease:[0.16,1,0.3,1],delay:0.2}} className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500",scrolled?"pt-2":"pt-4")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={cn("flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",scrolled?"bg-brand-navy/90 backdrop-blur-xl border border-white/10 shadow-2xl":"bg-brand-navy/40 backdrop-blur-md border border-white/5")}>
          <Logo variant="light"/>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item)=>(<Link key={item.href} href={item.href} className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full group">{item.label}<span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-yellow transition-all duration-300 group-hover:w-6"/></Link>))}
          </nav>
          <div className="flex items-center gap-3">
            <Button href="#contact" size="sm" variant="primary" arrow className="hidden sm:inline-flex">Book a Call</Button>
            <button aria-label="Toggle menu" onClick={()=>setMobileOpen(v=>!v)} className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">{mobileOpen?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
          </div>
        </div>
      </div>
    </motion.header>
    <AnimatePresence>{mobileOpen&&(<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-40 lg:hidden bg-brand-navy/95 backdrop-blur-xl pt-24 px-6"><motion.nav initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="flex flex-col gap-1 max-w-md mx-auto">{navItems.map((item,i)=>(<motion.div key={item.href} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.15+i*0.06}}><Link href={item.href} onClick={()=>setMobileOpen(false)} className="flex items-center justify-between py-4 px-4 text-2xl font-bold text-white border-b border-white/10 hover:text-brand-yellow transition"><span>{item.label}</span><span className="text-brand-yellow font-display text-sm tracking-widest">0{i+1}</span></Link></motion.div>))}<motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.5}} className="mt-8"><Button href="#contact" size="lg" variant="primary" arrow className="w-full" onClick={()=>setMobileOpen(false)}>Book a Call</Button></motion.div></motion.nav></motion.div>)}</AnimatePresence>
  </>);
}
'@

Set-Content "src\components\sections\Hero.tsx" -Encoding UTF8 -Value @'
"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, PlayCircle, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
const EASE=[0.16,1,0.3,1] as const;
export function Hero(){
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});
  const y=useTransform(scrollYProgress,[0,1],[0,180]);
  const opacity=useTransform(scrollYProgress,[0,0.8],[1,0]);
  return(
    <section ref={ref} className="relative isolate overflow-hidden bg-brand-navy text-white min-h-[100svh] flex items-center pt-32 pb-20 texture-grain">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.25)_0%,_transparent_60%)]"/>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(244,205,29,0.15)_0%,_transparent_50%)]"/>
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-60"/>
      <motion.div aria-hidden style={{y}} className="absolute -left-20 sm:-left-32 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"><span className="font-display text-[22rem] sm:text-[32rem] lg:text-[44rem] leading-none text-white/[0.035] tracking-tighter">eX</span></motion.div>
      <div aria-hidden className="absolute top-1/4 right-[10%] h-72 w-72 rounded-full bg-brand-azure/20 blur-3xl animate-blob -z-10"/>
      <div aria-hidden className="absolute bottom-[15%] right-[25%] h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl animate-blob -z-10" style={{animationDelay:"-8s"}}/>
      <motion.div style={{opacity}} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:EASE,delay:0.1}} className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/15 px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70"/><span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow"/></span>
              <span className="font-display text-xs tracking-[0.2em] text-white/90">AMAZON DONE-FOR-YOU — NOW ENROLLING</span>
            </motion.div>
            <h1 className="font-black tracking-tight text-balance leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[88px]">
              <motion.span initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,ease:EASE,delay:0.2}} className="block text-white">Build a</motion.span>
              <motion.span initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,ease:EASE,delay:0.35}} className="block"><span className="relative inline-block"><span className="relative z-10 text-brand-yellow">profitable</span><motion.span initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1,ease:EASE,delay:0.9}} className="absolute left-0 -bottom-1 h-[6px] w-full bg-brand-yellow/20 origin-left rounded-full -z-10"/></span>{" "}<span className="text-white">Amazon</span></motion.span>
              <motion.span initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,ease:EASE,delay:0.5}} className="block text-white">brand. With us.</motion.span>
            </h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:EASE,delay:0.7}} className="mt-7 text-lg sm:text-xl max-w-xl text-white/70 leading-relaxed">We launch, grow, and operate Amazon businesses for entrepreneurs and investors. Research, sourcing, creatives, PPC, and ops — handled by the team behind thousands of launches.</motion.p>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:EASE,delay:0.85}} className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="#elite" size="lg" variant="primary" arrow>Start with Elite</Button>
              <Link href="#process" className="group inline-flex items-center gap-3 text-white/90 hover:text-white px-3 py-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/15 group-hover:bg-white/10 transition"><PlayCircle className="h-5 w-5 text-brand-yellow"/></span><span className="font-semibold text-sm">See how it works</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.1}} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-yellow"/><span>Powered by data from 1,000+ launches</span></div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-brand-yellow"/><span>80/20 profit-share model</span></div>
            </motion.div>
          </div>
          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:1,ease:EASE,delay:0.5}} className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-[600px] w-full">
            <motion.div animate={{y:[0,-12,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className="absolute top-0 right-0 w-[280px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20">
              <div className="flex items-center justify-between text-brand-navy/70 text-xs font-display tracking-[0.2em]"><span>MONTHLY REVENUE</span><span className="flex items-center gap-1 text-emerald-700"><TrendingUp className="h-3 w-3"/>+127%</span></div>
              <div className="mt-4 font-black text-brand-navy text-5xl tracking-tight"><Counter to={284} prefix="$" suffix="K" duration={2.4}/></div>
              <div className="mt-4 flex gap-1 items-end h-10">{[40,55,48,70,62,82,95].map((h,i)=>(<motion.div key={i} initial={{height:0}} animate={{height:`${h}%`}} transition={{duration:0.6,delay:1.2+i*0.08,ease:EASE}} className="flex-1 rounded-sm bg-brand-navy/80"/>))}</div>
            </motion.div>
            <motion.div animate={{y:[0,10,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut",delay:0.5}} className="absolute top-[30%] left-0 w-[320px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-6 shadow-2xl">
              <div className="flex items-center justify-between text-white/60 text-xs font-display tracking-[0.2em]"><span>ACTIVE LAUNCH</span><span className="flex items-center gap-1.5 text-emerald-400"><span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"/><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"/></span>LIVE</span></div>
              <div className="mt-3 font-bold text-white text-lg">Premium Skincare<br/><span className="text-white/60 font-medium">USA Marketplace</span></div>
              <div className="mt-4 space-y-2.5">{[{label:"Research",pct:100},{label:"Sourcing",pct:100},{label:"Creatives",pct:100},{label:"PPC Launch",pct:72}].map((step,i)=>(<div key={step.label}><div className="flex justify-between text-xs mb-1"><span className="text-white/80">{step.label}</span><span className="text-brand-yellow font-semibold">{step.pct}%</span></div><div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden"><motion.div initial={{width:0}} animate={{width:`${step.pct}%`}} transition={{duration:1.2,delay:1+i*0.15,ease:EASE}} className="h-full bg-gradient-to-r from-brand-yellow to-brand-azure"/></div></div>))}</div>
            </motion.div>
            <motion.div animate={{y:[0,-8,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut",delay:1}} className="absolute bottom-0 right-[10%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30">
              <div className="text-white/70 text-xs font-display tracking-[0.2em]">ROI ACHIEVED</div>
              <div className="mt-2 font-black text-white text-4xl"><Counter to={218} suffix="%" duration={2.5}/></div>
              <div className="mt-1 text-white/60 text-xs">Avg. across Q1 launches</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
'@

Set-Content "src\components\sections\StatsBar.tsx" -Encoding UTF8 -Value @'
"use client";
import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { Users, Rocket, Globe2, TrendingUp } from "lucide-react";
const stats=[{label:"Community strong",value:1,prefix:"",suffix:"M+",icon:Users},{label:"Economic impact",value:200,prefix:"$",suffix:"M+",icon:TrendingUp},{label:"Product launches",value:1000,prefix:"",suffix:"+",icon:Rocket},{label:"Global marketplaces",value:5,prefix:"",suffix:"",icon:Globe2}];
export function StatsBar(){
  return(
    <section className="relative bg-brand-yellow py-16 sm:py-20 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"repeating-linear-gradient(-45deg, #022766 0 1px, transparent 1px 22px)"}}/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-brand-yellow font-display text-sm">01</span><span className="font-display text-sm tracking-[0.25em] text-brand-navy">BY THE NUMBERS</span></div>
          <h2 className="font-black text-brand-navy text-2xl sm:text-3xl lg:text-4xl tracking-tight">Real traction. Real results.</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-navy/10 rounded-3xl overflow-hidden border border-brand-navy/15">
          {stats.map((stat,i)=>{const Icon=stat.icon;return(<motion.div key={stat.label} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.1}} className="relative bg-brand-yellow p-6 sm:p-10 group overflow-hidden"><div className="absolute inset-0 bg-brand-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500"/><div className="relative flex flex-col h-full"><Icon className="h-7 w-7 text-brand-navy group-hover:text-brand-yellow transition-colors duration-500"/><div className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-brand-navy group-hover:text-brand-yellow transition-colors duration-500 leading-none"><Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix}/></div><div className="mt-3 text-brand-navy/80 group-hover:text-white/70 transition-colors duration-500 text-sm font-medium">{stat.label}</div></div></motion.div>);})}
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\Services.tsx" -Encoding UTF8 -Value @'
"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Rocket, Users, MessageSquare, Target, Megaphone, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
const EASE=[0.16,1,0.3,1] as const;
const services=[
  {tag:"FLAGSHIP",title:"Elite Program",description:"Done-for-you Amazon brand. Three launches, one dedicated team, profit split only on results.",href:"#elite",icon:Rocket,span:"lg:col-span-2 lg:row-span-2",variant:"featured",bullets:["$7K budget per launch","3 launches / 18 months","80/20 profit share"]},
  {tag:"HIRE TALENT",title:"Virtual Assistants",description:"Trained Amazon VAs — full-time or part-time — ready to run your account.",href:"#services",icon:Users,span:"lg:col-span-2",variant:"yellow"},
  {tag:"1:1",title:"Mentorship with Sunny",description:"Direct access. Monthly Zooms. WhatsApp voice notes for strategic questions.",href:"#services",icon:MessageSquare,span:"lg:col-span-1",variant:"azure"},
  {tag:"FULL STACK",title:"PPC & Advertising",description:"Sponsored ads, DSP, and full-funnel campaigns engineered for profitable ACoS.",href:"#services",icon:Target,span:"lg:col-span-1",variant:"outline"},
  {tag:"BRAND",title:"Creative & Listings",description:"Conversion-first A+ content, storefronts, and imagery built from market data.",href:"#services",icon:Megaphone,span:"lg:col-span-1",variant:"outline"},
  {tag:"OPS",title:"Launch Analytics",description:"Weekly reports. Monthly strategy calls. Decision memos. No blind spots.",href:"#services",icon:BarChart3,span:"lg:col-span-1",variant:"outline"},
];
const variantStyles:Record<string,string>={featured:"bg-gradient-to-br from-brand-navy to-brand-navy-700 text-white border-white/10",yellow:"bg-brand-yellow text-brand-navy border-brand-navy/10 hover:bg-brand-yellow-light",azure:"bg-brand-azure text-white border-brand-azure-dark hover:bg-brand-azure-light",outline:"bg-white text-brand-navy border-brand-navy/10 hover:border-brand-navy/25"};
const tagStyles:Record<string,string>={featured:"bg-brand-yellow text-brand-navy",yellow:"bg-brand-navy text-brand-yellow",azure:"bg-white/15 text-white border border-white/25",outline:"bg-brand-navy/5 text-brand-navy border border-brand-navy/10"};
export function Services(){
  return(
    <section id="services" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="WHAT WE DO" title={<>Six ways we build<br/>your Amazon business.</>} subtitle="From done-for-you launches to trained virtual assistants — pick your level of involvement."/>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(220px,auto)] gap-4 sm:gap-5">
          {services.map((service,i)=>{const Icon=service.icon;return(<motion.div key={service.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.7,ease:EASE,delay:i*0.08}} className={cn("group",service.span)}><Link href={service.href} className={cn("relative flex flex-col h-full rounded-3xl border p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden",variantStyles[service.variant])}>{service.variant==="featured"&&(<><div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl"/><div className="absolute right-10 bottom-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none">eX</div></>)}<div className="relative flex items-start justify-between"><span className={cn("inline-flex items-center rounded-full px-3 py-1 font-display text-[11px] tracking-[0.2em]",tagStyles[service.variant])}>{service.tag}</span><span className={cn("flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12",service.variant==="featured"||service.variant==="azure"?"bg-white/10 border border-white/20 text-white":service.variant==="yellow"?"bg-brand-navy/10 text-brand-navy":"bg-brand-navy/5 text-brand-navy")}><ArrowUpRight className="h-5 w-5"/></span></div><div className="relative mt-auto pt-10"><Icon className={cn("h-8 w-8 mb-5",service.variant==="featured"?"text-brand-yellow":service.variant==="azure"?"text-white":service.variant==="yellow"?"text-brand-navy":"text-brand-azure")} strokeWidth={1.75}/><h3 className={cn("font-black tracking-tight leading-[1.05]",service.variant==="featured"?"text-3xl sm:text-4xl lg:text-5xl":"text-2xl sm:text-[28px]")}>{service.title}</h3><p className={cn("mt-3 text-[15px] leading-relaxed text-pretty max-w-md",service.variant==="featured"||service.variant==="azure"?"text-white/70":"text-brand-navy/70")}>{service.description}</p>{service.bullets&&(<ul className="mt-6 space-y-2">{service.bullets.map(b=>(<li key={b} className="flex items-center gap-2 text-sm text-white/80"><svg className="h-4 w-4 flex-none text-brand-yellow" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{b}</li>))}</ul>)}</div></Link></motion.div>);})}
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\Process.tsx" -Encoding UTF8 -Value @'
"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Factory, Rocket, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
const EASE=[0.16,1,0.3,1] as const;
const steps=[{num:"01",title:"Research & Validate",description:"We mine data from 1,000+ past launches to find products with proven demand, defensible margins, and a clear path to profitability.",icon:Search,timeframe:"Weeks 1–3"},{num:"02",title:"Source & Ship",description:"Vetted suppliers, sample cycles, QC inspections, and freight — managed by a dedicated sourcing team on your behalf.",icon:Factory,timeframe:"Weeks 4–10"},{num:"03",title:"Launch with Precision",description:"Creative, copy, listings, PPC, and first-week reviews orchestrated to win placement and momentum from day one.",icon:Rocket,timeframe:"Weeks 11–14"},{num:"04",title:"Scale & Compound",description:"Weekly reports, monthly strategy, reinvestment — we push winners aggressively and retire losers without emotion.",icon:TrendingUp,timeframe:"Month 4+"}];
export function Process(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const lineHeight=useTransform(scrollYProgress,[0.15,0.85],["0%","100%"]);
  return(
    <section id="process" className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.15)_0%,_transparent_50%)]"/>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="HOW IT WORKS" variant="dark" title={<>From idea to income,<br/>in <span className="text-brand-yellow">four phases.</span></>} subtitle="A proven sequence we've run hundreds of times. You don't wonder what's next — you see exactly where you are."/>
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
'@

Set-Content "src\components\sections\Elite.tsx" -Encoding UTF8 -Value @'
"use client";
import { motion } from "motion/react";
import { Check, Rocket, Wallet, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
const EASE=[0.16,1,0.3,1] as const;
const inclusions=[{icon:Rocket,title:"3 product launches",detail:"Spaced 6 months apart. First launch within 6 months of joining."},{icon:Wallet,title:"$7,000 per launch",detail:"Testing capital allocated strategically. Winners get aggressive reinvestment."},{icon:Shield,title:"Full team deployed",detail:"Research, sourcing, creatives, PPC, and account ops — all staffed on your behalf."},{icon:Zap,title:"80 / 20 profit share",detail:"You keep 80%. We earn 20% only once your ROI clears defined milestones."}];
export function Elite(){
  return(
    <section id="elite" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute left-0 top-20 h-[2px] w-20 bg-brand-yellow"/><div className="absolute right-0 bottom-20 h-[2px] w-20 bg-brand-yellow"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="THE ELITE PROGRAM" align="left" title={<>Turn capital into a<br/><span className="text-brand-azure">scalable Amazon</span><br/>income stream.</>} subtitle="Designed for investors and business owners with capital to deploy. You bring the ambition — we run the operation end-to-end."/>
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
              <div className="relative flex items-start gap-4"><div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy"><Check className="h-5 w-5" strokeWidth={3}/></div><div><div className="font-display text-sm tracking-[0.2em] text-brand-yellow">ALIGNED INCENTIVES</div><h4 className="mt-2 font-bold text-xl sm:text-2xl tracking-tight">We only earn when you profit.</h4><p className="mt-2 text-white/70 text-[15px] leading-relaxed">Our profit share only unlocks once your ROI crosses 50%. Your success comes first — always.</p></div></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\Platforms.tsx" -Encoding UTF8 -Value @'
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
          {items.map((p,i)=>(<div key={`${p.name}-${i}`} className="flex items-baseline gap-4 whitespace-nowrap"><span className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">{p.name}</span><span className="text-brand-azure text-sm font-medium hidden sm:inline">{p.sub}</span><span className="text-brand-yellow text-5xl sm:text-6xl lg:text-7xl font-display leading-none">✦</span></div>))}
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\Founder.tsx" -Encoding UTF8 -Value @'
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
              <div className="relative flex items-center justify-between"><span className="font-display text-xs tracking-[0.25em] text-brand-yellow">FOUNDER · CEO</span><span className="flex h-3 w-3"><span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-brand-yellow opacity-60"/><span className="relative inline-flex h-3 w-3 rounded-full bg-brand-yellow"/></span></div>
              <div className="relative"><div className="font-display text-7xl sm:text-8xl text-white leading-none tracking-tight">Sunny</div><div className="font-display text-7xl sm:text-8xl text-brand-yellow leading-none tracking-tight">Ali</div><div className="mt-6 flex items-center gap-3"><Link href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy transition"><LinkedInIcon className="h-4 w-4"/></Link><Link href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy transition"><InstagramIcon className="h-4 w-4"/></Link><Link href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy transition"><YouTubeIcon className="h-4 w-4"/></Link></div></div>
            </div>
            <motion.div animate={{y:[0,-10,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}} className="absolute -right-4 sm:-right-8 bottom-20 rounded-2xl bg-brand-yellow p-5 shadow-xl shadow-brand-yellow/30"><div className="font-display text-3xl text-brand-navy leading-none"><Counter to={1} suffix="M+"/></div><div className="text-xs text-brand-navy/70 mt-1 font-semibold">Community</div></motion.div>
          </motion.div>
          <div>
            <motion.span initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,ease:EASE}} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"><span className="h-1.5 w-1.5 rounded-full bg-brand-yellow"/>THE FOUNDER</motion.span>
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.1}} className="mt-5 font-black tracking-tight text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">Built from the ground up.<br/><span className="text-brand-azure">Run at a global scale.</span></motion.h2>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.2}} className="mt-6 space-y-5 text-brand-navy/70 leading-relaxed text-lg"><p>Sunny Ali founded Extreme Commerce to answer a practical question: how do we move capital efficiently into real, profitable Amazon businesses — without gambling.</p><p>Nearly a decade later, that discipline has compounded into the largest e-commerce operator community of its kind, measurable economic impact in the hundreds of millions, and a playbook refined across a thousand launches.</p></motion.div>
            <motion.figure initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.3}} className="mt-10 relative rounded-2xl border-l-4 border-brand-yellow bg-brand-navy/[0.03] p-6 sm:p-8"><Quote className="absolute -top-3 left-6 h-6 w-6 rotate-180 text-brand-yellow fill-brand-yellow"/><blockquote className="font-display text-xl sm:text-2xl text-brand-navy tracking-tight leading-snug">&ldquo;We don&rsquo;t teach people how to start from zero. We deploy capital, build real brands, and share the upside. That&rsquo;s the entire model.&rdquo;</blockquote><figcaption className="mt-4 text-sm font-semibold text-brand-navy/80">— Sunny Ali, Founder &amp; CEO</figcaption></motion.figure>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:EASE,delay:0.4}} className="mt-10 flex flex-wrap gap-3"><Button href="#contact" variant="secondary" arrow>Book a 1:1 with Sunny</Button><Button href="#services" variant="outline">Explore services</Button></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\Testimonials.tsx" -Encoding UTF8 -Value @'
"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
const EASE=[0.16,1,0.3,1] as const;
const testimonials=[{quote:"We deployed capital, they deployed a team. Six months in, we're three products deep and profitable on two of them.",name:"Ahmed R.",role:"Investor · Dubai",accent:"navy"},{quote:"The weekly reporting alone is worth it. I finally understand what's actually happening inside my Amazon business.",name:"Maria K.",role:"Founder · UK",accent:"yellow"},{quote:"Zero fluff. Practical, outcome-driven, and they don't waste time. We went from idea to live listing in under 12 weeks.",name:"James O.",role:"Business Owner · USA",accent:"azure"},{quote:"They've already done what I was trying to learn. Skipping the 2-year learning curve alone paid for itself.",name:"Saba F.",role:"Entrepreneur · Canada",accent:"navy"}];
const accentMap:Record<string,string>={navy:"bg-brand-navy text-white",yellow:"bg-brand-yellow text-brand-navy",azure:"bg-brand-azure text-white"};
export function Testimonials(){
  return(
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="WHAT OPERATORS SAY" title={<>Built for people with<br/>capital, intent, and ambition.</>} subtitle="We filter hard for the right partners. The ones who join don't leave quietly."/>
        <div className="mt-16 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t,i)=>(<motion.figure key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.7,ease:EASE,delay:i*0.1}} className={`group relative rounded-3xl p-8 sm:p-10 ${accentMap[t.accent]} overflow-hidden`}><span aria-hidden className="absolute -top-4 right-6 font-display text-[12rem] leading-none opacity-[0.08] pointer-events-none select-none">&ldquo;</span><div className="relative flex gap-0.5 mb-5">{Array.from({length:5}).map((_,i)=>(<Star key={i} className={`h-4 w-4 fill-current ${t.accent==="yellow"?"text-brand-navy":"text-brand-yellow"}`}/>))}</div><blockquote className="relative font-display text-2xl sm:text-3xl tracking-tight leading-tight">&ldquo;{t.quote}&rdquo;</blockquote><figcaption className="relative mt-8 flex items-center gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm ${t.accent==="yellow"?"bg-brand-navy text-brand-yellow":"bg-white/15 text-white border border-white/20"}`}>{t.name.split(" ").map(n=>n[0]).join("")}</div><div><div className="font-semibold text-sm">{t.name}</div><div className={`text-xs ${t.accent==="yellow"?"text-brand-navy/60":"text-white/60"}`}>{t.role}</div></div></figcaption></motion.figure>))}
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\FAQ.tsx" -Encoding UTF8 -Value @'
"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
const EASE=[0.16,1,0.3,1] as const;
const faqs=[{q:"Who is the Elite Program for?",a:"Entrepreneurs, investors, and business owners with capital they want to deploy into a real Amazon business. It's not for beginners looking to learn — it's for operators ready to launch."},{q:"How much capital do I need to commit?",a:"We allocate $7,000 per launch, with three launches over 18 months. That's in addition to your share of cost of goods and reinvestment into winners."},{q:"How does the 80/20 profit share work?",a:"You keep 80% of the profit; we retain 20%. Our share is structured to unlock at ROI milestones — we earn 10% once ROI crosses 50%, and 20% once ROI crosses 100%."},{q:"What if a product doesn't work?",a:"We build testing into the model. Not every launch succeeds. We retire losers quickly, document the lesson, and push winners aggressively. Three launches gives us a portfolio, not a single bet."},{q:"Can I hire just a virtual assistant instead?",a:"Yes. Our VA service is separate and flexible — full-time or part-time, trained on Amazon operations, and placed inside your existing setup."},{q:"Do you operate outside of Amazon?",a:"Yes. We also launch and operate on Walmart, TikTok Shop, Etsy, and Amazon Wholesale. Your strategy will match your product and market, not a single platform."}];
export function FAQ(){
  const [open,setOpen]=useState<number|null>(0);
  return(
    <section id="faq" className="relative bg-white py-24 sm:py-32 border-t border-brand-navy/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="FREQUENTLY ASKED" title="Answers, before you ask." subtitle="The real questions capital-serious operators actually want addressed."/>
        <div className="mt-14 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faqs.map((faq,i)=>{const isOpen=open===i;return(<motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,margin:"-40px"}} transition={{duration:0.4,delay:i*0.05}}><button onClick={()=>setOpen(isOpen?null:i)} aria-expanded={isOpen} className="group flex w-full items-start justify-between gap-6 py-6 sm:py-8 text-left"><div className="flex items-start gap-4 sm:gap-6 flex-1"><span className="font-display text-sm tracking-[0.2em] text-brand-yellow pt-1.5">0{i+1}</span><h3 className="font-bold text-lg sm:text-xl text-brand-navy tracking-tight group-hover:text-brand-azure transition-colors">{faq.q}</h3></div><span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-all duration-500 ${isOpen?"bg-brand-navy border-brand-navy text-brand-yellow rotate-[135deg]":"bg-white border-brand-navy/15 text-brand-navy"}`}><Plus className="h-4 w-4" strokeWidth={2.5}/></span></button><AnimatePresence initial={false}>{isOpen&&(<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.45,ease:EASE}} className="overflow-hidden"><div className="pb-6 sm:pb-8 pl-10 sm:pl-14 pr-16 text-brand-navy/70 text-[15px] sm:text-base leading-relaxed">{faq.a}</div></motion.div>)}</AnimatePresence></motion.div>);})}
        </div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\CTA.tsx" -Encoding UTF8 -Value @'
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
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE,delay:0.25}} className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">Book a call with our team. We&rsquo;ll map your capital, your timeline, and what a launch with us actually looks like — in under 30 minutes.</motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,ease:EASE,delay:0.4}} className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"><Button href="#" size="lg" variant="primary" arrow>Book a Call</Button><Button href="#" size="lg" variant="ghost">Download the playbook</Button></motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1,delay:0.6}} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">{[{k:"30-min",v:"Discovery call"},{k:"No fee",v:"For qualified applicants"},{k:"< 48h",v:"Team response"}].map(item=>(<div key={item.k} className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 justify-center"><div className="font-display text-3xl sm:text-4xl text-brand-yellow tracking-tight leading-none">{item.k}</div><div className="text-sm text-white/60">{item.v}</div></div>))}</motion.div>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1,delay:0.8}} className="mt-20 flex justify-center"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-yellow/30 text-brand-yellow"><ArrowUpRight className="h-6 w-6"/></div></motion.div>
      </div>
    </section>
  );
}
'@

Set-Content "src\components\sections\Footer.tsx" -Encoding UTF8 -Value @'
import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LinkedInIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";
const columns=[{title:"Services",links:[{label:"Elite Program",href:"#elite"},{label:"Virtual Assistants",href:"#services"},{label:"Mentorship",href:"#services"},{label:"PPC & Advertising",href:"#services"}]},{title:"Company",links:[{label:"About",href:"#founder"},{label:"How It Works",href:"#process"},{label:"FAQ",href:"#faq"},{label:"Contact",href:"#contact"}]},{title:"Platforms",links:[{label:"Amazon PL",href:"#"},{label:"Amazon Wholesale",href:"#"},{label:"Walmart",href:"#"},{label:"TikTok Shop",href:"#"},{label:"Etsy",href:"#"}]}];
export function Footer(){
  return(
    <footer className="relative bg-brand-navy-800 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          <div>
            <Logo variant="light"/>
            <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-sm">We build and scale Amazon businesses for entrepreneurs, investors, and business owners. Practical, outcome-driven, no fluff.</p>
            <form className="mt-8 flex w-full max-w-sm items-center rounded-full bg-white/5 border border-white/10 p-1 focus-within:border-brand-yellow/50 transition"><div className="flex items-center gap-2 pl-4 text-white/50 flex-1"><Mail className="h-4 w-4 flex-none"/><input type="email" placeholder="Your email" aria-label="Email" className="bg-transparent flex-1 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"/></div><button type="submit" className="rounded-full bg-brand-yellow text-brand-navy px-4 py-2 text-sm font-semibold hover:bg-brand-yellow-light transition">Subscribe</button></form>
            <div className="mt-8 flex items-center gap-2">{[{icon:LinkedInIcon,href:"#",label:"LinkedIn"},{icon:InstagramIcon,href:"#",label:"Instagram"},{icon:YouTubeIcon,href:"#",label:"YouTube"},{icon:FacebookIcon,href:"#",label:"Facebook"}].map(({icon:Icon,href,label})=>(<Link key={label} href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"><Icon className="h-4 w-4"/></Link>))}</div>
          </div>
          {columns.map(col=>(<div key={col.title}><h4 className="font-display text-xs tracking-[0.2em] text-brand-yellow mb-5">{col.title}</h4><ul className="space-y-3">{col.links.map(link=>(<li key={link.label}><Link href={link.href} className="text-white/70 hover:text-white text-[15px] transition">{link.label}</Link></li>))}</ul></div>))}
        </div>
        <div aria-hidden className="mt-20 overflow-hidden select-none pointer-events-none"><div className="font-display text-[5.5rem] sm:text-[9rem] lg:text-[13rem] xl:text-[16rem] leading-none tracking-tighter whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(244,205,29,0.3)] text-center">EXTREME COMMERCE</div></div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50"><div>© {new Date().getFullYear()} Extreme Commerce. All rights reserved.</div><div className="flex items-center gap-6"><Link href="#" className="hover:text-white transition">Privacy</Link><Link href="#" className="hover:text-white transition">Terms</Link><Link href="#" className="hover:text-white transition">Cookies</Link></div></div>
      </div>
    </footer>
  );
}
'@

Set-Content "public\brand\logo-mark.svg" -Encoding UTF8 -Value @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="20" fill="#022766"/>
  <text x="50" y="68" font-family="Arial Black, Helvetica, sans-serif" font-size="54" font-weight="900" text-anchor="middle" fill="#F4CD1D" letter-spacing="-2">eX</text>
</svg>
'@

Write-Host "All files created!" -ForegroundColor Green
Write-Host "Now run: npm run dev" -ForegroundColor Cyan
