import { ReactNode, useEffect } from 'react';
import style from './NavLink.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';


interface Props {
  children: ReactNode;
  href: string;
}

export default function NavLink({ children, href }: Props) {
  const router = useRouter()
  const isActive = router.pathname === href;

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
