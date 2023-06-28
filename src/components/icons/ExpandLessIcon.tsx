import { SvgIconProps } from '../../types';

export default function ExpandLessIcon({ className = '', size = '16px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m283-322-67-67 264-264 264 263-67 67-197-197-197 198Z" />
    </svg>
  );
}
