import { ReactNode, useEffect } from 'react';
import style from './NavLink.module.scss';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface Props {
  children: ReactNode;
  href: string;
}

export default function NavLink({ children, href }: Props) {
  function useActivePath() {
    const path = usePathname().split('/');

    return path;
  }

  const isActive = href === href;

  return (
    <Link
      className={`
        typography_nav
        ${style.navLink}
        ${isActive ? style.navLink_active : ''}
      `}
      href={href}
    >
      {children}
    </Link>
  );
}
