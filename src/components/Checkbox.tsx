interface Props {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

export default function Checkbox({ label, isChecked, onChange }: Props) {
  return (
    <div className="">
      <label
        className={`flex items-center justify-start gap-2 ${
          isChecked ? 'text-pop' : 'opacity-80'
        }  hover:cursor-pointer hover:text-pop`}
      >
        <input
          className="invisible relative block p-4 before:visible before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-sm before:border-2 checked:before:bg-pop hover:cursor-pointer "
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
}
