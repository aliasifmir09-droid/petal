"use client";

import { useState } from "react";
import { ContactEmail } from "@/components/ContactEmail";
import { site } from "@/lib/site";

type Status = "idle" | "ready" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(
      orderId.trim()
        ? `Petalswift order ${orderId.trim()} — ${name.trim()}`
        : `Petalswift inquiry — ${name.trim()}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        orderId.trim() ? `Order ID: ${orderId.trim()}` : null,
        "",
        message.trim(),
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border border-line bg-white px-3 py-2 text-sm text-ink"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full border border-line bg-white px-3 py-2 text-sm text-ink"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-order" className="block text-sm font-medium text-ink">
          Order ID <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="contact-order"
          name="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g. PS-…"
          className="mt-1 w-full border border-line bg-white px-3 py-2 text-sm text-ink"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full border border-line bg-white px-3 py-2 text-sm text-ink"
          required
        />
      </div>
      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          Please fill in name, email, and message.
        </p>
      ) : null}
      {status === "ready" ? (
        <p className="text-sm text-ink-soft">
          Your mail app should open with a draft to <ContactEmail />. If nothing opens, email us
          directly or call {site.phoneDisplay}.
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-porcelain hover:bg-leaf"
      >
        Open email draft
      </button>
    </form>
  );
}
