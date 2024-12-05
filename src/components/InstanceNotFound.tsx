import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function InstanceNotFound({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#efeae2] p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-[#00a884] mb-4">Instância não encontrada</h1>
        <p className="text-gray-600 mb-6">
          Desculpe, não foi possível encontrar a instância "{name}" no sistema.
        </p>
        <Link to="/" className="inline-flex items-center justify-center bg-[#00a884] text-white px-4 py-2 rounded-md hover:bg-[#008c6e] transition-colors">
          <Home className="mr-2" size={20} />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
