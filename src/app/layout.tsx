import { lato, openSans } from '@/utils/fonts';
import './globals.scss';

import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

// types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staffchange',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`
          ${lato.variable} 
          ${openSans.variable}
        `}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
