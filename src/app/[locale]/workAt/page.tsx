import style from '@/app/[locale]/workAt/page.module.scss';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';
import WorkAtSendData from '@/components/layouts/WorkAtSendData/WorkAtSendData';
import JoinTeam from "@/components/layouts/JoinTeam/JoinTeam";

export default function WorkAt() {
  return (
    <CommonPageLayout
      title={'Staffchange: Partnership for Progress'}
      subtitle={
        'Providing client-oriented workforce solutions aimed at bolstering your business'
      }
    >
      <JoinTeam />

      <WorkAtSendData />
    </CommonPageLayout>
  );
}
