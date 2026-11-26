"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  PLATFORM_COMMISSION_PERCENT,
  SELLER_STORAGE_KEY,
  boroughLabel,
  getSeller,
  type SellerAccount,
  type SellerListingDraft,
} from "@/lib/sellers";

function loadAccount(): SellerAccount | null {
  try {
    const raw = localStorage.getItem(SELLER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SellerAccount;
  } catch {
    return null;
  }
}

function saveAccount(account: SellerAccount) {
  localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify(account));
}

export function SellerAccountDashboard() {
  const [account, setAccount] = useState<SellerAccount | null>(null);
  const [ready, setReady] = useState(false);

  const [opsMailto, setOpsMailto] = useState<string | null>(null);

  useEffect(() => {
    setAccount(loadAccount());
    try {
      setOpsMailto(sessionStorage.getItem("petalswift-seller-mailto"));
    } catch {
      setOpsMailto(null);
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" } as ScrollToOptions);
    setReady(true);
  }, []);

  function persist(next: SellerAccount) {
    saveAccount(next);
    setAccount(next);
  }

  function onAddListing(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!account) return;
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const blurb = String(form.get("blurb") || "").trim();
    const price = Number(form.get("price") || 0);
    const size = String(form.get("size") || "Signature") as SellerListingDraft["size"];
    const sameDay = form.get("sameDay") === "on";
    if (!name || !blurb || !price) return;

    const listing: SellerListingDraft = {
      id: `listing-${Date.now()}`,
      name,
      blurb,
      price,
      size,
      sameDay,
      createdAt: new Date().toISOString(),
    };
    persist({ ...account, listings: [listing, ...account.listings] });
    e.currentTarget.reset();
  }

  function removeListing(id: string) {
    if (!account) return;
    persist({
      ...account,
      listings: account.listings.filter((l) => l.id !== id),
    });
  }

  /** CSV: name,blurb,price,size,sameDay — one product per line (header optional). */
  function onImportCsv(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!account) return;
    const form = new FormData(e.currentTarget);
    const raw = String(form.get("csv") || "").trim();
    if (!raw) return;

    const lines = raw
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    const start =
      lines[0] && /name\s*,/i.test(lines[0]) ? lines.slice(1) : lines;

    const imported: SellerListingDraft[] = [];
    for (const line of start) {
      const cols = line.split(",").map((c) => c.trim().replace(/^"|"$/g, ""));
      if (cols.length < 3) continue;
      const [name, blurb, priceRaw, sizeRaw, sameDayRaw] = cols;
      const price = Number(priceRaw);
      if (!name || !blurb || !Number.isFinite(price) || price < 1) continue;
      const sizeNorm = (sizeRaw || "Signature").replace(/^\w/, (c) =>
        c.toUpperCase(),
      );
      const size = (
        ["Classic", "Signature", "Grand"].includes(sizeNorm)
          ? sizeNorm
          : "Signature"
      ) as SellerListingDraft["size"];
      const sameDay =
        sameDayRaw == null || sameDayRaw === ""
          ? true
          : /^(1|true|yes|y)$/i.test(sameDayRaw);
      imported.push({
        id: `listing-${Date.now()}-${imported.length}`,
        name,
        blurb,
        price,
        size,
        sameDay,
        createdAt: new Date().toISOString(),
      });
    }

    if (imported.length === 0) return;
    persist({ ...account, listings: [...imported, ...account.listings] });
    e.currentTarget.reset();
  }

  function clearAccount() {
    localStorage.removeItem(SELLER_STORAGE_KEY);
    setAccount(null);
  }

  if (!ready) {
    return <p className="text-sm text-ink-soft">Loading seller account…</p>;
  }

  if (!account) {
    return (
      <div className="rounded-xl border border-line bg-porcelain p-8">
        <h2 className="font-display text-3xl text-ink">No shop account in this browser</h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Create a shop owner account to list products on the Petalswift
          marketplace. After approval, your bouquets appear alongside partner
          florists across NYC.
        </p>
        <Link href="/sell/apply" className="btn-spark mt-8 inline-flex">
          Open shop owner application
        </Link>
      </div>
    );
  }

  const { shop, listings } = account;
  const payoutExample = Math.round(100 * (1 - shop.commissionPercent / 100));

  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-line bg-porcelain p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-leaf">
              Shop owner account · {shop.status}
            </p>
            <h1 className="font-display mt-3 text-4xl tracking-[-0.03em] text-ink md:text-5xl">
              {shop.name}
            </h1>
            <p className="mt-3 text-ink-soft">
              {shop.ownerName} · {shop.email} · {shop.phone}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              {shop.addressLine} · {boroughLabel(shop.borough)}
              {shop.neighborhood ? ` · ${shop.neighborhood}` : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {getSeller(shop.slug) ? (
              <Link href={`/sell/shops/${shop.slug}`} className="btn-brand">
                Public shop page
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-ink-soft">
                Public shop after approval
              </span>
            )}
            <button type="button" onClick={clearAccount} className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft hover:border-ink">
              Sign out of this browser
            </button>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-soft">{shop.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {shop.specialties.map((s) => (
            <li
              key={s}
              className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-canvas p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Platform fee</p>
            <p className="mt-2 text-2xl font-semibold text-ink">{shop.commissionPercent}%</p>
          </div>
          <div className="rounded-lg bg-canvas p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">You keep on $100</p>
            <p className="mt-2 text-2xl font-semibold text-ink">${payoutExample}</p>
          </div>
          <div className="rounded-lg bg-canvas p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Same-day capable</p>
            <p className="mt-2 text-2xl font-semibold text-ink">{shop.sameDay ? "Yes" : "No"}</p>
          </div>
        </div>
        {shop.status === "pending" ? (
          <div className="mt-6 rounded-lg border border-petal/40 bg-petal/20 px-4 py-3 text-sm text-ink">
            <p>
              Application submitted. Petalswift reviews new shop owners before
              listings go live on the public marketplace. You can still draft
              products below.
            </p>
            {opsMailto ? (
              <p className="mt-3">
                <a href={opsMailto} className="font-semibold text-leaf hover:underline">
                  Email application to Petalswift ops →
                </a>
              </p>
            ) : null}
          </div>
        ) : null}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={onAddListing} className="rounded-xl border border-line bg-porcelain p-6 md:p-8">
          <h2 className="font-display text-3xl text-ink">List a product</h2>
          <p className="mt-3 text-sm text-ink-soft">
            Draft bouquets for your shop. After approval, Petalswift publishes them to{" "}
            <Link href="/arrangements" className="text-leaf hover:underline">
              /arrangements
            </Link>{" "}
            with your shop name as the seller.
          </p>
          <label className="mt-6 block text-sm">
            <span className="font-semibold text-ink">Product name</span>
            <input
              name="name"
              required
              placeholder="Astoria Morning Hand-Tie"
              className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 outline-none focus:border-leaf"
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="font-semibold text-ink">Description</span>
            <textarea
              name="blurb"
              required
              rows={3}
              placeholder="Stems, color story, and who it is best for."
              className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 outline-none focus:border-leaf"
            />
          </label>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-semibold text-ink">Price (USD)</span>
              <input
                name="price"
                type="number"
                min={40}
                step={1}
                required
                defaultValue={88}
                className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 outline-none focus:border-leaf"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold text-ink">Size tier</span>
              <select
                name="size"
                defaultValue="Signature"
                className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 outline-none focus:border-leaf"
              >
                <option>Classic</option>
                <option>Signature</option>
                <option>Grand</option>
              </select>
            </label>
          </div>
          <label className="mt-4 flex items-center gap-3 text-sm text-ink">
            <input name="sameDay" type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--leaf)]" />
            Same-day eligible
          </label>
          <button type="submit" className="btn-spark mt-6">
            Save listing draft
          </button>
          <p className="mt-3 text-xs text-ink-soft">
            Standard marketplace fee {PLATFORM_COMMISSION_PERCENT}% when the order
            completes.
          </p>
        </form>

        <div className="rounded-xl border border-line bg-porcelain p-6 md:p-8">
          <h2 className="font-display text-3xl text-ink">Your listings</h2>
          {listings.length === 0 ? (
            <p className="mt-4 text-sm text-ink-soft">
              No drafts yet. Add your first bouquet to start selling on Petalswift.
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {listings.map((listing) => (
                <li
                  key={listing.id}
                  className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-4"
                >
                  <div>
                    <p className="font-semibold text-ink">{listing.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">{listing.blurb}</p>
                    <p className="mt-2 text-sm text-ink">
                      ${listing.price} · {listing.size}
                      {listing.sameDay ? " · Same-day" : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeListing(listing.id)}
                    className="text-sm text-ink-soft hover:text-ink"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={onImportCsv} className="mt-10 border-t border-line pt-8">
            <h3 className="font-display text-2xl text-ink">Bulk CSV import</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Paste rows as{" "}
              <code className="text-ink">name,blurb,price,size,sameDay</code>.
              Example:{" "}
              <code className="text-ink">
                Astoria Hand-Tie,Seasonal garden stems,88,Signature,yes
              </code>
            </p>
            <textarea
              name="csv"
              required
              rows={5}
              placeholder={
                "name,blurb,price,size,sameDay\nBrooklyn Stoop Bunch,Soft pastels for brownstones,96,Signature,yes"
              }
              className="mt-4 w-full rounded-lg border border-line bg-canvas px-4 py-3 font-mono text-xs outline-none focus:border-leaf"
            />
            <button type="submit" className="btn-brand mt-4">
              Import listings
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
