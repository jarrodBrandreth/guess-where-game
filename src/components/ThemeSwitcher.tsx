import LightIcon from './icons/LightIcon';
import DarkIcon from './icons/DarkIcon';
import { useThemeContext } from '../hooks/useThemeContext';
import { useTranslation } from 'react-i18next';
import NavButton from './NavButton';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  const { t } = useTranslation();
  const darkMode = theme === 'dark';
  const ThemeIcon = darkMode ? LightIcon : DarkIcon;

  return <NavButton Icon={ThemeIcon} label={t('theme')} onClick={toggleTheme} />;
}
