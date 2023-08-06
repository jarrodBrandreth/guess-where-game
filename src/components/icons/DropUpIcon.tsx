import { SvgIconProps } from '../../types';

export default function DropUpIcon({ className = '', size = '20px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m280-400 200-201 200 201H280Z" />
    </svg>
  );
}
