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
        className={`flex items-center justify-start gap-1 rounded-md border-2 border-neutral-300 px-2 py-1 outline-none hover:border-pop focus:border-pop dark:border-neutral-600 dark:hover:border-pop dark:focus:border-pop ${
          showing ? 'border-pop' : ''
        }`}
        aria-labelledby="dropdownSelection"
        onClick={onClick}
      >
        <span>{selected}</span>
        <span className="flex items-start" aria-hidden>
          {showing ? <DropUpIcon /> : <DropDownIcon />}
        </span>
      </button>
    </>
  );
}
