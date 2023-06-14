import style from './MobileMenu.module.scss';
import { useSwipeable } from 'react-swipeable';
import { setStateType } from '@/types';

interface Props {
  isOpen: boolean;
  menuTrigger: () => void;
}

export default function MobileMenu({isOpen, menuTrigger}: Props) {
  const swipeRight = useSwipeable({
    onSwipedRight: () => menuTrigger()
  })

  return (
    <div
      {...swipeRight}
      className={`
            ${style.mobileMenu} 
            ${isOpen ? style.mobileMenu_visible : ''}
          `}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur
      eos molestiae placeat reprehenderit sit, voluptate. Assumenda consequuntur
      eaque exercitationem in laboriosam, nam, necessitatibus nisi odit officiis
      porro quaerat unde.
    </div>
  );
}