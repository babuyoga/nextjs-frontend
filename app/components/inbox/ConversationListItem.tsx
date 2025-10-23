'use client';
import React from 'react';

const ConversationListItem = ({ conversation, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center p-3 sm:py-3 sm:px-4 space-x-3 w-full text-left transition duration-150 ease-in-out ${
      isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'
    }`}
  >
    <div className="relative flex-shrink-0">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={conversation.avatarUrl}
        alt={conversation.name}
      />
      {conversation.unreadCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
          {conversation.unreadCount}
        </span>
      )}
    </div>
    <div className="flex-1 min-w-0 pr-2">
      <div className="flex justify-between items-start">
        <p className="text-sm font-semibold text-gray-800 truncate">{conversation.name}</p>
        <p className="text-xs text-gray-500 flex-shrink-0 ml-4">{conversation.time}</p>
      </div>
      <p className="text-xs text-gray-500 truncate mt-0.5">{conversation.lastMessage}</p>
    </div>
  </button>
);

export default ConversationListItem;
