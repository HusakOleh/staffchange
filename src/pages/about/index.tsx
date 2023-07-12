import style from './index.module.scss';
import CommonPageLayout from '../../components/layouts/CommonPageLayout/CommonPageLayout';
// import VideoGallery from "@/components/layouts/VideoGallery/VideoGallery";

export default function About() {
  return (
    <CommonPageLayout
      title={'TEST'}
      subtitle={'TEST'}
    >
      <div className={style.wrap}>
        <div className={style.bottom}>
          {/*<VideoGallery />*/}

          <h2 className={`typography_h3 ${style.title}`}>{'TEST'}</h2>

          <p className={`typography_text`}>{'TEST'}</p>
        </div>
      </div>
    </CommonPageLayout>
  );
}
