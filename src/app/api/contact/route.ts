import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (!resendApiKey) {
    // If no API key is provided, return 503 to trigger the graceful fallback in the UI
    return NextResponse.json(
      { error: 'Service Unavailable - Email service not configured.' },
      { status: 503 }
    );
  }

  try {
    const data = await request.json();
    const { name, phone, area, interest, message, honeypot } = data;

    // Spam protection
    if (honeypot) {
      return NextResponse.json({ success: true }); // Silent fail for bots
    }

    if (!name || !phone || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Area:</strong> ${area || '-'}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br/>') : '-'}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'gpapadakisret@gmail.com',
        reply_to: 'gpapadakisret@gmail.com', // Will be changed later if user provides email
        subject: `New Lead: ${interest} - ${name}`,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
