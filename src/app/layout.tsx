import type { Metadata, Viewport } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://extremecommerce.com"),
  title: {
    default: "Extreme Commerce — Build Profitable Amazon Brands",
    template: "%s · Extreme Commerce",
  },
  description:
    "We build and scale Amazon businesses for entrepreneurs, investors, and business owners. Done-for-you product launches, expert virtual assistants, and 1:1 mentorship from Sunny Ali.",
  keywords: [
    "Amazon agency",
    "Amazon FBA",
    "Amazon product launch",
    "Amazon virtual assistant",
    "Amazon PPC",
    "Extreme Commerce",
    "Sunny Ali",
    "Amazon mentorship",
    "Done-for-you Amazon",
  ],
  authors: [{ name: "Extreme Commerce" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Extreme Commerce — Build Profitable Amazon Brands",
    description:
      "Done-for-you Amazon businesses. Launch, scale, and profit — backed by a 1M+ community and a decade of data.",
    siteName: "Extreme Commerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extreme Commerce — Build Profitable Amazon Brands",
    description: "Done-for-you Amazon businesses. Launch, scale, and profit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#022766",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-navy">
        {children}
      </body>
    </html>
  );
}
