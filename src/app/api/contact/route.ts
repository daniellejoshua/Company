import { NextResponse } from "next/server";

import type { ContactPayload } from "@/lib/contact";

/**
 * Contact form submission endpoint.
 *
 * Integration point: connect this handler to an email service (Resend,
 * Nodemailer/SMTP, a CRM, or a database) and return a 2xx response ONLY after
 * the message has actually been accepted by that service. The dialog shows a
 * success state only when a 2xx is returned — it never fakes delivery.
 *
 * Until a backend is configured, this returns 501 and the dialog surfaces a
 * clear error instead of pretending the message was sent.
 */
export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  console.info("Contact form received (integration not configured yet):", {
    fullName: payload.fullName,
    email: payload.email,
    lookingFor: payload.lookingFor,
  });

  return NextResponse.json(
    {
      error:
        "We're not able to receive form messages just yet. Please email us at praxijade@gmail.com and we'll get back to you.",
    },
    { status: 501 },
  );
}