import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// options for languageDetector
const options = {
  order: ['localStorage'],
  // keys or params to lookup language from
  lookupLocalStorage: 'i18nextLng',
  // cache user language in localstorage
  caches: ['localStorage'],
  // optional htmlTag with lang attribute
  htmlTag: document.documentElement,
};

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // add to ns when adding a new namespace json file in locales
    ns: ['common', 'capitals', 'countries', 'country'],
    defaultNS: 'common',
    fallbackNS: 'common',
    detection: options,
    supportedLngs: ['en', 'sv'],
    load: 'languageOnly',
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
