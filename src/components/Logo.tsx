import LogoIcon from './icons/LogoIcon';

export default function Logo() {
  return (
    <h1 className="flex items-center gap-1">
      <LogoIcon className="fill-pop" />
      <span className="text-lg font-bold uppercase leading-none md:text-xl">Guess Where</span>
    </h1>
  );
}
