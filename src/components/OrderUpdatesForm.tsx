"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const STORAGE_KEY = "petalswift-notify-prefs";

type Prefs = {
  email: string;
  phone: string;
  emailOn: boolean;
  smsOn: boolean;
};

const defaults: Prefs = {
  email: "",
  phone: "",
  emailOn: true,
  smsOn: true,
};

export function OrderUpdatesForm() {
  const [prefs, setPrefs] = useState<Prefs>(defaults);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrefs({ ...defaults, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="border border-line bg-porcelain/70 p-6 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
        Email & SMS updates
      </p>
      <h2 className="font-display mt-2 text-3xl tracking-[-0.03em] text-ink">
        Know every step of the delivery.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Confirmation, composition started, out for delivery, and handoff—by
        email and optional SMS. Saved on this device and included when you
        request checkout.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
          setSaved(true);
        }}
      >
        <label className="block text-sm text-ink-soft">
          Email
          <input
            type="email"
            required={prefs.emailOn}
            value={prefs.email}
            onChange={(e) =>
              setPrefs((p) => ({ ...p, email: e.target.value }))
            }
            className="mt-1.5 w-full border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm text-ink-soft">
          Mobile (SMS)
          <input
            type="tel"
            required={prefs.smsOn}
            value={prefs.phone}
            onChange={(e) =>
              setPrefs((p) => ({ ...p, phone: e.target.value }))
            }
            className="mt-1.5 w-full border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
            placeholder="(917) 555-0100"
          />
        </label>
        <div className="flex flex-wrap gap-4 text-sm text-ink-soft">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={prefs.emailOn}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, emailOn: e.target.checked }))
              }
            />
            Email updates
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={prefs.smsOn}
              onChange={(e) =>
                setPrefs((p) => ({ ...p, smsOn: e.target.checked }))
              }
            />
            SMS updates
          </label>
        </div>
        <button
          type="submit"
          className="bg-leaf px-5 py-3 text-sm text-porcelain transition-colors hover:bg-leaf-deep"
        >
          Save preferences
        </button>
        {saved ? (
          <p className="text-sm text-leaf">
            Saved. We will also include these contacts when you email{" "}
            {site.email} to complete an order.
          </p>
        ) : null}
      </form>
    </div>
  );
}
