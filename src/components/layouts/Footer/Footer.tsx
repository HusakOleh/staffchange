import style from './Footer.module.scss';
import Link from 'next/link';
import ContactUsFooter from '@/components/layouts/ContactUsFooter/ContactUsFooter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`
        mainContainer_padding
        ${style.footer} 
      `}
    >
      <div
        className={`
          ${style.footer__info} 
        `}
      >
        {/*<Link*/}
        {/*  href="/"*/}
        {/*  className="logo"*/}
        {/*>*/}
        {/*  /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
        {/*  <img*/}
        {/*    src={'/assets/img/logo3.svg'}*/}
        {/*    alt="logo"*/}
        {/*  />*/}
        {/*</Link>*/}

        <ContactUsFooter />
      </div>

      <div
        className={`
          typography_text 
          ${style.footer__copyright} 
        `}
      >
        © Staffchange 2022 – {currentYear}
      </div>
    </footer>
  );
}
