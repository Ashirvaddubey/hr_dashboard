import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Starting application...');

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found! Add <div id="root"></div> to your HTML');
}

const root = createRoot(container);

try {
  console.log('Rendering app...');
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error rendering app:', error);
}
