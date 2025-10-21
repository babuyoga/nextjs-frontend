// components/ContextPanel.tsx

import React from 'react';
import NotificationItem from '@/app/components/contextualpanel/NotificationItem'; // Import the data
import ContextPanelTopIcon from './ContextPanelTopIcon';

// Mock data for the notifications to display
const mockNotifications = [
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: true,
  },
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: false, // Non-actionable item
  },
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: false,
  },
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: false,
  },
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: false,
  },
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: true,
  },
];

/**
 * The main component for the right-hand side drawer/context panel.
 * It is fixed to the right and covers the full height.
 */
const ContextPanel: React.FC = () => {
  return (
    // Fixed positioning on the right side
    <div className="fixed top-0 right-0 h-full w-80 bg-gray-100/50 shadow-xl z-50 overflow-y-auto">
      {/* Top Bar Section */}
      <div className="flex justify-end items-center pt-6 p-3 bg-white border-b border-gray-200">
        
        {/* Left Side Icons */}
      <ContextPanelTopIcon/>

      
      </div>

      {/* Clear All Header */}
      <div className="p-3 text-right">
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Clear all
        </button>
      </div>

      {/* Notifications List */}
      <div className="gap-1 flex flex-col">
        {mockNotifications.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            time={notification.time}
            description={notification.description}
            isActionable={notification.isActionable}
          />
        ))}
      </div>
    </div>
  );
};

export default ContextPanel;