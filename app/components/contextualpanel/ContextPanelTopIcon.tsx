'use client';
import React from 'react';
import { ContextPanelTopIcons, ContextPanelItemType } from './ContextPanelData';

const IconItem: React.FC<ContextPanelItemType & { setActiveTab?: (tab: string) => void }> = ({
  name,
  icon: Icon,
  href,
  isActive,
  setActiveTab,
}) => {
  const baseClasses =
    'w-10 h-11 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200';
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
        if (setActiveTab) setActiveTab(name);
        console.log(`Clicked on ${name}, navigating to ${href}`);
      }}
    >
      <Icon className="w-5 h-5" strokeWidth={1} />
    </a>
  );
};

const ContextPanelTopIcon: React.FC<{ setActiveTab?: (tab: string) => void }> = ({ setActiveTab }) => {
  return (
    <div className="bg-white rounded-2xl h-full w-full">
      <div className="flex w-full h-full justify-between text-black">
        {ContextPanelTopIcons.map((item) => (
          <IconItem key={item.name} {...item} setActiveTab={setActiveTab} />
        ))}
      </div>
    </div>
  );
};

export default ContextPanelTopIcon;
