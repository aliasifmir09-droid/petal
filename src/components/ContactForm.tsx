"use client";

import { useState } from "react";
import { postInquiry } from "@/lib/post-inquiry";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setError("Please fill in name, email, and message.");
      return;
    }
    setStatus("sending");
    setError("");
    const subject = orderId.trim()
      ? `Order ${orderId.trim()} — ${name.trim()}`
      : `Inquiry — ${name.trim()}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      orderId.trim() ? `Order ID: ${orderId.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n");
    const result = await postInquiry({
      kind: "contact",
      name: name.trim(),
      email: email.trim(),
      subject,
      message: body,
      company,
    });
    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }
    setStatus("sent");
    setMessage("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        aria-hidden="true"
        name="company"
      />
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
          {error}
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="text-sm text-leaf" role="status">
          Sent. We reply to the email you entered. You can also call {site.phoneDisplay}.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-porcelain hover:bg-leaf disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
