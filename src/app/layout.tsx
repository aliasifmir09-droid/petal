import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CartProvider } from "@/lib/cart";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";
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

export const viewport: Viewport = {
  themeColor: "#0071dc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Petalswift | Luxury Same-Day Flowers & Bouquets in NYC",
    template: "%s | Petalswift",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "shopping",
  keywords: [
    "NYC florist",
    "same day flower delivery NYC",
    "Christmas flower delivery NYC",
    "Christmas Eve flowers New York",
    "luxury bouquets Manhattan",
    "Brooklyn flower delivery",
    "Queens florist Jackson Heights",
    "flower delivery Bronx",
    "Staten Island florist",
    "Petalswift",
    "same day bouquets New York",
    "holiday centerpiece NYC",
  ],
  openGraph: {
    title: "Petalswift | Luxury Same-Day Flowers & Bouquets in NYC",
    description: site.shortDescription,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Petalswift luxury bouquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petalswift | Luxury Same-Day Flowers & Bouquets in NYC",
    description: site.shortDescription,
    images: [site.ogImage],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "Jackson Heights",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <JsonLd data={[organizationSchema(), websiteSchema()]} />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
