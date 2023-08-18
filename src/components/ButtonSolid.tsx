interface Props {
  content: React.ReactNode;
  size?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
  squared?: boolean;
  backgroundColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonSolid({
  content,
  size = 'text-base',
  squared = false,
  backgroundColor = 'bg-green-700',
  onClick,
}: Props) {
  return (
    <button
      className={`flex h-fit w-fit items-center justify-center ${
        squared ? 'rounded' : 'rounded-full'
      } ${backgroundColor} px-2.5 py-1.5 ${size} text-neutral-50 hover:opacity-70`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
