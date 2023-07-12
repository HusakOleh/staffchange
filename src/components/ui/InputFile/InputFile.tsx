import style from './InputFile.module.scss';
import { ChangeEvent, useState, useRef, MouseEventHandler } from 'react';
import { setStateType } from '../../../types';
import { fileType } from '../../../types';
import Button from '../Button/Button';

type EventType = ChangeEvent<HTMLInputElement>;

interface Props {
  value: fileType;
  setValue: setStateType<fileType>;
}

export default function InputFile({ value, setValue }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('No file chosen');

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = (event: EventType) => {
    if (event.target.files?.length) {
      const selectedFile = event.target.files[0];
      setValue(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  return (
    <div className={style.wrap}>
      <p className={'typography_h5'}>Add your CV</p>

      <div className={style.inputWrap}>
        <Button onClick={handleButtonClick}>Choose File</Button>

        <p className={'typography_text'}>{fileName}</p>

        <input
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
        />
      </div>

      <p className={'typography_text'}>Max. file size: 2 MB.</p>
    </div>
  );
}
