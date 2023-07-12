import React from 'react';
import style from './InputPhone.module.scss';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type Value = string | undefined;
import { setStateType } from '../../../types';

interface Props {
  value: Value;
  setValue: setStateType<Value>;
  valid: boolean;
}
export default function InputPhone({ value, setValue, valid }: Props) {
  return (
    <div className={style.wrap}>
      {!valid && (
        <p
          className={`
            typography_warning
            form-input__warning
          `}
        >
          {'Invalid phone number'}
        </p>
      )}

      <div
        className={`
        form-input
        ${!valid ? 'form-input_warning' : ''}
      `}
      >
        <PhoneInput
          international
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          defaultCountry="PL"
          className={style.input}
        />
      </div>
    </div>
  );
}
