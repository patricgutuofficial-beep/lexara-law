import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, area, office, source, message } = body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'patricgutu.official@gmail.com',
      subject: `New Enquiry from ${name} — ${area}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C; border-bottom: 1px solid #C9A84C; padding-bottom: 12px;">
            New Client Enquiry — Lexara Law
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0; color: #111;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Phone</td>
              <td style="padding: 8px 0; color: #111;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Area of Law</td>
              <td style="padding: 8px 0; color: #111;">${area}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Preferred Office</td>
              <td style="padding: 8px 0; color: #111;">${office}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Source</td>
              <td style="padding: 8px 0; color: #111;">${source}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #111;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
