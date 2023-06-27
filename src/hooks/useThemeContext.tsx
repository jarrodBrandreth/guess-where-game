import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a Theme Provider');
  }
  return context;
}
