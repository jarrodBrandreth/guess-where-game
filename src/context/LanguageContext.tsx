import { createContext, useState } from 'react';
import i18n from '../../i18n';
import { SupportedLanguagesType } from '../types';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lng: string) => void;
  supportedLanguages: SupportedLanguagesType;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.resolvedLanguage ?? 'en');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const supportedLanguages = {
    en: { nativeName: 'english' },
    sv: { nativeName: 'svenska' },
  };

  const value = {
    currentLanguage,
    changeLanguage,
    supportedLanguages,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
