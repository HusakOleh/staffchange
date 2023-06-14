'use client';
import { useState } from 'react';
import style from './Header.module.scss';
import MenuOpener from '@/components/ui/MenuOpener/MenuOpener';
import MobileMenu from '@/components/layouts/MobileMenu/MobileMenu';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
        lang
      </div>

      <Link
        href="/"
        className={`
          ${style.header_logo} 
        `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={'/assets/img/logo.png'}
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </Link>

      <ul
        className={`
          ${style.header_navMenu} 
        `}
      >
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <MenuOpener menuTrigger={menuTrigger} isOpen={isOpen} />

      <MobileMenu menuTrigger={menuTrigger} isOpen={isOpen} />
    </header>
  );
}
