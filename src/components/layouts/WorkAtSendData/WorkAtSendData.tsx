import style from './WorkAtSendData.module.scss';
import SendForm from '@/components/layouts/SendForm/SendForm';
import { useRouter } from 'next/router';
import { getLocalizedText } from '@/helpers/getLocalizedText';

export default function WorkAtSendData() {
  const { locale } = useRouter();
  const t = getLocalizedText(locale);

  return (
    <div className={style.WorkAtSendData}>
      <h5
        className={`
          ${style.WorkAtSendData__title}
          typography_h6
        `}
      >
        {t.workAt.sendData.title}
      </h5>
      <h5
        className={`
          ${style.WorkAtSendData__subTitle}
          typography_h4
        `}
      >
        {t.workAt.sendData.subtitle}
      </h5>

      <SendForm />
    </div>
  );
}
