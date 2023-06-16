import styles from './MenuOpener.module.scss';

interface Props {
  isOpen: boolean;
  menuTrigger: () => void;
}

export default function MenuOpener({ isOpen, menuTrigger }: Props) {
  return (
    <div
      className={styles.menuOpener}
      onClick={() => menuTrigger()}
    >
      <span
        className={`
        ${styles.menuOpener__item}
        ${isOpen ? styles.menuOpener__item_1 : ''}
      `}
      ></span>
      <span
        className={`
        ${styles.menuOpener__item}
        ${isOpen ? styles.menuOpener__item_2 : ''}
      `}
      ></span>
      <span
        className={`
        ${styles.menuOpener__item}
        ${isOpen ? styles.menuOpener__item_3 : ''}
      `}
      ></span>
    </div>
  );
}
