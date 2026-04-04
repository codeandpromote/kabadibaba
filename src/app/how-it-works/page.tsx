import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how KabadiBaba works in 3 easy steps — book a pickup, we come to you, and you get paid instantly. No app, no hassle, free doorstep service across MP & UP.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="Simple & Hassle-Free"
        title="How KabadiBaba"
        titleHighlight="Works"
        subtitle="Selling scrap has never been this easy. Just 3 steps, no app needed, and we come right to your door."
        breadcrumbs={[{ label: "How It Works" }]}
        variant="saffron"
      />
      <HowItWorks />
      <WhatToExpect />
      <FAQ />
      <CTABanner
        title="Convinced? Let's Get Started!"
        subtitle="Book your free pickup now — we'll be at your door within 24 hours."
      />
    </>
  );
}

function WhatToExpect() {
  const tips = [
    {
      number: "1",
      title: "Separate your scrap before we arrive",
      body: "Sort newspaper, plastic, and metal into different piles. This helps us weigh faster and you get a precise rate for each category.",
    },
    {
      number: "2",
      title: "Our agent will call 30 minutes before arrival",
      body: "You'll receive a call from your assigned agent with their name and ID number. Our agents wear branded uniforms for easy identification.",
    },
    {
      number: "3",
      title: "Watch the weighing — it's fully transparent",
      body: "We place items on our digital scale in front of you. The weight and calculated amount are shown on-screen before we finalise payment.",
    },
    {
      number: "4",
      title: "Choose your payment mode",
      body: "Cash on the spot, or digital payment via UPI (Google Pay, PhonePe, Paytm). Whatever is convenient for you.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
          What to Expect on Pickup Day
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl">
          A few simple things that make your pickup experience smooth and fast.
        </p>
        <div className="space-y-6">
          {tips.map((tip) => (
            <div key={tip.number} className="flex gap-5 p-6 bg-saffron-50 border border-saffron-100 rounded-2xl">
              <div className="flex-shrink-0 w-9 h-9 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-sm">
                {tip.number}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
