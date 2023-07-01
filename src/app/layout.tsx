import { ReactNode } from 'react';
import { lato, openSans } from '@/utils/fonts';
import './globals.scss';
import style from './page.module.scss';

import { notFound } from 'next/navigation';

import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

import { Metadata } from 'next';

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'Staffchange',
  description: '',
};

export default function Layout({ children, params }: Props) {
  return (
    <html
      className={`
        ${lato.variable} 
        ${openSans.variable}
      `}
    >
      <body
        className={`
          container
        `}
      >
        <Header />

        <main
          className={`
            mainContainer
            mainContent
          `}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
