import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Landing Page" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: "Novo Lead Capturado 🚀",
      text: `Novo e-mail cadastrado: ${email}`,
      html: `<h2>Novo Lead</h2><p><b>E-mail:</b> ${email}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
