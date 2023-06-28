import style from './LanguageSelector.module.scss';
import Link from 'next-intl/link';

import en from '@/icons/langIcon/en.svg';
import pl from '@/icons/langIcon/pl.svg';
import ru from '@/icons/langIcon/ru.svg';

export default function LanguageSelector() {
  return (
    <div>
      <Link
        href="/"
        locale="en"
      >
        English
      </Link>
      <br />
      <br />
      <Link
        href="/"
        locale="pl"
      >
        Poland
      </Link>
    </div>
  );
}
