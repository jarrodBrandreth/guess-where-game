import { SvgIconProps } from '../../types';

export default function ExpandMoreIcon({ className = '', size = '20px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
    </svg>
  );
}
