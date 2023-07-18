import { Fragment } from 'react';
import style from './JoinTeam.module.scss';
import ListItemWithCheck from '@/components/ui/ListItemWithCheck/ListItemWithCheck';
import { useRouter } from 'next/router';
import { getLocalizedText } from '@/helpers/getLocalizedText';

export default function JoinTeam() {
  const { locale } = useRouter();
  const t = getLocalizedText(locale);

  const teamPrinciples = t.workAt.teamPrinciples;

  return (
    <div className={style.wrap}>
      <h2 className={`typography_h2 ${style.title}`}>{t.workAt.title2}</h2>

      <p className={`typography_text`}>{t.workAt.description2}</p>

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
                    {el.title}
                  </h3>
                  <p
                    className={`
                    typography_text
                    ${style.list__content}
                  `}
                  >
                    {el.content}
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
