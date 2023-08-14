import DropDownIcon from '../icons/DropDownIcon';
import DropUpIcon from '../icons/DropUpIcon';

interface Props {
  label: string;
  selected: string;
  showing: boolean;
  onClick: () => void;
}

export default function TextBoxButton({ label, selected, showing, onClick }: Props) {
  return (
    <>
      <span id="dropdownSelection" className="font-semibold">
        {label}:
      </span>
      <button
        className={`flex min-w-[140px] items-center justify-start gap-1 rounded-md border-2 border-neutral-300 px-2 py-1 outline-none hover:border-pop focus:border-pop dark:border-neutral-600 dark:hover:border-pop dark:focus:border-pop ${
          showing ? 'border-pop' : ''
        }`}
        aria-labelledby="dropdownSelection"
        onClick={onClick}
      >
        <span className="flex-grow">{selected}</span>
        <span className="pointer-events-none flex items-center" aria-hidden>
          {showing ? <DropUpIcon /> : <DropDownIcon />}
        </span>
      </button>
    </>
  );
}
