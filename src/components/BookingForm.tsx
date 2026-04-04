"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send, CheckCircle, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  city: z.string().min(2, "Please enter your city"),
  scrapType: z.string().min(1, "Please select scrap type"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const scrapTypes = [
  "Paper / Books / Cardboard",
  "Plastic",
  "Metal / Iron / Steel",
  "E-Waste (phones, laptops, TV)",
  "Old Appliance (AC, fridge, washing machine)",
  "Mixed Scrap",
  "Not sure – you tell me!",
];

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setWhatsappUrl(json.whatsappUrl || null);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
        : "border-gray-200 focus:ring-saffron/30 focus:border-saffron"
    }`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-saffron-50 via-white to-india-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
              Get Started
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Schedule Your Free
              <br />
              <span className="text-saffron">Scrap Pickup</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Fill the form and we&apos;ll reach out within{" "}
              <strong className="text-gray-700">2 hours</strong> to confirm your pickup
              slot. Or just WhatsApp us directly!
            </p>

            {/* Contact options */}
            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/919424612100?text=Hi%20KabadiBaba!%20I%20want%20to%20schedule%20a%20scrap%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-india-green rounded-2xl text-white hover:bg-india-green-dark transition-colors group"
              >
                <MessageCircle size={28} className="flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Chat on WhatsApp</div>
                  <div className="text-white/75 text-sm">+91 94246 12100 – instant reply</div>
                </div>
              </a>

              <a
                href="tel:+919424612100"
                className="flex items-center gap-4 p-4 bg-white border-2 border-saffron rounded-2xl text-saffron hover:bg-saffron-50 transition-colors"
              >
                <Phone size={26} className="flex-shrink-0" />
                <div>
                  <div className="font-bold text-base text-gray-900">Call Us</div>
                  <div className="text-gray-500 text-sm">+91 94246 12100 | Mon–Sat, 9AM–6PM</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl text-gray-600">
                <Send size={20} className="flex-shrink-0 text-saffron" />
                <div>
                  <div className="font-bold text-sm text-gray-900">Email Us</div>
                  <a href="mailto:hello@kabadibaba.co.in" className="text-sm text-saffron hover:underline">
                    hello@kabadibaba.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-8 gap-5">
                <div className="w-16 h-16 bg-india-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle size={36} className="text-india-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Received!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  We&apos;ll call you back within 2 hours to confirm your pickup slot.
                </p>
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-india-green hover:bg-india-green-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    <MessageCircle size={18} />
                    Also confirm via WhatsApp
                  </a>
                )}
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-gray-400 hover:text-gray-600 underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900">Book a Pickup</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="e.g. Ramesh Sharma"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={inputClass(!!errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                      City *
                    </label>
                    <input
                      {...register("city")}
                      placeholder="e.g. Bhopal"
                      className={inputClass(!!errors.city)}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      {...register("preferredDate")}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass(false)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Type of Scrap *
                  </label>
                  <select
                    {...register("scrapType")}
                    className={inputClass(!!errors.scrapType)}
                  >
                    <option value="">Select scrap type...</option>
                    {scrapTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.scrapType && (
                    <p className="mt-1 text-xs text-red-500">{errors.scrapType.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Additional Notes
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Approximate quantity, address details, or anything else..."
                    className={`${inputClass(false)} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">
                    Something went wrong. Please{" "}
                    <a href="https://wa.me/919424612100" className="underline">WhatsApp us</a> or{" "}
                    <a href="tel:+919424612100" className="underline">call directly</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-saffron hover:bg-saffron-dark disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Book Free Pickup
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to be contacted via phone or WhatsApp.
                  We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
