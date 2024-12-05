import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ConversationViewer from '../components/ConversationViewer';
import LoadingScreen from '../components/LoadingScreen';
import InstanceNotFound from '../components/InstanceNotFound';
import NoMessagesFound from '../components/NoMessagesFound';

export default function ConversationPage() {
  const { name, phoneNumber } = useParams();
  const [messages, setMessages] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name || !phoneNumber) return;

    (async () => {
      try {
        const res = await fetch(`/${name}/${phoneNumber}/messages`);
        if (!res.ok) {
          if (res.status === 404) {
            setMessages(null);
            return;
          }
          throw new Error('Error fetching messages');
        }
        const data = await res.json();
        setMessages(data.messages);
      } catch (err) {
        console.error(err);
        setError('Error fetching messages');
      }
    })();
  }, [name, phoneNumber]);

  if (error) {
    return <InstanceNotFound name={name!} />;
  }

  if (messages === null) {
    return <LoadingScreen />;
  }

  if (messages.length === 0) {
    return <NoMessagesFound name={name!} phoneNumber={phoneNumber!} />;
  }

  return <ConversationViewer name={name!} phoneNumber={phoneNumber!} messages={messages} />;
}
