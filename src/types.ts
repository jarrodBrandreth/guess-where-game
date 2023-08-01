export type ColorTheme = 'light' | 'dark';

export interface SvgIconProps {
  size?: string;
  className?: string;
  fill?: string;
}

export interface SupportedLanguagesType {
  [key: string]: {
    nativeName: string;
  };
}

export interface CountryType {
  name: string;
  capital: string[];
  region: string;
  subRegion: string;
  flag: string;
  flagDescription: string;
}
