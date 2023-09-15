import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CharacterInfo} from './pages/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
