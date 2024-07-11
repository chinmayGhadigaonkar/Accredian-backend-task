import nodemailer from "nodemailer";

const sendEmail = async (fname, email, course, yname) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Amazing Course Recommendation for You!",
    text: `Hi ${fname},\n\nI hope this email finds you well. I recently came across a fantastic course called ${course} that I think would be perfect for you. It's a great opportunity to enhance your skills in ${course}.\n\nIf you're interested, you can check out more details and enroll here: https://accredian.com/.\n\nBest Regards,\n${yname}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export { sendEmail };
