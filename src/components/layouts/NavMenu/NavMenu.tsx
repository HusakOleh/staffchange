import style from './NavMenu.module.scss';
import navLink from '@/data/navLink.json';
import NavLink from '@/components/ui/NavLink/NavLink';
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import translations from "@/data/translations.json";

interface Props {
  callback?: () => void;
}

export default function NavMenu({ callback }: Props) {

  const { lang } = useContext(LangContext)

  // @ts-ignore
  const t: any = translations[lang].navLink;

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
            <NavLink href={link.link}>{t[link.name]}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
