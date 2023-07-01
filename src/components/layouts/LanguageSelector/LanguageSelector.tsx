import style from './LanguageSelector.module.scss';
import Link from 'next/link';

export default function LanguageSelector() {
  return (
    <div>
      <Link href="/">English</Link>
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
