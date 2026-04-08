import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { ShieldCheck, Zap, Scale, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Free Pickup",
  description:
    "Schedule your free scrap pickup in Prayagraj. Fill the form or WhatsApp us at +91 95758 24800. Same-day and next-day slots available.",
};

export default function BookPickupPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-saffron-50 via-white to-india-green-50">
        {/* Mini trust bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: ShieldCheck, label: "Verified Agents", color: "text-india-green" },
              { icon: Zap, label: "24-Hour Pickup", color: "text-saffron" },
              { icon: Scale, label: "Certified Weighing", color: "text-india-navy" },
              { icon: Banknote, label: "Instant Cash", color: "text-india-green" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Icon size={16} className={color} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BookingForm />
    </>
  );
}
