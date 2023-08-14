import { countriesFilters } from './constants';

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
  // cca3 country code as an id
  id: string;
  name: string;
  capitals: string[];
  region: string;
  subregion: string;
  flag: string;
  flagDescription: string;
}

export type CountryDetails = {
  region: string;
  subregion: string;
  mapLink: string;
  population: number;
  coatOfArms: string | undefined;
  borders: string[];
  carSide: string;
};

export type CountriesFilters = typeof countriesFilters;
export type RegionFilter = keyof CountriesFilters;
export type SubregionFilter = CountriesFilters[RegionFilter][number];

export type CountryResponse = {
  name: {
    common: string;
    official: string;
    nativeName: {
      swe: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};
