import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-yellow disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-yellow text-brand-navy hover:bg-brand-yellow-light shadow-[0_10px_30px_-10px_rgba(244,205,29,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(244,205,29,0.8)] hover:-translate-y-0.5",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-navy-700 shadow-[0_10px_30px_-10px_rgba(2,39,102,0.5)] hover:-translate-y-0.5",
  ghost:
    "bg-white/5 backdrop-blur-md border border-white/15 text-white hover:bg-white/10 hover:border-white/25",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: ComponentPropsWithoutRef<"button">["type"];
  "aria-label"?: string;
  target?: string;
  rel?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  className,
  href,
  onClick,
  type,
  target,
  rel,
  ...rest
}: ButtonOwnProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type ?? "button"}
      {...rest}
    >
      {content}
    </button>
  );
}
