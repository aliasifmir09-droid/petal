import { sendInquiry, type InquiryKind } from "@/lib/inquiries";

const inquiryKinds = ["contact", "seller", "order"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function messageText(value: unknown) {
  return String(value ?? "").trim().slice(0, 5000);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object") {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (text(body.company, 80)) {
    return Response.json({ ok: true });
  }

  const kind = text(body.kind, 20);
  if (!inquiryKinds.includes(kind as InquiryKind)) {
    return Response.json({ error: "Unknown inquiry type." }, { status: 400 });
  }

  const name = text(body.name, 120);
  const email = text(body.email, 200);
  const message = messageText(body.message);
  const subject = text(body.subject, 140);

  if (!name || !emailPattern.test(email) || !message) {
    return Response.json(
      { error: "Name, a valid email, and a message are required." },
      { status: 400 },
    );
  }

  const result = await sendInquiry({
    kind: kind as InquiryKind,
    name,
    email,
    message,
    subject,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }
  return Response.json({ ok: true });
}
