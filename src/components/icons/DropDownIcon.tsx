import { SvgIconProps } from '../../types';

export default function DropDownIcon({ className = '', size = '20px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M480-360 280-559h400L480-360Z" />
    </svg>
  );
}
