import CheckmarkIcon from '../icons/CheckmarkIcon';

interface Props {
  label: string;
  currentSelected: boolean;
  onClick: () => void;
}

export default function DropdownOption({ label, currentSelected, onClick }: Props) {
  return (
    <li className="">
      <button
        className={`relative flex w-full items-center justify-between p-2 py-1.5 outline-none ${
          currentSelected
            ? ''
            : 'hover:bg-neutral-200  focus:bg-neutral-200  dark:hover:bg-neutral-500 dark:focus:bg-neutral-500'
        }`}
        disabled={currentSelected}
        onClick={onClick}
      >
        <span className="mr-8 capitalize">{label}</span>
        <span className={`${currentSelected ? 'visible' : 'invisible'}  text-pop`}>
          <CheckmarkIcon />
        </span>
      </button>
    </li>
  );
}
