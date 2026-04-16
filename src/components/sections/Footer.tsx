import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Elite Program", href: "#elite" },
      { label: "Virtual Assistants", href: "#services" },
      { label: "Mentorship", href: "#services" },
      { label: "PPC & Advertising", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#founder" },
      { label: "How It Works", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "Amazon PL", href: "#" },
      { label: "Amazon Wholesale", href: "#" },
      { label: "Walmart", href: "#" },
      { label: "TikTok Shop", href: "#" },
      { label: "Etsy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-navy-800 text-white overflow-hidden -mt-px">

      {/* eX watermark — same style as Hero */}
      <div
        aria-hidden
        className="absolute -right-16 sm:-right-24 bottom-8 pointer-events-none select-none -z-0"
      >
        <span className="font-display text-[14rem] sm:text-[20rem] lg:text-[26rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10">

          {/* Brand column */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
              We build and scale Amazon businesses for entrepreneurs, investors,
              and business owners. Practical, outcome-driven, no fluff.
            </p>

            {/* Newsletter */}
            <form className="mt-5 flex w-full max-w-sm items-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm p-1 focus-within:border-brand-yellow/50 transition">
              <div className="flex items-center gap-2 pl-3 text-white/50 flex-1">
                <Mail className="h-4 w-4 flex-none" />
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email"
                  className="bg-transparent flex-1 py-2 text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-brand-yellow text-brand-navy px-4 py-2 text-sm font-semibold hover:bg-brand-yellow-light transition"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: YouTubeIcon, href: "#", label: "YouTube" },
                { icon: FacebookIcon, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs tracking-[0.2em] text-brand-yellow mb-4">
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Meta row */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Extreme Commerce. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
