'use client';
import React from 'react';
import NotificationItem from '@/app/components/contextualpanel/NotificationItem';

const mockNotifications = [
  {
    title: 'Enjoy using the app?',
    time: 'Now',
    description: 'Description about the notification',
    isActionable: true,
  },
  // ...more items
];

const NotificationPanel: React.FC = () => {
  return (
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
  );
};

export default NotificationPanel;
