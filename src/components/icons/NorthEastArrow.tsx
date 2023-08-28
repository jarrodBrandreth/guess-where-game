import { SvgIconProps } from '../../types';

export default function NorthEastIcon({ className = '', size = '20px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z" />
    </svg>
  );
}
