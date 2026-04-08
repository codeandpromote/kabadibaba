import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "KabadiBaba – Sell Scrap Online | Free Pickup in Prayagraj",
    template: "%s | KabadiBaba",
  },
  description:
    "Turn your scrap into cash! Free doorstep pickup across Prayagraj, Uttar Pradesh. Sell newspaper, plastic, metal, e-waste, old appliances. Best rates, instant cash payment.",
  keywords:
    "kabadi, scrap dealer, sell scrap online, kabadiwala, scrap pickup Prayagraj, kabadiwala Prayagraj, old newspaper rates, iron scrap rates Prayagraj",
  authors: [{ name: "KabadiBaba" }],
  openGraph: {
    siteName: "KabadiBaba",
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://kabadibaba.co.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
