import Dropdown from './Dropdown/Dropdown';
import LanguageIcon from './icons/LanguageIcon';
import DropdownOption from './Dropdown/DropdownOption';
import { useLanguageContext } from '../hooks/useLanguageContext';
import { useTranslation } from 'react-i18next';
import NavButton from './NavButton';

interface Props {
  isMobileSize?: boolean;
}

export default function LanguageSwitcher({ isMobileSize }: Props) {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguageContext();
  const { t } = useTranslation();

  return (
    <Dropdown
      Button={NavButton}
      Icon={LanguageIcon}
      label={t('language')}
      selected={currentLanguage}
      dropDownPositioning={isMobileSize ? 'bottom-left' : 'bottom-right'}
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
