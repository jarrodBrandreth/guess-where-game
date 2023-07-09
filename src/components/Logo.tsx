import LogoIcon from './icons/LogoIcon';

export default function Logo() {
  return (
    <h1 className="flex items-end gap-1 ">
      <span className="text-2xl font-medium leading-none">Guess Where</span>
      <LogoIcon className="fill-pop-600 dark:fill-pop-500" />
    </h1>
  );
}
