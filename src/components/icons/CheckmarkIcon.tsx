import { SvgIconProps } from '../../types';

export default function CheckmarkIcon({ className = '', size = '18px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
  );
}
