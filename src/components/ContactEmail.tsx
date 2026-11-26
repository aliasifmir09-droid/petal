"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type ContactEmailProps = {
  className?: string;
  subject?: string;
  body?: string;
  /** Visible label before the address, e.g. "Email us at " */
  prefix?: string;
  children?: React.ReactNode;
};

/**
 * Builds the address in the browser so static HTML does not expose a
 * harvestable plain-text mailto/email for scrapers (SEOptimer).
 */
export function ContactEmail({
  className,
  subject,
  body,
  prefix,
  children,
}: ContactEmailProps) {
  const [href, setHref] = useState<string | null>(null);
  const [label, setLabel] = useState(`${site.emailUser} [at] ${site.emailDomain}`);

  useEffect(() => {
    const email = `${site.emailUser}@${site.emailDomain}`;
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const qs = params.toString();
    setHref(`mailto:${email}${qs ? `?${qs}` : ""}`);
    setLabel(email);
  }, [subject, body]);

  if (!href) {
    return (
      <span className={className}>
        {prefix}
        {children ?? label}
      </span>
    );
  }

  return (
    <a href={href} className={className}>
      {prefix}
      {children ?? label}
    </a>
  );
}
