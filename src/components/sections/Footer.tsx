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
    <footer className="relative bg-brand-navy-800 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand column */}
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-sm">
              We build and scale Amazon businesses for entrepreneurs, investors,
              and business owners. Practical, outcome-driven, no fluff.
            </p>

            {/* Newsletter */}
            <form className="mt-8 flex w-full max-w-sm items-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm p-1 focus-within:border-brand-yellow/50 transition">
              <div className="flex items-center gap-2 pl-4 text-white/50 flex-1">
                <Mail className="h-4 w-4 flex-none" />
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email"
                  className="bg-transparent flex-1 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-brand-yellow text-brand-navy px-4 py-2 text-sm font-semibold hover:bg-brand-yellow-light transition"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-8 flex items-center gap-2">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs tracking-[0.2em] text-brand-yellow mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-[15px] transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant brand wordmark */}
        <div
          aria-hidden
          className="mt-20 overflow-hidden select-none pointer-events-none"
        >
          <div className="font-display text-[5.5rem] sm:text-[9rem] lg:text-[13rem] xl:text-[16rem] leading-none tracking-tighter whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(244,205,29,0.3)] text-center">
            EXTREME COMMERCE
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50">
          <div>
            © {new Date().getFullYear()} Extreme Commerce. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
