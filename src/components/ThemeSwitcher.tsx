import LightIcon from './icons/LightIcon';
import DarkIcon from './icons/DarkIcon';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../hooks/useThemeContext';
import ButtonRoundOutline from './ButtonRoundOutline';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  const { t } = useTranslation();
  const darkMode = theme === 'dark';
  const label = darkMode ? t('switchToLight') : t('switchToDark');
  return (
    <ButtonRoundOutline onClick={toggleTheme}>
      {darkMode ? <LightIcon /> : <DarkIcon />}
      <span className="mx-1 md:sr-only">{label}</span>
    </ButtonRoundOutline>
  );
}
