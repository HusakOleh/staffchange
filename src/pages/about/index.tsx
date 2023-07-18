import style from './index.module.scss';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';
import VideoGallery from '@/components/layouts/VideoGallery/VideoGallery';
import { useRouter } from 'next/router';
import { getLocalizedText } from '@/helpers/getLocalizedText';

export default function About() {
  const { locale } = useRouter();
  const t = getLocalizedText(locale);

  return (
    <CommonPageLayout
      title={t.about.title1}
      subtitle={t.about.description1}
    >
      <div className={style.wrap}>
        <div className={style.bottom}>
          <VideoGallery />

          <h2 className={`typography_h3 ${style.title}`}>{t.about.title2}</h2>

          <p className={`typography_text`}>{t.about.description2}</p>
        </div>
      </div>
    </CommonPageLayout>
  );
}
