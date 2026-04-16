import Link from "next/link";
import { cn } from "@/lib/utils";
type LogoProps = { variant?: "light"|"dark"; className?: string; href?: string|null; };
export function Logo({ variant="light", className, href="/" }: LogoProps) {
  const markBg=variant==="light"?"bg-brand-navy":"bg-white", markFg=variant==="light"?"text-brand-yellow":"text-brand-navy", textColor=variant==="light"?"text-white":"text-brand-navy", subColor=variant==="light"?"text-brand-yellow":"text-brand-azure";
  const inner=(<span className={cn("inline-flex items-center gap-2.5 font-display tracking-wide",className)}><span className={cn("relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden",markBg)}><span className={cn("font-display text-[22px] leading-none translate-y-[1px]",markFg)}>eX</span></span><span className="flex flex-col leading-none"><span className={cn("font-display text-[20px] tracking-[0.08em] leading-none",textColor)}>EXTREME</span><span className={cn("font-display text-[13px] tracking-[0.32em] leading-none mt-[3px]",subColor)}>COMMERCE</span></span></span>);
  if(href===null)return inner;
  return <Link href={href} aria-label="Extreme Commerce home" className="inline-flex">{inner}</Link>;
}
