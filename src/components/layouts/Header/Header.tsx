import { useState } from 'react';
import style from './Header.module.scss';
import MenuOpener from '../../ui/MenuOpener/MenuOpener';
import MobileMenu from '../MobileMenu/MobileMenu';
import Link from 'next/link';
import NavMenu from '../NavMenu/NavMenu';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

interface Props {
  [key: string]: string;
}

export default function Header({ ...props }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const menuTrigger: () => void = () => {
    setIsOpen(!isOpen);
    const body: HTMLBodyElement | null = document.querySelector('body');

    if (body) {
      body.classList.toggle('bodyLock');
    }
  };

  return (
    <header
      className={`
        mainContainer_padding
        ${style.header} 
      `}
    >
      <div
        className={`
          ${style.header_lang} 
        `}
      >
        <LanguageSelector />
      </div>

      <Link
        // onClick={() => menuTrigger()}
        href="/"
        className="logo"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={'/assets/img/logo3.svg'}
          alt="logo"
        />
      </Link>

      <div
        className={`
          ${style.header_navMenu} 
        `}
      >
        <NavMenu />
      </div>

      <MenuOpener
        menuTrigger={menuTrigger}
        isOpen={isOpen}
      />

      <MobileMenu
        menuTrigger={menuTrigger}
        isOpen={isOpen}
      />
    </header>
  );
}
