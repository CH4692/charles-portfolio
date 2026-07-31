import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown; // honeypot
};

function asTrimmedString(value: unknown, max: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans leave them empty.
  if (asTrimmedString(body.company, 80)) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(body.name, MAX_NAME);
  const email = asTrimmedString(body.email, MAX_EMAIL);
  const message = asTrimmedString(body.message, MAX_MESSAGE);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return NextResponse.json(
      { error: 'Email service is not configured. Please try again later.' },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? 'charles@charlesheller.dev';
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Charles Heller Portfolio <onboarding@resend.dev>';

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, '', message].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again or email me directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
