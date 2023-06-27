import { createContext, useState, useEffect, useCallback } from 'react';
import { ColorTheme } from '../types';

// check local storage for theme or use OS's preference
const initialTheme = () => {
  const localStorageTheme: ColorTheme | null = localStorage.theme;
  if (localStorageTheme) {
    // extra check incase local storage theme key is not properly set
    return localStorageTheme === 'dark' ? 'dark' : 'light';
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

// add classname and update local storage based on theme
const updateTheme = (theme: ColorTheme) => {
  const root = window.document.documentElement;
  theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
  localStorage.setItem('theme', theme);
};

interface ThemeContextType {
  theme: ColorTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ColorTheme>(initialTheme);

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    [],
  );

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
