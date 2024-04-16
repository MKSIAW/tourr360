import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider
      host: 'gmail',
      auth: {
        user: 'michellekyere@gmail.com',
        pass: 'Phoe.nix',
      },
    });

    // Create the email message
    const mailOptions = {
      from: 'michellekyere@gmail.com',
      to: 'michelle.siaw@st.gimpa.edu.gh',
      subject: 'New Message from Tour360 Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
