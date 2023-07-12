import { ReactNode } from 'react';
import style from './ListItemWithCheck.module.scss';
import { FaCheck } from 'react-icons/fa';

interface Props {
  children: ReactNode;
}

export default function ListItemWithCheck({ children }: Props) {
  return (
    <li className={style.listItem}>
      <FaCheck className={style.check} />

      <div>{children}</div>
    </li>
  );
}
