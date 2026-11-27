"use client";

import { useState } from "react";
import { postInquiry } from "@/lib/post-inquiry";
import { site } from "@/lib/site";

export function OrderRequestForm({ summary }: { summary: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setError("Please add your name and email.");
      return;
    }
    setStatus("sending");
    const result = await postInquiry({
      kind: "order",
      name: name.trim(),
      email: email.trim(),
      subject: `Order request — ${name.trim()}`,
      message: [summary, note.trim() ? `\nNote:\n${note.trim()}` : ""].join("\n"),
    });
    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="mt-6 text-sm text-leaf" role="status">
        Order request sent. We reply to {email}. You can also call {site.phoneDisplay}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3">
      <label className="block text-sm text-ink-soft">
        Name
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
        />
      </label>
      <label className="block text-sm text-ink-soft">
        Email
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
        />
      </label>
      <label className="block text-sm text-ink-soft">
        Note
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-1.5 w-full border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
          placeholder="Delivery date, recipient, or building notes"
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-spark w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send order request"}
      </button>
    </form>
  );
}
