import { CountryType } from '../types';
import Country from './Country';

interface Props {
  countries: CountryType[];
}

export default function CountriesResults({ countries }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10">
      {countries.map((c) => (
        <Country key={c.id} id={c.id} name={c.name} capitals={c.capitals} flagSrc={c.flag} />
      ))}
    </div>
  );
}
