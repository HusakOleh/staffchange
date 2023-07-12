import style from './index.module.scss';
import CommonPageLayout from '../../components/layouts/CommonPageLayout/CommonPageLayout';
import WorkAtSendData from '../../components/layouts/WorkAtSendData/WorkAtSendData';
import JoinTeam from '../../components/layouts/JoinTeam/JoinTeam';

export default function WorkAt() {
  return (
    <>
      <JoinTeam />
      <WorkAtSendData />
    </>
  );
}
