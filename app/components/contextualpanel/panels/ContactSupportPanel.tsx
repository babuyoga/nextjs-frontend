'use client';
import React, { useState } from 'react';

type ContactSupportPanelProps = {
  onSubmit: (message: string) => void;
};

const ContactSupportPanel: React.FC<ContactSupportPanelProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  return (
    <div className="p-4 flex flex-col gap-6">
      <h3 className="font-semibold text-gray-700 mb-2">Contact Support</h3>
      
      <p className="text-gray-600 mb-2">
        Have a question or issue? Send us a message and we'll get back to you shortly.
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        className="w-full p-2 border border-gray-300 rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        disabled={!message.trim()}
        onClick={() => {
          onSubmit(message);
          setMessage('');
        }}
      >
        Send Message
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Our support team usually responds within 24 hours.
      </p>
    </div>
  );
};

export default ContactSupportPanel;
