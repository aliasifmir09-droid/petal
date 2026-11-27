"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  PLATFORM_COMMISSION_PERCENT,
  SELLER_STORAGE_KEY,
  slugifyShopName,
  type SellerAccount,
} from "@/lib/sellers";
import { boroughs, site } from "@/lib/site";
import { postInquiry } from "@/lib/post-inquiry";

export function SellerApplyForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const form = new FormData(e.currentTarget);
    const name = String(form.get("shopName") || "").trim();
    const ownerName = String(form.get("ownerName") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const borough = String(form.get("borough") || "").trim();
    const neighborhood = String(form.get("neighborhood") || "").trim();
    const addressLine = String(form.get("addressLine") || "").trim();
    const blurb = String(form.get("blurb") || "").trim();
    const specialties = String(form.get("specialties") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const sameDay = form.get("sameDay") === "on";

    if (!name || !ownerName || !email || !phone || !borough || !blurb) {
      setError("Please complete the required shop owner fields.");
      setSaving(false);
      return;
    }

    const account: SellerAccount = {
      shop: {
        slug: slugifyShopName(name) || `shop-${Date.now()}`,
        name,
        ownerName,
        email,
        phone,
        borough,
        neighborhood: neighborhood || boroughs.find((b) => b.slug === borough)?.name || "",
        addressLine: addressLine || `${neighborhood || borough}, NY`,
        blurb,
        specialties:
          specialties.length > 0 ? specialties : ["Same-day bouquets", "Custom orders"],
        sameDay,
        status: "pending",
        commissionPercent: PLATFORM_COMMISSION_PERCENT,
        joined: new Date().toISOString().slice(0, 10),
      },
      listings: [],
    };

    try {
      localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify(account));
    } catch {
      setError("Could not save your shop account in this browser.");
      setSaving(false);
      return;
    }

    const subject = `Shop owner application: ${name}`;
    const body = [
      `New Petalswift marketplace seller application`,
      ``,
      `Shop: ${name}`,
      `Owner: ${ownerName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Borough: ${borough}`,
      `Neighborhood: ${neighborhood}`,
      `Address: ${addressLine}`,
      `Same-day: ${sameDay ? "yes" : "no"}`,
      `Specialties: ${account.shop.specialties.join(", ")}`,
      ``,
      blurb,
      ``,
      `Commission: ${PLATFORM_COMMISSION_PERCENT}% platform fee`,
      `Local seller dashboard: ${site.url}/sell/account`,
    ].join("\n");
    const sent = await postInquiry({
      kind: "seller",
      name: ownerName,
      email,
      subject,
      message: body,
    });
    if (!sent.ok) {
      setError(sent.error);
      setSaving(false);
      return;
    }
    router.push("/sell/account");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-line bg-porcelain p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm">
          <span className="font-semibold text-ink">Shop name *</span>
          <input
            name="shopName"
            required
            placeholder="e.g. Ridgewood Bloom Room"
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-ink">Owner name *</span>
          <input
            name="ownerName"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-ink">Business email *</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@yourshop.com"
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-ink">Phone *</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="(917) 555-0100"
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-ink">Borough *</span>
          <select
            name="borough"
            required
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
          >
            <option value="" disabled>
              Select borough
            </option>
            {boroughs.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-ink">Neighborhood</span>
          <input
            name="neighborhood"
            placeholder="e.g. Astoria"
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-semibold text-ink">Studio / shop address</span>
        <input
          name="addressLine"
          placeholder="Street, neighborhood, NY ZIP"
          className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
        />
      </label>

      <label className="block text-sm">
        <span className="font-semibold text-ink">What you sell *</span>
        <textarea
          name="blurb"
          required
          rows={4}
          placeholder="Tell buyers about your style, freshness standard, and delivery radius."
          className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
        />
      </label>

      <label className="block text-sm">
        <span className="font-semibold text-ink">Specialties (comma-separated)</span>
        <input
          name="specialties"
          placeholder="Hatboxes, sympathy, corporate, lily-free"
          className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink outline-none focus:border-leaf"
        />
      </label>

      <label className="flex items-center gap-3 text-sm text-ink">
        <input name="sameDay" type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--leaf)]" />
        We can fulfill same-day NYC orders when cut off allows
      </label>

      <p className="text-sm text-ink-soft">
        Platform fee: {PLATFORM_COMMISSION_PERCENT}% per order. You keep the rest.
        Creating an account opens your seller dashboard and notifies Petalswift ops
        by email for approval.
      </p>

      {error ? <p className="text-sm font-semibold text-red-700">{error}</p> : null}

      <button type="submit" disabled={saving} className="btn-spark">
        {saving ? "Creating shop account…" : "Create shop owner account"}
      </button>
    </form>
  );
}
