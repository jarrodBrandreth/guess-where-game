import LogoIcon from './icons/LogoIcon';

export default function Logo() {
  return (
    <h1 className="top-1/2 flex items-center gap-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <LogoIcon className="fill-pop" />
      <span className="text-lg font-bold uppercase leading-none md:text-xl">Guess Where</span>
    </h1>
  );
}
