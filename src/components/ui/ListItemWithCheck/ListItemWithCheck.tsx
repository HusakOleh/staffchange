import { ReactNode } from 'react';
import style from './ListItemWithCheck.module.scss';
import { FaCheck } from 'react-icons/fa';

interface Props {
  children: ReactNode;
  key: string | number;
}

export default function ListItemWithCheck({ children, key }: Props) {
  return (
    <li
      key={key}
      className={style.listItem}
    >
      <FaCheck className={style.check} />

      <div>{children}</div>
    </li>
  );
}
