import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Materials from "@/components/Materials";
import Rates from "@/components/Rates";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Scrap Rates",
  description:
    "Check today's scrap rates for paper, plastic, metal, e-waste, and old appliances in Prayagraj, Uttar Pradesh. Best rates guaranteed by KabadiBaba.",
};

export default function RatesPage() {
  return (
    <>
      <PageHero
        badge="Best Rates in Prayagraj"
        title="Today's Scrap"
        titleHighlight="Rates"
        subtitle="Transparent, market-linked rates for all types of scrap. What you see is what you get — no deductions, no surprises."
        breadcrumbs={[{ label: "Scrap Rates" }]}
        ctaLabel="Book Free Pickup"
        ctaHref="/book-pickup"
        variant="saffron"
      />
      <Materials />
      <Rates />
      <RatesInfo />
      <CTABanner
        title="Like Our Rates? Book a Free Pickup!"
        subtitle="Our agents arrive within 24 hours and pay you cash or online on the spot."
      />
    </>
  );
}

function RatesInfo() {
  const points = [
    {
      title: "Why our rates are the best",
      body: "We work directly with large-scale recyclers and scrap processors, cutting out middlemen. This lets us pass on higher rates to you compared to a local kabadiwala.",
    },
    {
      title: "What affects the rate?",
      body: "Scrap rates are linked to commodity markets and fluctuate daily. Material quality (clean vs mixed) and quantity also affect the final rate. Call us for the latest quote.",
    },
    {
      title: "Appliance rates explained",
      body: "Old appliances are priced per piece based on their working condition, brand, and model year. Our agent will inspect and give a firm quote before any removal.",
    },
    {
      title: "Bulk scrap? Get a better rate",
      body: "If you have over 50 kg of scrap or multiple appliances, contact us for a special bulk quote. We service housing societies, offices, and factories too.",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Understanding Our Rates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <div key={p.title} className="p-5 border border-gray-100 rounded-2xl bg-warm-gray">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
