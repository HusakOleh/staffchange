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
          content="Staffchange is your trusted partner in job search and employment. We match job-seekers with employers in various sectors, providing high-quality services, innovative solutions, and personalized support. Join our community today and take the next step in your career!"
        />
        <meta
          property="og:title"
          content="Welcome to Staffchange - Your Reliable Partner in Job Search and Employment!"
        />
        <meta
          property="og:description"
          content="Staffchange is a market leader in the employment industry. We specialize in finding ideal job opportunities for candidates, working with diverse companies across various sectors. We're committed to your career growth, providing personal support and guidance for your job search. Join us today!"
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
