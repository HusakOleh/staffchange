'use client'
import { Fragment, useContext } from "react";
import style from './JoinTeam.module.scss';
import teamPrinciples from '@/data/teamPrinciples.json';
import ListItemWithCheck from '@/components/ui/ListItemWithCheck/ListItemWithCheck';
import { LangContext } from "@/context/LangContext";
import translations from "@/data/translations.json";

export default function JoinTeam() {
  const { lang } = useContext(LangContext)

  // @ts-ignore
  const t: any = translations[lang].workAt;

  return (
    <div className={style.wrap}>
      <h2 className={`typography_h2 ${style.title}`}>{t.title2}</h2>

      <p className={`typography_text`}>
        {t.description2}
      </p>

      <ul
        className={`
          typography_h5
          ${style.list}
        `}
      >
        {teamPrinciples.map((el) => {
          return (
            <Fragment key={el.id}>
              <ListItemWithCheck>
                <div className={style.list__item}>
                  <h3
                    className={`
                    typography_h5
                    ${style.list__title}
                  `}
                  >
                    {t.teamPrinciples[el.id].title}
                  </h3>
                  <p
                    className={`
                    typography_text
                    ${style.list__content}
                  `}
                  >
                    {t.teamPrinciples[el.id].content}
                  </p>
                </div>
              </ListItemWithCheck>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
