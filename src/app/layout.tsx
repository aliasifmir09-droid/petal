import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.petalswift.com"),
  title: {
    default: "Petalswift | Luxury Flowers & Bouquets in NYC",
    template: "%s | Petalswift",
  },
  description:
    "Petalswift delivers premium same-day flowers and composed bouquets across New York City. Fresh stems, quiet luxury, five-borough reliability.",
  keywords: [
    "NYC florist",
    "same day flower delivery NYC",
    "luxury bouquets Manhattan",
    "Brooklyn flower delivery",
    "Petalswift",
  ],
  openGraph: {
    title: "Petalswift | Luxury Flowers & Bouquets in NYC",
    description:
      "Same-day premium bouquets across the five boroughs—arranged this morning, delivered with care.",
    url: "https://www.petalswift.com",
    siteName: "Petalswift",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petalswift | Luxury Flowers & Bouquets in NYC",
    description:
      "Same-day premium bouquets across the five boroughs—arranged this morning, delivered with care.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
