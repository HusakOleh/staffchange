import { useState } from 'react';

export default function ContactForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          message,
        }),
      });

      if (res.status === 200) {
        console.log('Email sent successfully');
        // Додайте код для обробки успішної відправки
      } else {
        console.log('Failed to send email');
        // Додайте код для обробки невдалої відправки
      }
    } catch (error) {
      console.error('Error:', error);
      // Додайте код для обробки помилки
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
