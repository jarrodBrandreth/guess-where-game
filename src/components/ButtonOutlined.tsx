interface Props {
  content: React.ReactNode;
  size?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
  squared?: boolean;
  textColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonOutlined({
  content,
  size = 'text-base',
  squared = false,
  textColor = 'text-green-700 dark:text-green-600',
  onClick,
}: Props) {
  return (
    <button
      className={`flex h-fit w-fit items-center justify-center ${
        squared ? 'rounded' : 'rounded-full'
      } ${textColor} border border-inherit bg-transparent px-2.5 py-1.5 ${size} hover:opacity-70`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
