import style from './InputFile.module.scss';
import { ChangeEvent, useState, useRef, MouseEventHandler } from 'react';
import { setStateType } from '@/types';
import { fileType } from '@/types';
import Button from '@/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { getLocalizedText } from '@/helpers/getLocalizedText';

type EventType = ChangeEvent<HTMLInputElement>;

interface Props {
  value: fileType;
  setValue: setStateType<fileType>;
}

export default function InputFile({ value, setValue }: Props) {
  const { locale } = useRouter();
  const t = getLocalizedText(locale);

  const fileStatus = t.workAt.sendData.fileStatus;

  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState(`${fileStatus}`);

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
      <p className={'typography_h5'}>{t.workAt.sendData.fileDescription}</p>

      <div className={style.inputWrap}>
        <Button onClick={handleButtonClick}>
          {t.workAt.sendData.fileButton}
        </Button>

        <p className={'typography_text'}>{fileName}</p>

        <input
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
        />
      </div>

      <p className={'typography_text'}>{t.workAt.sendData.fileLimit}</p>
    </div>
  );
}
