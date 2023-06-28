import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import LanguageIcon from '../icons/LanguageIcon';
import ButtonRoundOutline from '../ButtonRoundOutline';
import LanguageSelect from './LanguageSelect';

export function LanguageSwitcher() {
  const [showOptions, setShowOptions] = useState(false);
  const { t } = useTranslation();
  const containerRef = useOutsideClick(() => setShowOptions(false));

  return (
    <div ref={containerRef} className="relative w-fit">
      <LanguageSelect show={showOptions} close={() => setShowOptions(false)} />
      <ButtonRoundOutline onClick={() => setShowOptions((prev) => !prev)}>
        <LanguageIcon />
        <span className="mx-1 md:sr-only">{t('showLanguageOptions')}</span>
      </ButtonRoundOutline>
    </div>
  );
}
