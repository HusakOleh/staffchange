import style from './NavMenu.module.scss';
import navLink from '../../../data/navLink.json';
import NavLink from '../../ui/NavLink/NavLink';
import { useRouter } from 'next/router';
import { getLocalizedText } from '@/helpers/getLocalizedText';

interface Props {
  callback?: () => void;
}

interface NavLink {
  id: number;
  name: string;
  link: string;
}

export default function NavMenu({ callback }: Props) {
  const { locale } = useRouter();
  const t = getLocalizedText(locale);

  const closeMenu = (id: number) => {
    if (callback) {
      callback();
    }

    return;
  };

  return (
    <ul
      className={`
          ${style.mobileMenuList} 
        `}
    >
      {navLink.map((link: NavLink) => {
        return (
          <li
            key={link.id}
            onClick={() => closeMenu(link.id)}
          >
            <NavLink href={link.link}>{t.navLink[link.name]}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
