import style from '@/app/about/page.module.scss';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';

export default function About() {
  return (
    <CommonPageLayout
      title={'Staffchange: Partnership for Progress'}
      subtitle={
        'Providing client-oriented workforce solutions aimed at bolstering your business'
      }
    >

      <div className={style.wrap}>
        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            The Staffchange Advantage: A Personalized Approach to Your Job Search Journey
          </h2>

          <p className={`typography_text`}>
            The company Staffchange is an energetic team of professionals in the field of employment. Our experts have years of experience working with companies of various scales and industries, and understand what&apos;s important for a successful job search.
            We work with all sides - from candidates looking for a job to employers looking for talented employees. Our goal is to bring together perfect matches so that both parties benefit maximally.
            We strive to create a personal and professional approach for each client, providing high-quality services and offering individual solutions.
          </p>
        </div>

      </div>

    </CommonPageLayout>
  );
}
