import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageContext Provider');
  }
  return context;
}
