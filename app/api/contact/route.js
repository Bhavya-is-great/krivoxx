import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_LOGIN,
        pass: process.env.BREVO_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

function getClientEmailHTML({ name, email, phone, coName, contact, subject, message }) {
    return `
<div style="font-family: Segoe UI, Arial, sans-serif; background:#f5f5f7; padding:40px 20px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:14px; padding:32px; box-shadow:0 10px 30px rgba(0,0,0,0.06);">

    <div style="margin-bottom:18px;">
      <span style="font-size:13px; font-weight:600; letter-spacing:1px; color:#8a51fe;">
        KRIVOXX
      </span>
    </div>

    <h2 style="margin:0 0 10px; color:#1d1d1d;">Hey ${name} 👋</h2>
    <p style="margin:0 0 22px; color:#555; font-size:15px; line-height:1.6;">
      Thanks for reaching out to us. Your message has been received successfully.
      Our team will contact you shortly.
    </p>

    <div style="margin:18px 0; padding:18px; background:#fafafa; border-radius:10px; border:1px solid #eee;">
      <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin:6px 0;"><strong>Email:</strong> ${email}</p>
      <p style="margin:6px 0;"><strong>Phone:</strong> ${phone}</p>
      <p style="margin:6px 0;"><strong>Company:</strong> ${coName}</p>
      <p style="margin:6px 0;"><strong>Preferred Contact Time:</strong> ${contact}</p>
      <p style="margin:6px 0;"><strong>Subject:</strong> ${subject}</p>
    </div>

    <div style="margin-top:14px;">
      <p style="margin-bottom:6px;"><strong>Your Message:</strong></p>
      <div style="white-space:pre-wrap; font-size:14px; line-height:1.6; color:#444; background:#f5edff; padding:15px; border-radius:8px;">
        ${message}
      </div>
    </div>

    <p style="margin-top:26px; font-size:14px; color:#666;">
      Appreciate your time. Talk soon ✨
    </p>

    <div style="margin-top:28px; font-size:12px; color:#999;">
      — Team KRIVOXX
    </div>
  </div>
</div>
`;
}

function getOwnerEmailHTML({ name, email, phone, coName, contact, subject, message }) {
    return `
<div style="font-family: Segoe UI, Arial, sans-serif; background:#f5f5f7; padding:40px 20px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:14px; padding:32px; box-shadow:0 10px 30px rgba(0,0,0,0.06);">

    <div style="margin-bottom:18px;">
      <span style="font-size:13px; font-weight:600; letter-spacing:1px; color:#8a51fe;">
        KRIVOXX • New Lead
      </span>
    </div>

    <h2 style="margin:0 0 10px; color:#1d1d1d;">New Contact Form Submission 🚀</h2>
    <p style="margin:0 0 22px; color:#555; font-size:15px;">
      A visitor submitted the contact form.
    </p>

    <div style="margin:18px 0; padding:18px; background:#fafafa; border-radius:10px; border:1px solid #eee;">
      <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin:6px 0;"><strong>Email:</strong> ${email}</p>
      <p style="margin:6px 0;"><strong>Phone:</strong> ${phone}</p>
      <p style="margin:6px 0;"><strong>Company:</strong> ${coName}</p>
      <p style="margin:6px 0;"><strong>Contact Time:</strong> ${contact}</p>
      <p style="margin:6px 0;"><strong>Subject:</strong> ${subject}</p>
    </div>

    <div style="margin-top:14px;">
      <p style="margin-bottom:6px;"><strong>Message:</strong></p>
      <div style="white-space:pre-wrap; font-size:14px; line-height:1.6; color:#444; background:#f5edff; padding:15px; border-radius:8px;">
        ${message}
      </div>
    </div>

    <div style="margin-top:28px; font-size:12px; color:#999;">
      KRIVOXX Contact System
    </div>
  </div>
</div>
`;
}

export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, phone, coName, contact, subject, message } = body;

        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { message: "Missing required fields." },
                { status: 400 }
            );
        }

        const ownerMail = {
            from: `"KRIVOXX" <${process.env.TRANSACTIONAL_DOMAIN}>`,
            to: process.env.OWNER_EMAIL,
            replyTo: email,
            subject: `New Lead: ${subject}`,
            html: getOwnerEmailHTML({
                name,
                email,
                phone,
                coName,
                contact,
                subject,
                message,
            }),
        };

        const clientMail = {
            from: `"KRIVOXX" <${process.env.TRANSACTIONAL_DOMAIN}>`,
            to: email,
            subject: `We received your message`,
            html: getClientEmailHTML({
                name,
                email,
                phone,
                coName,
                contact,
                subject,
                message,
            }),
        };

        await Promise.all([
            transporter.sendMail(ownerMail),
            transporter.sendMail(clientMail),
        ]);

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );

    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Failed to send contact email." },
            { status: 500 }
        );
    }
}