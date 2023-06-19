import { ReactElement } from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import {
  FaViber,
  FaTelegramPlane,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

interface contactIconsType {
  [key: string]: ReactElement;
}

export const contactIcons: contactIconsType = {
  phone: <MdPhone />,
  mail: <MdEmail />,
  viber: <FaViber />,
  whatsapp: <FaWhatsapp />,
  telegram: <FaTelegramPlane />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  location: <MdLocationOn />,
};
