import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SellerAccountDashboard } from "@/components/SellerAccountDashboard";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Seller Dashboard | Shop Owner Account",
  description:
    "Manage your Petalswift shop owner account, draft product listings, and track marketplace status.",
  alternates: { canonical: "/sell/account" },
  robots: { index: false, follow: false },
};

export default function SellerAccountPage() {
  return (
    <div className="pt-8 md:pt-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell on Petalswift", path: "/sell" },
          { name: "Seller dashboard", path: "/sell/account" },
        ])}
      />
      <div className="site-shell pb-6">
        <p className="text-sm text-ink-soft">
          <Link href="/sell" className="text-leaf hover:underline">
            Sell on Petalswift
          </Link>{" "}
          · Shop owner account
        </p>
      </div>
      <div className="site-shell pb-24">
        <SellerAccountDashboard />
      </div>
    </div>
  );
}
