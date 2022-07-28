
import React from 'react';
import {createRoot} from 'react-dom/client';

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <React.StrictMode>
    <h3>hello react</h3>
  </React.StrictMode>
)