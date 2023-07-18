import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import style from './LanguageSelector.module.scss';

export default function LanguageSelector() {
  const router = useRouter();
  const { locale } = router;

  console.log(router);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
      >
        <option
          className="text-black"
          value="en"
        >
          EN
        </option>
        <option
          className="text-black"
          value="et"
        >
          ET
        </option>
        <option
          className="text-black"
          value="pl"
        >
          PL
        </option>
        <option
          className="text-black"
          value="ua"
        >
          UA
        </option>
        <option
          className="text-black"
          value="ru"
        >
          RU
        </option>{' '}
      </select>
    </>
  );
}
