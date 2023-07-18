import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable from 'formidable';

// Налаштування транспортера Nodemailer для відправки електронної пошти
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'staffchange.adm@gmail.com',
    pass: 'lbfcaqpassplebav',
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { subject, message } = req.body;

    // Налаштування деталей електронної пошти
    const mailOptions = {
      from: 'staffchange.adm@gmail.com',
      to: 'husakoleh91@gmail.com',
      subject: subject,
      text: message,
    };

    try {
      // Відправка електронної пошти
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
