import { ComponentType } from 'react';
import '../styles/globals.scss';
import Header from '../components/layouts/Header/Header';
import Footer from '../components/layouts/Footer/Footer';

interface Props {
  Component: ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <div
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
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
