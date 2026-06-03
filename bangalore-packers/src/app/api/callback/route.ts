import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone || phone.length < 10) {
      return NextResponse.json({ success: false, error: 'Invalid phone entry' }, { status: 400 });
    }

    // Persist directly into database using Prisma Client
    await prisma.callbackRequest.create({
      data: { phone }
    });

    // Alert dispatch team immediately via email
    await resend.emails.send({
      from: 'Callbacks <leads@yourdomain.com>',
      to: 'sales@yourdomain.com',
      subject: `☎️ Urgent Callback requested: ${phone}`,
      html: `<p>A user requested an urgent callbacks call at phone marker number: <strong>${phone}</strong></p>`
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Database capture fault' }, { status: 500 });
  }
}