'use client'
import React from 'react';

import { ContextPanelTopIcons, ContextPanelItemType } from '@/app/components/contextualpanel/ContextPanelData';

/**
 * Renders a single interactive icon button based on ContextPanelItemType.
 */
const IconItem: React.FC<ContextPanelItemType> = ({ name, icon: Icon, isActive, href }) => {
  const baseClasses =
    'w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200';
  const activeClasses = isActive
    ? 'bg-blue-600 text-white shadow-lg shadow-blue-400/50'
    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600';

  return (
    <a
      href={href}
      title={name}
      className={`${baseClasses} ${activeClasses} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      onClick={(e) => {
        e.preventDefault();
        console.log(`Clicked on ${name}, navigating to ${href}`);
      }}
    >
      <Icon className="w-5 h-5" strokeWidth={1} />
    </a>
  );
};

/**
 * Displays the top icon panel using the imported data.
 */
const ContextPanelTopIcon: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl h-full w-full">
     
      <div className="flex w-full h-full justify-between text-black">
        {ContextPanelTopIcons.map((item) => (
          <IconItem key={item.name} {...item} />
        ))}

      
      </div>
    
    </div>
  );
};

export default ContextPanelTopIcon;
