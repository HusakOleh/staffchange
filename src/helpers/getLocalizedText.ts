import et from '../locales/et.json';
import pl from '../locales/pl.json';
import ua from '../locales/ua.json';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

interface LocalizedText {
  navLink: {
    [key: string]: string;
  };
  footer: {
    [key: string]: string;
  };
  main: {
    slogan: string;
    title1: string;
    description1: string;
    title2: string;
    description2: string;
  };
  about: {
    title1: string;
    description1: string;
    title2: string;
    description2: string;
  };
  workAt: {
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    teamPrinciples: Array<{
      id: number;
      title: string;
      content: string;
    }>;
    sendData: {
      [key: string]: string;
    };
  };
}
export function getLocalizedText(locale: string | undefined) {
  let t: LocalizedText;
  switch (locale) {
    case 'et':
      t = et;
      break;
    case 'pl':
      t = pl;
      break;
    case 'ua':
      t = ua;
      break;
    case 'ru':
      t = ru;
      break;
    default:
      t = en;
  }
  return t;
}
