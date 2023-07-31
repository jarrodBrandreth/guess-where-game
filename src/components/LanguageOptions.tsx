import { useLanguageContext } from '../hooks/useLanguageContext';
import Toolbar from './Toolbar';
import CheckmarkIcon from './icons/CheckmarkIcon';

interface Props {
  showing: boolean;
}

export default function LanguageOptions({ showing }: Props) {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguageContext();

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
              onClick={() => changeLanguage(lng)}
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
