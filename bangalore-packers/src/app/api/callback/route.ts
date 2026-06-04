import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone || phone.length < 10) {
      return NextResponse.json({ success: false, error: 'Invalid phone entry' }, { status: 400 });
    }

    console.log(`Callback lead received for phone number: ${phone}`);

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Callbacks <leads@yourdomain.com>',
        to: 'sales@yourdomain.com',
        subject: `☎️ Urgent Callback requested: ${phone}`,
        html: `<p>A user requested an urgent callback at phone number: <strong>${phone}</strong></p>`
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
