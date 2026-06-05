import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// This safely initializes Resend only if the key exists
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, movingFrom, movingTo, moveDate, serviceType, itemsDescription } = body;

    console.log(`New moving lead received from: ${name}`);

    // Only send email if Resend is fully configured
    if (resend && process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Leads <leads@yourdomain.com>',
        to: 'sales@yourdomain.com',
        subject: `🔥 New High-Intent Lead: ${serviceType} - ${movingFrom} to ${movingTo}`,
        html: `
          <h3>New Quote Request Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>From:</strong> ${movingFrom}</p>
          <p><strong>To:</strong> ${movingTo}</p>
          <p><strong>Move Date:</strong> ${moveDate}</p>
          <p><strong>Service:</strong> ${serviceType}</p>
          <p><strong>Inventory/Notes:</strong> ${itemsDescription || 'None'}</p>
        `
      });
    }

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
