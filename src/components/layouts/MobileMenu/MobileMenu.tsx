import style from './MobileMenu.module.scss';
import { useSwipeable } from 'react-swipeable';

import NavMenu from '../NavMenu/NavMenu';

interface Props {
  isOpen: boolean;
  menuTrigger: () => void;
}

export default function MobileMenu({ isOpen, menuTrigger }: Props) {
  const swipeRight = useSwipeable({
    onSwipedRight: () => menuTrigger(),
  });

  return (
    <div
      className={`
        ${style.mobileMenu} 
        ${isOpen ? style.mobileMenu_visible : ''}
      `}
    >
      <div
        className={`
          ${style.mobileMenu__header} 
        `}
      ></div>

      <div
        {...swipeRight}
        className={`
          ${style.mobileMenu__mainContent} 
        `}
      >
        <NavMenu callback={menuTrigger} />
      </div>
    </div>
  );
}
