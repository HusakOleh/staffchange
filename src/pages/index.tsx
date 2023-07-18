import { useRouter } from 'next/router';
import style from '../styles/index.module.scss';
import Head from 'next/head';
import { getLocalizedText } from '@/helpers/getLocalizedText';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = getLocalizedText(locale);

  return (
    <div>
      <Head>
        <title>Staffchange</title>
        <meta
          name="keywords"
          content="ключові, слова"
        />
        <meta
          name="description"
          content="Це опис вашої сторінки"
        />
        <meta
          property="og:title"
          content="Ваш заголовок"
        />
        <meta
          property="og:description"
          content="Це опис вашої сторінки"
        />
        <meta
          property="og:image"
          content="URL до вашого зображення"
        />
      </Head>

      <div className={style.video}>
        <video
          src="./assets/video/main-bg.mp4"
          autoPlay={true}
          muted
          loop
        ></video>

        <div className={style.video__filter}>
          <p className={'typography_h6'}>{t.main.slogan}</p>
        </div>
      </div>

      <div className={style.wrap}>
        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>{t.main.title1}</h2>

          <p className={`typography_text`}>{t.main.description1}</p>
        </div>

        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>{t.main.title2}</h2>

          <p className={`typography_text`}>{t.main.description2}</p>
        </div>
      </div>
    </div>
  );
}
