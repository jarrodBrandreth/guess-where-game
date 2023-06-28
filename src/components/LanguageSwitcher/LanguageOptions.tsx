import { SupportedLanguagesType } from '../../types';
import RadioCheckedIcon from '../icons/RadioCheckedIcon';
import i18n from '../../../i18n';

const supportedLanguages: SupportedLanguagesType = {
  en: { nativeName: 'english' },
  sv: { nativeName: 'svenska' },
};

const chooseLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

interface LanguageOptionsProps {
  show: boolean;
}

export default function LanguageOptions({ show }: LanguageOptionsProps) {
  const current = i18n.resolvedLanguage;
  return (
    <ul className="border-b-2 border-neutral-500/50 pb-3.5 dark:border-neutral-200/50">
      {Object.keys(supportedLanguages).map((lng) => (
        <li key={lng} className="flex items-center justify-start ">
          <button
            tabIndex={show ? 0 : -1}
            className={`m-1 capitalize outline-none ${
              lng === current
                ? ''
                : 'hover:text-pop-600  focus:text-pop-600 dark:hover:text-pop-500  dark:focus:text-pop-500'
            }`}
            onClick={() => chooseLanguage(lng)}
            disabled={lng === current}
          >
            {supportedLanguages[lng].nativeName}
          </button>
          {lng === current && <RadioCheckedIcon className="fill-pop-600 dark:fill-pop-500" />}
        </li>
      ))}
    </ul>
  );
}
