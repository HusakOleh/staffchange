import {useState, useRef, useEffect, MouseEvent} from 'react';
import {useRouter} from 'next/router';
import style from './LanguageSelector.module.scss';
import Image from 'next/image';



const lang = [
  {
    name: 'English',
    locale: 'en'
  },
  {
    name: 'Eesti keel',
    locale: 'ee'
  },
  {
    name: 'Polski',
    locale: 'pl'
  },
  {
    name: 'Українська',
    locale: 'ua'
  },
  {
    name: 'русский',
    locale: 'ru'
  }
]


export default function LanguageSelector() {
  const router = useRouter();
  const {locale, defaultLocale} = router;

  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);


  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (dropdownBottomRef.current) {
      setHeight(dropdownBottomRef.current.offsetHeight);
    }

  }, [dropdownBottomRef.current])

  const handleClickOutside = (e: globalThis.MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, {locale});
  };

  const currentLang = lang.find(el => el.locale === locale)?.name;




  return (
    <>
      <div
        ref={dropdownRef}
        className={style.dropdown}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`${style.dropdown__top} ${style.item}`}
        >
          <p
            className={'typography_text'}
          >
            {currentLang}
          </p>


          <Image
            src={`../assets/img/icons/langIcon/${locale}.svg`}
            alt="Picture of the author"
            width={20}
            height={20}
          />
        </div>





        <div
          style={{height: isActive ? `${height}px` : '0'}}
          className={style.dropdown__bottom}
        >
          <div           ref={dropdownBottomRef}>
            {lang
              .filter(el => el.locale !== locale)
              .map((el, index) => {

                return (
                  <>
                    <div
                      key={index}
                      className={`${style.dropdown__top} ${style.item}`}
                      onClick={() => {
                        changeLanguage(el.locale);
                      }}
                    >
                      <p
                        className={'typography_text'}
                      >
                        {el.name}
                      </p>


                      <Image
                        src={`../assets/img/icons/langIcon/${el.locale}.svg`}
                        alt={el.name}
                        width={20}
                        height={20}
                      />
                    </div>
                  </>
                )
              })}
          </div>
        </div>
      </div>


    </>
  );
}
