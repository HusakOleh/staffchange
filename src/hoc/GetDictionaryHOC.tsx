import { Children, isValidElement, cloneElement, ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';

// type DictionaryKey = keyof typeof dictionary;
// interface Namespace {
//   [key: string]: string;
// }

interface Props {
  children: ReactNode;
  namespace: string;
}

const GetDictionaryHOC = ({ children, namespace }: Props) => {
  // const locale = useLocale();
  // const dictionary = require(`../messages/${locale}.json`);
  // const message = dictionary[namespace];

  const t = useTranslations(namespace);
  // const message: Namespace = { ...dictionary[namespace] };
  //
  // Object.keys(message).forEach((key, i, arr) => {
  //   message[key] = t(key);
  // });

  const message = { main: t('main') };

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, message);
        }
        return child;
      })}
    </>
  );
};

export default GetDictionaryHOC;
