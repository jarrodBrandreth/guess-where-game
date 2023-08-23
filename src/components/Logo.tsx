import { Link } from 'react-router-dom';
import LogoIcon from './icons/LogoIcon';

export default function Logo() {
  return (
    <Link className="flex items-center gap-0.5" to="/">
      <span className="text-green-700">
        <LogoIcon size="26px" />
      </span>
      <h1 className="text-xl font-bold uppercase">Guess Where</h1>
    </Link>
  );
}
