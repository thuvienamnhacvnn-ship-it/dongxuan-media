import { NextResponse } from "next/server";

/**
 * Demo form handler.
 * - Logs payload to server console (dev / mock).
 * - Replace with Resend, Nodemailer, or a CRM webhook before go-live.
 *
 * Configure later via env:
 *   RESEND_API_KEY, CONTACT_TO_EMAIL, SMTP_*
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload: Record<string, unknown> = {};
    const fileNames: string[] = [];

    formData.forEach((value, key) => {
      if (value instanceof File) {
        fileNames.push(`${value.name} (${value.size}b)`);
      } else {
        payload[key] = value;
      }
    });

    payload.files = fileNames;
    payload.receivedAt = new Date().toISOString();

    // Mock persistence — replace with email / DB
    console.info("[Đồng Xuân Media] Form submission (demo):", payload);

    // TODO: integrate email provider, e.g.:
    // await resend.emails.send({ from, to: process.env.CONTACT_TO_EMAIL, subject, html })

    return NextResponse.json({
      ok: true,
      message: "Received (demo mode — check server logs)",
    });
  } catch (e) {
    console.error("[quote API]", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
