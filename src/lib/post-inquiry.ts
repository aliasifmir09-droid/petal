import { site } from "@/lib/site";

export type InquiryKind = "contact" | "seller" | "order";

function errorMessage(status: number) {
  if (status === 503) {
    return `We could not send that yet. Call ${site.phoneDisplay}.`;
  }
  if (status === 400) {
    return "Please add your name, a valid email, and a message.";
  }
  return `We could not send that message. Call ${site.phoneDisplay}.`;
}

export async function postInquiry(input: {
  kind: InquiryKind;
  name: string;
  email: string;
  message: string;
  subject?: string;
  company?: string;
}) {
  const response = await fetch("/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (response.ok) return { ok: true as const };
  return { ok: false as const, error: errorMessage(response.status) };
}
