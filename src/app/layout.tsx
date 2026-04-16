import type { Metadata, Viewport } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400","500","600","700","800","900"], display: "swap" });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://extremecommerce.com"),
  title: { default: "Extreme Commerce â€” Build Profitable Amazon Brands", template: "%s Â· Extreme Commerce" },
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
