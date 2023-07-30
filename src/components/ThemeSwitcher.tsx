import LightIcon from './icons/LightIcon';
import DarkIcon from './icons/DarkIcon';
import { useThemeContext } from '../hooks/useThemeContext';
import NavigationButton from './NavigationButton';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  const darkMode = theme === 'dark';
  const ThemeIcon = darkMode ? LightIcon : DarkIcon;

  return <NavigationButton Icon={ThemeIcon} label="theme" onClick={toggleTheme} />;
}
