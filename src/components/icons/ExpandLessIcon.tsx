import { SvgIconProps } from '../../types';

export default function ExpandLessIcon({ className = '', size = '20px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" />
    </svg>
  );
}
