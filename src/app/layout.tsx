import { ReactNode } from 'react';
import { lato, openSans } from '@/utils/fonts';
import './globals.scss';
import style from './page.module.scss';

import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

// types
import { Metadata } from 'next';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Staffchange',
  description: '',
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      className={`
        ${lato.variable} 
        ${openSans.variable}
      `}
    >
      <body
        className={`
          ${style.container}
        `}
      >
        <Header />
        <main
          className={`
            mainContainer
            ${style.mainContent}
          `}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
