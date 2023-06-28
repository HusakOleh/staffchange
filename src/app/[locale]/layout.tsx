import { ReactNode } from 'react';
import { lato, openSans } from '@/utils/fonts';
import './globals.scss';
import style from './page.module.scss';

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import GetDictionaryHOC from '@/hoc/GetDictionaryHOC';
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

export default function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html
      lang={locale}
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
        <GetDictionaryHOC namespace={'Header'}>
          <Header />
        </GetDictionaryHOC>

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
