import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailptions = {
      from: "example@gmail.com",
      to: email,
      subject:
        emailType == "verify" ? "Verify your email" : "Reset your passward", // Subject line
      html: "<b>Hello world?</b>", // html body
    };

    const mailResponse = await transporter.sendMail(mailptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
