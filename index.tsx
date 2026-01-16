import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import './app/globals.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);