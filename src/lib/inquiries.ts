import { Resend } from "resend";
import { site } from "@/lib/site";

export type InquiryKind = "contact" | "seller" | "order";

const kindLabel: Record<InquiryKind, string> = {
  contact: "Customer inquiry",
  seller: "Shop owner application",
  order: "Order request",
};

export type InquiryInput = {
  kind: InquiryKind;
  name: string;
  email: string;
  message: string;
  subject?: string;
};

export async function sendInquiry(input: InquiryInput) {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) {
    return { ok: false as const, status: 503, error: "Email is not configured." };
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `Petalswift <${site.email}>`;
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || site.email;
  const subject = input.subject?.trim() || `${kindLabel[input.kind]} from ${input.name}`;
  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: input.email,
    subject: `[Petalswift] ${subject}`,
    text: input.message,
  });

  if (error) {
    return { ok: false as const, status: 502, error: "Resend rejected the message." };
  }
  return { ok: true as const };
}
