import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { CountryProvider } from './context/CountriesContext.tsx';
import './styles/globals.css';

// import i18n (needs to be bundled)
import '../i18n.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <CountryProvider>
          <App />
        </CountryProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
