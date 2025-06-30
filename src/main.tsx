import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import SuperApp from './bootstrap/SuperApp.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuperApp />
    </BrowserRouter>
  </React.StrictMode>
)
