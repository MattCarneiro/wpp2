import React from 'react';
import MessageList from './MessageList';
import Header from './Header';

interface ConversationViewerProps {
  name: string;
  phoneNumber: string;
  messages: any[];
}

export default function ConversationViewer({ name, phoneNumber, messages }: ConversationViewerProps) {
  return (
    <div className="flex flex-col h-screen bg-[#efeae2]">
      <Header phoneNumber={phoneNumber} />
      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
