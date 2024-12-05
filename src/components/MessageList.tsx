import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';

export default function MessageList({ messages }: { messages: any[] }) {
  const [visibleMessages, setVisibleMessages] = useState(50);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const loadMoreMessages = () => {
    setVisibleMessages(prev => Math.min(prev + 50, messages.length));
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 space-y-4">
        {visibleMessages < messages.length && (
          <button
            onClick={loadMoreMessages}
            className="w-full bg-white text-[#00a884] py-2 rounded-lg hover:bg-gray-100 transition-colors shadow text-sm sm:text-base"
          >
            Ver mensagens mais antigas
          </button>
        )}
        {messages.slice(0, visibleMessages).map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
