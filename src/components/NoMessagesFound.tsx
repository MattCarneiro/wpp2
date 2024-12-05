import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NoMessagesFound({ name, phoneNumber }: { name: string; phoneNumber: string }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#efeae2]">
      <header className="bg-[#00a884] text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-6 w-6 cursor-pointer" />
          </Link>
          <h1 className="text-lg font-semibold truncate">{phoneNumber}</h1>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-[#00a884] mb-4">Nenhuma mensagem encontrada</h2>
          <p className="text-gray-600 mb-6">
            Não há mensagens para o número {phoneNumber} na instância "{name}".
          </p>
          <Link to="/" className="inline-flex items-center justify-center bg-[#00a884] text-white px-4 py-2 rounded-md hover:bg-[#008c6e] transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
