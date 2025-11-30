import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // or your mail server
    port: 465,
    secure: true,
    auth: {
      user: "info@",
      pass: "fxPwq9!@giK32_x", // Use app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"PF DOCTOR" <yadavrahulvinod@gmail.com>`,
      to: "yadavrahulvinod@gmail.com",
      subject: "New PF Inquiry",
      html: `
        <h3>New PF Issue Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Issue:</b><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}
