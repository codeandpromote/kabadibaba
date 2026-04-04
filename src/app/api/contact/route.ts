import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, city, scrapType, preferredDate, message } = body;

    if (!name || !phone || !city || !scrapType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
          .header { background: linear-gradient(135deg, #ff9933, #e07a00); padding: 24px 32px; }
          .header h1 { color: white; margin: 0; font-size: 22px; }
          .header p { color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px; }
          .body { padding: 32px; }
          .field { margin-bottom: 16px; }
          .label { font-size: 12px; text-transform: uppercase; color: #888; font-weight: 600; letter-spacing: 0.5px; }
          .value { font-size: 16px; color: #1a1a1a; margin-top: 4px; font-weight: 500; }
          .divider { border: none; border-top: 1px solid #eee; margin: 20px 0; }
          .footer { background: #faf7f2; padding: 16px 32px; font-size: 12px; color: #888; }
          .badge { display: inline-block; background: #fff8ee; color: #e07a00; border: 1px solid #ffe4b3; border-radius: 4px; padding: 4px 10px; font-size: 13px; font-weight: 600; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🗑️ New Pickup Request – KabadiBaba</h1>
          <p>A customer wants to schedule a scrap pickup</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Customer Name</div>
            <div class="value">${name}</div>
          </div>
          <hr class="divider" />
          <div class="field">
            <div class="label">Phone Number</div>
            <div class="value"><a href="tel:${phone}" style="color:#ff9933;">${phone}</a></div>
          </div>
          <hr class="divider" />
          <div class="field">
            <div class="label">City</div>
            <div class="value">${city}</div>
          </div>
          <hr class="divider" />
          <div class="field">
            <div class="label">Type of Scrap</div>
            <div class="badge">${scrapType}</div>
          </div>
          ${
            preferredDate
              ? `<hr class="divider" />
          <div class="field">
            <div class="label">Preferred Pickup Date</div>
            <div class="value">${preferredDate}</div>
          </div>`
              : ""
          }
          ${
            message
              ? `<hr class="divider" />
          <div class="field">
            <div class="label">Additional Message</div>
            <div class="value">${message}</div>
          </div>`
              : ""
          }
          <hr class="divider" />
          <p style="font-size:13px; color:#555; margin-top: 24px;">
            📞 Call back: <a href="tel:${phone}" style="color:#ff9933;">${phone}</a><br/>
            💬 WhatsApp: <a href="https://wa.me/91${phone.replace(/\D/g, '')}" style="color:#138808;">Open Chat</a>
          </p>
        </div>
        <div class="footer">
          This lead was submitted via the KabadiBaba website contact form. Reply promptly for best conversion!
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"KabadiBaba Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || "hello@kabadibaba.co.in",
      subject: `🗑️ New Pickup Request – ${name} (${city}) | KabadiBaba`,
      html: emailHtml,
      replyTo: phone,
    });

    const whatsappText = encodeURIComponent(
      `Hi KabadiBaba! 👋\n\nI want to schedule a scrap pickup.\n\n*Name:* ${name}\n*City:* ${city}\n*Scrap Type:* ${scrapType}${preferredDate ? `\n*Preferred Date:* ${preferredDate}` : ""}${message ? `\n*Note:* ${message}` : ""}\n\nPlease confirm my booking. Thank you!`
    );

    return NextResponse.json({
      success: true,
      whatsappUrl: `https://wa.me/919424612100?text=${whatsappText}`,
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try WhatsApp or call us directly." },
      { status: 500 }
    );
  }
}
