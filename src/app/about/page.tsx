import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { Leaf, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KabadiBaba — our story, our mission to make scrap selling dignified and transparent across Prayagraj, Uttar Pradesh.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Making Scrap Selling"
        titleHighlight="Dignified"
        subtitle="We started in Prayagraj with a simple belief — that every household deserves a fair, honest, and respectful scrap pickup experience."
        breadcrumbs={[{ label: "About Us" }]}
        variant="green"
      />
      <OurStory />
      <Mission />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}

function OurStory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story text */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
              Born in Prayagraj, Growing Across India
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                KabadiBaba started right here in Prayagraj, Uttar Pradesh. Our founders noticed
                a simple problem: households had scrap piling up but no reliable, trustworthy way
                to sell it. Local kabadis often gave poor rates, used uncertified scales, and left
                customers feeling cheated.
              </p>
              <p>
                We set out to change that. By partnering directly with large-scale recycling
                facilities, we were able to offer market-linked rates that are consistently
                higher than what a local dealer would offer. We equipped our agents with
                government-certified digital scales and trained them to be courteous and transparent.
              </p>
              <p>
                We are proud to serve Prayagraj and its surrounding localities — and we&apos;re
                just getting started. Every household we serve is one more step toward a
                cleaner, greener India.
              </p>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2020", label: "Year Founded", color: "text-saffron" },
              { value: "Prayagraj", label: "Currently Serving", color: "text-india-green" },
              { value: "5,000+", label: "Happy Customers", color: "text-saffron" },
              { value: "200+ T", label: "Scrap Recycled", color: "text-india-green" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-warm-gray border border-gray-100 rounded-2xl p-6 text-center"
              >
                <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      body: "To make sustainable waste management accessible, fair, and rewarding for every household and business across central India.",
      color: "text-saffron",
      bg: "bg-saffron-50",
    },
    {
      icon: Leaf,
      title: "Our Vision",
      body: "A clean, zero-waste India where recyclable materials never end up in landfills — because it's easier and more profitable to sell them.",
      color: "text-india-green",
      bg: "bg-india-green-50",
    },
    {
      icon: Users,
      title: "Our Values",
      body: "Transparency in pricing, respect for every customer, and a commitment to environmental responsibility in every pickup we do.",
      color: "text-india-navy",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section className="py-14 bg-warm-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className={`inline-flex p-3 ${p.bg} rounded-xl ${p.color} mb-4`}>
                <p.icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
