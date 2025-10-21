// SidebarItem.tsx

import Link from 'next/link';
import { SidebarItemType } from './SidebarData';

// Define the props for the component
type SidebarItemProps = SidebarItemType & {
  isPrimary?: boolean; // Use for the main blue icons (top/logo)
  isAccent?: boolean; // Use for the teal/cyan icons (bottom)
};

export function SidebarItem({ name, icon: Icon, href, isActive, isPrimary = false, isAccent = false }: SidebarItemProps) {
  // Determine the base and hover colors based on properties
  const baseColor = isActive ? 'text-white bg-blue-600' : isAccent ? 'text-teal-400' : 'text-slate-500';
  const hoverColor = isActive ? 'text-white bg-blue-600': isAccent ? 'hover:text-teal-600' : 'hover:bg-gray-100 hover:text-blue-600';
  const padding = isPrimary ? 'p-2' : 'p-3'; // A slightly smaller padding for the top item in the image

  return (
    <Link href={href} passHref>
      <div
        className={`
          flex items-center justify-center 
          rounded-xl cursor-pointer transition-colors duration-150
          ${padding} my-2 mx-auto w-fit h-fit
          ${baseColor} ${hoverColor}
        `}
        title={name} // Tooltip for accessibility and user experience
      >
        <Icon className="w-5 h-5" strokeWidth={2.5} />
      </div>
    </Link>
  );
}