import Dropdown from './Dropdown/Dropdown';
import LanguageIcon from './icons/LanguageIcon';
import DropdownOption from './Dropdown/DropdownOption';
import { useLanguageContext } from '../hooks/useLanguageContext';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguageContext();
  const { t } = useTranslation();

  return (
    <Dropdown
      buttonStyle="icon"
      label={t('language')}
      selected={currentLanguage}
      Icon={LanguageIcon}
    >
      {Object.keys(supportedLanguages).map((lng) => (
        <DropdownOption
          key={lng}
          label={supportedLanguages[lng].nativeName}
          currentSelected={lng === currentLanguage}
          onClick={() => changeLanguage(lng)}
        />
      ))}
    </Dropdown>
  );
}
