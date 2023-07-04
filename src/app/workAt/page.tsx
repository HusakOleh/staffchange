'use client'
import style from '@/app/workAt/page.module.scss';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';
import WorkAtSendData from '@/components/layouts/WorkAtSendData/WorkAtSendData';
import JoinTeam from '@/components/layouts/JoinTeam/JoinTeam';
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import translations from "@/data/translations.json";

export default function WorkAt() {
  const { lang } = useContext(LangContext)

  // @ts-ignore
  const t: any = translations[lang].about;

  return (
    <CommonPageLayout
      title={t.title1}
      subtitle={t.description1}
    >
      <JoinTeam />

      {/*<WorkAtSendData />*/}
    </CommonPageLayout>
  );
}
