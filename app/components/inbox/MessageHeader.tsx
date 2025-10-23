'use client';
import React from 'react';
import { Heart, MoreVertical } from 'lucide-react';

const MessageHeader = ({ conversation, onBack }) => (
  <div className="p-4 border-b border-gray-200 h-20 shadow-sm flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <button onClick={onBack} className="lg:hidden p-1 mr-2 text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <p className="text-lg font-bold text-gray-800">{conversation?.name || 'Messages'}</p>
    </div>
    <div className="flex space-x-4 text-gray-500">
      <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition duration-150" />
      <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-800 transition duration-150" />
    </div>
  </div>
);

export default MessageHeader;
