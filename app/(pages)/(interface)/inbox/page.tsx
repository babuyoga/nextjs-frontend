'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { mockConversations, mockMessages } from '@/app/components/inbox/MessagesData';
import ConversationListItem from '@/app/components/inbox/ConversationListItem';
import MessageHeader from '@/app/components/inbox/MessageHeader';
import MessageBubble from '@/app/components/inbox/MessageBubble';
import MessageInput from '@/app/components/inbox/MessageInput';

const MessagesPage = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const selectedConversation = useMemo(() => mockConversations.find(c => c.id === selectedConversationId), [selectedConversationId]);
  const filteredConversations = useMemo(() => !searchTerm ? mockConversations : mockConversations.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);
  const messagesForSelectedConversation = useMemo(() => mockMessages.filter(m => m.conversationId === selectedConversationId), [selectedConversationId]);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const showList = isLargeScreen || !selectedConversationId;
  const showPane = isLargeScreen || selectedConversationId;

  return (
    <div className="flex h-screen font-sans antialiased">
      <div className={`w-full lg:w-[360px] xl:w-[400px] border-r border-gray-200 bg-white flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out ${showList ? 'block' : 'hidden'} ${isLargeScreen ? 'lg:block' : ''}`}>
        <div className="p-6 pb-2">
          <h1 className="text-2xl font-extrabold text-gray-900">Messages</h1>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input type="text" placeholder="Search in conversations" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map(conversation => (
            <ConversationListItem key={conversation.id} conversation={conversation} isSelected={conversation.id === selectedConversationId} onClick={() => setSelectedConversationId(conversation.id)} />
          ))}
        </div>
      </div>

      <div className={`flex-1 flex flex-col bg-white overflow-hidden transition-transform duration-300 ease-in-out ${showPane ? 'block' : 'hidden'} ${isLargeScreen ? 'lg:block' : ''} ${isLargeScreen ? '' : 'absolute inset-0 z-10'}`}>
        {selectedConversation ? (
          <>
            <MessageHeader conversation={selectedConversation} onBack={() => setSelectedConversationId(null)} />
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messagesForSelectedConversation.map(message => <MessageBubble key={message.id} message={message} />)}
            </div>
            {/* <MessageInput /> */}
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-lg">
            Select a conversation to start chatting.
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
