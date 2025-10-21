// components/NotificationItem.tsx

import React from 'react';

// Define the shape of the notification data
interface NotificationItemProps {
  title: string;
  time: string;
  description: string;
  isActionable: boolean; // Indicates if 'Accept'/'Decline' buttons are present
}

/**
 * Renders a single notification item within the context panel.
 */
const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  time,
  description,
  isActionable = false,
}) => {
  return (
    <div className="border-b border-gray-100 bg-white p-5 mx-3 rounded-md">
      {/* Header Row: Icon, Title, Time, Close Button */}
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center space-x-2">
          {/* Mock Icon (The image shows a location pin/map marker icon) */}
          <span className="text-sm text-green-600">
            {/* Replace with a real icon library component (e.g., Lucide, Heroicons) */}
            📍 
          </span>
          <p className="text-sm font-semibold text-gray-800">{title}</p>
          <span className="text-xs text-gray-500">• {time}</span>
        </div>
        {/* Close Button */}
        <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
          &times; 
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-2">{description}</p>

      {/* Action Buttons (only for actionable notifications) */}
      {isActionable && (
        <div className="flex space-x-4 text-sm font-medium">
          <button className="text-green-600 hover:text-green-700">
            Accept
          </button>
          <button className="text-gray-600 hover:text-gray-700">
            Decline
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;