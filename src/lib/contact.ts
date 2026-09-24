export interface ContactPayload {
  fullName: string;
  email: string;
  company?: string;
  contactNumber?: string;
  lookingFor: string;
  details: string;
}

export type SubmitResult = { ok: true } | { ok: false; message: string };

/**
 * Sends the contact form payload to the /api/contact endpoint.
 *
 * The endpoint is intentionally unimplemented until a real email/CRM backend
 * is configured. We never fake a success: a success state is only shown when
 * this function resolves with `ok: true` after the backend confirms receipt.
 */
export async function submitContactMessage(
  payload: ContactPayload,
): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const message =
        data?.error ??
        "We couldn't send your message right now. Please try again or email us directly.";
      return { ok: false, message };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message:
        "We couldn't reach our servers. Please check your connection and try again.",
    };
  }
}