'use client';
import React from 'react';
import { Plus, Send } from 'lucide-react';

const MessageInput = () => (
  <div className="p-4 bg-white border-t border-gray-200 flex items-center space-x-3">
    <button className="p-2 hidden text-indigo-500 hover:text-indigo-600 transition duration-150 rounded-full bg-indigo-50 hover:bg-indigo-100">
      <Plus className="w-5 h-5" />
    </button>
    <div className="flex-1 relative">
      <input type="text" placeholder="Type your message here" className="w-full pr-12 py-3 pl-4 border border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
    </div>
    <button className="p-2 text-indigo-500 hover:text-indigo-600 transition duration-150">
      <Send className="w-5 h-5 transform rotate-45 -mt-1" />
    </button>
  </div>
);

export default MessageInput;
