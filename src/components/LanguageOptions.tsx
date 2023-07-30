import { SupportedLanguagesType } from '../types';
import Toolbar from './Toolbar';
import CheckmarkIcon from './icons/CheckmarkIcon';

const supportedLanguages: SupportedLanguagesType = {
  en: { nativeName: 'english' },
  sv: { nativeName: 'svenska' },
};

interface Props {
  currentLanguage: string;
  showing: boolean;
  chooseLanguage: (lng: string) => void;
}

export default function LanguageOptions({ currentLanguage, showing, chooseLanguage }: Props) {
  return (
    <Toolbar positioning="bottom-right" additionalStyles={showing ? 'not-sr-only' : 'sr-only'}>
      <ul className="flex flex-col gap-2.5">
        {Object.keys(supportedLanguages).map((lng) => (
          <li key={lng} className="relative pr-6">
            <button
              tabIndex={showing ? 0 : -1}
              className={`capitalize outline-none ${
                lng === currentLanguage ? '' : 'hover:text-pop  focus:text-pop'
              }`}
              onClick={() => chooseLanguage(lng)}
              disabled={lng === currentLanguage}
            >
              {supportedLanguages[lng].nativeName}
            </button>
            {lng === currentLanguage && (
              <CheckmarkIcon className="absolute right-0 top-2/4 -translate-y-1/2 fill-pop" />
            )}
          </li>
        ))}
      </ul>
    </Toolbar>
  );
}
