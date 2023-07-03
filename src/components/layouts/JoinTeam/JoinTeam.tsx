import { Fragment } from 'react';
import style from './JoinTeam.module.scss';
import teamPrinciples from '@/data/teamPrinciples.json';
import ListItemWithCheck from '@/components/ui/ListItemWithCheck/ListItemWithCheck';

export default function JoinTeam() {
  return (
    <div className={style.wrap}>
      <h2 className={`typography_h2 ${style.title}`}>Join our team!</h2>

      <p className={`typography_text`}>
        At our company, we believe in diversity. We embrace different opinions
        and perspectives, because the more perspectives there are, the more
        ideas there are, and the better the solution will be. We are a team of
        professionals who are unified by our shared goal of enhancing the
        development of the industrial sector. If you are interested in joining
        us, don&apos;t hesitate to reach out. Let us know in which field you can
        contribute.
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
