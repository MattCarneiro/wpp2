import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ConversationPage from './pages/ConversationPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:name/:phoneNumber" element={<ConversationPage />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}
