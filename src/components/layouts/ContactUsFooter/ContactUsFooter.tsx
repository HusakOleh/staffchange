import style from './ContactUsFooter.module.scss';

import contacts from '../../../data/contacts.json';
import Link from 'next/link';

import { contactIcons } from '../../../data/icons';

export default function ContactUsFooter() {
  return (
    <div className={style.contactUs}>
      <h3
        className={`
          typography_h4
          ${style.contactUs__title}
        `}
      >
        {'TEST'}
      </h3>

      <div
        className={`
          ${style.contactUs__contacts}
        `}
      >
        <ul
          className={`
          ${style.contactUs__address}
        `}
        >
          {contacts.addresses.map((el) => (
            <li key={el.id}>
              <Link
                href={el.link}
                target={'_blank'}
                className={`
                ${style.contactUs__addressItem}
              `}
              >
                <span
                  className={`
                  typography_h5
                  ${style.contactUs__addressTitle}
                `}
                >
                  {contactIcons.location}
                  {el?.country}
                  {` ${el?.city}`}
                </span>

                <span
                  className={`
                    typography_text
                    ${style.contactUs__addressDescription}
                  `}
                >
                  {el?.address}
                </span>
              </Link>

              {!!el.phone && (
                <Link
                  href={`tel:${el.phone}`}
                  className={`
                typography_text
                ${style.contactUs__phonesLink}
              `}
                >
                  {contactIcons.phone}
                  {el.phone}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <ul
          className={`
          ${style.contactUs__phones} 
        `}
        >
          {contacts.contacts.map((el) => (
            <li key={el.id}>
              <Link
                href={el.link}
                className={`
                typography_text
                ${style.contactUs__phonesLink}
              `}
              >
                {contactIcons[el.type]}
                {el.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
