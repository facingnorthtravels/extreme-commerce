import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { EliteHero } from "./_components/EliteHero";
import { EliteQualifier } from "./_components/EliteQualifier";
import { EliteModel } from "./_components/EliteModel";
import { EliteTimeline } from "./_components/EliteTimeline";
import { EliteHandled } from "./_components/EliteHandled";
import { EliteMath } from "./_components/EliteMath";
import { EliteLaunches } from "./_components/EliteLaunches";
import { EliteFAQ } from "./_components/EliteFAQ";
import { EliteCTA } from "./_components/EliteCTA";

export const metadata: Metadata = {
  title: "Elite Program — Done-For-You Amazon Business",
  description:
    "Three Amazon launches. $7K capital per launch. 80% profit to you. We research, source, launch, and scale — you collect. Apply for Extreme Commerce Elite.",
  openGraph: {
    title: "Elite Program — Done-For-You Amazon Business | Extreme Commerce",
    description:
      "A fully-operated Amazon business built in your name. 80% profit share. 18-month programme. Limited spots.",
  },
};

export default function ElitePage() {
  return (
    <>
      <Nav />
      <main>
        <EliteHero />
        <EliteQualifier />
        <EliteModel />
        <EliteTimeline />
        <EliteHandled />
        <EliteMath />
        <EliteLaunches />
        <EliteFAQ />
        <EliteCTA />
      </main>
      <Footer />
    </>
  );
}
