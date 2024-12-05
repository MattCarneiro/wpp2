import React, { useState } from 'react';
import { Play, Pause, FileText } from 'lucide-react';

export default function Message({ message }: { message: any }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isOutgoing = message.key.fromMe;
  const messageContent = message.message.conversation || 
                         message.message.audioMessage || 
                         message.message.imageMessage || 
                         message.message.videoMessage || 
                         message.message.documentMessage;

  const renderMessageContent = () => {
    if (message.messageType === 'conversation') {
      return <p className="break-words">{messageContent}</p>;
    } else if (message.messageType === 'audioMessage') {
      return (
        <div className="flex items-center space-x-2">
          <button onClick={() => setIsPlaying(!isPlaying)} className="text-[#00a884]">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <div className="bg-gray-200 h-1 flex-1 rounded-full">
            {/* Progresso do áudio pode ser controlado via state, omitido aqui */}
            <div className="bg-[#00a884] h-1 w-0 rounded-full"></div>
          </div>
          {isPlaying && <audio src={messageContent.mediaUrl} autoPlay onEnded={() => setIsPlaying(false)} className="hidden" />}
        </div>
      );
    } else if (message.messageType === 'imageMessage') {
      return <img src={messageContent.mediaUrl} alt="Image" className="max-w-full h-auto rounded-lg" />;
    } else if (message.messageType === 'videoMessage') {
      return <video src={messageContent.mediaUrl} controls className="max-w-full h-auto rounded-lg" />;
    } else if (message.messageType === 'documentMessage') {
      return (
        <a href={messageContent.mediaUrl} download className="flex items-center space-x-2 text-[#00a884]">
          <FileText size={20} />
          <span className="truncate">Download Document</span>
        </a>
      );
    }
    return <p>Unsupported message type</p>;
  };

  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
      <div className={`inline-block p-2 rounded-lg max-w-[75%] sm:max-w-[70%] ${isOutgoing ? 'bg-[#dcf8c6]' : 'bg-white'}`}>
        {renderMessageContent()}
        <div className="text-xs text-gray-500 mt-1">{message.messageTimestamp}</div>
      </div>
    </div>
  );
}
