import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Hey from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({
      status: true,
      msg: "Message sent to me successfully.",
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: false,
      msg: "Something went wrong",
    });
  }
}
