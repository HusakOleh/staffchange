import { Fragment } from 'react';
import style from './JoinTeam.module.scss';
import teamPrinciples from '../../../data/teamPrinciples.json';
import ListItemWithCheck from '../../ui/ListItemWithCheck/ListItemWithCheck';

export default function JoinTeam() {
  return (
    <div className={style.wrap}>
      <h2 className={`typography_h2 ${style.title}`}>{'TEST'}</h2>

      <p className={`typography_text`}>{'TEST'}</p>

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
                    {'TEST'}
                  </h3>
                  <p
                    className={`
                    typography_text
                    ${style.list__content}
                  `}
                  >
                    {'TEST'}
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
