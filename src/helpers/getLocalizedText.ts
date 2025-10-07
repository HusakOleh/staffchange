import ee from '../locales/ee.json';
import pl from '../locales/pl.json';
import ua from '../locales/ua.json';
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
    case 'ee':
      t = ee;
      break;
    case 'pl':
      t = pl;
      break;
    case 'ua':
      t = ua;
      break;
    default:
      t = en;
  }
  return t;
}
