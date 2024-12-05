import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ phoneNumber }: { phoneNumber: string }) {
  const navigate = useNavigate();
  return (
    <header className="bg-[#00a884] text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center">
        <ArrowLeft className="h-6 w-6 mr-4 cursor-pointer" onClick={() => navigate('/')} />
        <h1 className="text-lg font-semibold truncate">{phoneNumber}</h1>
      </div>
    </header>
  );
}
