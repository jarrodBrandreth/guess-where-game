import { SvgIconProps } from '../../types';

export default function MapIcon({ className = '', size = '30px' }: SvgIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="m612-94-263-93-170 69q-30 14-57-3.5T95-173v-558q0-21 12-38t32-24l210-73 263 92 169-69q30-13 57.5 4t27.5 51v565q0 20-12.5 34.5T822-168L612-94Zm-34-112v-484l-196-66v484l196 66Zm60 0 133-43v-492l-133 51v484Zm-449-15 133-51v-484l-133 44v491Zm449-469v484-484Zm-316-66v484-484Z" />
    </svg>
  );
}