import { ChangeEvent } from 'react';
import style from './TextArea.module.scss';

import { setStateType } from '../../../types';

type EventType = ChangeEvent<HTMLTextAreaElement>;
type InputHandleChangeType = (event: EventType) => void;

interface Props {
  value: string;
  placeholder: string;
  setValue: setStateType<string>;
}
export default function TextArea({ value, placeholder, setValue }: Props) {
  const handleChange: InputHandleChangeType = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={`
        typography_input
        form-input
        ${style.wrap}
      `}
    >
      <textarea
        className={`
          ${style.textArea}
        `}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
