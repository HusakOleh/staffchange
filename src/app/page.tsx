'use client'
import {useContext} from "react";
import style from './page.module.scss';
import teamPrinciples from '@/data/teamPrinciples.json';
import ListItemWithCheck from '@/components/ui/ListItemWithCheck/ListItemWithCheck';

import translations from '@/data/translations.json';
import { LangContext } from "@/context/LangContext";

export default function Home() {
  const { lang } = useContext(LangContext)

  // @ts-ignore
  const t: any = translations[lang].main;

  return (
    <>
      <div className={style.video}>
        <video
          src="./assets/video/main-bg.mp4"
          autoPlay={true}
          muted
          loop
        >

        </video>


        <div
          className={style.video__filter}
        >
          <p
            className={'typography_h6'}
          >
            {t.slogan}
          </p>
        </div>
      </div>


      <div className={style.wrap}>
        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            {t.title1}
          </h2>

          <p className={`typography_text`}>
            {t.description1}
          </p>
        </div>

        <div className={style.bottom}>
          <h2 className={`typography_h3 ${style.title}`}>
            {t.title2}
          </h2>

          <p className={`typography_text`}>
            {t.description2}
          </p>
        </div>
      </div>
    </>

  );
}
