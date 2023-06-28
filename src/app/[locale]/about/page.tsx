import style from '@/app/[locale]/about/page.module.scss';
import { useTranslations } from 'next-intl';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';

export default function About() {
  const t = useTranslations('About');

  return (
    <CommonPageLayout
      title={'Staffchange: Partnership for Progress'}
      subtitle={
        'Providing client-oriented workforce solutions aimed at bolstering your business'
      }
    >
      {t('title')}
    </CommonPageLayout>
  );
}
