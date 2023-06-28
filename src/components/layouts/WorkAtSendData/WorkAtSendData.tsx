import style from './WorkAtSendData.module.scss';
import SendForm from '@/components/layouts/SendForm/SendForm';

export default function WorkAtSendData () {

  return (
    <div
      className={style.WorkAtSendData}
    >
      <h5
        className={`
          ${style.WorkAtSendData__title}
          typography_h6
        `}
      >
        Join Hansavest
      </h5>
      <h5
        className={`
          ${style.WorkAtSendData__subTitle}
          typography_h4
        `}
      >
        Don’t hesitate to send us your CV. We will contact you shortly.
      </h5>

      <SendForm />
    </div>
  );
}