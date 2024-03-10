import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found in the document.');
}
