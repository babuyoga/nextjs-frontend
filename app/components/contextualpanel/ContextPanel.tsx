'use client';
import React, { useState } from 'react';
import ContextPanelTopIcon from '@/app/components/contextualpanel/ContextPanelTopIcon';
import { panels } from '@/app/components/contextualpanel/panels';

const ContextPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Notifications');

  const PanelComponent = panels[activeTab];

  // Mock virtual number
  const virtualNumber = {
    number: '+1 234 567 890',
    createdAt: '2025-10-01',
    status: 'Active',
  };

  const panelProps: Record<string, any> = {
    Settings: {
      virtualNumber,
      onDeleteNumber: () => alert('Delete number clicked'),
      onGoToSubscription: () => alert('Go to Subscription clicked'),
    },
    Support: {
      onSubmit: (msg: string) => alert(`Message sent: ${msg}`),
    },
    Notifications: {},
  };

  return (
    <div className="top-0 right-0 h-full w-80 bg-gray-100/50 shadow-xl z-50 overflow-y-auto">
      {/* Top icons */}
      <div className="flex justify-end items-center pt-6 p-3 bg-white border-b border-gray-200">
        <ContextPanelTopIcon setActiveTab={setActiveTab} />
      </div>

      {/* Clear all for notifications */}
      {activeTab === 'Notifications' && (
        <div className="p-3 text-right">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Clear all
          </button>
        </div>
      )}

      {/* Dynamic Panel */}
      <div className="gap-1 flex flex-col">
        {PanelComponent ? <PanelComponent {...panelProps[activeTab]} /> : null}
      </div>
    </div>
  );
};

export default ContextPanel;
