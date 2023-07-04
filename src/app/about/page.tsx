'use client'
import style from '@/app/about/page.module.scss';
import CommonPageLayout from '@/components/layouts/CommonPageLayout/CommonPageLayout';
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import translations from "@/data/translations.json";

export default function About() {
  const { lang } = useContext(LangContext)

  // @ts-ignore
  const t: any = translations[lang].about;

  return (
    <CommonPageLayout
      title={t.title1}
      subtitle={t.description1}
    >

      <div className={style.wrap}>
        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            {t.title2}
          </h2>

          <p className={`typography_text`}>
            {t.description2}
          </p>
        </div>

      </div>

    </CommonPageLayout>
  );
}
