
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Button} from '@ui/index';

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <React.StrictMode>
    <h3>hello react</h3>
    <Button theme='warning'>smile button</Button>
  </React.StrictMode>
)