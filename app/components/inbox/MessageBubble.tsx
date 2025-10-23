'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { mockUser } from './MessagesData';

const MessageBubble = ({ message }) => {
  const isOutgoing = message.isOutgoing;
  const bubbleClasses = isOutgoing
    ? 'bg-indigo-500 text-white self-end rounded-br-none'
    : 'bg-gray-100 text-gray-800 self-start rounded-tl-none';

  if (message.isProduct) {
    return (
      <div className="flex items-end space-x-3 w-full mb-4">
        <img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src={message.avatarUrl} alt={message.senderName} />
        <div className="flex flex-col items-start w-full">
          <div className="bg-white border border-gray-200 p-3 rounded-xl shadow-md max-w-lg lg:max-w-md">
            <div className="flex items-center space-x-3 mb-2 border-b pb-2">
              <img src="https://placehold.co/64x40/94A3B8/fff?text=Product" alt="Product" className="w-16 h-10 object-cover rounded-md flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 uppercase font-medium">{message.productLocation}</p>
                <p className="text-sm font-semibold text-gray-800 truncate leading-tight">{message.productText}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-1">
              <div className="flex items-center text-yellow-500 text-sm">
                <Star className="w-4 h-4 fill-yellow-500" />
                <span className="font-bold ml-1 mr-2">{message.productRating}.0</span>
              </div>
              <p className="text-lg font-bold text-indigo-600">{message.productPrice}</p>
            </div>
          </div>
          <p className="text-xs mt-1 ml-1 text-gray-400">{message.time}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex w-full mb-3 ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
      {!isOutgoing && <img className="w-8 h-8 rounded-full object-cover mr-3 flex-shrink-0 self-end" src={message.avatarUrl} alt={message.senderName} />}
      <div className={`flex flex-col max-w-xs md:max-w-md lg:max-w-lg ${isOutgoing ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 rounded-2xl shadow-sm ${bubbleClasses}`}>
          <p className="text-sm">{message.content}</p>
        </div>
        <p className={`text-xs mt-1 text-gray-500 ${isOutgoing ? 'mr-1' : 'ml-1'}`}>{message.time}</p>
      </div>
      {isOutgoing && <img className="w-8 h-8 rounded-full object-cover ml-3 flex-shrink-0 self-end" src={mockUser.avatarUrl} alt={mockUser.name} />}
    </div>
  );
};

export default MessageBubble;
