import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Materials from "@/components/Materials";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "KabadiBaba – Sell Scrap Online | Free Pickup in Prayagraj",
  description:
    "Turn your scrap into cash! Free doorstep pickup across Prayagraj, Uttar Pradesh. Best rates guaranteed, instant cash payment. Book your free pickup today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Materials />
      <Testimonials />
      <CTABanner />
    </>
  );
}
