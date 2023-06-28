'use client'
import React, {useState, MouseEvent, FormEventHandler } from 'react';
import style from './SendForm.module.scss';
import Input from '@/components/ui/Input/Input';
import InputPhone from '@/components/ui/InputPhone/InputPhone';

import { isValidPhoneNumber } from 'react-phone-number-input';
import TextArea from '@/components/ui/TextArea/TextArea';
import InputFile from "@/components/ui/InputFile/InputFile";
import Button from "@/components/ui/Button/Button";

import { fileType } from "@/types";

export default function SendForm () {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
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
  }


  const handleSubmit: FormEventHandler<HTMLFormElement> = (event ) => {
    event.preventDefault();

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const localValidEmail = emailRegEx.test(email);
    const localValidPhone = (!!phone && isValidPhoneNumber(phone))


    if(localValidEmail && localValidPhone) {
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
        placeholder={'Name'}
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
        placeholder={'Additional info'}
        setValue={setInfo}
      />

      <InputFile
        value={file}
        setValue={setFile}
      />



      <Button
        type='submit'
      >
        Send
      </Button>
    </form>
  );
}