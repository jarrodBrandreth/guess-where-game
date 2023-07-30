import { useTranslation } from 'react-i18next';
import LanguageIcon from './icons/LanguageIcon';

interface Props {
  currentLanguage: string;
  showing: boolean;
  onClick: () => void;
}

export default function LanguageButton({ currentLanguage, showing, onClick }: Props) {
  const { t } = useTranslation();
  const ariaLabel = showing ? t('hideLanguageOptions') : t('showLanguageOptions');
  return (
    <button
      aria-label={ariaLabel}
      className={`group relative px-2 outline-none hover:text-pop focus:text-pop ${
        showing ? 'text-pop' : ''
      }`}
      onClick={onClick}
    >
      <LanguageIcon />
      <span
        className={`pointer-events-none absolute left-2/4 top-full -translate-x-1/2 text-xs uppercase group-hover:opacity-0 group-focus:opacity-0 ${
          showing ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      >
        {currentLanguage}
      </span>
      <span
        className={`pointer-events-none absolute left-2/4 top-full -translate-x-1/2 text-sm  md:text-base ${
          showing ? 'opacity-0' : 'opacity-0 group-hover:opacity-100 group-focus:opacity-100'
        }`}
        aria-hidden
      >
        {t('language')}
      </span>
    </button>
  );
}
