import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceAreas from "@/components/ServiceAreas";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Cities",
  description:
    "KabadiBaba operates across 40+ cities in Madhya Pradesh and Uttar Pradesh. Free scrap pickup in Bhopal, Indore, Lucknow, Kanpur, Agra, Varanasi and many more cities.",
};

export default function CitiesPage() {
  return (
    <>
      <PageHero
        badge="40+ Cities & Growing"
        title="We Pick Up From"
        titleHighlight="Your City"
        subtitle="Currently serving over 40 cities across Madhya Pradesh and Uttar Pradesh, with more locations being added every month."
        breadcrumbs={[{ label: "Our Cities" }]}
        variant="green"
      />
      <ServiceAreas />
      <ExpansionNote />
      <CTABanner
        title="Found Your City? Book a Pickup!"
        subtitle="Schedule your free pickup today — we'll be there within 24 hours."
      />
    </>
  );
}

function ExpansionNote() {
  const upcoming = [
    { state: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota", "Udaipur"] },
    { state: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur", "Durg"] },
    { state: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur"] },
  ];

  return (
    <section className="py-14 bg-warm-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-india-green-50 text-india-green text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-green-200 mb-4">
          Coming Soon
        </span>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          Expanding Across Central India
        </h2>
        <p className="text-gray-500 text-sm mb-10 max-w-lg mx-auto">
          We&apos;re growing fast! These states are next on our expansion roadmap.
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
          Not in a listed city? Let us know on{" "}
          <a
            href="https://wa.me/919424612100?text=Hi%20KabadiBaba!%20I%20am%20from%20[city].%20When%20will%20you%20expand%20here?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-india-green font-semibold hover:underline"
          >
            WhatsApp
          </a>{" "}
          — your city could be next!
        </p>
      </div>
    </section>
  );
}
