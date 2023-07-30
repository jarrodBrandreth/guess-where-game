import i18n from '../../i18n';
import { useCallback, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import LanguageButton from './LanguageButton';
import LanguageOptions from './LanguageOptions';

export default function LanguageSwitcher() {
  const [showOptions, setShowOptions] = useState(false);
  const closeOptions = useCallback(() => setShowOptions(false), []);
  const containerRef = useOutsideClick(closeOptions);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.resolvedLanguage);

  const chooseLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <div ref={containerRef} className="relative w-fit leading-none">
      <LanguageButton
        currentLanguage={currentLanguage ?? ''}
        showing={showOptions}
        onClick={() => setShowOptions((prev) => !prev)}
      />
      <LanguageOptions
        currentLanguage={currentLanguage ?? ''}
        showing={showOptions}
        chooseLanguage={chooseLanguage}
      />
    </div>
  );
}
