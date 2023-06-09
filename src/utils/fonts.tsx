import { Roboto, Poppins } from '@next/font/google';

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--roboto-default',
});

export const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--poppins-default',
});
