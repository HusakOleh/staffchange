import style from './NavMenu.module.scss';
import navLink from '../../../data/navLink.json';
import NavLink from '../../ui/NavLink/NavLink';

interface Props {
  callback?: () => void;
}

export default function NavMenu({ callback }: Props) {
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
      {navLink.map((link) => {
        return (
          <li
            key={link.id}
            onClick={() => closeMenu(link.id)}
          >
            <NavLink href={link.link}>{'TEST'}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
