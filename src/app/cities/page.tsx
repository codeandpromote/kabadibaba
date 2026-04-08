import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceAreas from "@/components/ServiceAreas";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our City – Prayagraj",
  description:
    "KabadiBaba currently serves Prayagraj, Uttar Pradesh. Free scrap pickup from all major localities — Civil Lines, George Town, Naini, Allahpur, Phaphamau and more.",
};

export default function CitiesPage() {
  return (
    <>
      <PageHero
        badge="Currently Serving"
        title="Prayagraj,"
        titleHighlight="Uttar Pradesh"
        subtitle="We cover all major localities across Prayagraj. Same-day and next-day pickup available."
        breadcrumbs={[{ label: "Our City" }]}
        ctaLabel="Book Free Pickup"
        ctaHref="/book-pickup"
        variant="green"
      />
      <ServiceAreas />
      <ExpansionNote />
      <CTABanner
        title="Found Your Area? Book a Pickup!"
        subtitle="Schedule your free pickup today — we'll be at your door within 24 hours."
      />
    </>
  );
}

function ExpansionNote() {
  const upcoming = [
    { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior"] },
    { state: "More UP Cities", cities: ["Lucknow", "Kanpur", "Varanasi", "Agra"] },
    { state: "Other States", cities: ["Rajasthan", "Chhattisgarh", "Bihar"] },
  ];

  return (
    <section className="py-14 bg-warm-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-saffron-50 text-saffron-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-saffron-100 mb-4">
          Coming Soon
        </span>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          Expanding Across India
        </h2>
        <p className="text-gray-500 text-sm mb-10 max-w-lg mx-auto">
          We&apos;re growing fast! These areas are next on our expansion roadmap.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {upcoming.map((item) => (
            <div key={item.state} className="bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <div className="text-sm font-bold text-gray-400 mb-3">{item.state}</div>
              <div className="flex flex-wrap gap-1.5">
                {item.cities.map((city) => (
                  <span key={city} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-gray-500">
          Want us in your city?{" "}
          <a
            href="https://wa.me/919575824800?text=Hi%20KabadiBaba!%20Please%20expand%20to%20my%20city%20soon!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-india-green font-semibold hover:underline"
          >
            Let us know on WhatsApp
          </a>{" "}
          — we&apos;re listening!
        </p>
      </div>
    </section>
  );
}
