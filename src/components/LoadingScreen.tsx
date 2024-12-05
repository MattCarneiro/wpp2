import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-xl font-semibold text-gray-700">Carregando conversa...</p>
      </div>
    </div>
  );
}
