import { SvgIconProps } from '../../types';

export default function DarkIcon({ className = '', size = '30px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M479.824-109q-155.177 0-263-107.824Q109-324.647 109-479.824 109-635 216.875-743.5T480-852h13q7 0 20 1-27 36-42 78.5T456-684q0 95.417 67.083 162.208Q590.167-455 686-455q45 0 88-13t78-38v24.915Q852-326 743.5-217.5 635-109 479.824-109Zm.176-94q89 0 158-52.5T728-378q-17 8-38.667 11.5Q667.667-363 648-365q-111.689-13-190.345-89.655Q379-531.311 365-649q-1-15.333 1.5-35.167Q369-704 379-731q-76 29-126 99.5T203-480q0 116.157 80.421 196.579Q363.843-203 480-203Zm-14-264Z" />
    </svg>
  );
}
