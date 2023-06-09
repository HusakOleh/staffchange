import { roboto, poppins } from '@/utils/fonts';
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
          ${roboto.variable} 
          ${poppins.variable}
        `}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
