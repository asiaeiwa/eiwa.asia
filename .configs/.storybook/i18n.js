import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonVI from '../../public/locales/vi/common.json';
import commonEN from '../../public/locales/en/common.json';
import commonJA from '../../public/locales/ja/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'vi',
  debug: false,
  locales: ['en', 'vi', 'ja'],
  defaultLocale: 'vi',
  defaultNS: ['common'],
  ns: ['common'],
  resources: {
    vi: {
      common: commonVI,
    },
    en: {
      common: commonEN,
    },
    ja: {
      common: commonJA,
    },
  },
});

export default i18n;
