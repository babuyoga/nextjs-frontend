'use client';
import React from 'react';

type SettingsPanelProps = {
  virtualNumber: {
    number: string;
    createdAt: string;
    status: string;
  };
  onDeleteNumber: () => void;
  onGoToSubscription: () => void;
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  virtualNumber,
  onDeleteNumber,
  onGoToSubscription,
}) => {
  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Virtual Number Info */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Virtual Number</h3>
        <p><span className="font-medium">Number:</span> {virtualNumber.number}</p>
        <p><span className="font-medium">Created At:</span> {virtualNumber.createdAt}</p>
        <p><span className="font-medium">Status:</span> {virtualNumber.status}</p>
        <button
          className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onDeleteNumber}
        >
          Delete Number
        </button>
      </div>

      {/* Message Retention Policy */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Message Retention</h3>
        <p>Auto Delete after 30 days.</p>
        <p className="text-sm text-gray-500">
          Contact support if you want messages deleted immediately.
        </p>
      </div>

      {/* Subscription Button */}
      <div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={onGoToSubscription}
        >
          Go to Subscription
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
