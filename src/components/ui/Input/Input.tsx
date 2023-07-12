import { ChangeEvent } from 'react';
import style from './Input.module.scss';

import { setStateType } from '../../../types';

type EventType = ChangeEvent<HTMLInputElement>;
type InputHandleChangeType = (event: EventType) => void;
type InputType = 'text' | 'email';

interface Props {
  type: InputType;
  value: string;
  placeholder: string;
  setValue: setStateType<string>;
  valid?: boolean;
}
export default function Input({
  type,
  value,
  placeholder,
  setValue,
  valid = true,
}: Props) {
  const handleChange: InputHandleChangeType = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={style.wrap}>
      {!valid && (
        <p
          className={`
            typography_warning
            form-input__warning
          `}
        >
          {'Invalid email'}
        </p>
      )}

      <input
        className={`
        typography_input
        form-input
        ${!valid ? 'form-input_warning' : ''}
      `}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
