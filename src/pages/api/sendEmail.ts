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


const devMail = 'husakoleh91@gmail.com';
const prodMail = 'info@staffchange.com';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { subject, message } = req.body;

    const mailOptions = {
      from: 'staffchange.adm@gmail.com',
      to: prodMail,
      subject: subject,
      text: message,
      // attachments: [
      //   {
      //     filename: 'pdfFileName.pdf', // Назва файлу на приймачі
      //     path: 'https://www.africau.edu/images/default/sample.pdf', // Шлях до завантаженого PDF-файлу на сервері
      //   },
      // ],
    };

    try {
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



























