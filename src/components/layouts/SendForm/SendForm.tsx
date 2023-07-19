import React, { useState, MouseEvent, FormEventHandler } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import style from './SendForm.module.scss';
import Input from '@/components/ui/Input/Input';
import InputPhone from '@/components/ui/InputPhone/InputPhone';
import TextArea from '@/components/ui/TextArea/TextArea';
import InputFile from '@/components/ui/InputFile/InputFile';
import Button from '@/components/ui/Button/Button';
import { fileType } from '@/types';
import { useRouter } from 'next/router';
import { getLocalizedText } from '@/helpers/getLocalizedText';

export default function SendForm() {
  const { locale } = useRouter();
  const t = getLocalizedText(locale);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState<string | undefined>('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [file, setFile] = useState<fileType>(null);

  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  const clearState = () => {
    setName('');
    setPhone('');
    setEmail('');
    setInfo('');
    setFile(null);
    setValidEmail(true);
    setValidPhone(true);
  };

  const sendEmail = async () => {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `CV ${name}`,
          message: `
              Name: ${name}
              Phone: ${phone}
              Email: ${email}
              Info: ${info}
            `,
          file,
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const localValidEmail = emailRegEx.test(email);
    const localValidPhone = !!phone && isValidPhoneNumber(phone);

    if (localValidEmail && localValidPhone) {
      await sendEmail();
      console.log(name, phone, email, info, file);
      clearState();
    } else {
      setValidEmail(localValidEmail);
      setValidPhone(localValidPhone);

      console.log('NOT VALID');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={style.form}
      noValidate
    >
      <Input
        type={'text'}
        value={name}
        placeholder={t.workAt.sendData.name}
        setValue={setName}
      />
      <InputPhone
        value={phone}
        setValue={setPhone}
        valid={validPhone}
      />
      <Input
        type={'email'}
        value={email}
        placeholder={'Email'}
        setValue={setEmail}
        valid={validEmail}
      />

      <TextArea
        value={info}
        placeholder={t.workAt.sendData.textArea}
        setValue={setInfo}
      />

      <InputFile
        value={file}
        setValue={setFile}
      />

      <Button type="submit">{t.workAt.sendData.submit}</Button>
    </form>
  );
}